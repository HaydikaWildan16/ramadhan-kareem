// ===============================
// FORMAT 2 DIGIT FUNCTION
// ===============================
function format2Digit(angka) {
    return String(angka).padStart(2, '0');
}

// ===============================
// REAL-TIME DATE
// ===============================
function updateDate() {
    const now = new Date();

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const tanggal = now.toLocaleDateString('id-ID', options);
    document.getElementById("current-date").innerHTML = tanggal;
}

// ===============================
// REAL-TIME CLOCK
// ===============================
function updateClock() {
    const now = new Date();

    const jam = format2Digit(now.getHours());
    const menit = format2Digit(now.getMinutes());
    const detik = format2Digit(now.getSeconds());

    document.getElementById("current-time").innerHTML =
        `${jam} : ${menit} : ${detik}`;
}

// ===============================
// COUNTDOWN KE MAGHRIB
// ===============================
function updateCountdown() {
    const now = new Date();

    // Set waktu Maghrib (ubah sesuai jadwal lu)
    let target = new Date();
    target.setHours(18, 14, 0, 0);

    // Kalau sekarang sudah lewat Maghrib,
    // otomatis target jadi BESOK
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }

    const selisih = target - now;

    const jam = format2Digit(Math.floor(selisih / (1000 * 60 * 60)));
    const menit = format2Digit(Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60)));
    const detik = format2Digit(Math.floor((selisih % (1000 * 60)) / 1000));

    document.getElementById("timer").innerHTML =
        `${jam} : ${menit} : ${detik}`;
}

// ===============================
// AUTO RUN
// ===============================
setInterval(() => {
    updateClock();
    updateCountdown();
}, 1000);

updateDate();
updateClock();
updateCountdown();