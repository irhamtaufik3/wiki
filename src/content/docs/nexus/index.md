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

2. Buat container nexus (sesuaikan ram dan cpu anda)

```
docker run -it -d --name nexus --cpus=2 --memory=2048m ubuntu:22.04
```
</br>

3. Masuk ke container nexus

```
docker exec -it nexus /bin/bash
```
</br>

4. Update dan install depedensi

```
apt update && apt upgrade -y && apt install tmux curl git protobuf-compiler build-essential pkg-config libssl-dev git-all -y
```
</br>

5. Buat sesi tmux baru untuk nexus

```
tmux new -s nexus
```
</br>

6. Install Node nexus (bebas mau prover-id ambil dari web atau otomatis, ikuti step saja)

```
curl https://cli.nexus.xyz/ | sh 
```
</br>

DONE