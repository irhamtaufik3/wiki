---
title: Install Beacon Node
description: Guide for install node beacon blockcast
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 2 Cores       |
| RAM	    | 2 GB          |
| Disk      | 10 GB         |

<i>Last update: 22-05-2025</i>

## Prepare Before Install Node
1. Register akun menggunakan email  
   <a href="https://app.blockcast.network?referral-code=Mi5UWv" target="_blank" rel="noopener noreferrer">app.blockcast.network?referral-code=Mi5UWv</a>
2. Buat Wallet baru di phantom atau di solflare
3. Link your wallet di menu "Profile"  
<i><b>Note: Wajib connect wallet di web, supaya bisa add node.</b></i>

## Install Node beacon blockcast di Ubuntu/Linux

1. Update paket & install git

```
apt update && apt install git -y
```
</br>

2. Install docker (jika belum install)

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```
sudo apt update
```

```
apt-cache policy docker-ce
```

```
sudo apt install docker-ce -y
```

```
sudo systemctl restart docker
```

```
sudo systemctl status docker
```

</br>

3. Download file node

```
git clone https://github.com/Blockcast/beacon-docker-compose.git 
```
</br>

4. Masuk ke folder node

```
cd beacon-docker-compose
```
</br>

5. Run Node

```
docker compose up -d
```
</br>

6. Pastikan docker container sudah berjalan (control_proxy, beacond, blockcastd & beacon-docker-compose-watchtower-1)

```
docker ps
```
</br>

7. Generate hardware and challenge key (simpan, digunakan untuk register node)

```
docker compose exec blockcastd blockcastd init
```
</br>

8. Register Node
- Di web, klik "Get A Node"
- Masukkan Hardware ID, Challenge Key dan Node Name (yang sebelumnya sudah anda simpan)
- Untuk Location, ketik lokasi sesuai vps anda berada.
- Klik "Register Node"

DONE (Check node anda di web, pastikan online)

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