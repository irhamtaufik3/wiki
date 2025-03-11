---
title: Install Cess Node Storage
description: Guide for install cess node storage
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 6 Cores       |
| RAM	    | 10 GB          |
| Disk      | 500 GB        |

## Prepare Before Install Node
1. Install Wallet extension Subwallet di chrome  
   <a href="https://chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn" target="_blank" rel="noopener noreferrer">chromewebstore.google.com/detail/subwallet-polkadot-wallet/onhogfjeacnfoofkfgppdlbmlmnplgbn</a>

2. Buat dua wallet
- Wallet-1 untuk signature & staking/claim faucet (jangan lupa simpan pharse/mnemonic)
- Wallet-2 untuk address reward (jangan lupa simpan pharse/mnemonic)
- Simpan address cess wallet-1 & wallet-2 awalan cX.. (lihat gambar di bawah ini)
<img src="/public/cess-1.png" alt="cess-1" />

3. Claim faucet minimal 4100 (ada 2 cara)  
- Claim by web hanya 100 faucet (isi address, email dan code verify email)  
  <a href="http://cess.network/faucet.html" target="_blank" rel="noopener noreferrer"> cess.network/faucet.html</a>
- Kirim address anda ke discord cess, katakan ke mods anda ingin run node storage.

## Install Cess Node Storage di Ubuntu-Linux

1. Update paket & install wget, tar

```
apt update && apt install wget tar -y
```
</br>

2. Install docker (jika belum install)

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```
sudo apt update
```

```
apt-cache policy docker-ce
```

```
sudo apt install docker-ce -y
```

```
sudo systemctl restart docker
```

```
sudo systemctl status docker
```

</br>

3. Install cess client

```
wget https://github.com/CESSProject/cess-nodeadm/archive/v0.6.0.tar.gz
tar -xvzf v0.6.0.tar.gz
cd cess-nodeadm-0.6.0/
./install.sh
```
</br>

4. Setup running network to testnet

```
cess profile testnet
```
</br>

5. Setup config

```
cess config set
```

`Enter cess node mode from 'authority/storage/rpcnode' (current: authority, press enter to skip): storage`  

`Enter cess storage listener port (current: 15001, press enter to skip):` (enter saja)  

 Start configuring the endpoint to access Storage-Miner from the internet  
  `Do you need to automatically detect extranet address as endpoint? (y/n) y`  
  Try to get your extranet IP ...  
  Your Storage-Miner endpoint is http://xxx.xxx.xxx.xxx:15001  

`Enter cess rpc ws-url (current: local-chain, to use an external chain, type WS-URL directly, or press enter to skip): wss://testnet-rpc.cess.cloud/ws/`

`Enter cess storage earnings account: cX..(Masukkan address reward anda, wallet-2)`

`Enter cess storage signature account phrase: (isi mnemonic anda, wallet-1)`

`Enter cess storage disk path (default: /opt/cess/storage/disk): ` (enter saja)

`The directory: /opt/cess/storage/disk does not exist, do you need to create it for you? (y/n) y`

`Enter cess storage space, by GB unit (current: 300, press enter to skip): 250` (sesuaikan ukuran storage anda)

Enter the number of CPU cores used for mining; Your CPU cores are 4  
  `(current: 0, 0 means all cores are used; press enter to skip): 4`

`Enter the staking account if you use one account to stake multiple nodes (if it is the same as the signature account, press enter to skip):` (enter saja)

`Enter the TEE worker endpoints if you have any (separate multiple values with commas, press enter to skip):` (enter saja)

Set configurations successfully

</br>

6. Start CESS storage node

```
cess start
```
</br>

7. Check CESS Chain Sync Status (sync block mungkin 1-2 hari)

```
docker logs chain
```
<img src="/public/cess-2.png" alt="cess-2" />
</br>

8. Lihat storage node status (tunggu copy block selesai)

```
cess miner stat
```
<img src="/public/cess-3.png" alt="cess-3" />

DONE

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