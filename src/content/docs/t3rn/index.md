---
title: Install Node T3RN
description: Guide install node t3rn
---

## System Specs
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	        | 2 Cores      |
| RAM	        | 4 GB         |


## Prepare Before Install Node
1. Siapkan wallet evm dengan sepolia, minimal 4 eth sepolia
2. Bridge/swap ke Sepolia ARB, OP, BASE dan BLAST  
 -  <a href="https://bridge.arbitrum.io/?destinationChain=arbitrum-sepolia&sourceChain=sepolia" target="_blank" rel="noopener noreferrer">bridge.arbitrum.io/?destinationChain=arbitrum-sepolia&sourceChain=sepolia</a>  
 -  <a href="https://superbridge.app/" target="_blank" rel="noopener noreferrer">superbridge.app/</a>

## Install Node/executor T3RN v0.26.0
1. Update Paket dan Install curl, tmux, wget

```
sudo su
apt update && apt install curl tmux wget -y
```
</br>

2. Download file node/executor

```
wget https://github.com/t3rn/executor-release/releases/download/v0.26.0/executor-linux-v0.26.0.tar.gz
```
</br>

3. Ekstrak file

```
tar -xvzf executor-linux-v0.26.0.tar.gz
```
</br>

4. Masuk ke folder dan beri izin file

```
cd executor/executor/bin && chmod +x executor
```
</br>

5. Buat sesi tmux t3rn

```
tmux new -s t3rn
```
</br>

6. Setup Node

```
export NODE_ENV=testnet
export LOG_LEVEL=debug
export LOG_PRETTY=false
export EXECUTOR_PROCESS_ORDERS=true
export EXECUTOR_PROCESS_CLAIMS=true
export ENABLED_NETWORKS='arbitrum-sepolia,base-sepolia,blast-sepolia,optimism-sepolia,l1rn'
```
</br>

7. Export private key Anda

```
export PRIVATE_KEY_LOCAL=privatekey_metamask_anda
```
</br>

8. Run Node

```
./executor
```
</br>

9. DONE (keluar dari tmux)  
   tekan ctrl, tahan terus lalu tekan b, lepas semua, tekan d

10. Masuk ke tmux t3rn (jika ingin lihat node run atau stop)

```
tmux atatch -t t3rn
```
</br>

## Check Node/executor di dashboard

-   <a href="https://bridge.t1rn.io/" target="_blank" rel="noopener noreferrer">bridge.t1rn.io/</a>  
-   <a href="https://brn.explorer.caldera.xyz/" target="_blank" rel="noopener noreferrer">brn.explorer.caldera.xyz/</a>

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