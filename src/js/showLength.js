// textareaの文字数を表示させる
function showLength(str) {
    document.getElementById('inputLength').innerHTML = "現在" + str.length + "文字";
};

// TODO:入力確認ボタンが押されたときの動作
// form入力内容の取得
const inputCheck = () => {
    let fm = document.forms[0];
    let formObject = new Object();

    for (i = 0; i < fm.elements.length; i++) {
        var nameTag = fm.elements[i].name;
        formObject[nameTag] = fm.elements[i].value;
    };
    console.log(formObject);  // 動作確認用
};
