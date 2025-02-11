// 가위 버튼에 적용할 click handler

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

function onScissorsClick() {    // 버튼 클릭했어요 -> userInput prompt가 필요 없죠
    let comInput;   // 즉 지역변수로 처리를 하는 중
    let randomNum = Math.random();

    if (randomNum < 0.33) comInput = SCISSORS;
    else if (randomNum < 0.66) comInput = ROCK;
    else comInput = PAPER;

    if (comInput === SCISSORS) {
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    } else if (comInput === ROCK) {
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    } else {
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    }
}

// onRockClick()
function onRockClick() {
    let comInput;
    let randomNum = Math.random();

    if (randomNum < 0.33) comInput = SCISSORS;
    else if (randomNum < 0.66) comInput = ROCK;
    else comInput = PAPER;

    if (comInput === SCISSORS) {
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    } else if (comInput === ROCK) {
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    } else {
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    }
}

// onPaperClick() 정의하고 index.html에 대입하고 최종 결론을 내세요.
function onPaperClick() {
    let comInput;
    let randomNum = Math.random();

    if (randomNum < 0.33) comInput = SCISSORS;
    else if (randomNum < 0.66) comInput = ROCK;
    else comInput = PAPER;

    if (comInput === SCISSORS) {
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`)
    } else if (comInput === ROCK) {
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`)
    } else {
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`)
    }
}

function onButtonClick(userInput) {
    let comInput;
    let randomNum = Math.random();

    if (randomNum < 0.33) comInput = SCISSORS;
    else if (randomNum < 0.66) comInput = ROCK;
    else comInput = PAPER;

    console.log(userInput)
    console.log(comInput)
}
