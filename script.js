document.getElementById("submitButton").addEventListener("click", function () {
  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const tujuan = document.getElementById("tujuan").value;
  const tanggal = document.getElementById("tanggal").value;

  if (nama && telepon && tujuan && tanggal) {
    const tableBody = document.getElementById("visitorTableBody");

    // Buat baris baru
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${nama}</td>
                    <td>${telepon}</td>
                    <td>${tujuan}</td>
                    <td>${tanggal}</td>
                `;

    // Tambahkan baris ke tabel
    tableBody.appendChild(row);

    // Reset form
    document.getElementById("visitorForm").reset();
  } else {
    alert("Harap isi semua field sebelum submit!");
  }
});
