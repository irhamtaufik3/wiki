---
title: Install Node Pipe Network Testnet with Docker
description: Guide install node pipe network with docker
---

## System Specs
| Hardware  | Requirement  |
|-----------|--------------|
| CPU	    | 4 Cores      |
| RAM	    | 16 GB        |
| Storage   | 100 GB       |
| Internet  | 1 Gbps       |

<i>Last Update: 10-05-2025</i>  
<i>Note: Bagi yang mendapatkan email yang bisa running</i>

## Install Node Pipe Network Testnet di Docker

1. Update paket dan install depedency

```
apt update && apt install libssl-dev ca-certificates docker.io -y
```
</br>

2. Optimalkan Pengaturan Jaringan (copas saja)

```
sudo bash -c 'cat > /etc/sysctl.d/99-popcache.conf << EOL
net.ipv4.ip_local_port_range = 1024 65535
net.core.somaxconn = 65535
net.ipv4.tcp_low_latency = 1
net.ipv4.tcp_fastopen = 3
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_window_scaling = 1
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.core.wmem_max = 16777216
net.core.rmem_max = 16777216
EOL'
sudo sysctl -p /etc/sysctl.d/99-popcache.conf
```
</br>

3. Tingkatkan Batas File (untuk meningkatkan performa, copas saja)

```
sudo bash -c 'cat > /etc/security/limits.d/popcache.conf << EOL
*    hard nofile 65535
*    soft nofile 65535
EOL'
```
<i><b>Logout dan login kembali ke vps anda untuk melanjutkan step ke 4</b></i>
</br>

4. Buat Direktori Instalasi

```
sudo mkdir -p /opt/popcache
```

```
cd /opt/popcache
```
</br>

5. Download file binary node
- Download file
```
wget https://download.pipe.network/static/pop-v0.3.0-linux-x64.tar.gz
```

- unzip file
```
sudo tar -xzf pop-v0.3.0-linux-*.tar.gz
```

- Beri izin file
```
chmod 755 /opt/popcache/pop
```
</br>

6. Buat dan edit file config.json (paste dan edit yg di perlukan)

```
nano config.json
```

```
{
  "pop_name": "nama-pop-anda",
  "pop_location": "nama-kota-vps-anda, Nama-Negara",
  "invite_code": "code-invite-anda",
  "server": {
    "host": "0.0.0.0",
    "port": 443,
    "http_port": 80,
    "workers": 40
  },
  "cache_config": {
    "memory_cache_size_mb": 4096,
    "disk_cache_path": "./cache",
    "disk_cache_size_gb": 100,
    "default_ttl_seconds": 86400,
    "respect_origin_headers": true,
    "max_cacheable_size_mb": 1024
  },
  "api_endpoints": {
    "base_url": "https://dataplane.pipenetwork.com"
  },
  "identity_config": {
    "node_name": "Nama_Node_Anda",
    "name": "Nama_Anda",
    "email": "email.anda@example.com",
    "website": "https://website-anda.com",
    "discord": "discord_username_anda",
    "telegram": "telegram_anda",
    "solana_pubkey": "SOLANA_WALLET_ADDRESS_ANDA_UNTUK_REWARDS"
  }
}
```
<i>Simpan dengan cara, ctrl x, y, enter</i>
</br>

7. Buat Dockerfile (copas saja)

```
cat > Dockerfile << EOL
FROM ubuntu:24.04

# Install dependensi dasar
RUN apt update && apt install -y \\
    ca-certificates \\
    curl \\
    libssl-dev \\
    && rm -rf /var/lib/apt/lists/*

# Buat direktori untuk pop
WORKDIR /opt/popcache

# Salin file konfigurasi & binary dari host
COPY pop .
COPY config.json .

# Berikan izin eksekusi
RUN chmod +x ./pop

# Jalankan node
CMD ["./pop", "--config", "config.json"]
EOL
```
</br>

8. Build docker

```
docker build -t popnode .
```
</br>

9. Run docker popnode

```
docker run -d \
  --name popnode \
  -p 80:80 \
  -p 443:443 \
  --restart unless-stopped \
  popnode
```
</br>

10. Cek container popnode (pastikan running)

```
docker ps
```
</br>

11. cek logs container popnode

```
docker logs -f popnode
```
</br>

12. Cek status node (Check the health endpoint)

```
curl http://ip-public-vps/health
```

<h2>DONE</h2>

## Referensi
<a href="https://docs.pipe.network/nodes/testnet" target="_blank" rel="noopener noreferrer">docs.pipe.network/nodes/testnet</a> 

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