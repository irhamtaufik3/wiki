---
title: Install Node Pipe Network DevNet
description: Guide install node pipe network
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	      | 1 Cores     |
| RAM	      | 2 GB        |

Note: Node ini hanya bisa di run bagi yang menerima email dari pipe network.

## Install Node Pipe Network DevNet (DevNet CDN PoP Node)

1. Update paket dan install curl

```
sudo su
apt update && apt instal curl -y
```
</br>

2. Buat folder node

```
sudo mkdir -p /opt/dcdn
```
</br>

3. Download file pipe-tool (paste link di dalam kutip dua)  
   Salin link pipe-tool yg di kirim melalui email masing-masing (link bersifat unik)

```
sudo curl -L "Paste_url_di_disini" -o /opt/dcdn/pipe-tool
```
</br>

4. Download file dcdnd (paste link di dalam kutip dua)  
   Salin link dcdnd yg di kirim melalui email masing-masing (link bersifat unik)

```
sudo curl -L "Paste_url_di_disini" -o /opt/dcdn/dcdnd
```
</br>

5. Beri permission file

```
sudo chmod +x /opt/dcdn/dcdnd
sudo chmod +x /opt/dcdn/pipe-tool
```
</br>

6. Log In to Generate Access Token (copy paste saja)  


```
/opt/dcdn/pipe-tool login --node-registry-url="https://rpc.pipedev.network"
```

-   Buka link "Go to url"  
-   Masukan "code Anda"  
-   Login jika sudah punya akun  
-   Sign up jika belum punya akun  
-   Jangan lupa verified email, cek email anda  
-   Jika semua sukses, cek vps anda, pastikan "Logged in successfully!"
</br>

7. Generate Registration Token (copy paste saja, pastikan successfully)

```
/opt/dcdn/pipe-tool generate-registration-token --node-registry-url="https://rpc.pipedev.network"
```
</br>

8. [optional] Simpan file credentials.json dan registration_token.json di laptop/pc anda (di gunakan jika nanti ingin ganti vps)

```
cat ~/.permissionless/credentials.json
```

```
cat ~/.permissionless/registration_token.json
```
</br>

9. Buat service dcdnd (agar node berjalan otomatis)  
   copy paste saja

```
# Create service file using cat
sudo cat > /etc/systemd/system/dcdnd.service << 'EOF'
[Unit]
Description=DCDN Node Service
After=network.target
Wants=network-online.target

[Service]
# Path to the executable and its arguments
ExecStart=/opt/dcdn/dcdnd \
                --grpc-server-url=0.0.0.0:8002 \
                --http-server-url=0.0.0.0:8003 \
                --node-registry-url="https://rpc.pipedev.network" \
                --cache-max-capacity-mb=1024 \
                --credentials-dir=/root/.permissionless \
                --allow-origin=*

# Restart policy
Restart=always
RestartSec=5

# Resource and file descriptor limits
LimitNOFILE=65536
LimitNPROC=4096

# Logging
StandardOutput=journal
StandardError=journal
SyslogIdentifier=dcdn-node


# Working directory
WorkingDirectory=/opt/dcdn

[Install]
WantedBy=multi-user.target
EOF
```
</br>

10. Reload Systemd Daemon

```
sudo systemctl daemon-reload
```
</br>

11. Enable Service at Boot

```
sudo systemctl enable dcdnd
```
</br>

12. Start the Service

```
sudo systemctl start dcdnd
```
</br>

13. Cek status service node (pastikan active)

```
systemctl status dcdnd
```
</br>

14. Cek logs node

```
sudo journalctl -f -u dcdnd.service
```
</br>

## Pipe Network Wallet Management Guide

1. Siapkan pharse mnemonic solana anda (yang 12 kata)
</br>

2. Generate and Register Wallet

```
/opt/dcdn/pipe-tool generate-wallet --node-registry-url="https://rpc.pipedev.network"
```
-   Pastekan mnemonic anda
-   Paste lagi mnemonic anda
-   Simpan di tempat yg aman Recovery Pharse
-   Simpan Public Key
-   Simpan KeyPair dengan cara  
    ``` cat /root/.permissionless/keypair.json ```
</br>

2. Simpan Private key dan Keypair (simpan di tempat yg aman)

```
/opt/dcdn/pipe-tool show-private-key
```
-   Ketik "I UNDERSTAND"
-   ENTER
</br>

3. Cek wallet yang terhubung (pastikan ada public key)

```
/opt/dcdn/pipe-tool link-wallet --show-linked --node-registry-url="https://rpc.pipedev.network"
```
</br>
DONE


## Check Status Node
<a href="https://devnet1.pipecdn.app/" target="_blank" rel="noopener noreferrer">devnet1.pipecdn.app</a> 

## Referensi
<a href="https://docs.pipe.network/getting-started/quickstart#join-the-devnet" target="_blank" rel="noopener noreferrer">docs.pipe.network/getting-started/quickstart#join-the-devnet</a> 