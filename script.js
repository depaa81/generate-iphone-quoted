document.getElementById("generateBtn").addEventListener("click", () => {
  const text = document.getElementById("messageInput").value.trim();
  if (text === "") {
    alert("Tolong ketik pesan dulu!");
    return;
  }

  document.getElementById("chatText").innerText = text;

  // waktu sekarang
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  document.getElementById("chatTime").innerText = `${jam}:${menit}`;

  document.getElementById("status").innerText = "Generate Selesai!";
  document.getElementById("downloadBtn").style.display = "inline-block";
});

// download gambar
document.getElementById("downloadBtn").addEventListener("click", () => {
  html2canvas(document.getElementById("chatArea")).then(canvas => {
    const link = document.createElement("a");
    link.download = "chat-iphone.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
