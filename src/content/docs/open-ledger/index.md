---
title: Install Node Open Ledger
description: Guide install node open ledger
---

## System Specs minimal
| Hardware    |	Requirement|
|-------------|--------------|
| CPU	        | 4 Cores      |
| RAM	        | 6 GB         |



## Install Node Open Ledger di Ubuntu 22.04
1. Buat user baru (Ubah "nama-user" sesuai keinginan anda, Masukan password baru, sisanya enter2 saja)

```
adduser nama-user
```
</br>

2. Update paket

```
apt update
```
</br>

3. Install Gui xfce

```
apt install xfce4 xfce4-goodies -y
```
</br>

4. Install XRDP

```
apt install xrdp -y
```
</br>

5. Beri session xrdp untuk xfce

```
echo "startxfce4" > ~/.xsession
```
</br>

6. Restart XRDP

```
systemctl restart xrdp
```
</br>

7. Cek status XRDP (pastikan aktif)

```
systemctl status xrdp
```
</br>

8. Beri izin user baru (jangan lupa ubah "nama-user")

```
usermod -aG root nama-user
```

```
usermod -aG xrdp nama-user
```

```
echo "nama-user ALL=(ALL:ALL) ALL" | sudo tee -a /etc/sudoers > /dev/null
```
</br>

9. Masuk ke user baru (nama-user)

```
su - nama-user
```
</br>

10. Install open ledger (enter saja)

```
curl -O https://gist.githubusercontent.com/NodeFarmer/6da2744044cd1aa37ce28a511259e3f0/raw/OpenLedger.sh && chmod +x OpenLedger.sh && ./OpenLedger.sh
```

11. Login ke gui vps
    - Buka RDP anda, jika menggunakan windows di kolom pencarian ketik RDP.  
    - Masukan/ketik ip public vps anda, nama-user dan password
</br>

12. Buka open ledger
    - Di pojok kiri atas klik applications
    - Klik accessories
    - Buka Open Ledger
    - Login menggunakan akun google anda
    - Start node (tunggu sampai selesai)
    - DONE

## Cek status node
<a href="https://testnet.openledger.xyz/dashboard" target="_blank" rel="noopener noreferrer">testnet.openledger.xyz/dashboard</a>

</br>
<i>Note: Jika remote blank hitam dan keluar silahkan gunakan perintah di bawah ini, dan coba login kembali</i>

```
sudo pkill -u nama-user
```

```
sudo systemctl restart xrdp
```


</br>
<i>Referensi for install open-ledger by cryptonodefarmer.</i>


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