---
title: Install Node Glacier
description: A guide in my new Starlight docs site.
---

## System Specs
| Hardware  |	Requirement |
|-----------|-------------|
| CPU	      | 2 Cores     |
| RAM	      | 4 GB        |

## Prepare Install Node
1. Buat wallet baru di metamask atau okx (simpan privatekey)

2. Tambahkan RPC opBNB Testnet  
  <a href="https://chainlist.org/chain/5611" target="_blank" rel="noopener noreferrer">chainlist.org/chain/5611</a> 

3. Claim BNB testnet (untuk claim wajib ada bnb mainnet sebesar 0.002)  
   https://www.bnbchain.org/en/testnet-faucet  
   https://faucet.trade/bsc-testnet-bnb-faucet (di sini free, tanpa hold bnb mainnet)

4. Swap/brigde dari BNB testnet ke opBNB  
   https://opbnb-testnet-bridge.bnbchain.org/deposit


## Install Node Glacier
1. Update paket dan install git wget tmuxßß
```
apt update && apt install git wget tmux -y
```

2. Buat folder glacier & Download file node (copy paste saja)
```
mkdir glacier && cd glacier && wget https://github.com/Glacier-Labs/node-bootstrap/releases/download/v0.0.1-beta/verifier_linux_amd64 && wget https://glacier-labs.github.io/node-bootstrap/config.yaml
```