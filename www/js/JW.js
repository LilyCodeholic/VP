/*
	funcJW();
	Joker's Wild。普通のドローポーカー。
	SIGMA JOKER'S WILD
	GAME CODE: JW
	DESCRIPTION: TWO PAIR OR BETTER
	DEFAULT PAYOUT PERCENT: 87.7%
	ROYAL FLUSH W/O WILD 500
	FIVE OF A KIND       100
	STRAIGHT FLUSH        50
	FOUR OF A KIND        20
	FULL HOUSE             8
	FLUSH                  5
	STRAIGHT               4
	THREE OF A KIND        2
	TWO PAIR               1
*/
const funcJW = () =>
{
	const JW =
	{
		Hands:
		[
			"ROYAL FLUSH W/O JOKER--",
			"FIVE OF A KIND---------",
			"STRAIGHT FLUSH---------",
			"FOUR OF A KIND---------",
			"FULL HOUSE-------------",
			"FLUSH------------------",
			"STRAIGHT---------------",
			"THREE OF A KIND--------",
			"TWO PAIR---------------",
		],
		Caution: "ROYAL FLUSH WITH JOKER REGARDED AS STRAIGHT FLUSH",
		Rate1: [500, 100, 50, 20, 8, 5, 4, 2, 1],
		Rate2: [1000, 100, 50, 20, 8, 5, 4, 2, 1],
		RateChange: 5,
		MaxBet: 40,
	}

	const fragment = document.createDocumentFragment();

	const listItemRate = document.createElement("ons-list-item");
	const divTextRate = document.createElement("div");
	const divRow1 = document.createElement("div");
	const divTextHand = document.createElement("div");
	const divRate1 = document.createElement("div");
	const divRate2 = document.createElement("div");
	const divRate3 = document.createElement("div");
	const divRate4 = document.createElement("div");
	const divRate5 = document.createElement("div");
	const divRow2 = document.createElement("div");
	const divTextCaution = document.createElement("div");
	const rowHand = document.createElement("ons-row");
	const colHand1 = document.createElement("ons-col");
	const colHand2 = document.createElement("ons-col");
	const colHand3 = document.createElement("ons-col");
	const colHand4 = document.createElement("ons-col");
	const colHand5 = document.createElement("ons-col");
	const listItemHand1 = document.createElement("ons-list-item");
	const listItemHand2 = document.createElement("ons-list-item");
	const listItemHand3 = document.createElement("ons-list-item");
	const listItemHand4 = document.createElement("ons-list-item");
	const listItemHand5 = document.createElement("ons-list-item");
	const divHand1 = document.createElement("div");
	const divHand2 = document.createElement("div");
	const divHand3 = document.createElement("div");
	const divHand4 = document.createElement("div");
	const divHand5 = document.createElement("div");
	const divHeld1 = document.createElement("div");
	const divHeld2 = document.createElement("div");
	const divHeld3 = document.createElement("div");
	const divHeld4 = document.createElement("div");
	const divHeld5 = document.createElement("div");

	let rowCredit;
	let colCreditLeft;
	let colCreditCenter;
	let colCreditRight;
	let divTextWager;

	/*
				<ons-row>
					<ons-col id="JKWDalignBottomLeft" width="20%">
						<div id="JKWDtextWager">
							WAGER <span id="JKWDvalueWager"></span>
						</div>
						<div id="JKWDtextWin">
							WIN <span id="JKWDvalueWin"></span>
						</div>
						<div id="JKWDtextPaid">
							PAID <span id="JKWDvaluePaid"></span>
						</div>
					</ons-col>
					<ons-col>
						<div id="JKWDtextBottom">
							GOOD LUCK
						</div>
					</ons-col>
					<ons-col id="JKWDalignBottomRight" width="20%">
						<div id="JKWDtextCredits">
							CREDITS
						</div>
						<div id="JKWDvalueCredit">
						</div>
						<div>
						</div>
					</ons-col>
				</ons-row>

*/
const rowButton = document.createElement("ons-row");
const colButtonLeft = document.createElement("ons-col");
const colButtonCenter = document.createElement("ons-col");
const colButtonRight = document.createElement("ons-col");
const listItemButtonLeft = document.createElement("ons-list-item");
const listItemButtonCenter = document.createElement("ons-list-item");
const listItemButtonRight = document.createElement("ons-list-item");

const list = document.getElementById("listJokersWild");
const calculateRate = (multiplier) =>
{
	const rate =
		multiplier < JW.RateChange ?
			JW.Rate1.map((value) => value  * multiplier) :
			JW.Rate2.map((value) => value  * multiplier);
	return rate;
};

//Rate
divTextRate.setAttribute("id", "JWTextRate");
divTextRate.insertAdjacentHTML("beforeend", JW.Hands.join("<br>"));
divRate1.setAttribute("id", "JWRate1");
divRate1.insertAdjacentHTML("beforeend", calculateRate(1).join("<br>"));
divRate2.setAttribute("id", "JWRate2");
divRate2.insertAdjacentHTML("beforeend", calculateRate(2).join("<br>"));
divRate3.setAttribute("id", "JWRate3");
divRate3.insertAdjacentHTML("beforeend", calculateRate(3).join("<br>"));
divRate4.setAttribute("id", "JWRate4");
divRate4.insertAdjacentHTML("beforeend", calculateRate(20).join("<br>"));
divRate5.setAttribute("id", "JWRate5");
divRate5.insertAdjacentHTML("beforeend", calculateRate(40).join("<br>"));
divRow1.setAttribute("class", "row");
divRow1.appendChild(divTextRate);
divRow1.appendChild(divRate1);
divRow1.appendChild(divRate2);
divRow1.appendChild(divRate3);
divRow1.appendChild(divRate4);
divRow1.appendChild(divRate5);

divTextCaution.setAttribute("id", "JWTextCaution");
divTextCaution.insertAdjacentHTML("beforeend", JW.Caution);
divRow2.setAttribute("class", "row");
divRow2.appendChild(divTextCaution);

listItemRate.appendChild(divRow1);
listItemRate.appendChild(divRow2);

fragment.appendChild(listItemRate);

//Hand
divHand1.setAttribute("id", "JWHand1");
divHand1.insertAdjacentHTML("beforeend", "🂠");
divHand2.setAttribute("id", "JWHand2");
divHand2.insertAdjacentHTML("beforeend", "🂠");
divHand3.setAttribute("id", "JWHand3");
divHand3.insertAdjacentHTML("beforeend", "🂠");
divHand4.setAttribute("id", "JWHand4");
divHand4.insertAdjacentHTML("beforeend", "🂠");
divHand5.setAttribute("id", "JWHand5");
divHand5.insertAdjacentHTML("beforeend", "🂠");
divHeld1.setAttribute("class", "heldText hidden");
divHeld1.insertAdjacentHTML("beforeend", "HELD");
divHeld2.setAttribute("class", "heldText hidden");
divHeld2.insertAdjacentHTML("beforeend", "HELD");
divHeld3.setAttribute("class", "heldText hidden");
divHeld3.insertAdjacentHTML("beforeend", "HELD");
divHeld4.setAttribute("class", "heldText hidden");
divHeld4.insertAdjacentHTML("beforeend", "HELD");
divHeld5.setAttribute("class", "heldText hidden");
divHeld5.insertAdjacentHTML("beforeend", "HELD");
listItemHand1.setAttribute("modifier", "nodivider");
listItemHand1.appendChild(divHand1);
listItemHand1.appendChild(divHeld1);
listItemHand2.setAttribute("modifier", "nodivider");
listItemHand2.appendChild(divHand2);
listItemHand2.appendChild(divHeld2);
listItemHand3.setAttribute("modifier", "nodivider");
listItemHand3.appendChild(divHand3);
listItemHand3.appendChild(divHeld3);
listItemHand4.setAttribute("modifier", "nodivider");
listItemHand4.appendChild(divHand4);
listItemHand4.appendChild(divHeld4);
listItemHand5.setAttribute("modifier", "nodivider");
listItemHand5.appendChild(divHand5);
listItemHand5.appendChild(divHeld5);
colHand1.setAttribute("width", "20%");
colHand1.appendChild(listItemHand1);
colHand2.setAttribute("width", "20%");
colHand2.appendChild(listItemHand2);
colHand3.setAttribute("width", "20%");
colHand3.appendChild(listItemHand3);
colHand4.setAttribute("width", "20%");
colHand4.appendChild(listItemHand4);
colHand5.setAttribute("width", "20%");
colHand5.appendChild(listItemHand5);

rowHand.appendChild(colHand1);
rowHand.appendChild(colHand2);
rowHand.appendChild(colHand3);
rowHand.appendChild(colHand4);
rowHand.appendChild(colHand5);
console.log(rowHand);
fragment.appendChild(rowHand);

// Button
fragment.appendChild(rowButton);

list.appendChild(fragment);

};


/*
				<ons-row>
					<ons-col id="JKWDalignBottomLeft" width="20%">
						<div id="JKWDtextWager">
							WAGER <span id="JKWDvalueWager"></span>
						</div>
						<div id="JKWDtextWin">
							WIN <span id="JKWDvalueWin"></span>
						</div>
						<div id="JKWDtextPaid">
							PAID <span id="JKWDvaluePaid"></span>
						</div>
					</ons-col>
					<ons-col>
						<div id="JKWDtextBottom">
							GOOD LUCK
						</div>
					</ons-col>
					<ons-col id="JKWDalignBottomRight" width="20%">
						<div id="JKWDtextCredits">
							CREDITS
						</div>
						<div id="JKWDvalueCredit">
						</div>
						<div>
						</div>
					</ons-col>
				</ons-row>
				<ons-row>
					<ons-col id="JKWDbuttonLeft" width="33%">
						<ons-list-item id="JKWDbetOne" tappable>
							BET ONE
						</ons-list-item>
					</ons-col>
					<ons-col id="JKWDbuttonCenter" width="33%">
						<ons-list-item id="JKWDmaxBet" tappable>
							MAX BET
						</ons-list-item>
					</ons-col>
					<ons-col id="JKWDbuttonRight" width="33%">
						<ons-list-item tappable>
							<span id="JKWDdeal"></span>
							<span id="JKWDdraw"></span>
						</ons-list-item>
					</ons-col>
				</ons-row>

				<ons-list-item>
					<div id="JKWDtextRate">
						<div class="row">
							<div id="JKWDtextHand">
ROYAL FLUSH W/O JOKER--<br>
FIVE OF A KIND---------<br>
STRAIGHT FLUSH---------<br>
FOUR OF A KIND---------<br>
FULL HOUSE-------------<br>
FLUSH------------------<br>
STRAIGHT---------------<br>
THREE OF A KIND--------<br>
TWO PAIR---------------
							</div>
							<div id="JKWDrate0">
500<br>100<br>50<br>20<br>8<br>5<br>4<br>2<br>1
							</div>
							<div id="JKWDrate1">
1000<br>200<br>100<br>40<br>16<br>10<br>8<br>4<br>2
							</div>
							<div id="JKWDrate2">
1500<br>300<br>150<br>60<br>24<br>15<br>12<br>6<br>3
							</div>
							<div id="JKWDrate3">
20000<br>2000<br>1000<br>400<br>160<br>100<br>80<br>40<br>20
							</div>
							<div id="JKWDrate4">
40000<br>4000<br>2000<br>800<br>320<br>200<br>160<br>80<br>40
							</div>
						</div>
						<div class="row">
							<div id="JKWDtextCaution">
ROYAL FLUSH WITH JOKER REGARDED AS STRAIGHT FLUSH
							</div>
						</div>
					</div>
				</ons-list-item>
				<ons-row>
					<ons-col width="20%">
						<ons-list-item modifier="nodivider">
							<div id="JKWDhand0">🂠</div>
							<div class="holdText hidden">HOLD</div>
						</ons-list-item>
					</ons-col>
					<ons-col width="20%">
						<ons-list-item modifier="nodivider">
							<span id="JKWDhand1">🂠</span><br>
							<span class="holdText hidden">HOLD</span>
						</ons-list-item>
					</ons-col>
					<ons-col width="20%">
						<ons-list-item modifier="nodivider">
							<span id="JKWDhand2">🂠</span><br>
							<span class="holdText hidden">HOLD</span>
						</ons-list-item>
					</ons-col>
					<ons-col width="20%">
						<ons-list-item modifier="nodivider">
							<span id="JKWDhand3">🂠</span><br>
							<span class="holdText hidden">HOLD</span>
						</ons-list-item>
					</ons-col>
					<ons-col width="20%">
						<ons-list-item modifier="nodivider">
							<span id="JKWDhand4">🂠</span><br>
							<span class="holdText hidden">HOLD</span>
						</ons-list-item>
					</ons-col>
				</ons-row>

*/

/*
	startJKWD();
	「DEAL」を押したときに発火。
	連コ、カードの初期化、カードの表示、判定の呼び出しまでする。
*/
const startJKWD = () =>
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
		updateJKWD();
	}

	// トランプを初期化する。
	initCard(53);

	let i = 0;
	let loopCount = 0;

	const timer = setInterval(() =>
	{
		if(cards[i].mark == 0 || cards[i].mark == 1 || cards[i].mark == 4)
		{
			removeClass(`#JKWDhand${i}`, "red");
			addClass(`#JKWDhand${i}`, "black");
		}
		else
		{
			removeClass(`#JKWDhand${i}`, "black");
			addClass(`#JKWDhand${i}`, "red");
		}
		changeText(`#JKWDhand${i}`, illust[cards[i].mark][cards[i].number]);

		loopCount++;
		i++;
		if(!(loopCount < 5))
		{
			i = 0;
			changeText("#JKWDdeal", "");
			changeText("#JKWDdraw", "DRAW");
			setOnclick("#JKWDbuttonRight", drawJKWD);
			clearInterval(timer);
		}
	}, 100);
};

/*
	drawJKWD();
	setsumei kakou
*/
const drawJKWD = () =>
{
	let JKWDholds;
	let i = 0;
	let loopCount = 0;

	let timer = setInterval(() =>
	{
		JKWDholds = document.getElementById("pageJokersWild").getElementsByClassName("holdText");

		if(JKWDholds[i].classList.contains("hidden"))
		{
			console.log(JKWDholds[i].className);
			changeText(`#JKWDhand${i}`, illust[cards[5 + i].mark][cards[5 + i].number]);
			cards[i].mark = cards[5 + i].mark;
			cards[i].number = cards[5 + i].number;

			if(cards[i].mark == 0 || cards[i].mark == 1 || cards[i].mark == 4)
			{
				removeClass(`#JKWDhand${i}`, "red");
				addClass(`#JKWDhand${i}`, "black");
			}
			else
			{
				removeClass(`#JKWDhand${i}`, "black");
				addClass(`#JKWDhand${i}`, "red");
			}
		}

		loopCount++;
		i++;
		if(!(loopCount < 5))
		{
			i = 0;
			judgeJKWD();
			clearInterval(timer);
		}
	}, 100);
};

/*
	judgeJKWD();
	役の判定をする。
*/
const judgeJKWD = () =>
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
	// console.log("bucketMarks: " + bucketMarks);
	// console.log("bucketNumbers: " + bucketNumbers);

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
		changeText("#JKWDtextBottom", "GAME OVER");
		changeText("#JKWDdraw", "");
		changeText("#JKWDdeal", "DEAL");
		setOnclick("#JKWDbuttonRight", startJKWD);
	}
	else if(judge > 0)
	{
		changeText("#JKWDtextBottom", "WINNER !");
		if(judge == 500)
		{
			win = judge * (wager + Math.floor(wager / 10) * 10);
		}
		else
		{
			win = judge * wager;
		}
		updateJKWD();
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

const payOutJKWD = (judge) =>
{
	return 0;
};

/*
	betJKWD(掛け金);
	「BET ONE」、「MAX BET」を押したときに発火。
*/
const betJKWD = (bet) =>
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
		changeText("#JKWDtextBottom", "GOOD LUCK");
		wager = bet;
		credit -= bet;
	}
	updateJKWD();
};

/*
	updateJKWD();
	wager, win, paid, creditsの表示を更新する。
*/

let updateJKWD = () =>
{
	changeText("#JKWDvalueWager", wager.padding(" ", 2));
	changeText("#JKWDvalueWin", win.padding(" ", 5));
	changeText("#JKWDvaluePaid", paid.padding(" ", 4));
	changeText("#JKWDvalueCredit", credit);
};
