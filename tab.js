
//デバッグや動作確認は、console.logやhtmlのElementsの動きを見ながら

(() => {

    //$を変数名につけると、DOM要素であることを明示的に表す
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    //初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();


    const handleClick = (e) => {
        //e.preventDeault()でリンク要素を無効化させることができる
        e.preventDefault();

        //クリックされたnavとそのdataを取得
        //e.targetを指定すると、今クリックされた要素をピンポイントで取ってこれる
        const $this = e.target;
        //datasetはそのDOM要素のデータ属性をとる.この場合、[data-nav]から
        const targetVal = $this.dataset.nav;


        //対象外のnav,contentすべてリセットする
        for (let index = 0; index < navLen; index++) {
            //style.displayがnoneだと非表示。
            $content[index].style.display='none';
            //removeでクラスを排除
            $nav[index].classList.remove(ACTIVE_CLASS);
        }


        // console.log(targetVal);

        //対象のコンテンツをアクティブ化する
        //ata-contentmのデータ属性がtargetValの値の要素の０番目を取得（１個しかないので[0]で固定)
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        //add('XXX')で対象のDOM要素のclassにXXXを追加する
        $nav[targetVal].classList.add(ACTIVE_CLASS);

        console.log('tab_class=' + $nav[targetVal].classList);
    };



    let index = 0;
    //全タブにイベントを設定
    while (index < navLen) {
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }



})();