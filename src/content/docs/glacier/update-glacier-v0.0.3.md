---
title: Update Glacier node v.0.0.3-beta
description: Guide update node glacier v.0.0.3-beta
---

## System Specs
| Hardware    |	Requirement |
|-------------|-------------|
| CPU	      | 2 Cores     |
| RAM	      | 4 GB        |

## Update Node
1. Masuk ke tmux glacier

```
tmux attach -t glacier
```
</br>

2. Stop Node  
   ctrl c
</br>

3. Hapus file node lama

```
rm -f verifier_linux_amd64
```
</br>

4. Download file node baru

```
wget https://github.com/Glacier-Labs/node-bootstrap/releases/download/v0.0.3-beta/verifier_linux_amd64
```
</br>

5. Beri izin file dan run node

```
chmod +x ./verifier_linux_amd64
./verifier_linux_amd64
```
</br>

6. DONE (Keluar dari tmux)  
   tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d