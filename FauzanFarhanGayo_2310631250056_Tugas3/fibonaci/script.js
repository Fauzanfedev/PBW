function fibonacci(n) {
    let hasil = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        hasil.push(a);
        [a, b] = [b, a + b];
    }
    return hasil;
}

function cetakFibonacci() {
    let jumlah = document.getElementById("jumlah").value;
    let deret = fibonacci(parseInt(jumlah));
    document.getElementById("hasil").innerText = "Deret Fibonacci: " + deret.join(", ");
}
