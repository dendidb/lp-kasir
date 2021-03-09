<?php 

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
// Data Input Checkout
	$name = $_POST['nama'];
	$telepon = $_POST["telepon"];
	$company = $_POST["nama_usaha"];
	$address = $_POST["email"];
// Session for checkout success
	$_SESSION["nama"] = $name;
	$_SESSION["telepon"] = $telepon;
	$_SESSION["nama_usaha"] = $company;
	$_SESSION["email"] = $email;
}
