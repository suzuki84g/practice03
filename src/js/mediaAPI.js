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

// TODO:Request投げる
const dataGet = (apiURL) => {
    request.open('GET', apiURL, true);
    request.responseType = 'json';
    console.log(request.responseType);
    // responseをオブジェクト化する処理
    request.onload = () => {
        console.log(request.response);
    };
    // 実際に送信する
    request.send();
};

// TODO:HTMLへの反映
// TODO:処理

// YoutubeMediaAPIの取得の手順を書く

requestURLMake(requestProperty);
dataGet(requestURL);
