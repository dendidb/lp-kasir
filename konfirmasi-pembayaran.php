<? require 'data.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, user-scalable=no"/>
  <meta property="og:image" content="http://www.rzfsoftware.com/promo-aplikasi-kasir/assets/img/default/share.png"/>
  <meta name="description" content="Dapatkan Promo Terbatas dari kami."/>
  <meta name="keywords" content="aplikasi kasir, kasir pintar, aplikasi kasir kuningan"/>
  <meta name="twitter:title" content="Aplikasi Kasir by RZF Software | Mempermudah Layanan Kasir Anda"/>
  <meta name="twitter:description" content="Dapatkan Promo Terbatas dari kami."/>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta property="og:locale" content="id_ID"/>
  <meta property="og:type" content="website"/>
  <meta property="article:section" content="Main"/>
  <meta property="og:title" content="Aplikasi Kasir by RZF Software | Mempermudah Layanan Kasir Anda"/>
  <meta property="og:description" content="Dapatkan Promo Terbatas dari kami."/>
  <meta property="og:image:type" content="image/jpeg"/>
  <link rel="shortcut icon" href="assets/img/logo/favicon.png"/>
  <link rel="stylesheet" href="assets/css/normalize.css"/>
  <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css"/>
  <link rel="stylesheet" href="assets/css/brands.css"/>
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/>
  <link rel="stylesheet" href="assets/css/aos.css"/>
  <link rel="stylesheet" href="assets/css/style.css"/>
  <link rel="stylesheet" href="assets/css/responsive.css"/>
  <title>Konfirmasi Pembayaran</title>
</head>
<body>
  <!-- confirmation area -->
  <div class="confirmation-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="confirmation-inner-content">
            <div class="heading-inner-text">
              <h3>Terima Kasih telah melakukan pemesanan. Pesanan Anda akan kami proses.</h3>
              <div class="order-detail-info">
                <p>Untuk menyelesaikan proses pemesanan, silakan transfer sejumlah  Rp1.650.000-,</p>
              </div>
              <div class="order-detail-transfer">
                <img src="assets/img/confirmation/bri.png" alt="Bri Logo"/>
                <p class="transfer-info">No. Rek: 427301006692531</p>
                <p class="transfer-info">Atas Nama: Yudhi Heriyadi</p>
              </div>
              <div class="confirmation-link">
                <p>Jika telah melakukan transaksi pembayaran, silakan konfirmasi pembayaran Anda di: </p>
                <a href="https://api.whatsapp.com/send?phone=6285864772042&text=Saya%20mau%20melakukan%20konfirmasi%20pembayaran.%0A%0ANama%20%3A%20<?= $_SESSION["nama"] ?>%0AProduk%20%3A%20Aplikasi%20Kasir%0ANama%20Usaha%20%3A%20<?= $_SESSION["nama_usaha"] ?>%0AJenis%20Usaha%20%3A%20<?= $_SESSION["jenis_usaha"] ?>%0AEmail%20%3A%20<?= $_SESSION["email"] ?>%0AAlamat%20%3A%20<?= $_SESSION["alamat"] ?>" class="btn btn-confirmation" target="_blank">Konfirmasi Pembayaran</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /confirmation area -->
  <script src="assets/js/jquery-2.2.4.min.js"></script>
  <script src="assets/js/aos.js"></script>
  <script src="assets/js/owl.carousel.min.js"></script>
  <script src="assets/js/script.js"></script>
</body>
</html>