setTimeout(function () {
  var splashScreen = document.querySelector("#splash");
  splashScreen.parentNode.removeChild(splashScreen);
  window.location.href = "/home.html"; // Ganti dengan nama file halaman index Anda jika berbeda
}, 4000);
