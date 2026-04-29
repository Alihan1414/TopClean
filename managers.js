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
        const yorum = document.getElementById('gorevliNot').value.trim();
        
        const item = {
            kat: currentKat,
            bolum: currentBolum,
            secilen: secilenler,
            foto: fotoDataURL,
            tarih: new Date().toISOString(),
            durum: "bekliyor",
            yorum: yorum
        };
        saveData(item);
        Swal.fire({ icon: 'success', title: 'Kaydedildi', timer: 1500, showConfirmButton: false });
        showPanel('gorevliPanel');
        if (typeof loadGorevliPanel === 'function') loadGorevliPanel(currentKat);
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
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="glass-card p-3 d-flex align-items-center justify-content-between h-100 cursor-pointer admin-card-hover border ${statusClass}" style="border-width: 1px !important;" onclick="IdarecManager.showDetail('${katAd}', '${bolumAd}')">
                            <span class="small fw-bold text-truncate text-white" style="max-width: 80%;">${bolumAd}</span>
                            <i data-lucide="${statusIcon}" size="18" class="${textColor}"></i>
                        </div>
                    </div>
                `;
            }
            katHTML += `</div>`;
            katDiv.innerHTML = katHTML;
            container.appendChild(katDiv);
        }
    },

    showDetail: function(kat, bolum) {
        const data = getData();
        const bugun = todayISO();
        const r = data.find(d => d.kat === kat && d.bolum === bolum && toShortDate(new Date(d.tarih).getTime()) === bugun);
        
        if (!r) {
            Swal.fire({ icon: 'info', title: 'Kayıt Yok', text: 'Bu oda henüz temizlenmemiş.', background: 'var(--bg-main)', color: '#fff' });
            return;
        }

        const body = document.getElementById('reportDetailBody');
        if (body) {
            body.innerHTML = `
                <div class="text-center">
                    <h5 class="text-white">${bolum}</h5>
                    ${r.foto ? `<img src="${r.foto}" class="img-fluid rounded mb-3" style="max-height:250px;">` : '<p class="text-muted">Fotoğraf yok</p>'}
                    <div class="p-2 bg-glass-dark rounded text-start small mb-3">
                        <strong>Kriterler:</strong> ${r.secilen.join(', ')}
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-danger flex-fill" onclick="IdarecManager.setDurum('${r.id}', 'reddedildi')">REDDET</button>
                        <button class="btn btn-success flex-fill" onclick="IdarecManager.setDurum('${r.id}', 'onaylandi')">ONAYLA</button>
                    </div>
                </div>
            `;
            new bootstrap.Modal(document.getElementById('reportDetailModal')).show();
        }
    },

    setDurum: function(id, durum) {
        if (db) {
            db.ref('reports').orderByChild('id').equalTo(id).once('value', snap => {
                const key = Object.keys(snap.val())[0];
                db.ref('reports/' + key).update({ durum: durum }).then(() => {
                    Swal.fire({ icon: 'success', title: 'Güncellendi', timer: 1000, showConfirmButton: false });
                    this.load();
                    bootstrap.Modal.getInstance(document.getElementById('reportDetailModal')).hide();
                });
            });
        }
    },

    loadBasari: function(donem, btn) {
        // UI Update
        document.querySelectorAll('.basari-filter').forEach(b => {
            b.classList.remove('active', 'text-white');
            b.classList.add('text-muted');
            b.style.background = 'transparent';
        });
        if(btn) {
            btn.classList.add('active', 'text-white');
            btn.classList.remove('text-muted');
            btn.style.background = 'rgba(255,255,255,0.1)';
        }

        const gururContainer = document.getElementById('gururTablosu');
        const gorevliEl = document.getElementById('basariGorevli');
        const baskanEl = document.getElementById('basariBaskan');
        
        if (!gururContainer) return;

        // Dummy/Placeholder data calculation since we don't have historical aggregation set up here yet
        let gorevli = "Ahmet Yılmaz";
        let baskan = "Mehmet Demir";
        let puan = 95;

        if (donem === 'aylik') { gorevli = "Ayşe Kaya"; baskan = "Ali Veli"; puan = 92; }
        else if (donem === 'donemlik') { gorevli = "Fatma Şahin"; baskan = "Mustafa Kemal"; puan = 98; }

        gururContainer.innerHTML = `
            <div class="d-flex align-items-center justify-content-between p-2">
                <span class="text-white-50 small fw-bold">1. Kat Performansı</span>
                <span class="badge bg-emerald text-white rounded-pill">%${puan}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between p-2">
                <span class="text-white-50 small fw-bold">2. Kat Performansı</span>
                <span class="badge bg-emerald text-white rounded-pill">%${puan - 4}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between p-2">
                <span class="text-white-50 small fw-bold">3. Kat Performansı</span>
                <span class="badge bg-warning text-dark rounded-pill">%${puan - 12}</span>
            </div>
        `;

        if(gorevliEl) gorevliEl.innerText = gorevli;
        if(baskanEl) baskanEl.innerText = baskan;
    },

    renderArizaListesi: function() {
        const container = document.getElementById('idarec-tab-ari');
        if (container) container.innerHTML = '<div class="p-4 text-center text-muted">Arıza listesi yükleniyor...</div>';
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
    load: function() { console.log("📦 Envanter yüklendi."); }
};
