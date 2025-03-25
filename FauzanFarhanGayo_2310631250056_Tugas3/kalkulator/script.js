const operasi = {
    '+': (...nums) => nums.reduce((a, b) => a + b),
    '-': (...nums) => nums.reduce((a, b) => a - b),
    '*': (...nums) => nums.reduce((a, b) => a * b),
    '/': (...nums) => nums.reduce((a, b) => a / b),
    '%': (...nums) => nums.reduce((a, b) => a % b)
};

const hitung = (operator) => {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil").innerText = "Masukkan angka yang valid";
        return;
    }
    
    const hasil = operasi[operator](angka1, angka2);
    document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
};