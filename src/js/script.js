// TOMBOL HUBERGER NAVBAR
  const toggleButton = document.querySelector(".navbar-burger");
  const navLinks = document.querySelector(".menu-mobile");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });
// BATAS TOMBOL HUMBERGER NAVBAR


// TOMBOL SCROLL TO  TOP
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
// BATAS KODE scrollToTopBtn


// KIRIM INPUT FORM KE GOOGLESHEET
  var form = document.getElementById('sheetdb-form');
  const submitBtn = document.querySelector('#submit-btn');

  form.addEventListener("submit", e => {
    e.preventDefault();

    // Add loading animation to button
    submitBtn.classList.add('bg-gray-400', 'cursor-not-allowed');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';

    // Simulate form submission delay for 2 seconds
    setTimeout(function() {
      // Remove loading animation from button
      submitBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
      submitBtn.innerHTML = 'Submit';

      // TODO: Add form submission code here
    }, 2000);

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
// BATAS KODE INPUTAN FORM KE GOOGLESHEET

