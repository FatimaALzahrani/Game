// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr1hQK-pqmDlStxEScGJsXeLd3ZxabdhQ",
    authDomain: "generosity-of-hearts.firebaseapp.com",
    databaseURL: "https://generosity-of-hearts-default-rtdb.firebaseio.com",
    projectId: "generosity-of-hearts",
    storageBucket: "generosity-of-hearts.appspot.com",
    messagingSenderId: "283740767779",
    appId: "1:283740767779:web:749e1eb0e20c8516f25396",
    measurementId: "G-L0JZMTHQR7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const questions = [
    {
        question: "من قائدة ونواب ومساعدة القائدة في النادي؟",
        answers: [
            {text: "مجد الزيادي", alternatives: ["مجد", "كهرباء", "اقوى ليدر"]},
            {text: "حور الغامدي", alternatives: ["حور", "مساعدة القائدة"]},
            {text: "نايف ال ضاوي", alternatives: ["نايف", "نائف"]},
            {text: "دانه الشمراني", alternatives: ["دانه", "دانة"]}
        ]
    },    
    {
        question: "من هم اقوى داعمين للنادي؟",
        answers: [
            {text: "أعضاء النادي", alternatives: ["الاعضاء", "الأعضاء","أعضاء","أحنا","احنا","أنا","انا"]},
            {text: "القادة", alternatives: ["القادة", "القيادة","القاده"]},
            {text: "كلية علوم الحاسب", alternatives: ["الكليه", "كليه","كلية","الكلية"]},
            {text: "مجد الزيادي", alternatives: ["مجد", "كهرباء", "اقوى ليدر"]},
            {text: "دكتور نزار", alternatives: ["نزار","دكتور نزار","د. نزار","د.نزار"]},
            {text: "دكتورة مها", alternatives: ["مها", "د. مها", "دكتورة مها","د.مها"]},
            {text: "دكتور عبد الكريم", alternatives: ["عبد الكريم","عبدالكريم", "د. عبد الكريم", "د. عبدالكريم", "دكتور عبد الكريم", "دكتور عبدالكريم","د.عبد الكريم","د.عبدالكريم"]},
            {text: "دكتور طامي'", alternatives: ["طامي","دكتور طامي","د. طامي","د.طامي"]},
            {text: "أستاذ خالد'", alternatives: ["خالد","استاذ خالد","أ. خالد","أ.خالد"]},
        ]
    },
    {
        question: "أكثر دكاترة نحب نستشيرهم بنشاطاتنا؟",
        answers: [
            {text: "دكتور نزار", alternatives: ["نزار","دكتور نزار","د. نزار","د.نزار"]},
            {text: "دكتورة مها", alternatives: ["مها", "د. مها", "دكتورة مها","د.مها"]},
            {text: "دكتور عبد الكريم", alternatives: ["عبد الكريم","عبدالكريم", "د. عبد الكريم", "د. عبدالكريم", "دكتور عبد الكريم", "دكتور عبدالكريم","د.عبد الكريم","د.عبدالكريم"]}
        ]
    },
    {
        question: "متى تأسس النادي في جامعتنا؟",
        answers: [
            {text: "2022", alternatives: ["2022"]},
        ]
    },
    {
        question: "من مميزات نادينا",
        answers: [
            {text: "التعاون", alternatives: ["تعاون"]},
            {text: "نشاط", alternatives: ["النشاط"]},
            {text: "حيوية", alternatives: ["الحيوية","حيويه"]},
            {text: "ابتكار", alternatives: ["إبتكار"]},
            {text: "ابداع", alternatives: ["إبداع"]},
            {text: "اخلاص", alternatives: ["إخلاص"]},
            {text: "تميز", alternatives: ["تميز"]},
            {text: "حب الخير", alternatives: ["حب الغير"]}
        ]
    },
    {
        question: "من أقوى نادي في الحياة؟",
        answers: [
            {text: "بلاشك GDSCBU", alternatives: ["نادي قوقل للطلبة المطورين بجامعة الباحة", "نادي قوقل للطلبه المطورين بجامعه الباحه","GDSCBU","نادي قوقل","قوقل"]},
        ]
    },
    {
        question: "ما هي الألوان الرسمية للنادي؟ بدون غش 🤫",
        answers: [
            {text: "الأزرق", alternatives: ["أزرق", "الأزرق", "ازرق","الازرق"]},
            {text: "الأحمر", alternatives: ["أحمر", "الأحمر", "احمر","الاحمر"]},
            {text: "الأصفر", alternatives: ["أصفر", "الأصفر", "اصفر","الاصفر"]},
            {text: "الأخضر", alternatives: ["اخضر", "الأخضر", "أخضر","الأخضر"]},
        ]
    },
    {
        question: "كم عدد أعضاء النادي؟ بالتقريب للعشرات يعني 10 , 20 , 30 ..",
        answers: [
            {text: "70", alternatives: ["سبعين", "70","سبعون"]},
        ]
    },
    {
        question: "ما هي أبرز إنجازات النادي هذا العام؟",
        answers: [
            {text: "DevFest", alternatives: ["DevFest", "devfest", "Devfet","ديفست","ديفيست"]},
            {text: "متابعين ومشاهدات منصه x", alternatives: ["منصة x", "منصه x", "x","X","تويتر","twiter"]},
            {text: "حلقات بودكاست تِقن", alternatives: ["تِقن", "تقن", "بودكاست","البودكاست"]},
            {text: "حديقة البيانات", alternatives: ["حديقه البيانات", "معلومة الجمعة"]},
            {text: "مسابقة البرمجة التنافسية", alternatives: ["مسابقة البرمحة", "مسابقه البرمحه","BUCPC","CPC","bucpc","cpc"]},
            {text: "درع التميُز", alternatives: ["درع التميز", "التميز", "تميُز","التميُز"]},
            {text: "فوز الأعضاء في هاثكونات", alternatives: ["هاكثونات", "هاكثون", "فوز"]},
            {text: "اكثر القادة نشاطًا 'كهربا'", alternatives: ["أكثر القادة", "اكثر القادة", "أكثر القاده","اكثر القاده"]},
            {text: "مُبادرة تِقن", alternatives: ["مبادرة تِقن", "مُبادرة تِقن", "مبادرة تقن","مبادره تقن","تقن"]},
            {text: "رمضانية قوقل", alternatives: ["رمضانية", "رمضانيه", "مول","المول","فعالية المول","فعاليه المول","Mall"]},
        ]
    },
    {
        question: "ما هي الأنشطة التي يقدمها النادي؟",
        answers: [
            {text: "ورش العمل", alternatives: ["ورش", "ورش العمل"]},
            {text: "الدورات التدريبية", alternatives: ["الدورات", "تدريب", "الدورات التدريبية","دورات","محاضرات","المحاضرات","اللقاءات","لقاءات","ندوات","الندوات"]},
            {text: "المسابقات", alternatives: ["مسابقات", "المسابقات"]},
        ]
    },
];

let playerName = "";
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('answer-input').addEventListener('input', checkAnswer);
});

function startGame() {
    playerName = document.getElementById('name-input').value.trim();
    if (playerName === "") {
        alert("يرجى إدخال اسمك للبدء بالتحدي");
        return;
    }
    document.getElementById('login').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    
    questionElement.innerText = questions[currentQuestionIndex].question;
    answersContainer.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.innerText = answer.text;
        answersContainer.appendChild(answerElement);
    });
}

function checkAnswer() {
    const input = document.getElementById('answer-input').value.trim();
    const answers = document.querySelectorAll('.answer');
    let correctAnswerFound = false;
    let duplicateAnswerFound = false;

    answers.forEach(answerElement => {
        const answerText = answerElement.innerText;
        const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.text === answerText);
        const correctAnswers = correctAnswer.alternatives;

        if (correctAnswers.includes(input)) {
            if (answerElement.classList.contains('revealed')) {
                duplicateAnswerFound = true;
                alert("لقد أدخلت كلمة بنفس المعنى من قبل.");
                document.getElementById('answer-input').value = '';
            } else {
                answerElement.classList.add('revealed');
                document.getElementById('answer-input').value = '';
                score += 10;
                document.getElementById('points').innerText = score;
                correctAnswerFound = true;
            }
        }
    });

    if (correctAnswerFound && !duplicateAnswerFound) {
        if ([...answers].every(answer => answer.classList.contains('revealed'))) {
            nextQuestion();
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        resetTimer();
    } else {
        endGame();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
}

function endGame() {
    clearInterval(timer);
    saveScore();
    showLeaderboard();
}

function saveScore() {
    const timeTaken = 30 * questions.length - timeLeft;
    const playerData = {
        name: playerName,
        score: score,
        time: timeTaken
    };

    db.ref('leaderboard').push(playerData);
}

function showLeaderboard() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';

    db.ref('leaderboard').orderByChild('score').limitToLast(10).once('value', (snapshot) => {
        const leaderboardList = document.getElementById('leaderboard-list');
        leaderboardList.innerHTML = '';
        const leaderboardData = [];
        snapshot.forEach(childSnapshot => {
            leaderboardData.push(childSnapshot.val());
        });

        leaderboardData.sort((a, b) => b.score - a.score || a.time - b.time);

        leaderboardData.forEach((player, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.score}</td>
            `;
            leaderboardList.appendChild(row);
        });
    });
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    document.getElementById('points').innerText = score;
    document.getElementById('time').innerText = timeLeft;
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
