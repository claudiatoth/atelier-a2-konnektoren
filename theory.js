// ============================================
// TEORIE - Atelier A2: Konnektoren
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// weil/denn (cauză) · deshalb/deswegen/darum (consecință) · obwohl/trotzdem (concesie) — poziția verbului
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🔗 1. Conectorii și poziția verbului</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-konnektoren-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Își explică alegerile</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Cum legi două propoziții</h4>
                <p>Conectorii (Konnektoren) leagă idei: <strong>cauză</strong> (de ce?), <strong>consecință</strong> (deci ce?) și <strong>contrast</strong> (deși…). Secretul în germană e <strong>poziția verbului</strong> — și depinde de tipul conectorului.</p>
            </div>

            <div class="theory-box info-box">
                <h4>🗝️ Cele 3 tipuri (după ce fac cu verbul)</h4>
                <ul>
                    <li><strong>1. Subjunktionen</strong> (introduc o secundară) → verbul conjugat fuge la <strong>FINAL</strong>: <strong>weil</strong>, <strong>obwohl</strong>, dass, wenn.</li>
                    <li><strong>2. Conjuncții poziția 0</strong> (nu schimbă nimic) → verbul rămâne pe <strong>locul 2</strong>: und, aber, oder, <strong>denn</strong>, sondern.</li>
                    <li><strong>3. Konjunktionaladverbien</strong> (stau pe locul 1) → <strong>inversiune</strong>, verbul pe locul 2: <strong>deshalb</strong>, deswegen, darum, <strong>trotzdem</strong>.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Nu memora pe de rost — gândește-te „ce tip e conectorul?". <strong>weil/obwohl</strong> → verbul la FINAL. <strong>denn</strong> → nimic se schimbă. <strong>deshalb/trotzdem</strong> → verbul vine imediat după ele (inversiune). Hai pe rând! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Povestește o decizie din viața ta (de ce ai ales ceva, ce a urmat, ce ai făcut deși era greu), folosind cel puțin câte un exemplu cu <strong>weil, denn, deshalb, obwohl și trotzdem</strong>. <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/4ZH7n14PtCSk96pB6" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: weil & denn -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎯 2. weil & denn (cauza — „pentru că")</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-weil-denn.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <p>Amândouă înseamnă <strong>„pentru că / căci"</strong> și dau <strong>cauza</strong>. Diferența e DOAR poziția verbului:</p>

            <table class="grammar-table">
                <thead>
                    <tr><th>Conector</th><th>Poziția verbului</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>weil</strong></td><td>verbul la <strong>FINAL</strong> (secundară)</td><td>Ich bleibe zu Hause, <strong>weil</strong> ich krank <strong>bin</strong>.</td></tr>
                    <tr><td><strong>denn</strong></td><td>verbul pe <strong>locul 2</strong> (ordine normală)</td><td>Ich bleibe zu Hause, <strong>denn</strong> ich <strong>bin</strong> krank.</td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>🔑 De reținut</h4>
                <ul>
                    <li><strong>weil</strong> + … + <strong>verbul la sfârșit</strong>: …, weil ich müde <strong>bin</strong>.</li>
                    <li><strong>denn</strong> + propoziție normală (subiect + verb pe locul 2): …, denn ich <strong>bin</strong> müde.</li>
                    <li>La întrebarea <strong>Warum?</strong> (de ce?) răspunzi cel mai des cu <strong>weil</strong>.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Cea mai frecventă greșeală: „weil ich bin krank". GREȘIT! Cu <strong>weil</strong>, verbul fuge la sfârșit: „weil ich krank <strong>bin</strong>". Cu <strong>denn</strong>, în schimb, totul rămâne normal. 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: deshalb -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>➡️ 3. deshalb / deswegen / darum (consecința — „de aceea")</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-deshalb.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <p><strong>deshalb, deswegen, darum, daher</strong> = „de aceea / din acest motiv". Arată <strong>consecința</strong>. Sunt adverbe: stau pe <strong>locul 1</strong>, deci urmează <strong>inversiunea</strong> (verbul pe locul 2, apoi subiectul):</p>

            <div class="theory-box" style="background:#fef3c7; border-left-color:#f59e0b;">
                <h4>⚡ deshalb + VERB + subiect</h4>
                <p style="margin:0;">Ich bin krank, <strong>deshalb</strong> <strong>bleibe</strong> ich zu Hause.<br>
                <em>(deshalb pe locul 1 → verbul „bleibe" pe locul 2 → subiectul „ich" abia apoi)</em></p>
            </div>

            <div class="theory-box info-box">
                <h4>🔁 weil ↔ deshalb — aceeași logică, două perspective</h4>
                <ul>
                    <li><strong>Cauză cu weil:</strong> <strong>Weil</strong> ich krank bin, bleibe ich zu Hause.</li>
                    <li><strong>Consecință cu deshalb:</strong> Ich bin krank, <strong>deshalb</strong> bleibe ich zu Hause.</li>
                    <li>weil arată <em>motivul</em>; deshalb arată <em>rezultatul</em>. Aceeași idee, întoarsă invers.</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de">Es regnet, <strong>deswegen</strong> <strong>nehme</strong> ich den Schirm.</p>
                <p class="ro">Plouă, de aceea iau umbrela.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em><strong>deshalb = deswegen = darum = daher</strong> — toate „de aceea", alege pe care vrei. Important: după ele vine <strong>imediat verbul</strong>, nu subiectul. „…, deshalb <strong>gehe</strong> ich…". 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: obwohl & trotzdem -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔄 4. obwohl & trotzdem (contrastul — „deși / totuși")</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-obwohl-trotzdem.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Conector</th><th>Sens + poziția verbului</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>obwohl</strong></td><td>deși — verbul la <strong>FINAL</strong> (ca weil)</td><td>Ich gehe arbeiten, <strong>obwohl</strong> ich krank <strong>bin</strong>.</td></tr>
                    <tr><td><strong>trotzdem</strong></td><td>totuși — <strong>inversiune</strong> (ca deshalb)</td><td>Ich bin krank, <strong>trotzdem</strong> <strong>gehe</strong> ich arbeiten.</td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>🔑 Perechea contrastului</h4>
                <ul>
                    <li><strong>obwohl</strong> = Subjunktion (ca weil) → verbul la <strong>sfârșit</strong>: …, obwohl es teuer <strong>ist</strong>.</li>
                    <li><strong>trotzdem</strong> = adverb (ca deshalb) → <strong>inversiune</strong>: …, trotzdem <strong>kaufe</strong> ich es.</li>
                    <li>obwohl introduce „obstacolul"; trotzdem spune „și totuși am făcut-o".</li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de"><strong>Obwohl</strong> es teuer <strong>ist</strong>, kaufe ich das Auto. = Es ist teuer, <strong>trotzdem</strong> <strong>kaufe</strong> ich das Auto.</p>
                <p class="ro">Deși e scump, cumpăr mașina. = E scump, totuși cumpăr mașina.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Ține minte perechile: <strong>weil/obwohl</strong> trimit verbul la FINAL; <strong>deshalb/trotzdem</strong> cer INVERSIUNEA (verbul imediat după ele). Așa nu le mai încurci! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Tabel recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📊 5. Tabel recapitulativ + dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Tip</th><th>Conectori</th><th>Verbul</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Subjunktion</strong> (secundară)</td><td>weil, obwohl, dass, wenn</td><td>la <strong>FINAL</strong></td></tr>
                    <tr><td><strong>Poziția 0</strong></td><td>und, aber, oder, denn, sondern</td><td>pe <strong>locul 2</strong> (normal)</td></tr>
                    <tr><td><strong>Konjunktionaladverb</strong> (locul 1)</td><td>deshalb, deswegen, darum, trotzdem</td><td><strong>inversiune</strong> (verb pe locul 2)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Cuvinte utile</h4>
                <ul>
                    <li><strong>der Grund</strong> — motivul · <strong>die Folge</strong> — consecința · <strong>der Gegensatz</strong> — contrastul</li>
                    <li>Întrebare-cauză: <strong>Warum?</strong> (de ce?) → răspuns cu <strong>weil</strong> / <strong>denn</strong>.</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Andreea își explică ziua lui Annette</h4>
                <p><strong style="color:#065f46;">Annette:</strong> Du siehst müde aus. Warum?<br><span class="ro-translation">Arăți obosită. De ce?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Ich bin müde, <strong>weil</strong> ich gestern lange <strong>gearbeitet habe</strong>.<br><span class="ro-translation">Sunt obosită pentru că am lucrat mult ieri.</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Dann bleib heute zu Hause!<br><span class="ro-translation">Atunci rămâi azi acasă!</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Ich habe einen Deutschkurs, <strong>deshalb</strong> <strong>gehe</strong> ich trotzdem raus. Und <strong>obwohl</strong> ich müde <strong>bin</strong>, freue ich mich darauf!<br><span class="ro-translation">Am un curs de germană, de aceea ies totuși. Și deși sunt obosită, mă bucur de el!</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Super! Du lernst fleißig, <strong>denn</strong> du <strong>willst</strong> dein Ziel erreichen.<br><span class="ro-translation">Super! Înveți cu sârguință, căci vrei să-ți atingi scopul.</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Acum poți lega idei ca un vorbitor adevărat: cauză (weil/denn), consecință (deshalb), contrast (obwohl/trotzdem). Doar nu uita poziția verbului! Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
