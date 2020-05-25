'use strict';

// 変数の宣言
let requestURL = null;
let responseData = new Object;
let request = new XMLHttpRequest();

// requestのパラメータを設定
// GET https://www.googleapis.com/youtube/v3/search
const requestProperty = {
    basicURL: 'https://www.googleapis.com/youtube/v3/search',
    part: '?part=snippet',
    q: '&q=coffee',
    order: '&order=relevance',
    key: '&key=' + APIKey,
};

// requestURLを作成する関数
const requestURLMake = (property) => {
    // `const APIKey = '***'` はconfig.jsに記載
    requestURL = property.basicURL + property.part + property.q + property.order + property.key;
};

// APIへrequestを送信しresponseのオブジェクトを取得
const dataGet = (apiURL) => {
    request.open('GET', apiURL, true);
    request.responseType = 'json';
    // responseをオブジェクトに代入
    request.onload = () => {
        responseData = request.response;
    };
    // 送信する処理
    request.send();
};

// TODO:HTMLへの反映

// YoutubeMediaAPIの取得の手順を書く

// TODO:処理を適宜追記していく
requestURLMake(requestProperty);
dataGet(requestURL);
