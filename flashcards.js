// ============================================
// FLASHCARDS - Atelier A2: Konnektoren
// Claudia Toth · 32 carduri: conectori + categorii + vocabular + verbe + fraze model
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Conectori + categorii (8) ===
    { de: "weil", ro: "pentru că (cauză) — verbul la FINAL", audio: "audio/letters/konzept-weil.wav" },
    { de: "denn", ro: "căci (cauză) — verbul pe locul 2 (normal)", audio: "audio/letters/konzept-denn.wav" },
    { de: "deshalb", ro: "de aceea (consecință) — inversiune", audio: "audio/letters/konzept-deshalb.wav" },
    { de: "deswegen / darum", ro: "de aceea (= deshalb)", audio: "audio/letters/konzept-deswegen.wav" },
    { de: "obwohl", ro: "deși (contrast) — verbul la FINAL", audio: "audio/letters/konzept-obwohl.wav" },
    { de: "trotzdem", ro: "totuși (contrast) — inversiune", audio: "audio/letters/konzept-trotzdem.wav" },
    { de: "Subjunktion → Verb am Ende", ro: "weil, obwohl, dass, wenn → verbul la final", audio: "audio/letters/konzept-subjunktion.wav" },
    { de: "Adverb → Inversion", ro: "deshalb, trotzdem → verbul imediat (locul 2)", audio: "audio/letters/konzept-adverb.wav" },

    // === Vocabular (4) ===
    { de: "der Grund", ro: "motivul (Warum? = de ce?)", audio: "audio/letters/vok-grund.wav" },
    { de: "die Folge", ro: "consecința / urmarea", audio: "audio/letters/vok-folge.wav" },
    { de: "der Gegensatz", ro: "contrastul / opoziția", audio: "audio/letters/vok-gegensatz.wav" },
    { de: "Warum?", ro: "De ce? (răspuns: weil / denn)", audio: "audio/letters/vok-warum.wav" },

    // === Verbe (6) ===
    { de: "bleiben", ro: "a rămâne (Perfekt cu sein: ist geblieben)", audio: "audio/letters/verb-bleiben.wav" },
    { de: "gehen", ro: "a merge (Perfekt cu sein: ist gegangen)", audio: "audio/letters/verb-gehen.wav" },
    { de: "sein", ro: "a fi (Perfekt cu sein: ist gewesen)", audio: "audio/letters/verb-sein.wav" },
    { de: "haben", ro: "a avea (Perfekt: hat gehabt)", audio: "audio/letters/verb-haben.wav" },
    { de: "funktionieren", ro: "a funcționa (-ieren → fără ge-: funktioniert)", audio: "audio/letters/verb-funktionieren.wav" },
    { de: "sich fühlen", ro: "a se simți (reflexiv)", audio: "audio/letters/verb-fuehlen.wav" },

    // === Fraze model (14) ===
    { de: "Ich bleibe zu Hause, weil ich krank bin.", ro: "Rămân acasă pentru că sunt bolnav.", audio: "audio/letters/satz-weil.wav" },
    { de: "Ich bleibe zu Hause, denn ich bin krank.", ro: "Rămân acasă, căci sunt bolnav.", audio: "audio/letters/satz-denn.wav" },
    { de: "Ich bin krank, deshalb bleibe ich zu Hause.", ro: "Sunt bolnav, de aceea rămân acasă.", audio: "audio/letters/satz-deshalb.wav" },
    { de: "Ich gehe arbeiten, obwohl ich krank bin.", ro: "Merg la muncă deși sunt bolnav.", audio: "audio/letters/satz-obwohl.wav" },
    { de: "Ich bin krank, trotzdem gehe ich arbeiten.", ro: "Sunt bolnav, totuși merg la muncă.", audio: "audio/letters/satz-trotzdem.wav" },
    { de: "Es regnet, deswegen nehme ich den Schirm.", ro: "Plouă, de aceea iau umbrela.", audio: "audio/letters/satz-regnet.wav" },
    { de: "Warum bleibst du zu Hause?", ro: "De ce rămâi acasă?", audio: "audio/letters/satz-warum.wav" },
    { de: "Weil ich müde bin.", ro: "Pentru că sunt obosit.", audio: "audio/letters/satz-weil-muede.wav" },
    { de: "Obwohl es teuer ist, kaufe ich es.", ro: "Deși e scump, îl cumpăr.", audio: "audio/letters/satz-teuer.wav" },
    { de: "Ich lerne Deutsch, weil ich hier arbeiten will.", ro: "Învăț germană pentru că vreau să lucrez aici.", audio: "audio/letters/satz-deutsch.wav" },
    { de: "Es ist spät, deshalb gehe ich nach Hause.", ro: "E târziu, de aceea merg acasă.", audio: "audio/letters/satz-spaet.wav" },
    { de: "Ich bin müde, trotzdem lerne ich weiter.", ro: "Sunt obosit, totuși învăț mai departe.", audio: "audio/letters/satz-weiter.wav" },
    { de: "Ich bin glücklich, weil ich hier wohne.", ro: "Sunt fericit pentru că locuiesc aici.", audio: "audio/letters/satz-gluecklich.wav" },
    { de: "Ich habe Zeit, deshalb besuche ich dich.", ro: "Am timp, de aceea te vizitez.", audio: "audio/letters/satz-besuche.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
