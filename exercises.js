// ============================================
// EXERCIȚII - Atelier A2: Konnektoren
// Claudia Toth · 5 exerciții cu rezolvări complete
// weil/denn · deshalb/deswegen · obwohl/trotzdem · poziția verbului · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Alege conectorul potrivit (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'Ich bleibe zu Hause, ______ ich krank bin.', hint: 'cauză; verbul „bin" e la FINAL', correct: 'weil', accept: ['weil'] },
    { id: 'b', prompt: 'Ich bin krank, ______ bleibe ich zu Hause.', hint: 'consecință; urmează verbul „bleibe" (inversiune)', correct: 'deshalb', accept: ['deshalb', 'deswegen', 'darum', 'daher'] },
    { id: 'c', prompt: 'Ich gehe arbeiten, ______ ich krank bin.', hint: 'contrast (deși); verbul la FINAL', correct: 'obwohl', accept: ['obwohl'] },
    { id: 'd', prompt: 'Ich bin krank, ______ gehe ich arbeiten.', hint: 'contrast (totuși); inversiune', correct: 'trotzdem', accept: ['trotzdem'] },
    { id: 'e', prompt: 'Ich bleibe zu Hause, ______ ich bin krank.', hint: 'cauză (căci); ordine normală „ich bin"', correct: 'denn', accept: ['denn'] },
    { id: 'f', prompt: 'Es regnet, ______ nehme ich den Schirm.', hint: 'consecință; inversiune „nehme ich"', correct: 'deshalb', accept: ['deshalb', 'deswegen', 'darum', 'daher'] },
    { id: 'g', prompt: 'Ich lerne Deutsch, ______ ich hier arbeiten will.', hint: 'cauză; verbul „will" la FINAL', correct: 'weil', accept: ['weil'] },
    { id: 'h', prompt: 'Es ist teuer, ______ kaufe ich es.', hint: 'contrast (totuși); inversiune', correct: 'trotzdem', accept: ['trotzdem'] },
    { id: 'i', prompt: '______ es teuer ist, kaufe ich es.', hint: 'contrast (deși), la început; verbul „ist" la FINAL', correct: 'Obwohl', accept: ['obwohl'] },
    { id: 'j', prompt: 'Ich bin müde, ______ ich schlafe wenig.', hint: 'cauză (căci); ordine normală „ich schlafe"', correct: 'denn', accept: ['denn'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Alege conectorul potrivit.</strong> Privește poziția verbului: la FINAL → weil/obwohl · inversiune (verb imediat după) → deshalb/trotzdem · ordine normală → denn.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="weil / denn / deshalb / obwohl / trotzdem">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Reguli de poziție a verbului (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'După „weil", verbul conjugat stă:', a: 'la final', b: 'pe locul 2', correct: 'la final', expl: 'weil = Subjunktion → verbul la final.' },
    { id: 'b', text: 'După „deshalb" urmează imediat:', a: 'verbul (inversiune)', b: 'subiectul', correct: 'verbul (inversiune)', expl: 'deshalb pe locul 1 → verbul pe locul 2, apoi subiectul.' },
    { id: 'c', text: '„denn" schimbă ordinea normală a propoziției?', a: 'Nu, verbul rămâne pe locul 2', b: 'Da, verbul merge la final', correct: 'Nu, verbul rămâne pe locul 2', expl: 'denn = conjuncție poziția 0 → ordine normală.' },
    { id: 'd', text: 'Care variantă e CORECTĂ?', a: '…, weil ich krank bin.', b: '…, weil ich bin krank.', correct: '…, weil ich krank bin.', expl: 'Cu weil, verbul „bin" fuge la final.' },
    { id: 'e', text: '„obwohl" se comportă ca:', a: 'weil (verb la final)', b: 'deshalb (inversiune)', correct: 'weil (verb la final)', expl: 'obwohl = Subjunktion, ca weil → verb la final.' },
    { id: 'f', text: '„trotzdem" se comportă ca:', a: 'deshalb (inversiune)', b: 'weil (verb la final)', correct: 'deshalb (inversiune)', expl: 'trotzdem = adverb, ca deshalb → inversiune.' },
    { id: 'g', text: 'Care variantă e CORECTĂ?', a: 'Ich bin krank, deshalb bleibe ich zu Hause.', b: 'Ich bin krank, deshalb ich bleibe zu Hause.', correct: 'Ich bin krank, deshalb bleibe ich zu Hause.', expl: 'După deshalb: verb (bleibe) + subiect (ich).' },
    { id: 'h', text: '„de aceea" se traduce cu:', a: 'deshalb', b: 'obwohl', correct: 'deshalb', expl: 'deshalb/deswegen/darum = de aceea. obwohl = deși.' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>⚖️ Alege varianta corectă despre poziția verbului.</strong>
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Pune verbul la poziția corectă (weil/obwohl → final) (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich bleibe zu Hause, weil ich krank ____.', hint: 'verbul „a fi" (sein), la FINAL', correct: 'bin', accept: ['bin'] },
    { id: 'b', prompt: 'Ich gehe nicht raus, weil es ____.', hint: 'verbul „a ploua" (regnen), la FINAL', correct: 'regnet', accept: ['regnet'] },
    { id: 'c', prompt: 'Ich lerne viel, weil ich eine Prüfung ____.', hint: 'verbul „a avea" (haben), la FINAL', correct: 'habe', accept: ['habe'] },
    { id: 'd', prompt: 'Obwohl ich müde ____, arbeite ich.', hint: 'verbul „a fi" (sein), la FINAL', correct: 'bin', accept: ['bin'] },
    { id: 'e', prompt: 'Ich nehme den Schirm, weil es ____.', hint: 'verbul „a ploua" (regnen), la FINAL', correct: 'regnet', accept: ['regnet'] },
    { id: 'f', prompt: 'Ich bin glücklich, weil ich in Berlin ____.', hint: 'verbul „a locui" (wohnen), la FINAL', correct: 'wohne', accept: ['wohne'] },
    { id: 'g', prompt: 'Obwohl es teuer ____, kaufe ich es.', hint: 'verbul „a fi" (sein), la FINAL', correct: 'ist', accept: ['ist'] },
    { id: 'h', prompt: 'Ich gehe zum Arzt, weil ich Schmerzen ____.', hint: 'verbul „a avea" (haben), la FINAL', correct: 'habe', accept: ['habe'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎯 Pune verbul la FINAL (după weil și obwohl).</strong> Verbul conjugat fuge la sfârșitul propoziției secundare.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="verb conjugat...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Inversiune după deshalb/trotzdem (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich bin müde. Deshalb ____ ich früh ins Bett.', hint: 'verbul „a merge" (gehen), imediat după deshalb', correct: 'gehe', accept: ['gehe'] },
    { id: 'b', prompt: 'Es regnet. Deshalb ____ ich den Schirm.', hint: 'verbul „a lua" (nehmen)', correct: 'nehme', accept: ['nehme'] },
    { id: 'c', prompt: 'Ich bin krank. Trotzdem ____ ich arbeiten.', hint: 'verbul „a merge" (gehen)', correct: 'gehe', accept: ['gehe'] },
    { id: 'd', prompt: 'Das Auto ist teuer. Trotzdem ____ ich es.', hint: 'verbul „a cumpăra" (kaufen)', correct: 'kaufe', accept: ['kaufe'] },
    { id: 'e', prompt: 'Ich habe Zeit. Deshalb ____ ich dich.', hint: 'verbul „a vizita" (besuchen)', correct: 'besuche', accept: ['besuche'] },
    { id: 'f', prompt: 'Es ist spät. Deshalb ____ ich nach Hause.', hint: 'verbul „a merge" (gehen)', correct: 'gehe', accept: ['gehe'] },
    { id: 'g', prompt: 'Ich bin müde. Trotzdem ____ ich weiter.', hint: 'verbul „a învăța" (lernen)', correct: 'lerne', accept: ['lerne'] },
    { id: 'h', prompt: 'Ich habe kein Geld. Deshalb ____ ich zu Hause.', hint: 'verbul „a rămâne" (bleiben)', correct: 'bleibe', accept: ['bleibe'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🧩 Inversiune după deshalb / trotzdem:</strong> conectorul e pe locul 1, deci verbul vine IMEDIAT (locul 2), apoi subiectul „ich".
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="verb (forma ich)...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Rămân acasă pentru că sunt bolnav.', correct: 'Ich bleibe zu Hause, weil ich krank bin.', accept: ['ich bleibe zu hause weil ich krank bin'] },
    { id: 'b', ro: 'Sunt bolnav, de aceea rămân acasă.', correct: 'Ich bin krank, deshalb bleibe ich zu Hause.', accept: ['ich bin krank deshalb bleibe ich zu hause', 'ich bin krank deswegen bleibe ich zu hause'] },
    { id: 'c', ro: 'Merg la muncă deși sunt bolnav.', correct: 'Ich gehe arbeiten, obwohl ich krank bin.', accept: ['ich gehe arbeiten obwohl ich krank bin'] },
    { id: 'd', ro: 'Sunt bolnav, totuși merg la muncă.', correct: 'Ich bin krank, trotzdem gehe ich arbeiten.', accept: ['ich bin krank trotzdem gehe ich arbeiten'] },
    { id: 'e', ro: 'Plouă, de aceea iau umbrela.', correct: 'Es regnet, deshalb nehme ich den Schirm.', accept: ['es regnet deshalb nehme ich den schirm', 'es regnet deswegen nehme ich den schirm'] },
    { id: 'f', ro: 'Învăț germană pentru că vreau să lucrez aici.', correct: 'Ich lerne Deutsch, weil ich hier arbeiten will.', accept: ['ich lerne deutsch weil ich hier arbeiten will'] },
    { id: 'g', ro: 'Rămân acasă, căci sunt obosit.', correct: 'Ich bleibe zu Hause, denn ich bin müde.', accept: ['ich bleibe zu hause denn ich bin müde'] },
    { id: 'h', ro: 'Deși e scump, cumpăr mașina.', correct: 'Obwohl es teuer ist, kaufe ich das Auto.', accept: ['obwohl es teuer ist kaufe ich das auto'] },
    { id: 'i', ro: 'De ce rămâi acasă?', correct: 'Warum bleibst du zu Hause?', accept: ['warum bleibst du zu hause'] },
    { id: 'j', ro: 'Sunt fericit pentru că locuiesc în Berlin.', correct: 'Ich bin glücklich, weil ich in Berlin wohne.', accept: ['ich bin glücklich weil ich in berlin wohne'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> Atenție la poziția verbului după fiecare conector!
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
