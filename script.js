function sepeteEkle(urunAdi) {
  const sepet = document.getElementById("sepetListesi");
  const li = document.createElement("li");
  li.textContent = urunAdi;
  sepet.appendChild(li);
}
