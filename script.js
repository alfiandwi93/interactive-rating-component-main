
let activeNumber = null;

function no(boxNumber) {
  // Hapus class "active" dari semua box
  const boxes = document.querySelectorAll('.number');
  boxes.forEach(box => box.classList.remove('active'));

  // Tambahkan class "active" pada box yang di-klik
  const box = document.querySelector(`.number:nth-child(${boxNumber})`);
  box.classList.add('active');

  // Simpan nomor box aktif
  activeNumber = boxNumber;
}

function modal() {
  // Cek apakah ada box yang aktif sebelum membuka alert
  if (activeNumber !== null) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.classList.add('show');
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = ` ${activeNumber} `;
    
  } else {
    // Jika tidak ada box yang aktif
    alert('Tidak ada box yang aktif.');
  }
}
const cmodal = document.getElementById('modal');
function closeModal() {
    cmodal.style.display = 'none';
}
