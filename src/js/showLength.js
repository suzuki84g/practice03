// textareaの文字数を表示させる
function showLength(str) {
    document.getElementById('inputLength').innerHTML = "現在" + str.length + "文字";
};

// 変数を宣言
let fm = document.forms[0];  // formのHTMLを静的指定
let formObject = new Object();  // form登録情報を格納するオブジェクト
let checkResult = [];  // form入力内容の確認結果を入力する配列

// TODO:入力確認ボタンが押されたときの動作を包括的に処理
const inputCheck = () => {
    //関数を順次実行する
};

// form入力内容を取得
const formInput = () => {
    for (i = 0; i < fm.elements.length; i++) {
        var nameTag = fm.elements[i].name;
        formObject[nameTag] = fm.elements[i].value;
    };
    console.log(formObject);  // 動作確認用
};

// 名前、電話番号、希望予約時間に空欄が無いか、その他が200字を超えていないかオーバーが無いか
const lengthCheck = () => {
    // チェック項目を列挙
    if (formObject.fullName.length == 0) {
        checkResult.push('名前を入力してください');
    };
    if (formObject.phoneNumber.length == 0) {
        checkResult.push('電話番号を入力してください');
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
    // 結果確認
    if (checkResult.length == 0) {
        checkResult.push('CheckOK');
    }
    console.log(checkResult);  //動作確認用
};

// TODO:チェック結果の出力
const resultDisplay = () => {
    if (checkResult[0] == 'CheckOK') {
        // 送信完了を想定してダミーのアラートを表示
        window.alert('送信しました');
        document.location.reload();  // 画面を更新して初期化
    }
    // TODO:異常時の動作を入力
    // TODO:checkResultを初期化する動きが必要
};