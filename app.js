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
    "-1. Kat": {
        "-1 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Etraf Düzenli"],
        "Mescit": ["Etraf Süpürülmüş", "Kürsü Düzenli", "Koku yok", "Halılar temizlenmiş", "Camlar temiz"],
        "Kütüphane": ["Zemin temiz", "Kitaplar düzenli", "Masalar temiz", "Çöp yok", "Rafların tozu alınmış"],
        "Wc": ["Zemin temiz", "Lavabolar temiz", "Koku yok", "Kağıt var", "Sabun var"],
        "Muhasebe Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Toz alınmış", "Çöp kutusu boş"],
        "Çalışma Odası": ["Zemin temiz", "Masalar düzenli", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Donanım": ["Zemin temiz", "Cihazlar düzenli", "Kablo karmaşası yok", "Toz alınmış", "Çöp kutusu boş"]
    },
    "0. Kat": {
        "0 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Ayna Silinmiş"],
        "Çalışma Odası": ["Masa düzenli", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Toplantı Odası": ["Masalar düzenli", "Zemin temiz", "Sandalyeler dizili", "Toz alınmış", "Çöp yok"],
        "Çayhane": ["Zemin temiz", "Masalar silinmiş", "Çöp yok", "Koku yok", "Çay Demlikleri Temiz"],
        "Wc 1": ["Lavabolar temiz", "Zemin temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "Wc 2": ["Lavabolar temiz", "Zemin temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "İdareci Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Koltuklar Temiz", "Çöp kutusu boş"]
    },
    "1. Kat": {
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
    "2. Kat": {
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
    "3. Kat": {
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
    "4. Kat": {
        "4 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "Sanat Odası": ["Zemin temiz", "Masalar silinmiş", "Malzemeler düzenli", "Toz alınmış", "Koku yok"],
        "Kantin": ["Zemin temiz", "Masalar temiz", "Çöp yok", "Eşyalar düzenli", "Hijyen kontrol"],
        "Teras": ["Zemin temiz", "Çöp yok", "Korkuluklar silinmiş", "Bitki düzenli", "Yer yıkandı"]
    }
};

const usersData = [
    { name: "AbdülKadir Uysal", pass: "1234", kat: "-1. Kat", rol: "gorevli" },
    { name: "Mehmet Ali Zabun", pass: "1234", kat: "0. Kat", rol: "gorevli" },
    { name: "Oğuz Erol", pass: "1234", kat: "1. Kat", rol: "gorevli" },
    { name: "Burak Han Karaoğlan", pass: "1234", kat: "2. Kat", rol: "gorevli" },
    { name: "Metin Durmuş", pass: "1234", kat: "3. Kat", rol: "gorevli" },
    { name: "Emre Karabalık", pass: "1234", kat: "4. Kat", rol: "gorevli" },
    { name: "Müfettiş", pass: "4321", kat: "", rol: "mufettis" },
    { name: "İdareci", pass: "1111", kat: "", rol: "idareci" }
];

// ---------- GLOBAL STATE ----------
let currentUser = null;
let currentKat = "";
let currentBolum = "";
// Let's add a global reference for the modal
let bootstrapModal = null;
let currentActiveReport = null;

// Base64 fotoğraf encode
let fotoDataURL = "";

document.addEventListener("DOMContentLoaded", () => {
    try {
        // Event Listeners (Guaranteed Bind)
        const lForm = document.getElementById('loginForm');
        if (lForm) lForm.addEventListener('submit', handleLogin);
        
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
        
        const uSel = document.getElementById('userSelect');
        if (uSel) uSel.addEventListener('change', checkLoginType);
        
        const fUp = document.getElementById('fotoUpload');
        if (fUp) fUp.addEventListener('change', handleFotoUpload);

        // State Init
        if (typeof lucide !== 'undefined') lucide.createIcons();
        initTheme();
        
        // 1. Cloud Sync
        if (db) syncFromCloud();
        
        initLoginSelect();
        checkSession(); // Restore session if exists

        // Migration Disabled for Demo
        // if (db) migrateLocalToCloud();

        const dateSel = document.getElementById('adminDateSelector');
        if(dateSel) {
            dateSel.valueAsDate = new Date();
            dateSel.addEventListener('change', loadAdminPanel);
        }
    } catch (err) {
        console.error("App Init Error:", err);
        Swal.fire({
            icon: 'error',
            title: 'Sistem Hatası',
            text: 'Uygulama başlatılırken bir sorun oluştu, ancak temel özellikler çalışmaya devam edecek.'
        });
    }
});

// ---------- TEMA (Theme) ----------
function initTheme() {
    const btn = document.getElementById('themeToggleBtn');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('topclean_theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);

    btn.addEventListener('click', () => {
        let current = document.documentElement.getAttribute('data-bs-theme');
        let newTheme = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('topclean_theme', newTheme);
        updateThemeIcon(newTheme);
    });
}
function updateThemeIcon(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (theme === 'dark') {
        btn.innerHTML = `<i data-lucide="sun" size="16"></i> <span class="d-none d-sm-inline">Aydınlık</span>`;
    } else {
        btn.innerHTML = `<i data-lucide="moon" size="16"></i> <span class="d-none d-sm-inline">Karanlık</span>`;
    }
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
        const allUsers = [...activeFixed, ...extraUsers].filter(u => u !== null && u !== undefined && typeof u === 'object');
        
        allUsers.forEach(u => {
            if (u && u.name) {
                const opt = document.createElement('option');
                opt.value = u.name;
                opt.textContent = u.name;
                select.appendChild(opt);
            }
        });
        
        // Liste Dağılımı seçeneği (İdareci girişi)
        const opt = document.createElement('option');
        opt.value = "Liste Dağılımı";
        opt.textContent = "Liste Dağılımı (Demo)";
        select.appendChild(opt);
    } catch(err) {
        console.error("initLoginSelect Error:", err);
    }
}

function checkLoginType() {
    const val = document.getElementById('userSelect').value;
    const pInput = document.getElementById('passInput');
    if(val === "Liste Dağılımı") {
        pInput.disabled = true;
        pInput.placeholder = "Şifre Gerekmez";
    } else {
        pInput.disabled = false;
        pInput.placeholder = "Mevcut Şifreniz";
    }
}

function checkSession() {
    const saved = localStorage.getItem('topclean_session');
    if (saved) {
        try {
            currentUser = JSON.parse(saved);
            updateHeader();
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
        } catch(e) {
            localStorage.removeItem('topclean_session');
        }
    }
}

let authMode = "quick"; // "quick" or "email"

function toggleAuthMode() {
    const qSec = document.getElementById('quickLoginSection');
    const eSec = document.getElementById('emailLoginSection');
    const btn = document.getElementById('toggleLoginMode');
    
    if (authMode === "quick") {
        authMode = "email";
        qSec.classList.add('d-none');
        eSec.classList.remove('d-none');
        btn.innerText = "Personel Seçimi ile Giriş";
    } else {
        authMode = "quick";
        qSec.classList.remove('d-none');
        eSec.classList.add('d-none');
        btn.innerText = "E-posta ile Giriş Yap";
    }
}

function handleLogin(e) {
    e.preventDefault();

    // Email auth disabled for demo
    /*
    if (authMode === "email") {
        ...
    }
    */


    const uName = String(document.getElementById('userSelect').value).trim();
    const uPass = String(document.getElementById('passInput').value).trim();

    try {
        // 1. Liste Dağılımı Özel Giriş
        if (uName === "Liste Dağılımı") {
            currentUser = { name: "Liste Dağılımı", rol: "liste", kat: "" };
            localStorage.setItem('topclean_session', JSON.stringify(currentUser));
            ListeManager.load();
            showPanel("listePanel");
            updateHeader();
            return;
        }

        // 2. Load and Search Users (Firebase Data Primary, Hardcoded Secondary)
        const deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        const extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        const activeFixed = usersData.filter(u => !deletedFixed.includes(u.name));
        
        // Extra Users (Firebase) öne koyuluyor ki, sabit şifreler dinamik olarak üstüne yazılabilsin
        const allUsers = [...extraUsers, ...activeFixed].filter(u => u !== null && u !== undefined);
        
        // Find user (Case-insensitive name check)
        const un = allUsers.find(x => x && x.name && String(x.name).trim().toLowerCase() === uName.toLowerCase());

        if (un && String(un.pass).trim() === uPass) {
            currentUser = un;
            localStorage.setItem('topclean_session', JSON.stringify(un));
            loginSuccess();
        } else {
            console.warn("Login failed for:", uName, "Entered pass:", uPass, "Expected pass from DB:", un ? un.pass : "User not found");
            Swal.fire({
                icon: 'error',
                title: 'Giriş Başarısız',
                text: 'Seçilen personel veya şifre hatalı görünüyor. Lütfen tekrar deneyin.',
                confirmButtonText: 'Tamam',
                confirmButtonColor: '#10b981'
            });
        }
    } catch (err) {
        console.error("Login Exception:", err);
        Swal.fire({
            icon: 'error',
            title: 'Sistem Hatası',
            text: 'Giriş yapılırken beklenmeyen bir hata oluştu: ' + err.message,
            confirmButtonText: 'Tamam'
        });
    }
}

function loginSuccess() {
    document.getElementById('passInput').value = "";
    document.getElementById('emailPassInput').value = "";
    updateHeader();
    
    Swal.fire({
        icon: 'success',
        title: 'Giriş Başarılı',
        text: 'Oturum Başarıyla Açıldı.',
        timer: 1500,
        showConfirmButton: false
    });

    if (currentUser.rol === "gorevli") {
        loadGorevliPanel(currentUser.kat);
        showPanel("gorevliPanel");
    } else if (currentUser.rol === "idareci") {
        IdarecManager.load();
        showPanel("idarecPanel");
    } else {
        loadAdminPanel();
        showPanel("adminPanel");
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('topclean_session');
    
    const headerEl = document.getElementById('app-header');
    if (headerEl) headerEl.classList.add('d-none');
    
    const badgeEl = document.getElementById('headerUserBadge');
    if (badgeEl) {
        badgeEl.classList.add('d-none');
        badgeEl.classList.remove('d-flex');
    }
    
    initLoginSelect(); // Yenilenmiş personel listesini ana ekrana yükle
    showPanel("loginPanel");
    updateHeader();
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

function showPanel(id) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ---------- VERİ (Cloud / LocalStorage) ----------
// Firebase'den veri çekme (Realtime)
let cachedData = JSON.parse(localStorage.getItem('topclean_data') || '[]');
let cachedArizalar = JSON.parse(localStorage.getItem('topclean_arizalar') || '[]');
let cachedInventory = JSON.parse(localStorage.getItem('topclean_inventory') || '[]');
let cachedInventoryLogs = JSON.parse(localStorage.getItem('topclean_inventory_logs') || '[]');
let isSyncing = false;
let syncTimeout = null;

function syncFromCloud() {
    if (!db) return;

    db.ref('reports').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            cachedData = Object.values(val);
            localStorage.setItem('topclean_data', JSON.stringify(cachedData));
            refreshCurrentPanel();
        }
    });

    db.ref('users').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            localStorage.setItem('topclean_users', JSON.stringify(Object.values(val)));
            initLoginSelect();
        } else {
            localStorage.setItem('topclean_users', '[]');
        }
    });

    db.ref('student_distribution').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            localStorage.setItem('topclean_talebe_listesi', JSON.stringify(val));
            if (currentUser && currentUser.rol === "liste") ListeManager.load();
        }
    });
    
    db.ref('deleted_fixed_users').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            localStorage.setItem('topclean_deleted_fixed_users', JSON.stringify(Object.values(val)));
            initLoginSelect();
            if(currentUser && currentUser.rol === "idareci") IdarecManager.loadPersonel();
        }
    });

    db.ref('arizalar').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            cachedArizalar = Object.values(val);
            localStorage.setItem('topclean_arizalar', JSON.stringify(cachedArizalar));
            refreshCurrentPanel();
        }
    });

    db.ref('inventory').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            cachedInventory = Object.values(val);
            localStorage.setItem('topclean_inventory', JSON.stringify(cachedInventory));
            if (currentUser && currentUser.rol === "idareci") InventoryManager.render();
        }
    });

    db.ref('inventory_logs').on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
            cachedInventoryLogs = Object.values(val);
            localStorage.setItem('topclean_inventory_logs', JSON.stringify(cachedInventoryLogs));
        }
    });
}

function refreshCurrentPanel() {
    if (!currentUser) return;
    if (currentUser.rol === "gorevli") loadGorevliPanel(currentUser.kat);
    else if (currentUser.rol === "idareci") {
        IdarecManager.loadBinaDurumu();
        InventoryManager.render();
    }
    else if (currentUser.rol === "mufettis") loadAdminPanel();
}

function getData() {
    return cachedData;
}

// Helper for consistent date comparison (YYYY-MM-DD)
function toShortDate(dateInput) {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().split('T')[0];
}

function saveData(item) {
    item.id = new Date().getTime().toString();
    
    cachedData.push(item);
    localStorage.setItem('topclean_data', JSON.stringify(cachedData));

    // Cloud Save
    if (db) {
        db.ref('reports/' + item.id).set(item).catch(err => console.error("Firebase save error:", err));
    }
}

// Ariza kaydetme
function saveAriza(ariza) {
    ariza.id = "ARZ_" + new Date().getTime().toString();
    ariza.onay_tarih = null;
    cachedArizalar.push(ariza);
    localStorage.setItem('topclean_arizalar', JSON.stringify(cachedArizalar));
    
    // Cloud Save
    if (db) {
        db.ref('arizalar/' + ariza.id).set(ariza).catch(err => console.error("Firebase ariza save error:", err));
    }
}

// Migration Helper
async function migrateLocalToCloud() {
    if(!db) return;
    const data = JSON.parse(localStorage.getItem('topclean_data') || '[]');
    data.forEach(item => {
        db.ref('reports/' + item.id).set(item);
    });
    console.log("Migration complete");
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
            return {bolum, not};
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

    // Ürün tanımlama butonu sadece 2. kat görevlisinde görünsün
    const tanimlaBtn = document.getElementById('btnUrunTanimla');
    if (tanimlaBtn) {
        if (katAd === "2. Kat") tanimlaBtn.classList.remove('d-none');
        else tanimlaBtn.classList.add('d-none');
    }

    const bolumler = katlar[katAd];
    const data = getData();
    const bugunStr = new Date().toLocaleDateString();

    let reddedilenCount = 0;

    // Arıza loglarını kontrol et
    const onarilanArizalar = cachedArizalar.filter(a => a.gonderen === currentUser.name && a.durum === "onarildi");
    const arizaKutu = document.getElementById('onarilanArizaUyari');
    const arizaList = document.getElementById('onarilanArizaList');
    if (onarilanArizalar.length > 0) {
        arizaKutu.classList.remove('d-none');
        arizaKutu.classList.add('d-flex');
        arizaList.innerHTML = onarilanArizalar.map(a => `<div>• <b>${a.bolum}</b>: ${a.detay} (Onarıldı)</div>`).join('');
    } else {
        arizaKutu.classList.add('d-none');
        arizaKutu.classList.remove('d-flex');
    }

    for (const [bolumAd, kriterler] of Object.entries(bolumler)) {
        const gecmis = data.filter(d => d.kat === katAd && d.bolum === bolumAd && new Date(parseInt(d.id)).toLocaleDateString() === bugunStr);
        let badgeYazi = "Bekliyor";
        let badgeClass = "badge-idle";

        if (gecmis.length > 0) {
            const son = gecmis[gecmis.length - 1];
            
            if (son.durum === "reddedildi") {
                reddedilenCount++;
                badgeClass = "badge-danger";
                badgeYazi = "REDDEDİLDİ";
            } else if (son.durum === "onaylandi") {
                badgeClass = "badge-success";
                badgeYazi = "ONAYLANDI ✨";
            } else {
                const isaretli = son.secilen.length;
                const toplam = kriterler.length;
                const oran = Math.floor((isaretli / toplam) * 100);
                badgeClass = "badge-warning";
                badgeYazi = `%${oran} İNCELENİYOR`;
            }
        }

        // Kat ve bölüme ait aktif bir arıza var mı?
        const aktifAriza = cachedArizalar.find(a => a.kat === katAd && a.bolum === bolumAd && a.durum === "bekliyor");

        // Reddedilen raporu referanslayalım
        const sonRapor = gecmis.length > 0 ? gecmis[gecmis.length - 1] : null;
        const isRejected = sonRapor && sonRapor.durum === "reddedildi";
        const rejectionNote = isRejected ? (sonRapor.mufettis_yorum || "Not belirtilmedi.") : "";

        const div = document.createElement('div');
        div.className = "action-card stagger-item d-flex flex-column gap-3";
        div.style.animationDelay = `${(Object.keys(bolumler).indexOf(bolumAd)) * 0.1}s`;
        div.onclick = () => {
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
                    if (res.isConfirmed) {
                        KriterManager.ac(katAd, bolumAd, kriterler);
                    }
                });
            } else {
                KriterManager.ac(katAd, bolumAd, kriterler);
            }
        };
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold text-white d-flex align-items-center gap-2" style="font-size: 1.1rem; letter-spacing: 0.5px;">
                    📍 ${bolumAd}
                    ${aktifAriza ? '<span class="badge bg-warning text-dark px-2 py-1 rounded-pill ms-2" style="font-size:0.7rem;"><i data-lucide="wrench" size="12"></i> Arızalı</span>' : ''}
                </div>
                <button class="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 flex-shrink-0" style="width: 32px; height: 32px; border-color: var(--glass-border); opacity: 0.8;" onclick="event.stopPropagation(); KriterManager.rehberBilgi('${bolumAd}')">
                    <i data-lucide="alert-circle" size="14"></i>
                </button>
            </div>
            <div class="badge-status ${badgeClass} text-center justify-content-center w-100 py-2" style="font-weight: 800;">
                ${badgeYazi}
            </div>
        `;
        listeEl.appendChild(div);
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();

    if(reddedilenCount > 0) {
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
        document.getElementById('kriterKatAd').innerText = katAd;
        document.getElementById('kriterBolumAd').innerText = bolumAd;
        
        // Reset inputs
        this.fotografiSil();
        document.getElementById('gorevliNot').value = "";
        
        const listEl = document.getElementById('kriterListesi');
        listEl.innerHTML = "";
        
        kriterler.forEach((k, idx) => {
            const div = document.createElement('label');
            div.className = "custom-checkbox-wrapper p-3 border-bottom d-flex align-items-center gap-3 mb-0";
            div.style.borderColor = "var(--glass-border) !important";
            div.innerHTML = `
                <input type="checkbox" class="chk-kriter" value="${k}" onchange="KriterManager.guncelleBar()">
                <span class="fs-6 d-block text-white-50">${k}</span>
            `;
            listEl.appendChild(div);
        });

        this.guncelleBar();
        showPanel('kriterPanel');
    },
    
    guncelleBar: function() {
        const checkboxes = document.querySelectorAll('.chk-kriter');
        let isaretli = 0;
        checkboxes.forEach(c => { if(c.checked) isaretli++; });
        const toplam = currentKriterler.length;
        const oran = toplam > 0 ? (isaretli / toplam) : 0;
        const yuzde = Math.floor(oran * 100);

        const bar = document.getElementById('kriterProgressBar');
        const lbl = document.getElementById('kriterOranYazi');

        bar.style.width = `${yuzde}%`;

        if (yuzde === 100) {
            bar.style.background = "var(--success)";
            lbl.style.color = "var(--success)";
            lbl.innerText = `%${yuzde} Temiz ✔`;
        } else if (yuzde === 0) {
            bar.style.background = "var(--accent-glow)";
            lbl.style.color = "var(--text-dim)";
            lbl.innerText = `%0 Temiz`;
        } else {
            bar.style.background = "var(--warning)";
            lbl.style.color = "var(--warning)";
            lbl.innerText = `%${yuzde} Temiz (${isaretli}/${toplam})`;
        }
    },

    fotografiSil: function() {
        fotoDataURL = "";
        document.getElementById('fotoUpload').value = "";
        document.getElementById('fotoDurum').innerText = "Henüz görsel eklenmedi";
        document.getElementById('fotoOnizlemeContainer').classList.add('d-none');
        document.getElementById('fotoOnizleme').src = "";
    },

    veriyiKaydet: function() {
        const checkboxes = document.querySelectorAll('.chk-kriter');
        let secilenler = [];
        checkboxes.forEach(c => { if(c.checked) secilenler.push(c.value); });
        
        const yorum = document.getElementById('gorevliNot').value.trim();

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
        
        Swal.fire({
            icon: 'success',
            title: 'Kaydedildi',
            text: `${currentBolum} kontrolü başarıyla tamamlandı.`,
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            this.geriDon();
        });
    },

    geriDon: function() {
        loadGorevliPanel(currentKat);
        showPanel('gorevliPanel');
    },

    rehberBilgi: function(bolum) {
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
        reader.onload = function(evt) {
            const tempImg = new Image();
            tempImg.onload = function() {
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
        const matris = document.getElementById('denetimMatrisi');
        const dateEl = document.getElementById('adminDateSelector');
        if(!matris || !dateEl) return;
        
        matris.innerHTML = "";
        const selectedDate = dateEl.value; // yyyy-mm-dd
        let allData = getData();
        const dayData = allData.filter(d => toShortDate(d.tarih) === selectedDate);
        
        const total = dayData.length;
        const success = dayData.filter(d => d.durum === "onaylandi").length;
        const danger = dayData.filter(d => d.durum === "reddedildi").length;
        const pending = dayData.filter(d => d.durum === "bekliyor").length;

        if(document.getElementById('adminStatTotal')) document.getElementById('adminStatTotal').innerText = total;
        if(document.getElementById('adminStatSuccess')) document.getElementById('adminStatSuccess').innerText = success;
        if(document.getElementById('adminStatDanger')) document.getElementById('adminStatDanger').innerText = danger;
        if(document.getElementById('adminStatPending')) document.getElementById('adminStatPending').innerText = pending;

        const arizaCtn = cachedArizalar.filter(a => a.durum === "bekliyor").length;
        if(document.getElementById('adminArizaCount')) document.getElementById('adminArizaCount').innerText = arizaCtn;

    // Loop through Building Structure (katlar)
    Object.keys(katlar).forEach((katAd, kIdx) => {
        const katWrapper = document.createElement('div');
        katWrapper.className = "stagger-item";
        katWrapper.style.animationDelay = `${kIdx * 0.1}s`;
        
        katWrapper.innerHTML = `
            <div class="d-flex align-items-center gap-2 mb-3">
                <div class="flex-grow-1 h-px bg-glass-border"></div>
                <span class="badge rounded-pill bg-emerald px-4 py-2 small fw-bold shadow-sm" style="letter-spacing:1px;">${katAd.toUpperCase()}</span>
                <div class="flex-grow-1 h-px bg-glass-border"></div>
            </div>
            <div class="row g-2 justify-content-center" id="rooms-${kIdx}"></div>
        `;
        matris.appendChild(katWrapper);
        
        const roomRow = document.getElementById(`rooms-${kIdx}`);
        const bolumler = katlar[katAd];
        
        Object.keys(bolumler).forEach(bolumAd => {
            // Find the LATEST report for this floor, section, and date
            const sectionRecord = dayData.filter(d => d.kat === katAd && d.bolum === bolumAd)
                                         .sort((a,b) => parseInt(b.id) - parseInt(a.id))[0];
            
            let statusClass = "badge-idle";
            let statusYazi = "BEKLİYOR";
            let hasReport = false;

            if (sectionRecord) {
                hasReport = true;
                if (sectionRecord.durum === "onaylandi") {
                    statusClass = "badge-success"; statusYazi = "ONAYLANDI";
                } else if (sectionRecord.durum === "reddedildi") {
                    statusClass = "badge-danger"; statusYazi = "REDDEDİLDİ";
                } else {
                    statusClass = "badge-warning"; statusYazi = "ONAY BEKLİYOR";
                }
            }

            const roomCol = document.createElement('div');
            roomCol.className = "col-12 col-md-6";
            roomCol.innerHTML = `
                <div class="glass-card p-3 d-flex align-items-center justify-content-between shadow-hover ${hasReport ? 'cursor-pointer' : ''}" 
                     ${hasReport ? `onclick="AdminManager.showDetail('${sectionRecord.id}')"` : ''}>
                    <div>
                        <div class="fw-bold text-white small mb-1">${bolumAd}</div>
                        <div class="x-small text-muted">${hasReport ? new Date(sectionRecord.tarih).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + ' | ' + sectionRecord.secilen.length + ' Kriter' : 'Kaydı bulunmuyor'}</div>
                    </div>
                    <span class="badge-status ${statusClass}" style="font-size: 0.65rem; padding: 4px 10px;">${statusYazi}</span>
                </div>
            `;
            roomRow.appendChild(roomCol);
        });
    });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        console.error("loadAdminPanel Error:", e);
    }
}

const AdminManager = {
    showDetail: function(reportId) {
        const report = getData().find(d => d.id === reportId);
        if (!report) return;
        currentActiveReport = report;
        document.getElementById('modalKatBolum').innerText = `${report.kat} - ${report.bolum}`;
        
        // Foto
        const img = document.getElementById('modalFoto');
        if (report.foto) {
            img.src = report.foto;
            img.parentElement.classList.remove('d-none');
        } else {
            img.parentElement.classList.add('d-none');
        }

        // Kriter Listesi
        const list = document.getElementById('modalKriterListesi');
        list.innerHTML = "";
        
        // Find the original list to show what's NOT cleaned too
        const originalList = katlar[report.kat][report.bolum];
        originalList.forEach(k => {
            const isDone = report.secilen.includes(k);
            const item = document.createElement('div');
            item.className = `d-flex align-items-center gap-2 mb-1 ${isDone ? 'text-success' : 'text-danger opacity-50'}`;
            item.innerHTML = `<i data-lucide="${isDone ? 'check-circle' : 'circle'}" size="14"></i> ${k}`;
            list.appendChild(item);
        });

        document.getElementById('modalAdminNot').value = report.mufettis_yorum || "";

        if(!bootstrapModal) {
            bootstrapModal = new bootstrap.Modal(document.getElementById('adminDetailModal'));
        }
        bootstrapModal.show();
        lucide.createIcons();
    },

    processReport: function(status) {
        const comment = document.getElementById('modalAdminNot').value.trim();
        let data = getData();
        const idx = data.findIndex(d => d.id === currentActiveReport.id);
        
        if (idx !== -1) {
            data[idx].durum = status;
            data[idx].mufettis_yorum = comment;
            data[idx].mufettis_tarih = new Date().getTime();
            
            // Cloud update
            if (db) {
                db.ref('reports/' + currentActiveReport.id).update({
                    durum: status,
                    mufettis_yorum: comment,
                    mufettis_tarih: data[idx].mufettis_tarih
                });
            }

            localStorage.setItem('topclean_data', JSON.stringify(data));
            cachedData = data; // Update cache
            
            bootstrapModal.hide();
            Swal.fire({
                icon: status === 'onaylandi' ? 'success' : 'warning',
                title: status === 'onaylandi' ? 'Onaylandı' : 'Reddedildi',
                text: 'İşlem başarıyla tamamlandı.',
                timer: 1500,
                showConfirmButton: false
            });
        }
    },

    exportCSV: function() {
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

    showArizalar: function() {
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
                        <span class="small text-muted">${new Date(a.tarih).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
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

    onarildiIsaretle: function(arizaId) {
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

// ---------- İDARECİ MANAGER ----------
const IdarecManager = {
    load: function() {
        try {
            const today = new Date().toISOString().split('T')[0];
            const dateSel = document.getElementById('idarecDateSelector');
            const raporSel = document.getElementById('raporDateSelector');
            if(dateSel) { dateSel.value = today; dateSel.onchange = function(){ IdarecManager.loadBinaDurumu(); }; }
            if(raporSel) raporSel.value = today;
            
            this.loadBinaDurumu();
            this.loadGecmis('hepsi');
            this.loadPersonel();
            this.loadArizalar('hepsi');
            InventoryManager.render();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        } catch (e) {
            console.error("IdarecManager.load Error:", e);
        }
    },
    switchTab: function(tab, btn) {
        document.querySelectorAll('.idarec-tab-content').forEach(function(el){ el.classList.add('d-none'); });
        document.querySelectorAll('.idarec-tab').forEach(function(el){ el.classList.remove('active'); });
        document.getElementById('idarec-tab-' + tab).classList.remove('d-none');
        btn.classList.add('active');
        lucide.createIcons();
    },
    loadBinaDurumu: function() {
        var matris = document.getElementById('idarecBinaMatrisi');
        var dateSel = document.getElementById('idarecDateSelector');
        if(!matris || !dateSel) return;
        matris.innerHTML = '';
        var selectedDate = dateSel.value;
        var allData = getData();
        var dayData = allData.filter(function(d){ return toShortDate(d.tarih) === selectedDate; });
        
        if(document.getElementById('idarecStatTotal')) document.getElementById('idarecStatTotal').innerText = dayData.length;
        if(document.getElementById('idarecStatSuccess')) document.getElementById('idarecStatSuccess').innerText = dayData.filter(function(d){return d.durum==='onaylandi';}).length;
        if(document.getElementById('idarecStatDanger')) document.getElementById('idarecStatDanger').innerText = dayData.filter(function(d){return d.durum==='reddedildi';}).length;
        var katKeys = Object.keys(katlar);
        katKeys.forEach(function(katAd, kIdx) {
            var w = document.createElement('div');
            w.className = 'stagger-item';
            w.style.animationDelay = (kIdx * 0.08) + 's';
            w.innerHTML = '<div class="d-flex align-items-center gap-2 mb-3"><div class="flex-grow-1 bg-glass-border" style="height:1px;"></div><span class="badge rounded-pill bg-emerald px-4 py-2 small fw-bold">' + katAd.toUpperCase() + '</span><div class="flex-grow-1 bg-glass-border" style="height:1px;"></div></div><div class="row g-2 mx-0" id="idarec-rooms-' + kIdx + '"></div>';
            matris.appendChild(w);
            var roomRow = document.getElementById('idarec-rooms-' + kIdx);
            var bolumKeys = Object.keys(katlar[katAd]);
            bolumKeys.forEach(function(bolumAd) {
                var recs = dayData.filter(function(d){ return d.kat===katAd && d.bolum===bolumAd; });
                recs.sort(function(a,b){ return parseInt(b.id)-parseInt(a.id); });
                var rec = recs[0];
                var hasReport = !!rec;
                var sc = 'badge-idle', sy = 'BEKLİYOR';
                if(rec) {
                    if(rec.durum==='onaylandi'){sc='badge-success';sy='ONAYLANDI';}
                    else if(rec.durum==='reddedildi'){sc='badge-danger';sy='REDDEDİLDİ';}
                    else {sc='badge-warning';sy='ONAY BEKLİ';}
                }
                var col = document.createElement('div');
                col.className = 'col-12 col-md-6 px-1';
                var timeStr = rec ? new Date(rec.tarih).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) + ' | ' + rec.secilen.length + ' kriter' : 'Kaydı yok';
                var clickAttr = hasReport ? 'onclick="AdminManager.showDetail(\'' + rec.id + '\')"' : '';
                col.innerHTML = '<div class="glass-card p-3 d-flex align-items-center justify-content-between mb-2 ' + (hasReport ? 'cursor-pointer' : '') + '" ' + clickAttr + '><div><div class="fw-bold text-white" style="font-size:0.9rem; letter-spacing:0.5px;">' + bolumAd + '</div><div class="x-small text-dim">' + timeStr + '</div></div><span class="badge-status ' + sc + '" style="font-size:0.65rem;">' + sy + '</span></div>';
                roomRow.appendChild(col);
            });
        });
        lucide.createIcons();
    },
    loadGecmis: function(filter) {
        var list = document.getElementById('idarecGecmisList');
        if(!list) return;
        list.innerHTML = '';
        var data = getData().filter(function(d){return d.durum!=='bekliyor';});
        if(filter !== 'hepsi') data = data.filter(function(d){return d.durum===filter;});
        data.sort(function(a,b){return parseInt(b.id)-parseInt(a.id);});
        if(data.length === 0) { list.innerHTML = '<div class="glass-card p-3 text-center text-muted small">Kayıt bulunamadı.</div>'; return; }
        data.forEach(function(d) {
            var isO = d.durum === 'onaylandi';
            var c = document.createElement('div');
            c.className = 'glass-card p-3 d-flex align-items-center justify-content-between';
            var yorumHtml = d.mufettis_yorum ? '<div class="x-small mt-1" style="color:var(--text-muted);">"' + d.mufettis_yorum + '"</div>' : '';
            c.innerHTML = '<div><div class="fw-bold text-white" style="font-size:0.85rem;">' + d.kat + ' – ' + d.bolum + '</div><div class="x-small text-muted">' + new Date(d.tarih).toLocaleString('tr-TR') + ' | ' + d.secilen.length + ' kriter</div>' + yorumHtml + '</div><span class="badge-status ' + (isO?'badge-success':'badge-danger') + '" style="font-size:0.6rem;padding:3px 8px;">' + (isO?'ONAYLANDI':'REDDEDİLDİ') + '</span>';
            list.appendChild(c);
        });
        lucide.createIcons();
    },
    filterGecmis: function(filter, btn) {
        document.querySelectorAll('.gecmis-filter').forEach(function(b){b.classList.remove('active');});
        btn.classList.add('active');
        IdarecManager.loadGecmis(filter);
    },
    loadPersonel: function() {
        var list = document.getElementById('personelListesi');
        if(!list) return;
        list.innerHTML = '';
        var deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        var sabitGorevliler = usersData.filter(function(u){return u.rol==='gorevli' && !deletedFixed.includes(u.name);});
        var extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        var all = sabitGorevliler.concat(extraUsers);
        all.forEach(function(u, idx) {
            var isExtra = idx >= sabitGorevliler.length;
            var c = document.createElement('div');
            c.className = 'glass-card p-3 d-flex align-items-center justify-content-between';
            // Both extra and fixed users have delete buttons now
            // We'll pass the name and isExtra to the delete function
            var deleteBtn = '<button class="btn btn-sm btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style="width:28px;height:28px;" onclick="IdarecManager.personelSil(' + idx + ')"><i data-lucide="trash-2" size="13"></i></button>';
            c.innerHTML = '<div><div class="fw-bold text-white" style="font-size:0.85rem;">' + u.name + '</div><div class="x-small text-muted">' + u.kat + ' | Şifre: ' + u.pass + '</div></div><div class="d-flex gap-2 align-items-center"><span class="badge-status ' + (isExtra?'badge-warning':'badge-idle') + '" style="font-size:0.55rem;padding:2px 6px;">' + (isExtra?'YENİ':'SABİT') + '</span>' + deleteBtn + '</div>';
            list.appendChild(c);
        });
        lucide.createIcons();
    },
    personelEkle: function() {
        var ad = document.getElementById('yeniPersonelAd').value.trim();
        var sifre = document.getElementById('yeniPersonelSifre').value.trim();
        var kat = document.getElementById('yeniPersonelKat').value;
        if(!ad || !sifre || !kat) { Swal.fire({icon:'warning',title:'Eksik Bilgi',text:'Tüm alanları doldurun.',timer:2000,showConfirmButton:false}); return; }
        var extras = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        var newUser = {name:ad, pass:sifre, kat:kat, rol:'gorevli'};
        extras.push(newUser);
        
        localStorage.setItem('topclean_users', JSON.stringify(extras));
        if (db) {
            db.ref('users/' + newUser.name).set(newUser);
        }
        document.getElementById('yeniPersonelAd').value = '';
        document.getElementById('yeniPersonelSifre').value = '';
        document.getElementById('yeniPersonelKat').value = '';
        Swal.fire({icon:'success',title:'Kaydedildi!',text:ad+' sisteme eklendi.',timer:1800,showConfirmButton:false});
        IdarecManager.loadPersonel();
        initLoginSelect(); // Login dropdown'u güncelle
    },
    personelSil: function(allIdx) {
        var deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
        var sabitGorevliler = usersData.filter(function(u){return u.rol==='gorevli' && !deletedFixed.includes(u.name);});
        var extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        var all = sabitGorevliler.concat(extraUsers);
        var target = all[allIdx];
        if(!target) return;

        if(allIdx >= sabitGorevliler.length) {
            // Extra user
            var extras = JSON.parse(localStorage.getItem('topclean_users') || '[]');
            var filtered = extras.filter(u => u.name !== target.name);
            localStorage.setItem('topclean_users', JSON.stringify(filtered));
        } else {
            // Fixed user
            var deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
            deletedFixed.push(target.name);
            localStorage.setItem('topclean_deleted_fixed_users', JSON.stringify(deletedFixed));
            if (db) db.ref('deleted_fixed_users').set(deletedFixed);
        }
        
        // Cloud Delete
        if (db) db.ref('users/' + target.name).remove();
        
        Swal.fire({icon:'info',title:'Silindi',text:target.name+' sistemden kaldırıldı.',timer:1800,showConfirmButton:false});
        IdarecManager.loadPersonel();
        initLoginSelect();
    },
    exportCSV: function() {
        var selectedDate = document.getElementById('raporDateSelector').value;
        var dayData = getData().filter(function(d){return toShortDate(d.tarih) === selectedDate;});
        if(dayData.length===0){Swal.fire({icon:'info',title:'Kayıt Yok',text:'Seçilen tarih için rapor bulunamadı.',timer:2000,showConfirmButton:false});return;}
        var csv = "\uFEFFKat,Bolum,Kriterler,Saat,Durum,GorevliNotu,MufettisNotu\n";
        csv += dayData.map(function(d){
            var saat = new Date(d.tarih).toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'});
            return '"'+d.kat+'","'+d.bolum+'",'+d.secilen.length+','+saat+','+d.durum+',"'+(d.yorum||'')+'","'+(d.mufettis_yorum||'')+'"';
        }).join("\n");
        var blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = 'TopClean_Rapor_' + selectedDate + '.csv';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
    },

    loadArizalar: function(filterType) {
        var aList = cachedArizalar;
        if(filterType === 'bekliyor') aList = aList.filter(a => a.durum === 'bekliyor');
        else if(filterType === 'onarildi') aList = aList.filter(a => a.durum === 'onarildi');

        aList.sort((a,b) => b.tarih - a.tarih);
        var container = document.getElementById('idarecArizaList');
        if(!container) return;
        container.innerHTML = '';
        if(aList.length === 0) {
            container.innerHTML = '<div class="glass-card text-center text-muted p-4 small">Kayıtlı arıza bulunmuyor.</div>';
            return;
        }

        aList.forEach(a => {
            var sc = a.durum === 'onarildi' ? 'badge-success' : 'badge-warning';
            var sy = a.durum === 'onarildi' ? 'ONARILDI' : 'BEKLİYOR';
            var div = document.createElement('div');
            div.className = 'glass-card p-3 mb-2';
            div.innerHTML = `
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="fw-bold fs-6 text-white"><i data-lucide="wrench" size="14"></i> ${a.kat} / ${a.bolum}</span>
                    <span class="badge-status ${sc} px-2 py-1" style="font-size:0.6rem;">${sy}</span>
                </div>
                <div class="small text-white mb-2">${a.detay}</div>
                <div class="x-small text-muted d-flex justify-content-between mt-2 pt-2 border-top border-secondary">
                    <span>GÖNDEREN: ${a.gonderen}</span>
                    <span>${new Date(a.tarih).toLocaleString()}</span>
                </div>
            `;
            container.appendChild(div);
        });
        if(typeof lucide !== 'undefined') lucide.createIcons();
    },

    filterArizalar: function(type, btn) {
        document.querySelectorAll('.ariza-filter').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        this.loadArizalar(type);
    },

    exportArizaCSV: function() {
        if (cachedArizalar.length === 0) return;
        let csvHeader = "ID,Kat,Bolum,Gonderen,Detay,Tarih,Durum,OnayTarihi\n";
        let csvBody = cachedArizalar.map(a => {
            let onayTarihStr = a.onay_tarih ? new Date(a.onay_tarih).toLocaleString() : "";
            return `${a.id},${a.kat},${a.bolum},${a.gonderen},"${a.detay}","${new Date(a.tarih).toLocaleString()}",${a.durum},"${onayTarihStr}"`;
        }).join("\n");
        const blob = new Blob(["\uFEFF" + csvHeader + csvBody], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `TopClean_Arizalar.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// ---------- LİSTE DAĞILIMI MANAGER ----------
const ListeManager = {
    load: function() {
        const saved = localStorage.getItem('topclean_talebe_listesi');
        if (saved) {
            const data = JSON.parse(saved);
            document.getElementById('listAlerjik').value = data.alerjik || "";
            document.getElementById('listAstim').value = data.astim || "";
            document.getElementById('listSaglikli').value = data.saglikli || "";
            document.getElementById('listDiger').value = data.diger || "";
            if (data.sonuclar) {
                this.renderSonuclar(data.sonuclar, data.baskanlar || {});
            } else {
                document.getElementById('listeSonuclari').innerHTML = '<div class="glass-card p-4 text-center text-muted small">Henüz dağıtım yapılmadı. İsimleri girip yukarıdaki butona basın.</div>';
            }
        } else {
            document.getElementById('listeSonuclari').innerHTML = '<div class="glass-card p-4 text-center text-muted small">Henüz dağıtım yapılmadı. İsimleri girip yukarıdaki butona basın.</div>';
        }
        lucide.createIcons();
    },

    save: function(sonuclar = null, baskanlar = null) {
        const currentData = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const data = {
            alerjik: document.getElementById('listAlerjik').value,
            astim: document.getElementById('listAstim').value,
            saglikli: document.getElementById('listSaglikli').value,
            diger: document.getElementById('listDiger').value,
            sonuclar: sonuclar || currentData.sonuclar,
            baskanlar: baskanlar || currentData.baskanlar || {}
        };
        localStorage.setItem('topclean_talebe_listesi', JSON.stringify(data));
        // Cloud Save
        if (db) db.ref('student_distribution').set(data);
        Swal.fire({icon:'success',title:'Liste Kaydedildi',text:'Öğrenci listesi başarıyla güncellendi.',timer:1500,showConfirmButton:false});
    },

    getPoolNames: function() {
        const parseList = (id) => document.getElementById(id).value.split(',').map(s => s.trim()).filter(s => s !== "");
        return [...parseList('listAlerjik'), ...parseList('listAstim'), ...parseList('listSaglikli'), ...parseList('listDiger')];
    },

    dagit: function() {
        this.save();
        const currentData = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const baskanlar = currentData.baskanlar || {};
        
        const parseList = (id) => document.getElementById(id).value.split(',').map(s => s.trim()).filter(s => s !== "");
        let students = {
            alerjik: parseList('listAlerjik'),
            astim: parseList('listAstim'),
            saglikli: parseList('listSaglikli'),
            diger: parseList('listDiger')
        };

        let distribution = {}; 
        let rooms = [];
        Object.keys(katlar).forEach(kat => {
            Object.keys(katlar[kat]).forEach(oda => {
                let type = "genel";
                let nameLower = oda.toLowerCase();
                if (nameLower.includes("wc") || nameLower.includes("lavabo")) type = "lavabo";
                else if (nameLower.includes("merdiven") || nameLower.includes("donanım") || nameLower.includes("muhasebe")) type = "dar";
                rooms.push({ kat, oda, type, capacity: type === "lavabo" ? 2 : 1, assigned: [] });
            });
        });

        let pool_astim = [...students.astim];
        let pool_alerjik = [...students.alerjik];
        let pool_genel = [...students.saglikli, ...students.diger];

        // Dağıtım
        rooms.forEach(r => { if (r.type !== "dar" && pool_astim.length > 0 && r.assigned.length < r.capacity) r.assigned.push(pool_astim.shift()); });
        rooms.forEach(r => { if (r.type !== "lavabo" && pool_alerjik.length > 0 && r.assigned.length < r.capacity) r.assigned.push(pool_alerjik.shift()); });
        rooms.forEach(r => { while (pool_genel.length > 0 && r.assigned.length < r.capacity) r.assigned.push(pool_genel.shift()); });
        
        let leftoverTeams = [...pool_astim, ...pool_alerjik];
        rooms.forEach(r => { while (leftoverTeams.length > 0 && r.assigned.length < r.capacity) r.assigned.push(leftoverTeams.shift()); });

        // KRİTİK: Eğer bir talebe Kat Başkanı ise onun temizlik yerini boşa çıkart
        const baskanImsmleri = Object.values(baskanlar);
        rooms.forEach(r => {
            r.assigned = r.assigned.filter(isim => !baskanImsmleri.includes(isim));
        });

        // Grupla
        rooms.forEach(r => {
            if (!distribution[r.kat]) distribution[r.kat] = {};
            distribution[r.kat][r.oda] = r.assigned;
        });

        this.renderSonuclar(distribution, baskanlar);
        this.save(distribution, baskanlar);
        
        Swal.fire({ icon: 'success', title: 'Dağıtım Tamamlandı', timer: 1500, showConfirmButton: false });
    },

    setBaskan: function(kat, isim) {
        if (isim.trim() === "") {
            const data = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
            const baskanlar = data.baskanlar || {};
            delete baskanlar[kat];
            this.save(null, baskanlar);
            this.dagit(); // Yeniden dağıt ki boşa çıkan geri dönsün
            return;
        }

        const havuz = this.getPoolNames();
        if (!havuz.includes(isim)) {
            Swal.fire('Hata', 'Girdiğiniz isim talebe listesinde bulunamadı!', 'error');
            return;
        }

        const data = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const baskanlar = data.baskanlar || {};
        baskanlar[kat] = isim;
        this.save(null, baskanlar);
        this.dagit(); // Yeniden dağıt ki başkanın yeri boşalsın
    },

    editOda: async function(kat, oda, index) {
        const data = JSON.parse(localStorage.getItem('topclean_talebe_listesi') || '{}');
        const dist = data.sonuclar;
        const currentInRoom = dist[kat][oda][index] || "";

        const { value: newName } = await Swal.fire({
            title: `${oda} - Talebe Değiştir`,
            input: 'text',
            inputLabel: 'Yeni İsim',
            inputValue: currentInRoom,
            showCancelButton: true,
            confirmButtonText: 'Kaydet',
            cancelButtonText: 'İptal'
        });

        if (newName !== undefined) {
            if (newName.trim() === "") {
                dist[kat][oda].splice(index, 1);
            } else {
                dist[kat][oda][index] = newName;
            }
            this.save(dist);
            this.renderSonuclar(dist, data.baskanlar);
        }
    },

    renderSonuclar: function(dist, baskanlar = {}) {
        const target = document.getElementById('listeSonuclari');
        if (!target) return;
        target.innerHTML = "";

        Object.keys(dist).forEach((kat, kIdx) => {
            // Kat Hocasını Bul
            const extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
            const allUsers = [...usersData, ...extraUsers];
            const hoca = allUsers.find(u => u.kat === kat && u.rol === 'gorevli');
            const hocaAdi = hoca ? hoca.name : 'Hoca Atanmamış';

            const wrap = document.createElement('div');
            wrap.className = "stagger-item mb-4";
            wrap.innerHTML = `
                <div class="d-flex align-items-center justify-content-between gap-2 mb-3 px-2">
                    <div class="x-small text-muted fw-bold">👤 ${hocaAdi}</div>
                    <div class="px-3 py-1 glass-card rounded-pill fw-bold small text-white" style="border: 1px solid var(--accent-primary);">${kat}</div>
                    <div class="d-flex align-items-center gap-1">
                        <span class="x-small text-muted">Bşk:</span>
                        <input type="text" class="form-control form-control-sm bg-transparent border-0 text-emerald text-end p-0 shadow-none fw-bold" 
                               style="width: 80px; font-size: 0.75rem;" placeholder="Seçilmedi" 
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
                
                let namesHTML = "";
                for(let i=0; i<capacity; i++) {
                    const name = names[i] || "";
                    namesHTML += `
                        <div class="cursor-pointer d-flex align-items-center justify-content-between py-1 border-bottom border-secondary border-opacity-25" 
                             onclick="ListeManager.editOda('${kat}', '${oda}', ${i})">
                            <span class="${name ? 'text-emerald' : 'text-danger fw-bold'} x-small">
                                ${name || '🆕 Doldurulabilir'}
                            </span>
                            <i data-lucide="edit-3" size="10" class="text-muted"></i>
                        </div>
                    `;
                }

                col.innerHTML = `
                    <div class="glass-card p-2 px-3 h-100">
                        <div class="fw-bold text-white small mb-1">${oda}</div>
                        <div class="d-flex flex-column">
                            ${namesHTML}
                        </div>
                    </div>
                `;
                row.appendChild(col);
            });
        });
        lucide.createIcons();
    }
};

// ---------- STOK (INVENTORY) MANAGER ----------
const InventoryManager = {
    render: function() {
        const container = document.getElementById('stokListesi');
        if (!container) return;
        
        const searchInput = document.getElementById('stokSearchInput');
        const search = searchInput ? searchInput.value.toLowerCase() : "";
        let items = cachedInventory;
        
        if (search) {
            items = items.filter(i => i.name.toLowerCase().includes(search));
        }

        container.innerHTML = "";
        
        if (items.length === 0) {
            container.innerHTML = '<div class="col-12 text-center text-muted p-5 glass-card">Gösterilecek ürün bulunamadı.</div>';
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
                            <button class="btn btn-sm btn-glass-round text-danger-glow ${currentUser.rol === 'gorevli' && currentUser.kat === '2. Kat' ? '' : 'd-none'}" onclick="InventoryManager.deleteProduct('${item.id}')" title="Sil">
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

    checkCriticalLevels: function() {
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

    showAddProductForm: async function() {
        const isEligible = currentUser.rol === 'gorevli' && currentUser.kat === '2. Kat'; // Sadece Burak Hoca
        if (!isEligible) {
            return Swal.fire({ icon: 'error', title: 'Yetki Hatası', text: 'Ürün tanımlama yetkisi Depo Sorumlusuna (2. Kat) aittir.' });
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

    showThresholdConfig: async function() {
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

    showMovementForm: async function() {
        if (cachedInventory.length === 0) {
            return Swal.fire({ icon: 'info', title: 'Ürün Yok', text: 'Sistemde henüz ürün tanımlı değil.' });
        }

        const canAdd = currentUser.rol === 'idareci' || (currentUser.rol === 'gorevli' && currentUser.kat === '2. Kat');
        
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

    logMovement: function(itemId, amount, type, note = "") {
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

    showLogs: function(itemId) {
        const item = cachedInventory.find(i => i.id === itemId);
        const logs = cachedInventoryLogs.filter(l => l.itemId === itemId).sort((a,b) => b.date - a.date);
        
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

    showAllLogs: function() {
        const logs = [...cachedInventoryLogs].sort((a,b) => b.date - a.date).slice(0, 50);
        
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

    setThreshold: async function(itemId) {
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

    deleteProduct: function(itemId) {
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
