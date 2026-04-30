
const fs = require('fs');
const path = require('path');

const filePath = path.join('topclean_web', 'index.html');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix 1: reddedilenUyari message
    // We use a more flexible regex to catch the corrupted characters
    content = content.replace(/ÄŸÅ¸Å¡Â¨ Ã„Â°ÃƒÂ§in reddedilen <span id="reddedilenSayi"><\/span> bÃƒÂ¶lÃƒÂ¼m var Ã¢â‚¬â€  mÃƒÂ¼fettiÃ…Å¸ notlarÃ„Â±nÃ„Â± inceleyin!/g, 
        'Bugün için reddedilen <span id="reddedilenSayi"></span> bölüm var — müfettiş notlarını inceleyin!');

    // Fix 2: mufettisHizliRetPanel buttons
    content = content.replace(/ÄŸÅ¸Â§Â¹ Zemin Kirli/g, '🧹 Zemin Kirli');
    content = content.replace(/EÃ…Å¸yalar DaÃ„Å¸Ã„Â±nÃ„Â±k/g, 'Eşyalar Dağınık');
    content = content.replace(/ÄŸÅ¸â€œÂ¦ DaÃ„Å¸Ã„Â±nÃ„Â±k/g, '📦 Dağınık');
    content = content.replace(/ÄŸÅ¸Å¡Â° Lavabo Pis/g, '🚻 Lavabo Pis');
    content = content.replace(/Ã¢Å“Â Ã¯Â¸Â  DiÃ„Å¸er Neden \(Yaz\)/g, '📝 Diğer Neden (Yaz)');

    // Fix 3: Remaining fragments
    content = content.replace(/Ã„Â°ÃƒÂ§ Mesul \(MÃƒÂ¼fettiÃ…Å¸\) Yönetimi/g, 'İç Mesul (Müfettiş) Yönetimi');
    content = content.replace(/ARIZA BÃ„Â°LDÃ„Â°R/g, 'ARIZA BİLDİR');
    content = content.replace(/HAFTANIN BAÃ…ÂžKANI/g, 'HAFTANIN BAŞKANI');
    content = content.replace(/BÃƒÂ¶lÃƒÂ¼m kartlarÃ„Â±/g, 'Bölüm kartları');
    content = content.replace(/KAT SEÃƒâ€¡Ã„Â°M EKRANI/g, 'KAT SEÇİM EKRANI');
    content = content.replace(/DENETÃ„Â°M MERKEZÃ„Â°/g, 'DENETİM MERKEZİ');
    content = content.replace(/denetlemek istediÃ„Å¸iniz katÃ„Â± seÃƒÂ§in/g, 'denetlemek istediğiniz katı seçin');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Encoding fixes applied successfully via Node.js.");
} catch (err) {
    console.error("Error fixing encoding:", err);
    process.exit(1);
}
