// ---------- FIREBASE CONFIGURATION ----------
const firebaseConfig = {
    apiKey: "AIzaSyCO88ONQpL3vFRMSY-jyhRImbsNC1ngcmQ",
    authDomain: "topclean-ce4e6.firebaseapp.com",
    databaseURL: "https://topclean-ce4e6-default-rtdb.firebaseio.com",
    projectId: "topclean-ce4e6",
    storageBucket: "topclean-ce4e6.firebaseastorage.app",
    messagingSenderId: "413118182506",
    appId: "1:413118182506:web:4e1897da948b8348030613"
};

// ---------- TOPCLEAN v4.0 (SECURE + STABLE) ----------
console.log("%c TOPCLEAN v4.0 - SECURE", "background: #10b981; color: #fff; font-weight: bold; padding: 4px; border-radius: 4px;");

let db = null;
let auth = null;

// Initialize Firebase Safely
try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
        auth = firebase.auth();
        console.log("Firebase initialized successfully.");
    }
} catch (e) {
    console.error("Firebase Init Error:", e);
}

// ---------- SABİT VERİLER ----------
const katlar = {
    "Bodrum Kat": {
        "-1 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Etraf Düzenli"],
        "Mescit": ["Etraf Süpürülmüş", "Kürsü Düzenli", "Koku yok", "Halılar temizlenmiş", "Camlar temiz"],
        "Kütüphane": ["Zemin temiz", "Kitaplar düzenli", "Masalar temiz", "Çöp yok", "Rafların tozu alınmış"],
        "Wc": ["Zemin temiz", "Lavabolar temiz", "Koku yok", "Kağıt var", "Sabun var"],
        "Muhasebe Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Toz alınmış", "Çöp kutusu boş"],
        "Çalışma Odası": ["Zemin temiz", "Masalar düzenli", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Donanım": ["Zemin temiz", "Cihazlar düzenli", "Kablo karmaşası yok", "Toz alınmış", "Çöp kutusu boş"]
    },
    "Zemin Kat": {
        "0 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Ayna Silinmiş"],
        "Çalışma Odası": ["Masa düzenli", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Toplantı Odası": ["Masalar düzenli", "Zemin temiz", "Sandalyeler dizili", "Toz alınmış", "Çöp yok"],
        "Çayhane": ["Zemin temiz", "Masalar silinmiş", "Çöp yok", "Koku yok", "Çay Demlikleri Temiz"],
        "Wc 1": ["Lavabolar temiz", "Zemin temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "Wc 2": ["Lavabolar temiz", "Zemin temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "İdareci Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Koltuklar Temiz", "Çöp kutusu boş"]
    },
    "Akademik Kat": {
        "1 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "Hocaların Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Eşyalar düzenlenmiş", "Çöp kutusu boş"],
        "Lab": ["Zemin temiz", "Cihazlar düzenli", "Masalar silinmiş", "Toz alınmış", "Çöp yok"],
        "Etüt 1": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Etüt 2": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Etüt 3": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Etüt 4": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Talebe Çayhanesi": ["Zemin temiz", "Masalar silinmiş", "Çöp yok", "Koku yok", "Tezgah temiz"],
        "Wc": ["Zemin temiz", "Lavabolar temiz", "Sabun var", "Kağıt var", "Koku yok"]
    },
    "Ara Kat": {
        "2 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "Hoca Çalışma Odası": ["Masa düzenli", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Misafir Yatakhanesi": ["Yataklar düzenli", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Yatakhane 1": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Yatakhane 2": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Yatakhane 3": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Tüzder": ["Zemin temiz", "Masalar düzenli", "Toz alınmış", "Eşyalar yerinde", "Çöp yok"],
        "Etüt": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Robotik": ["Zemin temiz", "Eşyalar düzenli", "Cihazlar korunmuş", "Toz alınmış", "Çöp yok"],
        "Temizlik Deposu": ["Raflar düzenli", "Zemin temiz", "Kimyasallar kapalı", "Etraf derli toplu", "Çöp yok"],
        "Wc": ["Zemin temiz", "Lavabolar temiz", "Sabun var", "Kağıt var", "Koku yok"]
    },
    "Yatakhane Katı": {
        "3 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "Misafir Yatakhanesi": ["Yataklar düzenli", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Yatakhane 1": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Yatakhane 2": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Yatakhane 3": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Yatakhane 4": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Yatakhane 6": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "Wc": ["Zemin temiz", "Lavabolar temiz", "Sabun var", "Kağıt var", "Koku yok"]
    },
    "Sosyal Alan Katı": {
        "4 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "Sanat Odası": ["Zemin temiz", "Masalar silinmiş", "Malzemeler düzenli", "Toz alınmış", "Koku yok"],
        "Kantin": ["Zemin temiz", "Masalar temiz", "Çöp yok", "Eşyalar düzenli", "Hijyen kontrol"],
        "Teras": ["Zemin temiz", "Çöp yok", "Korkuluklar silinmiş", "Bitki düzenli", "Yer yıkandı"]
    }
};

const usersData = [
    { name: "Abdülkadir Uysal", pass: "1234", kat: "Bodrum Kat", rol: "gorevli" },
    { name: "Mehmet Ali Zabun", pass: "1234", kat: "Zemin Kat", rol: "gorevli" },
    { name: "Oğuz Erol", pass: "1234", kat: "Akademik Kat", rol: "gorevli" },
    { name: "Burakhan Karaoğlan", pass: "1234", kat: "Ara Kat", rol: "gorevli" },
    { name: "3.KAT Görevlisi", pass: "1234", kat: "Yatakhane Katı", rol: "gorevli" },
    { name: "Emre Karabalak", pass: "1234", kat: "Sosyal Alan Katı", rol: "gorevli" },
    { name: "İç Mesul", pass: "4321", kat: "", rol: "mufettis" },
    { name: "İdareci", pass: "1111", kat: "", rol: "idareci" }
];

// ---------- GLOBAL STATE ----------
let currentUser = null;
let currentKat = "";
let currentBolum = "";
let isSyncing = false; // Mükerrer bağlantıları önlemek için flag
// Let's add a global reference for the modal
let bootstrapModal = null;
let currentActiveReport = null;

// Base64 fotoğraf encode
let fotoDataURL = "";

// DOMContentLoaded event merged to bottom of file.

// ---------- TEMA (Theme) ----------
function initTheme() {
    const btns = document.querySelectorAll('#themeToggleBtn, #themeToggleBtnLogin');

    // Check saved theme
    const savedTheme = localStorage.getItem('topclean_theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            let current = document.documentElement.getAttribute('data-bs-theme');
            let newTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('topclean_theme', newTheme);
            updateThemeIcon(newTheme);
        });
    });
}
function updateThemeIcon(theme) {
    const btns = document.querySelectorAll('#themeToggleBtn, #themeToggleBtnLogin');
    btns.forEach(btn => {
        if (!btn) return;
        if (theme === 'dark') {
            btn.innerHTML = `<i data-lucide="sun" size="18"></i>`;
        } else {
            btn.innerHTML = `<i data-lucide="moon" size="18"></i>`;
        }
    });
    lucide.createIcons();
}

// ---------- GİRİŞ (Login) ----------
function initLoginSelect() {
    try {
        const select = document.getElementById('userSelect');
        if (!select) return;
        select.innerHTML = "";

        let deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        if (!Array.isArray(deletedFixed)) deletedFixed = [];

        let extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        if (!Array.isArray(extraUsers)) extraUsers = [];

        const activeFixed = usersData.filter(u => u && !deletedFixed.includes(u.name));
        const allUsers = [...activeFixed, ...extraUsers].filter(u => u && !deletedFixed.includes(u.name));

        allUsers.forEach(u => {
            if (u?.name) {
                const opt = document.createElement('option');
                opt.value = u.name;
                opt.textContent = u.name;
                select.appendChild(opt);
            }
        });

        // Liste Dağılımı seçeneği
        const opt = document.createElement('option');
        opt.value = "Liste Dağılımı";
        opt.textContent = "Liste Dağılımı";
        select.appendChild(opt);
    } catch (err) {
        console.error("initLoginSelect Error:", err);
    }
}

function checkLoginType() {
    const val = document.getElementById('userSelect')?.value;
    const pInput = document.getElementById('passInput');
    if (!pInput) return;
    if (val === "Liste Dağılımı") {
        pInput.disabled = true;
        pInput.placeholder = "Şifre Gerekmez";
    } else {
        pInput.disabled = false;
        pInput.placeholder = "Şifreniz";
    }
}

// Session 24 saat geçerliliği: eski token varsa otomatik logout
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

function getSession() {
    const saved = localStorage.getItem('topclean_session');
    if (!saved) return null;

    try {
        return JSON.parse(saved);
    } catch (e) {
        console.error("Session parse hatası:", e);
        return null;
    }
}

function checkSession() {
    const user = getSession();

    if (user && user.rol) {
        // TTL kontrolü
        if (user._ts && (Date.now() - user._ts) > SESSION_TTL_MS) {
            console.log("[Session] Oturum süresi doldu.");
            localStorage.removeItem('topclean_session');
            showPanel("loginPanel");
            return;
        }

        console.log("Session bulundu:", user);
        currentUser = user;
        updateHeader();
        
        if (db && !isSyncing) syncFromCloud();
        
        // Rolleri handle etmek için mevcuttaki fonksiyonu çağıralım
        _routeUser();

    } else {
        console.log("Session yok veya geçersiz → login");
        showPanel("loginPanel");
    }
}

// E-posta giriş modu kaldırıldı (v4.0)

function handleLogin(e) {
    e.preventDefault();

    const uName = String(document.getElementById('userSelect')?.value || '').trim();
    const uPass = String(document.getElementById('passInput')?.value || '').trim();

    if (!uName) return;

    try {
        // 1. Liste Dağılımı Özel Giriş
        if (uName === "Liste Dağılımı") {
            currentUser = { name: "Liste Dağılımı", rol: "liste", kat: "" };
            // Şifre session'a yazılmıyor (güvenlik)
            _saveSession(currentUser);
            ListeManager.load();
            showPanel("listePanel");
            updateHeader();
            return;
        }

        // 2. Kullanıcıları yükle (Firebase öncelikli, hardcoded fallback)
        const deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        const extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        const activeFixed = usersData.filter(u => u && !deletedFixed.includes(u.name));
        const allUsers = [...extraUsers, ...activeFixed].filter(Boolean);

        const un = allUsers.find(x => x?.name && String(x.name).trim().toLowerCase() === uName.toLowerCase());

        if (un && String(un.pass).trim() === uPass) {
            // Şifreyi session'a YAZMA — sadece gerekli alanlar
            currentUser = { name: un.name, rol: un.rol, kat: un.kat || '' };
            _saveSession(currentUser);
            loginSuccess();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Giriş Başarısız',
                text: 'Şifre veya personel seçimi hatalı.',
                confirmButtonText: 'Tamam',
                confirmButtonColor: '#10b981'
            });
        }
    } catch (err) {
        console.error("Login Exception:", err);
        Swal.fire({ icon: 'error', title: 'Sistem Hatası', text: 'Beklenmeyen bir hata oluştu.', confirmButtonText: 'Tamam' });
    }
}

// --- Güvenli session kaydet (şifre hariç) ---
function _saveSession(userObj) {
    const safe = { name: userObj.name, rol: userObj.rol, kat: userObj.kat || '', _ts: Date.now() };
    localStorage.setItem('topclean_session', JSON.stringify(safe));
}

function loginSuccess() {
    const pIn = document.getElementById('passInput');
    if (pIn) pIn.value = "";
    updateHeader();

    Swal.fire({ icon: 'success', title: 'Giriş Başarılı', text: 'Oturum açıldı.', timer: 1200, showConfirmButton: false });

    _routeUser();
}

function _routeUser() {
    if (!currentUser) return;
    if (currentUser.rol === "gorevli") {
        loadGorevliPanel(currentUser.kat);
        showPanel("gorevliPanel");
    } else if (currentUser.rol === "idareci") {
        IdarecManager.load();
        showPanel("idarecPanel");
    } else if (currentUser.rol === "liste") {
        ListeManager.load();
        showPanel("listePanel");
    } else {
        loadAdminPanel();
        showPanel("adminPanel");
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('topclean_session');

    // UI Reset - Merkezi fonksiyona yönlendir
    showPanel('loginPanel');
    
    const headerEl = document.getElementById('app-header');
    if (headerEl) headerEl.classList.add('d-none');

    const badgeEl = document.getElementById('headerUserBadge');
    if (badgeEl) { badgeEl.classList.add('d-none'); badgeEl.classList.remove('d-flex'); }

    initLoginSelect();
    updateHeader();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    console.log("[TopClean] Güvenli çıkış yapıldı.");
}

function updateHeader() {
    const headerEl = document.getElementById('app-header');
    const badgeEl = document.getElementById('headerUserBadge');
    const nameEl = document.getElementById('headerName');

    if (currentUser) {
        if (headerEl) headerEl.classList.remove('d-none');
        if (badgeEl) {
            badgeEl.classList.remove('d-none');
            badgeEl.classList.add('d-flex');
        }
        if (nameEl) {
            let userDisplay = currentUser.rol === 'gorevli' ? currentUser.kat : currentUser.rol.toUpperCase();
            nameEl.innerText = `${currentUser.name} | ${userDisplay}`;
        }
    } else {
        if (headerEl) headerEl.classList.add('d-none');
        if (badgeEl) {
            badgeEl.classList.add('d-none');
            badgeEl.classList.remove('d-flex');
        }
    }
}

function showPanel(panelId) {
    // 1. Tüm panelleri kapat
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // 2. Hedef paneli bul
    const target = document.getElementById(panelId);

    if (target) {
        // 3. Hedef paneli aktif yap
        target.classList.add('active');
        
        // 4. Container görünürlüğünü garanti et
        const mainContainer = document.getElementById('mainContainer');
        if (mainContainer) {
            mainContainer.classList.remove('d-none');
            mainContainer.style.display = 'flex';
        }

        // 🔥 PANEL AÇILINCA İÇERİĞİ ZORLA YÜKLE
        if (panelId === "idarecPanel") {
            if (typeof IdarecManager !== 'undefined') IdarecManager.load();
        } else if (panelId === "listePanel") {
            if (typeof ListeManager !== 'undefined') ListeManager.load();
        }

        console.log("%c[Panel] Aktif: " + panelId, "color: #10b981; font-weight: bold;");
    } else {
        console.error("[Panel] Hata: '" + panelId + "' id'li panel DOM'da bulunamadı!");
    }
}

// ---------- VERİ (Cloud / LocalStorage) ----------
let cachedData = JSON.parse(localStorage.getItem('topclean_data') || '[]');
let cachedArizalar = JSON.parse(localStorage.getItem('topclean_arizalar') || '[]');
let cachedInventory = JSON.parse(localStorage.getItem('topclean_inventory') || '[]');
let cachedInventoryLogs = JSON.parse(localStorage.getItem('topclean_inventory_logs') || '[]');

// Offline işlem kuyruğu (bağlantı yokken yapılan işlemler)
let offlineQueue = JSON.parse(localStorage.getItem('topclean_offline_queue') || '[]');
let _refreshDebounce = null;

function _debouncedRefresh() {
    clearTimeout(_refreshDebounce);
    _refreshDebounce = setTimeout(refreshCurrentPanel, 300);
}

function syncFromCloud() {
    if (!db || isSyncing) return;
    isSyncing = true;
    console.log("[Firebase] Veri senkronizasyonu başlatıldı...");

    // Rapor verisi — son 300 kayıt
    db.ref('reports').limitToLast(300).on('value', snapshot => {
        const val = snapshot.val();
        cachedData = val ? Object.values(val) : [];
        localStorage.setItem('topclean_data', JSON.stringify(cachedData));
        _debouncedRefresh();
    });

    db.ref('users').on('value', snapshot => {
        const val = snapshot.val();
        localStorage.setItem('topclean_users', JSON.stringify(val ? Object.values(val) : []));
        // Sadece login sayfasındaysa dropdown'u yenile
        if (!currentUser) initLoginSelect();
    });

    db.ref('student_distribution').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            localStorage.setItem('topclean_talebe_listesi', JSON.stringify(val));
            if (currentUser?.rol === "liste") ListeManager.load();
        }
    });

    db.ref('deleted_fixed_users').on('value', snapshot => {
        const val = snapshot.val();
        const arr = val ? (Array.isArray(val) ? val : Object.values(val)) : [];
        localStorage.setItem('topclean_deleted_fixed_users', JSON.stringify(arr));
        if (!currentUser) initLoginSelect();
        if (currentUser?.rol === "idareci") IdarecManager.loadPersonel();
    });

    db.ref('arizalar').on('value', snapshot => {
        const val = snapshot.val();
        cachedArizalar = val ? Object.values(val) : [];
        localStorage.setItem('topclean_arizalar', JSON.stringify(cachedArizalar));
        _debouncedRefresh();
    });

    db.ref('inventory').on('value', snapshot => {
        const val = snapshot.val();
        cachedInventory = val ? Object.values(val) : [];
        localStorage.setItem('topclean_inventory', JSON.stringify(cachedInventory));
        if (currentUser?.rol === "idareci") InventoryManager.render();
    });

    // Envanter logları — son 200
    db.ref('inventory_logs').limitToLast(200).on('value', snapshot => {
        const val = snapshot.val();
        cachedInventoryLogs = val ? Object.values(val) : [];
        localStorage.setItem('topclean_inventory_logs', JSON.stringify(cachedInventoryLogs));
    });

    // Bağlantı durumu — offline queue çöz
    db.ref('.info/connected').on('value', snapshot => {
        if (snapshot.val() === true) _flushOfflineQueue();
    });
}

function refreshCurrentPanel() {
    if (!currentUser) return;
    
    // Sadece aktif olan paneli yenile (Performans ve Stabilite için)
    const activePanel = document.querySelector('.view-panel.active');
    if (!activePanel) return;

    const panelId = activePanel.id;

    if (panelId === "gorevliPanel" && currentUser.rol === "gorevli") {
        loadGorevliPanel(currentUser.kat);
    } else if (panelId === "idarecPanel" && currentUser.rol === "idareci") {
        // İdareci panelinde sadece gerekli alt kısımları yenile
        IdarecManager.loadBinaDurumu();
        InventoryManager.render();
    } else if (panelId === "adminPanel" && (currentUser.rol === "mufettis" || currentUser.rol === "idareci")) {
        loadAdminPanel();
    }
}

function getData() { return cachedData; }

// Helper: YYYY-MM-DD formatında tarih (locale bağımsız)
function toShortDate(dateInput) {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().split('T')[0];
}

// Bugünün tarihi YYYY-MM-DD formatında
function todayISO() {
    return new Date().toISOString().split('T')[0];
}

// Offline queue: Firebase yokken kaydedilen işlemler
function _queueOffline(path, data) {
    offlineQueue.push({ path, data, ts: Date.now() });
    localStorage.setItem('topclean_offline_queue', JSON.stringify(offlineQueue));
}

function _flushOfflineQueue() {
    if (!db || offlineQueue.length === 0) return;
    const toFlush = [...offlineQueue];
    offlineQueue = [];
    localStorage.setItem('topclean_offline_queue', '[]');
    toFlush.forEach(item => {
        db.ref(item.path).set(item.data).catch(err => {
            console.error('Offline flush error:', err);
            offlineQueue.push(item);
            localStorage.setItem('topclean_offline_queue', JSON.stringify(offlineQueue));
        });
    });
    if (toFlush.length > 0) console.log(`[TopClean] ${toFlush.length} offline işlem gönderildi.`);
}

function saveData(item) {
    item.id = Date.now().toString();
    cachedData.push(item);
    localStorage.setItem('topclean_data', JSON.stringify(cachedData));
    if (db) {
        db.ref('reports/' + item.id).set(item).catch(err => {
            console.warn('Firebase kaydet hatası, offline kuyruğa eklendi:', err);
            _queueOffline('reports/' + item.id, item);
        });
    } else {
        _queueOffline('reports/' + item.id, item);
    }
}

function saveAriza(ariza) {
    ariza.id = "ARZ_" + Date.now();
    ariza.onay_tarih = null;
    cachedArizalar.push(ariza);
    localStorage.setItem('topclean_arizalar', JSON.stringify(cachedArizalar));
    if (db) {
        db.ref('arizalar/' + ariza.id).set(ariza).catch(err => {
            _queueOffline('arizalar/' + ariza.id, ariza);
        });
    } else {
        _queueOffline('arizalar/' + ariza.id, ariza);
    }
}

// ---------- GÖREVLİ PANELİ ----------
function showArizaForm() {
    if (!currentUser || !currentKat) return;

    const bolumler = katlar[currentKat] ? Object.keys(katlar[currentKat]) : [];
    let opts = '<option value="">-- Bölüm Seçiniz --</option>';
    bolumler.forEach(b => {
        opts += `<option value="${b}">${b}</option>`;
    });

    Swal.fire({
        title: 'Teknik Arıza Bildir',
        html: `
            <div class="text-start">
                <label class="form-label text-white small fw-bold">ARIZALI BÖLÜM</label>
                <select id="arizaBolumSel" class="form-select custom-input mb-3 text-white border-secondary" style="background-color: var(--glass-bg);">
                    ${opts}
                </select>
                <label class="form-label text-white small fw-bold">ARIZA AÇIKLAMASI</label>
                <textarea id="arizaNot" class="form-control custom-input text-white border-secondary" style="background-color: var(--glass-bg);" placeholder="Örn: Priz çalışmıyor, ampul patlamış..." rows="3"></textarea>
            </div>
        `,
        background: 'var(--bg-main)',
        color: '#fff',
        showCancelButton: true,
        confirmButtonText: 'Gönder',
        cancelButtonText: 'İptal',
        confirmButtonColor: '#f59e0b',
        preConfirm: () => {
            const bolum = document.getElementById('arizaBolumSel').value;
            const not = document.getElementById('arizaNot').value.trim();
            if (!bolum) return Swal.showValidationMessage("Lütfen bir bölüm seçiniz!");
            if (!not) return Swal.showValidationMessage("Lütfen arıza detayını yazınız!");
            return { bolum, not };
        }
    }).then(res => {
        if (res.isConfirmed) {
            const ariza = {
                gonderen: currentUser.name,
                kat: currentKat,
                bolum: res.value.bolum,
                detay: res.value.not,
                durum: "bekliyor",
                tarih: new Date().getTime()
            };
            saveAriza(ariza);
            Swal.fire({
                icon: 'success',
                title: 'İletildi!',
                text: 'Teknik arıza talebiniz yetkililere gönderildi.',
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
}

function loadGorevliPanel(katAd) {
    currentKat = katAd;
    document.getElementById('gorevliKatAd').innerText = katAd;
    const listeEl = document.getElementById('bolumListesi');
    listeEl.innerHTML = "";

    // Stok butonu tüm hocalarda görünsün
    const stokBtn = document.getElementById('btnStokIslemi');
    if (stokBtn) stokBtn.classList.remove('d-none');

    // Ürün tanımlama butonu sadece Ara Kat görevlisinde görünsün
    const tanimlaBtn = document.getElementById('btnUrunTanimla');
    if (tanimlaBtn) {
        if (katAd === "Ara Kat") tanimlaBtn.classList.remove('d-none');
        else tanimlaBtn.classList.add('d-none');
    }

    // Burakhan Karaoğlan için DEPO YÖNETİMİ butonu
    const depoBtn = document.getElementById('btnEnvanterErisim');
    if (depoBtn) {
        if (currentUser.name === "Burakhan Karaoğlan") depoBtn.classList.remove('d-none');
        else depoBtn.classList.add('d-none');
    }

    const bolumler = katlar[katAd];

    // GÜVENLİK KONTROLÜ: Eğer kat yanlışsa (örn undefined) çökmeyi engelle
    if (!bolumler) {
        listeEl.innerHTML = "<div class='alert alert-danger mx-auto mt-4' style='max-width:400px;'>Bu hesaba tanımlanmış geçerli bir kat bulunamadı. (Kat: " + katAd + ")</div>";
        return;
    }

    const data = getData();
    // toShortDate ile locale-bağımsız tarih karşılaştırması
    const bugunISO = todayISO();

    let reddedilenCount = 0;

    // Arıza loglarını kontrol et
    const onarilanArizalar = cachedArizalar.filter(a => a.gonderen === currentUser.name && a.durum === "onarildi");
    const arizaKutu = document.getElementById('onarilanArizaUyari');
    const arizaList = document.getElementById('onarilanArizaList');
    if (arizaKutu) {
        if (onarilanArizalar.length > 0) {
            arizaKutu.classList.remove('d-none');
            arizaKutu.classList.add('d-flex');
            if (arizaList) arizaList.innerHTML = onarilanArizalar.map(a => `<div>• <b>${a.bolum}</b>: ${a.detay} (Onarıldı)</div>`).join('');
        } else {
            arizaKutu.classList.add('d-none');
            arizaKutu.classList.remove('d-flex');
        }
    }

    // --- SON GÖNDERİM ÖZETİ ---
    const bugunVeriler = data.filter(d => d.kat === katAd && toShortDate(parseInt(d.id)) === bugunISO);
    const gonderilen = new Set(bugunVeriler.map(d => d.bolum));
    const toplamBolum = Object.keys(bolumler).length;
    const sonGonderim = bugunVeriler.length > 0 ? bugunVeriler[bugunVeriler.length - 1] : null;
    const sonZaman = sonGonderim ? new Date(parseInt(sonGonderim.id)).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) : null;

    const ozetDiv = document.createElement('div');
    ozetDiv.className = 'glass-card p-3 mb-4 d-flex align-items-center gap-3';
    ozetDiv.style.borderLeft = '4px solid var(--accent-emerald)';
    const yuzde = toplamBolum > 0 ? Math.round((gonderilen.size / toplamBolum) * 100) : 0;
    ozetDiv.innerHTML = `
        <div class="d-flex align-items-center justify-content-center rounded-circle" style="width:48px;height:48px;background:rgba(16,185,129,0.15);flex-shrink:0;">
            <span style="font-size:1.4rem;">${yuzde === 100 ? '✨' : '📊'}</span>
        </div>
        <div class="flex-grow-1">
            <div class="fw-bold text-white" style="font-size:0.95rem;">Bugün ${gonderilen.size}/${toplamBolum} bölüm gönderildi</div>
            <div class="x-small text-muted">${sonGonderim ? 'Son: ' + sonZaman + ' - ' + sonGonderim.bolum : 'Henüz gönderim yapılmadı'}</div>
            <div class="progress mt-2" style="height:4px;background:rgba(255,255,255,0.1);border-radius:4px;">
                <div class="progress-bar bg-emerald" style="width:${yuzde}%;"></div>
            </div>
        </div>
    `;
    listeEl.appendChild(ozetDiv);

    // --- BÖLÜM KARTLARI ---
    const kartContainer = document.createElement('div');
    kartContainer.className = 'row g-3';

    for (const [bolumAd, kriterler] of Object.entries(bolumler)) {
        const gecmis = data.filter(d => d.kat === katAd && d.bolum === bolumAd && toShortDate(parseInt(d.id)) === bugunISO);
        let badgeYazi = "Bekliyor";
        let badgeClass = "badge-idle";
        let statusIcon = '⏳';
        let cardBorder = 'rgba(255,255,255,0.06)';

        if (gecmis.length > 0) {
            const son = gecmis[gecmis.length - 1];
            if (son.durum === "reddedildi") {
                reddedilenCount++;
                badgeClass = "badge-danger";
                badgeYazi = "REDDEDİLDİ";
                statusIcon = '❌';
                cardBorder = 'rgba(239, 68, 68, 0.4)';
            } else if (son.durum === "onaylandi") {
                badgeClass = "badge-success";
                badgeYazi = "ONAYLANDI ✨";
                statusIcon = '✅';
                cardBorder = 'rgba(16, 185, 129, 0.4)';
            } else {
                const isaretli = son.secilen.length;
                const toplam = kriterler.length;
                const oran = Math.floor((isaretli / toplam) * 100);
                badgeClass = "badge-warning";
                badgeYazi = `%${oran} İNCELENYOR`;
                statusIcon = '🔍';
                cardBorder = 'rgba(245, 158, 11, 0.4)';
            }
        }

        const aktifAriza = cachedArizalar.find(a => a.kat === katAd && a.bolum === bolumAd && a.durum === "bekliyor");
        const sonRapor = gecmis.length > 0 ? gecmis[gecmis.length - 1] : null;
        const isRejected = sonRapor && sonRapor.durum === "reddedildi";
        const rejectionNote = isRejected ? (sonRapor.mufettis_yorum || "Not belirtilmedi.") : "";

        const col = document.createElement('div');
        col.className = 'col-6';

        const kart = document.createElement('div');
        kart.className = 'glass-card stagger-item d-flex flex-column align-items-center text-center p-3 h-100 cursor-pointer';
        kart.style.cssText = `border: 2px solid ${cardBorder}; border-radius: 20px; transition: all 0.3s ease;`;
        kart.style.animationDelay = `${(Object.keys(bolumler).indexOf(bolumAd)) * 0.08}s`;

        kart.onmouseenter = () => { kart.style.transform = 'translateY(-4px)'; kart.style.boxShadow = '0 8px 25px rgba(16,185,129,0.15)'; };
        kart.onmouseleave = () => { kart.style.transform = ''; kart.style.boxShadow = ''; };

        kart.onclick = () => {
            console.log("Kart tıklandı:", bolumAd);
            if (isRejected) {
                Swal.fire({
                    icon: 'warning',
                    title: '❌ Müfettiş Bu Bölümü Reddetti',
                    html: `<div class="text-start"><p class="mb-2"><strong>Bölüm:</strong> ${bolumAd}</p><p class="mb-2"><strong>Müfettiş Notu:</strong></p><div class="p-3 rounded-3 mb-2" style="background: rgba(220,53,69,0.15); border: 1px solid #dc3545; color: #fca5a5;">${rejectionNote}</div><p class="small text-muted mt-3">Tamam'a basarsanız bölümü tekrar düzenleyebilirsiniz.</p></div>`,
                    background: 'var(--bg-main)',
                    color: '#fff',
                    confirmButtonText: 'Tamam, Düzenle',
                    confirmButtonColor: '#10b981',
                    showCancelButton: true,
                    cancelButtonText: 'Geri Dön',
                    cancelButtonColor: '#6c757d'
                }).then(res => {
                    if (res.isConfirmed) KriterManager.ac(katAd, bolumAd, kriterler);
                });
            } else {
                KriterManager.ac(katAd, bolumAd, kriterler);
            }
        };

        kart.innerHTML = `
            <div style="font-size:2rem;margin-bottom:8px;">${statusIcon}</div>
            <div class="fw-bold text-white" style="font-size:0.85rem;line-height:1.2;margin-bottom:6px;">${bolumAd}</div>
            ${aktifAriza ? '<span class="badge bg-warning text-dark rounded-pill" style="font-size:0.55rem;">🔧 Arızalı</span>' : ''}
            <div class="badge-status ${badgeClass} mt-auto w-100 py-1" style="font-weight:700;font-size:0.6rem;">${badgeYazi}</div>
        `;
        col.appendChild(kart);
        kartContainer.appendChild(col);
    }
    listeEl.appendChild(kartContainer);

    if (typeof lucide !== 'undefined') lucide.createIcons();

    if (reddedilenCount > 0) {
        document.getElementById('reddedilenUyari').classList.remove('d-none');
        document.getElementById('reddedilenSayi').innerText = reddedilenCount;
    } else {
        document.getElementById('reddedilenUyari').classList.add('d-none');
    }
}

// ---------- KRİTER EKLEME (CHECKLIST) ----------
const KriterManager = {
    ac: function (katAd, bolumAd, kriterler) {
        currentBolum = bolumAd;
        currentKriterler = kriterler;
        currentKat = katAd;

        document.getElementById('kriterKatAd').innerText = katAd;
        document.getElementById('kriterBolumAd').innerText = bolumAd;

        // Reset inputs
        this.fotografiSil();
        document.getElementById('gorevliNot').value = "";

        const listEl = document.getElementById('kriterListesi');
        listEl.innerHTML = "";

        // Panel animasyonu
        const panel = document.getElementById('kriterPanel');
        panel.classList.remove('panel-transition-next');
        void panel.offsetWidth; // Trigger reflow
        panel.classList.add('panel-transition-next');

        kriterler.forEach((k, idx) => {
            const div = document.createElement('div');
            div.className = 'kriter-kart p-3 d-flex align-items-center gap-3 cursor-pointer';
            div.setAttribute('data-kriter', k);

            // TERS MANTIK: Varsayılan olarak seçili (true)
            div.setAttribute('data-selected', 'true');

            div.innerHTML = `
                <div class="kriter-ikon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" 
                     style="width:36px;height:36px;background:rgba(16, 185, 129, 0.2);border:2px solid var(--accent-emerald);transition:all 0.25s ease;">
                    <i data-lucide="check" size="16" class="text-emerald"></i>
                </div>
                <span class="fs-6 text-white fw-bold" style="transition:all 0.25s ease;">${k}</span>
            `;

            div.onclick = () => {
                const isSelected = div.getAttribute('data-selected') === 'true';
                const ikon = div.querySelector('.kriter-ikon');
                const txt = div.querySelector('span');

                if (isSelected) {
                    div.setAttribute('data-selected', 'false');
                    div.style.background = '';
                    ikon.style.background = 'rgba(255,255,255,0.05)';
                    ikon.style.borderColor = 'rgba(255,255,255,0.15)';
                    ikon.innerHTML = '<i data-lucide="circle" size="16" class="text-muted"></i>';
                    txt.className = 'fs-6 text-white-50 fw-normal';
                } else {
                    div.setAttribute('data-selected', 'true');
                    div.style.background = 'rgba(16, 185, 129, 0.08)';
                    ikon.style.background = 'rgba(16, 185, 129, 0.2)';
                    ikon.style.borderColor = 'var(--accent-emerald)';
                    ikon.innerHTML = '<i data-lucide="check" size="16" class="text-emerald"></i>';
                    txt.className = 'fs-6 text-white fw-bold';
                }
                if (typeof lucide !== 'undefined') lucide.createIcons();
                this.guncelleSayac();
            };
            listEl.appendChild(div);
        });

        this.guncelleSayac();
        showPanel('kriterPanel');
        this.initSwipe();
    },

    guncelleSayac: function () {
        const kartlar = document.querySelectorAll('.kriter-kart');
        let isaretli = 0;
        kartlar.forEach(k => { if (k.getAttribute('data-selected') === 'true') isaretli++; });
        const toplam = currentKriterler.length;

        const badge = document.getElementById('kriterSayac');
        badge.innerText = `${isaretli}/${toplam} ${isaretli === toplam ? '✅' : '⏳'}`;
        badge.className = `badge rounded-pill px-3 py-2 fw-bold ${isaretli === toplam ? 'bg-emerald' : 'bg-warning text-dark'}`;
    },

    fabFotoYukle: function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            fotoDataURL = e.target.result;
            document.getElementById('fotoOnizleme').src = fotoDataURL;
            document.getElementById('fotoOnizlemeContainer').classList.remove('d-none');
            document.getElementById('btnKameraFAB').classList.add('has-photo');
            document.getElementById('fotoCheckBadge').classList.remove('d-none');
        };
        reader.readAsDataURL(file);
    },

    fotografiSil: function () {
        fotoDataURL = "";
        const input = document.getElementById('fotoUpload');
        if (input) input.value = "";
        document.getElementById('fotoOnizlemeContainer').classList.add('d-none');
        document.getElementById('btnKameraFAB').classList.remove('has-photo');
        document.getElementById('fotoCheckBadge').classList.add('d-none');
    },

    veriyiKaydet: function () {
        const kartlar = document.querySelectorAll('.kriter-kart');
        let secilenler = [];
        kartlar.forEach(k => { if (k.getAttribute('data-selected') === 'true') secilenler.push(k.getAttribute('data-kriter')); });

        const yorum = document.getElementById('gorevliNot').value.trim();

        // Fotoğraf teşviki
        if (!fotoDataURL) {
            Swal.fire({
                icon: 'question',
                title: '📸 Fotoğraf Eklenmedi',
                text: 'Fotoğraflı raporlar daha hızlı onaylanır. Yine de göndermek istiyor musun?',
                showCancelButton: true,
                confirmButtonText: 'Evet, Gönder',
                cancelButtonText: 'Fotoğraf Ekle',
                confirmButtonColor: '#10b981',
                cancelButtonColor: '#64748b',
                background: 'var(--bg-main)',
                color: '#fff'
            }).then(res => {
                if (res.isConfirmed) this._kaydetDevam(secilenler, yorum);
            });
            return;
        }
        this._kaydetDevam(secilenler, yorum);
    },

    _kaydetDevam: function (secilenler, yorum) {
        const item = {
            kat: currentKat,
            bolum: currentBolum,
            secilen: secilenler,
            foto: fotoDataURL,
            tarih: new Date().toISOString(),
            durum: "bekliyor",
            yorum: yorum,
            mufettis_yorum: ""
        };

        saveData(item);

        // Bir sonraki bölümü bul
        const sonraki = this.findNextSection();

        if (sonraki) {
            Swal.fire({
                icon: 'success',
                title: 'Kaydedildi!',
                text: `${currentBolum} tamamlandı. Sıradakine geçiliyor...`,
                timer: 1200,
                showConfirmButton: false
            }).then(() => {
                this.ac(currentKat, sonraki, katlar[currentKat][sonraki]);
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Tebrikler! ✨',
                text: `Kattaki tüm bölümler tamamlandı!`,
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                this.geriDon();
            });
        }
    },

    findNextSection: function () {
        const bolumler = Object.keys(katlar[currentKat] || {});
        const currentIndex = bolumler.indexOf(currentBolum);
        const data = getData();
        const bugunISO = todayISO();

        // Mevcut indexten sonrasına bak
        for (let i = 1; i < bolumler.length; i++) {
            const nextIdx = (currentIndex + i) % bolumler.length;
            const bName = bolumler[nextIdx];

            // Bugün raporu olmayan veya reddedilen var mı bak
            const gecmis = data.filter(d => d.kat === currentKat && d.bolum === bName && toShortDate(parseInt(d.id)) === bugunISO);
            if (gecmis.length === 0 || gecmis[gecmis.length - 1].durum === 'reddedildi') {
                return bName;
            }
        }
        return null;
    },

    geriDon: function () {
        loadGorevliPanel(currentKat);
        showPanel('gorevliPanel');
    },

    // Swipe Desteği
    initSwipe: function () {
        const panel = document.getElementById('kriterPanel');
        let touchstartX = 0;
        let touchendX = 0;

        panel.ontouchstart = e => { touchstartX = e.changedTouches[0].screenX; };
        panel.ontouchend = e => {
            touchendX = e.changedTouches[0].screenX;
            if (touchstartX - touchendX > 100) { // Sola kaydırma (Next)
                const sonraki = this.findNextSection();
                if (sonraki) this.ac(currentKat, sonraki, katlar[currentKat][sonraki]);
            }
            if (touchendX - touchstartX > 100) { // Sağa kaydırma (Back)
                this.geriDon();
            }
        };
    },

    rehberBilgi: function (bolum) {
        const b = bolum.toLowerCase();
        let title = "✨ Standart Temizlik Prosedürü";
        let content = `
            1. <b>HAVALANDIRMA:</b> Odaya girdiğinizde ilk iş camları açıp temiz hava girmesini sağlayın.<br>
            2. <b>ÇÖP BOŞALTMA:</b> Çöp kutularını boşaltın, torbaları yenileyin.<br>
            3. <b>TOZ ALMA:</b> Yukarıdan aşağıya (raflardan zemine) doğru toz alın.<br>
            4. <b>YÜZEY TEMİZLİĞİ:</b> Masaları ve temas noktalarını dezenfektanlı bezle silin.<br>
            5. <b>ZEMİNLER:</b> Zemini süpürün ve ardından uygun temizleyici ile paspaslayın.<br>
            6. <b>KOKU & DÜZEN:</b> Odaya hoş bir koku sıkın ve eşyaları düzeltin.<br>
            7. <b>KONTROL:</b> Çıkmadan önce odanın genel görünümünü %100 kontrol edin.
        `;

        if (b.includes("wc") || b.includes("lavabo")) {
            title = "🧼 WC Temizlik Talimatı";
            content = `
                1. <b>HİJYEN:</b> Eldivenlerinizi takın ve lavaboları dezenfektanla ovun.<br>
                2. <b>KLOZETLER:</b> İç kısımları fırçalayın, dış ve kapak kısımlarını alkol bazlı temizleyici ile silin.<br>
                3. <b>İKRAM/SARF:</b> Tuvalet kağıdı ve kağıt havluları yenileyin, sabunları doldurun.<br>
                4. <b>AYNALAR:</b> Cam temizleyici ile iz kalmayacak şekilde aynaları parlatın.<br>
                5. <b>ZEMİNLER:</b> Çamaşır sulu su ile zemini paspaslayın, gider deliklerini kontrol edin.<br>
                6. <b>HAVALANDIRMA:</b> Varsa fanı çalıştırın, kapıyı açık bırakarak havalandırın.
            `;
        } else if (b.includes("yatakhane") || b.includes("misafir")) {
            title = "🛏️ Yatakhane Temizlik Talimatı";
            content = `
                1. <b>YATAK DÜZENİ:</b> Çarşafları gerginleştirin ve yorganları nizami katlayın.<br>
                2. <b>ZEMİN:</b> Yatak altlarına giren tozları özel olarak temizleyin.<br>
                3. <b>DOLAPLAR:</b> Dolap üstlerinin tozunu alın ve parmak izlerini silin.<br>
                4. <b>HAVALANDIRMA:</b> Pencereleri en az 15 dakika tam açık tutun.<br>
                5. <b>KİŞİSEL ALAN:</b> Terliklerin ve ayakkabıların düzenli durduğundan emin olun.
            `;
        } else if (b.includes("mescit")) {
            title = "🕌 Mescit Temizlik Talimatı";
            content = `
                1. <b>HALILAR:</b> Halıları enine ve boyuna olacak şekilde güçlü vakumla süpürün.<br>
                2. <b>KİTAPLIK:</b> Elifba ve Kur'an-ı Kerim raflarının tozunu incitmeden alın.<br>
                3. <b>KÜRSÜ:</b> Kürsü ve mihrap çevresini detaylıca silin.<br>
                4. <b>ESANSLAMA:</b> Cemaati rahatsız etmeyecek hafif gül/misk kokusu uygulayın.<br>
                5. <b>DÜZEN:</b> Rahleleri ve tesbihleri düzenli sıralarına dizin.
            `;
        } else if (b.includes("çayhane") || b.includes("kantin") || b.includes("mutfak")) {
            title = "☕ Çayhane/Kantin Talimatı";
            content = `
                1. <b>HİJYEN:</b> Tezgah üzerlerini gıda dostu dezenfektanlarla temizleyin.<br>
                2. <b>DEMLİKLER:</b> Çay makinelerini ve demlikleri kireçten arındırıp parlatın.<br>
                3. <b>BARDAKLAR:</b> Bardaklarda su lekesi kalmadığını kontrol edin.<br>
                4. <b>ZEMİN:</b> Yapışkanlık kalmayacak şekilde sıcak su ve deterjanla silin.<br>
                5. <b>ÇÖPLER:</b> Gıda atığı içeren çöpleri bekletmeden dışarı çıkarın.
            `;
        } else if (b.includes("donanım") || b.includes("lab") || b.includes("robotik")) {
            title = "💻 Teknik Alan Temizlik Talimatı";
            content = `
                1. <b>TOZ ALMA:</b> Elektronik cihazlara asla ıslak bez sürmeyin, sadece kuru mikrofiber kullanın.<br>
                2. <b>ZEMİN:</b> Kablolara takılmadan, hassas hareketlerle paspas yapın.<br>
                3. <b>KLAVYELER:</b> Klavye ve mouse yüzeylerini dezenfektanlı mendille hafifçe silin.<br>
                4. <b>HAVALANDIRMA:</b> Tozu dışarı atacak şekilde pencereleri açın.<br>
                5. <b>GÜVENLİK:</b> Temizlik sonrası fişlerin ve kabloların yerinden oynamadığını kontrol edin.
            `;
        } else if (b.includes("merdiven") || b.includes("koridor")) {
            title = "🚶 Sirkülasyon Alanı Talimatı";
            content = `
                1. <b>KORKULUKLAR:</b> Merdiven korkuluklarını ve kapı kollarını dezenfekte edin.<br>
                2. <b>KÖŞELER:</b> Süpürgelik kenarlarında biriken tozları özel olarak alın.<br>
                3. <b>PASPAS:</b> Ayak altı çok olduğu için gerekirse günde 2 kez paspas geçin.<br>
                4. <b>AYDINLATMA:</b> Sensörlü lambaların düzgün çalıştığını kontrol edin.
            `;
        }

        Swal.fire({
            title: title,
            html: `
            <div style="text-align: left; font-size: 0.95rem; line-height: 1.6;">
                ${content}
            </div>
            `,
            background: 'var(--bg-main)',
            color: '#fff',
            confirmButtonText: 'Tamam',
            width: '600px'
        });
    }
};

// Image Upload Handler with Compression
function handleFotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const fotoDurum = document.getElementById('fotoDurum');
        fotoDurum.innerText = "İşleniyor...";
        fotoDurum.style.color = "var(--warning-color)";

        const reader = new FileReader();
        reader.onload = function (evt) {
            const tempImg = new Image();
            tempImg.onload = function () {
                // Resize using Canvas
                const canvas = document.createElement('canvas');
                let width = tempImg.width;
                let height = tempImg.height;
                const MAX_SIZE = 1024; // 1024px max

                if (width > height) {
                    if (width > MAX_SIZE) {
                        height *= MAX_SIZE / width;
                        width = MAX_SIZE;
                    }
                } else {
                    if (height > MAX_SIZE) {
                        width *= MAX_SIZE / height;
                        height = MAX_SIZE;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(tempImg, 0, 0, width, height);

                // Convert back to base64 with lower quality (0.7)
                fotoDataURL = canvas.toDataURL('image/jpeg', 0.7);

                fotoDurum.innerText = `✔ ${file.name} (Optimize Edildi)`;
                fotoDurum.style.color = "var(--success-color)";
                document.getElementById('fotoOnizleme').src = fotoDataURL;
                document.getElementById('fotoOnizlemeContainer').classList.remove('d-none');
            };
            tempImg.src = evt.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// ---------- İDARECİ / MÜFETTİŞ PANEL ----------
function loadAdminPanel() {
    try {
        const dateEl = document.getElementById('adminDateSelector');
        const katContainer = document.getElementById('mufettisKatButonlari');
        if (!katContainer || !dateEl) return;

        katContainer.innerHTML = "";
        const selectedDate = dateEl.value; // yyyy-mm-dd
        let allData = getData();
        const dayData = allData.filter(d => toShortDate(d.tarih) === selectedDate);

        const arizaCtn = cachedArizalar.filter(a => a.durum === "bekliyor").length;
        if (document.getElementById('adminArizaCount')) document.getElementById('adminArizaCount').innerText = arizaCtn;

        // Loop through Building Structure (katlar)
        Object.keys(katlar).reverse().forEach(katAd => {
            const bolumler = katlar[katAd];
            let bekleyenSayisi = 0;

            Object.keys(bolumler).forEach(b => {
                const rec = dayData.filter(d => d.kat === katAd && d.bolum === b).sort((a, b) => parseInt(b.id) - parseInt(a.id))[0];
                if (rec && rec.durum === 'bekliyor') bekleyenSayisi++;
            });

            const btn = document.createElement('button');
            const isActive = bekleyenSayisi > 0;
            btn.className = `btn d-flex justify-content-between align-items-center w-100 rounded-4 px-4 py-3 fw-bold border-0 kat-secim-btn ${isActive ? 'kat-aktif' : 'kat-pasif'}`;

            btn.innerHTML = `
                <span class="fs-6">${katAd}</span>
                <span class="badge ${isActive ? 'bg-white text-success' : 'bg-secondary text-white'} rounded-pill px-3 py-2">${bekleyenSayisi} Bekleyen</span>
            `;

            btn.onclick = () => MufettisFocus.basla(katAd, dayData);
            katContainer.appendChild(btn);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        console.error("loadAdminPanel Error:", e);
    }
}

const MufettisFocus = {
    odalar: [],
    index: 0,
    aktifKat: "",
    basla: function (katAd, dayData) {
        this.aktifKat = katAd;
        this.odalar = [];

        Object.keys(katlar[katAd]).forEach(b => {
            const rec = dayData.filter(d => d.kat === katAd && d.bolum === b).sort((a, b) => parseInt(b.id) - parseInt(a.id))[0];
            if (rec && rec.durum === 'bekliyor') {
                this.odalar.push(rec);
            }
        });

        if (this.odalar.length === 0) {
            Swal.fire({ icon: 'success', title: 'Dört Dörtlük', text: katAd + ' için denetim bekleyen oda yok, ellerinize sağlık.', timer: 2000, showConfirmButton: false });
            return;
        }

        this.index = 0;
        document.getElementById('mufettisKatSecim').classList.add('d-none');
        document.getElementById('mufettisOdakModu').classList.remove('d-none');
        document.getElementById('mufettisOdakModu').classList.add('d-flex');

        this.renderOda();
    },
    renderOda: function () {
        if (this.index >= this.odalar.length) {
            Swal.fire({ icon: 'success', title: 'Tebrikler 🎊', text: this.aktifKat + ' denetimini tamamen bitirdiniz!', timer: 2500, showConfirmButton: false });
            this.cikisYAP();
            return;
        }

        const oda = this.odalar[this.index];
        document.getElementById('focusKatIsim').innerText = this.aktifKat;

        const yuzde = Math.round((this.index / this.odalar.length) * 100);
        document.getElementById('focusYuzdeMetin').innerText = `%${yuzde} (${this.index}/${this.odalar.length})`;
        document.getElementById('focusIlerlemeBar').style.width = `${yuzde}%`;

        document.getElementById('focusOdaAdi').innerText = oda.bolum;

        const timeStr = new Date(oda.tarih).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
        document.getElementById('focusGorevliZaman').innerText = `${timeStr} - Görevli Onaya Sundu`;

        const notContainer = document.getElementById('focusGorevliNotContainer');
        if (oda.yorum) {
            notContainer.classList.remove('d-none');
            document.getElementById('focusGorevliNot').innerText = oda.yorum;
        } else {
            notContainer.classList.add('d-none');
        }

        const kart = document.getElementById('focusOdaKarti');
        kart.style.opacity = '1';
        kart.style.transform = 'scale(1) rotate(0deg)';
    },
    cikisYAP: function () {
        document.getElementById('mufettisOdakModu').classList.add('d-none');
        document.getElementById('mufettisOdakModu').classList.remove('d-flex');
        document.getElementById('mufettisHizliRetPanel').style.transform = 'translateY(100%)';
        document.getElementById('mufettisKatSecim').classList.remove('d-none');
        loadAdminPanel();
    },
    gec: function (sonuc, neden) {
        const oda = this.odalar[this.index];

        let data = getData();
        const idx = data.findIndex(d => d.id === oda.id);
        if (idx !== -1) {
            data[idx].durum = sonuc;
            data[idx].mufettis_yorum = neden || "";
            data[idx].mufettis_tarih = new Date().getTime();
            if (db) {
                db.ref('reports/' + oda.id).update({
                    durum: sonuc,
                    mufettis_yorum: neden || "",
                    mufettis_tarih: data[idx].mufettis_tarih
                });
            }
            localStorage.setItem('topclean_data', JSON.stringify(data));
            cachedData = data;
        }

        const kart = document.getElementById('focusOdaKarti');
        kart.style.transform = sonuc === 'onaylandi' ? 'translateX(120%) rotate(15deg)' : 'translateX(-120%) rotate(-15deg)';
        kart.style.opacity = '0';

        document.getElementById('mufettisHizliRetPanel').style.transform = 'translateY(100%)';
        document.getElementById('mufettisHizliRetPanel').style.pointerEvents = 'none';

        setTimeout(() => {
            kart.style.transition = 'none';
            kart.style.transform = 'translateY(20px) scale(0.9)';
            setTimeout(() => {
                kart.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s';
                this.index++;
                this.renderOda();
            }, 50);
        }, 300);
    },
    onayVer: function () {
        this.gec('onaylandi', "");
    },
    onBtnReddet: function () {
        document.getElementById('mufettisHizliRetPanel').style.transform = 'translateY(0)';
        document.getElementById('mufettisHizliRetPanel').style.pointerEvents = 'auto';
    },
    iptalRet: function () {
        document.getElementById('mufettisHizliRetPanel').style.transform = 'translateY(100%)';
        document.getElementById('mufettisHizliRetPanel').style.pointerEvents = 'none';
    },
    hizliRet: function (neden) {
        this.gec('reddedildi', neden);
    },
    acKlavyeRet: async function () {
        const { value: neden } = await Swal.fire({
            title: 'Kusur Nedeni',
            input: 'text',
            inputPlaceholder: 'Varsa yazınız...',
            showCancelButton: true,
            confirmButtonText: 'Reddet',
            cancelButtonText: 'İptal',
            background: 'var(--bg-main)',
            color: '#fff',
            confirmButtonColor: '#ef4444'
        });
        if (neden) {
            this.hizliRet(neden);
        } else {
            this.iptalRet();
        }
    }
};

const AdminManager = {

    exportCSV: function () {
        let data = getData();
        if (data.length === 0) return;

        let csvHeader = "ID,Kat,Bolum,KriterSayisi,Tarih,Durum,GorevliNotu,MufettisNotu\n";
        let csvBody = data.map(d => {
            return `${d.id},${d.kat},${d.bolum},${d.secilen.length},"${new Date(d.tarih).toLocaleString()}",${d.durum},"${d.yorum || ''}","${d.mufettis_yorum || ''}"`;
        }).join("\n");

        const blob = new Blob(["\uFEFF" + csvHeader + csvBody], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `TopClean_Rapor_${new Date().toLocaleDateString()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    showArizalar: function () {
        const bekleyenler = cachedArizalar.filter(a => a.durum === "bekliyor");
        if (bekleyenler.length === 0) {
            Swal.fire({ icon: 'info', title: 'Harika!', text: 'Bekleyen teknik arıza bulunmuyor.', confirmButtonColor: '#10b981' });
            return;
        }

        let html = '<div class="d-flex flex-column gap-3 text-start mt-3" style="max-height: 60vh; overflow-y: auto; padding-right: 5px;">';
        bekleyenler.forEach(a => {
            html += `
                <div class="glass-card p-3 border border-warning position-relative" style="background: rgba(245, 158, 11, 0.1);">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="fw-bold text-warning d-flex align-items-center gap-1"><i data-lucide="wrench" size="14"></i> ${a.kat} - ${a.bolum}</span>
                        <span class="small text-muted">${new Date(a.tarih).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div class="small text-white mb-2"><strong>Arıza:</strong> ${a.detay}</div>
                    <div class="small text-muted mb-3"><strong>Bildiren:</strong> ${a.gonderen}</div>
                    <button class="btn btn-sm btn-success w-100 fw-bold rounded-pill" onclick="AdminManager.onarildiIsaretle('${a.id}')">
                        <i data-lucide="check-circle" size="14"></i> Onarıldı Olarak İşaretle
                    </button>
                </div>
            `;
        });
        html += '</div>';

        Swal.fire({
            title: 'TEKNİK ARIZALAR',
            html: html,
            background: 'var(--bg-main)',
            color: '#fff',
            showConfirmButton: false,
            showCloseButton: true,
            didOpen: () => {
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
        });
    },

    onarildiIsaretle: function (arizaId) {
        Swal.fire({
            title: 'Emin misiniz?',
            text: "Bu durumdaki arıza 'onarıldı' olarak kaydedilecek ve görevliye bildirilecek.",
            icon: 'question',
            showCancelButton: true,
            background: 'var(--bg-main)',
            color: '#fff',
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Evet, Onarıldı',
            cancelButtonText: 'İptal'
        }).then((result) => {
            if (result.isConfirmed) {
                const idx = cachedArizalar.findIndex(a => a.id === arizaId);
                if (idx !== -1) {
                    cachedArizalar[idx].durum = "onarildi";
                    cachedArizalar[idx].onay_tarih = new Date().getTime();

                    localStorage.setItem('topclean_arizalar', JSON.stringify(cachedArizalar));

                    if (db) {
                        db.ref('arizalar/' + arizaId).update({
                            durum: "onarildi",
                            onay_tarih: cachedArizalar[idx].onay_tarih
                        });
                    }

                    Swal.fire({
                        icon: 'success',
                        title: 'İşlem Başarılı',
                        text: 'Arıza onarıldı olarak güncellendi.',
                        timer: 1500,
                        showConfirmButton: false
                    }).then(() => {
                        this.showArizalar(); // Listeyi yenile
                        loadAdminPanel(); // Sayacı yenile
                    });
                }
            }
        });
    }
};

// ---------- İDARECİ MANAGER (REMASTERED v4.0) ----------
// ---------- İDARECİ MANAGER (REMASTERED v4.0) ----------
const IdarecManager = {
    currentBinaKat: 'Hepsi',

    load: function () {
        try {
            const dateSel = document.getElementById('idarecDateSelector');
            if (dateSel) {
                dateSel.value = todayISO();
                dateSel.onchange = () => this.loadBinaDurumu();
            }

            this.updateStats();
            this.loadBinaDurumu();
            this.loadPersonel();
            this.loadMufettis();
            this.loadArizalar();
            this.initKatFilters();

            if (typeof lucide !== 'undefined') lucide.createIcons();
        } catch (e) {
            console.error("LOAD HATASI:", e);
            const panel = document.getElementById("idarecPanel");
            if (panel) {
                // Sadece en üstte küçük bir uyarı gösterelim ki bütün sayfa silinmesin
                const errDiv = document.createElement('div');
                errDiv.className = 'alert alert-danger m-3';
                errDiv.innerHTML = '<strong>Hata:</strong> Panel yüklenirken bir sorun oluştu. (' + e.message + ')';
                panel.prepend(errDiv);
            }
        }
    },

    updateStats: function () {
        const bekleyenAriza = cachedArizalar.filter(a => a.durum === "bekliyor").length;
        const elAriza = document.getElementById('countBekleyenAriza');
        if (elAriza) elAriza.innerText = bekleyenAriza;

        const deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        const totalStaff = usersData.filter(u => u.rol === 'gorevli' && !deletedFixed.includes(u.name)).length 
                          + JSON.parse(localStorage.getItem('topclean_users') || '[]').length;
        const elStaff = document.getElementById('countAktifPersonel');
        if (elStaff) elStaff.innerText = totalStaff;

        const todayData = getData().filter(d => toShortDate(parseInt(d.id)) === todayISO());
        const totalRooms = Object.values(katlar).reduce((acc, k) => acc + Object.keys(k).length, 0);
        const approvedRooms = todayData.filter(d => d.durum === 'onaylandi').length;
        const score = totalRooms > 0 ? Math.round((approvedRooms / totalRooms) * 100) : 0;
        
        const elScore = document.getElementById('genelHijyenText');
        if (elScore) elScore.innerText = `%${score}`;
    },

    switchTab: function (tab, btn) {
        document.querySelectorAll('.idarec-tab-content').forEach(el => el.classList.add('d-none'));
        document.querySelectorAll('.idarec-tab').forEach(el => el.classList.remove('active'));
        
        const targetTab = document.getElementById('idarec-tab-' + tab);
        if (targetTab) targetTab.classList.remove('d-none');
        btn.classList.add('active');

        if (tab === 'ari') this.loadArizalar();
        if (tab === 'personel') this.loadPersonel();
        if (tab === 'stok' && typeof InventoryManager !== 'undefined') InventoryManager.render();
        
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    initKatFilters: function() {
        const container = document.getElementById('katFilterButtons');
        if (!container) return;
        
        container.innerHTML = `<button class="btn btn-sm btn-outline-secondary rounded-pill px-3 fw-bold active kat-filter" onclick="IdarecManager.filterKat('Hepsi', this)">Tümü</button>`;
        
        Object.keys(katlar).forEach(kat => {
            const btn = document.createElement('button');
            btn.className = "btn btn-sm btn-outline-secondary rounded-pill px-3 fw-bold kat-filter";
            btn.style.borderColor = "rgba(255,255,255,0.2)";
            btn.style.color = "white";
            btn.innerText = kat.replace(' Katı', '').replace(' Kat', '');
            btn.onclick = (e) => this.filterKat(kat, e.target);
            container.appendChild(btn);
        });
    },

    filterKat: function (kat, btn) {
        this.currentBinaKat = kat;
        document.querySelectorAll('.kat-filter').forEach(el => el.classList.remove('active', 'btn-emerald'));
        btn.classList.add('active');
        this.loadBinaDurumu();
    },

    loadBinaDurumu: function () {
        const matris = document.getElementById('idarecBinaMatrisi');
        const dateSel = document.getElementById('idarecDateSelector');
        if (!matris || !dateSel) return;
        
        // 🔥 LOADING GÖSTER
        matris.innerHTML = '<h5 class="text-white mt-4 text-center"><i data-lucide="loader-2" class="spin"></i> Yükleniyor...</h5>';
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        const dayData = getData().filter(d => toShortDate(parseInt(d.id)) === dateSel.value);
        
        // 🔥 VERİ YOKSA FALLBACK VE DEBUG TEST
        if (!dayData || dayData.length === 0) {
            matris.innerHTML = '<div class="alert alert-warning mt-4 text-center w-100" style="background: rgba(245,158,11,0.1); border-color: #f59e0b; color: #f59e0b;">Seçili tarihe ait veri bulunamadı.</div>';
            matris.innerHTML += '<h6 class="text-white text-center mt-3 opacity-50">TEST BAŞARILI (Render Ediliyor)</h6>';
            return;
        }

        // 🔥 NORMAL RENDER
        matris.innerHTML = '';
        this.updateStats(); 

        Object.keys(katlar).forEach(katAd => {
            if (this.currentBinaKat !== 'Hepsi' && this.currentBinaKat !== katAd) return;

            const katDiv = document.createElement('div');
            katDiv.className = 'w-100 mb-4';
            katDiv.innerHTML = `<h6 class="text-white x-small fw-bold mb-2 opacity-50">${katAd.toUpperCase()}</h6>`;
            
            const roomsDiv = document.createElement('div');
            roomsDiv.className = 'd-flex flex-wrap gap-2';

            Object.keys(katlar[katAd]).forEach(bolum => {
                const report = dayData.find(d => d.kat === katAd && d.bolum === bolum);
                let bgColor = 'rgba(255,255,255,0.05)';
                let icon = '⭕';
                
                if (report) {
                    if (report.durum === 'onaylandi') { bgColor = 'rgba(16,185,129,0.2)'; icon = '✅'; }
                    else if (report.durum === 'reddedildi') { bgColor = 'rgba(239,68,68,0.2)'; icon = '❌'; }
                    else { bgColor = 'rgba(245,158,11,0.2)'; icon = '🔍'; }
                }

                const roomEl = document.createElement('div');
                roomEl.className = 'glass-card p-2 d-flex align-items-center gap-2';
                roomEl.style.minWidth = '120px';
                roomEl.style.background = bgColor;
                roomEl.innerHTML = `<span class="small">${icon}</span> <span class="x-small fw-bold text-white">${bolum}</span>`;
                if(report) {
                   roomEl.style.cursor = 'pointer';
                   roomEl.onclick = () => AdminManager.showDetail(report.id);
                }
                roomsDiv.appendChild(roomEl);
            });

            katDiv.appendChild(roomsDiv);
            matris.appendChild(katDiv);
        });

        this.loadBasari();
    },

    loadBasari: function() {
        const selectedDate = document.getElementById('idarecDateSelector')?.value || todayISO();
        const data = getData().filter(d => toShortDate(parseInt(d.id)) === selectedDate);
        
        const katStats = {};
        Object.keys(katlar).forEach(k => {
            const rooms = Object.keys(katlar[k]).length;
            const approved = data.filter(d => d.kat === k && d.durum === 'onaylandi').length;
            katStats[k] = rooms > 0 ? (approved / rooms) * 100 : 0;
        });

        const sorted = Object.entries(katStats).sort((a,b) => b[1] - a[1]);
        const gururEl = document.getElementById('gururTablosu');
        if (gururEl) {
            gururEl.innerHTML = sorted.slice(0, 3).map(([kat, score], idx) => `
                <div class="d-flex align-items-center justify-content-between mb-3 p-2 rounded-3" style="background: rgba(255,255,255,0.03);">
                    <div class="d-flex align-items-center gap-2">
                        <span class="fw-bold text-white">${idx+1}.</span>
                        <div>
                            <div class="x-small fw-bold text-white">${kat}</div>
                            <div class="progress" style="width: 60px; height: 3px; background: rgba(255,255,255,0.1);">
                                <div class="progress-bar bg-emerald" style="width: ${score}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="text-emerald fw-bold x-small">%${Math.round(score)}</div>
                </div>
            `).join('') || '<div class="text-muted text-center x-small">Bugün henüz veri yok</div>';
        }
    },
    loadMufettis: function () {
        const list = document.getElementById('mufettisListesi');
        if (!list) return;
        list.innerHTML = '';
        const fixedMuf = usersData.filter(u => u.rol === 'mufettis');
        const extraMuf = JSON.parse(localStorage.getItem('topclean_mufetts') || '[]');
        const all = fixedMuf.concat(extraMuf);

        all.forEach((u, idx) => {
            const isExtra = idx >= fixedMuf.length;
            const c = document.createElement('div');
            c.className = 'glass-card p-3 d-flex align-items-center justify-content-between stagger-item';
            c.innerHTML = `
                <div>
                    <div class="fw-bold text-white" style="font-size:0.9rem;">${u.name}</div>
                    <div class="x-small text-muted">İç Mesul${isExtra ? ' • Eklenen' : ' • Sistem'}</div>
                </div>
                <button class="btn btn-sm btn-outline-danger border-0 rounded-circle" onclick="IdarecManager.mufettisSil(${idx})">
                    <i data-lucide="trash-2" size="16"></i>
                </button>
            `;
            list.appendChild(c);
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    mufettisEkle: function () {
        const ad = document.getElementById('yeniMufettisAd').value.trim();
        const sifre = document.getElementById('yeniMufettisSifre').value.trim();
        if (!ad || !sifre) { Swal.fire({ icon:'warning', title:'Eksik Bilgi', text:'Ad ve şifre girin.' }); return; }
        
        const extraMuf = JSON.parse(localStorage.getItem('topclean_mufetts') || '[]');
        const newUser = { name: ad, pass: sifre, rol: 'mufettis', kat: 'Hepsi' };
        extraMuf.push(newUser);
        localStorage.setItem('topclean_mufetts', JSON.stringify(extraMuf));
        if (db) db.ref('users/' + ad).set(newUser);
        
        document.getElementById('yeniMufettisAd').value = '';
        document.getElementById('yeniMufettisSifre').value = '';
        Swal.fire({ icon:'success', title:'Başarılı', text: ad + ' müfettiş olarak eklendi.', timer: 1500, showConfirmButton: false });
        this.loadMufettis();
        initLoginSelect();
    },

    mufettisSil: function (idx) {
        const fixedMuf = usersData.filter(u => u.rol === 'mufettis');
        const extraMuf = JSON.parse(localStorage.getItem('topclean_mufetts') || '[]');
        if (idx < fixedMuf.length) { Swal.fire({ icon:'error', title:'Hata', text:'Sistem hesabı silinemez.' }); return; }
        
        const target = extraMuf[idx - fixedMuf.length];
        extraMuf.splice(idx - fixedMuf.length, 1);
        localStorage.setItem('topclean_mufetts', JSON.stringify(extraMuf));
        if (db && target) db.ref('users/' + target.name).remove();
        this.loadMufettis();
        initLoginSelect();
    },

    loadPersonel: function () {
        const list = document.getElementById('personelListesi');
        const katSel = document.getElementById('yeniPersonelKat');
        if (!list) return;
        list.innerHTML = '';
        
        if (katSel && katSel.options.length <= 1) {
            Object.keys(katlar).forEach(k => {
                const opt = new Option(k, k);
                katSel.add(opt);
            });
        }

        const deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        const fixed = usersData.filter(u => u.rol === 'gorevli' && !deletedFixed.includes(u.name));
        const extra = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        const all = fixed.concat(extra);

        all.forEach((u, idx) => {
            const isExtra = idx >= fixed.length;
            const c = document.createElement('div');
            c.className = 'glass-card p-3 d-flex align-items-center justify-content-between stagger-item';
            c.innerHTML = `
                <div class="d-flex align-items-center gap-3">
                    <div class="rounded-circle bg-emerald bg-opacity-10 p-2 text-emerald"><i data-lucide="user" size="18"></i></div>
                    <div>
                        <div class="fw-bold text-white" style="font-size:0.85rem;">${u.name}</div>
                        <div class="x-small text-muted">${u.kat}</div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="badge ${isExtra ? 'bg-warning' : 'bg-secondary'} bg-opacity-10 text-${isExtra ? 'warning' : 'secondary'} x-small p-1 px-2" style="font-size:0.6rem;">${isExtra ? 'YENİ' : 'SİSTEM'}</span>
                    <button class="btn btn-sm btn-outline-danger border-0 rounded-circle" onclick="IdarecManager.personelSil(${idx})">
                        <i data-lucide="trash-2" size="16"></i>
                    </button>
                </div>
            `;
            list.appendChild(c);
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    personelEkle: function () {
        const ad = document.getElementById('yeniPersonelAd').value.trim();
        const sifre = document.getElementById('yeniPersonelSifre').value.trim();
        const kat = document.getElementById('yeniPersonelKat').value;
        if (!ad || !sifre || !kat) { Swal.fire({ icon:'warning', title:'Eksik', text:'Alanları doldurun.' }); return; }
        
        const extras = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        const newUser = { name: ad, pass: sifre, kat: kat, rol: 'gorevli' };
        extras.push(newUser);
        localStorage.setItem('topclean_users', JSON.stringify(extras));
        if (db) db.ref('users/' + ad).set(newUser);
        
        document.getElementById('yeniPersonelAd').value = '';
        document.getElementById('yeniPersonelSifre').value = '';
        this.loadPersonel();
        initLoginSelect();
    },

    personelSil: function (idx) {
        const deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        const fixed = usersData.filter(u => u.rol === 'gorevli' && !deletedFixed.includes(u.name));
        const extra = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        let targetName = "";

        if (idx < fixed.length) {
            targetName = fixed[idx].name;
            deletedFixed.push(targetName);
            localStorage.setItem('topclean_deleted_fixed_users', JSON.stringify(deletedFixed));
            if (db) db.ref('deleted_fixed_users').set(deletedFixed);
        } else {
            const target = extra[idx - fixed.length];
            targetName = target.name;
            extra.splice(idx - fixed.length, 1);
            localStorage.setItem('topclean_users', JSON.stringify(extra));
        }
        
        if (db && targetName) db.ref('users/' + targetName).remove();
        Swal.fire({ icon:'info', title:'Silindi', text: targetName + ' kaldırıldı.', timer: 1500, showConfirmButton: false });
        this.loadPersonel();
        initLoginSelect();
    },

    exportCSV: function () {
        const dateSel = document.getElementById('idarecDateSelector');
        if (!dateSel) return;
        const selectedDate = dateSel.value;
        const dayData = getData().filter(d => toShortDate(parseInt(d.id)) === selectedDate);
        if (dayData.length === 0) { Swal.fire({ icon:'info', title:'Kayıt Yok', text:'Seçilen tarih için rapor bulunamadı.' }); return; }

        let csv = "\uFEFFKat,Bolum,Saat,Durum,GorevliNotu,IcMesulNotu\n";
        csv += dayData.map(d => {
            const saat = new Date(parseInt(d.id)).toLocaleTimeString('tr-TR', {hour:'2-digit', minute:'2-digit'});
            return `"${d.kat}","${d.bolum}","${saat}","${d.durum}","${(d.yorum || '').replace(/"/g, '""')}","${(d.mufettis_yorum || '').replace(/"/g, '""')}"`;
        }).join("\n");

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `TopClean_Rapor_${selectedDate}.csv`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        
        setTimeout(() => {
            Swal.fire({
                title: 'İndirme Başarılı',
                text: 'Google Drive\'a yüklemek ister misiniz?',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Drive\'ı Aç'
            }).then(res => { if(res.isConfirmed) window.open("https://drive.google.com/drive/my-drive", "_blank"); });
        }, 1000);
    },

    loadArizalar: function() {
        const container = document.getElementById('idarecArizaListesi');
        if (!container) return;
        
        const bekleyenler = cachedArizalar.filter(a => a.durum === 'bekliyor');
        if (bekleyenler.length === 0) {
            container.innerHTML = '<div class="col-12 text-center py-5 text-muted x-small">Bekleyen teknik arıza bulunmuyor.</div>';
            return;
        }

        container.innerHTML = bekleyenler.map(a => `
            <div class="col-12 col-md-6 stagger-item">
                <div class="glass-card p-3 border-start border-warning" style="border-left-width: 4px !important;">
                    <div class="d-flex justify-content-between mb-2">
                        <span class="x-small fw-bold text-warning">${a.kat} / ${a.bolum}</span>
                        <span class="x-small text-muted">${new Date(a.tarih).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                    </div>
                    <div class="text-white small mb-3">${a.detay}</div>
                    <button class="btn btn-sm btn-emerald-lg w-100" onclick="AdminManager.onarildiIsaretle('${a.id}')">ONARILDI OLARAK İŞARETLE</button>
                </div>
            </div>
        `).join('');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
};

// ---------- LİSTE DAĞILIMI MANAGER V3 (POSTER MODE) ----------
const ListeManager = {
    load: function () {
        const listeSonuclari = document.getElementById('listeSonuclari');
        if (!listeSonuclari) return;

        // 🔥 LOADING GÖSTER
        listeSonuclari.innerHTML = '<h5 class="text-white mt-4 text-center"><i data-lucide="loader-2" class="spin"></i> Liste Yükleniyor...</h5>';
        if (typeof lucide !== 'undefined') lucide.createIcons();

        const saved = localStorage.getItem('topclean_talebe_listesi');
        
        // 🔥 VERİ YOKSA FALLBACK VE DEBUG TEST
        if (!saved || saved === 'null' || saved === '{}' || saved === '[]') {
            listeSonuclari.innerHTML = '<div class="alert alert-warning mt-4 text-center w-100" style="background: rgba(245,158,11,0.1); border-color: #f59e0b; color: #f59e0b;">Liste verisi bulunamadı. Lütfen "Dağıt" butonuna basın.</div>';
            listeSonuclari.innerHTML += '<h6 class="text-white text-center mt-3 opacity-50">LİSTE TEST (Render Ediliyor)</h6>';
            this.updateStats();
            return;
        }

        // 🔥 NORMAL RENDER
        try {
            const data = JSON.parse(saved);
            const elAlerjik = document.getElementById('listAlerjik');
            const elAstim = document.getElementById('listAstim');
            const elSaglikli = document.getElementById('listSaglikli');
            const elDiger = document.getElementById('listDiger');
            const elPeriod = document.getElementById('cleaningPeriod');

            if (elAlerjik) elAlerjik.value = data.alerjik || "";
            if (elAstim) elAstim.value = data.astim || "";
            if (elSaglikli) elSaglikli.value = data.saglikli || "";
            if (elDiger) elDiger.value = data.diger || "";
            if (elPeriod) elPeriod.value = data.period || "";

            if (data.sonuclar) {
                this.renderSonuclar(data.sonuclar, data.baskanlar || {}, data.locks || {});
            } else {
                listeSonuclari.innerHTML = '<div class="glass-card p-4 text-center text-muted small stagger-item">Henüz dağıtım yapılmadı. "Dağıt" butonuna basın.</div>';
            }
        } catch(e) {
            console.error("ListeManager.load Parse Error:", e);
            listeSonuclari.innerHTML = '<div class="alert alert-danger mt-4 text-center">Veri okuma hatası oluştu.</div>';
        }

        this.updateStats();
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    toggleEdit: function () {
        const area = document.getElementById('listeInputArea');
        area.classList.toggle('d-none');
        this.updateStats();
    },

    updateStats: function () {
        const parseList = (id) => document.getElementById(id).value.split(',').map(s => s.trim()).filter(s => s !== "");
        const tCount = [...parseList('listAlerjik'), ...parseList('listAstim'), ...parseList('listSaglikli'), ...parseList('listDiger')].length;

        let capacity = 0;
        let floorStats = [];
        Object.keys(katlar).forEach(kat => {
            let fCap = 0;
            Object.keys(katlar[kat]).forEach(oda => {
                let nameLower = oda.toLowerCase();
                let isWc = nameLower.includes("wc") || nameLower.includes("lavabo");
                let isSmall = nameLower.includes("merdiven") || nameLower.includes("donanım") || nameLower.includes("muhasebe");
                if (!isSmall) fCap += (isWc ? 2 : 1);
            });
            capacity += fCap;
            floorStats.push(fCap);
        });

        const capEl = document.getElementById('statsKapasite');
        const talEl = document.getElementById('statsTalebe');
        const bosEl = document.getElementById('statsBos');
        if (capEl) capEl.innerText = capacity;
        if (talEl) talEl.innerText = tCount;
        if (bosEl) bosEl.innerText = Math.max(0, capacity - tCount);

        const hTarget = document.getElementById('statsHeatmap');
        if (hTarget) {
            hTarget.innerHTML = "";
            floorStats.forEach(cap => {
                const dot = document.createElement('div');
                dot.className = "heatmap-dot " + (cap > 5 ? 'high' : (cap > 2 ? 'med' : 'low'));
                hTarget.appendChild(dot);
            });
        }
    },

    smartPaste: async function (targetId) {
        const { value: text } = await Swal.fire({
            title: 'Listeyi Yapıştır',
            input: 'textarea',
            inputPlaceholder: 'İsimleri buraya yapıştırın...',
            showCancelButton: true,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)'
        });
        if (text) {
            const names = text.split(/[\n,\t]/).map(s => s.trim()).filter(s => s.length > 1);
            const current = document.getElementById(targetId).value;
            const combined = current ? current + ", " + names.join(", ") : names.join(", ");
            document.getElementById(targetId).value = combined;
            this.updateStats();
            this.save();
        }
    },

    save: function (sonuclar = null, baskanlar = null, locks = null) {
        const currentData = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const data = {
            alerjik: document.getElementById('listAlerjik').value,
            astim: document.getElementById('listAstim').value,
            saglikli: document.getElementById('listSaglikli').value,
            diger: document.getElementById('listDiger').value,
            period: document.getElementById('cleaningPeriod').value,
            sonuclar: sonuclar || currentData.sonuclar,
            baskanlar: baskanlar || currentData.baskanlar || {},
            locks: locks || currentData.locks || {}
        };
        localStorage.setItem('topclean_talebe_listesi', JSON.stringify(data));
        if (db) db.ref('student_distribution').set(data);
    },

    getPoolNames: function () {
        const parseList = (id) => document.getElementById(id).value.split(',').map(s => s.trim()).filter(s => s !== "");
        return [...parseList('listAlerjik'), ...parseList('listAstim'), ...parseList('listSaglikli'), ...parseList('listDiger')];
    },

    dagit: function () {
        const resBox = document.getElementById('listeSonuclari');
        if (resBox) {
            resBox.classList.add('magic-shuffle-active');
            setTimeout(() => resBox.classList.remove('magic-shuffle-active'), 800);
        }

        const currentData = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const baskanlar = currentData.baskanlar || {};
        const locks = currentData.locks || {};

        const parseList = (id) => document.getElementById(id).value.split(',').map(s => s.trim()).filter(s => s !== "");
        let studentsCategories = {
            alerjik: parseList('listAlerjik'),
            astim: parseList('listAstim'),
            saglikli: parseList('listSaglikli'),
            diger: parseList('listDiger')
        };

        let allPool = [...studentsCategories.astim, ...studentsCategories.alerjik, ...studentsCategories.saglikli, ...studentsCategories.diger];
        const lockedInRooms = [];
        Object.keys(locks).forEach(key => lockedInRooms.push(locks[key]));
        allPool = allPool.filter(n => !lockedInRooms.includes(n));

        let distribution = {};
        let rooms = [];
        Object.keys(katlar).forEach(kat => {
            Object.keys(katlar[kat]).forEach(oda => {
                let type = "genel";
                let nameLower = oda.toLowerCase();
                if (nameLower.includes("wc") || nameLower.includes("lavabo")) type = "lavabo";
                else if (nameLower.includes("merdiven") || nameLower.includes("donanım") || nameLower.includes("muhasebe")) type = "dar";

                let capacity = type === "lavabo" ? 2 : 1;
                let assigned = [];
                for (let i = 0; i < capacity; i++) {
                    const lockId = `${kat}-${oda}-${i}`;
                    if (locks[lockId]) assigned[i] = locks[lockId];
                }
                rooms.push({ kat, oda, type, capacity, assigned });
            });
        });

        let pool_astim = allPool.filter(n => studentsCategories.astim.includes(n));
        let pool_alerjik = allPool.filter(n => studentsCategories.alerjik.includes(n));
        let pool_genel = allPool.filter(n => studentsCategories.saglikli.includes(n) || studentsCategories.diger.includes(n));

        const fill = (pool, condition) => {
            rooms.forEach(r => {
                if (condition(r)) {
                    for (let i = 0; i < r.capacity; i++) {
                        if (!r.assigned[i] && pool.length > 0) {
                            r.assigned[i] = pool.shift();
                        }
                    }
                }
            });
        };

        fill(pool_astim, (r) => r.type !== "dar");
        fill(pool_alerjik, (r) => r.type !== "lavabo");
        fill(pool_genel, () => true);
        fill(pool_astim, () => true);
        fill(pool_alerjik, () => true);

        const baskanNames = Object.values(baskanlar);
        rooms.forEach(r => {
            r.assigned = r.assigned.map((n, i) => {
                const lockId = `${r.kat}-${r.oda}-${i}`;
                if (locks[lockId]) return n;
                return baskanNames.includes(n) ? "" : n;
            }).filter(n => n !== undefined);
        });

        rooms.forEach(r => {
            if (!distribution[r.kat]) distribution[r.kat] = {};
            distribution[r.kat][r.oda] = r.assigned;
        });

        this.renderSonuclar(distribution, baskanlar, locks);
        this.save(distribution, baskanlar, locks);
        this.updateStats();
    },

    toggleLock: function (kat, oda, index, name) {
        if (!name) return;
        const data = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const locks = data.locks || {};
        const lockId = `${kat}-${oda}-${index}`;
        if (locks[lockId]) delete locks[lockId];
        else locks[lockId] = name;
        this.save(null, null, locks);
        this.renderSonuclar(data.sonuclar, data.baskanlar, locks);
    },

    setBaskan: function (kat, isim) {
        const data = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const baskanlar = data.baskanlar || {};
        if (isim.trim() === "") {
            delete baskanlar[kat];
            this.save(null, baskanlar);
            this.dagit();
            return;
        }
        const havuz = this.getPoolNames();
        if (!havuz.includes(isim)) {
            Swal.fire('Hata', 'İsim listede bulunamadı!', 'error');
            return;
        }
        baskanlar[kat] = isim;
        this.save(null, baskanlar);
        this.dagit();
    },

    renderSonuclar: function (dist, baskanlar = {}, locks = {}) {
        const target = document.getElementById('listeSonuclari');
        if (!target) return;
        target.innerHTML = "";

        Object.keys(dist).forEach((kat, kIdx) => {
            const allUsers = [...usersData, ...(JSON.parse(localStorage.getItem('topclean_users') || '[]'))];
            const hoca = allUsers.find(u => u.kat === kat && u.rol === 'gorevli');
            const wrap = document.createElement('div');
            wrap.className = "stagger-item mb-4";
            wrap.style.animationDelay = (kIdx * 0.1) + "s";
            wrap.innerHTML = `
                <div class="d-flex align-items-center justify-content-between gap-2 mb-3 px-2">
                    <div class="x-small text-muted fw-bold">👤 ${hoca ? hoca.name : 'Hoca Atanmamış'}</div>
                    <div class="px-3 py-1 glass-card rounded-pill fw-bold small text-white" style="border: 1px solid var(--accent-primary);">${kat}</div>
                    <div class="d-flex align-items-center gap-1">
                        <input type="text" class="form-control form-control-sm bg-transparent border-0 text-emerald text-end p-0 shadow-none fw-bold" 
                                style="width: 80px; font-size: 0.75rem;" placeholder="Başkan" 
                                value="${baskanlar[kat] || ''}" 
                                onblur="ListeManager.setBaskan('${kat}', this.value)">
                    </div>
                </div>
                <div class="row g-2 mx-0" id="res-rooms-${kIdx}"></div>
            `;
            target.appendChild(wrap);

            const row = document.getElementById(`res-rooms-${kIdx}`);
            Object.keys(dist[kat]).forEach(oda => {
                const names = dist[kat][oda];
                const isWc = oda.toLowerCase().includes("wc") || oda.toLowerCase().includes("lavabo");
                const capacity = isWc ? 2 : 1;
                const col = document.createElement('div');
                col.className = "col-12 col-md-6 px-1";

                let namesCardHTML = "";
                for (let i = 0; i < capacity; i++) {
                    const name = names[i] || "";
                    const lockId = `${kat}-${oda}-${i}`;
                    const isLocked = !!locks[lockId];
                    namesCardHTML += `
                        <div class="d-flex align-items-center justify-content-between py-1 border-bottom border-secondary border-opacity-25">
                            <span class="${name ? 'text-emerald' : 'text-danger fw-bold'} x-small cursor-pointer flex-grow-1" onclick="ListeManager.editOda('${kat}', '${oda}', ${i})">
                                ${name || '🆕 Ekle'}
                            </span>
                            <div class="d-flex gap-2">
                                <i data-lucide="${isLocked ? 'lock' : 'unlock'}" size="12" class="btn-lock ${isLocked ? 'active' : ''}" onclick="ListeManager.toggleLock('${kat}', '${oda}', ${i}, '${name}')"></i>
                            </div>
                        </div>
                    `;
                }

                col.innerHTML = `
                    <div class="glass-card p-2 px-3 h-100">
                        <div class="fw-bold text-white small mb-1">${oda}</div>
                        <div class="d-flex flex-column">${namesCardHTML}</div>
                    </div>
                `;
                row.appendChild(col);
            });
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    editOda: async function (kat, oda, index) {
        const data = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const dist = data.sonuclar;
        const { value: newName } = await Swal.fire({
            title: `${oda} Değiştir`,
            input: 'text',
            inputValue: dist[kat][oda][index] || "",
            showCancelButton: true,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)'
        });
        if (newName !== undefined) {
            if (newName.trim() === "") dist[kat][oda].splice(index, 1);
            else dist[kat][oda][index] = newName;
            this.save(dist);
            this.renderSonuclar(dist, data.baskanlar, data.locks);
        }
    },

    exportPDF: async function () {
        const area = document.getElementById('listeDisaAktarimAlani');
        const period = document.getElementById('cleaningPeriod').value;
        const posterPeriodEl = document.getElementById('posterPeriod');
        if (posterPeriodEl) posterPeriodEl.innerText = period || new Date().toLocaleDateString();

        area.classList.add('is-exporting');
        Swal.fire({ title: 'PDF Hazırlanıyor...', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });

        const { jsPDF } = window.jspdf;
        const canvas = await html2canvas(area, { scale: 2, backgroundColor: '#000', useCORS: true });
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.save(`TopClean_Liste_${period ? period.replace(/\s+/g, '_') : 'Guncel'}.pdf`);

        area.classList.remove('is-exporting');
        Swal.close();
    },

    exportImage: async function () {
        const area = document.getElementById('listeDisaAktarimAlani');
        const period = document.getElementById('cleaningPeriod').value;
        const posterPeriodEl = document.getElementById('posterPeriod');
        if (posterPeriodEl) posterPeriodEl.innerText = period || new Date().toLocaleDateString();

        area.classList.add('is-exporting');
        Swal.fire({ title: 'Resim Oluşturuluyor...', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });

        const canvas = await html2canvas(area, { scale: 2, backgroundColor: '#000', useCORS: true });
        const link = document.createElement('a');
        link.download = `TopClean_Liste_${new Date().getTime()}.png`;
        link.href = canvas.toDataURL();
        link.click();

        area.classList.remove('is-exporting');
        Swal.close();
    }
};



// ---------- STOK (INVENTORY) MANAGER ----------
const InventoryManager = {
    ac: function () {
        showPanel('stokPanel');
        this.render();
    },

    kapat: function () {
        if (currentUser.rol === 'idareci') {
            showPanel('idarecPanel');
        } else {
            showPanel('gorevliPanel');
        }
    },

    render: function () {
        const container = document.getElementById('stokListesi');
        if (!container) return;

        const searchInput = document.getElementById('stokSearchInput');
        const search = searchInput ? searchInput.value.toLowerCase() : "";

        let items = [];
        try {
            items = Array.isArray(cachedInventory) ? cachedInventory : Object.values(cachedInventory || {});
        } catch (e) { items = []; }

        if (search) {
            items = items.filter(i => i && i.name && i.name.toLowerCase().includes(search));
        }

        container.innerHTML = "";

        if (items.length === 0) {
            container.innerHTML = '<div class="col-12 text-center text-muted p-5 glass-card border-dashed" style="border: 2px dashed var(--glass-border);">📦 Gösterilecek ürün bulunamadı.</div>';
        }

        items.forEach(item => {
            const isCritical = item.threshold && item.amount <= item.threshold;
            const div = document.createElement('div');
            div.className = "col-12 col-md-6 col-lg-4";
            div.innerHTML = `
                <div class="glass-card p-3 h-100 position-relative ${isCritical ? 'border-danger shadow-danger-sm' : ''}" style="transition: all 0.3s ease;">
                    ${isCritical ? '<span class="position-absolute top-0 end-0 m-2 badge bg-danger" style="font-size:0.6rem; animation: pulse-red 2s infinite;">KRİTİK</span>' : ''}
                    <div class="small fw-bold text-dim mb-1 text-uppercase">${item.unit}</div>
                    <h5 class="fw-bold text-white mb-3" style="font-size: 1.1rem;">${item.name}</h5>
                    
                    <div class="d-flex align-items-end justify-content-between mb-3">
                        <div>
                            <div class="stat-value ${isCritical ? 'text-danger' : 'text-emerald'}" style="font-size: 1.8rem;">${item.amount}</div>
                            <div class="x-small text-muted">Limit: ${item.threshold || 'Söz Konusu Değil'}</div>
                        </div>
                        <div class="d-flex gap-1">
                            <button class="btn btn-sm btn-glass-round" onclick="InventoryManager.showLogs('${item.id}')" title="Geçmiş">
                                <i data-lucide="list" size="14"></i>
                            </button>
                            <button class="btn btn-sm btn-glass-round ${currentUser.rol === 'idareci' ? '' : 'd-none'}" onclick="InventoryManager.setThreshold('${item.id}')" title="Limit Düzenle">
                                <i data-lucide="bell-ring" size="14"></i>
                            </button>
                            <button class="btn btn-sm btn-glass-round text-danger-glow ${currentUser.rol === 'idareci' || (currentUser.rol === 'gorevli' && (currentUser.kat === 'Ara Kat' || currentUser.kat === '2. Kat')) ? '' : 'd-none'}" onclick="InventoryManager.deleteProduct('${item.id}')" title="Sil">
                                <i data-lucide="trash-2" size="14"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });

        this.checkCriticalLevels();
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    checkCriticalLevels: function () {
        const panel = document.getElementById('stokKritikPanel');
        const list = document.getElementById('stokKritikListe');
        if (!panel || !list) return;

        const criticalItems = cachedInventory.filter(i => i.threshold && i.amount <= i.threshold);

        if (criticalItems.length > 0) {
            panel.classList.remove('d-none');
            list.innerHTML = criticalItems.map(i => `• <b>${i.name}</b> stoğu azaldı (${i.amount} ${i.unit} kaldı, limit: ${i.threshold})`).join('<br>');
        } else {
            panel.classList.add('d-none');
        }
    },

    showAddProductForm: async function () {
        const isEligible = (currentUser.rol === 'gorevli' && (currentUser.kat === 'Ara Kat' || currentUser.kat === '2. Kat')) || currentUser.rol === 'idareci';
        if (!isEligible) {
            return Swal.fire({ icon: 'error', title: 'Yetki Hatası', text: 'Ürün tanımlama yetkisi Depo Sorumlusuna (Ara Kat) veya İdarecilere aittir.' });
        }
        const { value: formValues } = await Swal.fire({
            title: 'Yeni Ürün Ekle',
            html: `
                <div class="text-start">
                    <label class="small fw-bold text-white mb-1">Ürün İsmi</label>
                    <input id="swal-input-name" class="form-control custom-input mb-3" placeholder="Örn: Sıvı Sabun">
                    <label class="small fw-bold text-white mb-1">Birim</label>
                    <select id="swal-input-unit" class="form-select custom-input mb-3">
                        <option value="Litre">Litre</option>
                        <option value="Adet">Adet</option>
                        <option value="Paket">Paket</option>
                        <option value="Rulo">Rulo</option>
                        <option value="Koli">Koli</option>
                    </select>
                    <label class="small fw-bold text-white mb-1">Mevcut Miktar</label>
                    <input id="swal-input-amount" type="number" class="form-control custom-input mb-3" placeholder="0">
                </div>
            `,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)',
            confirmButtonText: 'Devam Et',
            showCancelButton: true,
            cancelButtonText: 'İptal',
            preConfirm: () => {
                const name = document.getElementById('swal-input-name').value.trim();
                const unit = document.getElementById('swal-input-unit').value;
                const amount = parseInt(document.getElementById('swal-input-amount').value) || 0;
                if (!name) return Swal.showValidationMessage('Lütfen ürün ismi girin!');
                return { name, unit, amount };
            }
        });

        if (formValues) {
            const { value: threshold } = await Swal.fire({
                title: 'Bildirim Limiti',
                text: `${formValues.name} miktarı kaça düştüğünde size bildirim gelsin?`,
                input: 'number',
                inputPlaceholder: 'Örn: 5',
                background: 'var(--bg-main)',
                color: 'var(--text-primary)',
                confirmButtonText: 'Kaydet',
                allowOutsideClick: false
            });

            const newItem = {
                id: "PRD_" + new Date().getTime(),
                name: formValues.name,
                unit: formValues.unit,
                amount: formValues.amount,
                threshold: parseInt(threshold) || 0
            };

            cachedInventory.push(newItem);
            localStorage.setItem('topclean_inventory', JSON.stringify(cachedInventory));
            if (db) db.ref('inventory/' + newItem.id).set(newItem);

            this.logMovement(newItem.id, formValues.amount, "ekleme", "İlk Stok Girişi");

            Swal.fire({ icon: 'success', title: 'Ürün Eklendi', timer: 1500, showConfirmButton: false });
            this.render();
        }
    },

    showThresholdConfig: async function () {
        if (currentUser.rol !== 'idareci') {
            return Swal.fire({ icon: 'error', title: 'Yetki Hatası', text: 'Bildirim limitlerini sadece İdareci düzenleyebilir.' });
        }

        if (cachedInventory.length === 0) {
            return Swal.fire({ icon: 'info', title: 'Ürün Yok', text: 'Önce ürün eklemeniz gerekiyor.' });
        }

        let options = {};
        cachedInventory.forEach(i => options[i.id] = i.name);

        const { value: productId } = await Swal.fire({
            title: 'Bildirim Ayarla',
            text: 'Limitini belirlemek istediğiniz malzemeyi seçin:',
            input: 'select',
            inputOptions: options,
            inputPlaceholder: '-- Malzeme Seç --',
            showCancelButton: true,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)'
        });

        if (productId) {
            this.setThreshold(productId);
        }
    },

    showMovementForm: async function () {
        if (cachedInventory.length === 0) {
            return Swal.fire({ icon: 'info', title: 'Ürün Yok', text: 'Sistemde henüz ürün tanımlı değil.' });
        }

        const canAdd = currentUser.rol === 'idareci' || (currentUser.rol === 'gorevli' && (currentUser.kat === 'Ara Kat' || currentUser.kat === '2. Kat'));

        let options = {};
        cachedInventory.forEach(i => options[i.id] = i.name);

        const { value: productId } = await Swal.fire({
            title: 'Malzeme İşlemi',
            input: 'select',
            inputOptions: options,
            inputPlaceholder: '-- Malzeme Seçin --',
            showCancelButton: true,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)'
        });

        if (productId) {
            const item = cachedInventory.find(i => i.id === productId);
            const { value: result } = await Swal.fire({
                title: item.name,
                html: `
                    <div class="mb-3">Mevcut: <b>${item.amount} ${item.unit}</b></div>
                    <div class="row g-2">
                        <div class="col-6 ${canAdd ? '' : 'd-none'}">
                            <button id="btn-in" class="btn btn-outline-success w-100 py-3 fw-bold" onclick="selectType('in')">📥 EKLE</button>
                        </div>
                        <div class="${canAdd ? 'col-6' : 'col-12'}">
                            <button id="btn-out" class="btn btn-outline-danger w-100 py-3 fw-bold" onclick="selectType('out')">📤 KULLAN</button>
                        </div>
                    </div>
                    <input type="number" id="swal-move-amount" class="form-control custom-input mt-4 text-center fs-4" placeholder="MİKTAR">
                    <input type="text" id="swal-move-note" class="form-control custom-input mt-2" placeholder="Not (Opsiyonel)">
                `,
                background: 'var(--bg-main)',
                color: 'var(--text-primary)',
                showCancelButton: true,
                didOpen: () => {
                    window.selectedMoveType = canAdd ? null : 'out';
                    if (!canAdd) {
                        document.getElementById('btn-out').className = 'btn btn-danger w-100 py-3 fw-bold';
                    }
                    window.selectType = (type) => {
                        window.selectedMoveType = type;
                        if (document.getElementById('btn-in')) {
                            document.getElementById('btn-in').className = type === 'in' ? 'btn btn-success w-100 py-3 fw-bold' : 'btn btn-outline-success w-100 py-3 fw-bold';
                        }
                        document.getElementById('btn-out').className = type === 'out' ? 'btn btn-danger w-100 py-3 fw-bold' : 'btn btn-outline-danger w-100 py-3 fw-bold';
                    };
                },
                preConfirm: () => {
                    const amountInput = document.getElementById('swal-move-amount');
                    const amount = amountInput ? parseInt(amountInput.value) : 0;
                    const noteInput = document.getElementById('swal-move-note');
                    const note = noteInput ? noteInput.value.trim() : "";
                    const type = window.selectedMoveType;
                    if (!type) return Swal.showValidationMessage('Lütfen işlem tipini seçin (Ekle/Kullan)');
                    if (!amount || amount <= 0) return Swal.showValidationMessage('Geçerli bir miktar girin!');
                    return { type, amount, note };
                }
            });

            if (result) {
                const finalAmount = result.type === 'in' ? result.amount : -result.amount;

                if (result.type === 'out' && item.amount + finalAmount < 0) {
                    return Swal.fire('Hata', 'Stok yetersiz! Mevcut miktardan fazla kullanım giremezsiniz.', 'error');
                }

                item.amount += finalAmount;
                localStorage.setItem('topclean_inventory', JSON.stringify(cachedInventory));
                if (db) db.ref('inventory/' + item.id).update({ amount: item.amount });

                this.logMovement(item.id, result.amount, result.type, result.note);

                Swal.fire({
                    icon: 'success',
                    title: 'İşlem Başarılı',
                    text: `${item.name} stoku güncellendi.`,
                    timer: 1500,
                    showConfirmButton: false
                });

                if (currentUser && currentUser.rol === "idareci") this.render();
            }
        }
    },

    logMovement: function (itemId, amount, type, note = "") {
        const item = cachedInventory.find(i => i.id === itemId);
        const log = {
            id: "LOG_" + new Date().getTime(),
            itemId: itemId,
            itemName: item ? item.name : "Bilinmeyen",
            change: amount,
            type: type,
            date: new Date().getTime(),
            user: currentUser ? currentUser.name : "Personel",
            note: note
        };

        cachedInventoryLogs.push(log);
        localStorage.setItem('topclean_inventory_logs', JSON.stringify(cachedInventoryLogs));
        if (db) db.ref('inventory_logs/' + log.id).set(log);
    },

    showLogs: function (itemId) {
        const item = cachedInventory.find(i => i.id === itemId);
        const logs = cachedInventoryLogs.filter(l => l.itemId === itemId).sort((a, b) => b.date - a.date);

        let html = '<div class="text-start mt-3" style="max-height: 50vh; overflow-y: auto;">';
        if (logs.length === 0) {
            html += '<div class="text-center text-muted py-4">Hareket kaydı bulunamadı.</div>';
        } else {
            logs.forEach(l => {
                const isAdd = l.type === 'in' || l.type === 'ekleme';
                html += `
                    <div class="p-2 border-bottom border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                        <div>
                            <div class="fw-bold ${isAdd ? 'text-success' : 'text-danger'}" style="font-size: 0.9rem;">
                                ${isAdd ? '+' : '-'}${l.change} ${item.unit}
                            </div>
                            <div class="x-small text-muted">${new Date(l.date).toLocaleString()} | ${l.user}</div>
                            ${l.note ? `<div class="x-small text-dim italic">"${l.note}"</div>` : ''}
                        </div>
                        <span class="x-small badge ${isAdd ? 'bg-success' : 'bg-danger'} bg-opacity-10">${l.type.toUpperCase()}</span>
                    </div>
                `;
            });
        }
        html += '</div>';

        Swal.fire({
            title: `${item.name} Geçmişi`,
            html: html,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)',
            confirmButtonText: 'Kapat',
            confirmButtonColor: '#6c757d'
        });
    },

    showAllLogs: function () {
        const logs = [...cachedInventoryLogs].sort((a, b) => b.date - a.date).slice(0, 50);

        let html = '<div class="text-start mt-3" style="max-height: 60vh; overflow-y: auto;">';
        logs.forEach(l => {
            const isAdd = l.type === 'in' || l.type === 'ekleme';
            html += `
                <div class="p-2 border-bottom border-secondary border-opacity-25">
                    <div class="d-flex justify-content-between">
                        <span class="fw-bold text-white small">${l.itemName}</span>
                        <span class="${isAdd ? 'text-success' : 'text-danger'} fw-bold small">${isAdd ? '+' : '-'}${l.change}</span>
                    </div>
                    <div class="x-small text-muted">${new Date(l.date).toLocaleString()} | ${l.user}</div>
                    ${l.note ? `<div class="x-small text-dim italic">("${l.note}")</div>` : ''}
                </div>
            `;
        });
        html += '</div>';

        Swal.fire({
            title: 'Son 50 Stok Hareketi',
            html: html,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)',
            confirmButtonText: 'Kapat'
        });
    },

    setThreshold: async function (itemId) {
        const item = cachedInventory.find(i => i.id === itemId);
        const { value: threshold } = await Swal.fire({
            title: 'Limit Düzenle',
            text: `${item.name} için bildirim limiti belirleyin:`,
            input: 'number',
            inputValue: item.threshold,
            background: 'var(--bg-main)',
            color: 'var(--text-primary)',
            confirmButtonText: 'Güncelle',
            showCancelButton: true
        });

        if (threshold !== undefined) {
            item.threshold = parseInt(threshold) || 0;
            localStorage.setItem('topclean_inventory', JSON.stringify(cachedInventory));
            if (db) db.ref('inventory/' + item.id).update({ threshold: item.threshold });
            this.render();
            Swal.fire({ icon: 'success', title: 'Limit Güncellendi', timer: 1000, showConfirmButton: false });
        }
    },

    deleteProduct: function (itemId) {
        const item = cachedInventory.find(i => i.id === itemId);
        Swal.fire({
            title: 'Emin misiniz?',
            text: `"${item.name}" ürünü ve tüm geçmişi silinecek!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Evet, Sil',
            background: 'var(--bg-main)',
            color: 'var(--text-primary)'
        }).then((result) => {
            if (result.isConfirmed) {
                cachedInventory = cachedInventory.filter(i => i.id !== itemId);
                cachedInventoryLogs = cachedInventoryLogs.filter(l => l.itemId !== itemId);
                localStorage.setItem('topclean_inventory', JSON.stringify(cachedInventory));
                localStorage.setItem('topclean_inventory_logs', JSON.stringify(cachedInventoryLogs));
                if (db) db.ref('inventory/' + itemId).remove();
                this.render();
            }
        });
    }
};

// ---------- INITIALIZATION ----------

// --- Auto-Logout: 30 dakika hareketsizlik ---
const AUTO_LOGOUT_MS = 30 * 60 * 1000;
let _inactivityTimer = null;

function _resetInactivityTimer() {
    clearTimeout(_inactivityTimer);
    if (!currentUser) return;
    _inactivityTimer = setTimeout(() => {
        if (currentUser) {
            console.log('[TopClean] Hareketsizlik nedeniyle otomatik çıkış yapıldı.');
            Swal.fire({
                icon: 'info',
                title: 'Oturum Süresi Doldu',
                text: '30 dakika işlem yapılmadığı için güvenlik nedeniyle çıkış yapıldı.',
                timer: 3000,
                showConfirmButton: false
            }).then(() => handleLogout());
        }
    }, AUTO_LOGOUT_MS);
}

['click', 'keydown', 'touchstart', 'scroll'].forEach(evt =>
    document.addEventListener(evt, _resetInactivityTimer, { passive: true })
);

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Event Listeners
        const lForm = document.getElementById('loginForm');
        if (lForm) lForm.addEventListener('submit', handleLogin);

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

        const uSel = document.getElementById('userSelect');
        if (uSel) uSel.addEventListener('change', checkLoginType);

        const fUp = document.getElementById('fotoUpload');
        if (fUp) fUp.addEventListener('change', handleFotoUpload);

        const dateSel = document.getElementById('adminDateSelector');
        if (dateSel) {
            dateSel.valueAsDate = new Date();
            dateSel.addEventListener('change', loadAdminPanel);
        }

        // Init UI
        if (typeof lucide !== 'undefined') lucide.createIcons();
        initTheme();
        initLoginSelect();

        // Cloud Data
        if (db) syncFromCloud();

        // Session kontrolü (TTL dahil)
        checkSession();

        // Offline kuyruk: sayfa açılışında bekleyen işlemleri gönder
        if (db && offlineQueue.length > 0) _flushOfflineQueue();
    } catch (err) {
        console.error("General Init Error:", err);
    }
});
