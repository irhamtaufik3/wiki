---
title: Install Node Cyberfly
description: Guide for install node cyberfly
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	    | 2 Cores       |
| RAM	    | 2 GB          |
| Disk      | 10 GB         |

## Prepare Before Install Node
1. Install Wallet extension eckoWALLET di chrome (buat wallet baru dan simpan address)  
   <a href="https://chromewebstore.google.com/detail/eckowallet/bofddndhbegljegmpmnlbhcejofmjgbn" target="_blank" rel="noopener noreferrer">chromewebstore.google.com/detail/eckowallet/bofddndhbegljegmpmnlbhcejofmjgbn</a>

2. Connect wallet ecko dan claim faucet  
<a href="https://node.cyberfly.io/faucet" target="_blank" rel="noopener noreferrer">node.cyberfly.io/faucet</a>

3. Generate node private key dengan cara Klik "Generate KeyPair" (buka file dengan nodepad/text editor)  
   <a href="https://kadena-community.github.io/kadena-tools/" target="_blank" rel="noopener noreferrer">kadena-community.github.io/kadena-tools/</a>


## Install Node Cyberfly di Ubuntu-Linux

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
git clone https://github.com/cyberfly-io/cyberfly-node-docker.git 
```
</br>

4. Masuk ke folder node

```
cd cyberfly-node-docker
```
</br>

5. Git pull file node

```
git pull 
```
</br>

6. Beri izin file start_node.sh

```
chmod +x start_node.sh 
```
</br>

7. Start Node (Ubah/paste address dan node private key adalah yg public)

```
sudo ./start_node.sh k:alamat_dompet_kadena_anda node_priv_key
```
</br>

8. Buka Node Anda di browser (konek wallet ecko), klik tanda mata/view dan klik stake
```
http://IP-VPS-ANDA-BOGENG:31000/mynode
```
</br>

DONE