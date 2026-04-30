// ---------- TOPCLEAN v4.8 (CORE / ÇEKİRDEK) ----------
// Bu dosya Firebase ayarları, Veriler ve Temel Navigasyon içerir.
// Manager objeleri artık tek bir app.js dosyasında birleştirilmiştir.

const firebaseConfig = {
    apiKey: "AIzaSyCO88ONQpL3vFRMSY-jyhRImbsNC1ngcmQ",
    authDomain: "topclean-ce4e6.firebaseapp.com",
    databaseURL: "https://topclean-ce4e6-default-rtdb.firebaseio.com",
    projectId: "topclean-ce4e6",
    storageBucket: "topclean-ce4e6.firebasestorage.app",
    messagingSenderId: "413118182506",
    appId: "1:413118182506:web:4e1897da948b8348030613"
};

let db = null;
let auth = null;

try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
        auth = firebase.auth();
    }
} catch (e) { console.error("Firebase Init Error:", e); }

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
    // -1: Bodrum Kat
    { name: "Abdülkadir Uysal", pass: "1234", kat: "Bodrum Kat", rol: "gorevli", depo: false },
    // 0: Zemin Kat
    { name: "Mehmet Ali Zabun", pass: "1234", kat: "Zemin Kat", rol: "gorevli", depo: false },
    // 1: Akademik Kat
    { name: "Oğuz Erol", pass: "1234", kat: "Akademik Kat", rol: "gorevli", depo: false },
    // 2: Ara Kat (Depo Sorumlusu)
    { name: "Burakhan Karaoğlan", pass: "1234", kat: "Ara Kat", rol: "gorevli", depo: true },
    // 3: Yatakhane Katı
    { name: "Görevli", pass: "1234", kat: "Yatakhane Katı", rol: "gorevli", depo: false },
    // 4: Sosyal Alan Katı
    { name: "Emra Karabalak", pass: "1234", kat: "Sosyal Alan Katı", rol: "gorevli", depo: false },
    // İç Mesul (Müfettiş)
    { name: "İç Mesul", pass: "1111", kat: "", rol: "mufettis" },
    // İdareci
    { name: "İdareci", pass: "1111", kat: "", rol: "idareci" }
];

let currentUser = null;
let cachedData = [];
let cachedArizalar = [];
let currentKat = "";
let currentBolum = "";
let currentKriterler = [];
let fotoDataURL = "";
let arizaFotoURL = ""; // Yeni: Arıza fotoğrafı için
let isSyncing = false;
let offlineQueue = JSON.parse(localStorage.getItem('topclean_offline_queue') || '[]');

// --- TEMEL FONKSİYONLAR ---
function todayISO() { return new Date().toISOString().split('T')[0]; }
function toShortDate(ts) { return new Date(ts).toISOString().split('T')[0]; }

function getData() {
    const local = JSON.parse(localStorage.getItem('topclean_reports') || '[]');
    return local;
}

function saveData(item) {
    const data = getData();
    item.id = new Date().getTime().toString();
    data.push(item);
    localStorage.setItem('topclean_reports', JSON.stringify(data));
    if (db) db.ref('reports/' + item.id).set(item);
}

function syncFromCloud() {
    if (!db || isSyncing) return;
    isSyncing = true;
    updateSyncStatus('loading');

    db.ref('reports').on('value', snap => {
        const val = snap.val();
        if (val) {
            cachedData = Object.values(val);
            localStorage.setItem('topclean_reports', JSON.stringify(cachedData));
            if (currentUser) refreshCurrentPanel();
            updateSyncStatus('online');
        }
        isSyncing = false;
    }, err => {
        console.error("Sync Error:", err);
        updateSyncStatus('offline');
        isSyncing = false;
    });

    // Check connection state
    db.ref('.info/connected').on('value', snap => {
        if (snap.val() === true) {
            updateSyncStatus('online');
        } else {
            updateSyncStatus('offline');
        }
    });
}

function updateSyncStatus(status) {
    const el = document.getElementById('syncIndicator');
    if (!el) return;
    el.className = 'sync-indicator';
    if (status === 'online') el.classList.add('sync-online');
    else if (status === 'offline') el.classList.add('sync-offline');
    else if (status === 'loading') el.classList.add('sync-loading');
}

function showPanel(id) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.add('d-none'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('d-none');
        target.classList.add('d-flex');
        
        // Add a subtle transition/skeleton effect if it's a main panel
        if (id === 'idarecPanel' || id === 'gorevliPanel') {
            target.style.opacity = '0';
            setTimeout(() => { target.style.opacity = '1'; target.style.transition = 'opacity 0.3s ease'; }, 50);
        }
    }
}

function handleLogin(e) {
    if (e) e.preventDefault();
    const uName = document.getElementById('userSelect')?.value?.trim();
    const uPass = document.getElementById('passInput')?.value;

    if (!uName || !uPass) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    if (uName.toLowerCase() === "liste" || uName === "Liste Dağılımı") {
        currentUser = { name: "Liste Dağılımı", rol: "liste", kat: "" };
        _saveSession(currentUser);
        if (typeof ListeManager !== 'undefined') ListeManager.load();
        showPanel("listePanel");
        return;
    }

    const un = usersData.find(u => u.name.toLowerCase() === uName.toLowerCase() && u.pass === uPass);
    if (un) {
        currentUser = { name: un.name, rol: un.rol, kat: un.kat, depo: un.depo || false };
        _saveSession(currentUser);
        loginSuccess();
    } else {
        alert("Hatalı kullanıcı adı veya şifre! Lütfen tekrar deneyin.");
    }
}

function loginSuccess() {
    _routeUser();
}

function refreshCurrentPanel() { _routeUser(); }
function _saveSession(user) { localStorage.setItem('topclean_session', JSON.stringify(user)); }
function checkSession() {
    const s = localStorage.getItem('topclean_session');
    if (s) {
        currentUser = JSON.parse(s);
        _routeUser();
    }
}

function handleLogout() {
    localStorage.removeItem('topclean_session');
    currentUser = null;
    showPanel("loginPanel");
}

document.addEventListener('DOMContentLoaded', () => {
    const lForm = document.getElementById('loginForm');
    if (lForm) lForm.addEventListener('submit', handleLogin);
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    
    // Populate userSelect logic removed (using text input now)
    
    checkSession();
    if (db) {
        syncFromCloud();
        ChatManager.init();
        ActivityManager.init();
        VoiceManager.init();
        IdarecManager.renderHeatmap();
    }
});

// TOPCLEAN v4.8 - MANAGERS BEYİN DOSYASI (FULL VERSION)
// Tüm Panel ve UI mantığı artık burada.

// 1. KRİTER MANAGER (CHECKLIST SİSTEMİ)
const KriterManager = {
    ac: function (katAd, bolumAd, kriterler) {
        currentBolum = bolumAd;
        currentKriterler = kriterler;
        currentKat = katAd;
        document.getElementById('kriterKatAd').innerText = katAd;
        document.getElementById('kriterBolumAd').innerText = bolumAd;
        this.fotografiSil();
        document.getElementById('gorevliNot').value = "";
        const listEl = document.getElementById('kriterListesi');
        listEl.innerHTML = "";

        kriterler.forEach((k, idx) => {
            const div = document.createElement('div');
            div.className = 'kriter-kart p-3 d-flex align-items-center gap-3 cursor-pointer';
            div.setAttribute('data-kriter', k);
            div.setAttribute('data-selected', 'true');
            div.innerHTML = `
                <div class="kriter-ikon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style="width:36px;height:36px;background:rgba(16, 185, 129, 0.2);border:2px solid var(--accent-emerald);">
                    <i data-lucide="check" size="16" class="text-emerald"></i>
                </div>
                <span class="fs-6 text-white fw-bold">${k}</span>
            `;
            div.onclick = () => {
                const isSelected = div.getAttribute('data-selected') === 'true';
                div.setAttribute('data-selected', isSelected ? 'false' : 'true');
                div.querySelector('.kriter-ikon').style.opacity = isSelected ? '0.3' : '1';
                this.guncelleSayac();
            };
            listEl.appendChild(div);
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();
        this.guncelleSayac();
        showPanel('kriterPanel');
    },
    guncelleSayac: function () {
        const kartlar = document.querySelectorAll('.kriter-kart');
        let isaretli = 0;
        kartlar.forEach(k => { if (k.getAttribute('data-selected') === 'true') isaretli++; });
        const badge = document.getElementById('kriterSayac');
        if (badge) badge.innerText = `${isaretli}/${currentKriterler.length}`;
    },
    fotografiSil: function () { fotoDataURL = ""; },
    veriyiKaydet: function () {
        const kartlar = document.querySelectorAll('.kriter-kart');
        let secilenler = [];
        kartlar.forEach(k => { if (k.getAttribute('data-selected') === 'true') secilenler.push(k.getAttribute('data-kriter')); });

        const yorum = document.getElementById('gorevliNot').value;
        const item = {
            kat: currentKat,
            bolum: currentBolum,
            secilen: secilenler,
            yorum: yorum,
            foto: fotoDataURL,
            tarih: new Date().toISOString(),
            bildiren: currentUser.name,
            durum: 'bekliyor'
        };

        saveData(item);
        Swal.fire({
            icon: 'success',
            title: 'Kaydedildi!',
            text: 'Veriler başarıyla gönderildi.',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            loadGorevliPanel(currentKat);
            showPanel('gorevliPanel');
        });
    }
};

// 2. GÖREVLİ MANAGER
const GorevliManager = {
    load: function() {
        if (typeof loadGorevliPanel === 'function') loadGorevliPanel(currentUser.kat);
    }
};

// 3. İDARECİ MANAGER (ASIL BEYİN BURASI)
const IdarecManager = {
    currentBinaKat: 'Hepsi',

    load: function() {
        console.log("🚀 [Idareci Panel] Tam yükleme yapılıyor...");
        try {
            const dateSel = document.getElementById('idarecDateSelector');
            if (dateSel && !dateSel.value) dateSel.value = todayISO();

            this.updateStats();
            this.renderBinaDurumu();
            this.renderCharts();
            this.renderHeatmap();
            this.loadBasari('haftalik');
            
            // Varsayılan sekmeyi aç
            const firstTab = document.querySelector('.idarec-tab');
            if (firstTab) this.switchTab('durum', firstTab);

            if (typeof lucide !== 'undefined') lucide.createIcons();
        } catch (err) { console.error("IdarecManager Load Error:", err); }
    },

    switchTab: function(tabName, btn) {
        // Tab UI Update
        document.querySelectorAll('.idarec-tab').forEach(b => {
            b.classList.remove('active', 'text-white');
            b.classList.add('text-muted');
            const indicator = b.querySelector('.tab-indicator');
            if(indicator) indicator.style.opacity = '0';
        });
        
        btn.classList.add('active', 'text-white');
        btn.classList.remove('text-muted');
        const indicator = btn.querySelector('.tab-indicator');
        if(indicator) indicator.style.opacity = '1';
        
        // Content Toggle
        document.querySelectorAll('.idarec-tab-content').forEach(c => c.classList.add('d-none'));
        const target = document.getElementById('idarec-tab-' + tabName);
        if (target) {
            target.classList.remove('d-none');
            this.refreshTabData(tabName);
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    refreshTabData: function(tabName) {
        if (tabName === 'durum') {
            this.updateStats();
            this.renderBinaDurumu();
            this.renderCharts();
        } else if (tabName === 'ari') {
            this.renderArizaListesi();
        }
    },

    updateStats: function() {
        const data = getData();
        const bugun = todayISO();
        const gunluk = data.filter(d => toShortDate(new Date(d.tarih).getTime()) === bugun);
        
        const onayli = gunluk.filter(d => d.durum === 'onaylandi').length;
        const toplam = gunluk.length;
        const yuzde = toplam > 0 ? Math.round((onayli / toplam) * 100) : 0;

        const hijyenText = document.getElementById('genelHijyenText');
        if (hijyenText) hijyenText.innerText = `%${yuzde}`;
        
        const progress = document.getElementById('genelHijyenProgress');
        if (progress) progress.style.width = `${yuzde}%`;
    },

    renderBinaDurumu: function() {
        const container = document.getElementById('idarecBinaMatrisi');
        if (!container) return;
        container.innerHTML = "";

        const data = getData();
        const bugun = todayISO();

        for (const [katAd, bolumler] of Object.entries(katlar)) {
            const katDiv = document.createElement('div');
            katDiv.className = "w-100 mb-5 animate-fade-in";
            
            let katHTML = `
                <div class="d-flex align-items-center gap-3 mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                    <div class="p-2 rounded-circle bg-emerald bg-opacity-10"><i data-lucide="layers" class="text-emerald" size="18"></i></div>
                    <h5 class="fw-black text-white m-0 tracking-wide">${katAd}</h5>
                </div>
                <div class="row g-3">
            `;

            for (const bolumAd of Object.keys(bolumler)) {
                const rapor = data.find(d => d.kat === katAd && d.bolum === bolumAd && toShortDate(new Date(d.tarih).getTime()) === bugun);

                let statusClass = "bg-glass-dark text-muted border-secondary";
                let statusIcon = "circle";
                let textColor = "text-muted";

                if (rapor) {
                    if (rapor.durum === 'onaylandi') { statusClass = "bg-emerald bg-opacity-10 border-emerald"; statusIcon = "check-circle"; textColor = "text-emerald"; }
                    else if (rapor.durum === 'reddedildi') { statusClass = "bg-danger bg-opacity-10 border-danger"; statusIcon = "x-circle"; textColor = "text-danger"; }
                    else { statusClass = "bg-warning bg-opacity-10 border-warning"; statusIcon = "clock"; textColor = "text-warning"; }
                }

                katHTML += `
                    <div class="col-6 col-md-4 col-lg-2">
                        <div class="p-3 rounded-4 border text-center transition-all ${statusClass}" style="border-width:1px!important; cursor:pointer" onclick="IdarecManager.showDetail('${katAd}','${bolumAd}')">
                            <i data-lucide="${statusIcon}" class="${textColor} mb-2" size="20"></i>
                            <div class="x-small fw-bold text-truncate text-white">${bolumAd}</div>
                        </div>
                    </div>
                `;
            }
            katHTML += `</div>`;
            katDiv.innerHTML = katHTML;
            container.appendChild(katDiv);
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    showDetail: function(kat, bolum) {
        const data = getData();
        const bugun = todayISO();
        const r = data.find(d => d.kat === kat && d.bolum === bolum && toShortDate(new Date(d.tarih).getTime()) === bugun);
        
        let content = `<div class="text-start">`;
        if (r) {
            content += `
                <div class="mb-3 p-3 rounded-4 bg-glass-dark border border-secondary border-opacity-25">
                    <div class="x-small text-muted mb-1">Durum</div>
                    <div class="fw-bold ${r.durum === 'onaylandi' ? 'text-emerald' : 'text-warning'}">${r.durum.toUpperCase()}</div>
                    <div class="x-small text-muted mt-2">Temizlik Saati</div>
                    <div class="text-white">${new Date(r.tarih).toLocaleTimeString()}</div>
                    <div class="x-small text-muted mt-2">Personel</div>
                    <div class="text-white">${r.bildiren}</div>
                    ${r.yorum ? `<div class="x-small text-muted mt-2">Not</div><div class="text-white small">${r.yorum}</div>` : ''}
                </div>
            `;
        } else {
            content += `<div class="p-4 text-center text-muted">Bugün henüz veri girilmemiş.</div>`;
        }
        content += `</div>`;

        Swal.fire({
            title: `${kat} - ${bolum}`,
            html: content,
            background: 'var(--bg-main)',
            color: '#fff',
            confirmButtonText: 'Kapat',
            confirmButtonColor: 'var(--accent-emerald)'
        });
    },

    renderArizaListesi: function() {
        this.filterArizalar("hepsi", null);
    },

    loadArizalar: function() {
        const arr = JSON.parse(localStorage.getItem("topclean_arizalar") || "[]");
        const el = document.getElementById("adminArizaCount"); 
        if(el) el.innerText = arr.filter(a => a.durum === "bekliyor").length;
    },

    filterArizalar: function(f, btn) {
        if(btn) {
            document.querySelectorAll(".ariza-filter").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        }
        
        const arr = JSON.parse(localStorage.getItem("topclean_arizalar") || "[]");
        const c = document.getElementById("idarecArizaList"); 
        if(!c) return;
        
        const filtered = f === "hepsi" ? arr : arr.filter(a => a.durum === f);
        if(!filtered.length) { 
            c.innerHTML = "<div class='p-4 text-center text-muted'>Kayıt yok.</div>"; 
            return; 
        }
        
        c.innerHTML = filtered.map(a => {
            const borderClass = a.durum === "bekliyor" ? "border-warning" : "border-success";
            const badgeClass = a.durum === "bekliyor" ? "bg-warning text-dark" : "bg-success";
            const badgeText = a.durum === "bekliyor" ? "Bekliyor" : "Onarıldı";
            const desc = a.aciklama || "-";
            
            return `
                <div class='glass-card p-4 mb-3 border ${borderClass}' style='border-width:1px!important;border-radius:16px'>
                    <div class='d-flex justify-content-between align-items-start mb-2'>
                        <h6 class='text-white fw-bold m-0'>${a.yer}</h6>
                        <span class='badge ${badgeClass}'>${badgeText}</span>
                    </div>
                    <p class='text-muted small mb-2'>${desc}</p>
                    <div class='x-small text-muted'>Bildiren: ${a.bildiren}</div>
                    ${a.durum === "bekliyor" ? `<button class='btn btn-sm btn-success mt-2 rounded-pill' onclick="IdarecManager.arizaOnayla('${a.id}')">Onarıldı İşaretle</button>` : ''}
                </div>
            `;
        }).join("");
    },

    arizaOnayla: function(id) {
        const arr = JSON.parse(localStorage.getItem("topclean_arizalar") || "[]"); 
        const a = arr.find(x => x.id === id); 
        if(a) { 
            a.durum = "onarildi"; 
            localStorage.setItem("topclean_arizalar", JSON.stringify(arr)); 
            if(db) db.ref("arizalar/" + id).update({ durum: "onarildi" }); 
        }
        this.filterArizalar("hepsi", null); 
        this.loadArizalar();
    },

    exportCSV: function() {
        const data = getData(); 
        if(!data.length) { alert("Dışa aktarılacak veri yok."); return; }
        
        const rows = data.map(d => {
            const tarih = new Date(d.tarih).toLocaleString("tr-TR");
            const kriterler = (d.secilen || []).join(" | ");
            const yorum = d.yorum || "";
            return [tarih, d.kat, d.bolum, d.durum, kriterler, yorum];
        });
        
        const csv = ["Tarih,Kat,Bölüm,Durum,Kriterler,Yorum"].concat(
            rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(","))
        ).join("\n");
        
        const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" }); 
        const url = URL.createObjectURL(blob); 
        const a = document.createElement("a"); 
        a.href = url; 
        a.download = `TopClean_${todayISO()}.csv`; 
        a.click(); 
        URL.revokeObjectURL(url);
    },

    loadBasari: function(donem, btn) {
        if(btn) {
            document.querySelectorAll(".basari-filter").forEach(b => { b.classList.remove("active"); b.style.background = "transparent"; });
            btn.classList.add("active"); btn.style.background = "rgba(255,255,255,0.1)";
        }

        const data = getData();
        const stats = {};
        
        // Calculate points based on approved reports
        data.forEach(r => {
            if(r.durum === 'onaylandi') {
                stats[r.bildiren] = (stats[r.bildiren] || 0) + 1;
            }
        });

        const sorted = Object.entries(stats).sort((a,b) => b[1] - a[1]);
        const c = document.getElementById("gururTablosu");
        if(!c) return;

        if(!sorted.length) {
            c.innerHTML = "<div class='text-center text-muted py-3 x-small'>Henüz veri yok.</div>";
            return;
        }

        c.innerHTML = sorted.slice(0, 3).map((s, idx) => {
            const icons = ["🥇", "🥈", "🥉"];
            return `
                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-white bg-opacity-5 border border-white border-opacity-10">
                    <div class="d-flex align-items-center gap-3">
                        <span style="font-size: 1.2rem;">${icons[idx]}</span>
                        <div>
                            <div class="text-white fw-bold small">${s[0]}</div>
                            <div class="x-small text-muted">${s[1]} Onaylı Temizlik</div>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        const best = sorted[0] ? sorted[0][0] : "-";
        const bGorevli = document.getElementById("basariGorevli");
        if(bGorevli) bGorevli.innerText = best;
        
        // Random supervisor for demo
        const bBaskan = document.getElementById("basariBaskan");
        if(bBaskan) bBaskan.innerText = "İdareci";
    },

    mufettisKatlariYukle: function() {
        const c = document.getElementById("mufettisKatButonlari"); 
        if(!c) return; 
        c.innerHTML = "";
        
        const data = getData(); 
        const bugun = todayISO();
        
        Object.keys(katlar).forEach(katAd => {
            const odalar = Object.keys(katlar[katAd]); 
            const tam = odalar.filter(b => data.find(d => d.kat === katAd && d.bolum === b && toShortDate(new Date(d.tarih).getTime()) === bugun));
            
            const yuzde = Math.round((tam.length / odalar.length) * 100);
            const btn = document.createElement("button"); 
            
            const aktifClass = yuzde === 100 ? "kat-aktif" : "kat-pasif";
            btn.className = `btn w-100 py-4 text-start d-flex align-items-center justify-content-between fw-bold rounded-4 mb-2 kat-secim-btn ${aktifClass}`;
            
            const renk = yuzde === 100 ? "#10b981" : yuzde > 50 ? "#f59e0b" : "#ef4444";
            btn.innerHTML = `
                <div>
                    <div class='fw-black text-white' style='font-size:1.1rem'>${katAd}</div>
                    <div class='x-small text-muted mt-1'>${tam.length}/${odalar.length} oda</div>
                </div>
                <div class='fw-black' style='font-size:1.5rem; color:${renk}'>%${yuzde}</div>
            `;
            
            btn.onclick = () => MufettisFocus.baslat(katAd); 
            c.appendChild(btn);
        });
        
        if(typeof lucide !== "undefined") lucide.createIcons();
    },

    renderCharts: function() {
        const data = getData();
        const labels = [];
        const trendData = [];
        const floorLabels = Object.keys(katlar);
        const floorData = [];

        // Trend calculation (last 7 days)
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const iso = d.toISOString().split('T')[0];
            labels.push(iso.split('-').slice(1).reverse().join('/'));
            
            const dayData = data.filter(item => toShortDate(new Date(item.tarih).getTime()) === iso);
            const total = dayData.length;
            const approved = dayData.filter(item => item.durum === 'onaylandi').length;
            trendData.push(total > 0 ? Math.round((approved / total) * 100) : 0);
        }

        // Floor distribution calculation (today)
        const bugun = todayISO();
        floorLabels.forEach(kat => {
            const katData = data.filter(item => item.kat === kat && toShortDate(new Date(item.tarih).getTime()) === bugun);
            const approved = katData.filter(item => item.durum === 'onaylandi').length;
            floorData.push(approved);
        });

        // Destroy existing charts if any
        if (this.trendChart) this.trendChart.destroy();
        if (this.pieChart) this.pieChart.destroy();

        // Trend Chart
        const ctxTrend = document.getElementById('hygieneTrendChart')?.getContext('2d');
        if (ctxTrend) {
            this.trendChart = new Chart(ctxTrend, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Hijyen Skoru (%)',
                        data: trendData,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#10b981'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, max: 100, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                        x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                    }
                }
            });
        }

        // Pie Chart
        const ctxPie = document.getElementById('floorDistributionChart')?.getContext('2d');
        if (ctxPie) {
            this.pieChart = new Chart(ctxPie, {
                type: 'doughnut',
                data: {
                    labels: floorLabels,
                    datasets: [{
                        data: floorData,
                        backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 20, font: { size: 10 } } }
                    },
                    cutout: '70%'
                }
            });
        }
    },

    exportPDF: function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const data = getData();
        const bugun = todayISO();
        
        doc.setFontSize(22);
        doc.setTextColor(16, 185, 129); // Emerald
        doc.text("TopClean Denetim Raporu", 105, 20, { align: "center" });
        
        doc.setFontSize(12);
        doc.setTextColor(100);
        doc.text(`Tarih: ${new Date().toLocaleString('tr-TR')}`, 105, 30, { align: "center" });
        
        doc.setDrawColor(200);
        doc.line(20, 35, 190, 35);
        
        let y = 45;
        doc.setFontSize(14);
        doc.setTextColor(0);
        doc.text("Kat Bazli Ozet", 20, y);
        y += 10;
        
        Object.keys(katlar).forEach(kat => {
            const katData = data.filter(item => item.kat === kat && toShortDate(new Date(item.tarih).getTime()) === bugun);
            const total = Object.keys(katlar[kat]).length;
            const completed = katData.length;
            const approved = katData.filter(item => item.durum === 'onaylandi').length;
            const score = total > 0 ? Math.round((approved / total) * 100) : 0;
            
            doc.setFontSize(11);
            doc.text(`${kat}: %${score} Hijyen (${completed}/${total} Oda Tamam)`, 25, y);
            y += 7;
        });
        
        y += 10;
        doc.setFontSize(14);
        doc.text("Detayli Rapor", 20, y);
        y += 10;
        
        const head = [["Zaman", "Kat", "Bolum", "Personel", "Durum"]];
        const body = data.filter(item => toShortDate(new Date(item.tarih).getTime()) === bugun).map(d => [
            new Date(d.tarih).toLocaleTimeString('tr-TR'),
            d.kat,
            d.bolum,
            d.bildiren,
            d.durum.toUpperCase()
        ]);
        
        if (doc.autoTable) {
            doc.autoTable({
                head: head,
                body: body,
                startY: y,
                theme: 'grid',
                headStyles: { fillColor: [16, 185, 129] },
                styles: { fontSize: 9 }
            });
        }
        
        doc.save(`TopClean_Rapor_${bugun}.pdf`);
    },

    renderHeatmap: function() {
        const c = document.getElementById('binaHeatmap');
        if(!c) return;
        c.innerHTML = "";
        
        const data = getData();
        const bugun = todayISO();
        
        Object.keys(katlar).forEach(kat => {
            const odalar = Object.keys(katlar[kat]);
            const tamam = odalar.filter(b => data.find(d => d.kat === kat && d.bolum === b && toShortDate(new Date(d.tarih).getTime()) === bugun)).length;
            const yuzde = Math.round((tamam / odalar.length) * 100);
            
            const color = yuzde === 100 ? "#10b981" : yuzde > 50 ? "#f59e0b" : "#ef4444";
            
            const div = document.createElement('div');
            div.className = "d-flex align-items-center gap-3 p-2 rounded-3 bg-white bg-opacity-5";
            div.innerHTML = `
                <div class="x-small fw-bold text-white" style="width: 100px;">${kat}</div>
                <div class="flex-grow-1 progress" style="height: 8px; background: rgba(255,255,255,0.05);">
                    <div class="progress-bar" style="width: ${yuzde}%; background: ${color}; box-shadow: 0 0 10px ${color}44;"></div>
                </div>
                <div class="x-small fw-bold" style="color: ${color}; width: 40px;">%${yuzde}</div>
            `;
            c.appendChild(div);
        });
    },

    mufettisEkle: function() {
        const ad = document.getElementById("yeniMufettisAd")?.value;
        const sifre = document.getElementById("yeniMufettisSifre")?.value;
        if(!ad || !sifre) { alert("Lütfen tüm alanları doldurun."); return; }
        usersData.push({ name: ad, pass: sifre, rol: "mufettis", kat: "" });
        alert("Müfettiş eklendi!");
        document.getElementById("yeniMufettisAd").value = "";
        document.getElementById("yeniMufettisSifre").value = "";
    },

    personelEkle: function() {
        const ad = document.getElementById("yeniPersonelAd")?.value;
        const sifre = document.getElementById("yeniPersonelSifre")?.value;
        const kat = document.getElementById("yeniPersonelKat")?.value;
        if(!ad || !sifre || !kat) { alert("Lütfen tüm alanları doldurun."); return; }
        usersData.push({ name: ad, pass: sifre, rol: "gorevli", kat: kat });
        alert("Personel eklendi!");
        document.getElementById("yeniPersonelAd").value = "";
        document.getElementById("yeniPersonelSifre").value = "";
    }
};

// 4. LİSTE MANAGER
const ListeManager = {
    load: function() {
        const container = document.getElementById('listeIcerik');
        if (!container) return;
        container.innerHTML = `<div class="p-5 text-center"><h3 class="text-emerald">TopClean Günlük Liste</h3><p class="text-white-50">Liste verileri hazırlanıyor...</p></div>`;
    }
};

// 5. ENVANTER MANAGER
const InventoryManager = {
    load: function() { console.log("📦 Envanter yüklendi."); },
    ac: function() { showPanel("stokPanel"); },
    kapat: function() { showPanel("idarecPanel"); IdarecManager.load(); },
    showMovementForm: function() { Swal.fire({icon: "info", title: "Stok İşlemi", text: "Yakında eklenecek.", background: "var(--bg-main)", color: "#fff"}); },
    showAddProductForm: function() { Swal.fire({icon: "info", title: "Ürün Tanımla", text: "Yakında eklenecek.", background: "var(--bg-main)", color: "#fff"}); },
    showThresholdConfig: function() { Swal.fire({icon: "info", title: "Bildirim Ayarı", text: "Yakında eklenecek.", background: "var(--bg-main)", color: "#fff"}); },
    showAllLogs: function() { Swal.fire({icon: "info", title: "Geçmiş", text: "Yakında eklenecek.", background: "var(--bg-main)", color: "#fff"}); },
    render: function() {}
};

// 6. SOHBET (CHAT) MANAGER
const ChatManager = {
    isOpen: false,
    
    init: function() {
        if (!db) return;
        const chatRef = db.ref('chats').limitToLast(50);
        
        chatRef.on('child_added', snap => {
            const msg = snap.val();
            this.renderMessage(msg);
            if (!this.isOpen) {
                document.getElementById('chatFab')?.classList.add('has-new');
            }
        });
    },
    
    toggle: function() {
        this.isOpen = !this.isOpen;
        const overlay = document.getElementById('chatOverlay');
        if (overlay) {
            overlay.classList.toggle('active', this.isOpen);
            if (this.isOpen) {
                document.getElementById('chatFab')?.classList.remove('has-new');
                this.scrollToBottom();
            }
        }
    },
    
    send: function(e) {
        if (e) e.preventDefault();
        const input = document.getElementById('chatInput');
        const text = input?.value.trim();
        if (!text || !currentUser) return;
        
        const msg = {
            sender: currentUser.name,
            rol: currentUser.rol,
            text: text,
            timestamp: Date.now()
        };
        
        db.ref('chats').push(msg);
        input.value = "";
    },
    
    renderMessage: function(msg) {
        const body = document.getElementById('chatBody');
        if (!body) return;
        
        // İlk mesaj geldiğinde yükleniyor yazısını sil
        if (body.querySelector('.text-center')) body.innerHTML = "";
        
        const isMe = msg.sender === currentUser?.name;
        const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const div = document.createElement('div');
        div.className = `msg-bubble ${isMe ? 'msg-me' : 'msg-other'} animate-fade-in`;
        
        const rolClass = `role-${msg.rol}`;
        const rolText = msg.rol.charAt(0).toUpperCase() + msg.rol.slice(1);
        
        div.innerHTML = `
            <div class="msg-info">
                <span class="fw-bold">${isMe ? 'Siz' : msg.sender}</span>
                <span class="role-badge ${rolClass}">${rolText}</span>
                <span>${time}</span>
            </div>
            <div class="msg-text">${msg.text}</div>
        `;
        
        body.appendChild(div);
        if (this.isOpen) this.scrollToBottom();
    },
    
    scrollToBottom: function() {
        const body = document.getElementById('chatBody');
        if (body) body.scrollTop = body.scrollHeight;
    }
};

// 7. AKTİVİTE (LIVE FEED) MANAGER
const ActivityManager = {
    init: function() {
        if(!db) return;
        // Son 10 işlemi dinle
        db.ref('reports').limitToLast(10).on('child_added', snap => {
            this.render(snap.val(), "temizlik");
        });
        db.ref('arizalar').limitToLast(10).on('child_added', snap => {
            this.render(snap.val(), "ariza");
        });
    },
    
    render: function(data, tip) {
        const c = document.getElementById('liveActivityFeed');
        if(!c) return;
        if(c.querySelector('.text-muted')) c.innerHTML = "";
        
        const div = document.createElement('div');
        div.className = "flex-shrink-0 p-3 rounded-4 bg-white bg-opacity-5 border border-white border-opacity-10 stagger-item";
        div.style.minWidth = "220px";
        
        let icon = tip === "ariza" ? "wrench" : "check-circle";
        let color = tip === "ariza" ? "text-warning" : "text-emerald";
        let title = tip === "ariza" ? "Arıza Bildirildi" : "Temizlik Yapıldı";
        let desc = tip === "ariza" ? data.yer : `${data.kat} - ${data.bolum}`;
        
        div.innerHTML = `
            <div class="d-flex align-items-center gap-2 mb-2">
                <i data-lucide="${icon}" class="${color}" size="14"></i>
                <span class="x-small fw-bold text-white">${title}</span>
            </div>
            <div class="small text-white text-truncate mb-1">${desc}</div>
            <div class="x-small text-muted d-flex justify-content-between">
                <span>${data.bildiren}</span>
                <span>${new Date(data.tarih).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
            </div>
        `;
        
        c.prepend(div);
        if(typeof lucide !== "undefined") lucide.createIcons();
    }
};

// 8. QR MANAGER (VISIONARY)
const QRManager = {
    video: null,
    canvas: null,
    stream: null,
    scanning: false,
    start: async function() {
        try {
            const overlay = document.getElementById('qrScannerOverlay');
            overlay.classList.remove('hidden');
            this.video = document.getElementById('qrVideo');
            this.canvas = document.getElementById('qrCanvas');
            this.scanning = true;

            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
            this.stream = stream;
            this.video.srcObject = stream;
            this.video.setAttribute("playsinline", true);
            this.video.play();
            requestAnimationFrame(() => this.tick());
        } catch (err) {
            console.error("QR Kamera Hatası:", err);
            Swal.fire({ icon: 'error', title: 'Kamera Hatası', text: 'Kameraya erişilemedi.' });
            this.stop();
        }
    },
    
    stop: function() {
        this.scanning = false;
        if (this.stream) this.stream.getTracks().forEach(track => track.stop());
        document.getElementById('qrScannerOverlay').classList.add('hidden');
    },
    
    tick: function() {
        if (!this.scanning) return;
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            this.canvas.height = this.video.videoHeight;
            this.canvas.width = this.video.videoWidth;
            const ctx = this.canvas.getContext("2d");
            ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
            const imageData = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });
            
            if (code) {
                this.stop();
                this.handleResult(code.data);
                return;
            }
        }
        requestAnimationFrame(() => this.tick());
    },
    
    handleResult: function(data) {
        // Beklenen format: "Kat:Zemin Kat|Bolum:Lavabolar"
        try {
            const parts = data.split('|');
            const kat = parts[0].split(':')[1];
            const bolum = parts[1].split(':')[1];
            
            if(katlar[kat] && katlar[kat][bolum]) {
                Swal.fire({ icon: 'success', title: 'Konum Doğrulandı', text: `${kat} - ${bolum}`, timer: 1500 });
                setTimeout(() => openKriterPanel(kat, bolum), 1500);
            } else {
                alert("Geçersiz QR Kod!");
            }
        } catch(e) { alert("QR okuma hatası!"); }
    }
};

// 9. SESLİ KOMUT (VOICE) MANAGER
const VoiceManager = {
    recognition: null,
    active: false,
    
    init: function() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if(!SpeechRecognition) return;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'tr-TR';
        this.recognition.continuous = false;
        
        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            console.log("Sesli Komut:", transcript);
            this.handleCommand(transcript);
        };
        this.recognition.onend = () => { this.active = false; };
        this.recognition.onerror = (err) => { 
            console.error("Ses tanıma hatası:", err.error);
            this.active = false;
            if(err.error === 'not-allowed') alert("Mikrofon izni reddedildi.");
        };
    },
    
    start: function() {
        if(!this.recognition) { alert("Tarayıcı ses desteği yok."); return; }
        if(this.active) return;
        this.active = true;
        this.recognition.start();
        Swal.fire({ title: 'Dinleniyor...', text: '"Tamam" veya "Arıza" diyebilirsiniz.', showConfirmButton: false, timer: 2000 });
    },
    
    handleCommand: function(cmd) {
        if(cmd.includes("tamam") || cmd.includes("onay")) {
            const btn = document.querySelector(".btn-emerald-lg");
            if(btn) btn.click();
        } else if(cmd.includes("arıza") || cmd.includes("bozuk")) {
            showArizaForm();
        }
    }
};

// ---- EK FONKSİYONLAR ----

// GÖREVLİ PANELİ
function loadGorevliPanel(kat) {
    const el = document.getElementById("bolumListesi");
    const katAdEl = document.getElementById("gorevliKatAd");
    if (!el) return;
    
    if (katAdEl) katAdEl.innerText = kat || "";
    el.innerHTML = "";
    
    const bolumler = katlar[kat];
    if (!bolumler) { 
        el.innerHTML = "<div class='text-muted text-center p-4'>Bölüm bulunamadı.</div>"; 
        return; 
    }
    
    const data = getData(); 
    const bugun = todayISO();
    
    const reddedilen = data.filter(d => d.kat === kat && toShortDate(new Date(d.tarih).getTime()) === bugun && d.durum === "reddedildi");
    const reddUyariEl = document.getElementById("reddedilenUyari"); 
    const reddSayiEl = document.getElementById("reddedilenSayi");
    
    if (reddUyariEl) { 
        if (reddedilen.length > 0) { 
            reddUyariEl.classList.remove("d-none"); 
            if (reddSayiEl) reddSayiEl.innerText = reddedilen.length; 
        } else { 
            reddUyariEl.classList.add("d-none"); 
        } 
    }
    
    const btnEnv = document.getElementById("btnEnvanterErisim");
    if (btnEnv && currentUser && currentUser.depo) {
        btnEnv.classList.remove("d-none");
    }
    
    Object.entries(bolumler).forEach(([bolumAd, kriterler]) => {
        const rapor = data.find(d => d.kat === kat && d.bolum === bolumAd && toShortDate(new Date(d.tarih).getTime()) === bugun);
        let icon = "🔲", bdrClass = "border-secondary", bgColor = "rgba(255,255,255,0.02)", durumText = "Temizlenmedi";
        
        if (rapor) {
            if (rapor.durum === "onaylandi") { 
                icon = "✅"; bdrClass = "border-success"; bgColor = "rgba(16,185,129,0.08)"; durumText = "Onaylandı"; 
            } else if (rapor.durum === "reddedildi") { 
                icon = "❌"; bdrClass = "border-danger"; bgColor = "rgba(239,68,68,0.08)"; durumText = "Reddedildi"; 
            } else { 
                icon = "⏳"; bdrClass = "border-warning"; bgColor = "rgba(245,158,11,0.08)"; durumText = "Onay Bekleniyor"; 
            }
        }
        
        const card = document.createElement("div");
        card.className = `glass-card p-3 d-flex align-items-center justify-content-between border ${bdrClass} stagger-item`;
        card.style.cssText = `background: ${bgColor}; border-width: 1px !important; border-radius: 16px; cursor: pointer;`;
        
        let yorumMetni = (rapor && rapor.yorum) ? ` — ${rapor.yorum}` : "";
        card.innerHTML = `
            <div class='d-flex align-items-center gap-3'>
                <span style='font-size:1.5rem'>${icon}</span>
                <div>
                    <div class='fw-bold text-white'>${bolumAd}</div>
                    <div class='x-small text-muted'>${durumText}${yorumMetni}</div>
                </div>
            </div>
            <i data-lucide='chevron-right' size='18' class='text-muted'></i>
        `;
        
        card.onclick = () => KriterManager.ac(kat, bolumAd, kriterler);
        el.appendChild(card);
    });
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ARIZA FORMU
function showArizaForm() {
    arizaFotoURL = ""; // Reset
    Swal.fire({
        title: "Arıza Bildir",
        html: `
            <div class='text-start'>
                <label class='small text-muted mb-1 d-block'>Arıza Yeri</label>
                <input id='arizaYer' class='form-control mb-3' placeholder='Örn: 3. Kat WC'>
                <label class='small text-muted mb-1 d-block'>Açıklama</label>
                <textarea id='arizaAcik' class='form-control mb-3' rows='3' placeholder='Kısaca açıklayın...'></textarea>
                
                <label class='small text-muted mb-2 d-block'>Fotoğraf Ekle (Opsiyonel)</label>
                <div class="d-flex gap-2 align-items-center">
                    <button class="btn btn-outline-info rounded-pill px-4 py-2 flex-grow-1" onclick="document.getElementById('arizaFotoInput').click()">
                        <i data-lucide="camera" size="18" class="me-2"></i> Fotoğraf Çek/Yükle
                    </button>
                    <input type="file" id="arizaFotoInput" accept="image/*" capture="environment" class="d-none" onchange="handleArizaFoto(this)">
                </div>
                <div id="arizaFotoPreview" class="mt-3 d-none">
                    <img id="arizaPreviewImg" src="" class="img-fluid rounded-4 border border-white border-opacity-10">
                </div>
            </div>
        `,
        background: "var(--bg-main)", color: "#fff",
        showCancelButton: true, confirmButtonText: "Bildir", cancelButtonText: "İptal", confirmButtonColor: "#10b981",
        didOpen: () => { if(typeof lucide !== "undefined") lucide.createIcons(); },
        preConfirm: () => { 
            const yer = document.getElementById("arizaYer").value.trim(); 
            if (!yer) { Swal.showValidationMessage("Yer boş bırakılamaz"); return false; } 
            return { yer: yer, acik: document.getElementById("arizaAcik").value.trim() }; 
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const a = { 
                id: Date.now().toString(), 
                yer: result.value.yer, 
                aciklama: result.value.acik, 
                foto: arizaFotoURL,
                bildiren: currentUser ? currentUser.name : "Bilinmiyor", 
                tarih: new Date().toISOString(), 
                durum: "bekliyor" 
            };
            const arr = JSON.parse(localStorage.getItem("topclean_arizalar") || "[]"); 
            arr.push(a); 
            localStorage.setItem("topclean_arizalar", JSON.stringify(arr));
            if (db) db.ref("arizalar/" + a.id).set(a);
            Swal.fire({ icon: "success", title: "Arıza Bildirildi!", timer: 1500, showConfirmButton: false });
        }
    });
}

function handleArizaFoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            arizaFotoURL = e.target.result;
            const prev = document.getElementById('arizaFotoPreview');
            const img = document.getElementById('arizaPreviewImg');
            if(prev && img) {
                img.src = arizaFotoURL;
                prev.classList.remove('d-none');
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// MÜFETTİŞ FOCUS MODU
const MufettisFocus = {
    odalar: [], 
    index: 0, 
    kat: "",
    
    baslat: function(katAd) {
        this.kat = katAd; 
        this.odalar = Object.keys(katlar[katAd] || {}); 
        this.index = 0;
        document.getElementById("mufettisKatSecim").classList.add("d-none");
        
        const om = document.getElementById("mufettisOdakModu"); 
        om.classList.remove("d-none"); 
        om.classList.add("d-flex");
        
        document.getElementById("focusKatIsim").innerText = katAd;
        this.goster();
    },
    
    goster: function() {
        if (this.index >= this.odalar.length) { 
            Swal.fire({icon: "success", title: "Denetim Tamamlandı!", background: "var(--bg-main)", color: "#fff"}); 
            this.cikisYAP(); 
            return; 
        }
        
        const bolumAd = this.odalar[this.index];
        const data = getData(); 
        const bugun = todayISO();
        const rapor = data.find(d => d.kat === this.kat && d.bolum === bolumAd && toShortDate(new Date(d.tarih).getTime()) === bugun);
        
        document.getElementById("focusOdaAdi").innerText = bolumAd;
        const yuzde = Math.round((this.index / this.odalar.length) * 100);
        document.getElementById("focusYuzdeMetin").innerText = `%${yuzde} (${this.index}/${this.odalar.length})`;
        document.getElementById("focusIlerlemeBar").style.width = `${yuzde}%`;
        
        const ze = document.getElementById("focusGorevliZaman");
        if (rapor) { 
            const saat = new Date(rapor.tarih).toLocaleTimeString("tr-TR", {hour: "2-digit", minute: "2-digit"}); 
            ze.className = "badge-status badge-success px-3 py-1 mb-3"; 
            ze.innerText = `${saat} — Temizlendi`; 
        } else { 
            ze.className = "badge-status badge-idle px-3 py-1 mb-3"; 
            ze.innerText = "Henüz temizlenmedi"; 
        }
        if (typeof lucide !== "undefined") lucide.createIcons();
    },
    
    onBtnReddet: function() { 
        const p = document.getElementById("mufettisHizliRetPanel"); 
        if(p) { p.style.transform = "translateY(0)"; p.style.pointerEvents = "all"; } 
    },
    
    iptalRet: function() { 
        const p = document.getElementById("mufettisHizliRetPanel"); 
        if(p) { p.style.transform = "translateY(100%)"; p.style.pointerEvents = "none"; } 
    },
    
    hizliRet: function(sebep) { 
        this._kaydet("reddedildi", sebep); 
        this.iptalRet(); 
    },
    
    acKlavyeRet: function() { 
        Swal.fire({
            title: "Red Sebebi",
            input: "text",
            inputPlaceholder: "Neden kusurlu?",
            background: "var(--bg-main)",
            color: "#fff",
            confirmButtonColor: "#ef4444",
            confirmButtonText: "Reddet"
        }).then(r => { 
            if(r.isConfirmed && r.value) { 
                this._kaydet("reddedildi", r.value); 
                this.iptalRet(); 
            } 
        }); 
    },
    
    onayVer: function() { 
        this._kaydet("onaylandi", ""); 
    },
    
    _kaydet: function(durum, sebep) {
        const bolumAd = this.odalar[this.index]; 
        const data = getData(); 
        const bugun = todayISO();
        const mevcut = data.find(d => d.kat === this.kat && d.bolum === bolumAd && toShortDate(new Date(d.tarih).getTime()) === bugun);
        
        if (mevcut) { 
            mevcut.durum = durum; 
            mevcut.mufettisNot = sebep; 
            localStorage.setItem("topclean_reports", JSON.stringify(data)); 
            if(db) db.ref("reports/" + mevcut.id).update({ durum: durum, mufettisNot: sebep }); 
        } else { 
            const item = {
                id: Date.now().toString(),
                kat: this.kat,
                bolum: bolumAd,
                secilen: [],
                foto: "",
                tarih: new Date().toISOString(),
                durum: durum,
                mufettisNot: sebep
            }; 
            saveData(item); 
        }
        this.index++; 
        setTimeout(() => this.goster(), 300);
    },
    
    cikisYAP: function() { 
        document.getElementById("mufettisKatSecim").classList.remove("d-none"); 
        const om = document.getElementById("mufettisOdakModu"); 
        om.classList.add("d-none"); 
        om.classList.remove("d-flex"); 
    }
};

// YÖNLENDİRME (Header dahil)
function _routeUser() {
    const header = document.getElementById("app-header");
    if (!currentUser) { 
        if(header) header.classList.add("d-none");
        showPanel("loginPanel"); 
        return; 
    }
    
    if(header) header.classList.remove("d-none");
    
    const badge = document.getElementById("headerUserBadge"); 
    const nameEl = document.getElementById("headerName");
    
    if(badge) { badge.classList.remove("d-none"); badge.classList.add("d-flex"); } 
    if(nameEl) nameEl.innerText = currentUser.name;
    
    if (currentUser.rol === "idareci") { 
        showPanel("idarecPanel"); 
        IdarecManager.load(); 
        IdarecManager.loadArizalar(); 
    }
    else if (currentUser.rol === "mufettis") { 
        showPanel("adminPanel"); 
        IdarecManager.mufettisKatlariYukle(); 
        IdarecManager.loadArizalar(); 
        const ds = document.getElementById("adminDateSelector"); 
        if(ds && !ds.value) ds.value = todayISO(); 
    }
    else if (currentUser.rol === "gorevli") { 
        showPanel("gorevliPanel"); 
        loadGorevliPanel(currentUser.kat); 
    }
    else if (currentUser.rol === "liste") { 
        showPanel("listePanel"); 
    }
}

// TEMA TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("tc_theme") || "dark";
    document.documentElement.setAttribute("data-bs-theme", saved);
    
    function toggleTheme() { 
        const cur = document.documentElement.getAttribute("data-bs-theme"); 
        const nxt = cur === "light" ? "dark" : "light"; 
        document.documentElement.setAttribute("data-bs-theme", nxt); 
        localStorage.setItem("tc_theme", nxt); 
    }
    
    const t1 = document.getElementById("themeToggleBtn"); 
    if(t1) t1.addEventListener("click", toggleTheme);
    
    const t2 = document.getElementById("themeToggleBtnLogin"); 
    if(t2) t2.addEventListener("click", toggleTheme);
});
