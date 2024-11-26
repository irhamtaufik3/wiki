---
title: Install Node Multiple Network
description: Guide install node multiple network
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	      | 1 Cores     |
| RAM	      | 2 GB        |

## Prepare Before Install Node
1. Buat Wallet baru di OKX atau metamask (EVM)  

2. Register ke web (email klik optional, karena susah untuk verif, catat identifier anda, step ke 4 klik main page saja)  
   <a href="https://www.app.multiple.cc/#/signup?inviteCode=JgdYCvq3" target="_blank" rel="noopener noreferrer">app.multiple.cc/#/signup?inviteCode=JgdYCvq3</a> 

## Install Node Multiple Network on Ubuntu-Linux

1. Update paket

```
sudo su
apt update
```
</br>

2. Download file node

```
wget https://cdn.app.multiple.cc/client/linux/x64/multipleforlinux.tar
```
</br>

3. Ekstraks file node

```
tar -xvf multipleforlinux.tar
```
</br>

4. Masuk ke folder dan beri permission (copy paste saja)

```
chmod -R 777 multipleforlinux && cd multipleforlinux && chmod +x ./multiple-cli && chmod +x ./multiple-node
```
</br>

5. Config path untuk node

```
echo "PATH=\$PATH:$(pwd)" >> ~/.bashrc
source ~/.bashrc
```
</br>

6. Run Node

```
nohup ./multiple-node > output.log 2>&1 &
```
</br>

7. Bind the unique account identifier (supaya node di bind ke wallet Anda)  
   Ubah XXXXXXXX ke identifier anda dan pin bebas dibuat berapa saja, catat pin ya.

```
multiple-cli bind --bandwidth-download 100 --identifier XXXXXXXX --pin XXXXXX --storage 200 --bandwidth-upload 100
```
</br>

8. Cek status (pastikan status NodeRun: True)

```
cd ~/multipleforlinux && ./multiple-cli status
```
</br>

## Check Status Node

DONE (Cek status di dashboard)  
   <a href="https://www.app.multiple.cc/#/dataPanel" target="_blank" rel="noopener noreferrer">app.multiple.cc/#/dataPanel</a> 

</br>

Jangan lupa isi profile Anda  
    <a href="https://www.app.multiple.cc/#/setup" target="_blank" rel="noopener noreferrer">app.multiple.cc/#/setup</a>