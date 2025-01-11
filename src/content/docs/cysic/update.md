---
title: Update Node Cysic
description: Guide for update node cysic
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 1 Cores       |
| RAM	    | 8 GB          |
| Disk      | 512 MB        |
| Bandwidth | 100KB/s u/d   |

## Update Node cysic
1. Masuk ke tmux csyic

```
tmux attach -t cysic
```
</br>

2. Stop node (jika masih running)  
   ctrl c
</br>

3. Hapus file cysic-verifier.db

```
rm -rf data/cysic-verifier.db
```
</br>

4. Download file node (Jangan lupa ubah/paste wallet anda, harus wallet yg sama)

```
curl -L https://github.com/cysic-labs/phase2_libs/releases/download/v1.0.0/setup_linux.sh > ~/setup_linux.sh && bash ~/setup_linux.sh 0x-PASTE-ADDRESS-ANDA
```
</br>

5. Run Node (pastikan ada “start sync data from server” pertama run akan ada error rpc, tidak masalah)

```
cd ~/cysic-verifier/ && bash start.sh
```
</br>

6. Keluar dari tmux  
   tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

7. Masuk ke tmux (jika ingin melihat node run/tidak)

```
tmux attach -t cysic
```

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