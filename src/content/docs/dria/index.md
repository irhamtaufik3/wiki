---
title: Install Node DRIA
description: Guide install node dria
---

## System Specs minimal
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	        | 4 Cores      |
| RAM	        | 8 GB         |


## Prepare Before Install Node
1. Siapkan wallet EVM, simpan private key.

## Install Node Dria di Ubuntu 22.04
1. Update paket

```
apt update
```
</br>

2. Install wget, tmux, curl, unzip

```
apt install wget tmux curl unzip -y
```
</br>

3. Install Ollama

```
curl -fsSL https://ollama.com/install.sh | sh
```
</br>

4. Download file node dria

```
wget https://github.com/firstbatchxyz/dkn-compute-launcher/releases/download/v0.0.1/dkn-compute-launcher-linux-amd64.zip
```
</br>

5. Ekstrak file node dria

```
unzip dkn-compute-launcher-linux-amd64.zip
```
</br>

6. Buat sesi tmux dria

```
tmux new -s dria
```
</br>

7. Masuk ke folder dria

```
cd dkn-compute-node
```
</br>

8. Run Node (Masukkan private key anda, pilih no 8,9 dan enter)

```
./dkn-compute-launcher
```
</br>

9. Keluar dari tmux (pastikan model terdownload)  
   tekan ctrl, tahan terus lalu tekan b, lepas semua, tekan d
</br>

10. Masuk ke tmux (jika ingin melihat node running atau tidak)

```
tmux attach -t dria
```
</br>

## Check point (tunggu 2-3 hari)
Gunakan wallet address untuk cek point  
<a href="https://steps.leaderboard.dria.co/" target="_blank" rel="noopener noreferrer">steps.leaderboard.dria.co/</a>

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