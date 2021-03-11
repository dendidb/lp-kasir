<?php 

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Data Input Checkout
	$name = $_POST['nama'];
	$company_name = $_POST["nama_usaha"];
	$company_type = $_POST["jenis_usaha"];
	$email = $_POST["email"];
  $address = $_POST['address'];
// Session for checkout success
	$_SESSION["nama"] = $name;
	$_SESSION["nama_usaha"] = $company_name;
	$_SESSION["jenis_usaha"] = $company_type;
	$_SESSION["email"] = $email;
  $_SESSION["alamat"] = $address;
}
