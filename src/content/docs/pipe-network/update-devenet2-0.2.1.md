---
title: Update Node Pipe Network DevNet-2 0.2.1
description: Guide update node pipe network
---

## System Specs
| Hardware  | Requirement  |
|-----------|--------------|
| CPU	    | 2 Cores      |
| RAM	    | 4 GB         |
| Storage   | 200 GB       |
| Internet  | 24/7         |
| Port      | 8003         |

<i>Last Update: 01-02-2025</i>

## Update Node Pipe Network DevNet-2 (v0.2.1)

1. Masuk ke tmux pipe-network

```
tmux attach -t pipe-network
```
</br>

2. Stop node  
   ctrl c
</br>

3. Hapus file node yang lama

```
rm -rf pop*
```
</br>

4. Download file node baru

```
wget https://dl.pipecdn.app/v0.2.1/pop
```
</br>

5. Beri permission file

```
chmod +x pop
```
</br>

6. Run Node (Jangan lupa ubah pubkey Anda)
   - pubKey => wallet address solana
   - atur ram => 4-16
   - atur max disk => 100-500

```
./pop --ram 4 --max-disk 200 --cache-dir /data --pubKey PubKeyAnda
```

<i>Pastikan node run, Status: still running fine...</i>
</br>

7. Keluar dari tmux  
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