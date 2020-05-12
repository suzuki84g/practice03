console.log('hello world!!');

/* menuのスライドショー
指定の秒数でメニューの画像を変更する。
div.slidesの中身に.gridBoxがあるので、
それを順番に表示させていく
*/

// slide配下のfigureタグが全て配列に格納される
const slides = document.getElementsByClassName('slides')[0].getElementsByTagName('figure');

function slideImages(figure_no) {
    slides[figure_no].style.display = 'block';  //0番目の`slide`のdisplayにblockを書き込む（CSSをHTML側で上書きする）
}
