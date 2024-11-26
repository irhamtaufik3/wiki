---
title: Install Node Glacier
description: Guide for install node glacier
---

## System Specs
| Hardware  |	Requirement |
|-----------|-------------|
| CPU	      | 2 Cores     |
| RAM	      | 4 GB        |

## Prepare Before Install Node
1. Buat wallet baru di metamask atau okx (simpan privatekey)

2. Tambahkan RPC opBNB Testnet  
  <a href="https://chainlist.org/chain/5611" target="_blank" rel="noopener noreferrer">chainlist.org/chain/5611</a> 

3. Claim BNB testnet (untuk claim wajib ada bnb mainnet sebesar 0.002)  
  <a href="https://www.bnbchain.org/en/testnet-faucet" target="_blank" rel="noopener noreferrer">bnbchain.org/en/testnet-faucet </a>   
  <a href="https://faucet.trade/bsc-testnet-bnb-faucet" target="_blank" rel="noopener noreferrer">faucet.trade/bsc-testnet-bnb-faucet </a> (di sini free, tanpa hold bnb mainnet)

4. Swap/brigde dari BNB testnet ke opBNB  
   <a href="https://opbnb-testnet-bridge.bnbchain.org/deposit" target="_blank" rel="noopener noreferrer">opbnb-testnet-bridge.bnbchain.org/deposit</a>


## Install Node Glacier on Ubuntu-Linux
1. Update paket dan install git wget tmux

```
apt update && apt install git wget tmux -y
```
</br>

2. Buat folder glacier & Download file node (copy paste saja)

```
mkdir glacier && cd glacier && wget https://github.com/Glacier-Labs/node-bootstrap/releases/download/v0.0.1-beta/verifier_linux_amd64 && wget https://glacier-labs.github.io/node-bootstrap/config.yaml
```
</br>

3. Edit file config.yaml (edit, pastekan privatekey Anda, save, ctrl x, y enter)

```
nano config.yaml
```
</br>

4. Beri file permission

```
chmod +x ./verifier_linux_amd64
```
</br>

5. Buat sesi tmux

```
tmux new -s glacier
```
</br>

6. Run Node

```
./verifier_linux_amd64
```
</br>

7. Keluar dari tmux (pastikan node berjalan, ada tulisan node already active)  
   tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

8. Masuk ke tmux (jika ingin lihat node run/tidak)

```
tmux attach -t glacier
```
</br>

## Check Status Node

DONE (cek dashboard, tunggu node berjalan kurang lebih 1 jam)  
   <a href="https://testnet.nodes.glacier.io/status" target="_blank" rel="noopener noreferrer">testnet.nodes.glacier.io/status</a>

</br>

## Info Node

Funding: <a href="https://cryptorank.io/ico/glacier-network#funding-rounds" target="_blank" rel="noopener noreferrer">cryptorank.io/ico/glacier-network#funding-rounds</a>  
DC glacier: <a href="https://discord.gg/eYAGGz5W3b" target="_blank" rel="noopener noreferrer">discord.gg/eYAGGz5W3b</a>  
Incentive: <a href="https://docs.glacier.io/getting-started/glacier-nodes/run-testnet-nodes" target="_blank" rel="noopener noreferrer">docs.glacier.io/getting-started/glacier-nodes/run-testnet-nodes</a>