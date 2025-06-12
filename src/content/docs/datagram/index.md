---
title: Install Node Datagram
description: Guide install node datagram network
---

## System Specs minimal
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	        | 4 Core      |
| RAM	        | 4 GB         |


## Prepare Before Install Node
1. Create akun  
<a href="https://dashboard.datagram.network?ref=453104063" target="_blank" rel="noopener noreferrer">dashboard.datagram.network?ref=453104063</a>

2. Simpan node key  
<a href="https://dashboard.datagram.network/wallet?tab=licenses" target="_blank" rel="noopener noreferrer">dashboard.datagram.network/wallet?tab=licenses</a>

## Install Node datagram network di Ubuntu/linux
1. Update paket

```
apt update
```
</br>

2. Install wget & tmux

```
apt install wget tmux -y
```
</br>

3. Download file node

```
wget https://github.com/Datagram-Group/datagram-cli-release/releases/latest/download/datagram-cli-x86_64-linux
```

```
chmod +x datagram-cli-x86_64-linux
```
</br>

4. Buat sesi tmux datagram

```
tmux new -s datagram
```

</br>

5. Run Node

```
./datagram-cli-x86_64-linux run -- -key key-anda
```
</br>

6. Keluar dari tmux (pastikan node running)  
   tekan ctrl, tahan terus lalu tekan b, lepas semua, tekan d
</br>

7. Masuk ke tmux (jika ingin melihat node running atau tidak)

```
tmux attach -t datagram
```
</br>

## Cek Node
Cek status node di Dashboard   
<a href="https://dashboard.datagram.network/overview" target="_blank" rel="noopener noreferrer">dashboard.datagram.network/overview</a>

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