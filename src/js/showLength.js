// textareaの文字数を表示させる
function showLength(str) {
    document.getElementById('inputLength').innerHTML = "現在" + str.length + "文字";
};

// TODO:入力確認ボタンが押されたときの動作

// 変数を宣言
let formObject = new Object();
let fm = document.forms[0];

// form入力内容を取得
const inputCheck = () => {
    for (i = 0; i < fm.elements.length; i++) {
        var nameTag = fm.elements[i].name;
        formObject[nameTag] = fm.elements[i].value;
    };
    console.log(formObject);  // 動作確認用
};

// TODO:名前、電話番号、希望予約時間に空欄が無いか、その他が200字を超えていないかオーバーが無いか
const lengthCheck = () => {
    formObject.fullName;
    formObject.phoneNumber;
    formObject.reserveTime;
    formObject.message;
};



    // let valueCount = "formObject[" + member + "].length";
    // console.log(valueCount);

// TODO:エラーの出力
    // ポップアップのアラートを表示させたい
