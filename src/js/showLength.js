// textareaの文字数を表示させる
function showLength(str) {
    document.getElementById('inputLength').innerHTML = "現在" + str.length + "文字";
};

// TODO:入力確認ボタンが押されたときの動作

// 変数を宣言
let fm = document.forms[0];  // formのHTMLを静的指定
let formObject = new Object();  // form登録情報を格納するオブジェクト
let checkResult = [];  // form入力内容の確認結果を入力する配列

// form入力内容を取得
const inputCheck = () => {
    for (i = 0; i < fm.elements.length; i++) {
        var nameTag = fm.elements[i].name;
        formObject[nameTag] = fm.elements[i].value;
    };
    console.log(formObject);  // 動作確認用
};

// 名前、電話番号、希望予約時間に空欄が無いか、その他が200字を超えていないかオーバーが無いか
const lengthCheck = () => {
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
    console.log(checkResult);  //動作確認
};

// TODO:エラーの出力
    // ポップアップのアラートを表示させたい
