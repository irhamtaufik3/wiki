---
title: Install Node Cysic
description: Guide for install node cysic
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 1 Cores       |
| RAM	    | 512 MB        |
| Disk      | 1 GB          |

## Prepare Before Install Node
1. Buat wallet baru di metamask atau di OKX
2. Register di web https://testnet.cysic.xyz/m/  
   Masukkan referral dan konekkan wallet Anda untuk mendaftar  
   code referral: **bc70f**
3. Buat username dan upload poto profile Anda

## Install Genesis Node Verifier (Cysic Pharse II) di Ubuntu-Linux

1. Update paket dan install tmux curl

```
apt update && apt install tmux curl -y
```
</br>

2. Setup Node (ubah/paste address wallet Anda)

```
curl -L https://github.com/cysic-labs/phase2_libs/releases/download/v1.0.0/setup_linux.sh > ~/setup_linux.sh && bash ~/setup_linux.sh 0x-Address-Anda
```
</br>

3. Buat sesi tmux

```
tmux new -s cysic
```
</br>

4. Run Node (pastikan ada “start sync data from server” pertama run akan ada error rpc, tidak masalah)

```
cd ~/cysic-verifier/ && bash start.sh
```
</br>

5. Keluar dari tmux  
   tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

6. Masuk ke tmux (jika ingin melihat node run/tidak)

```
tmux attach -t cysic
```

## Check Status Node
DONE (cek leaderboard Anda)  
<a href="https://testnet.cysic.xyz/m/leadingboard" target="_blank" rel="noopener noreferrer">testnet.cysic.xyz/m/leadingboard</a>