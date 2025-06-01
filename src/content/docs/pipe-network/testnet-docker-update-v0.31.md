---
title: Update Node Pipe Network Testnet v0.3.1 with Docker
description: Guide update node pipe network v0.3.1 with docker
---

## System Specs
| Hardware  | Requirement  |
|-----------|--------------|
| CPU	    | 4 Cores      |
| RAM	    | 16 GB        |
| Storage   | 100 GB       |
| Internet  | 1 Gbps       |

<i>Last Update: 01-06-2025</i>  
<i>Note: Bagi yang mendapatkan email yang bisa running</i>

## Update Node Pipe Network Testnet V0.3.1 di Docker

1. Commit ulang docker popnode dengan nama baru

```
docker commit popnode popnode031
```
</br>

2. Hapus container yang lama

```
docker rm -f popnode
```
</br>

3. Buat Container docker baru

```
docker run -d --name popnode031 -p 80:80 -p 443:443 -it --entrypoint bash popnode031
```
</br>

4. Masuk kedalam container popnode031

```
docker exec -it popnode031 bash
```
</br>

5. update dan install wget, tmux

```
apt update && apt install tmux wget -y
```
</br>

6. Download file binary node terbaru
- Hapus binary yang lama
```
rm pop
```

- Download file
```
wget https://download.pipe.network/static/pop-v0.3.1-linux-x64.tar.gz
```

- unzip file
```
tar -xvzf pop-v0.3.1-linux-x64.tar.gz
```

- Beri izin file
```
chmod 755 /opt/popcache/pop
```
</br>

7. Buat baru session tmux

```
tmux new -s popnode
```
</br>

8. Run node

```
./pop
```
</br>

9. Keluar dari tmux (jika sudah running)

```
ctrl b, lepas semua, lalu tekan d
```
</br>

10. Keluar dari container

```
exit
```
</br>

11. Cek status node 

- Check the health endpoint

```
curl http://localhost/health | jq
```

```
curl -k https://localhost/health | jq
```

- Check the state endpoint
```
curl -k https://localhost/state | jq
```

- Check the metrics endpoint
```
curl -k https://localhost/metrics | jq
```

- Cek dari browser

```
https://ip-vps-anda/state
```

```
https://ip-vps-anda/health
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