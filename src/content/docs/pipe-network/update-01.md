---
title: Update Node Pipe Network DevNet-1 01
description: Guide update node pipe network 01
---

## System Specs
| Hardware  |	Requirement |
|-----------|---------------|
| CPU	      | 1 Cores     |
| RAM	      | 2 GB        |


## Update Node Pipe Network DevNet (DevNet CDN PoP Node) 01

1. Stop Node

```
systemctl stop dcdnd
```
</br>

2. Delete file node lama

```
rm -rf /opt/dcdn/pipe-tool && rm -rf /opt/dcdn/dcdnd
```
</br>

3. Download file node baru (pipe-tool)

```
sudo curl -L "https://url.pipecdn.app/126d1d80" -o /opt/dcdn/pipe-tool
```
</br>

4. Download file node baru (dcdnd)

```
sudo curl -L "https://url.pipecdn.app/ebb81879" -o /opt/dcdn/dcdnd
```
</br>

5. Beri permission file

```
sudo chmod +x /opt/dcdn/dcdnd
sudo chmod +x /opt/dcdn/pipe-tool
```
</br>

6. Reload Systemd Daemon

```
sudo systemctl daemon-reload
```
</br>

7. Start the Service

```
sudo systemctl start dcdnd
```
</br>

8. Cek status service node (pastikan active)

```
sudo systemctl status dcdnd
```
</br>

9. Cek logs node

```
sudo journalctl -f -u dcdnd.service
```
</br>

DONE

## Check Status Node

```
/opt/dcdn/pipe-tool list-nodes --node-registry-url="https://rpc.pipedev.network"
```
</br>

<a href="https://devnet1.pipecdn.app/" target="_blank" rel="noopener noreferrer">devnet1.pipecdn.app</a> 

## Referensi
<a href="https://docs.pipe.network/getting-started/quickstart#join-the-devnet" target="_blank" rel="noopener noreferrer">docs.pipe.network/getting-started/quickstart#join-the-devnet</a> 

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