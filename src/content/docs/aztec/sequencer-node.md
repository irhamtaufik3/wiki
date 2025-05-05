---
title: Install Sequencer Node
description: Guide for install Aztec Sequencer Node
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 8 Cores       |
| RAM	    | 16 GB          |
| Disk      | 1  TB        |

<i>Last update: 05-05-2025</i>  
<i>Author: 504 Bad Gateway</i>

## Prepare Before Install Node
1. Buat Wallet baru EVM, simpan private key dan addressnya.

2. Isi Faucet ETH Sepolia

3. Dapatkan RPC & Beacon RPC
- https://dashboard.alchemy.com/ (free-RPC)
- https://drpc.org (free-Beacon RPC)
- https://chainstack.com (free-Beacon RPC)
- https://www.ankr.com (berbayar-Beacon RPC)

4. Simpan ip public vps anda (paste perintah di bawah ini jika tidak tau public ip vps Anda)

```
curl ifconfig.me
```

## Install Sequencer Node di Linux

1. Update & upgrade paket

```
apt update && apt upgrade -y
```
</br>

2. Install depedensi

```
apt install curl iptables build-essential git wget lz4 jq make gcc nano automake autoconf tmux htop nvme-cli libgbm1 pkg-config libssl-dev libleveldb-dev tar clang bsdmainutils ncdu unzip libleveldb-dev  -y
```
</br>

3. Install docker & docker compose (jika belum install)

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

4. Install Aztec Tools

```
bash -i <(curl -s https://install.aztec.network)
```
</br>

5. Cek jika sudah terinstall

```
aztec
```
</br>

6. Update Aztec

```
aztec-up alpha-testnet
```
</br>

7. Buat screen


```
sceen -S aztec
```
</br>

8. Jalankan node (ubah yg diperlukan)

```
aztec start --node --archiver --sequencer \
  --network alpha-testnet \
  --l1-rpc-urls RPC_URL_ANDA  \
  --l1-consensus-host-urls BEACON_URL_ANDA \
  --sequencer.validatorPrivateKey 0xYourPrivateKey \
  --sequencer.coinbase 0xYourAddress \
  --p2p.p2pIp IP_PUBLIC_ANDA
  --p2p.maxTxPoolSize 1000000000 
```
</br>

9. Keluar dari screen  
Ctrl + A + D  
<i>Note: Setelah memasukkan perintah, node Anda mulai berjalan, Butuh beberapa menit agar node Anda tersinkronisasi (-+ 10 menit)</i>
</br>

10. Claim Role Discord
- Dapatkan nomor blok terbaru (simpan, contoh hasil: 20905)

```
curl -s -X POST -H 'Content-Type: application/json' \
-d '{"jsonrpc":"2.0","method":"node_getL2Tips","params":[],"id":67}' \
http://localhost:8080 | jq -r ".result.proven.number"
```

- Hasilkan bukti sinkronisasi Anda (Ganti 2x BLOCK_NUMBER dengan nomor Anda)

```
curl -s -X POST -H 'Content-Type: application/json' \
-d '{"jsonrpc":"2.0","method":"node_getArchiveSiblingPath","params":["BLOCK_NUMBER","BLOCK_NUMBER"],"id":67}' \
http://localhost:8080 | jq -r ".result"
```
</br>

11. Daftar dengan Discord  
- Ketik perintah berikut di server Discord ini: ```/operator start```
- Setelah mengetik perintah, Discord akan menampilkan kolom opsi yang terlihat seperti ini:
- address: Alamat validator Anda (Alamat Ethereum)
- block-number: Nomor blok untuk verifikasi (Nomor blok dari Langkah 1)
- proof: Bukti sinkronisasi Anda (string base64 dari Langkah 2)
- Kemudian Anda akan mendapatkan Role Apprentice
</br>

12. Register Validator (Ganti RPC_URL, your-validator-address & 2x your-validator-address)

```
aztec add-l1-validator \
  --l1-rpc-urls RPC_URL \
  --private-key your-private-key \
  --attester your-validator-address \
  --proposer-eoa your-validator-address \
  --staking-asset-handler 0xF739D03e98e23A7B65940848aBA8921fF3bAc4b2 \
  --l1-chain-id 11155111
```
<i>Perlu diketahui bahwa ada kuota harian 10 registrasi validator per hari, jika terjadi kesalahan, coba lagi besok.</i>
</br>

13. Cek Validator Anda  
https://aztecscan.xyz/validators


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