const produk = [
  { nama: "touch screen", harga: 100000 },
  { nama: "boot loop", harga: 250000 },
  { nama: "blue stak", harga: 75000 }
];

const keranjang = [];

const produkList = document.getElementById("produk-list");
const keranjangList = document.getElementById("keranjang-list");

produk.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "produk";
  div.innerHTML = `
    <h3>${item.nama}</h3>
    <p>Rp ${item.harga.toLocaleString()}</p>
    <button onclick="tambahKeKeranjang(${index})">Tambah ke Keranjang</button>
  `;
  produkList.appendChild(div);
});

function tambahKeKeranjang(index) {
  keranjang.push(produk[index]);
  renderKeranjang();
}

function renderKeranjang() {
  keranjangList.innerHTML = "";
  keranjang.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
    keranjangList.appendChild(li);
  });
}
