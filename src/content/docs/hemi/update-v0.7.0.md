---
title: Update Node Hemi v0.7.0
description: Guide update node hemi v0.7.0
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	      | 1 Cores     |
| RAM	      | 2 GB        |

## Update Node Hemi V0.7.0
1. stop versi lama, masuk ke tmux atau screen (jika masih aktif)  
   ctrl c
</br>

2. Download file node

```
cd && wget https://github.com/hemilabs/heminetwork/releases/download/v0.7.0/heminetwork_v0.7.0_linux_amd64.tar.gz
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

5. Buat tmux baru (jika belum)

```
tmux new -s hemi
```
</br>

6. Export Privatekey

```
export POPM_BTC_PRIVKEY="PASTE-PRIVATEKEY-ANDA"
```
</br>

7. Export config node

```
export POPM_STATIC_FEE="100" #disarankan 100-200
export POPM_BFG_URL="wss://testnet.rpc.hemi.network/v1/ws/public"
```
</br>

8. Run node

```
./popmd
```
</br>

9. Keluar dari tmux  
    tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

10. Masuk ke tmux (jika ingin cek node running/tidak)

```
tmux attach -t hemi
```
</br>

DONE

## Check Status Node
<a href="https://testnet.popstats.hemi.network/" target="_blank" rel="noopener noreferrer">testnet.popstats.hemi.network/</a> 