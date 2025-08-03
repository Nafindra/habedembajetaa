var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

(function ($) {
    $.fn.typewriter = function (options) { // Tambahkan 'options' sebagai parameter
        // Gabungkan opsi default dengan opsi yang diberikan (jika ada)
        var settings = $.extend({
            speed: 100, // Kecepatan default per karakter (milidetik)
            callback: null // Fungsi callback yang akan dipanggil setelah pengetikan selesai
        }, options);

        this.each(function () {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html(''); // Bersihkan konten awal

            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') { // Lewati tag HTML
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }

                // Tampilkan sebagian teks yang sudah diketik
                // Tambahkan kursor berkedip hanya jika belum selesai dan di posisi genap
                $ele.html(str.substring(0, progress) + (progress & 1 && progress < str.length ? '_' : ''));

                if (progress >= str.length) {
                    clearInterval(timer); // Hentikan timer setelah semua teks diketik
                    $ele.html(str); // Pastikan teks penuh ditampilkan tanpa kursor
                    // Panggil fungsi callback jika ada dan merupakan fungsi
                    if (typeof settings.callback === 'function') {
                        settings.callback();
                    }
                }
            }, settings.speed); // Gunakan kecepatan dari pengaturan (settings.speed)
        });
        return this; // Mengembalikan objek jQuery untuk chaining
    };
})(jQuery);

function timeElapse(date) {
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = '0' + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	var result =
		'Day <span class=\"digit\">' + days + '</span> <span class=\"digit\">' + hours + '</span> : <span class=\"digit\">' + minutes + '</span> : <span class=\"digit\">' + seconds + '</span>';
	$("#elapseClock").html(result);
}