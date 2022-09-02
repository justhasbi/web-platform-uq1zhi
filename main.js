let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');
let listAbsensi = [];

absensi_form.addEventListener('submit', (event) => {
  event.preventDefault();

  let fullname = event.target.fullname.value;

  if (fullname == '') {
    alert('Please insert fullname');
    return;
  }

  listAbsensi.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  event.target.fullname.value = '';

  renderToHtml();
});

function renderToHtml() {
  root.innerHTML = '';

  listAbsensi.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">  
      <span>  ${i + 1}. &nbsp; ${e.nama_lengkap} </span>
      <span>  ${e.waktu} ${e.tanggal} </span>
    </div>
    `;
  });
}

function handleDelete(index) {
  listAbsensi.splice(index, 1);

  renderToHtml();
}
