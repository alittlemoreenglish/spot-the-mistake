const sentences = [
    {
        text: "She have been working here for five years.",
        mistake: "have",
        correct: "has"
    },
    {
        text: "The children was playing in the park.",
        mistake: "was",
        correct: "were"
    },
    {
        text: "He writed a letter to his friend.",
        mistake: "writed",
        correct: "wrote"
    },
    {
        text: "They are going to went to the movies.",
        mistake: "went",
        correct: "go"
    },
    {
        text: "The car need a new battery.",
        mistake: "need",
        correct: "needs"
    },
    {
        text: "She is more taller than her brother.",
        mistake: "more",
        correct: "much"
    },
    {
        text: "He don't know the answer.",
        mistake: "don't",
        correct: "doesn't"
    },
    {
        text: "Their going to the concert tonight.",
        mistake: "Their",
        correct: "They're"
    },
    {
        text: "This cake taste delicious.",
        mistake: "taste",
        correct: "tastes"
    },
    {
        text: "I can't beleive it's already Friday.",
        mistake: "beleive",
        correct: "believe"
    },
    {
        text: "She sing beautifully.",
        mistake: "sing",
        correct: "sings"
    },
    {
        text: "He has went to the store.",
        mistake: "went",
        correct: "gone"
    },
    {
        text: "The childrens are playing in the park.",
        mistake: "childrens",
        correct: "children"
    },
    {
        text: "She gave me a peice of cake.",
        mistake: "peice",
        correct: "piece"
    },
    {
        text: "The team have won the match.",
        mistake: "have",
        correct: "has"
    },
    {
        text: "She catched the ball.",
        mistake: "catched",
        correct: "caught"
    },
    {
        text: "He will explains the process.",
        mistake: "explains",
        correct: "explain"
    },
    {
        text: "The dog chased it's tail.",
        mistake: "it's",
        correct: "its"
    },
    {
        text: "We seen the movie last night.",
        mistake: "seen",
        correct: "saw"
    },
    {
        text: "She is the better player in the team.",
        mistake: "better",
        correct: "best"
    },
    {
        text: "They is going to the party.",
        mistake: "is",
        correct: "are"
    },
    {
        text: "I red the book yesterday.",
        mistake: "red",
        correct: "read"
    },
    {
        text: "The book is laying on the table",
        mistake: "laying",
        correct: "lying"
    },
      {
        text: "She don't like chocolate.",
        mistake: "don't",
        correct: "doesn't"
    },
    {
        text: "The dog chased it's own tail.",
        mistake: "it's",
        correct: "its"
    },
    {
        text: "He has ate all the cookies.",
        mistake: "ate",
        correct: "eaten"
    },
    {
        text: "Her dress is more prettier than mine.",
        mistake: "more",
        correct: "much"
    },
    {
        text: "The cat licked it's paws.",
        mistake: "it's",
        correct: "its"
    },
    {
        text: "She gived me a gift.",
        mistake: "gived",
        correct: "gave"
    },
    {
        text: "He runned to catch the bus.",
        mistake: "runned",
        correct: "ran"
    },
    {
        text: "They was excited about the trip.",
        mistake: "was",
        correct: "were"
    },
    {
        text: "The milk is spilt on the floor.",
        mistake: "spilt",
        correct: "spilled"
    },
    {
        text: "I goed to the park yesterday.",
        mistake: "goed",
        correct: "went"
    },
    {
        text: "She buyed a new phone.",
        mistake: "buyed",
        correct: "bought"
    },
    {
        text: "The boy have three sisters.",
        mistake: "have",
        correct: "has"
    },
    {
        text: "He was sleeped during the class.",
        mistake: "sleeped",
        correct: "asleep"
    },
    {
        text: "I seen her at the mall.",
        mistake: "seen",
        correct: "saw"
    },
    {
        text: "She eated all the pizza.",
        mistake: "eated",
        correct: "ate"
    },
    {
        text: "The plant need water.",
        mistake: "need",
        correct: "needs"
    },
    {
        text: "They has finished the project.",
        mistake: "has",
        correct: "have"
    },
    {
        text: "He maked a delicious cake.",
        mistake: "maked",
        correct: "made"
    },
    {
        text: "She was happyer than before.",
        mistake: "happyer",
        correct: "happier"
    },
    {
        text: "The dog chased it's tail around.",
        mistake: "it's",
        correct: "its"
    },
    {
        text: "He don't like pizza.",
        mistake: "don't",
        correct: "doesn't"
    },
    {
        text: "We was waiting for the bus.",
        mistake: "was",
        correct: "were"
    },
    {
        text: "Their going to the mall later.",
        mistake: "Their",
        correct: "They're"
    },
    {
        text: "She sing very well.",
        mistake: "sing",
        correct: "sings"
    },
    {
        text: "I have went to the store.",
        mistake: "went",
        correct: "gone"
    },
    {
        text: "The movie was to long.",
        mistake: "to",
        correct: "too"
    },
    {
        text: "He should of called earlier.",
        mistake: "of",
        correct: "have"
    },
    {
        text: "Your the best friend I have.",
        mistake: "Your",
        correct: "You're"
    },
    {
        text: "They has finished their homework.",
        mistake: "has",
        correct: "have"
    },
    {
        text: "She didn't knew the answer.",
        mistake: "knew",
        correct: "know"
    },
    {
        text: "Its a beautiful day.",
        mistake: "Its",
        correct: "It's"
    },
    {
        text: "I seen him yesterday.",
        mistake: "seen",
        correct: "saw"
    },
    {
        text: "They're going too the beach.",
        mistake: "too",
        correct: "to"
    },
    {
        text: "She don't know the answer.",
        mistake: "don't",
        correct: "doesn't"
    },
    {
        text: "We was very tired.",
        mistake: "was",
        correct: "were"
    },
    {
        text: "There going to the concert.",
        mistake: "There",
        correct: "They're"
    },
    {
        text: "He has wrote three books.",
        mistake: "wrote",
        correct: "written"
    },
    {
        text: "Could you borrow me some money?",
        mistake: "borrow",
        correct: "lend"
    },
    {
        text: "They're cat is very cute.",
        mistake: "They're",
        correct: "Their"
    },
    {
        text: "He don't have a car.",
        mistake: "don't",
        correct: "doesn't"
    },
    {
        text: "The dog wagged it's tail",
        mistake: "it's",
        correct: "its"
    },
    {
        text: "We was going to the party.",
        mistake: "was",
        correct: "were"
    },
    {
        text: "She has went to the market.",
        mistake: "went",
        correct: "gone"
    },
    {
        text: "There coming over later.",
        mistake: "There",
        correct: "They're"
    },
    {
        text: "He didn't saw the sign.",
        mistake: "saw",
        correct: "see"
    },
    {
        text: "The cake was to sweet.",
        mistake: "to",
        correct: "too"
    },
    {
        text: "He has broke his phone.",
        mistake: "broke",
        correct: "broken"
    },
    {
        text: "Your welcome to join us.",
        mistake: "Your",
        correct: "You're"
    },
    {
        text: "She has went to the store.",
        mistake: "went",
        correct: "gone"
    },
    {
        text: "He was their last week.",
        mistake: "their",
        correct: "there"
    },
    {
        text: "I didn't spoke to him yet.",
        mistake: "spoke",
        correct: "speak"
    },
    {
        text: "The book is laying on the table.",
        mistake: "laying",
        correct: "lying"
    },
    {
        text: "I haven't ate breakfast yet",
        mistake: "ate",
        correct: "eaten"
    },
    {
        text: "Its going to rain tomorrow.",
        mistake: "Its",
        correct: "It's"
    },
    {
        text: "I could of helped you.",
        mistake: "of",
        correct: "have"
    },
    {
        text: "They're house is beautiful.",
        mistake: "They're",
        correct: "Their"
    },
    {
        text: "He didn't went to school.",
        mistake: "went",
        correct: "go"
    },
    {
        text: "The cat licked it's paw.",
        mistake: "it's",
        correct: "its"
    },
    {
        text: "I seen that movie already.",
        mistake: "seen",
        correct: "saw"
    },
    {
        text: "She was more smarter than him.",
        mistake: "more",
        correct: "much"
    },
    {
        text: "Your going to love this movie.",
        mistake: "Your",
        correct: "You're"
    },
    {
        text: "He has gave me the keys.",
        mistake: "gave",
        correct: "given"
    },
    {
        text: "The team are playing well.",
        mistake: "are",
        correct: "is"
    },
    {
        text: "I should of called you earlier.",
        mistake: "of",
        correct: "have"
    },
    {
        text: "She don't want to go.",
        mistake: "don't",
        correct: "doesn't"
    }
];

let currentSentenceIndex = 0;
let selectedWord = null;
let correctCount = 0;
let remainingSentences = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeRemainingSentences() {
    remainingSentences = [...Array(sentences.length).keys()];
    shuffleArray(remainingSentences);
}

function displaySentence() {
    const sentenceContainer = document.getElementById('sentence-container');
    const words = sentences[currentSentenceIndex].text.split(' ');
    
    sentenceContainer.innerHTML = words
        .map(word => `<span class="word">${word}</span>`)
        .join(' ');
    
    document.querySelectorAll('.word').forEach(wordElement => {
        wordElement.addEventListener('click', () => handleWordClick(wordElement));
    });
}

function handleWordClick(wordElement) {
    const clickedWord = wordElement.textContent;
    const correctMistake = sentences[currentSentenceIndex].mistake;
    
    if (clickedWord === correctMistake) {
        selectedWord = wordElement;
        document.getElementById('correction-box').classList.remove('hidden');
        document.getElementById('correction-input').focus();
    } else {
        showFeedback("That's not the incorrect word. Try again!", false);
    }
}

function checkCorrection() {
    const userCorrection = document.getElementById('correction-input').value.trim();
    const correctWord = sentences[currentSentenceIndex].correct;
    
    if (userCorrection.toLowerCase() === correctWord.toLowerCase()) {
        selectedWord.textContent = correctWord;
        selectedWord.style.backgroundColor = '#dff0d8';
        correctCount++;
        document.getElementById('counter').textContent = correctCount;
        showFeedback("Correct! Well done!", true);
        document.getElementById('submit-correction').classList.add('hidden');
        document.getElementById('next-sentence').classList.remove('hidden');
    } else {
        showFeedback("That's not the correct word. Try again!", false);
    }
}

function showFeedback(message, isCorrect) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.classList.remove('hidden');
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
}

function nextSentence() {
    if (remainingSentences.length === 0) {
        // All sentences have been shown, reset the game
        initializeRemainingSentences();
        correctCount = 0;
        document.getElementById('counter').textContent = correctCount;
    }
    
    currentSentenceIndex = remainingSentences.pop();
    
    // Reset UI
    document.getElementById('correction-box').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('submit-correction').classList.remove('hidden');
    document.getElementById('next-sentence').classList.add('hidden');
    document.getElementById('correction-input').value = '';
    selectedWord = null;
    
    displaySentence();
}

// Initialize
document.getElementById('submit-correction').addEventListener('click', checkCorrection);
document.getElementById('next-sentence').addEventListener('click', nextSentence);
document.getElementById('correction-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkCorrection();
    }
});

initializeRemainingSentences();
currentSentenceIndex = remainingSentences.pop();
displaySentence();
