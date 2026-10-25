# Web1Lab5: Laporan Praktikum 5 - Dasar Pemrograman JavaScript

Repositori ini berisi hasil pengerjaan Praktikum 5 mata kuliah Pemrograman Web mengenai pengenalan dan dasar-dasar pemrograman JavaScript, manipulasi DOM (Document Object Model), penanganan event, percabangan/kondisional, perulangan, validasi form, serta fungsi dinamis[cite: 2].

## Data Mahasiswa
- **Nama:** Nurfaiz Pradibto Nugroho
- **NIM:** 312510172
- **Program Studi / Semester:** Teknik Informatika / 3
- **Kelas:** I253C
- **Mata Kuliah:** Pemrograman Web
- **Dosen Pengampu:** Agung Nugroho, S.Kom., M.Kom.
- **Hari / Tanggal:** Sabtu, 24 Oktober 2026 (Pertemuan 6 - Offline)
- **Instansi:** Universitas Pelita Bangsa

---

## Langkah-langkah Praktikum

Berikut adalah alur pengerjaan Praktikum 5 beserta rincian kode dan tampilan hasilnya:

### 1. Persiapan dan Struktur Dasar JavaScript
- Mempersiapkan text editor (Visual Studio Code).
- Membuat folder kerja baru bernama `lab5_javascript`.
- Membuat file `index.html` dan menambahkan struktur dasar HTML serta skrip dasar manipulasi DOM (`textContent`) dan keluaran konsol (`console.log`).

![Kode HTML Dasar dan Skrip Pengenalan](/images/img-0.png)
![Tampilan Pengenalan JavaScript](/images/img-1.png)
![Tampilan Output Console Browser](/images/img-2.png)
![Tampilan Console Log Hello World](/images/img-2.png)

### 2. Penggunaan Prompt dan Alert Input Nama
- Menguji pengisian nama pengguna menggunakan `prompt()`, menampilkan ucapan selamat datang pada elemen HTML jika diisi, dan memberikan peringatan `alert()` jika input kosong/dibatalkan.

![Kode Prompt Input Nama](/images/img-3.png)
![Tampilan Prompt Input Nama](/images/img-4.png)
![Tampilan Alert Selamat Datang](/images/img-5.png)
![Tampilan Halaman Setelah Input Nama](/images/img-8.png)
![Tampilan Prompt Kosong](/images/img-6.png)
![Tampilan Alert Nama Belum Diisi](/images/img-7.png)

### 3. Function Operasi Dasar Aritmatika
- Membuat fungsi `operasiDasar(a, b)` yang menerima dua parameter angka dan menampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, serta sisa bagi (modulus) pada konsol browser.

![Kode Function Operasi Dasar](/images/img-9.png)
![Tampilan Output Console Operasi Dasar](/images/img-10.png)

### 4. Penentuan Kelulusan Nilai dengan Prompt & Konversi Tipe Data
- Membuat program penentuan kelulusan (nilai minimal 60) berbasis `prompt()` dengan validasi input numerik dan pengecekan batas rentang `0-100`.

![Kode Penentuan Kelulusan Nilai](/images/img-11.png)
![Tampilan Prompt Input Nilai](/images/img-12.png)
![Tampilan Alert Lulus](/images/img-13.png)
![Tampilan Prompt Input Nilai Tidak Lulus](/images/img-14.png)
![Tampilan Alert Belum Lulus](/images/img-15.png)
![Tampilan Prompt Kosong Nilai](/images/img-16.png)
![Tampilan Alert Input Nilai Tidak Valid](/images/img-17.png)

### 5. Konversi Nama Bilangan dengan Percabangan Switch
- Meminta input angka `1-5` dari pengguna dan menampilkan teks nama bilangan menggunakan struktur percabangan `switch-case`.

![Kode Switch Case Bilangan](/images/img-18.png)
![Tampilan Prompt Input Angka 1](/images/img-19.png)
![Tampilan Alert Bilangan Satu](/images/img-20.png)
![Tampilan Prompt Input Angka 2](/images/img-21.png)
![Tampilan Alert Bilangan Dua](/images/img-22.png)
![Tampilan Prompt Input Angka 3](/images/img-22(1).png)
![Tampilan Alert Bilangan Tiga](/images/img-22(2).png)
![Tampilan Prompt Input Angka 4](/images/img-22(3).png)
![Tampilan Alert Bilangan Empat](/images/img-22(4).png)
![Tampilan Prompt Input Angka 5](/images/img-22(5).png)
![Tampilan Alert Bilangan Lima](/images/img-22(6).png)

### 6. Pengecekan Bilangan Genap / Ganjil Melalui Form Interaktif
- Menambahkan formulir input angka dan tombol periksa untuk menentukan apakah input merupakan bilangan genap atau ganjil secara dinamis pada tampilan HTML.

![Kode Form Cek Bilangan](/images/img-23.png)
![Kode Function Cek Bilangan](/images/img-24.png)
![Tampilan Form Cek Bilangan Awal](/images/img-25.png)
![Tampilan Hasil Cek Bilangan Ganjil](/images/img-26.png)
![Tampilan Hasil Cek Bilangan Genap Negatif](/images/img-27.png)
![Tampilan Hasil Cek Bilangan Nol (Genap)](/images/img-28.png)
![Tampilan Peringatan Input Desimal Tidak Valid](/images/img-29.png)

### 7. Pengubahan Warna Latar Belakang Halaman Dinamis
- Membuat tiga tombol pilihan warna latar belakang (`Latar Hijau`, `Latar Putih`, `Latar Kuning`) yang memanggil satu fungsi dinamis berbasis parameter.

![Kode HTML dan Function Ubah Warna Latar](/images/img-31.png)
![Kode Function Ubah Warna Latar](/images/img-32.png)
![Tampilan Latar Belakang Hijau](/images/img-33.png)
![Tampilan Latar Belakang Putih](/images/img-34.png)
![Tampilan Latar Belakang Kuning](/images/img-35.png)

### 8. Penghitungan Total Harga Menu Makanan (Checkbox Event)
- Membuat daftar menu makanan dengan pilihan `checkbox` yang secara otomatis menghitung dan memformat total pembayaran ketika item dicentang atau dilepas.

![Kode HTML Form Daftar Menu Makanan](/images/img-36.png)
![Kode JavaScript Hitung Total Checkbox](/images/img-37.png)
![Tampilan Daftar Menu Sebelum Dicentang](/images/img-38.png)
![Tampilan Daftar Menu Setelah Dicentang](/images/img-38(1).png)

### 9. Kalkulator Nilai Akhir, Predikat, dan Validasi Rentang Nilai
- Mengembangkan program perhitungan nilai akhir berbasis bobot (Tugas 30%, UTS 30%, UAS 40%), menentukan predikat (A–E), status kelulusan, serta validasi isian rentang `0-100`.

![Kode Function Perhitungan Nilai Akhir](/images/img-39.png)
![Tampilan Kalkulator Nilai Hasil Predikat A](/images/img-40.png)
![Tampilan Kalkulator Nilai Hasil Predikat B](/images/img-41.png)
![Tampilan Kalkulator Nilai Hasil Predikat C](/images/img-42.png)
![Tampilan Kalkulator Nilai Hasil Predikat D](/images/img-43.png)
![Tampilan Kalkulator Nilai Hasil Predikat E](/images/img-44.png)
![Kode Validasi Form Rentang Nilai 0-100](/images/img-45.png)
![Tampilan Uji Validasi Input Nilai Negatif](/images/img-46.png)
![Tampilan Alert Validasi Nilai 0-100](/images/img-47.png)
![Tampilan Output Nilai Akhir pada Console/HTML](/images/img-48.png)

---

## Eksperimen Mandiri

### 1. Operasi Dasar Aritmatika Menggunakan Prompt
- Mengubah fungsi operasi dasar agar menerima dua masukan angka langsung dari `prompt()`, mengonversinya ke tipe `Number`, dan menampilkan hasilnya di elemen HTML.

![Kode Eksperimen 1 Operasi Dasar Prompt](/images/img-50.png)
![Tampilan Prompt Input Bilangan Pertama](/images/img-52.png)
![Tampilan Prompt Input Bilangan Kedua](/images/img-53.png)
![Tampilan Hasil Operasi Dasar di HTML](/images/img-54.png)

### 2. Generasi Tabel Perkalian Matriks (Angka 7 sampai 10)
- Membuat perulangan bersarang (*nested loop*) `for` untuk menghasilkan tabel perkalian angka 7 hingga 10 lengkap dari pengali 1 sampai 10.

![Kode HTML Eksperimen Tabel Perkalian](/images/img-55.png)
![Kode JavaScript Nested Loop Tabel Perkalian](/images/img-56.png)
![Tampilan Hasil Tabel Perkalian 7](/images/img-57.png)
![Tampilan Hasil Tabel Perkalian 8](/images/img-58.png)
![Tampilan Hasil Tabel Perkalian 9](/images/img-59.png)
![Tampilan Hasil Tabel Perkalian 10](/images/img-60.png)

### 3. Implementasi Function `cekGenap(angka)`
- Membuat fungsi terpisah `cekGenap(angka)` yang mengembalikan nilai boolean (`true`/`false`) untuk memvalidasi status genap suatu bilangan bulat.

![Kode HTML cekGenap](/images/img-61.png)
![Kode JS Function cekGenap](/images/img-62.png)
![Tampilan Cek Genap Hasil False (Ganjil)](/images/img-63.png)
![Tampilan Cek Genap Hasil True (Genap)](/images/img-64.png)

### 4. Validasi Form Biodata (Nama, NIM, Email)
- Membuat formulir input data mahasiswa dengan penanganan event `submit` untuk memvalidasi seluruh kolom wajib diisi sebelum data diproses.

![Kode HTML Form Biodata Validasi](/images/img-65.png)
![Kode JavaScript Validasi Kolom Kosong](/images/img-66.png)
![Tampilan Form Validasi Terisi Lengkap](/images/img-67.png)

### 5. Pengembangan Variasi Menu Makanan dan Minuman
- Menambahkan variasi item menu baru (Nasi Putih, Es Teh Manis, Sayur Asem) serta menghitung total biaya secara real-time.

![Kode HTML Tambahan Pilihan Menu Makanan](/images/img-68.png)
![Kode JavaScript Listener Checkbox Menu](/images/img-69.png)
![Tampilan Pilihan Menu Makanan dan Total](/images/img-70.png)

### 6. Toggle Sembunyikan / Tampilkan Elemen HTML
- Membuat mekanisme tombol toggle interaktif untuk menyembunyikan dan menampilkan kembali elemen teks pada dokumen web.

![Kode HTML Elemen](/images/img-71.png)
![Kode JS Toggle Elemen](/images/img-72.png)
![Tampilan Tombol Kondisi Tampilkan Teks](/images/img-73.png)
![Tampilan Tombol Kondisi Sembunyikan Teks](/images/img-74.png)

---

## Pertanyaan dan Tugas

1. **Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`**
   - **`console.log()`**: Menampilkan output ke konsol pengembang (*developer console browser*) untuk keperluan *debugging* tanpa mengganggu pengguna[cite: 21].
   - **`alert()`**: Menampilkan kotak dialog (*pop-up*) berisi pesan peringatan yang harus ditutup oleh pengguna[cite: 21].
   - **`prompt()`**: Menampilkan kotak dialog (*pop-up*) bertipe input teks untuk meminta masukan dari pengguna. Menghasilkan nilai string atau `null` jika dibatalkan[cite: 21].
   - **`textContent`/`innerHTML`**:
     - **`textContent`**: Mengubah atau mengambil isi teks murni di dalam elemen HTML (karakter HTML akan di-escape/dianggap teks biasa)[cite: 21, 22].
     - **`innerHTML`**: Mengubah atau mengambil isi di dalam elemen HTML beserta struktur/tag HTML-nya[cite: 22].

2. **Perbedaan `let` dan `const` beserta Contohnya**
   - **`let`**: Digunakan untuk mendeklarasikan variabel yang nilainya dapat diubah kembali (*reassignable*)[cite: 22].
   - **`const`**: Digunakan untuk mendeklarasikan konstanta yang nilainya tetap/tidak dapat diubah kembali setelah dideklarasikan[cite: 22].
   - **Contoh Penggunaan**:
     ```javascript
     // Penggunaan let
     let skor = 10;
     skor = 20; // Berhasil (nilai skor berubah menjadi 20)

     // Penggunaan const
     const pi = 3.14;
     pi = 3.15; // Error: Assignment to constant variable.
     ```

3. **Perbedaan Operator `==` dan `===`**
   - **`==` (*Loose Equality*)**: Membandingkan nilai saja dengan melakukan konversi tipe data otomatis (*type coercion*) jika tipe datanya berbeda[cite: 22].
   - **`===` (*Strict Equality*)**: Membandingkan nilai sekaligus tipe data. Bernilai `true` hanya jika nilai dan tipe datanya benar-benar identik[cite: 22].
   - **Contoh Penggunaan**:
     ```javascript
     5 == "5"  // true (karena string "5" dikonversi menjadi angka 5)[cite: 22]
     5 === "5" // false (karena number berbeda tipe data dengan string)[cite: 22, 23]
     ```

4. **Fungsi `if-else` dan `switch` serta Waktu Penggunaannya**
   - **`if-else`**:
     - **Fungsi**: Memeriksa kondisi logika kompleks berbasis ekspresi boolean (`true`/`false`)[cite: 23].
     - **Kapan digunakan**: Cocok untuk pengecekan rentang nilai (misal: `nilai >= 70`), perbandingan kompleks dengan operator logika (`&&`, `||`), atau kondisi variabel bertipe boolean[cite: 23].
   - **`switch`**:
     - **Fungsi**: Memeriksa satu variabel terhadap beberapa kemungkinan nilai pasti (`case`)[cite: 23].
     - **Kapan digunakan**: Cocok jika terdapat banyak cabang kondisi yang hanya mengecek kesamaan nilai tunggal/spesifik (misal: menu pilihan, hari dalam seminggu, status kode)[cite: 23].

5. **Fungsi Parameter dan `return` dalam Function**
   - **Parameter**: Berfungsi sebagai input/variabel penampung nilai yang dikirimkan ke dalam function saat dipanggil, agar function bersifat dinamis dan *reusable*[cite: 23].
   - **`return`**: Berfungsi untuk mengembalikan nilai hasil proses dari function ke pemanggilnya, sekaligus menghentikan eksekusi fungsi tersebut[cite: 23].

6. **Cara JavaScript Memilih Elemen HTML Menggunakan `document.getElementById()`**
   - JavaScript mencari elemen di dalam dokumen DOM (*Document Object Model*) berdasarkan atribut `id` yang unik pada tag HTML[cite: 23].
   - **Cara kerja**:
     1. Browser memindai struktur HTML.
     2. Fungsi `document.getElementById("id_elemen")` mencari tag yang memiliki `id="id_elemen"`.
     3. Mengembalikan objek elemen HTML tersebut jika ditemukan, atau `null` jika tidak ada.

7. **Script Validasi Form (Nama Tidak Kosong & Nilai Rentang 0-100)**
   - Berikut adalah contoh implementasi script JavaScript untuk validasi form:
     ```html
     <!DOCTYPE html>
     <html lang="id">
     <head>
       <meta charset="UTF-8">
       <title>Validasi Form</title>
     </head>
     <body>
       <form id="myForm" onsubmit="return validasiForm()">
         <label>Nama: </label><br>
         <input type="text" id="nama"><br><br>
         <label>Nilai (0-100): </label><br>
         <input type="number" id="nilai"><br><br>
         <button type="submit">Kirim</button>
       </form>
       <script>
         function validasiForm() {
           const nama = document.getElementById("nama").value.trim();
           const nilaiInput = document.getElementById("nilai").value.trim();
           const nilai = Number(nilaiInput);

           // Validasi Nama tidak boleh kosong
           if (nama === "") {
             alert("Nama tidak boleh kosong!");
             return false;
           }

           // Validasi Nilai tidak boleh kosong dan harus angka
           if (nilaiInput === "" || isNaN(nilai)) {
             alert("Nilai harus diisi dengan angka!");
             return false;
           }

           // Validasi Rentang Nilai 0-100
           if (nilai < 0 || nilai > 100) {
             alert("Nilai harus berada pada rentang 0 - 100!");
             return false;
           }

           alert("Validasi berhasil! Form dikirim.");
           return true;
         }
       </script>
     </body>
     </html>
     ```