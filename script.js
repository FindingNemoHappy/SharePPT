var isPopupVisible = false;

document.getElementById("open-popup").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    isPopupVisible = true;
    stopBlinking();
});

document.getElementById("popup-close").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    isPopupVisible = false;
    continueBlinking();
});

function stopBlinking() {
    var donateButton = document.querySelector(".donate-btn");
    donateButton.style.animation = "none"; /* Menghentikan animasi */
}

function continueBlinking() {
    var donateButton = document.querySelector(".donate-btn");
    donateButton.style.animation = "blink 1s infinite"; /* Melanjutkan animasi */
}

function countdown() {
    var targetDate = new Date("2023-09-20T00:00:00Z"); // Tanggal target GMT
    var now = new Date(); // Waktu saat ini
  
    var timeLeft = targetDate - now; // Menghitung selisih waktu dalam milidetik
  
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    // Menampilkan waktu hitung mundur di elemen HTML dengan ID "countdown"
    document.getElementById('countdown').innerHTML =
      days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik";
  
    // Mengupdate waktu hitung mundur setiap 1 detik
    setTimeout(countdown, 1000);
  }
  
  // Memanggil fungsi countdown
  countdown();