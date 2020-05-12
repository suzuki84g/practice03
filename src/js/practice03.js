'use strict';

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
    if (slides[figureNum]) {
        slides[figureNum].style.display = 'block';
    } else {
        // 引数のfigureが存在しない場合は0番目を表示させる
        slides[0].style.display = 'block';
    }
}

// setInterval(slideImages, 3000[0]);
