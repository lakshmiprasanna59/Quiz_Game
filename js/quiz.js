
let reward = 0;
localStorage.setItem("reward", reward);

const playerName = document.getElementById("PlayerName");
const storedName = localStorage.getItem("userName");


if (storedName) {
    playerName.textContent = playerName.textContent +  `${storedName}`;
} else {
    playerName.textContent = playerName.textContent + " Guest!";
}

let questions = [
    {
        q1: "What is the only food that doesn’t spoil?",
        op1: "Rice",
        op2: "Chocolate",
        op3: "Honey",
        op4: "French Fries",
        ans: "Honey",
        funFact: "Archaeologists found pots of honey in Egyptian tombs that were still good!"
    },
    {
        q1: "How many hearts does an octopus have?",
        op1: "1",
        op2: "2",
        op3: "3",
        op4: "It depends on how stressful the week has been",
        ans: "3",
        funFact: "One pumps blood through the body, two through the gills.",
        bg: "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?cs=srgb&dl=pexels-bella-white-201200-635279.jpg&fm=jpg"
    },
    {
        q1: "What’s illegal to own as a pet in Switzerland... alone?",
        op1: "Cat",
        op2: "Guinea pig",
        op3: "Snake",
        op4: "Goldfish",
        ans: "Guinea pig",
        funFact: "Guinea pigs are social animals. Swiss law considers it cruel to keep just one.",
        bg: "https://www.woodlandscreekanimalhospital.com/_files/images/bg-hero.jpg"
    },
    {
        q1: "What was the first product to have a barcode?",
        op1: "Toothpaste",
        op2: "Gum",
        op3: "A potato",
        op4: "A pack of rubber bands",
        ans: "Gum",
        funFact: "Specifically, Wrigley’s Juicy Fruit gum!",
        bg: "https://img.freepik.com/free-photo/product-backdrop-cinematic-smoke-realistic-design_53876-128288.jpg"
    },
    {
        q1: "Which planet rains diamonds?",
        op1: "Venus",
        op2: "Neptune",
        op3: "Saturn",
        op4: "Pluto",
        ans: "Neptune",
        funFact: "Both Neptune and Saturn might rain diamonds due to extreme pressure. Who needs rings when you’ve got bling?",
        bg: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?cs=srgb&dl=pexels-philippedonn-1169754.jpg&fm=jpg"
    },
    {
        q1: "Why do flamingos stand on one leg?",
        op1: "To keep warm",
        op2: "For balance",
        op3: "They forgot the other one",
        op4: "Because it looks cool",
        ans: "To keep warm",
        funFact: "Standing on one leg conserves body heat, especially when they’re chilling in cold water.",
        bg: "https://t4.ftcdn.net/jpg/05/87/94/19/360_F_587941979_Nj3mIpB8uJXWro3SwaDBlhP8dTkd1H5i.jpg"
    },
    {
        q1: "What fruit was once considered deadly in Europe?",
        op1: "Apple",
        op2: "Tomato",
        op3: "Banana",
        op4: "Pineapple",
        ans: "Tomato",
        funFact: "Europeans once thought tomatoes were poisonous because they reacted with pewter plates!",
        bg: "https://t3.ftcdn.net/jpg/08/06/92/66/360_F_806926607_CypkVdlU2gOvRtuIT2PPTSFte9PRaAne.jpg"
    },
    {
        q1: "Which animal can hold its breath the longest underwater?",
        op1: "Whale",
        op2: "Sea turtle",
        op3: "Sloth",
        op4: "Dolphin",
        ans: "Sloth",
        funFact: "A sloth can slow its heart rate so much it holds its breath for 40 minutes! Lazy AND talented.",
        bg: "https://www.liquiddumaguete.com/wp-content/uploads/2015/04/underwater-coral-bg.jpg"
    },
    {
        q1: "Which is the loudest animal on Earth (relative to body size)?",
        op1: "Elephant",
        op2: "Hyena",
        op3: "Sperm whale",
        op4: "Water boatman bug",
        ans: "Water boatman bug",
        funFact: "This tiny bug creates a sound by rubbing its penis against its abdomen. Science is weird.",
        bg: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2Zyd29sdmVzX3dvbGZfaG93bGluZ19tb29uLWltYWdlLWt5YmNiaTVyLmpwZw.jpg"
    },
    {
        q1: "Why is the sky blue?",
        op1: "Because it's sad",
        op2: "Because water reflects into the sky",
        op3: "Due to Rayleigh scattering",
        op4: "It's blue by default",
        ans: "Due to Rayleigh scattering",
        funFact: "Short blue wavelengths of light scatter more in Earth's atmosphere — hence, blue sky!",
        bg: "https://media.gettyimages.com/id/1369516776/video/time-lapse-of-a-day-to-night-sequence-with-clouds-moving-fast-and-sun-rays-glowing-onto-the.jpg?s=640x640&k=20&c=mzhD3oi_gpdmSZxNkJhDv0HiiJ2TuWpBcneAvfli-Ic="
    }
]

//code to get access of buttons
let q = document.querySelector('#question');
let ch1 = document.querySelector('#one');
let ch2 = document.querySelector('#two');
let ch3 = document.querySelector('#three');
let ch4 = document.querySelector('#four');
let fact = document.querySelector('#fun-fact');

let next = document.querySelector('#next');


//Life Lines
let ff = document.querySelector('#ff');
let ap = document.querySelector('#ap');
let skip = document.querySelector('#skip');
let quit = document.querySelector('#quit');

let ffCount = 0;
let apCount = 0;
let skipCount = 0;

//Audience Poll 
let ap1 = document.querySelector('#ap1');
let ap2 = document.querySelector('#ap2');
let ap3 = document.querySelector('#ap3');
let ap4 = document.querySelector('#ap4');


let currentIndex=0;

//To start quiz
problem(0);

//Next button
next.addEventListener('click', function() {
    currentIndex = currentIndex+1;
    problem(currentIndex);
});

//Code to make question index
function problem(currentIndex) {
    if(apCount===1) {
        ap1.textContent ='';
        ap2.textContent ='';
        ap3.textContent ='';
        ap4.textContent ='';
        apCount=2;
    }
    if(currentIndex === 10) {
        reward = Number(reward) + 1000;
        localStorage.setItem("reward", reward);
        setTimeout(() => {
            window.location.href = "./won.html"; // Change to your page name Quiz_App\won.html
        }, 500);
    } else {
        if(currentIndex!==0){
            changeBG();
            reward = Number(reward) + 1000;
            localStorage.setItem("reward", reward);   
        }
        if(currentIndex==9) {
            next.textContent = 'Finish';
        }
        fact.textContent = '';
        enableButtons();
        showQuestion(currentIndex);
        check();
    } 
} 

//Changing background image
function changeBG() {
    document.body.style.backgroundImage = `url('${questions[currentIndex].bg}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
}

//Code to enable buttons
function enableButtons() {
    ch1.disabled = false;
    ch2.disabled = false;
    ch3.disabled = false;
    ch4.disabled = false;

    if(ffCount===0)   ff.disabled = false;
    if(apCount===0)   ap.disabled = false;
    if(skipCount===0) skip.disabled = false;

    next.disabled = true;
}

//Code to show questions
function showQuestion(index) {
    let qObj = questions[index];
    q.innerText = `Q${index + 1}: ${qObj.q1}`;
    ch1.textContent = qObj.op1;
    ch2.textContent = qObj.op2;
    ch3.textContent = qObj.op3;
    ch4.textContent = qObj.op4;
}


//code to konw which button got clicked
function check (){
    ch1.addEventListener('click',function() {
        valid(ch1.textContent);
    });
    ch2.addEventListener('click',function() {
        valid(ch2.textContent);
    });
    ch3.addEventListener('click',function() {
        valid(ch3.textContent);  
    });
    ch4.addEventListener('click',function() {
        valid(ch4.textContent);
    });
}  

//to check click is correct or not
let valid = (ch,result) => {
    disableButtons();
    if(ch === questions[currentIndex].ans) {
        fact.textContent = "✅ Correct Answer!!! " + questions[currentIndex].funFact;
        return;
    } else {
        fact.textContent = "❌ Wrong Answer... " + questions[currentIndex].funFact;
        setTimeout(() => {
            window.location.href = "./gameover.html"; // Change to your page name
        }, 1000);
    }
}

//COde to disable buttons
function disableButtons() {
    ch1.disabled = true;
    ch2.disabled = true;
    ch3.disabled = true;
    ch4.disabled = true;

    ff.disabled = true;
    ap.disabled = true;
    skip.disabled = true;

    next.disabled = false;
}

//50-50 Lifeline
ff.addEventListener('click',function() {
    if(ch1.textContent===questions[currentIndex].ans) {
        ch2.disabled = true;
        ch4.disabled = true;
    }
    if(ch2.textContent===questions[currentIndex].ans) {
        ch3.disabled = true;
        ch4.disabled = true;
    }
    if(ch3.textContent===questions[currentIndex].ans) {
        ch1.disabled = true;
        ch2.disabled = true;
    }
    if(ch4.textContent===questions[currentIndex].ans) {
        ch1.disabled = true;
        ch3.disabled = true;
    }
    ffCount = 1;
    ff.disabled = true;
});


//Audience poll

let poll = [
    {o1: 40, o2: 5, o3: 50, o4: 5},
    {o1: 30, o2: 30, o3: 35, o4: 5},
    {o1: 10, o2: 40, o3: 30, o4: 20},
    {o1: 30, o2: 35, o3: 10, o4: 35},
    {o1: 20, o2: 30, o3: 25, o4: 25},
    {o1: 35, o2: 40, o3: 10, o4: 15},
    {o1: 15, o2: 35, o3: 25, o4: 25},
    {o1: 30, o2: 20, o3: 40, o4: 10},
    {o1: 30, o2: 20, o3: 10, o4: 40},
    {o1: 20, o2: 20, o3: 40, o4: 20}
]

ap.addEventListener('click', function() {

    ap1.textContent = poll[currentIndex].o1 + '%';
    ap2.textContent = poll[currentIndex].o2 + '%';
    ap3.textContent = poll[currentIndex].o3 + '%';
    ap4.textContent = poll[currentIndex].o4 + '%';

    apCount++;
    ap.disabled = true;
});


//Skip Lifeline
skip.addEventListener('click',function() {
    reward = Number(reward) - 1000;
    localStorage.setItem("reward", reward);
    skipCount++;
    skip.disabled = true;
    currentIndex = currentIndex+1;
    problem(currentIndex);
})


//Quit lifeline
quit.addEventListener('click',function() {
    setTimeout(() => {
        window.location.href = "./gameover.html"; // Change to your page name
    }, 500);
});


