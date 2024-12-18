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

// Function to add dummy data
function addDummyData() {
  const dummyData = [
    {
      nama: "Hendra Muda Wibowo",
      telepon: "08123456789",
      tujuan: "Mengajukan Aspirasi",
      tanggal: "2024-12-12",
    },
    {
      nama: "Andera Putri Vadita",
      telepon: "08234567890",
      tujuan: "Mengurus Surat",
      tanggal: "2024-12-02",
    },
    {
      nama: "Satrio Bagas Dahlan",
      telepon: "08234274720",
      tujuan: "Laporan Kehilangan dokumen",
      tanggal: "2024-12-25",
    },
    {
      nama: "Malena",
      telepon: "08231864990",
      tujuan: "Mengurus Surat (Urgent)",
      tanggal: "2024-12-20",
    },
    {
      nama: "Andre Marlino Setya",
      telepon: "08231176397",
      tujuan: "Internship",
      tanggal: "2024-12-29",
    },
  ];

  const tableBody = document.getElementById("visitorTableBody");

  dummyData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${data.nama}</td>
            <td>${data.telepon}</td>
            <td>${data.tujuan}</td>
            <td>${data.tanggal}</td>
        `;
    tableBody.appendChild(row);
  });
}

// Add dummy data on page load
window.onload = addDummyData;
