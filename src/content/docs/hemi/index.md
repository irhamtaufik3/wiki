---
title: Install Node Hemi
description: Guide install node hemi
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	      | 1 Cores     |
| RAM	      | 2 GB        |

## Install Node Hemi V0.7.0
1. Update paket dan install jq tmux wget

```
sudo apt update && sudo apt install jq tmux wget -y
```
</br>

2. Download file node

```
wget https://github.com/hemilabs/heminetwork/releases/download/v0.7.0/heminetwork_v0.7.0_linux_amd64.tar.gz
```
</br>

3. Ekstrak file

```
tar -xzf heminetwork_v0.7.0_linux_amd64.tar.gz
```
</br>

4. Masuk ke folder hemi

```
cd heminetwork_v0.7.0_linux_amd64
```
</br>

5. Buat wallet baru (simpan semua data ya)

```
./keygen -secp256k1 -json -net="testnet" > ~/popm-address.json
```
</br>

6. Simpan wallet (utk claim faucet)

```
jq -r '.pubkey_hash' ~/popm-address.json
```
</br>

7. Simpan private key

```
jq -r '.private_key' ~/popm-address.json
```
</br>

8. Claim faucet di DC hemi, wajib konek X dan punya 10 follower
<a href="https://discord.com/channels/1202677849887080508/1230886659222929418" target="_blank" rel="noopener noreferrer">discord.com/channels/1202677849887080508/1230886659222929418</a> 

9. Buat sesi tmux hemi

```
tmux new -s hemi
```
</br>

10. Export private key

```
export POPM_BTC_PRIVKEY="PASTE-PRIVATEKEY-ANDA"
```
</br>

11. Export config node

```
export POPM_STATIC_FEE="100" #ubah 100-200
export POPM_BFG_URL="wss://testnet.rpc.hemi.network/v1/ws/public"
```
</br>

12. Run node

```
./popmd
```
</br>

13. Keluar dari tmux  
    tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

14. Masuk ke tmux (jika ingin cek node running/tidak)

```
tmux attach -t hemi
```
</br>

DONE

## Check Status Node
<a href="https://testnet.popstats.hemi.network/" target="_blank" rel="noopener noreferrer">testnet.popstats.hemi.network/</a> 

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