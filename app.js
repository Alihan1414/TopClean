// ---------- SABİT VERİLER ----------
const katlar = {
    "-1. Kat": {
        "-1 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Etraf Düzenli"],
        "Mescit": ["Etraf Süpürülmüş", "Kürsü Düzenli", "Koku yok", "Halılar temizlenmiş", "Camlar temiz"],
        "Kütüphane": ["Zemin temiz", "Kitaplar düzenli", "Masalar temiz", "Çöp yok", "Rafların tozu alınmış"],
        "WC": ["Zemin temiz", "Lavabolar temiz", "Koku yok", "Kağıt var", "Sabun var"],
        "Hoca Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Eşyalar düzenlenmiş", "Çöp kutusu boş"],
        "Muhasebe": ["Zemin temiz", "Masa düzenli", "Kağıt atık yok", "Etraf Düzenli ", "Toz alınmış"],
        "Donanım Odası": ["Zemin temiz", "Cihazlar düzenli", "Kablo karmaşası yok", "Toz alınmış", "Çöp kutusu boş"]
    },
    "0. Kat": {
        "0 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Ayna Silinmiş"],
        "WC 1": ["Lavabolar temiz", "Zemin temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "WC 2": ["Lavabolar temiz", "Zemin temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "İdareci Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Koltuklar Temiz", "Çöp kutusu boş"],
        "Çayhane": ["Zemin temiz", "Masalar silinmiş", "Çöp yok", "Koku yok", "Çay Demlikleri Temiz"],
        "Hoca Odası": ["Masa düzenli", "Zemin temiz", "Koku yok", "Koltuklar Temiz", "Çöp kutusu boş"]
    },
    "1. Kat": {
        "1 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Wc": ["Zemin temiz", "Lavabolar temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "Talebe Çayhanesi": ["Zemin temiz", "Masalar silinmiş", "Çöp yok", "Koku yok", "Tezgah temiz"],
        "Etüt 1": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"],
        "Etüt 2": ["Masa temiz", "Zemin temiz", "Toz alınmış", "Çöp yok", "Koku yok"]
    },
    "2. Kat": {
        "2 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "WC": ["Zemin temiz", "Lavabolar temiz", "Sabun var", "Kağıt var", "Koku yok"],
        "Yatakhane 1": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"]
    },
    "3. Kat": {
        "3 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
        "Koridor": ["Zemin temiz", "Camlar silinmiş", "Çöp yok", "Koku yok", "Paspas atılmış"],
        "Yatakhane 1": ["Yatak düzenli", "Zemin temiz", "Çöp yok", "Koku yok", "Süpürülmüş ve paspas atılmış"],
        "WC": ["Zemin temiz", "Lavabolar temiz", "Sabun var", "Kağıt var", "Koku yok"]
    },
    "4. Kat": {
        "4 Merdiven": ["Zemin süpürülmüş ve temiz", "Korkuluklar silinmiş ve tozsuz", "Çöp kutuları boşaltılmış", "Etraf düzenli", "Lekeler silinmiş"],
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
let currentKriterler = [];

// Base64 fotoğraf encode
let fotoDataURL = "";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initTheme();
    initLoginSelect();

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('userSelect').addEventListener('change', checkLoginType);
    document.getElementById('fotoUpload').addEventListener('change', handleFotoUpload);
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
    usersData.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.name;
        opt.textContent = u.name;
        select.appendChild(opt);
    });
    // Liste Dağılımı seçeneği (Şifre istemeyen Demo amaçlı)
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

function handleLogin(e) {
    e.preventDefault();
    const uName = document.getElementById('userSelect').value;
    const uPass = document.getElementById('passInput').value;

    if (uName === "Liste Dağılımı") {
        // Direct admin view without pass
        currentUser = { name: "Liste Dağılımı", rol: "idareci", kat: "" };
        showPanel("adminPanel");
        updateHeader();
        return;
    }

    const un = usersData.find(x => x.name === uName);
    if (un && un.pass === uPass) {
        currentUser = un;
        document.getElementById('passInput').value = ""; // clear
        updateHeader();

        if (un.rol === "gorevli") {
            loadGorevliPanel(un.kat);
            showPanel("gorevliPanel");
        } else {
            loadAdminPanel();
            showPanel("adminPanel");
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'Bilgilerinizi hatalı girdiniz, lütfen tekrar deneyin.',
            confirmButtonText: 'Tamam'
        });
    }
}

function handleLogout() {
    currentUser = null;
    document.getElementById('userProfileControls').classList.add('d-none');
    showPanel("loginPanel");
}

function updateHeader() {
    if (currentUser) {
        document.getElementById('userProfileControls').classList.remove('d-none');
        document.getElementById('userProfileControls').classList.add('d-flex');
        document.getElementById('welcomeText').innerText = `Hoş geldin, ${currentUser.name} 👋`;
        document.getElementById('roleText').innerText = currentUser.rol === 'gorevli' ? currentUser.kat : currentUser.rol;
    }
}

function showPanel(id) {
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ---------- VERİ (LocalStorage) ----------
function getData() {
    return JSON.parse(localStorage.getItem('topclean_data') || '[]');
}
function saveData(item) {
    let data = getData();
    // Item format: { id, kat, bolum, secilen:[], foto, tarih, durum, yorum }
    item.id = new Date().getTime().toString();
    data.push(item);
    localStorage.setItem('topclean_data', JSON.stringify(data));
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
        // Kontrol - Bugün veri var mı?
        // SQLite'daki gibi tarih[:10] mantıgı
        const gecmis = data.filter(d => d.kat === katAd && d.bolum === bolumAd && new Date(parseInt(d.id)).toLocaleDateString() === bugunStr);
        let badgeYazi = "Bekliyor";
        let badgeClass = "badge-idle";

        if (gecmis.length > 0) {
            const son = gecmis[gecmis.length - 1];
            if(son.durum === "reddedildi")reddredileneCount++;
            
            const isaretli = son.secilen.length;
            const toplam = kriterler.length;
            const oran = Math.floor((isaretli / toplam) * 100);

            if (oran === 100) {
                badgeClass = "badge-success"; badgeYazi = `%${oran} ✔`;
            } else if (oran === 0) {
                badgeClass = "badge-danger"; badgeYazi = `Kaydedildi`;
            } else {
                badgeClass = "badge-warning"; badgeYazi = `%${oran}`;
            }
        }

        const div = document.createElement('div');
        div.className = "action-card p-3 p-md-4 d-flex flex-column gap-3";
        div.onclick = () => KriterManager.ac(katAd, bolumAd, kriterler);
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold" style="font-size: 1.2rem; color: var(--text-main);">📍 ${bolumAd}</div>
                <button class="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 flex-shrink-0" style="width: 35px; height: 35px; border-color: var(--border-color);" onclick="event.stopPropagation(); KriterManager.rehberBilgi('${bolumAd}')">
                    <i data-lucide="info" size="16"></i>
                </button>
            </div>
            <div class="badge-status ${badgeClass} text-center shadow-sm w-100 py-2 fs-6">
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
            div.style.borderColor = "var(--border-color) !important";
            div.innerHTML = `
                <input type="checkbox" class="custom-control-input chk-kriter" value="${k}" onchange="KriterManager.guncelleBar()">
                <span class="fs-6 d-block mt-1">${k}</span>
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
            bar.style.backgroundColor = "var(--success-color)";
            lbl.style.color = "var(--success-color)";
            lbl.innerText = `%${yuzde} Temiz ✔`;
        } else if (yuzde === 0) {
            bar.style.backgroundColor = "var(--accent-primary)";
            lbl.style.color = "var(--text-muted)";
            lbl.innerText = `%0 Temiz`;
        } else {
            bar.style.backgroundColor = "var(--warning-color)";
            lbl.style.color = "var(--warning-color)";
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

// Image Upload Handler to convert file to Base64
function handleFotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            fotoDataURL = evt.target.result;
            document.getElementById('fotoDurum').innerText = `✔ ${file.name}`;
            document.getElementById('fotoDurum').style.color = "var(--success-color)";
            
            document.getElementById('fotoOnizleme').src = fotoDataURL;
            document.getElementById('fotoOnizlemeContainer').classList.remove('d-none');
        };
        reader.readAsDataURL(file);
    }
}

// ---------- İDARECİ / MÜFETTİŞ PANEL ----------
function loadAdminPanel() {
    const list = document.getElementById('raporListesi');
    list.innerHTML = "";
    
    // Sort descending by ID (which is timestamp)
    let data = getData().sort((a,b) => parseInt(b.id) - parseInt(a.id)).slice(0, 10);
    
    if(data.length === 0) {
        list.innerHTML = '<div class="text-muted fst-italic">Henüz hiç kayıt bulunmuyor.</div>';
        return;
    }

    data.forEach(d => {
        let isaretli = d.secilen.length;
        let dDate = new Date(d.tarih).toLocaleString('tr-TR');
        
        let imgHtml = d.foto ? `<img src="${d.foto}" class="rounded mt-2 border" style="max-height: 80px; width: auto; border-color: var(--border-color)!important">` : '<div class="text-muted small mt-2"><i data-lucide="image-off" size="14"></i> Görsel yok</div>';

        let badge = d.durum === "bekliyor" ? `<span class="badge bg-warning text-dark">Bekliyor</span>` : 
                    d.durum === "reddedildi" ? `<span class="badge bg-danger">Reddedildi</span>` : 
                    `<span class="badge bg-success">Onaylandı</span>`;

        let card = document.createElement('div');
        card.className = "glass-card p-3 d-flex flex-column gap-2";
        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <h5 class="fw-bold mb-1" style="color: var(--text-main);">${d.kat} - ${d.bolum}</h5>
                    <div class="small text-muted">${dDate}</div>
                </div>
                ${badge}
            </div>
            <div class="text-muted small mt-1">İşaretlenen Kriter: <b>${isaretli}</b> madde</div>
            ${d.yorum ? `<div class="p-2 rounded-2 mt-1 small" style="background-color: var(--bg-color);"><b>Not:</b> ${d.yorum}</div>` : ''}
            <div>${imgHtml}</div>
        `;
        list.appendChild(card);
    });
    lucide.createIcons();
}
