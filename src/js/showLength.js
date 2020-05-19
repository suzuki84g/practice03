// textareaの文字数を表示させる

function showLength(str) {
    document.getElementById('inputLength').innerHTML = "現在" + str.length + "文字";
};

// TODO:入力確認ボタンが押されたときの動作
const inputCheck = () => {
    let fullName = document.getElementById('fullName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let numOfPeople = document.getElementById('numOfPeople').value;
    let message = document.getElementById('message').value;
    let test = [fullName, phoneNumber, email, numOfPeople, message];
    console.log(test);
};
