const quoteArray = ['Good morning! Let\'s make today amazing!',
    'You\'ve got this! One step at a time.',
    'Believe in yourself! You\'re stronger than you think.',
    'Stay positive and keep pushing forward!',
    'Every small step counts. Keep going!',
    'Take a deep breath, and let\'s conquer this day!',
    'You can do it! Just focus on one task at a time.',
    'Remember, progress is progress, no matter how small.',
    'Keep your head up and stay determined!',
    'I\'m cheering for you! Let\'s make today productive.',
    'You\'re doing great! Keep up the good work!',
    'Stay motivated and believe in your abilities.',
    'Every effort you put in brings you closer to your goal.',
    'Don\'t forget to take breaks and recharge!',
    'Your hard work will pay off. Keep pushing!',
    'You are capable of amazing things!',
    'Let\'s tackle today\'s challenges together!',
    'Stay focused and keep moving forward.',
    'You\'re making progress, and that\'s what matters!',
    'Stay positive, stay productive!',
    'You\'ve got the power to make today awesome!',
    'Believe in the magic of new beginnings.',
    'One task at a time, and you\'ll get there!',
    'Keep your eyes on the prize!',
    'Let\'s make today a masterpiece!',
    'You\'re unstoppable! Keep that momentum going.',
    'Remember, you are braver than you believe.',
    'Let\'s turn today\'s challenges into opportunities.',
    'Stay focused, stay determined, and you\'ll succeed.',
    'Every day is a new chance to shine!',
    'You\'re amazing, just the way you are!',
    'Let\'s make today productive and fun!',
    'Stay strong, stay positive!',
    'You can achieve anything you set your mind to!',
    'Keep going, you\'re doing great!',
    'Let\'s make today a day to remember!',
    'You\'re a star! Keep shining bright.',
    'Stay focused, and let\'s achieve greatness!',
    'Your hard work is inspiring!',
    'Let\'s make today a productive adventure!'
];

function quote() {

    const randomElement = Math.floor(Math.random() * quoteArray.length);
    /*
    let motiveQuote = document.getElementById("motiveId");
    motiveQuote.innerHTML = quoteArray[randomElement]; */
    document.getElementById("motivId").innerHTML = quoteArray[randomElement];
}