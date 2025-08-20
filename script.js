const produk = [
  { nama: "Touch Screen", harga: 100000, gambar: "img/touchscreen.jpg" },
  { nama: "Boot Loop", harga: 250000, gambar: "img/bootloop.jpg" },
  { nama: "Blue Stak", harga: 75000, gambar: "img/bluestak.jpg" }
];

const keranjang = [];

const produkList = document.getElementById("produk-list");
const keranjangList = document.getElementById("keranjang-list");
const totalHargaEl = document.getElementById("total-harga");

// render daftar produk
produk.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "produk";
  div.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}">
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
  let total = 0;

  keranjang.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
    keranjangList.appendChild(li);
    total += item.harga;
  });

  totalHargaEl.textContent = `Total: Rp ${total.toLocaleString()}`;
}
