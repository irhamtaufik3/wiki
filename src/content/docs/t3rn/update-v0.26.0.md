---
title: Update Node T3RN v0.26.0
description: Guide update node t3rn v0.26.0
---

## System Specs
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	      | 2 Cores        |
| RAM	      | 4 GB           |


## Update Node t3rn v0.26.0

1. Masuk ke tmux t3rn

```
tmux attach -t t3rn
```
</br>

2. Stop Node  
   ctrl c
</br>

3. Hapus aplikasi versi sebelumnya

```
cd && rm -rf executor*
```
</br>

4. Download file node/executor baru

```
wget https://github.com/t3rn/executor-release/releases/download/v0.26.0/executor-linux-v0.26.0.tar.gz
```
</br>

5. Ekstrak file

```
tar -xvzf executor-linux-v0.26.0.tar.gz
```
</br>

6. Masuk ke folder dan beri izin file

```
cd executor/executor/bin && chmod +x executor
```
</br>

7. Setup Node

```
export NODE_ENV=testnet
export LOG_LEVEL=debug
export LOG_PRETTY=false
export EXECUTOR_PROCESS_ORDERS=true
export EXECUTOR_PROCESS_CLAIMS=true
export ENABLED_NETWORKS='arbitrum-sepolia,base-sepolia,blast-sepolia,optimism-sepolia,l1rn'
```
</br>

8. Export private key Anda

```
export PRIVATE_KEY_LOCAL=privatekey_metamask_anda
```
</br>

9. Run Node

```
./executor
```
</br>

10. DONE (keluar dari tmux)  
    tekan ctrl, tahan terus lalu tekan b, lepas semua, tekan d