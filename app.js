// ---------- TOPCLEAN v4.9 (ULTIMATE STABLE) ----------
// TÜM SİSTEM TEK DOSYADA - HATA KORUMALI

// 1. GLOBAL HATA YAKALAYICI (DEBUG İÇİN)
window.onerror = function (msg, url, line) {
    alert("KRİTİK SİSTEM HATASI!\nMesaj: " + msg + "\nSatır: " + line);
    console.error("HATA:", msg, "URL:", url, "SATIR:", line);
    return false;
};

// 2. FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "[GCP_API_KEY]",
    authDomain: "topclean-ce4e6.firebaseapp.com",
    databaseURL: "https://topclean-ce4e6-default-rtdb.firebaseio.com",
    projectId: "topclean-ce4e6",
    storageBucket: "topclean-ce4e6.firebasestorage.app",
    messagingSenderId: "413118182506",                                 
    appId: "1:413118182506:web:4e1897da948b8348030613"
};

let db = null;
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
    }
} catch (e) { alert("Firebase Hatası: " + e.message); }

// 3. KRİTİK DEĞİŞKENLER
let currentUser = null;
const katlar = { "Bodrum Kat": {}, "Zemin Kat": {}, "Akademik Kat": {}, "Ara Kat": {}, "Yatakhane Katı": {}, "Sosyal Alan Katı": {} }; // Basitleştirilmiş (Gerekirse app.js'den kopyalanabilir)
const usersData = [{ name: "İdareci", pass: "1111", rol: "idareci" }];

// 4. İDARECİ MANAGER (EN ÜSTE TAŞINDI - KESİLMEYE KARŞI)
const IdarecManager = {
    load: function () {
        console.log("İdareci Paneli Yükleniyor...");
        const panel = document.getElementById("idarecPanel");
        if (!panel) { alert("idarecPanel bulunamadı!"); return; }

        panel.innerHTML = `
            <div class="p-4 animate-fade-in">
                <h2 class="text-emerald mb-4">İdareci Dashboard</h2>
                <div class="row g-3">
                    <div class="col-md-4">
                        <div class="glass-card p-4 text-center">
                            <h5 class="text-white-50">Sistem Durumu</h5>
                            <h2 class="text-white">AKTİF</h2>
                        </div>
                    </div>
                </div>
                <div id="idarecBinaMatrisi" class="mt-4"></div>
            </div>
        `;
        // Bu kısım renderBinaDurumu ile doldurulacak
    }
};

// 5. TEMEL FONKSİYONLAR
function showPanel(id) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.add('d-none'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('d-none');
        target.classList.add('d-flex');
    }
}

function handleLogin(e) {
    if (e) e.preventDefault();
    const uName = document.getElementById('userSelect')?.value;
    const uPass = document.getElementById('passInput')?.value;

    if (uName === "İdareci" && uPass === "1111") {
        currentUser = { name: "İdareci", rol: "idareci" };
        localStorage.setItem('topclean_session', JSON.stringify(currentUser));
        _routeUser();
    } else {
        alert("Giriş başarısız!");
    }
}

function _routeUser() {
    if (!currentUser) { showPanel("loginPanel"); return; }
    if (currentUser.rol === 'idareci') {
        showPanel("idarecPanel");
        IdarecManager.load();
    }
}

function checkSession() {
    const s = localStorage.getItem('topclean_session');
    if (s) {
        currentUser = JSON.parse(s);
        _routeUser();
    }
}

// 6. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const lForm = document.getElementById('loginForm');
    if (lForm) lForm.addEventListener('submit', handleLogin);
    checkSession();
});
