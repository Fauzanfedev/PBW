<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Data KRS Mahasiswa</title>
    <style>
        table {
            border-collapse: collapse;
            width: 90%;
            margin: 20px auto;
        }
        th, td {
            padding: 10px;
            border: 1px solid #999;
            text-align: left;
        }
        th {
            background-color: #eee;
        }
        .highlight {
            color: #e91e63;
            font-weight: bold;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Data KRS Mahasiswa</h2>

<table>
    <tr>
        <th>No</th>
        <th>Nama Lengkap</th>
        <th>Mata Kuliah</th>
        <th>Keterangan</th>
    </tr>

    <?php
    $sql = "SELECT m.nama AS mahasiswa, mk.nama AS matkul, mk.jumlah_sks
            FROM krs k
            JOIN mahasiswa m ON k.mahasiswa_npm = m.npm
            JOIN matakuliah mk ON k.matakuliah_kodemk = mk.kodemk";

    $result = $conn->query($sql);
    $no = 1;

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $keterangan = "<span class='highlight'>{$row['mahasiswa']}</span> Mengambil Mata Kuliah <span class='highlight'>{$row['matkul']}</span> ({$row['jumlah_sks']} SKS)";
            echo "<tr>
                    <td>$no</td>
                    <td>{$row['mahasiswa']}</td>
                    <td>{$row['matkul']}</td>
                    <td>$keterangan</td>
                  </tr>";
            $no++;
        }
    } else {
        echo "<tr><td colspan='4'>Tidak ada data</td></tr>";
    }

    $conn->close();
    ?>

</table>

</body>
</html>
