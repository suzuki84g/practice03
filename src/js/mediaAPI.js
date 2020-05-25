'use strict';

// 変数の宣言
let requestURL = null;
let responseData = null;
let request = new XMLHttpRequest();

// requestのパラメータを設定
// GET https://www.googleapis.com/youtube/v3/search
const requestProperty = {
    URL: 'https://www.googleapis.com/youtube/v3/search',
    part: '?part=snippet',
    q: '&q=coffee',
    order: '&order=relevance',
    key: '&key=' + APIKey,
};

// requestURLを作成する関数
const requestURLMake = (property) => {
    // `const APIKey = '***'` はconfig.jsに記載
    requestURL = property.URL + property.part + property.q + property.order + property.key;
};

// TODO:Request投げる
const dataGet = (URL) => {
    request.open('GET', URL, true);
    request.responseType = 'json';
    // responseをオブジェクト化する処理
    request.onload = () => {
        responseData = this.response;
        console.log(responseData);
    };
    // 実際に送信する
    request.send();
};

// TODO:HTMLへの反映
// TODO:処理

// YoutubeMediaAPIの取得の手順を書く

requestURLMake(requestProperty);
