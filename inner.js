// "let" huvisagch zarladag turul
// "let" eer zarlasan huvisagchiig dahin zarlah bolomjgui baidag

let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector('.popup');
let newgameRef = document.getElementById('new-game');
let restartRef = document.getElementById('restart');
let msgRef = document.getElementById('message');

// Hojih bolomjiin massive

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [6, 7, 8],
    [2, 4, 6],
    
];

// X toglogchoos togloom ehluuleh

let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((Element) => (Element.disabled = true));

    popupRef.classList.remove('hide');
}

const enableButtons = () => {
    btnRef.forEach((Element) => {
        Element.innerHTML = '';
        Element.disabled = false;
    });
    popupRef.classList.add('hide');
};

// Hojson togllogchiig shalgah:

const winChecker = () => {
    for(let i of winningPattern){
        let [Element1, Element2, Element3]= [
            btnRef[i[0]].innerHTML, 
            btnRef[i[1]].innerHTML, 
            btnRef[i[2]].innerHTML, 
        ];
// != a ni b tei tentsehgui
// a != ''; X.O bgaa ghdeee ali ni bh ni hamaagui
// a b c = tentsuu tohioldold hojno

        if(Element1 != '' &&(Element2 != '' && Element3 != '')){
            if(Element1 == Element2 && Element2 == Element3){
                winFunction(Element1);
            }
        }
    }
};

// winFunction nii uildel

const winFunction =(letter) =>{
    disableButtons();
    if(letter == 'X'){
        msgRef.innerHTML = " X ni hojloo ";
    }else{
        msgRef.innerHTML = " O ni hojloo ";
    }
};

const drawFunction = () =>{
    disableButtons();
    msgRef.innerHTML = 'Tentslee !!!';
};

newgameRef.addEventListener('click' , () =>{
    count = 0;
    enableButtons();
});
// Togloomiig ahin ehluuleh buyu newgame
restartRef.addEventListener('click' , () =>{
    count = 0;
    enableButtons();
});

// Delgetsend X,O iig ilgeeh buyu gargah:
// forEach element burt tuhain uildeliig hiih
// => sum zaasan tuhain uildeliig hiigeed butsaana.

btnRef.forEach((Element) => {
    Element.addEventListener('click', () =>{
        if(xTurn){
            xTurn = false;
            Element.innerHTML = 'X';
            Element.disabled = true;
        }else{
            xTurn = true;
            Element.innerHTML ='O';
            Element.disabled = true;
        }
        count +=1;
        if(count == 9){
            // Tentssen esehiih shalgah function
            drawFunction();
        }
        // Hojson uguig shalgadag baih yostoi
        winChecker();
    });
});

window.onload = enableButtons;