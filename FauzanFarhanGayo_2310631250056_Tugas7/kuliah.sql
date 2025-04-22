
CREATE DATABASE kuliah;
USE kuliah;


CREATE TABLE mahasiswa (
    npm CHAR(13) PRIMARY KEY,
    nama VARCHAR(50),
    jurusan ENUM('Teknik Informatika', 'Sistem Operasi'),
    alamat TEXT
);


CREATE TABLE matakuliah (
    kodemk CHAR(6) PRIMARY KEY,
    nama VARCHAR(50),
    jumlah_sks INT(3)
);


CREATE TABLE krs (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    mahasiswa_npm CHAR(13),
    matakuliah_kodemk CHAR(6),
    FOREIGN KEY (mahasiswa_npm) REFERENCES mahasiswa(npm),
    FOREIGN KEY (matakuliah_kodemk) REFERENCES matakuliah(kodemk)
);


INSERT INTO mahasiswa (npm, nama, jurusan, alamat) VALUES
('230000000001', 'Siska Putri', 'Teknik Informatika', 'Jl. Mawar No.1'),
('230000000002', 'Ujang Aziz', 'Sistem Operasi', 'Jl. Melati No.2'),
('230000000003', 'Veronica Setyano', 'Teknik Informatika', 'Jl. Kenanga No.3'),
('230000000004', 'Rizka Nurmala Putri', 'Sistem Operasi', 'Jl. Dahlia No.4'),
('230000000005', 'Eren Putra', 'Teknik Informatika', 'Jl. Teratai No.5'),
('230000000006', 'Putra Abdul Rachman', 'Teknik Informatika', 'Jl. Anggrek No.6'),
('230000000007', 'Rahmat Andriyadi', 'Sistem Operasi', 'Jl. Cempaka No.7'),
('230000000008', 'Ayu Puspitasari', 'Sistem Operasi', 'Jl. Kamboja No.8'),
('230000000009', 'Putri Ayuni', 'Teknik Informatika', 'Jl. Anyelir No.9'),
('230000000010', 'Andri Muhammad', 'Teknik Informatika', 'Jl. Flamboyan No.10');


INSERT INTO matakuliah (kodemk, nama, jumlah_sks) VALUES
('MK001', 'Basis Data', 3),
('MK002', 'Pemrograman Berbasis Web', 3),
('MK003', 'Algoritma dan Struktur Data', 3),
('MK004', 'Kajian Jurnal Informatika', 2);


INSERT INTO krs (mahasiswa_npm, matakuliah_kodemk) VALUES
('230000000001', 'MK001'), 
('230000000002', 'MK002'), 
('230000000003', 'MK001'), 
('230000000004', 'MK003'), 
('230000000005', 'MK004'), 
('230000000006', 'MK001'), 
('230000000007', 'MK001'), 
('230000000008', 'MK002'), 
('230000000009', 'MK002'), 
('230000000010', 'MK003'); 
