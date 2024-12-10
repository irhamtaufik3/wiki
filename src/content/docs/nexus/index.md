---
title: Install Node Nexus di Docker
description: Guide install node nexus di docker
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 2 Cores       |
| RAM	    | 2 GB          |

## Install Node Nexus di Docker

1. Update paket dan install docker.io (jika blm install docker)

```
apt update && apt install docker.io -y
```
</br>

2. Buat container nexus (sesuaikan ram dan cpu anda ya, cek htop dulu)

```
docker run -it -d --name nexus --cpus=2 --memory=2048m ubuntu:22.04
```
</br>

3. Masuk ke container nexus

```
docker exec -it nexus /bin/bash
```
</br>

4. Update dan install depedensi (jika ada muncul pilih 11. us dan 10, atau bebas)

```
apt update && apt upgrade -y && apt install nano tmux curl git protobuf-compiler build-essential pkg-config libssl-dev git-all -y
```
</br>

5. Install Rust (tekan enter aja yak)
```
curl https://sh.rustup.rs/ -sSf | sh
```

6. Export path rush

```
cd
source $HOME/.cargo/env
export PATH="$HOME/.cargo/bin:$PATH"
```
</br>

7. Buat sesi tmux baru untuk nexus

```
tmux new -s nexus
```
</br>

8. Install Node nexus (masukan prover-id web)

```
curl https://cli.nexus.xyz/ | sh
```
</br>

9. Jika ingin input prover-id dari web, silahkan stop node dulu  
   ctrl c
</br>

10. Edit, hapus dan paste prover-id yg di web (save, ctrl x, y enter)

```
nano .nexus/prover-id
```
</br>

12. Run ulang node

```
curl https://cli.nexus.xyz/ | sh
```
</br>

13. Keluar dari tmux  
    tekan ctrl, tahan terus, tekan b, lepas semua, lalu tekan d
</br>

14. Keluar dari docker

```
exit
```
</br>

15. Masuk ke docker dan tmux (jika ingin lihat node running)

```
docker exec -it nexus /bin/bash
```

```
tmux attach -t nexus
```

DONE