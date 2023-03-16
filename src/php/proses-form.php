<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
   
   $to = 'agengarinugroho@gmail.com'; // ganti dengan email penerima
   $subject = 'Pesan dari Form Kontak';
   $body = "Nama: $name\n Email: $email\n Pesan:\n $message";
   $headers = "From: $email";

   // kirim email
   mail($to, $subject, $body, $headers);
   
   // tampilkan pesan berhasil
   echo "Pesan berhasil terkirim!";
}
?>
