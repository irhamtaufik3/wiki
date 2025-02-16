---
title: Install Union Validator
description: Guide for install union validator
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 4 Cores       |
| RAM	    | 8 GB          |
| Disk      | 256 GB        |

<i>Last update: 16-02-2025</i>


## Install Union Validator (testnet-9) di Ubuntu

1. Update paket dan install build tools

```
apt update
```

```
apt install curl git jq lz4 build-essential -y
```

```
apt upgrade -y
```
</br>

2. Install GO

```
sudo rm -rf /usr/local/go
```

```
curl -Ls https://go.dev/dl/go1.22.3.linux-amd64.tar.gz | sudo tar -xzf - -C /usr/local
```

```
eval $(echo 'export PATH=$PATH:/usr/local/go/bin' | sudo tee /etc/profile.d/golang.sh)
```

```
eval $(echo 'export PATH=$PATH:$HOME/go/bin' | tee -a $HOME/.profile)
```

3. Download binaries union

```
mkdir -p $HOME/.union/cosmovisor/genesis/bin
```

```
wget -O $HOME/.union/cosmovisor/genesis/bin/uniond https://snapshots.kjnodes.com/union-testnet/uniond-v0.25.0-linux-amd64
```

```
chmod +x $HOME/.union/cosmovisor/genesis/bin/uniond
```

```
ln -s $HOME/.union/cosmovisor/genesis $HOME/.union/cosmovisor/current -f
```

```
sudo ln -s $HOME/.union/cosmovisor/current/bin/uniond /usr/local/bin/uniond -f
```
</br>

4. Install Cosmovisor

```
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.6.0
```
</br>

5. Create service union (systemd)

```
sudo tee /etc/systemd/system/union-testnet.service > /dev/null << EOF
[Unit]
Description=union node service
After=network-online.target

[Service]
User=$USER
ExecStart=$(which cosmovisor) run start --home=$HOME/.union
Restart=on-failure
RestartSec=10
LimitNOFILE=65535
Environment="DAEMON_HOME=$HOME/.union"
Environment="DAEMON_NAME=uniond"
Environment="UNSAFE_SKIP_BACKUP=true"
Environment="PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:$HOME/.union/cosmovisor/current/bin"

[Install]
WantedBy=multi-user.target
EOF
```

```
systemctl daemon-reload
```

```
systemctl enable union-testnet.service
```
</br>

6. Inisialisasi node

- Workaround mandatory home argument
```
alias uniond='uniond --home=$HOME/.union/'
```

- Set node configuration
```
uniond config set client chain-id union-testnet-9
```

```
uniond config set client keyring-backend test
```

```
uniond config set client node tcp://localhost:17157
```

- Initialize the node (ubah VALIDATOR-NAME menjadi nama validator anda)
```
MONIKER="VALIDATOR-NAME"
```

```
uniond init $MONIKER --chain-id union-testnet-9 --home=$HOME/.union
```

- Download genesis and addrbook
```
curl -Ls https://raw.githubusercontent.com/CoinHuntersTR/props/refs/heads/main/union/genesis.json > $HOME/.union/config/genesis.json
```

```
curl -Ls https://raw.githubusercontent.com/CoinHuntersTR/props/refs/heads/main/union/addrbook.json > $HOME/.union/config/addrbook.json
```

- Add seeds
```
sed -i -e "s|^seeds *=.*|seeds = \"3f472746f46493309650e5a033076689996c8881@union-testnet.rpc.kjnodes.com:17159\"|" $HOME/.union/config/config.toml
```

- Set minimum gas price
```
sed -i -e "s|^minimum-gas-prices *=.*|minimum-gas-prices = \"0muno\"|" $HOME/.union/config/app.toml
```

- Set pruning
```
sed -i \
  -e 's|^pruning *=.*|pruning = "custom"|' \
  -e 's|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|' \
  -e 's|^pruning-keep-every *=.*|pruning-keep-every = "0"|' \
  -e 's|^pruning-interval *=.*|pruning-interval = "19"|' \
  $HOME/.union/config/app.toml
```

- Set custom ports
```
sed -i -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:17158\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:17157\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:17160\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:17156\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":17166\"%" $HOME/.union/config/config.toml
```

```
sed -i -e "s%^address = \"tcp://0.0.0.0:1317\"%address = \"tcp://0.0.0.0:17117\"%; s%^address = \":8080\"%address = \":17180\"%; s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:17190\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:17191\"%; s%:8545%:17145%; s%:8546%:17146%; s%:6065%:17165%" $HOME/.union/config/app.toml
```
</br>

7. Buat key/Wallet (Simpan dan import mnemonic anda ke keplr)

```
uniond keys add wallet
```

8. Claim faucet (konekkan wallet dan kumpulkan faucet minimal 1.2)  
<a href="https://app.union.build/" target="_blank" rel="noopener noreferrer">app.union.build</a>  
<a href="https://explorer.testnet-9.union.build/wallet/suggest" target="_blank" rel="noopener noreferrer">Add RPC union (UNO)</a>

9. Download latest chain snapshot

```
curl -L https://snapshots.coinhunterstr.com/testnet/union/snapshot_latest.tar.lz4 | tar -Ilz4 -xf - -C $HOME/.union
```

```
[[ -f $HOME/.union/data/upgrade-info.json ]] && cp $HOME/.union/data/upgrade-info.json $HOME/.union/cosmovisor/genesis/upgrade-info.json
```
</br>

10. Start service 

```
systemctl start union-testnet
```
</br>

11. Cek logs (Jangan lanjut ke step ke 12 pastikan dulu block terbaru sama dengan yg di vps anda)

```
journalctl -u union-testnet.service -f --no-hostname -o cat
``` 
- <a href="https://explorer.testnet-9.union.build/union" target="_blank" rel="noopener noreferrer">Cek block/height terbaru di explorer</a>  

</br>

12. Run Validator

- Cek pubkey validator anda (contoh hasil {"@type":"/cosmos.crypto.ed25519.PubKey","key":"0LuMdRNJpWGiH+b+................"})
```
uniond comet show-validator
```

- Edit yang di perlukan sebelum paste ke vps (pubkey, moniker dan website)
```
cat << EOF > ~/.union/config/validator.json
{
	"pubkey": {"hapus-ubah-punya-bro-@type":"/cosmos.crypto.ed25519.PubKey","key":"BCDw/cq.....zYSHfY8="},
	"amount": "1000000muno",
	"moniker": "VALIDATOR-NAME",
	"website": "https://websiteanda.com",
	"commission-rate": "0.1",
	"commission-max-rate": "0.2",
	"commission-max-change-rate": "0.01",
	"min-self-delegation": "1"
}
EOF
```

- Start service lagi
```
systemctl start union-testnet.service
```

- Export config
```
export PRIV_KEY=$(jq -r '.priv_key.value' ~/.union/config/priv_validator_key.json)
```

```
export POSSESSION_PROOF=$(uniond prove-possession "$PRIV_KEY")
```

- Create validator
```
uniond union-staking create-union-validator /root/.union/config/validator.json $POSSESSION_PROOF \
  --from wallet \
  --chain-id union-testnet-9 \
  --fees 0muno 
```
</br>

13. Cek validator anda  
<a href="https://explorer.testnet-9.union.build/union/staking" target="_blank" rel="noopener noreferrer">explorer.testnet-9.union.build/union/staking</a>  

DONE

## Referensi  
<a href="https://service.coinhunterstr.com/testnet/union/testnet-9/installation" target="_blank" rel="noopener noreferrer">service.coinhunterstr.com/testnet/union/testnet-9/installation</a> 


<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4WB2W24M31"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4WB2W24M31');
</script>
</head>