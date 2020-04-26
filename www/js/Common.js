/*
    グローバル変数たち。
    Unicodeは表示でできたりできなかったりする。Windows10+Vivaldiだと表示できるんだけどなあ・・・
*/
let cards = [];
const illust =
    [
        ["", "🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"],
        ["", "🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞"],
        ["", "🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾"],
        ["", "🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎"],
        ["🃟"],
        ["🂿"],
        ["🂠"]
    ];

let credit = 500;
let wager = 0;
let win = 0;
let paid = 0;
// プレイ前かプレイ後かを判断するフラグ。
let flagPlayed = false;
// 連続でdealしてるかどうかを判断するフラグ。
let flagPaid = false;

/*
    generateCard(マーク, 数字);
    コンストラクタ。cards[]にカードを生成する。必ずしも構造体である必要はない。
*/
function generateCard(mark, number)
{
    this.mark = mark;
    this.number = number;
}

/*
    initCard(初期化するカード枚数);
    ジョーカーがないトランプを初期化したいときはinitCard(52);。
*/
const initCard = (cardNum) =>
{
    let tmpCard;
    let i, j, r, x = 0;

    // カードの準備
    for(i = 0; i < 4; i++)
    {
        for(j = 1; j <= 13; j++)
        {
            cards[x] = new generateCard(i, j);
            x++;
        }
    }
    // jokerを含むゲームの場合、illust[4][0]の白ジョーカーを用意する。
    if(cardNum > 52)
    {
        cards[x] = new generateCard(4, 0);
        x++;
        // jokerを2枚含むゲームの場合、illust[5][0]の赤ジョーカーを用意する。
        if(cardNum > 53)
        {
            cards[x] = new generateCard(5, 0);
        }
    }

    // シャッフルしてます
    for(i = 0; i <= 2; i++)
    {
        for(j = 0; j < cardNum; j++)
        {
            r = Math.floor(Math.random() * cardNum);
            tmpCard = cards[j];
            cards[j] = cards[r];
            cards[r] = tmpCard;
        }
    }
};

/*
    hold(オブジェクト);
    ドロー系ポーカーでカードをタップすると下に「HOLD」と表示される。
*/
const hold = (obj) =>
{
    // console.log(obj);
    if(flagPlayed)
    {
        // .toggleが非推奨になったので(たぶん)、クラスの付け替えで表示/非表示する。
        if(obj.classList.contains("hidden") == true)
        {
            obj.classList.remove("hidden");
        }
        else
        {
            obj.classList.add("hidden");
        }
    }
};

/*
    changeHtml(DOM or querySelectorAllするとこ, 変えるHTML);
    共通部を外出し。
*/
const changeHtml = (source, html) =>
{
    // sourceがDOMなら
    if(source.nodeType === 1)
    {
        console.log(`  changeText: ${source.nodeType}, ${html}`);
        source.textContent = html;
    }
    else
    {
        const element = document.querySelector(source);
        console.log(`  changeHtml: ${source}, ${html}, ${element.nodeType}`);
        element.innerHTML = html;
    }
};

/*
    changeText(DOM or querySelectorAllするとこ, 変えるテキスト);
    共通部を外出し。
*/
const changeText = (source, text) =>
{
    // sourceがDOMなら
    if(source.nodeType === 1)
    {
        console.log(`  changeText: ${source.nodeType}, ${text}`);
        source.textContent = text;
    }
    else
    {
        const element = document.querySelector(source);
        console.log(`  changeText: ${source}, ${text}, ${element.nodeType}`);
        element.textContent = text;
    }
};

/*
    setOnclick(DOM or querySelectorAllするとこ, コールバック);
    共通部を外出し。
*/
const setOnclick = (source, callFunction) =>
{
    // sourceがDOMなら
    if(source.nodeType === 1)
    {
        console.log(`  setOnclick: ${source.nodeType}, ${callFunction}`);
        source.onclick = callFunction;
    }
    else
    {
        const element = document.querySelector(source);
        console.log(`  setOnclick: ${source}, ${callFunction}, ${element.nodeType}`);
        element.onclick = callFunction;
    }
};

/*
    addClass(DOM or querySelectorAllするとこ, 追加するクラス);
    共通部を外出し。
*/
let addClass = (source, classes) =>
{
    // sourceがDOMなら
    if(source.nodeType === 1)
    {
        console.log(`  addClass: ${source.nodeType}, ${classes}`);
        source.classList.add(classes);
    }
    else
    {
        const element = document.querySelector(source);
        console.log(`  addClass: ${source}, ${classes}, ${element.nodeType}`);
        element.classList.add(classes);
    }
};

/*
    removeClass(DOM or querySelectorAllするとこ, 削除するクラス);
    共通部を外出し。
*/
const removeClass = (source, classes) =>
{
    // sourceがDOMなら
    if(source.nodeType === 1)
    {
        console.log(`  removeClass: ${source.nodeType}, ${classes}`);
        source.classList.remove(classes);
    }
    else
    {
        const element = document.querySelector(source);
        console.log(`  removeClass: ${source}, ${classes}, ${element.nodeType}`);
        element.classList.remove(classes);
    }
};

/*
    .padding(パディングする文字, 文字数);
    wager.padding(" ", 2);みたいに使う。(セミコロンはいら)ないです。
*/
Number.prototype.padding = function(pad, digit)
{
    // 前半:join("")で文字列に変換、後半:slice(-文字数)で後ろから切り取り
    return (Array(digit).fill(pad).join("") + this.valueOf()).slice(-1 * digit); 
};
