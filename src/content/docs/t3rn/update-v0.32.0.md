---
title: Update Node T3RN v0.32.0
description: Guide update node t3rn v0.32.0
---

## System Specs
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	      | 2 Cores        |
| RAM	      | 4 GB           |


## Update Node t3rn v0.32.0

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
wget https://github.com/t3rn/executor-release/releases/download/v0.32.0/executor-linux-v0.32.0.tar.gz
```
</br>

5. Ekstrak file

```
tar -xvzf executor-linux-v0.32.0.tar.gz
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

8. Setup gwei max price (bebas saran 1-500)

```
export EXECUTOR_MAX_L3_GAS_PRICE=500
```
</br>

9. Export private key Anda

```
export PRIVATE_KEY_LOCAL=privatekey_metamask_anda
```
</br>

10. Run Node

```
./executor
```
</br>

11. DONE (keluar dari tmux)  
    tekan ctrl, tahan terus lalu tekan b, lepas semua, tekan d