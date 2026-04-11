// ---------- FIREBASE CONFIGURATION ----------
// TODO: console.firebase.google.com adresinden kendi anahtarlarını buraya yapıştır!
const firebaseConfig = {
    apiKey: "AIzaSyCO88ONQpL3vFRMSY-jyhRImbsNC1ngcmQ",
    authDomain: "topclean-ce4e6.firebaseapp.com",
    databaseURL: "https://topclean-ce4e6-default-rtdb.firebaseio.com",
    projectId: "topclean-ce4e6",
    storageBucket: "topclean-ce4e6.firebaseastorage.app",
    messagingSenderId: "413118182506",
    appId: "1:413118182506:web:4e1897da948b8348030613"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

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
    lucide.createIcons();
    initTheme();
    
    // 1. Start Cloud Sync
    syncFromCloud();
    
    initLoginSelect();
    checkSession(); // Restore session if exists

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('userSelect').addEventListener('change', checkLoginType);
    document.getElementById('fotoUpload').addEventListener('change', handleFotoUpload);

    // Initial Migration (Optional: LocalStorage to Firebase if needed)
    migrateLocalToCloud();

    const dateSel = document.getElementById('adminDateSelector');
    if(dateSel) {
        dateSel.valueAsDate = new Date();
        dateSel.addEventListener('change', loadAdminPanel);
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
    const select = document.getElementById('userSelect');
    select.innerHTML = "";
    // Merge hardcoded + localStorage users
    const deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
    const extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
    const allUsers = [...usersData.filter(u => !deletedFixed.includes(u.name)), ...extraUsers];
    allUsers.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.textContent = u.name;
        select.appendChild(opt);
    });
    // Liste Dağılımı seçeneği (İdareci girişi)
    const opt = document.createElement('option');
    opt.value = "Liste Dağılımı";
    opt.textContent = "Liste Dağılımı (Demo)";
    select.appendChild(opt);
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

    if (authMode === "email") {
        const email = document.getElementById('emailInput').value;
        const pass = document.getElementById('emailPassInput').value;
        
        auth.signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // Determine user role from DB or fixed logic
                db.ref('personnel').orderByChild('email').equalTo(email).once('value', snapshot => {
                    const data = snapshot.val();
                    if (data) {
                        currentUser = Object.values(data)[0];
                    } else {
                        // Default to admin if not found in personnel list
                        currentUser = { name: email.split('@')[0], rol: "idareci", kat: "" };
                    }
                    localStorage.setItem('topclean_session', JSON.stringify(currentUser));
                    loginSuccess();
                });
            })
            .catch((error) => {
                Swal.fire({ icon: 'error', title: 'Hata', text: 'E-posta veya şifre hatalı!' });
            });
        return;
    }

    const uName = document.getElementById('userSelect').value;
    const uPass = document.getElementById('passInput').value;

    if (uName === "Liste Dağılımı") {
        currentUser = { name: "Liste Dağılımı", rol: "liste", kat: "" };
        localStorage.setItem('topclean_session', JSON.stringify(currentUser));
        ListeManager.load();
        showPanel("listePanel");
        updateHeader();
        return;
    }

    // Merge hardcoded + localStorage users for login
    const extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
    const allUsers = [...usersData, ...extraUsers];
    const un = allUsers.find(x => x.name === uName);

    if (un && un.pass === uPass) {
        currentUser = un;
        localStorage.setItem('topclean_session', JSON.stringify(un));
        loginSuccess();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'Bilgilerinizi hatalı girdiniz, lütfen tekrar deneyin.',
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
        text: 'Bulut senkronizasyonu aktif.',
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
    document.getElementById('userProfileControls').classList.add('d-none');
    initLoginSelect(); // Yenilenmiş personel listesini ana ekrana yükle
    showPanel("loginPanel");
    updateHeader();
}

function updateHeader() {
    if (currentUser) {
        document.getElementById('userProfileControls').classList.remove('d-none');
        document.getElementById('userProfileControls').classList.add('d-flex');
        document.getElementById('welcomeText').innerText = `Hoş Geldiniz | ${currentUser.name}`;
        document.getElementById('roleText').innerText = currentUser.rol === 'gorevli' ? currentUser.kat : currentUser.rol.toUpperCase();
    }
}

function showPanel(id) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ---------- VERİ (Cloud / LocalStorage) ----------
// Firebase'den veri çekme (Realtime)
let cachedData = JSON.parse(localStorage.getItem('topclean_data') || '[]');
let isSyncing = false;
let syncTimeout = null;

function syncFromCloud() {
    try {
        db.ref('reports').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data && !isSyncing) {
                cachedData = Object.values(data);
                localStorage.setItem('topclean_data', JSON.stringify(cachedData));
                
                // Debounce refresh to avoid freezing
                if (syncTimeout) clearTimeout(syncTimeout);
                syncTimeout = setTimeout(() => {
                    refreshCurrentPanel();
                }, 300);
            }
        }, (error) => {
            console.error("Firebase Sync Error:", error);
        });

        db.ref('personnel').on('value', (snapshot) => {
            const pData = snapshot.val();
            if (pData) {
                localStorage.setItem('topclean_users', JSON.stringify(Object.values(pData)));
                initLoginSelect();
            }
        });
    } catch (e) {
        console.warn("Cloud connection failed, using local mode.");
    }
}

function refreshCurrentPanel() {
    if (!currentUser) return;
    if (currentUser.rol === "gorevli") loadGorevliPanel(currentUser.kat);
    else if (currentUser.rol === "idareci") IdarecManager.loadBinaDurumu();
    else if (currentUser.rol === "mufettis") loadAdminPanel();
}

function getData() {
    return cachedData;
}

function saveData(item) {
    item.id = new Date().getTime().toString();
    // Cloud save
    db.ref('reports/' + item.id).set(item);
    // Local fallback
    cachedData.push(item);
    localStorage.setItem('topclean_data', JSON.stringify(cachedData));
}

// Migration Helper
async function migrateLocalToCloud() {
    const localData = JSON.parse(localStorage.getItem('topclean_data') || '[]');
    const localUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
    
    // Alreay migrated check
    if (localStorage.getItem('topclean_migrated') === 'true') return;

    if (localData.length === 0 && localUsers.length === 0) return;

    isSyncing = true;
    console.log("Migration started...");

    try {
        for (const item of localData) {
            await db.ref('reports/' + item.id).set(item);
        }
        for (const u of localUsers) {
            await db.ref('personnel/' + u.name.replace(/\s+/g, '_')).set(u);
        }
        localStorage.setItem('topclean_migrated', 'true');
        console.log("Migration completed.");
    } catch (e) {
        console.error("Migration failed:", e);
    } finally {
        isSyncing = false;
        refreshCurrentPanel();
    }
}

// ---------- GÖREVLİ PANELİ ----------
function loadGorevliPanel(katAd) {
    currentKat = katAd;
    document.getElementById('gorevliKatAd').innerText = katAd;
    const listeEl = document.getElementById('bolumListesi');
    listeEl.innerHTML = "";

    const bolumler = katlar[katAd];
    const data = getData();
    const bugunStr = new Date().toLocaleDateString();

    let reddedilenCount = 0;

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

        const div = document.createElement('div');
        div.className = "action-card stagger-item d-flex flex-column gap-3";
        div.style.animationDelay = `${(Object.keys(bolumler).indexOf(bolumAd)) * 0.1}s`;
        div.onclick = () => KriterManager.ac(katAd, bolumAd, kriterler);
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold text-white" style="font-size: 1.1rem; letter-spacing: 0.5px;">📍 ${bolumAd}</div>
                <button class="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 flex-shrink-0" style="width: 32px; height: 32px; border-color: var(--glass-border); opacity: 0.8;" onclick="event.stopPropagation(); KriterManager.rehberBilgi('${bolumAd}')">
                    <i data-lucide="info" size="14"></i>
                </button>
            </div>
            <div class="badge-status ${badgeClass} text-center justify-content-center w-100 py-2" style="font-weight: 800;">
                ${badgeYazi}
            </div>
        `;
        listeEl.appendChild(div);
    }
    lucide.createIcons();

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
        Swal.fire({
            title: '✨ Standart Temizlik Prosedürü',
            html: `
            <div style="text-align: left; font-size: 0.95rem; line-height: 1.6;">
                1. <b>HAVALANDIRMA:</b> Odaya girdiğinizde ilk iş camları açıp temiz hava girmesini sağlayın.<br>
                2. <b>ÇÖP BOŞALTMA:</b> Çöp kutularını boşaltın, torbaları yenileyin.<br>
                3. <b>TOZ ALMA:</b> Yukarıdan aşağıya (raflardan zemine) doğru toz alın.<br>
                4. <b>YÜZEY TEMİZLİĞİ:</b> Masaları ve temas noktalarını dezenfektanlı bezle silin.<br>
                5. <b>ZEMİNLER:</b> Zemini süpürün ve ardından uygun temizleyici ile paspaslayın.<br>
                6. <b>KOKU & DÜZEN:</b> Odaya hoş bir koku sıkın ve eşyaları düzeltin.<br>
                7. <b>KONTROL:</b> Çıkmadan önce odanın genel görünümünü %100 kontrol edin.
            </div>
            `,
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
    const matris = document.getElementById('denetimMatrisi');
    if(!matris) return;
    matris.innerHTML = "";
    
    const selectedDate = document.getElementById('adminDateSelector').value; // yyyy-mm-dd
    const targetDateStr = new Date(selectedDate).toLocaleDateString();
    
    let allData = getData();
    
    // Stats for the SELECTED DATE
    const dayData = allData.filter(d => new Date(d.tarih).toLocaleDateString() === targetDateStr);
    
    const total = dayData.length;
    const success = dayData.filter(d => d.durum === "onaylandi").length;
    const danger = dayData.filter(d => d.durum === "reddedildi").length;
    const pending = dayData.filter(d => d.durum === "bekliyor").length;

    document.getElementById('adminStatTotal').innerText = total;
    document.getElementById('adminStatSuccess').innerText = success;
    document.getElementById('adminStatDanger').innerText = danger;
    document.getElementById('adminStatPending').innerText = pending;

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
                     ${hasReport ? `onclick='AdminManager.showDetail(${JSON.stringify(sectionRecord)})'` : ''}>
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

    lucide.createIcons();
}

const AdminManager = {
    showDetail: function(report) {
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
            
            // Cloud Update
            db.ref('reports/' + currentActiveReport.id).update({
                durum: status,
                mufettis_yorum: comment,
                mufettis_tarih: data[idx].mufettis_tarih
            });

            localStorage.setItem('topclean_data', JSON.stringify(data));
            cachedData = data; // Update cache
            
            bootstrapModal.hide();
            Swal.fire({
                icon: status === 'onaylandi' ? 'success' : 'warning',
                title: status === 'onaylandi' ? 'Onaylandı' : 'Reddedildi',
                text: 'İşlem başarıyla tamamlandı.',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                loadAdminPanel();
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
    }
};

// ---------- İDARECİ MANAGER ----------
const IdarecManager = {
    load: function() {
        const today = new Date().toISOString().split('T')[0];
        const dateSel = document.getElementById('idarecDateSelector');
        const raporSel = document.getElementById('raporDateSelector');
        if(dateSel) { dateSel.value = today; dateSel.onchange = function(){ IdarecManager.loadBinaDurumu(); }; }
        if(raporSel) raporSel.value = today;
        this.loadBinaDurumu();
        this.loadGecmis('hepsi');
        this.loadPersonel();
        lucide.createIcons();
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
        if(!matris) return;
        matris.innerHTML = '';
        var selectedDate = document.getElementById('idarecDateSelector').value;
        var targetDateStr = new Date(selectedDate).toLocaleDateString();
        var allData = getData();
        var dayData = allData.filter(function(d){ return new Date(d.tarih).toLocaleDateString() === targetDateStr; });
        document.getElementById('idarecStatTotal').innerText = dayData.length;
        document.getElementById('idarecStatSuccess').innerText = dayData.filter(function(d){return d.durum==='onaylandi';}).length;
        document.getElementById('idarecStatDanger').innerText = dayData.filter(function(d){return d.durum==='reddedildi';}).length;
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
                var sc = 'badge-idle', sy = 'BEKLİYOR';
                if(rec) {
                    if(rec.durum==='onaylandi'){sc='badge-success';sy='ONAYLANDI';}
                    else if(rec.durum==='reddedildi'){sc='badge-danger';sy='REDDEDİLDİ';}
                    else {sc='badge-warning';sy='ONAY BEKLİ';}
                }
                var col = document.createElement('div');
                col.className = 'col-12 col-md-6 px-1';
                var timeStr = rec ? new Date(rec.tarih).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) + ' | ' + rec.secilen.length + ' kriter' : 'Kaydı yok';
                col.innerHTML = '<div class="glass-card p-3 d-flex align-items-center justify-content-between mb-2"><div><div class="fw-bold text-white" style="font-size:0.9rem; letter-spacing:0.5px;">' + bolumAd + '</div><div class="x-small text-dim">' + timeStr + '</div></div><span class="badge-status ' + sc + '" style="font-size:0.65rem;">' + sy + '</span></div>';
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
            var deleteBtn = '<button class="btn btn-sm btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style="width:28px;height:28px;" onclick="IdarecManager.personelSil(\'' + u.name + '\', ' + isExtra + ')"><i data-lucide="trash-2" size="13"></i></button>';
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
        
        // Save to Firebase
        db.ref('personnel/' + ad.replace(/\s+/g, '_')).set(newUser);
        
        localStorage.setItem('topclean_users', JSON.stringify(extras));
        document.getElementById('yeniPersonelAd').value = '';
        document.getElementById('yeniPersonelSifre').value = '';
        document.getElementById('yeniPersonelKat').value = '';
        Swal.fire({icon:'success',title:'Kaydedildi!',text:ad+' sisteme eklendi.',timer:1800,showConfirmButton:false});
        IdarecManager.loadPersonel();
        initLoginSelect(); // Login dropdown'u güncelle
    },
    personelSil: function(name, isExtra) {
        if(isExtra) {
            var extras = JSON.parse(localStorage.getItem('topclean_users') || '[]');
            var filtered = extras.filter(u => u.name !== name);
            localStorage.setItem('topclean_users', JSON.stringify(filtered));
        } else {
            var deletedFixed = JSON.parse(localStorage.getItem('topclean_deleted_fixed_users') || '[]');
            deletedFixed.push(name);
            localStorage.setItem('topclean_deleted_fixed_users', JSON.stringify(deletedFixed));
        }
        // Cloud Delete
        db.ref('personnel/' + name.replace(/\s+/g, '_')).remove();
        
        Swal.fire({icon:'info',title:'Silindi',text:name+' sistemden kaldırıldı.',timer:1800,showConfirmButton:false});
        IdarecManager.loadPersonel();
        initLoginSelect();
    },
    exportCSV: function() {
        var selectedDate = document.getElementById('raporDateSelector').value;
        var targetDateStr = new Date(selectedDate).toLocaleDateString();
        var dayData = getData().filter(function(d){return new Date(d.tarih).toLocaleDateString()===targetDateStr;});
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
        db.ref('student_distribution').set(data);
        Swal.fire({icon:'success',title:'Bulut Kaydı',text:'Öğrenci listesi senkronize edildi.',timer:1500,showConfirmButton:false});
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
