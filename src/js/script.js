const toggleButton = document.querySelector(".navbar-burger");
const navLinks = document.querySelector(".menu-mobile");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Mendapatkan semua hyperlink dengan class "scroll"
const scrollLinks = document.querySelectorAll('.scroll');

// Looping untuk setiap hyperlink
scrollLinks.forEach(link => {
  // Menambahkan event listener untuk setiap hyperlink
  link.addEventListener('click', e => {
    // Mencegah default behavior dari hyperlink (langsung menuju ke halaman tujuan)
    e.preventDefault();
    
    // Mendapatkan ID target dari href pada hyperlink
    const id = link.getAttribute('href');
    
    // Menggunakan fungsi scrollIntoView() untuk melakukan smooth scroll
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  var scrollToTopButton = document.getElementById('scrollToTopButton');

  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

var scrollToTopBtn = document.getElementById("scrollToTopButton");
    scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

// batas kode scrollToTopBtn

// js untuk form
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    // window.open('page2.html');
    window.location.replace('page2.html');

  });
});

