'use strict';

/* menuのスライドショー
指定の秒数でメニューの画像を変更する。
div.slidesの中身に.gridBoxがあるので、
それを順番に表示させていく
*/

// slide配下のfigureタグが全て配列に格納される
const slides = document.getElementsByClassName('slides')[0].getElementsByTagName('figure');
// 要素数を変数に記録
const slidesLength = Object.keys(slides).length;

// 0要素を初期表示
slideImages(0);

// Slide関数
function slideImages(figureNum) {
    // 全てのdisplayをnoneにする
    for (let cnt = 0; cnt < slidesLength; cnt++) {
        slides[cnt].style.display = 'none';
    };
    // 渡した値のfigureを表示させる
    if (slides[figureNum]) {
        slides[figureNum].style.display = 'block';
    } else {
        // 引数のfigureが存在しない場合は0番目を表示させる（エラー回避）
        slides[0].style.display = 'block';
    };
    // 次のSlideを値を決める
    if (figureNum < slidesLength - 1) {  // 要素数から-1して場所を指定
        figureNum++;
    } else {
        figureNum = 0;
    };
    // ループ処理
    setTimeout(slideImages, 3000, figureNum);
};
