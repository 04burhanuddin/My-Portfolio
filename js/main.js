//pertama kita buat event dimana saat tombol di click
// $ adalah jquery
$(".page-scroll").on("click", function (e) {
    // console.log('ok'); untuk menguji sudah terhubung atau belum

    // ambil isi href
    var tujuan = $(this).attr("href");

    // tangkap element
    var elemenTujuan = $(tujuan);

    // dikarenakan posisi navbar yang saya gunakan posisinya adalah fixed maka saya membutuhkan
    // jarak ini agar tidak ketutupan setiap kali saya click menu di nav nya, langsung di tulis di
    // .top - 60 juga bisa.
    $jarak = 60;
    $("html,body").stop().animate({
        scrollTop: elemenTujuan.offset().top - $jarak,
        // nilainya bisa kita ubah sesuka hati dan efek nya bisa kita ubah dengan kesukaan kita contoh saya
        // menggunakan yang default saja yaitu swing, jka ingin lebih banyak
        //tinggal mengujungu halaman https://gsgd.co.uk/sandbox/jquery/easing/ lalu
        // ke bagian example untuk menentukan pilihan efek.
        // 1000 adalah waktu dalam satuan ms
    }, 1000, "swing");
    // mematikan fasilitas a href
    e.preventDefault();
});
