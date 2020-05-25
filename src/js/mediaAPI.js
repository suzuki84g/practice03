'use strict';

// `const APIKey = '***'` はconfig.jsに記載

// YoutubeMediaAPIの取得の手順を書く

// TODO:URLを定義
// GET https://www.googleapis.com/youtube/v3/search
const requestURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=(チャンネルID)&order=date&key=' + APIKey;
const response = null;

// TODO:Request投げる
var request = new XMLHttpRequest();
request.open = ('GET', requestURL, true);

// TODO:Response戻り時の処理を予め記述
request.onload = function () {
    // 処理（代数に一回ぶっこむとか）
};
// 実際に送信する
request.send();

// TODO:HTMLへの反映
// TODO:処理
