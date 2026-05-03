// =====================================================
// GAME DATA - Questions for all 10 modes
// =====================================================
const QUESTIONS_DATA = {
    'male-1': [
        {
            question: "What's his go-to excuse to skip plans?",
            options: ["Family emergency", "Not feeling well", "Work deadline", "Phone died", "Car broke down", "Forgot about it"]
        },
        {
            question: "What's his favorite way to waste time?",
            options: ["Gaming all night", "Scrolling reels", "Watching sports", "Annoying friends", "Sleeping", "Eating snacks"]
        },
        {
            question: "What would he NEVER share with anyone?",
            options: ["His phone password", "His crush's name", "His secret snack stash", "His browser history", "His real height", "His fears"]
        },
        {
            question: "What's his reaction when someone roasts him?",
            options: ["Roasts back harder", "Acts unbothered", "Gets defensive", "Laughs it off", "Plots revenge", "Cries inside"]
        },
        {
            question: "What's his secret obsession?",
            options: ["Collecting something weird", "A cartoon show", "Gym selfies", "A specific food item", "His hair/skin routine", "A celebrity crush"]
        }
    ],
    'male-2': [
        {
            question: "What's his biggest fear?",
            options: ["Being alone forever", "Losing his hair", "Going broke", "Public speaking", "His parents finding out", "Failure"]
        },
        {
            question: "What's his most embarrassing college moment?",
            options: ["Falling in public", "Wrong classroom", "Calling teacher 'mom'", "Tripping on stairs", "Spilling food", "Wardrobe malfunction"]
        },
        {
            question: "What's his dream job?",
            options: ["Tech billionaire", "Pro gamer", "Travel blogger", "Musician/Artist", "Entrepreneur", "Government job"]
        },
        {
            question: "What's his biggest pet peeve?",
            options: ["Slow walkers", "Chewing sounds", "Being late", "Fake people", "Group chats", "Canceling plans"]
        },
        {
            question: "What does he do when he's stressed?",
            options: ["Overthinks everything", "Eats everything", "Sleeps all day", "Works out", "Ignores everyone", "Rants to friends"]
        }
    ],
    'male-3': [
        {
            question: "What's his hidden talent nobody knows about?",
            options: ["Can sing really well", "Amazing at cooking", "Great at art/drawing", "Plays an instrument", "Writes poetry", "Good at DIY"]
        },
        {
            question: "What was his childhood dream?",
            options: ["Astronaut", "Cricketer", "Doctor", "Pilot", "Superhero", "Video game tester"]
        },
        {
            question: "What's his most prized possession?",
            options: ["His phone", "Gaming setup", "Childhood photos", "A specific gadget", "His bike/car", "Collection of something"]
        },
        {
            question: "What's his biggest regret?",
            options: ["Not studying enough", "Lost friendship", "Missed opportunity", "Something he said", "A relationship", "No regrets"]
        },
        {
            question: "What's his guilty pleasure?",
            options: ["Cheesy movies", "A specific kids show", "Ice cream at 3am", "Social media stalking", "Fast food binges", "Dancing alone"]
        }
    ],
    'female-1': [
        {
            question: "What's her favorite topic to gossip about?",
            options: ["College drama", "Celebrities", "Relationships", "Fashion trends", "Faculty secrets", "Batchmates"]
        },
        {
            question: "What's her go-to comfort food?",
            options: ["Ice cream", "Chocolate", "Pizza", "Mom's cooking", "Street food", "Bubble tea"]
        },
        {
            question: "What's her secret talent?",
            options: ["Amazing memory", "Great at makeup", "Can mimic people", "Dance moves", "Organizing everything", "Finding deals"]
        },
        {
            question: "What's her biggest 'ick' in people?",
            options: ["Bad hygiene", "Arrogance", "Being late", "Bad grammar", "Drama queens", "Fake people"]
        },
        {
            question: "What's her ideal weekend?",
            options: ["Sleeping all day", "Shopping spree", "Movie marathon", "Night out", "Reading/books", "Coffee dates"]
        }
    ],
    'female-2': [
        {
            question: "What's her dream vacation destination?",
            options: ["Beach paradise", "Mountains", "European cities", "Desert safari", "Island hopping", "Cultural tour"]
        },
        {
            question: "What's her biggest insecurity?",
            options: ["Appearance", "Future career", "Relationships", "Social skills", "Academic pressure", "Family expectations"]
        },
        {
            question: "What's her type of guy?",
            options: ["Funny & spontaneous", "Smart & ambitious", "Tall & handsome", "Kind & caring", "Mysterious & cool", "Bad boy vibes"]
        },
        {
            question: "What's her most used emoji?",
            options: ["Laughing crying", "Heart eyes", "Eye roll", "Sparkles", "Skull", "Red heart"]
        },
        {
            question: "What's her midnight craving?",
            options: ["Maggi/Noodles", "Ice cream", "Chips", "Pizza", "Chocolates", "Leftovers"]
        }
    ],
    'female-3': [
        {
            question: "What's her deepest secret she'd never share?",
            options: ["A hidden crush", "Past mistake", "Family secret", "A secret hobby", "Childhood memory", "A fear she hides"]
        },
        {
            question: "What's her biggest achievement she's proud of?",
            options: ["Academic success", "Personal growth", "Overcoming fear", "A creative project", "Relationship success", "Financial independence"]
        },
        {
            question: "What was her childhood nickname?",
            options: ["Something cute", "Something embarrassing", "Related to appearance", "Food related", "Character name", "Still gets called it"]
        },
        {
            question: "What's her 'toxic trait'?",
            options: ["Overthinking", "Procrastination", "Being too blunt", "Canceling plans", "Being late always", "Taking too many selfies"]
        },
        {
            question: "What's her wildest dream?",
            options: ["Famous influencer", "Travel the world", "Own a business", "Write a book", "Learn many languages", "Live abroad"]
        }
    ],
    'couple-1': [
        {
            question: "What's your partner's love language?",
            options: ["Quality time", "Physical touch", "Words of affirmation", "Acts of service", "Gifts", "All of them"]
        },
        {
            question: "What's their biggest turn-off?",
            options: ["Bad hygiene", "Arrogance", "Laziness", "Being rude to others", "Lying", "Clinginess"]
        },
        {
            question: "What's their idea of a perfect date?",
            options: ["Fancy dinner", "Movie night", "Adventure activity", "Beach/sunset", "Staycation", "Long drive"]
        },
        {
            question: "What's their most annoying habit?",
            options: ["Leaving things around", "Being on phone constantly", "Snoring", "Being late", "Interrupting", "Stealing blankets"]
        },
        {
            question: "What's a hidden talent they have?",
            options: ["Singing", "Cooking", "Art/Creativity", "Sports", "Gaming", "Problem solving"]
        }
    ],
    'couple-2': [
        {
            question: "What's their biggest fear about the relationship?",
            options: ["Growing apart", "Trust issues", "Family approval", "Long distance", "Communication problems", "No fears at all"]
        },
        {
            question: "What's their idea of a perfect proposal?",
            options: ["Private & intimate", "Grand gesture", "Destination proposal", "With family & friends", "Simple & sweet", "They want to propose"]
        },
        {
            question: "What's their most cherished memory with you?",
            options: ["First date", "A special trip", "Meeting family", "A random moment", "Festival celebration", "Overcoming something together"]
        },
        {
            question: "What's their secret fantasy?",
            options: ["Traveling the world together", "Starting a business", "Living in another country", "Fame/Recognition", "Simple peaceful life", "Adventure sports"]
        },
        {
            question: "What's their deal-breaker in relationships?",
            options: ["Cheating", "Dishonesty", "Lack of respect", "No ambition", "Bad with family", "No deal-breakers"]
        }
    ],
    'married-real': [
        {
            question: "What's your spouse's biggest financial worry?",
            options: ["Children's future", "Home loan", "Retirement planning", "Monthly budget", "Medical emergencies", "No major worries"]
        },
        {
            question: "What's their idea of a perfect retirement?",
            options: ["Traveling the world", "Peaceful hometown", "Near children", "Starting a hobby business", "Spiritual journey", "Relaxing at home"]
        },
        {
            question: "What's their parenting style?",
            options: ["Strict disciplinarian", "Friendly & open", "Protective", "Let them learn naturally", "Traditional values", "Modern approach"]
        },
        {
            question: "What's the biggest sacrifice they've made?",
            options: ["Career for family", "Moving cities", "Personal dreams", "Time with friends", "Lifestyle changes", "Nothing major"]
        },
        {
            question: "What's their secret dream they rarely talk about?",
            options: ["Starting something of their own", "Learning something new", "Traveling solo", "Writing a book", "A creative pursuit", "Content with current life"]
        }
    ],
    'married-fake': [
        {
            question: "Who would initiate a 'divorce' first?",
            options: ["Player 1 definitely", "Player 2 for sure", "Mutual decision", "Neither - stuck forever", "Depends on the day", "Already planning it"]
        },
        {
            question: "Who's the better cook between you two?",
            options: ["Player 1 - MasterChef", "Player 2 - Can actually cook", "Both are terrible", "Both are amazing", "We order food", "We survive on maggi"]
        },
        {
            question: "Who wears the pants in this 'relationship'?",
            options: ["Player 1 - Boss mode", "Player 2 - In charge", "Equal partners", "Whoever decides first", "We fight for control", "Our parents do"]
        },
        {
            question: "Who's more likely to forget anniversaries?",
            options: ["Player 1 - Always forgets", "Player 2 - Memory of goldfish", "Both forget", "Both remember perfectly", "What anniversary?", "We pretend to forget"]
        },
        {
            question: "Who's the crazy one in this duo?",
            options: ["Player 1 - Certified crazy", "Player 2 - Unhinged", "Both equally mad", "We enable each other", "We're both normal (lies)", "Everyone else is crazy"]
        }
    ]
};

// =====================================================
// GAME STATE
// =====================================================
let gameState = {
    currentMode: null,
    player1Name: '',
    player2Name: '',
    currentQuestion: 0,
    player1Answers: [],
    player2Guesses: [],
    questions: [],
    shuffledOptionsP2: []
};

// =====================================================
// AUDIO SYSTEM
// =====================================================
let audioContext = null;
let audioInitialized = false;

function initAudio() {
    if (audioInitialized) return;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioInitialized = true;
}

function playSound(type) {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    const now = audioContext.currentTime;
    
    switch(type) {
        case 'select':
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
            break;
            
        case 'correct':
            oscillator.frequency.setValueAtTime(523, now);
            oscillator.frequency.setValueAtTime(659, now + 0.1);
            oscillator.frequency.setValueAtTime(784, now + 0.2);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            oscillator.start(now);
            oscillator.stop(now + 0.3);
            break;
            
        case 'wrong':
            oscillator.frequency.setValueAtTime(300, now);
            oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.2);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            oscillator.start(now);
            oscillator.stop(now + 0.2);
            break;
            
        case 'win':
            const notes = [523, 659, 784, 1047];
            notes.forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.setValueAtTime(freq, now + i * 0.15);
                gain.gain.setValueAtTime(0.2, now + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.3);
                osc.start(now + i * 0.15);
                osc.stop(now + i * 0.15 + 0.3);
            });
            break;
            
        case 'perfect':
            const perfectNotes = [523, 659, 784, 1047, 1319, 1568];
            perfectNotes.forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.frequency.setValueAtTime(freq, now + i * 0.12);
                gain.gain.setValueAtTime(0.25, now + i * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.12 + 0.4);
                osc.start(now + i * 0.12);
                osc.stop(now + i * 0.12 + 0.4);
            });
            break;
    }
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    setTimeout(() => {
        targetScreen.classList.add('active');
    }, 50);
}

// =====================================================
// LEADERBOARD
// =====================================================
function getLeaderboard() {
    const data = localStorage.getItem('compatibilityLeaderboard');
    return data ? JSON.parse(data) : [];
}

function saveToLeaderboard(p1Name, p2Name, score, mode) {
    const leaderboard = getLeaderboard();
    const modeNames = {
        'male-1': 'Male Friends (1yr)',
        'male-2': 'Male Friends (2yr)',
        'male-3': 'Male Friends (3yr+)',
        'female-1': 'Female Friends (1yr)',
        'female-2': 'Female Friends (2yr)',
        'female-3': 'Female Friends (3yr+)',
        'couple-1': 'Couple (1yr)',
        'couple-2': 'Couple (1yr+)',
        'married-real': 'Married (Real)',
        'married-fake': 'Married (Fake)'
    };
    
    leaderboard.push({
        p1Name,
        p2Name,
        score,
        mode: modeNames[mode] || mode,
        date: new Date().toLocaleDateString()
    });
    
    leaderboard.sort((a, b) => b.score - a.score);
    
    localStorage.setItem('compatibilityLeaderboard', JSON.stringify(leaderboard.slice(0, 50)));
}

function renderLeaderboard() {
    const leaderboard = getLeaderboard();
    const listEl = document.getElementById('leaderboardList');
    
    if (leaderboard.length === 0) {
        listEl.innerHTML = '<div class="empty-leaderboard">No perfect matches yet! Be the first!</div>';
        return;
    }
    
    const filteredLeaderboard = leaderboard.filter(item => item.score >= 4);
    
    if (filteredLeaderboard.length === 0) {
        listEl.innerHTML = '<div class="empty-leaderboard">No high scores yet! Score 4 or 5 to appear here!</div>';
        return;
    }
    
    listEl.innerHTML = filteredLeaderboard.slice(0, 10).map((item, index) => {
        let rankClass = 'default';
        if (index === 0) rankClass = 'gold';
        else if (index === 1) rankClass = 'silver';
        else if (index === 2) rankClass = 'bronze';
        
        return `
            <div class="leaderboard-item" style="animation: fadeInUp 0.4s ease forwards; animation-delay: ${index * 0.1}s; opacity: 0;">
                <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
                <div class="leaderboard-names">
                    ${item.p1Name} & ${item.p2Name}
                    <div class="leaderboard-mode">${item.mode}</div>
                </div>
                <div class="leaderboard-score">${item.score}/5</div>
            </div>
        `;
    }).join('');
}

// =====================================================
// CONFETTI EFFECT
// =====================================================
function createConfetti(container, count = 50) {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#a855f7', '#3b82f6', '#f093fb'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        const animation = confetti.animate([
            { transform: `translateY(-10px) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 2000,
            delay: Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        container.appendChild(confetti);
        
        animation.onfinish = () => confetti.remove();
    }
}

// =====================================================
// GAME LOGIC
// =====================================================
function startGame(mode) {
    gameState.currentMode = mode;
    gameState.currentQuestion = 0;
    gameState.player1Answers = [];
    gameState.player2Guesses = [];
    gameState.questions = shuffleArray([...QUESTIONS_DATA[mode]]).slice(0, 5);
    gameState.shuffledOptionsP2 = [];
    
    showScreen('nameScreen');
}

function setupPlayer1Question() {
    const question = gameState.questions[gameState.currentQuestion];
    document.getElementById('p1QuestionNum').textContent = gameState.currentQuestion + 1;
    document.getElementById('p1Progress').style.width = `${(gameState.currentQuestion / 5) * 100}%`;
    document.getElementById('p1Question').textContent = question.question;
    
    const optionsContainer = document.getElementById('p1Options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${option}</span>`;
        btn.onclick = () => selectP1Option(index, option);
        btn.style.animationDelay = `${index * 0.05}s`;
        optionsContainer.appendChild(btn);
    });
    
    // Animate question card
    const card = document.getElementById('p1QuestionCard');
    card.classList.remove('animate-pop');
    void card.offsetWidth;
    card.classList.add('animate-pop');
}

function selectP1Option(index, option) {
    playSound('select');
    
    document.querySelectorAll('#p1Options .option-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    
    gameState.player1Answers.push({ index, option });
    
    setTimeout(() => {
        gameState.currentQuestion++;
        
        if (gameState.currentQuestion < 5) {
            setupPlayer1Question();
        } else {
            // Prepare shuffled options for Player 2 (anti-cheat)
            prepareP2Options();
            showScreen('transitionScreen');
        }
    }, 300);
}

function prepareP2Options() {
    gameState.shuffledOptionsP2 = gameState.questions.map(q => {
        const optionsWithIndex = q.options.map((opt, idx) => ({ option: opt, originalIndex: idx }));
        return shuffleArray(optionsWithIndex);
    });
}

function setupPlayer2Question() {
    const question = gameState.questions[gameState.currentQuestion];
    const shuffledOptions = gameState.shuffledOptionsP2[gameState.currentQuestion];
    
    document.getElementById('p2QuestionNum').textContent = gameState.currentQuestion + 1;
    document.getElementById('p2Progress').style.width = `${(gameState.currentQuestion / 5) * 100}%`;
    document.getElementById('p2Question').textContent = question.question;
    
    const optionsContainer = document.getElementById('p2Options');
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt.option}</span>`;
        btn.onclick = () => selectP2Option(opt.originalIndex, opt.option);
        btn.style.animationDelay = `${index * 0.05}s`;
        optionsContainer.appendChild(btn);
    });
    
    // Animate question card
    const card = document.getElementById('p2QuestionCard');
    card.classList.remove('animate-pop');
    void card.offsetWidth;
    card.classList.add('animate-pop');
}

function selectP2Option(originalIndex, option) {
    const correctAnswer = gameState.player1Answers[gameState.currentQuestion];
    const isCorrect = originalIndex === correctAnswer.index;
    
    if (isCorrect) {
        playSound('correct');
    } else {
        playSound('wrong');
    }
    
    gameState.player2Guesses.push({ 
        index: originalIndex, 
        option, 
        isCorrect 
    });
    
    // Highlight selection
    document.querySelectorAll('#p2Options .option-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.querySelector('span').textContent === option) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    setTimeout(() => {
        gameState.currentQuestion++;
        
        if (gameState.currentQuestion < 5) {
            setupPlayer2Question();
        } else {
            showResults();
        }
    }, 600);
}

function showResults() {
    const correctCount = gameState.player2Guesses.filter(g => g.isCorrect).length;
    
    // Determine result
    let title, message, titleColor;
    
    if (correctCount <= 2) {
        title = "Need to Know Each Other Better";
        message = "Keep spending time together! Your bond will grow stronger.";
        titleColor = '#6b7280';
    } else if (correctCount === 3) {
        title = "Not Bad!";
        message = "You're getting there! A few more hangouts and you'll be in sync.";
        titleColor = '#fbbf24';
    } else if (correctCount === 4) {
        title = "Strong Compatibility!";
        message = "You really know each other well! Great friendship/relationship!";
        titleColor = '#4ecdc4';
        playSound('win');
    } else {
        title = "PERFECT MATCH!";
        message = "Incredible! You two think exactly alike! Soul connection detected!";
        titleColor = '#ff6b6b';
        playSound('perfect');
        createConfetti(document.getElementById('confettiContainer'), 100);
    }
    
    // Update UI
    document.getElementById('finalScore').textContent = correctCount;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultTitle').style.color = titleColor;
    document.getElementById('resultMessage').textContent = message;
    
    // Animate score circle
    const scoreFill = document.getElementById('scoreFill');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (correctCount / 5) * circumference;
    
    setTimeout(() => {
        scoreFill.style.strokeDashoffset = offset;
    }, 300);
    
    // Render answer review
    const reviewContainer = document.getElementById('answersReview');
    reviewContainer.innerHTML = gameState.questions.map((q, i) => {
        const p1Answer = gameState.player1Answers[i].option;
        const p2Guess = gameState.player2Guesses[i].option;
        const isCorrect = gameState.player2Guesses[i].isCorrect;
        
        return `
            <div class="answer-review-item ${isCorrect ? 'correct' : 'incorrect'}" style="animation: fadeInUp 0.4s ease forwards; animation-delay: ${i * 0.1}s; opacity: 0;">
                <svg class="answer-icon" viewBox="0 0 24 24" fill="none" stroke="${isCorrect ? '#4ecdc4' : '#ef4444'}" stroke-width="2">
                    ${isCorrect 
                        ? '<path d="M20 6L9 17l-5-5"/>' 
                        : '<path d="M18 6L6 18M6 6l12 12"/>'}
                </svg>
                <div class="answer-content">
                    <div class="answer-question">Q${i + 1}: ${q.question}</div>
                    <div class="answer-comparison">
                        <strong>${gameState.player1Name}</strong>: ${p1Answer} 
                        ${!isCorrect ? `| <strong>${gameState.player2Name}</strong>: ${p2Guess}` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Show/hide save button based on score
    const saveBtn = document.getElementById('saveScore');
    if (correctCount >= 4) {
        saveBtn.style.display = 'flex';
    } else {
        saveBtn.style.display = 'none';
    }
    
    showScreen('resultsScreen');
}

function resetGame() {
    gameState = {
        currentMode: null,
        player1Name: '',
        player2Name: '',
        currentQuestion: 0,
        player1Answers: [],
        player2Guesses: [],
        questions: [],
        shuffledOptionsP2: []
    };
    
    document.getElementById('player1Name').value = '';
    document.getElementById('player2Name').value = '';
    document.getElementById('startGame').disabled = true;
    document.getElementById('scoreFill').style.strokeDashoffset = 283;
    
    showScreen('modeScreen');
}

// =====================================================
// EVENT LISTENERS
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    // Audio prompt
    const audioPrompt = document.getElementById('audioPrompt');
    audioPrompt.addEventListener('click', () => {
        initAudio();
        audioPrompt.classList.add('hidden');
    });
    
    // Mode selection
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('select');
            startGame(btn.dataset.mode);
        });
    });
    
    // Name inputs
    const player1Input = document.getElementById('player1Name');
    const player2Input = document.getElementById('player2Name');
    const startBtn = document.getElementById('startGame');
    
    function checkNames() {
        const p1 = player1Input.value.trim();
        const p2 = player2Input.value.trim();
        startBtn.disabled = !(p1 && p2);
        gameState.player1Name = p1;
        gameState.player2Name = p2;
    }
    
    player1Input.addEventListener('input', checkNames);
    player2Input.addEventListener('input', checkNames);
    
    // Start game
    startBtn.addEventListener('click', () => {
        playSound('select');
        document.getElementById('p1DisplayName').textContent = gameState.player1Name;
        gameState.currentQuestion = 0;
        showScreen('player1Screen');
        setupPlayer1Question();
    });
    
    // Back button
    document.getElementById('backToModes').addEventListener('click', () => {
        playSound('select');
        resetGame();
    });
    
    // Player 2 ready
    document.getElementById('player2Ready').addEventListener('click', () => {
        playSound('select');
        document.getElementById('p2DisplayName').textContent = gameState.player2Name;
        document.getElementById('p1NameDisplay').textContent = gameState.player1Name;
        gameState.currentQuestion = 0;
        showScreen('player2Screen');
        setupPlayer2Question();
    });
    
    // Play again
    document.getElementById('playAgain').addEventListener('click', () => {
        playSound('select');
        resetGame();
    });
    
    // Save to leaderboard
    document.getElementById('saveScore').addEventListener('click', () => {
        const correctCount = gameState.player2Guesses.filter(g => g.isCorrect).length;
        saveToLeaderboard(
            gameState.player1Name,
            gameState.player2Name,
            correctCount,
            gameState.currentMode
        );
        playSound('correct');
        document.getElementById('saveScore').disabled = true;
        document.getElementById('saveScore').innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
            Saved!
        `;
    });
    
    // Leaderboard navigation
    document.getElementById('viewLeaderboard').addEventListener('click', () => {
        playSound('select');
        renderLeaderboard();
        showScreen('leaderboardScreen');
    });
    
    document.getElementById('backFromLeaderboard').addEventListener('click', () => {
        playSound('select');
        showScreen('modeScreen');
    });
    
    // Add SVG gradient for score circle
    const scoreCircle = document.querySelector('.score-circle svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff6b6b"/>
            <stop offset="100%" stop-color="#4ecdc4"/>
        </linearGradient>
    `;
    scoreCircle.insertBefore(defs, scoreCircle.firstChild);
});

// Add keyboard support for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeScreen = document.querySelector('.screen.active');
        const primaryBtn = activeScreen.querySelector('.primary-btn:not(:disabled)');
        if (primaryBtn && document.activeElement.tagName !== 'INPUT') {
            primaryBtn.click();
        }
    }
});