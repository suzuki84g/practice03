'use strict';

// `const APIKey = '***'` はconfig.jsに記載

// YoutubeMediaAPIの取得の手順を書く

// URLを定義
// GET https://www.googleapis.com/youtube/v3/search
let requestURL = null;
const requestProperty = {
    URL: 'https://www.googleapis.com/youtube/v3/search',
    part: '?part=snippet',
    q: '&q=coffee',
    order: '&order=relevance',
    key: '?key=' + APIKey,
};
const requestMake = (requestProperty) => {
    requestURL = requestProperty.URL + requestProperty.part + requestProperty.q + requestProperty.order + requestProperty.key;
};

const request = new XMLHttpRequest();
const responseData = null;

// TODO:Request投げる
const dataGet = () => {
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    // TODO:Response戻り時の処理を予め記述
    request.onload = () => {
        responseData = this.request;
        console.log(responseData);
        // 処理（代数に一回ぶっこむとか）
    };
    // 実際に送信する
    request.send();
};

// TODO:HTMLへの反映
// TODO:処理
