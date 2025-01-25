---
title: Install Node Privasea
description: Guide for install node privasea
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 6 Cores       |
| RAM	    | 8 GB          |
| Disk      | 100 GB        |

<i>Last Update: 25-01-2025</i>

## Prepare Before Install Node
1. Buat wallet baru di evm (okx atau metamask)
2. Isi faucet arb sepolia minimal 0.01

## Install Privanetix node
1. Update paket

```
apt update
```
</br>

2. Install docker (jika belum install)

```
apt install docker.io -y
```
</br>

3. Pull image privasea

```
docker pull privasea/acceleration-node-beta:latest
```
</br>

4. Buat folder privase dan masuk ke folder

```
mkdir -p  /privasea/config && cd  /privasea
```
</br>

5.  Dapatkan keystore (Buat password baru, simpan node address)

```
docker run -it -v "/privasea/config:/app/config" privasea/acceleration-node-beta:latest ./node-calc new_keystore
```
</br>

6. Ubah nama file menjadi wallet_keystore (pastikan ketik/copas nama file UTC--xxx)

```
cd /privasea/config && ls
```

```
mv ./UTC--(ketik/copas)  ./wallet_keystore
```

```
ls
```
</br>

7. Register node
   - <a href="https://deepsea-beta.privasea.ai/privanetixNode" target="_blank" rel="noopener noreferrer">deepsea-beta.privasea.ai/privanetixNode</a> 
   - Konek wallet yg sudah ada arb sepolia
   - Create node (buat nama, commission 3-5%, paste node address)
</br>

8. Start node (Jangan lupa ubah/ganti password yg sudah di buat sebelumnya di step 5)

```
cd /privasea/
```

```
docker run  -d   -v "/privasea/config:/app/config" -e KEYSTORE_PASSWORD=123456 --name privasea privasea/acceleration-node-beta:latest
```
</br>

9. Cek kesehatan node (pastikan ada tulisan success)

```
docker logs -f privasea
```
</br>

10. Cek node online/offline di dashboard  
<a href="https://deepsea-beta.privasea.ai/privanetixNode" target="_blank" rel="noopener noreferrer">deepsea-beta.privasea.ai/privanetixNode</a> 

11. Claim faucet dan self staking di validator sendiri  
    - Claim faucet <a href="https://deepsea-beta.privasea.ai/deepSeaFaucet" target="_blank" rel="noopener noreferrer">deepsea-beta.privasea.ai/deepSeaFaucet</a>
    - Staking <a href="https://deepsea-beta.privasea.ai/nodeDetail/default" target="_blank" rel="noopener noreferrer">deepsea-beta.privasea.ai/nodeDetail/default</a>


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