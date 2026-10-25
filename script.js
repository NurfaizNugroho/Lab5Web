// Mengubah teks pada elemen HTML yang memiliki id "pesan"
document.getElementById("pesan").textContent = "Hello World";

// Menampilkan pesan ke dalam Console browser
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
alert("Halo, " + namaPengguna + "!");
document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
alert("Nama belum diisi.");
}

function operasiDasar(a, b) {
console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
alert("Lulus");
} else {
alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
case "1": alert("Bilangan satu"); break;
case "2": alert("Bilangan dua"); break;
case "3": alert("Bilangan tiga"); break;
case "4": alert("Bilangan empat"); break;
case "5": alert("Bilangan lima"); break;
default: alert("Pilihan tidak tersedia");
}

function cekBilangan() {
const input = document.getElementById("bilangan").value;
const angka = Number(input);
const hasil = document.getElementById("hasilBilangan");
if (input.trim() === "" || !Number.isInteger(angka)) {
hasil.textContent = "Masukkan bilangan bulat yang valid.";
} else if (angka % 2 === 0) {
hasil.textContent = "Bilangan genap";
} else {
hasil.textContent = "Bilangan ganjil";
}
}

function ubahWarnaLatar(warna) {
document.body.style.backgroundColor = warna;
}

function hitungNilaiAkhir(tugas, uts, uas) {
return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
if (nilai >= 85) return "A";
if (nilai >= 75) return "B";
if (nilai >= 60) return "C";
if (nilai >= 50) return "D";
return "E";
}
const tugas = 85;
const uts = 78;
const uas = 88;
const akhir = hitungNilaiAkhir(tugas, uts, uas);
console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");

// Function murni perhitungan (sesuai modul)
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

// Function murni menentukan predikat (sesuai modul)
function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

// Function untuk mengambil input dari form HTML, memvalidasi, dan menampilkan hasil
function prosesHitungNilai() {
    // Ambil nilai dari input form
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;

    const valTugas = Number(inputTugas);
    const valUts = Number(inputUts);
    const valUas = Number(inputUas);
    const elemenHasil = document.getElementById("hasilKalkulator");

    // Validasi input: tidak boleh kosong dan angka harus berada pada rentang 0 - 100
    if (
        inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "" ||
        Number.isNaN(valTugas) || Number.isNaN(valUts) || Number.isNaN(valUas) ||
        valTugas < 0 || valTugas > 100 ||
        valUts < 0 || valUts > 100 ||
        valUas < 0 || valUas > 100
    ) {
        alert("Harap masukkan nilai yang valid untuk semua kolom (rentang 0 - 100)!");
        elemenHasil.innerHTML = "";
        return;
    }

    // Hitung Nilai Akhir
    const akhir = hitungNilaiAkhir(valTugas, valUts, valUas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    // Tampilkan juga ke Console browser
    console.log("Nilai akhir:", akhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);

    // Tampilkan hasil langsung ke halaman HTML
    elemenHasil.innerHTML = `
        <p><b>Hasil Perhitungan:</b></p>
        <p>Nilai Akhir: <b>${akhir.toFixed(2)}</b></p>
        <p>Predikat: <b>${predikat}</b></p>
        <p>Status: <b>${status}</b></p>
    `;
}

function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesHitungNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;

    const valTugas = Number(inputTugas);
    const valUts = Number(inputUts);
    const valUas = Number(inputUas);
    const elemenHasil = document.getElementById("hasilKalkulator");

    // Validasi rentang 0 - 100
    if (
        inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "" ||
        Number.isNaN(valTugas) || Number.isNaN(valUts) || Number.isNaN(valUas) ||
        valTugas < 0 || valTugas > 100 ||
        valUts < 0 || valUts > 100 ||
        valUas < 0 || valUas > 100
    ) {
        alert("Harap masukkan angka yang valid pada rentang 0 sampai 100!");
        elemenHasil.innerHTML = "";
        return;
    }

    // Proses perhitungan
    const akhir = hitungNilaiAkhir(valTugas, valUts, valUas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    // MENAMPILKAN HASIL KE HALAMAN HTML (Bukan hanya di console)[cite: 6]
    elemenHasil.innerHTML = `
        <p>Hasil Perhitungan:</p>
        <ul>
            <li>Nilai Akhir: ${akhir.toFixed(2)}</li>
            <li>Predikat: ${predikat}</li>
            <li>Status Kelulusan: ${status}</li>
        </ul>
    `;
}

// =====================================================
// EKSPERIMEN 1: Ubah Latihan 3 agar menerima dua nilai
// dari prompt dan mengonversinya menjadi number
// =====================================================
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
 
function operasiDasarPrompt() {
    const hasil = document.getElementById("hasilOperasi");
 
    // prompt() menghasilkan string (atau null jika Cancel)
    const input1 = prompt("Masukkan bilangan pertama:");
    if (input1 === null) {
        hasil.textContent = "Dibatalkan oleh pengguna.";
        return;
    }
    const input2 = prompt("Masukkan bilangan kedua:");
    if (input2 === null) {
        hasil.textContent = "Dibatalkan oleh pengguna.";
        return;
    }
 
    // Konversi string menjadi number
    const a = Number(input1);
    const b = Number(input2);
 
    // Validasi: kosong atau bukan angka
    if (input1.trim() === "" || input2.trim() === "" || isNaN(a) || isNaN(b)) {
        hasil.textContent = "Masukkan dua bilangan yang valid.";
        return;
    }
 
    // Tampilkan di Console (sesuai Latihan 3)
    operasiDasar(a, b);
 
    // Tampilkan juga di halaman HTML
    const pembagian = b !== 0 ? a / b : "Tidak dapat dibagi nol";
    hasil.innerHTML =
        "Penjumlahan: " + (a + b) + "<br>" +
        "Pengurangan: " + (a - b) + "<br>" +
        "Perkalian: " + (a * b) + "<br>" +
        "Pembagian: " + pembagian + "<br>" +
        "Modulus: " + (a % b);
}
 
// =====================================================
// EKSPERIMEN 7: Tabel perkalian angka 7 sampai 10
// =====================================================
function tampilTabelPerkalian() {
    const wadah = document.getElementById("hasilPerkalian");
    let isi = "";

    // perulangan luar: angka yang dikalikan (7, 8, 9, 10)
    for (let angka = 7; angka <= 10; angka++) {
        isi += "<h4>Tabel Perkalian " + angka + "</h4>";

        // perulangan dalam: pengali dari 1 sampai 10
        for (let i = 1; i <= 10; i++) {
            const baris = angka + " x " + i + " = " + (angka * i);
            console.log(baris);
            isi += baris + "<br>";
        }
    }

    wadah.innerHTML = isi;
}
 
// =====================================================
// EKSPERIMEN 8: Function cekGenap(angka)
// mengembalikan true jika angka genap
// =====================================================
function cekGenap(angka) {
    return angka % 2 === 0;
}
 
function periksaGenap() {
    const input = document.getElementById("angkaGenap").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilGenap");
 
    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (cekGenap(angka)) {
        hasil.textContent = "cekGenap(" + angka + ") = true (Bilangan genap)";
    } else {
        hasil.textContent = "cekGenap(" + angka + ") = false (Bilangan ganjil)";
    }
}
 
// =====================================================
// EKSPERIMEN 9: Validasi form, kolom tidak boleh kosong
// =====================================================
document.getElementById("formBiodata").addEventListener("submit", function (e) {
    e.preventDefault(); // cegah form terkirim/reload halaman
 
    const kolom = [
        { id: "nama", err: "errNama", label: "Nama" },
        { id: "nim", err: "errNim", label: "NIM" },
        { id: "email", err: "errEmail", label: "Email" }
    ];
 
    let valid = true;
    kolom.forEach(function (k) {
        const nilai = document.getElementById(k.id).value;
        const pesan = document.getElementById(k.err);
        if (nilai.trim() === "") {
            pesan.textContent = k.label + " tidak boleh kosong!";
            valid = false;
        } else {
            pesan.textContent = "";
        }
    });
 
    const hasil = document.getElementById("hasilForm");
    if (valid) {
        hasil.style.color = "green";
        hasil.textContent = "Data berhasil dikirim. Halo, " +
            document.getElementById("nama").value.trim() + "!";
    } else {
        hasil.style.color = "red";
        hasil.textContent = "Form belum lengkap, periksa kembali isian Anda.";
    }
});
 
// =====================================================
// EKSPERIMEN 10: Menu dengan tambahan pilihan dan harga
// =====================================================
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
 
// =====================================================
// EKSPERIMEN 11: Tombol sembunyikan / tampilkan elemen
// =====================================================
function toggleElemen() {
    const teks = document.getElementById("teksToggle");
    const tombol = document.getElementById("tombolToggle");
 
    if (teks.style.display === "none") {
        teks.style.display = "block";
        tombol.textContent = "Sembunyikan Teks";
    } else {
        teks.style.display = "none";
        tombol.textContent = "Tampilkan Teks";
    }
}
 