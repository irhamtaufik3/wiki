---
title: Install Node T3RN V2
description: Guide install node t3rn 2
---

## System Specs
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	        | 2 Cores      |
| RAM	        | 4 GB         |

<i>Last update: 23-03-2025</i>


## Prepare Before Install Node
1. Swap BRN to BRN (Net arb sepolia)  
   <a href="https://brn.bridge.caldera.xyz/" target="_blank" rel="noopener noreferrer">brn.bridge.caldera.xyz/</a>
2. Swap BRN (Net arb sepolia) to B2N  
   <a href="https://b2n.bridge.caldera.xyz/" target="_blank" rel="noopener noreferrer">b2n.bridge.caldera.xyz/</a>

## Install Node/executor T3RNv2 v0.57.0
1. Update Paket dan Install curl, tmux, wget

```
sudo su
apt update && apt install curl tmux wget -y
```
</br>

2. Delete & Download file node/executor terbaru

```
cd && rm -rf executor*
```

```
wget https://github.com/t3rn/executor-release/releases/download/v0.57.0/executor-linux-v0.57.0.tar.gz
```
</br>

3. Ekstrak file

```
tar -xvzf executor-linux-v0.57.0.tar.gz
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
export ENVIRONMENT=testnet
export LOG_LEVEL=debug
export LOG_PRETTY=false
export EXECUTOR_PROCESS_BIDS_ENABLED=true
export EXECUTOR_PROCESS_ORDERS_ENABLED=true
export EXECUTOR_PROCESS_CLAIMS_ENABLED=true
export ENABLED_NETWORKS='arbitrum-sepolia,base-sepolia,optimism-sepolia,l2rn'
export NETWORKS_DISABLED='blast-sepolia'
```
</br>

7. set gas fee (sesuaikan selera anda)

```
export EXECUTOR_MAX_L3_GAS_PRICE=1000
```
</br>

8. Set RPC (sesuaikan jika punya rpc sendiri)

```
export RPC_ENDPOINTS='{
    "l2rn": ["http://b2n.rpc.caldera.xyz/http"],
    "arbt": ["https://arbitrum-sepolia.drpc.org", "https://sepolia-rollup.arbitrum.io/rpc"],
    "bast": ["https://base-sepolia-rpc.publicnode.com", "https://base-sepolia.drpc.org"],
    "opst": ["https://sepolia.optimism.io", "https://optimism-sepolia.drpc.org"],
    "unit": ["https://unichain-sepolia.drpc.org", "https://sepolia.unichain.org"]
}'
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

12. Masuk ke tmux t3rn (jika ingin lihat node run atau stop)

```
tmux attach -t t3rn
```
</br>

## Check Node/executor di dashboard

-   <a href="https://bridge.t2rn.io/" target="_blank" rel="noopener noreferrer">bridge.t2rn.io/</a>  
-   <a href="https://b2n.explorer.caldera.xyz/" target="_blank" rel="noopener noreferrer">b2n.explorer.caldera.xyz/</a>

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