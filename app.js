Uygulamada “liste paneli” açılıyor ancak içerik görünmüyor. Ekranda sadece arka plan kalıyor.

Bu problem CSS değil, JavaScript render ve veri yükleme (async) problemidir. Aşağıdaki şekilde düzelt:

---

## 🔴 ANA PROBLEM

* Liste paneli açılıyor ama içine veri basılmıyor
* Firebase verisi gelmeden render çalışıyor
* veya render fonksiyonu hiç tetiklenmiyor

---

## 🔥 1. PANEL AÇILINCA RENDER ZORLA

`showPanel` fonksiyonuna aşağıdaki kontrolü ekle:

```js id="fix_showPanel_liste"
if (panelId === "listePanel") {
    loadListePanel();
}
```

---

## 🔥 2. LİSTE PANEL LOAD FONKSİYONU

Aşağıdaki gibi düzenle:

```js id="fix_loadListe"
function loadListePanel() {
    const panel = document.getElementById("listePanel");
    if (!panel) return;

    // 🔥 LOADING GÖSTER
    panel.innerHTML = "<h2>Liste yükleniyor...</h2>";

    // veri kontrolü
    if (!window.reportsData || Object.keys(window.reportsData).length === 0) {
        panel.innerHTML += "<p>Liste verisi bulunamadı</p>";
        return;
    }

    let html = "";

    Object.values(window.reportsData).forEach(item => {
        html += `
            <div class="list-item">
                <p>${item.title || "Veri yok"}</p>
            </div>
        `;
    });

    panel.innerHTML = html;
}
```

---

## 🔥 3. FIREBASE VERİ GELİNCE PANELİ YENİLE

```js id="fix_firebase_liste"
let reportsData = {};

db.ref('reports').on('value', snapshot => {
    reportsData = snapshot.val() || {};
    window.reportsData = reportsData;

    console.log("Liste verisi geldi:", reportsData);

    const active = document.querySelector('.view-panel.active');

    if (active && active.id === "listePanel") {
        loadListePanel();
    }
});
```

---

## 🔥 4. DEBUG TEST

```js id="debug_liste"
document.getElementById("listePanel").innerHTML = "<h1>LİSTE TEST</h1>";
```

Eğer bu görünüyorsa:
→ problem kesinlikle veri/render tarafında

---

## 🎯 HEDEF

* Liste paneli açıldığında boş kalmamalı
* Veri gelmeden loading gösterilmeli
* Veri geldiğinde otomatik render edilmeli
* Kullanıcı hiçbir zaman boş ekran görmemeli

Bu düzenlemelerle liste panelinin boş görünme problemi tamamen çözülmeli.
