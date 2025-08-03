// Fungsi untuk membuat efek confetti
function createConfetti(x, y) {
    const confettiCount = 100;
    const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
        '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#ffeb3b', '#ffc107',
        '#ff9800', '#f48fb1'
    ];
    const container = document.body;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;

        const animation = confetti.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) rotate(${Math.random() * 1080}deg)`, opacity: 1 },
            { transform: `translate(${Math.random() * 800 - 400}px, 100vh) rotate(${Math.random() * 1080}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        container.appendChild(confetti);
        
        // Hapus elemen confetti setelah animasinya selesai
        animation.onfinish = () => confetti.remove();
    }
}

// --- Logika untuk membuka/menutup pesan ---
$("#messageState").on("change", () => {
    if ($("#messageState").is(":checked")) {
        // Ketika pesan dibuka
        $(".message").addClass("message-open");
        $(".container").animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Abrindo");
        
        // Dapatkan posisi hati untuk memulai confetti
        const heart = $(".heart")[0];
        const rect = heart.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Panggil fungsi confetti
        createConfetti(x, y);

        $("#lanjutButton").show();
    } else {
        // Ketika pesan ditutup
        $(".message").removeClass("message-open");
        $(".container").animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("fechando");

        $("#lanjutButton").hide();
    }
});

// --- Logika untuk Tombol Lanjut (seperti kode sebelumnya) ---
document.addEventListener('DOMContentLoaded', function() {
    $("#lanjutButton").hide(); 

    const lanjutButton = document.getElementById('lanjutButton');
    if (lanjutButton) {
        lanjutButton.addEventListener('click', () => {
            window.location.href = '../Tree_of_love_CWU/index.html';
        });
    }
});