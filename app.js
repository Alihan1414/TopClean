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
// Let's add a global reference for the modal
let bootstrapModal = null;
let currentActiveReport = null;

// Base64 fotoğraf encode
let fotoDataURL = "";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    initTheme();
    initLoginSelect();
    checkSession(); // Restore session if exists

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('userSelect').addEventListener('change', checkLoginType);
    document.getElementById('fotoUpload').addEventListener('change', handleFotoUpload);

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
    const extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
    const allUsers = [...usersData, ...extraUsers];
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
            } else {
                loadAdminPanel();
                showPanel("adminPanel");
            }
        } catch(e) {
            localStorage.removeItem('topclean_session');
        }
    }
}

function handleLogin(e) {
    e.preventDefault();
    const uName = document.getElementById('userSelect').value;
    const uPass = document.getElementById('passInput').value;

    if (uName === "Liste Dağılımı") {
        currentUser = { name: "Liste Dağılımı", rol: "idareci", kat: "" };
        IdarecManager.load();
        showPanel("idarecPanel");
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
        document.getElementById('passInput').value = "";
        updateHeader();

        if (un.rol === "gorevli") {
            loadGorevliPanel(un.kat);
            showPanel("gorevliPanel");
        } else if (un.rol === "idareci") {
            IdarecManager.load();
            showPanel("idarecPanel");
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
    localStorage.removeItem('topclean_session');
    document.getElementById('userProfileControls').classList.add('d-none');
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
        div.className = "action-card stagger-item p-3 p-md-4 d-flex flex-column gap-3 shadow-hover";
        div.style.animationDelay = `${(Object.keys(bolumler).indexOf(bolumAd)) * 0.1}s`;
        div.onclick = () => KriterManager.ac(katAd, bolumAd, kriterler);
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold" style="font-size: 1.1rem; color: var(--text-main); letter-spacing: 0.5px;">📍 ${bolumAd}</div>
                <button class="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0 flex-shrink-0" style="width: 32px; height: 32px; border-color: var(--border-color); opacity: 0.6;" onclick="event.stopPropagation(); KriterManager.rehberBilgi('${bolumAd}')">
                    <i data-lucide="info" size="14"></i>
                </button>
            </div>
            <div class="badge-status ${badgeClass} text-center shadow-sm w-100 py-2 fs-6" style="border-radius: 12px; font-weight: 700;">
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
            localStorage.setItem('topclean_data', JSON.stringify(data));
            
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
                col.innerHTML = '<div class="glass-card p-2 d-flex align-items-center justify-content-between"><div><div class="fw-bold text-white" style="font-size:0.8rem;">' + bolumAd + '</div><div class="x-small text-muted">' + timeStr + '</div></div><span class="badge-status ' + sc + '" style="font-size:0.6rem;padding:3px 8px;">' + sy + '</span></div>';
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
        var sabitGorevliler = usersData.filter(function(u){return u.rol==='gorevli';});
        var extraUsers = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        var all = sabitGorevliler.concat(extraUsers);
        all.forEach(function(u, idx) {
            var isExtra = idx >= sabitGorevliler.length;
            var extraIdx = idx - sabitGorevliler.length;
            var c = document.createElement('div');
            c.className = 'glass-card p-3 d-flex align-items-center justify-content-between';
            var deleteBtn = isExtra ? '<button class="btn btn-sm btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" style="width:28px;height:28px;" onclick="IdarecManager.personelSil(' + extraIdx + ')"><i data-lucide="trash-2" size="13"></i></button>' : '';
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
        extras.push({name:ad, pass:sifre, kat:kat, rol:'gorevli'});
        localStorage.setItem('topclean_users', JSON.stringify(extras));
        document.getElementById('yeniPersonelAd').value = '';
        document.getElementById('yeniPersonelSifre').value = '';
        document.getElementById('yeniPersonelKat').value = '';
        Swal.fire({icon:'success',title:'Kaydedildi!',text:ad+' sisteme eklendi.',timer:1800,showConfirmButton:false});
        IdarecManager.loadPersonel();
    },
    personelSil: function(extraIdx) {
        var extras = JSON.parse(localStorage.getItem('topclean_users') || '[]');
        var name = extras[extraIdx] ? extras[extraIdx].name : '';
        extras.splice(extraIdx, 1);
        localStorage.setItem('topclean_users', JSON.stringify(extras));
        Swal.fire({icon:'info',title:'Silindi',text:name+' sistemden kaldırıldı.',timer:1800,showConfirmButton:false});
        IdarecManager.loadPersonel();
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
