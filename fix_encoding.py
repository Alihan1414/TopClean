
import os

file_path = r'c:\Users\ACER\PycharmProjects\PythonProject\topclean_web\index.html'

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Fix 1: reddedilenUyari message
old_text1 = 'ÄŸÅ¸Å¡Â¨ Ã„Â°ÃƒÂ§in reddedilen <span id="reddedilenSayi"></span> bÃƒÂ¶lÃƒÂ¼m var Ã¢â‚¬â€  mÃƒÂ¼fettiÃ…Å¸ notlarÃ„Â±nÃ„Â± inceleyin!'
new_text1 = 'Bugün için reddedilen <span id="reddedilenSayi"></span> bölüm var — müfettiş notlarını inceleyin!'
content = content.replace(old_text1, new_text1)

# Fix 2: mufettisHizliRetPanel buttons
# Note: I'll use a more generic replace if the specific one fails, or just replace the whole block.
old_block2 = """                            <div class="col-6"><button class="btn btn-outline-danger w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.hizliRet('Zemin Kirli')">ÄŸÅ¸Â§Â¹ Zemin Kirli</button></div>
                            <div class="col-6"><button class="btn btn-outline-danger w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.hizliRet('EÃ…Å¸yalar DaÃ„Å¸Ã„Â±nÃ„Â±k')">ÄŸÅ¸â€œÂ¦ DaÃ„Å¸Ã„Â±nÃ„Â±k</button></div>
                            <div class="col-6"><button class="btn btn-outline-danger w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.hizliRet('Lavabo Pis')">ÄŸÅ¸Å¡Â° Lavabo Pis</button></div>
                            <div class="col-12"><button class="btn btn-outline-light w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.acKlavyeRet()">Ã¢Å“Â Ã¯Â¸Â  DiÃ„Å¸er Neden (Yaz)</button></div>"""

new_block2 = """                            <div class="col-6"><button class="btn btn-outline-danger w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.hizliRet('Zemin Kirli')">🧹 Zemin Kirli</button></div>
                            <div class="col-6"><button class="btn btn-outline-danger w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.hizliRet('Eşyalar Dağınık')">📦 Dağınık</button></div>
                            <div class="col-6"><button class="btn btn-outline-danger w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.hizliRet('Lavabo Pis')">🚻 Lavabo Pis</button></div>
                            <div class="col-12"><button class="btn btn-outline-light w-100 rounded-3 py-3 fw-bold small" onclick="MufettisFocus.acKlavyeRet()">📝 Diğer Neden (Yaz)</button></div>"""

content = content.replace(old_block2, new_block2)

# Fix 3: Remaining fragments if any
content = content.replace('Ã„Â°ÃƒÂ§ Mesul (MÃƒÂ¼fettiÃ…Å¸) Yönetimi', 'İç Mesul (Müfettiş) Yönetimi')
content = content.replace('ARIZA BÃ„Â°LDÃ„Â°R', 'ARIZA BİLDİR')
content = content.replace('HAFTANIN BAÃ…ÂžKANI', 'HAFTANIN BAŞKANI')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Encoding fixes applied successfully.")
