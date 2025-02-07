// quiz.js
document.addEventListener('keydown', function (event) {
    if (
        (event.ctrlKey && event.key === 'r') || 
        (event.key === 'F5') || 
        (event.key === 'F12') || 
        (event.ctrlKey && event.shiftKey && event.key === 'I')
    ) {
        event.preventDefault();
        alert('Restricted key press detected!');
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-click is disabled');
});

// Prompt user if they try to refresh or close the page
window.addEventListener('beforeunload', function (event) {
    const confirmationMessage = "Are you sure you want to leave? Your progress will be lost.";
    event.returnValue = confirmationMessage; // Standard for most browsers
    return confirmationMessage; // For some older browsers
});

// Detect if DevTools is open (by checking screen width)
var checkDevTools = setInterval(function() {
    if (window.outerWidth - window.innerWidth > 100) {
        alert('Developer tools detected!');
        document.body.style.backgroundColor = "red";
    }
}, 1000); // Check every second

const quizData = {
    "circle": [
        {
            "question": "What does AI stand for?",
            "options": [
                "Automated Intelligence",
                "Artificial Information",
                "Artificial Intelligence",
                "Automated Interaction"
            ],
            "correctAnswer": "Artificial Intelligence"
        },
        {
            "question": "What is an AI model?",
            "options": [
                " A blueprint for making robots",
                "A new type of smartphone",
                "A program that learns from data to make decisions",
                "A social media account"
            ],
            "correctAnswer": "A program that learns from data to make decisions"
        },
        {
            "question": "Which AI technology is used in chatbots like ChatGPT?",
            "options": [
                "Deep Learning",
                "Machine Learning",
                "Natural Language Processing",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "question": "What does AI mainly focus on?",
            "options": [
                "Making robots dance",
                "Creating smart machines",
                "Playing video games",
                " Writing novels"
            ],
            "correctAnswer": "Creating smart machines"
        },
        {
            "question": "Which language is most commonly used for AI programming?",
            "options": [
                "Java",
                "Python",
                "HTML",
                "CSS"
            ],
            "correctAnswer": "Python"
        },
        {
            "question": "What does AI use to learn and improve from data?",
            "options": [
                "Magic",
                "Machine Learning",
                "Coding Errors",
                "Antivirus Software"
            ],
            "correctAnswer": "Machine Learning"
        },
        {
            "question": "The main tasks of an AI agent are_______.",
            "options": [
                "Input and Output",
                "Moment and Humanly Actions",
                "Perceiving, thinking, and acting on the environment",
                "None of the above"
            ],
            "correctAnswer": "Perceiving, thinking, and acting on the environment"
        },
        {
            "question": "What feature in smartphones allows voice control using AI?",
            "options": [
                "Bluetooth",
                "Voice Assistant",
                " Battery Saver",
                "Wallpaper Changer"
            ],
            "correctAnswer": "Voice Assistant"
        },
        {
            "question": "What is state space in AI?",
            "options": [
                "A collection of all the problem states",
                "A specific problem state out of all problem states",
                "Both a and b",
                "None of the above"
            ],
            "correctAnswer": "A collection of all the problem states"
        },
        {
            "question": "Which of the following is not an application of Artificial Intelligence?",
            "options": [
                "Natural Language Processing",
                "Computer Vision",
                "Database Management System",
                "Digital Assistant"
            ],
            "correctAnswer": "Database Management System"
        },
        {
            "question": "What AI feature suggests words while typing?",
            "options": [
                "Screen saver",
                "Copy-paste",
                "Auto-fill",
                "Recycle bin"
            ],
            "correctAnswer": "Auto-fill"
        },
        {
            "question": "Which AI feature in mobile cameras helps improve image quality?",
            "options": [
                " Night mode",
                "Auto-brightness",
                "AI-powered filters",
                " Low battery warning"
            ],
            "correctAnswer": "AI-powered filters"
        },
        {
            "question": "Which of the following is NOT AI-powered?",
            "options": [
                "A self-driving car",
                "A smart fridge",
                "A normal wristwatch",
                "Google Search"
            ],
            "correctAnswer": "A normal wristwatch"
        },
        {
            "question": "Which AI technology is commonly used in self-driving cars?",
            "options": [
                "Blockchain",
                "Reinforcement Learning",
                "Image Processing",
                "Augmented Reality"
            ],
            "correctAnswer": "Reinforcement Learning"
        },
        {
            "question": "Which algorithm is used in the Game tree to make decisions of Win/Lose?",
            "options": [
                "Min/Max algorithm",
                "Greedy Search Algorithm",
                "DFS/BFS algorithm",
                "Heuristic Search Algorithm"
            ],
            "correctAnswer": "Min/Max algorithm"
        }
    ],
    "square": [
        {
            "question": "What does AI stand for?",
            "options": [
                "Automated Intelligence",
                "Artificial Information",
                "Artificial Intelligence",
                "Automated Interaction"
            ],
            "correctAnswer": "Artificial Intelligence"
        },
        {
            "question": "What is an AI model?",
            "options": [
                " A blueprint for making robots",
                "A new type of smartphone",
                "A program that learns from data to make decisions",
                "A social media account"
            ],
            "correctAnswer": "A program that learns from data to make decisions"
        },
        {
            "question": "Which AI technology is used in chatbots like ChatGPT?",
            "options": [
                "Deep Learning",
                "Machine Learning",
                "Natural Language Processing",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "question": "What does AI mainly focus on?",
            "options": [
                "Making robots dance",
                "Creating smart machines",
                "Playing video games",
                " Writing novels"
            ],
            "correctAnswer": "Creating smart machines"
        },
        {
            "question": "Which language is most commonly used for AI programming?",
            "options": [
                "Java",
                "Python",
                "HTML",
                "CSS"
            ],
            "correctAnswer": "Python"
        },
        {
            "question": "What does AI use to learn and improve from data?",
            "options": [
                "Magic",
                "Machine Learning",
                "Coding Errors",
                "Antivirus Software"
            ],
            "correctAnswer": "Machine Learning"
        },
        {
            "question": "The main tasks of an AI agent are_______.",
            "options": [
                "Input and Output",
                "Moment and Humanly Actions",
                "Perceiving, thinking, and acting on the environment",
                "None of the above"
            ],
            "correctAnswer": "Perceiving, thinking, and acting on the environment"
        },
        {
            "question": "What feature in smartphones allows voice control using AI?",
            "options": [
                "Bluetooth",
                "Voice Assistant",
                " Battery Saver",
                "Wallpaper Changer"
            ],
            "correctAnswer": "Voice Assistant"
        },
        {
            "question": "What is state space in AI?",
            "options": [
                "A collection of all the problem states",
                "A specific problem state out of all problem states",
                "Both a and b",
                "None of the above"
            ],
            "correctAnswer": "A collection of all the problem states"
        },
        {
            "question": "Which of the following is not an application of Artificial Intelligence?",
            "options": [
                "Natural Language Processing",
                "Computer Vision",
                "Database Management System",
                "Digital Assistant"
            ],
            "correctAnswer": "Database Management System"
        },
        {
            "question": "What AI feature suggests words while typing?",
            "options": [
                "Screen saver",
                "Copy-paste",
                "Auto-fill",
                "Recycle bin"
            ],
            "correctAnswer": "Auto-fill"
        },
        {
            "question": "Which AI feature in mobile cameras helps improve image quality?",
            "options": [
                " Night mode",
                "Auto-brightness",
                "AI-powered filters",
                " Low battery warning"
            ],
            "correctAnswer": "AI-powered filters"
        },
        {
            "question": "Which of the following is NOT AI-powered?",
            "options": [
                "A self-driving car",
                "A smart fridge",
                "A normal wristwatch",
                "Google Search"
            ],
            "correctAnswer": "A normal wristwatch"
        },
        {
            "question": "Which AI technology is commonly used in self-driving cars?",
            "options": [
                "Blockchain",
                "Reinforcement Learning",
                "Image Processing",
                "Augmented Reality"
            ],
            "correctAnswer": "Reinforcement Learning"
        },
        {
            "question": "Which algorithm is used in the Game tree to make decisions of Win/Lose?",
            "options": [
                "Min/Max algorithm",
                "Greedy Search Algorithm",
                "DFS/BFS algorithm",
                "Heuristic Search Algorithm"
            ],
            "correctAnswer": "Min/Max algorithm"
        }
    ],
    "triangle": [
        {
            "question": "What does AI stand for?",
            "options": [
                "Automated Intelligence",
                "Artificial Information",
                "Artificial Intelligence",
                "Automated Interaction"
            ],
            "correctAnswer": "Artificial Intelligence"
        },
        {
            "question": "What is an AI model?",
            "options": [
                " A blueprint for making robots",
                "A new type of smartphone",
                "A program that learns from data to make decisions",
                "A social media account"
            ],
            "correctAnswer": "A program that learns from data to make decisions"
        },
        {
            "question": "Which AI technology is used in chatbots like ChatGPT?",
            "options": [
                "Deep Learning",
                "Machine Learning",
                "Natural Language Processing",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "question": "What does AI mainly focus on?",
            "options": [
                "Making robots dance",
                "Creating smart machines",
                "Playing video games",
                " Writing novels"
            ],
            "correctAnswer": "Creating smart machines"
        },
        {
            "question": "Which language is most commonly used for AI programming?",
            "options": [
                "Java",
                "Python",
                "HTML",
                "CSS"
            ],
            "correctAnswer": "Python"
        },
        {
            "question": "What does AI use to learn and improve from data?",
            "options": [
                "Magic",
                "Machine Learning",
                "Coding Errors",
                "Antivirus Software"
            ],
            "correctAnswer": "Machine Learning"
        },
        {
            "question": "The main tasks of an AI agent are_______.",
            "options": [
                "Input and Output",
                "Moment and Humanly Actions",
                "Perceiving, thinking, and acting on the environment",
                "None of the above"
            ],
            "correctAnswer": "Perceiving, thinking, and acting on the environment"
        },
        {
            "question": "What feature in smartphones allows voice control using AI?",
            "options": [
                "Bluetooth",
                "Voice Assistant",
                " Battery Saver",
                "Wallpaper Changer"
            ],
            "correctAnswer": "Voice Assistant"
        },
        {
            "question": "What is state space in AI?",
            "options": [
                "A collection of all the problem states",
                "A specific problem state out of all problem states",
                "Both a and b",
                "None of the above"
            ],
            "correctAnswer": "A collection of all the problem states"
        },
        {
            "question": "Which of the following is not an application of Artificial Intelligence?",
            "options": [
                "Natural Language Processing",
                "Computer Vision",
                "Database Management System",
                "Digital Assistant"
            ],
            "correctAnswer": "Database Management System"
        },
        {
            "question": "What AI feature suggests words while typing?",
            "options": [
                "Screen saver",
                "Copy-paste",
                "Auto-fill",
                "Recycle bin"
            ],
            "correctAnswer": "Auto-fill"
        },
        {
            "question": "Which AI feature in mobile cameras helps improve image quality?",
            "options": [
                " Night mode",
                "Auto-brightness",
                "AI-powered filters",
                " Low battery warning"
            ],
            "correctAnswer": "AI-powered filters"
        },
        {
            "question": "Which of the following is NOT AI-powered?",
            "options": [
                "A self-driving car",
                "A smart fridge",
                "A normal wristwatch",
                "Google Search"
            ],
            "correctAnswer": "A normal wristwatch"
        },
        {
            "question": "Which AI technology is commonly used in self-driving cars?",
            "options": [
                "Blockchain",
                "Reinforcement Learning",
                "Image Processing",
                "Augmented Reality"
            ],
            "correctAnswer": "Reinforcement Learning"
        },
        {
            "question": "Which algorithm is used in the Game tree to make decisions of Win/Lose?",
            "options": [
                "Min/Max algorithm",
                "Greedy Search Algorithm",
                "DFS/BFS algorithm",
                "Heuristic Search Algorithm"
            ],
            "correctAnswer": "Min/Max algorithm"
        }
    ],
    "star": [
        {
            "question": "What does AI stand for?",
            "options": [
                "Automated Intelligence",
                "Artificial Information",
                "Artificial Intelligence",
                "Automated Interaction"
            ],
            "correctAnswer": "Artificial Intelligence"
        },
        {
            "question": "What is an AI model?",
            "options": [
                " A blueprint for making robots",
                "A new type of smartphone",
                "A program that learns from data to make decisions",
                "A social media account"
            ],
            "correctAnswer": "A program that learns from data to make decisions"
        },
        {
            "question": "Which AI technology is used in chatbots like ChatGPT?",
            "options": [
                "Deep Learning",
                "Machine Learning",
                "Natural Language Processing",
                "All of the above"
            ],
            "correctAnswer": "All of the above"
        },
        {
            "question": "What does AI mainly focus on?",
            "options": [
                "Making robots dance",
                "Creating smart machines",
                "Playing video games",
                " Writing novels"
            ],
            "correctAnswer": "Creating smart machines"
        },
        {
            "question": "Which language is most commonly used for AI programming?",
            "options": [
                "Java",
                "Python",
                "HTML",
                "CSS"
            ],
            "correctAnswer": "Python"
        },
        {
            "question": "What does AI use to learn and improve from data?",
            "options": [
                "Magic",
                "Machine Learning",
                "Coding Errors",
                "Antivirus Software"
            ],
            "correctAnswer": "Machine Learning"
        },
        {
            "question": "The main tasks of an AI agent are_______.",
            "options": [
                "Input and Output",
                "Moment and Humanly Actions",
                "Perceiving, thinking, and acting on the environment",
                "None of the above"
            ],
            "correctAnswer": "Perceiving, thinking, and acting on the environment"
        },
        {
            "question": "What feature in smartphones allows voice control using AI?",
            "options": [
                "Bluetooth",
                "Voice Assistant",
                " Battery Saver",
                "Wallpaper Changer"
            ],
            "correctAnswer": "Voice Assistant"
        },
        {
            "question": "What is state space in AI?",
            "options": [
                "A collection of all the problem states",
                "A specific problem state out of all problem states",
                "Both a and b",
                "None of the above"
            ],
            "correctAnswer": "A collection of all the problem states"
        },
        {
            "question": "Which of the following is not an application of Artificial Intelligence?",
            "options": [
                "Natural Language Processing",
                "Computer Vision",
                "Database Management System",
                "Digital Assistant"
            ],
            "correctAnswer": "Database Management System"
        },
        {
            "question": "What AI feature suggests words while typing?",
            "options": [
                "Screen saver",
                "Copy-paste",
                "Auto-fill",
                "Recycle bin"
            ],
            "correctAnswer": "Auto-fill"
        },
        {
            "question": "Which AI feature in mobile cameras helps improve image quality?",
            "options": [
                " Night mode",
                "Auto-brightness",
                "AI-powered filters",
                " Low battery warning"
            ],
            "correctAnswer": "AI-powered filters"
        },
        {
            "question": "Which of the following is NOT AI-powered?",
            "options": [
                "A self-driving car",
                "A smart fridge",
                "A normal wristwatch",
                "Google Search"
            ],
            "correctAnswer": "A normal wristwatch"
        },
        {
            "question": "Which AI technology is commonly used in self-driving cars?",
            "options": [
                "Blockchain",
                "Reinforcement Learning",
                "Image Processing",
                "Augmented Reality"
            ],
            "correctAnswer": "Reinforcement Learning"
        },
        {
            "question": "Which algorithm is used in the Game tree to make decisions of Win/Lose?",
            "options": [
                "Min/Max algorithm",
                "Greedy Search Algorithm",
                "DFS/BFS algorithm",
                "Heuristic Search Algorithm"
            ],
            "correctAnswer": "Min/Max algorithm"
        }
    ]
};

let currentSet = '';
let currentQuestionIndex = 0;
let correctAnswers = 0;
let extraLife = 0;  // 0 means no extra life, 1 means extra life is available
let timer;
let timeRemaining = 180; // 3 minutes (180 seconds)
let timerRunning = false; // Flag to check if timer is running

// Set up event listeners to start the quiz
document.getElementById("circle").addEventListener("click", () => startQuiz('circle'));
document.getElementById("square").addEventListener("click", () => startQuiz('square'));
document.getElementById("triangle").addEventListener("click", () => startQuiz('triangle'));
document.getElementById("star").addEventListener("click", () => startQuiz('star'));

// Initialize or resume quiz from sessionStorage
function initializeQuiz() {
    const storedProgress = JSON.parse(sessionStorage.getItem('quizProgress'));
    const storedBackgroundColor = sessionStorage.getItem('backgroundColor');
    const isQuizFailed = sessionStorage.getItem('quizFailed');

    // If quiz was previously failed, lock the background color and disable all buttons
    if (isQuizFailed === 'true') {
        document.body.style.backgroundColor = "red";
        disableAnswerButtons();
    }

    if (storedProgress) {
        // Resume quiz progress
        currentSet = storedProgress.currentSet;
        currentQuestionIndex = storedProgress.currentQuestionIndex;
        correctAnswers = storedProgress.correctAnswers;
        extraLifeGiven = storedProgress.extraLifeGiven || false;
        loadQuestion();
        
        // Disable shape selection buttons to prevent re-selection
        disableShapeSelection();
    } else {
        // Show the shape selection page
        document.getElementById("shape-selection").style.display = "block";
    }
}

// Update the timer display every second
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeRemaining <= 0) {
        clearInterval(timer); // Stop the timer
        quizFailed(); // Trigger failure if time runs out
    } else {
        timeRemaining--; // Decrease time remaining
    }
}

function startQuiz(shape) {
    document.getElementById("quiz-container").style.marginTop="0px"
    // Prevent re-selection if quiz is already started
    if (sessionStorage.getItem('quizProgress') || sessionStorage.getItem('quizFailed') === 'true') return;

    // Start the timer
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(updateTimer, 1000); // Update every second
    }
    currentSet = shape;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    extraLifeGiven = false;
    
    // Save the initial state in sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({ currentSet, currentQuestionIndex, correctAnswers }));

    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("shape-selection").style.display = "none";
    disableShapeSelection();
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentSet][currentQuestionIndex];
    
    // Update the question text inside the speech bubble
    document.querySelector('.speech-bubble').innerText = questionData.question;

    document.getElementById("quiz-title").innerText = `${currentSet.charAt(0).toUpperCase() + currentSet.slice(1)} Quiz`;
    
    // Render the options for the current question
    document.getElementById("question-container").innerHTML = `
        <div id="options-container">
            ${questionData.options.map(option => `
                <button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>
            `).join('')}
        </div>
    `;
}

function updateProgress() {
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");
    
    let progressPercentage = (correctAnswers / 10) * 100; // Assuming 10 questions total
    progressBar.value = progressPercentage;
    progressText.innerText = `${progressPercentage}%`;
}

function quizFailed() {
    // Set background color to red and show the message
    document.body.style.backgroundColor = "red";
    document.getElementById("result-message").innerText = "Time's up! You failed the quiz.";
    
    // Disable all buttons
    disableAnswerButtons();

    // Store the failed state in sessionStorage
    sessionStorage.setItem('quizFailed', 'true');
}

// Disable shape selection after the quiz starts
function disableShapeSelection() {
    document.getElementById("circle").disabled = true;
    document.getElementById("square").disabled = true;
    document.getElementById("triangle").disabled = true;
    document.getElementById("star").disabled = true;
}

// Disable answer selection (buttons) after incorrect answer is selected
function disableAnswerButtons() {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Check the selected answer
function checkAnswer(selectedOption) {
    const questionData = quizData[currentSet][currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;

    if (selectedOption === correctAnswer) {
        correctAnswers++;
        updateProgress();
        document.getElementById("question-container").classList.add("correct");
        if (correctAnswers === 5 && extraLife === 0) {
            extraLife = 1; // Extra life earned
            addlife(); // Show "extra life earned" modal
        }
    } else {
        // If student has completed 5 questions correctly, give them an extra life
        if (extraLife === 1) {
            // If they have an extra life and answer incorrectly, show "extra life taken" modal
            extraLife = 0; // Revoke the extra life
            showModal(); // Show custom modal instead of alert
            sessionStorage.setItem('quizProgress', JSON.stringify({
                currentSet,
                currentQuestionIndex: currentQuestionIndex + 1,
                correctAnswers,
                extraLifeGiven,
                progress: (correctAnswers / 10) * 100
            }));
            return;
        }

        // If no extra life left, game over
        // Set background color to red and lock it
        document.body.style.backgroundColor = "red";
        document.getElementById("result-message").innerText = "You are Dead, please take your Soul and leave...";

        // Save the failed state in sessionStorage
        sessionStorage.setItem('quizFailed', 'true');

        // Disable all answer buttons
        disableAnswerButtons();

        // Store the failed state in sessionStorage
        sessionStorage.setItem('backgroundColor', 'red');
        clearInterval(timer); // Stop the timer on failure
        return;
    }

    // Save progress in sessionStorage
    sessionStorage.setItem('quizProgress', JSON.stringify({
        currentSet,
        currentQuestionIndex: currentQuestionIndex + 1,
        correctAnswers,
        extraLifeGiven
    }));

    if (currentQuestionIndex === 9) {
        if (correctAnswers === 10) {
            document.body.style.backgroundColor = "green";
            disableAnswerButtons();
            disableShapeSelection();
            
            document.getElementById("result-message").innerText = "Congratulations player... moving towards the next Stage";
        } else {
            document.body.style.backgroundColor = "red";
            document.getElementById("result-message").innerText = "Game Over, try again!";
        }
        clearInterval(timer); // Stop the timer on quiz completion
        return;
    }

    currentQuestionIndex++;
    loadQuestion();
}

// Function to show the modal when extra life is earned
function addlife() {
    document.getElementById("add-life-modal").style.display = "flex";
}

// Function to close the extra life earned modal
function closeaddlife() {
    document.getElementById("add-life-modal").style.display = "none";
}

// Function to show the modal
function showModal() {
    document.getElementById("extra-life-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("extra-life-modal").style.display = "none";
}

// Call this function to initialize the quiz when the page is loaded
initializeQuiz();
