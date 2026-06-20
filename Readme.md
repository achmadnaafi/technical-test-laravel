# Sistem Autentikasi Login (Laravel & ReactJS)

## Deskripsi

Aplikasi autentikasi sederhana yang dibangun menggunakan Laravel sebagai backend dan ReactJS sebagai frontend dalam satu project. Aplikasi ini menyediakan fitur registrasi akun, login, logout, dan menampilkan data profil pengguna.

## Persyaratan

Pastikan perangkat Anda telah terinstal:

* PHP 8.x
* Composer
* Node.js & NPM
* MySQL
* XAMPP, Laragon, atau web server sejenis

## Cara Menjalankan Project

### 1. Jalankan Web Server dan Database

Pastikan Apache/Nginx dan MySQL sudah berjalan melalui XAMPP, Laragon, atau aplikasi sejenis.

### 2. Import Database

1. Buat database baru, misalnya:

```sql
db_auth
```

2. Import file berikut ke database yang telah dibuat:

```text
db_sistem_autentikasi.sql
```

### 3. Install Dependencies

Buka terminal pada folder project, lalu jalankan:

```bash
composer install
npm install
```

### 4. Konfigurasi Environment

Salin file `.env.example` menjadi `.env`.

```bash
cp .env.example .env
```

Atau lakukan secara manual.

Kemudian sesuaikan konfigurasi database pada file `.env` sesuaikan dengan db yang dibuat contoh :

```env
DB_DATABASE=db_auth
DB_USERNAME=root
DB_PASSWORD=
```

Generate application key:

```bash
php artisan key:generate
```

### 5. Menjalankan Aplikasi

Buka dua terminal pada folder project.

**Terminal 1 – Menjalankan Laravel Server**

```bash
php artisan serve
```

**Terminal 2 – Menjalankan Vite Development Server**

```bash
npm run dev
```

### 6. Akses Aplikasi

Buka browser dan akses sesuai yang dijalankan di php artisan serve misal:

```text
http://127.0.0.1:8000
```

## Akun Pengujian

Aplikasi dapat diuji menggunakan akun berikut:

```text
Email    : admin@gmail.com
Password : 123
```

Atau pengguna dapat melakukan registrasi akun baru melalui halaman Register.