---
title: Install Node Cysic di docker
description: Guide for install node cysic on docker
---

## System Specs
| Hardware  |	Requirement  |
|-----------|---------------|
| CPU	      | 1 Cores       |
| RAM	      | 8 GB          |
| Disk      | 512 MB        |
| Bandwidth | 100KB/s u/d   |

## Prepare Before Install Node
1. Buat wallet baru di metamask atau di OKX
2. Register di web https://testnet.cysic.xyz/m/  
   Masukkan referral dan konekkan wallet Anda untuk mendaftar  
   code referral: **bc70f**
3. Buat username dan upload poto profile Anda

## Install Genesis Node Verifier (Cysic Pharse II) di docker  
   Solusi bagi ubuntu 20.04

1. update paket dan install docker.io

```
apt update && apt install docker.io -y
```
</br>

2. Run container dengan nama cysic

```
docker run -d -it -v /sys:/sys --privileged --name cysic ubuntu:22.04
```
</br>

3. Masuk ke docker/container cysic

```
docker exec -it cysic /bin/bash
```
</br>

4. Update paket dan install tmux curl

```
apt update && apt install tmux curl -y
```
</br>

5. Setup Node (ubah/paste address wallet Anda)

```
curl -L https://github.com/cysic-labs/phase2_libs/releases/download/v1.0.0/setup_linux.sh > ~/setup_linux.sh && bash ~/setup_linux.sh 0x-Address-Anda
```
</br>

6. Buat sesi tmux

```
tmux new -s cysic
```
</br>

7. Run Node (pastikan ada “start sync data from server” pertama run akan ada error rpc, tidak masalah)

```
cd ~/cysic-verifier/ && bash start.sh
```
</br>

8. Keluar dari tmux  
   tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

9. Masuk ke tmux (jika ingin melihat node run/tidak)

```
tmux attach -t cysic
```
</br>

10. keluar dari docker /container cysic

```
exit
```
</br>

## Check Status Node
DONE (cek leaderboard Anda)  
<a href="https://testnet.cysic.xyz/m/leadingboard" target="_blank" rel="noopener noreferrer">testnet.cysic.xyz/m/leadingboard</a>

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