const quizInfo = [{
        question: "What is Ed Sheeran's middle name?",
        answer: "Christopher",
        optionOne: "Tucker",
        optionTwo: "Hoyt",
        optionThree: "Smith",
        optionFour: "Christopher"
    },
    {
        question: "His First Album?",
        answer: "+",
        optionOne: "+",
        optionTwo: "=",
        optionThree: "x",
        optionFour: "%"

    },
    {
        question: "His Last album was released?",
        answer: "2019",
        optionOne: "2019",
        optionTwo: "2016",
        optionThree: "2017",
        optionFour: "2018"
    },
    {
        question: "Name of His Favorite Guitar",
        answer: "James II",
        optionOne: "Trevor",
        optionTwo: "Murray",
        optionThree: "James II",
        optionFour: "Nigel"
    },
];


const question = quizIterator(quizInfo);

nextQuestion();

let actualScore = 0;


const addScore = (button) => {
    if(button.classList.contains("correct")) {
        actualScore++;
        let val = actualScore;
        let score = document.getElementById("score");
        score.innerHTML = `${actualScore}`;
    }
}

function totalScore() {
    let main = document.getElementById("main");
    main.innerHTML = `<h1 class="result"> Quiz Completed <br> Your Score Is : <br> ${actualScore} out of 4</h1>`;
}

function nextQuestion() {

    const currQuestion = question.next().value;

    let optiona = document.getElementById("optiona");
    let optionb = document.getElementById("optionb");
    let optionc = document.getElementById("optionc");
    let optiond = document.getElementById("optiond");
    let heading = document.getElementById("question");


    if (currQuestion !== undefined) {

        heading.innerHTML = currQuestion.question;
        optiona.innerHTML = currQuestion.optionOne;
        optionb.innerHTML = currQuestion.optionTwo;
        optionc.innerHTML = currQuestion.optionThree;
        optiond.innerHTML = currQuestion.optionFour;

    } else {
        totalScore();
    }
}


function quizIterator(question) {
    let nextQuest = 0;

    return {
        next: function () {
            return nextQuest < question.length ?
            {value: question[nextQuest++], done: false} :
            {done: true}
        }
    };

}


let opts = document.querySelectorAll(".opt");

let optArr = Array.from(opts);

console.log(optArr);

optArr.forEach(function(opts, index, optArr) {
    optArr[index].addEventListener("click", () => {
          const realAns = quizInfo.map(function(pick){
             return pick.answer;
            });
        
        let but = optArr[index].textContent;
        
        let viewAns = realAns.includes(but);
        
        if(viewAns){
             optArr[index].classList.add("correct");
            setTimeout(() => {
                optArr[index].classList.remove("correct");
                nextQuestion();
            }, 500);
        }else{
            optArr[index].classList.add("wrong");
            setTimeout(() => {
                optArr[index].classList.remove("wrong");
                nextQuestion();
            }, 500);
        }
        addScore(optArr[index]);
        
    });
});

