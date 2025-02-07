---
title: Install Validator Kiichain
description: Guide for install validator kiichain
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 16 Cores       |
| RAM	    | 64 GB          |
| Disk      | 1000 GB         |

## Install Kiichain Validator

1. Download script otomatis untuk run node

```
curl -O https://raw.githubusercontent.com/KiiChain/testnets/refs/heads/main/testnet_oro/join_oro_cv.sh
```

```
chmod +x join_oro_cv.sh
```
</br>

2. Edit node_moniker = Nama_Validator_Anda (ubah nama NODE_MONIKER, bebas, jgn ada spasi, save ctrl x,y enter)

```
nano join_oro_cv.sh
```
</br>

3. Run script (tunggu sampai selesai)

```
./join_oro_cv.sh
```
</br>

4. Patikan block committed (stop log, ctrl c)

```
journalctl -fu kiichain3
```
</br>

5. Buat keys/wallet (simpan semua info, restore pharse ke keplr)

```
kiichaind keys add Nama_Validator_Anda
```
</br>

6. Konekkan wallet ke dashboard (Add rpc dan claim faucet anda)  
<a href="https://www.kiitestexplorer.io/wallet/accounts" target="_blank" rel="noopener noreferrer">www.kiitestexplorer.io/wallet/accounts/</a>

</br>

7. Export parameter untuk create/add validator

```
export CHAIN_ID=kiichain3
export AMOUNT=40000000ukii
export COMMISSION_MAX_CHANGE_RATE=0.1
export COMMISSION_MAX_RATE=0.1
export COMMISSION_RATE=0.1
export MIN_SELF_DELEGATION_AMOUNT=40000000
```

```
export MONIKER=Nama_Validator_Anda
```

```
export VALIDATOR_KEY_NAME=Nama_Validator_Anda
```
</br>

8. Add node/run node (ketik y, enter)

```
kiichaind tx staking create-validator \
  --amount=$AMOUNT \
  --pubkey=$(kiichaind tendermint show-validator) \
  --moniker=$MONIKER \
  --chain-id=$CHAIN_ID \
  --commission-rate=$COMMISSION_RATE \
  --commission-max-rate=$COMMISSION_MAX_RATE \
  --commission-max-change-rate=$COMMISSION_MAX_CHANGE_RATE \
  --min-self-delegation=$MIN_SELF_DELEGATION_AMOUNT \
  --gas="auto" \
  --gas-adjustment 1.3 \
  --gas-prices="0.01ukii" \
  --from=$VALIDATOR_KEY_NAME
```
</br>

9. Cek Node Anda di Dashboard (pastikan nama validator anda muncul)  
<a href="https://www.kiitestexplorer.io/Testnet%20Oro/staking" target="_blank" rel="noopener noreferrer">www.kiitestexplorer.io/Testnet%20Oro/staking/</a>
</br>

<h2>DONE</h2>

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