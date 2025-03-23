const bgMusic = document.getElementById('bg-music');
const clickSound = new Audio('images/click-sound.mp3');
let isDarkMode = false;

window.addEventListener('load', () => {
    bgMusic.play().catch(() => console.log("Autoplay blocked!"));
});

function playClickSound() {
    clickSound.play();
}

function startLearning() {
    playClickSound();
    alert("🚀 Ready to Start Your Learning Journey!");
}

function showCourses() {
    playClickSound();
    document.getElementById('content').innerHTML = `
        <h2>📚 Choose a Course to Get Started!</h2>
        <button class="glow-btn" onclick="startCourse('Web Development')">🌐 Web Development</button>
        <button class="glow-btn" onclick="startCourse('AI & ML')">🤖 AI & ML</button>
        <button class="glow-btn" onclick="startCourse('Cybersecurity')">🔐 Cybersecurity</button>
    `;
}

function startCourse(courseName) {
    playClickSound();
    document.getElementById('content').innerHTML = `
        <h2>✅ You have enrolled in ${courseName}!</h2>
        <button class="glow-btn" onclick="downloadCertificate('${courseName}')">🎓 Download Certificate</button>
    `;
}

function downloadCertificate(courseName) {
    playClickSound();
    const link = document.createElement('a');
    link.href = 'images/certificate.png';
    link.download = `${courseName}_certificate.png`;
    link.click();
    alert(`🎉 Certificate for ${courseName} is ready!`);
}

function showQuiz() {
    playClickSound();
    document.getElementById('content').innerHTML = `
        <h2>🎮 Ready to Test Your Knowledge?</h2>
        <button class="glow-btn" onclick="startQuiz()">Start Quiz 🚀</button>
    `;
}

function startQuiz() {
    playClickSound();
    let score = 0;
    const questions = [
        { question: "What does HTML stand for?", answer: "Hyper Text Markup Language" },
        { question: "Who is known as the father of AI?", answer: "John McCarthy" },
        { question: "What does SQL stand for?", answer: "Structured Query Language" },
        { question: "Which protocol is used for secure communication?", answer: "HTTPS" },
        { question: "What is the full form of CSS?", answer: "Cascading Style Sheets" }
    ];
    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i].question);
        if (userAnswer && userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
            score++;
        }
    }
    alert(`🎯 You scored ${score}/5!`);
    awardBadge(score);
}

function awardBadge(score) {
    if (score === 5) {
        alert("🏆 You’ve earned the Gold Badge!");
    } else if (score >= 3) {
        alert("🥈 You’ve earned the Silver Badge!");
    } else {
        alert("🥉 Keep trying to earn a badge!");
    }
}

function showLeaderboard() {
    playClickSound();
    document.getElementById('content').innerHTML = `
        <h2>🏆 Leaderboard - Top Learners!</h2>
        <ol>
            <li>🥇 Sree Narayane - 95%</li>
            <li>🥈 Alex Johnson - 88%</li>
            <li>🥉 Priya Sharma - 84%</li>
        </ol>
    `;
}

function showProgress() {
    playClickSound();
    document.getElementById('content').innerHTML = `
        <h2>📈 Progress Tracker</h2>
        <p>Course Completion: 80%</p>
        <p>Quizzes Completed: 4/5</p>
        <p>Badges Earned: 2</p>
    `;
}

function showForum() {
    playClickSound();
    document.getElementById('content').innerHTML = `
        <h2>💬 Join the Forum and Connect!</h2>
        <p>Discuss with fellow learners and experts.</p>
    `;
}

function toggleTheme() {
    playClickSound();
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
}
