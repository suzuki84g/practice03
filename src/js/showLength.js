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
    // 配列を宣言
    let checkResult = [];

    // 処理を記載
    if (formObject.fullName.length == 0) {
        checkResult.push('名前を入力してください');
    };
    if (isNaN(formObject.phoneNumber)) {
        checkResult.push('電話番号は数字のみで入力してください');
    };
    if (formObject.reserveTime.length == 0) {
        checkResult.push('時間を入力してください');
    };
    if (formObject.message.length >= 200) {
        checkResult.push('200字以下の入力をしてください')
    };

    //動作確認
    console.log(checkResult);
};



    // let valueCount = "formObject[" + member + "].length";
    // console.log(valueCount);

// TODO:エラーの出力
    // ポップアップのアラートを表示させたい
