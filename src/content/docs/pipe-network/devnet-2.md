---
title: Install Node Pipe Network DevNet-2 0.2.1
description: Guide install node pipe network
---

## System Specs
| Hardware  | Requirement  |
|-----------|--------------|
| CPU	      | 2 Cores      |
| RAM	      | 4 GB         |
| Storage   | 200 GB       |
| Internet  | 24/7         |
| Port      | 8003         |

<i>Last Update: 01-02-2025</i>

## Install Node Pipe Network DevNet-2 v0.2.1

1. Update paket dan install wget tmux

```
apt update && apt install wget tmux -y
```
</br>

2. Stop versi DevNet-1 (Jika ada)

```
systemctl stop dcdnd && systemctl disable dcdnd
```
</br>

3. Download file node DevNet-2

```
wget https://dl.pipecdn.app/v0.2.1/pop
```
</br>

4. Beri permission file pop

```
chmod +x pop
```
</br>

5. Buat folder content

```
mkdir download_cache && mkdir /data && chmod 777 download_cache && chmod 777 /data
```
</br>

6. Buat sesi tmux pipe-network

```
tmux new -s pipe-network
```
</br>

7. Run Node (Jangan lupa ubah pubkey Anda)
   - pubKey => wallet address solana
   - atur ram => 4-16
   - atur max disk => 100-500
   - enter saja jika di minta kode referral

```
./pop --ram 4 --max-disk 200 --cache-dir /data --pubKey PubKeyAnda
```

<i>Pastikan node run, Status: still running fine...</i>
</br>

8. Keluar dari tmux  
   tekan ctrl, tahan terus lalu tekan b, lepas semua, tekan d
</br>


9. Cek Status Node & Point

```
./pop --status
```

```
./pop --points
```
</br>

10. Generate referral (jika anda mau/opsional)

```
./pop --gen-referral-route
```
</br>

11. Masuk ke tmux pipe-network (jika ingin lihat node run atau stop)

```
tmux attach -t pipe-network
```
</br>

<h2>DONE</h2>

## Referensi
<a href="https://docs.pipe.network/devnet-2" target="_blank" rel="noopener noreferrer">docs.pipe.network/devnet-2</a> 

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