// ============================================
// VERB-KONJUGATION - Atelier A2: Konnektoren
// 6 verbe frecvente în propoziții cu conectori: bleiben · gehen · sein · haben · funktionieren · sich fühlen
// ============================================

const verbsData = [
    {
        inf: 'bleiben', ro: 'a rămâne', typ: 'tare (neregulat)', aux: 'sein', part: 'geblieben',
        praes: [
            ['ich','bleibe','rămân'],['du','bleibst','rămâi'],['er/sie/es','bleibt','rămâne'],
            ['wir','bleiben','rămânem'],['ihr','bleibt','rămâneți'],['sie/Sie','bleiben','rămân / rămâneți']
        ],
        praet: [
            ['ich','blieb','rămâneam'],['du','bliebst','rămâneai'],['er/sie/es','blieb','rămânea'],
            ['wir','blieben','rămâneam'],['ihr','bliebt','rămâneați'],['sie/Sie','blieben','rămâneau']
        ],
        perf: [
            ['ich','bin geblieben','am rămas'],['du','bist geblieben','ai rămas'],['er/sie/es','ist geblieben','a rămas'],
            ['wir','sind geblieben','am rămas'],['ihr','seid geblieben','ați rămas'],['sie/Sie','sind geblieben','au rămas']
        ],
        note: '🚨 TARE + Perfekt cu <strong>sein</strong> (ist geblieben). Tipic cu conectori: Ich bleibe zu Hause, <strong>weil</strong> ich krank <strong>bin</strong>.'
    },
    {
        inf: 'gehen', ro: 'a merge / a se duce', typ: 'tare (neregulat)', aux: 'sein', part: 'gegangen',
        praes: [
            ['ich','gehe','merg'],['du','gehst','mergi'],['er/sie/es','geht','merge'],
            ['wir','gehen','mergem'],['ihr','geht','mergeți'],['sie/Sie','gehen','merg / mergeți']
        ],
        praet: [
            ['ich','ging','mergeam'],['du','gingst','mergeai'],['er/sie/es','ging','mergea'],
            ['wir','gingen','mergeam'],['ihr','gingt','mergeați'],['sie/Sie','gingen','mergeau']
        ],
        perf: [
            ['ich','bin gegangen','am mers'],['du','bist gegangen','ai mers'],['er/sie/es','ist gegangen','a mers'],
            ['wir','sind gegangen','am mers'],['ihr','seid gegangen','ați mers'],['sie/Sie','sind gegangen','au mers']
        ],
        note: '🚨 TARE + Perfekt cu <strong>sein</strong> (ist gegangen). Tipic: Ich bin krank, <strong>trotzdem gehe</strong> ich arbeiten (inversiune).'
    },
    {
        inf: 'sein', ro: 'a fi', typ: 'neregulat', aux: 'sein', part: 'gewesen',
        praes: [
            ['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],
            ['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt / sunteți']
        ],
        praet: [
            ['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],
            ['wir','waren','eram'],['ihr','wart','erați'],['sie/Sie','waren','erau']
        ],
        perf: [
            ['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],
            ['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']
        ],
        note: '🚨 NEREGULAT + Perfekt cu <strong>sein</strong>. Verbul cel mai des trimis la final de weil/obwohl: …, weil ich krank <strong>bin</strong>; …, obwohl es teuer <strong>ist</strong>.'
    },
    {
        inf: 'haben', ro: 'a avea', typ: 'neregulat', aux: 'haben', part: 'gehabt',
        praes: [
            ['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],
            ['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au / aveți']
        ],
        praet: [
            ['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],
            ['wir','hatten','aveam'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']
        ],
        perf: [
            ['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],
            ['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']
        ],
        note: '🚨 NEREGULAT (du hast, er hat; Prät hatte). Tipic: Ich gehe zum Arzt, <strong>weil</strong> ich Schmerzen <strong>habe</strong> (verbul la final).'
    },
    {
        inf: 'funktionieren', ro: 'a funcționa', typ: 'regulat', aux: 'haben', part: 'funktioniert',
        praes: [
            ['ich','funktioniere','funcționez'],['du','funktionierst','funcționezi'],['er/sie/es','funktioniert','funcționează'],
            ['wir','funktionieren','funcționăm'],['ihr','funktioniert','funcționați'],['sie/Sie','funktionieren','funcționează / funcționați']
        ],
        praet: [
            ['ich','funktionierte','funcționam'],['du','funktioniertest','funcționai'],['er/sie/es','funktionierte','funcționa'],
            ['wir','funktionierten','funcționam'],['ihr','funktioniertet','funcționați'],['sie/Sie','funktionierten','funcționau']
        ],
        perf: [
            ['ich','habe funktioniert','am funcționat'],['du','hast funktioniert','ai funcționat'],['er/sie/es','hat funktioniert','a funcționat'],
            ['wir','haben funktioniert','am funcționat'],['ihr','habt funktioniert','ați funcționat'],['sie/Sie','haben funktioniert','au funcționat']
        ],
        note: '🧩 Verbele în <strong>-ieren</strong> NU primesc ge- la Perfekt (funktioniert). Tipic: Es geht nicht, <strong>weil</strong> es nicht <strong>funktioniert</strong>.'
    },
    {
        inf: 'sich fühlen', ro: 'a se simți (reflexiv)', typ: 'regulat / reflexiv', aux: 'haben', part: 'gefühlt',
        praes: [
            ['ich','fühle mich','mă simt'],['du','fühlst dich','te simți'],['er/sie/es','fühlt sich','se simte'],
            ['wir','fühlen uns','ne simțim'],['ihr','fühlt euch','vă simțiți'],['sie/Sie','fühlen sich','se simt / vă simțiți']
        ],
        praet: [
            ['ich','fühlte mich','mă simțeam'],['du','fühltest dich','te simțeai'],['er/sie/es','fühlte sich','se simțea'],
            ['wir','fühlten uns','ne simțeam'],['ihr','fühltet euch','vă simțeați'],['sie/Sie','fühlten sich','se simțeau']
        ],
        perf: [
            ['ich','habe mich gefühlt','m-am simțit'],['du','hast dich gefühlt','te-ai simțit'],['er/sie/es','hat sich gefühlt','s-a simțit'],
            ['wir','haben uns gefühlt','ne-am simțit'],['ihr','habt euch gefühlt','v-ați simțit'],['sie/Sie','haben sich gefühlt','s-au simțit']
        ],
        note: '🧩 REFLEXIV + regulat. Tipic: Ich bleibe im Bett, <strong>weil</strong> ich mich krank <strong>fühle</strong> (reflexivul + verbul la final).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe frecvente cu conectori</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Acestea sunt verbele care „fug la final" cu weil/obwohl: …, weil ich krank <strong>bin</strong>.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cu <strong>weil</strong> și <strong>obwohl</strong>, verbul conjugat pleacă la SFÂRȘIT: bin, ist, habe, fühle mich. Cu <strong>deshalb/trotzdem</strong>, verbul vine imediat (inversiune): deshalb <strong>gehe</strong> ich… Atenție: bleiben și gehen fac Perfekt cu SEIN! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
