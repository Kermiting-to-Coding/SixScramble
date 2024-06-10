console.log('script.js loaded');

const wordList = [
    "abroad", "accept", "access", "accord", "across", "acting", "action", "active",
    "actual", "advice", "advise", "affect", "afford", "afraid", "agency", "agenda",
    "almost", "always", "amount", "animal", "annual", "answer", "anyone", "anyway",
    "appeal", "appear", "around", "arrive", "artist", "aspect", "assess", "assign",
    "assist", "assume", "attack", "attend", "author", "avenue", "backed", "barely",
    "battle", "beauty", "became", "become", "before", "behalf", "behave", "behind",
    "belief", "belong", "berlin", "better", "beyond", "bishop", "border", "bottle",
    "bottom", "bought", "branch", "breath", "bridge", "bright", "broken", "budget",
    "burden", "butter", "camera", "cannot", "carbon", "career", "castle", "casual",
    "caught", "center", "chance", "change", "charge", "choice", "choose", "chosen",
    "church", "circle", "client", "closed", "closer", "coffee", "combat", "coming",
    "common", "comply", 
     "cookie", "corner", "costly", "county", "couple", "course", "covers", "create",
    "credit", "crisis", "custom", "damage", "danger", "dealer", "debate", "decade",
    "decide", "defeat", "defend", "define", "degree", "demand", "depend", "deploy",
    "deputy", "desert", "design", "desire", "detail", "detect", "device", "differ",
    "dinner", "direct", "doctor", "dollar", "domain", "double", "driver", "during",
    "easily", "eating", "editor", "effect", "effort", "eighth", "either", "eleven",
    "emerge", "empire", "employ", "enable", "ending", "energy", "engage", "engine",
    "enough", "ensure", "entire", "entity", "equity", "escape", "estate", "ethics",
    "ethnic", "exceed", "except", "excess", "expand", "expect", "expert", "export",
    "extend", "extent", "fabric", "facing", "factor", "failed", "fairly", "fallen",
    "family", "famous", "farmer", "father", "fellow", "female", "figure", "filing",
    "finger", "finish", "fiscal", "flight", "flying", "follow", "forced", "forest",
    "forget", "formal", "format", "former", "foster", "fought", "fourth", "friend",
    "future", "garden", "gather", "gender", "german", "global", "golden", "ground",
    "growth", "guilty", "hardly", "health", "height", "hidden", "holder", "honest",
    "impact", "import", "income", "indeed", "injury", "inside", "intend", "intent",
    "invest", "island", "itself", "jersey", "junior", "kansas", "keeper", "killed",
    "labour", "launch", "lawyer", "leader", "league", "leaves", "legacy", "lesson",
    "letter", "lights", "likely", "linked", "liquid", "listen", "little", "living",
    "locate", "london", "longer", "luxury", "mainly", "making", "manage", "manual",
    "margin", "marine", "marked", "market", "master", "matter", "mature", "medium",
    "member", "memory", "mental", "merely", "method", "middle", "miller", "mining",
    "minute", "mirror", "mobile", "modern", "modest", "moment", "monday", "monkey",
    "mostly", "mother", "motion", "moving", "murder", "museum", "mutual", "myself",
    "narrow", "nation", "native", "nature", "nearby", "nearly", "nights", "nobody",
    "normal", "notice", "number", "object", "occupy", "office", "online", "option",
    "orange", "origin", "output", "packed", "palace", "parent", "partly", "patent",
    "people", "period", "permit", "person", "phrase", "picked", "planet", "player",
    "plenty", "pocket", "police", "policy", "prefer", "pretty", "prince", "prison",
    "profit", "proper", "public", "pursue", "quartz", "random", "rarely", "rather",
    "rating", "reader", "really", "reason", "recall", "recent", "recipe", "record",
    "reduce", "reform", "refuse", "regard", "regime", "region", "regret", "reject",
    "relate", "relief", "remain", "remark", "remind", "remote", "remove", "repair",
    "repeat", "report", "rescue", "resist", "resort", "result", "retain", "retire",
    "return", "reveal", "review", "reward", "riding", "rising", "robust", "ruling",
    "sacred", "safely", "safety", "salary", "sample", "saving", "saying", "scheme",
    "school", "screen", "search", "season", "second", "secret", "secure", "seeing",
    "select", "seller", "senate", "senior", "series", "server", "settle", "severe",
    "shadow", "shared", "should", "signal", "silent", "silver", "simple", "simply",
    "single", "sister", "sketch", "slight", "smooth", "soccer", "social", "solely",
    "sought", "source", "speech", "spirit", "spoken", "spread", "spring", "square",
    "stable", "status", "steady", "strain", "stream", "street", "stress", "strict",
    "strike", "string", "strong", "studio", "submit", "sudden", "suffer", "summer",
    "summit", "supply", "survey", "switch", "symbol", "system", "taking", "talent",
    "target", "taught", "tenant", "tender", "tennis", "thanks", "theory", "thirty",
    "though", "threat", "thrive", "ticket", "timely", "timing", "tissue", "toward",
    "travel", "treaty", "trying", "turned", "twelve", "twenty", "unable", "unique",
    "united", "unless", "unlike", "update", "useful", "valley", "varied", "vendor",
    "versus", "victim", "vision", "visual", "volume", "walker", "wealth", "weekly",
    "weight", "window", "winner", "winter", "within", "wonder", "worker", "wright",
    "writer", "yellow", "absent", "absorb", "accent", "acting", "action", "active",
    "actual", "advice", "advise", "affect", "afford", "agency", "agenda", "almost",
    "always", "amount", "animal", "annual", "answer", "anyone", "anyway", "appeal",
    "appear", "around", "artist", "aspect", "assess", "assign", "assist", "assume",
    "attack", "attend", "author", "avenue", "backed", "barely", "battle", "beauty",
    "became", "become", "before", "behalf", "behind", "belief", "belong", "better",
    "beyond", "bishop", "border", "bottle", "bottom", "bought", "branch", "breath",
    "bridge", "bright", "broken", "budget", "burden", "butter", "camera", "cannot",
    "carbon", "career", "castle", "casual", "caught", "center", "chance", "change",
    "charge", "choice", "choose", "chosen", "church", "circle", "client", "closed",
    "closer", "coffee", "combat", "coming", "common", "comply", "concept", 
    "content", "contest", "context", "convert", "cookie", "corner", "costly", "county",
    "couple", "course", "covers", "create", "credit", "crisis", "custom", "damage",
    "danger", "dealer", "debate", "decade", "decide", "defeat", "defend", "define",
    "degree", "demand", "depend", "deploy", "deputy", "desert", "design", "desire",
    "detail", "detect", "device", "differ", "dinner", "direct", "doctor", "dollar",
    "domain", "double", "driver", "during", "easily", "eating", "editor", "effect",
    "effort", "eighth", "either", "eleven", "emerge", "empire", "employ", "enable",
    "ending", "energy", "engage", "engine", "enough", "ensure", "entire", "entity",
    "equity", "escape", "estate", "ethics", "ethnic", "exceed", "except", "excess",
    "expand", "expect", "expert", "export", "extend", "extent", "fabric", "facing",
    "factor", "failed", "fairly", "fallen", "family", "famous", "farmer", "father",
    "fellow", "female", "figure", "filing", "finger", "finish", "fiscal", "flight",
    "flying", "follow", "forced", "forest", "forget", "formal", "format", "former",
    "foster", "fought", "fourth", "friend", "future", "garden", "gather", "gender",
    "german", "global", "golden", "ground", "growth", "guilty", "hardly", "health",
    "height", "hidden", "holder", "honest", "impact", "import", "income", "indeed",
    "injury", "inside", "intend", "intent", "invest", "island", "itself", "jersey",
    "junior", "kansas", "keeper", "killed", "labour", "launch", "lawyer", "leader",
    "league", "leaves", "legacy", "lesson", "letter", "lights", "likely", "linked",
    "liquid", "listen", "little", "living", "locate", "london", "longer", "luxury",
    "mainly", "making", "manage", "manual", "margin", "marine", "marked", "market",
    "master", "matter", "mature", "medium", "member", "memory", "mental", "merely",
    "method", "middle", "miller", "mining", "minute", "mirror", "mobile", "modern",
    "modest", "moment", "monday", "monkey", "mostly", "mother", "motion", "moving",
    "murder", "museum", "mutual", "myself", "narrow", "nation", "native", "nature",
    "nearby", "nearly", "nights", "nobody", "normal", "notice", "number", "object",
    "occupy", "office", "online", "option", "orange", "origin", "output", "packed",
    "palace", "parent", "partly", "patent", "people", "period", "permit", "person",
    "phrase", "picked", "planet", "player", "plenty", "pocket", "police", "policy",
    "prefer", "pretty", "prince", "prison", "profit", "proper", "public", "pursue",
    "quartz", "random", "rarely", "rather", "rating", "reader", "really", "reason",
    "recall", "recent", "recipe", "record", "reduce", "reform", "refuse", "regard",
    "region", "regret", "reject", "relate", "relief", "remain", "remark", "remind",
    "remote", "remove", "repair", "repeat", "report", "rescue", "resist", "resort",
    "result", "retain", "return", "reveal", "review", "reward", "riding", "rising",
    "robust", "ruling", "sacred", "safely", "safety", "salary", "sample", "saving",
    "saying", "scheme", "school", "screen", "search", "season", "second", "secret",
    "secure", "seeing", "select", "seller", "senate", "senior", "series", "server",
    "settle", "severe", "shadow", "shared", "should", "signal", "silent", "silver",
    "simple", "simply", "single", "sister", "sketch", "slight", "smooth", "soccer",
    "social", "solely", "sought", "source", "speech", "spirit", "spoken", "spread",
    "spring", "square", "stable", "status", "steady", "strain", "stream", "street",
    "stress", "strict", "strike", "string", "strong", "studio", "submit", "sudden",
    "suffer", "summer", "summit", "supply", "survey", "switch", "symbol", "system",
    "taking", "talent", "target", "taught", "tenant", "tender", "tennis", "thanks",
    "theory", "thirty", "though", "threat", "thrive", "ticket", "timely", "timing",
    "tissue", "toward", "travel", "treaty", "trying", "turned", "twelve", "unique",
    "united", "unless", "unlike", "update", "useful", "valley", "varied", "vendor",
    "versus", "victim", "vision", "visual", "volume", "walker", "wealth", "weekly",
    "weight", "window", "winner", "winter", "within", "wonder", "worker", "wright",
    "writer", "yellow"
];


let targetWord = wordList[Math.floor(Math.random() * wordList.length)];
let attempts = 0;
console.log(targetWord);
const keyboardLayout = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
];

function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.split('').forEach(key => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';
            keyDiv.textContent = key;
            keyDiv.onclick = () => handleKeyClick(key);
            rowDiv.appendChild(keyDiv);
        });
        keyboard.appendChild(rowDiv);
    });
}

function handleKeyClick(key) {
    const guessInput = document.getElementById('guessInput');
    if (guessInput.value.length < 6) {
        guessInput.value += key;
    }
}

function updateKeyboard(guess) {
    const keys = document.querySelectorAll('.key');
    guess.split('').forEach((letter, index) => {
        keys.forEach(key => {
            if (key.textContent === letter) {
                if (letter === targetWord[index]) {
                    key.classList.add('correct');
                } else if (targetWord.includes(letter)) {
                    key.classList.add('present');
                } else {
                    key.classList.add('absent');
                }
            }
        });
    });
}

function submitGuess() {
    console.log('Submit Guess called');
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    console.log('Guess:', guess);

    if (guess.length !== 6 || !wordList.includes(guess)) {
        alert('Please enter a valid 6-letter word.');
        return;
    }

    attempts++;
    displayGuess(guess);
    updateKeyboard(guess);
    guessInput.value = '';

    if (guess === targetWord) {
        alert('Congratulations! You guessed the word in ' + attempts + ' attempts.');
    }
}

function displayGuess(guess) {
    console.log('Display Guess called');
    const board = document.getElementById('board');
    const row = document.createElement('div');
    row.className = 'row';

    for (let i = 0; i < 6; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        if (guess[i] === targetWord[i]) {
            tile.classList.add('correct');
        } else if (targetWord.includes(guess[i])) {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }

        tile.textContent = guess[i];
        row.appendChild(tile);
    }

    board.appendChild(row);
}

// Initialize the keyboard
createKeyboard();
