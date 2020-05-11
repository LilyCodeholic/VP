/*
 *startJW();
 *「DEAL」を押したときに発火。
 *連コ、カードの初期化、カードの表示、判定の呼び出しまでする。
 */
const startJW = () =>
{
	if(wager == 0)
	{
		return;
	}
	flagPlayed = true;
	if(flagPaid)
	{
		flagPaid = false;
	}
	else if(!flagPaid)
	{
		credit -= wager;
		updateJW();
	}

	// トランプを初期化する。
	initCard(53);

	let i = 0;
	let loopCount = 0;

	const timer = setInterval(() =>
	{
		if(cards[i].mark == 0 || cards[i].mark == 1 || cards[i].mark == 4)
		{
			removeClass(`#JWhand${i}`, "red");
			addClass(`#JWhand${i}`, "black");
		}
		else
		{
			removeClass(`#JWhand${i}`, "black");
			addClass(`#JWhand${i}`, "red");
		}
		changeText(`#JWhand${i}`, illust[cards[i].mark][cards[i].number]);

		loopCount++;
		i++;
		if(!(loopCount < 5))
		{
			i = 0;
			changeText("#JWdeal", "");
			changeText("#JWdraw", "DRAW");
			setOnclick("#JWbuttonRight", drawJW);
			clearInterval(timer);
		}
	}, 100);
};

/*
 *drawJW();
 *setsumei kakou
 */
const drawJW = () =>
{
	let JWholds;
	let i = 0;
	let loopCount = 0;

	let timer = setInterval(() =>
	{
		JWholds = document.getElementById("pageJokersWild").getElementsByClassName("holdText");

		if(JWholds[i].classList.contains("hidden"))
		{
			console.log(JWholds[i].className);
			changeText(`#JWhand${i}`, illust[cards[5 + i].mark][cards[5 + i].number]);
			cards[i].mark = cards[5 + i].mark;
			cards[i].number = cards[5 + i].number;

			if(cards[i].mark == 0 || cards[i].mark == 1 || cards[i].mark == 4)
			{
				removeClass(`#JWhand${i}`, "red");
				addClass(`#JWhand${i}`, "black");
			}
			else
			{
				removeClass(`#JWhand${i}`, "black");
				addClass(`#JWhand${i}`, "red");
			}
		}

		loopCount++;
		i++;
		if(!(loopCount < 5))
		{
			i = 0;
			judgeJW();
			clearInterval(timer);
		}
	}, 100);
};

/*
 *judgeJW();
 *役の判定をする。
 */
const judgeJW = () =>
{
	let judge;
	let i;
	let bucketMarks = [0, 0, 0, 0, 0, 0];
	let bucketNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	let hasJoker = false;
	let hasRoyal = false;
	let hasFlush = false;
	let hasStraight = false;
	let hasFour = false;
	let hasThree = false;
	let hasTwo = false;
	let hasTwoPair = false;

	for(i = 0; i < 5; i++)
	{
		bucketMarks[cards[i].mark]++;
		bucketNumbers[cards[i].number]++;
	}
	/*
	 * console.log("bucketMarks: " + bucketMarks);
	 * console.log("bucketNumbers: " + bucketNumbers);
	 */

	// ジョーカーが含まれているか
	if(bucketNumbers[0] > 0)
	{
		console.log(`  hasJoker: ${bucketNumbers[0]}`);
		hasJoker = true;
	}
	// ロイヤルフラッシュの数字の組み合わせか
	if(bucketNumbers[1] * bucketNumbers[10] * bucketNumbers[11] * bucketNumbers[12] * bucketNumbers[13] == 1)
	{
		console.log(`  hasRoyal: ${bucketNumbers[1]} ${bucketNumbers[10]} ${bucketNumbers[11]} ${bucketNumbers[12]} ${bucketNumbers[13]}`);
		hasRoyal = true;
	}
	// 同じマークが5枚揃っているか
	if(bucketMarks.some(function(element){return element + this[0] == 5;}, bucketNumbers))
	{
		console.log(`  hasFlush: ${bucketMarks[0]} ${bucketMarks[1]} ${bucketMarks[2]} ${bucketMarks[3]} ${bucketMarks[4]} ${bucketMarks[5]}`);
		hasFlush = true;
	}
	// 数字が5連番か
	if(bucketNumbers.lastIndexOf(1) - bucketNumbers.indexOf(1, 1) < 5 &&
	   bucketNumbers.filter(function(element){return element == 1;}).length + bucketNumbers[0] >= 5)
	{
		console.log(`  hasStraight: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
		hasStraight = true;
	}
	// 同じ数字が4枚あるか
	if(bucketNumbers.some(function(element){return element == 4;}))
	{
		console.log(`  hasFour: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
		hasFour = true;
	}
	// 同じ数字が3枚あるか
	if(bucketNumbers.some(function(element){return element == 3;}))
	{
		console.log(`  hasThree: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
		hasThree = true;
	}
	// 同じ数字が2枚あるか
	if(bucketNumbers.some(function(element){return element == 2;}))
	{
		console.log(`  hasTwo: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
		hasTwo = true;
	}
	// 同じ数字が2枚を2組持っているか
	if(bucketNumbers.filter(function(element){return element >= 2;}).length >= 2)
	{
		console.log(`  hasTwoPair: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
		hasTwoPair = true;
	}

	// ROYAL FLUSH W/O JOKER
	if(!hasJoker && hasRoyal && hasFlush)
	{
		judge = 500;
	}
	// FIVE OF A KIND
	else if(hasJoker && hasFour)
	{
		judge = 100;
	}
	// STRAIGHT FLUSH
	else if(hasFlush && hasStraight)
	{
		judge = 50;
	}
	// FOUR OF A KIND
	else if(hasFour || (hasJoker && hasThree))
	{
		judge = 20;
	}
	// FULL HOUSE
	else if((hasJoker && hasTwoPair) || (hasThree && hasTwoPair))
	{
		judge = 8;
	}
	// FLUSH
	else if(hasFlush)
	{
		judge = 5;
	}
	// STRAIGHT
	else if(hasStraight)
	{
		judge = 4;
	}
	// THREE OF A KIND
	else if(hasThree || (hasTwo && hasJoker))
	{
		judge = 2;
	}
	// TWO PAIR
	else if(hasTwoPair)
	{
		judge = 1;
	}
	// はずれ
	else
	{
		judge = 0;
	}

	if(judge == 0)
	{
		changeText("#JWtextBottom", "GAME OVER");
		changeText("#JWdraw", "");
		changeText("#JWdeal", "DEAL");
		setOnclick("#JWbuttonRight", startJW);
	}
	else if(judge > 0)
	{
		changeText("#JWtextBottom", "WINNER !");
		if(judge == 500)
		{
			win = judge * (wager + Math.floor(wager / 10) * 10);
		}
		else
		{
			win = judge * wager;
		}
		updateJW();
	}

	hasJoker = false;
	hasRoyal = false;
	hasFlush = false;
	hasStraight = false;
	hasFour = false;
	hasThree = false;
	hasTwo = false;
	hasTwoPair = false;
	judge = 0;

	flagPlayed = false;
};

const payOutJW = (judge) =>
{
	return 0;
};

/*
 *betJW(掛け金);
 *「BET ONE」、「MAX BET」を押したときに発火。
 */
const betJW = (bet) =>
{
	// クレジット投入中フラグをたてる
	flagPaid = true;

	// まだプレイしていないとき、1枚以上投入したあとはここを通る
	if(!flagPlayed)
	{
		let tmpBet;
		if(bet == 40)
		{
			tmpBet = wager;
			wager = wager + (40 - tmpBet);
			credit = credit - (40 - tmpBet);
		}
		else if(wager < 40)
		{
			wager += bet;
			credit -= bet;
		}
	}
	// 連続してプレイする時は最初にここを通る
	else if(flagPlayed)
	{
		flagPlayed = false;
		changeText("#JWtextBottom", "GOOD LUCK");
		wager = bet;
		credit -= bet;
	}
	updateJW();
};

/*
 *updateJW();
 *wager, win, paid, creditsの表示を更新する。
 */

let updateJW = () =>
{
	changeText("#JWvalueWager", wager.padding(" ", 2));
	changeText("#JWvalueWin", win.padding(" ", 5));
	changeText("#JWvaluePaid", paid.padding(" ", 4));
	changeText("#JWvalueCredit", credit);
};
