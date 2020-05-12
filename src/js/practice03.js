'use strict';

console.log('hello world!!');

/* menuのスライドショー
指定の秒数でメニューの画像を変更する。
div.slidesの中身に.gridBoxがあるので、
それを順番に表示させていく
*/

// slide配下のfigureタグが全て配列に格納される
const slides = document.getElementsByClassName('slides')[0].getElementsByTagName('figure');

function slideImages(figureNum) {
    // 1つ前の番号のものを非表示にする
    let noneNum = figureNum - 1;  //デクリメント
    if (slides[noneNum]) {
        slides[noneNum].style.display = 'none';
    };
    // 渡した値のfigureを表示させる
    slides[figureNum].style.display = 'block';
}

// setInterval(slideImages, 3000[0]);
