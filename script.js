let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let lessonButton = document.getElementById("lesson-button");
let questionCount;
let scoreCount = 0;
let count = 61;
let countdown;

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const lessonContainer = document.getElementById("lesson-container");
const closeLesson = document.getElementById("close-lesson");
const words = document.querySelectorAll('.word');


const quizArray = [
  {
    id: "0",
    question: "Anong alpabeto ang binubuo ng tatlong patinig at labing-apat na katinig?",
    options: ["Sanskrito", "Baybayin", "Abecedario", "Alibata"],
    correct: "Alibata",
  },
  {
    id: "1",
    question: "Ano ang tinatawag na sinaunang alpabeto ng mga Pilipino bago dumating ang mga Espanyol?",
    options: ["Baybayin", "Alibata", "Abakada", "Abecedario"],
    correct: "Baybayin",
  },
  {
    id: "2",
    question: "Ano ang kahulugan ng 'DIN' at 'DAW'?",
    options: [
      "Ginagamit kapag ang sinusundang salita ay nagtatapos sa patinig",
      "Ginagamit kapag ang sinusundang salita ay nagtatapos sa katinig maliban sa w at y",
      "Ginagamit sa gitna ng pandiwang inuulit",
      "Ginagamit bilang pananda sa mga salitang pang-uri"
    ],
    correct: "Ginagamit kapag ang sinusundang salita ay nagtatapos sa katinig maliban sa w at y",
  },
  {
    id: "3",
    question: "Ano ang tamang gamit ng 'ng'?",
    options: [
      "Kasunod ng mga pang-uring pamilang",
      "Sa gitna ng mga pandiwang inuulit",
      "Kapag sinusundang salita ay nagtatapos sa w at y",
      "Sa unahan ng pangungusap bilang panghalip"
    ],
    correct: "Kasunod ng mga pang-uring pamilang",
  },
  {
    id: "4",
    question: "Ano ang ginagamit sa gitna ng mga pandiwang inuulit?",
    options: ["Ng", "Nang", "Rin", "Raw"],
    correct: "Nang",
  },
  {
    id: "5",
    question: "Ano ang hakbang na tumutukoy sa pagkilala sa mga nakalimbag na simbolo?",
    options: ["Komprehensyon", "Reaksyon", "Persepsyon", "Asimilasyon"],
    correct: "Persepsyon",
  },
  {
    id: "6",
    question: "Ano ang tinatawag na proseso ng pagkuha ng mga ideya mula sa nakalimbag na simbolo?",
    options: ["Persepsyon", "Pagbasa", "Asimilasyon", "Reaksyon"],
    correct: "Pagbasa",
  },
  {
    id: "7",
    question: "Anong uri ng pagbasa ang ginagawa upang makuha ang pangkalahatang ideya?",
    options: ["Iskaning", "Iskimming", "Re-reading", "Kaswal"],
    correct: "Iskimming",
  },
  {
    id: "8",
    question: "Ano ang ginagawa sa 'Re-reading'?",
    options: [
      "Mabilisang pagbasa",
      "Pagbasa ng pansamantala",
      "Paulit-ulit na pagbasa kapag mahirap unawain",
      "Pagbasa sa gitna ng mga pandiwang inuulit"
    ],
    correct: "Paulit-ulit na pagbasa kapag mahirap unawain",
  },
  {
    id: "9",
    question: "Ano ang kahulugan ng denotasyon?",
    options: [
      "Di-tuwirang kahulugan",
      "Matalinhagang kahulugan",
      "Karaniwang kahulugan mula sa diksyonaryo",
      "Pansamantalang kahulugan"
    ],
    correct: "Karaniwang kahulugan mula sa diksyonaryo",
  },
  {
    id: "10",
    question: "Ano ang proseso ng pag-ugnay ng bagong kaalaman sa mga dating kaalaman?",
    options: ["Komprehensyon", "Reaksyon", "Persepsyon", "Asimilasyon"],
    correct: "Asimilasyon",
  },
  {
    id: "11",
    question: "Ano ang ginagamit bilang pananda sa unahan ng pangungusap?",
    options: ["Katapora", "Anapora", "Substitusyon", "Reperensiya"],
    correct: "Katapora",
  },
  {
    id: "12",
    question: "Ano ang proseso ng pagtukoy ng mga kahulugan ng salitang bago sa pandinig?",
    options: ["Denotasyon", "Konotasyon", "Depinisyon", "Asimilasyon"],
    correct: "Depinisyon",
  },
  {
    id: "13",
    question: "Anong tekstong nagbibigay-diin sa pagkakatulad at pagkakaiba?",
    options: ["Paghahambing at Pagkokontrast", "Sanhi at Bunga", "Prosidyural", "Argumentatibo"],
    correct: "Paghahambing at Pagkokontrast",
  },
  {
    id: "14",
    question: "Ano ang tekstong nagpapaliwanag ng mga sanhi at epekto ng isang pangyayari?",
    options: ["Sanhi at Bunga", "Prosidyural", "Deskriptibo", "Problema at Solusyon"],
    correct: "Sanhi at Bunga",
  },
  {
    id: "15",
    question: "Ano ang gamit ng cohesive devices sa isang teksto?",
    options: [
      "Upang bigyan ng pansin ang pagkakaiba",
      "Upang pag-ugnayin ang mga bahagi ng teksto",
      "Upang magbigay ng kahulugan sa mga pang-uri",
      "Upang tukuyin ang tamang kaayusan ng mga salita"
    ],
    correct: "Upang pag-ugnayin ang mga bahagi ng teksto",
  },
  {
    id: "16",
    question: "Ano ang tawag sa mga salitang ginagamit bilang reperensiya sa pangungusap?",
    options: ["Substitusyon", "Reperensiya", "Anapora", "Katapora"],
    correct: "Reperensiya",
  },
  {
    id: "17",
    question: "Ano ang kahulugan ng prosidyural na teksto?",
    options: [
      "Nagpapakita ng pagkakatulad at pagkakaiba",
      "Naglalahad ng mga solusyon sa isang problema",
      "Nagpapaliwanag ng mga hakbang upang makamit ang isang layunin",
      "Nagpapaliwanag ng sanhi at epekto"
    ],
    correct: "Nagpapaliwanag ng mga hakbang upang makamit ang isang layunin",
  },
  {
    id: "18",
    question: "Ano ang tawag sa tekstong naglalahad ng serye ng mga gawain upang matamo ang inaasahang resulta?",
    options: ["Sanhi at Bunga", "Prosidyural", "Problema at Solusyon", "Depinisyon"],
    correct: "Prosidyural",
  },
  {
    id: "19",
    question: "Ano ang uri ng pagbasa na ginagawa upang makakuha ng impormasyon?",
    options: ["Kaswal", "Pang-impormasyon", "Matiim", "Re-reading"],
    correct: "Pang-impormasyon",
  },
  {
    id: "20",
    question: "Ano ang ginagamit kapag ang sinusundang salita ay nagtatapos sa patinig?",
    options: ["Rin", "Din", "Raw", "Daw"],
    correct: "Rin",
  },
  {
    id: "21",
    question: "Ano ang ginagamit kapag ang sinusundang salita ay nagtatapos sa katinig?",
    options: ["Din", "Rin", "Raw", "Daw"],
    correct: "Din",
  },
  {
    id: "22",
    question: "Ano ang ginagamit bilang pamalit sa salitang inuulit?",
    options: ["Substitusyon", "Reperensiya", "Anapora", "Katapora"],
    correct: "Substitusyon",
  },
  {
    id: "23",
    question: "Ano ang pagkakaiba ng Anapora at Katapora?",
    options: [
      "Ang Anapora ay nasa unahan, ang Katapora ay nasa hulihan",
      "Ang Anapora ay nasa hulihan, ang Katapora ay nasa unahan",
      "Pareho lang ang Anapora at Katapora",
      "Ginagamit ang Anapora sa mga panghalip, ang Katapora sa pangngalan"
    ],
    correct: "Ang Anapora ay nasa hulihan, ang Katapora ay nasa unahan",
  },
  {
    id: "24",
    question: "Ano ang ibig sabihin ng 'Kaswal na pagbasa'?",
    options: [
      "Pagbasa ng pang-matagalang impormasyon",
      "Pansamantalang pagbasa habang may hinihintay",
      "Mabilisang pagbasa",
      "Paulit-ulit na pagbasa"
    ],
    correct: "Pansamantalang pagbasa habang may hinihintay",
  },
  {
    id: "25",
    question: "Ano ang tawag sa pagbasa upang makuha ang mahalagang ideya sa isang teksto?",
    options: ["Iskaning", "Iskimming", "Kaswal", "Re-reading"],
    correct: "Iskaning",
  },
  {
    id: "26",
    question: "Ano ang ginagamit kapag nais ipakita ang pagkakaiba o pagkakatulad?",
    options: ["Prosidyural", "Paghahambing at Pagkokontrast", "Sanhi at Bunga", "Problema at Solusyon"],
    correct: "Paghahambing at Pagkokontrast",
  },
  {
    id: "27",
    question: "Ano ang tawag sa tekstong nagbibigay solusyon sa mga suliranin?",
    options: ["Problema at Solusyon", "Sanhi at Bunga", "Depinisyon", "Prosidyural"],
    correct: "Problema at Solusyon",
  },
  {
    id: "28",
    question: "Ano ang ginagamit sa pagbibigay ng tiyak na kahulugan ng isang termino?",
    options: ["Depinisyon", "Denotasyon", "Konotasyon", "Cohesive Devices"],
    correct: "Depinisyon",
  },
  {
    id: "29",
    question: "Ano ang tekstong nagpapakita ng kaugnayan ng sanhi at epekto?",
    options: ["Prosidyural", "Sanhi at Bunga", "Paghahambing at Pagkokontrast", "Deskriptibo"],
    correct: "Sanhi at Bunga",
  },
  {
    id: "30",
    question: "Ano ang kahulugan ng 'Denotasyon'?",
    options: [
      "Matalinhagang kahulugan",
      "Karaniwang kahulugan",
      "Pansamantalang kahulugan",
      "Di-tuwirang kahulugan"
    ],
    correct: "Karaniwang kahulugan",
  },
  {
    id: "31",
    question: "Ano ang tekstong naglalahad ng katangian ng isang tao, bagay, o lugar?",
    options: ["Deskriptibo", "Prosidyural", "Argumentatibo", "Paghahambing at Pagkokontrast"],
    correct: "Deskriptibo",
  },
  {
    id: "32",
    question: "Ano ang kahulugan ng 'Konotasyon'?",
    options: [
      "Di-tuwirang kahulugan o matalinhagang kahulugan",
      "Karaniwang kahulugan mula sa diksyonaryo",
      "Kahulugan ng isang teknikal na salita",
      "Pag-uugnay ng salita"
    ],
    correct: "Di-tuwirang kahulugan o matalinhagang kahulugan",
  },
  {
    id: "33",
    question: "Ano ang gamit ng cohesive devices sa isang teksto?",
    options: [
      "Nag-uugnay ng mga bahagi ng pangungusap",
      "Nagbibigay kahulugan sa mga pang-uri",
      "Nagpapakita ng pagkakatulad",
      "Nagpapaliwanag ng mga hakbang"
    ],
    correct: "Nag-uugnay ng mga bahagi ng pangungusap",
  },
  {
    id: "34",
    question: "Ano ang tekstong nagpapakita ng pamamaraan ng paggawa ng isang bagay?",
    options: ["Prosidyural", "Paghahambing at Pagkokontrast", "Deskriptibo", "Problema at Solusyon"],
    correct: "Prosidyural",
  },
  {
    id: "35",
    question: "Ano ang gamit ng cohesive devices?",
    options: [
      "Upang mag-ugnay ng mga ideya sa loob ng teksto",
      "Upang magbigay ng teknikal na kahulugan",
      "Upang tukuyin ang layunin ng teksto",
      "Upang ilista ang mga pangungusap"
    ],
    correct: "Upang mag-ugnay ng mga ideya sa loob ng teksto",
  },
  {
    id: "36",
    question: "Anong uri ng pagbasa ang ginagawa upang makuha ang mahalagang impormasyon?",
    options: ["Iskaning", "Re-reading", "Kaswal", "Matiim"],
    correct: "Iskaning",
  },
  {
    id: "37",
    question: "Ano ang tawag sa uri ng pagbasa na naglalayong makakuha ng impormasyon para sa pagsulat ng isang report?",
    options: ["Pang-impormasyon", "Re-reading", "Kaswal", "Iskaning"],
    correct: "Pang-impormasyon",
  },
  {
    id: "38",
    question: "Ano ang pagkakaiba ng 'Prosidyural' at 'Depinisyon' na teksto?",
    options: [
      "Ang prosidyural ay nagpapaliwanag ng hakbang, ang depinisyon ay nagbibigay kahulugan",
      "Pareho silang nagbibigay ng kahulugan",
      "Pareho silang nagpapaliwanag ng hakbang",
      "Ang prosidyural ay nagbibigay solusyon sa problema"
    ],
    correct: "Ang prosidyural ay nagpapaliwanag ng hakbang, ang depinisyon ay nagbibigay kahulugan",
  },
  {
    id: "39",
    question: "Ano ang ginagamit upang tukuyin ang tiyak na pinaghanguan ng impormasyon sa isang teksto?",
    options: ["Reperensiya", "Substitusyon", "Anapora", "Katapora"],
    correct: "Reperensiya",
  }, 
];


restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});


nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    
    questionCount += 1;
    
    if (questionCount == quizArray.length) {
      
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      
      userScore.innerHTML =
         "Ang iyong marka na nakuha ay <br>" + scoreCount + " / " + questionCount;
    } else {
      
      countOfQuestion.innerHTML =
        questionCount + 1 + " / " + quizArray.length + " Tanong ";
    
      quizDisplay(questionCount);
      count = 61;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);


const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};


const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
 
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
 
  quizCards[questionCount].classList.remove("hide");
};


function quizCreator() {
  
  quizArray.sort(() => Math.random() - 0.5);
  
  for (let i of quizArray) {
    
    i.options.sort(() => Math.random() - 0.5);
    
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
   
    countOfQuestion.innerHTML = 1 + " / " + quizArray.length + " Tanong";
   
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
  
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}


function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

 
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    correctSound.play();
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    wrongSound.play(); 

    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }


  clearInterval(countdown);
 
  options.forEach((element) => {
    element.disabled = true;
  });
}


function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 61;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}


startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

lessonButton.addEventListener("click", () => {
  lessonContainer.classList.remove("hide");
});

// Hide the lesson modal when "Close" button is clicked
closeLesson.addEventListener("click", () => {
  lessonContainer.classList.add("hide");
});

// Initialize visibility on window load
window.onload = () => {
  // Assuming these elements exist in your HTML
  const startScreen = document.querySelector(".start-screen");
  const displayContainer = document.getElementById("display-container");
  
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
words.forEach(word => {
  word.addEventListener('click', () => {
    const descriptionDiv = word.nextElementSibling; // Get the next sibling (the description div)

    // Toggle the 'show' class for the description
    if (descriptionDiv.classList.contains('show')) {
      // Fade out
      descriptionDiv.style.opacity = '0'; // Start fading out
      setTimeout(() => {
        descriptionDiv.classList.remove('show'); // Remove the show class to hide it
        descriptionDiv.style.display = 'none'; // Finally hide it
      }, 500); // Match this with the transition duration in CSS
    } else {
      // Set the description text
      descriptionDiv.textContent = word.getAttribute('data-description'); 
      descriptionDiv.style.display = 'block'; // Show the description for transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          descriptionDiv.style.opacity = '1'; // Fade in
        });
      });
      descriptionDiv.classList.add('show'); // Add the show class to display
    }
  });
});


let currentPage = 1;
const totalPages = document.querySelectorAll('.lesson-page').length; // Automatically counts the pages

document.getElementById('next-button2').addEventListener('click', () => {
    if (currentPage < totalPages) {
        document.getElementById(`page-${currentPage}`).classList.add('hide');
        currentPage++;
        document.getElementById(`page-${currentPage}`).classList.remove('hide');
    }

    // Update buttons
    document.getElementById('back-button').disabled = (currentPage === 1);
    document.getElementById('next-button2').disabled = (currentPage === totalPages);
});

document.getElementById('back-button').addEventListener('click', () => {
    if (currentPage > 1) {
        document.getElementById(`page-${currentPage}`).classList.add('hide');
        currentPage--;
        document.getElementById(`page-${currentPage}`).classList.remove('hide');
    }

    // Update buttons
    document.getElementById('back-button').disabled = (currentPage === 1);
    document.getElementById('next-button2').disabled = (currentPage === totalPages);
});
