<?php 
session_start();

// Data Input Checkout
$name = $_POST['nama'];
// $company_name = $_POST["nama_usaha"];
$company_type = $_POST["jenis_usaha"];
// $email = $_POST["email"];
$address = $_POST['address'];


// Session for checkout success
$_SESSION["nama"] = $name;
// $_SESSION["nama_usaha"] = $company_name;
$_SESSION["jenis_usaha"] = $company_type;
// $_SESSION["email"] = $email;
$_SESSION["alamat"] = $address;

header('Location: https://api.whatsapp.com/send?phone=6285864772042&text=Hallo Admin.%0ASaya%20ingin%20bertanya%20mengenai%20Aplikasi%20Kasir%20RZF%20Software!%0A%0ANama%20%3A%20'.$_SESSION["nama"].'%0AProduk%20%3A%20Aplikasi%20Kasir%0A%3A%20%0AJenis%20Usaha%20%3A%20'.$_SESSION["jenis_usaha"].'%0AAlamat%20%3A%20'.$_SESSION["alamat"]);

