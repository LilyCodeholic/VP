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
class setJW
{
	constructor()
	{
		this.deck = [];
		this.addressDeck = 0;
		this.illusts =
		{
			s: ["", "🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"],
			c: ["", "🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞"],
			h: ["", "🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾"],
			d: ["", "🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎"],
			j: ["🃟"],
			r: ["🂠"]
		};
		this.suits = ["s", "c", "h", "d"];
		this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
		this.jokers = [1];
		this.hands =
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
		];
		this.caution = "ROYAL FLUSH WITH JOKER REGARDED AS STRAIGHT FLUSH";
		this.rate1 = [500, 100, 50, 20, 8, 5, 4, 2, 1];
		this.rate2 = [1000, 100, 50, 20, 8, 5, 4, 2, 1];
		this.rateChange = 5;
		this.rotateRate = 20;
		this.maxBet = 40;
		this.minBet = 1;
	}

	// wagerとrateをかけた配列を返す
	calculateRate(multiplier)
	{
		const rate =
			multiplier < this.rateChange
				? this.rate1.map((value) => value * multiplier)
				: this.rate2.map((value) => value * multiplier);
		return rate;
	}
}
const JW = new setJW();

class ContextJW
{
	constructor()
	{
	}

	get wager()
	{
		return this._wager;
	}
	set wager(value)
	{
		this._wager = value;
		this.state.domValueWager.textContent = value;
	}
	get win()
	{
		return this._win;
	}
	set win(value)
	{
		this._win = value;
		this.state.domValueWin.textContent = value;
	}
	get paid()
	{
		return this._paid;
	}
	set paid(value)
	{
		this._paid = value;
		this.state.domValuePaid.textContent = value;
	}
	get credits()
	{
		return this._credits;
	}
	set credits(value)
	{
		this._credits =  value;
		this.state.domValueCredits.textContent = value;
	}

	startGame()
	{
		console.log("JW: startBet()");
		this.state = new bet();

		this.wager = 0;
		this.win = 0;
		this.paid = 0;
		this.credits = 500;
	}
}

class UI
{
	constructor()
	{
		this.domRate =
		[
			document.getElementById("JWrate0"),
			document.getElementById("JWrate1"),
			document.getElementById("JWrate2"),
			document.getElementById("JWrate3"),
			document.getElementById("JWrate4"),
		];

		this.domValueWager = document.getElementById("JWvalueWager");
		this.domValueWin = document.getElementById("JWvalueWin");
		this.domValuePaid = document.getElementById("JWvaluePaid");
		this.domValueCredits = document.getElementById("JWvalueCredits");
		this.domTextBottomCenter = document.getElementById("JWtextBottomCenter");

		this.domButtonLeft = document.getElementById("JWbuttonLeft");
		this.domButtonCenter = document.getElementById("JWbuttonCenter");
		this.domButtonRight = document.getElementById("JWbuttonRight");
		this.domTextButtonLeft = document.getElementById("JWtextButtonLeft");
		this.domTextButtonCenter = document.getElementById("JWtextButtonCenter");
		this.domTextButtonRight = document.getElementById("JWtextButtonRight");

		this.domHand =
		[
			document.getElementById("JWhand0"),
			document.getElementById("JWhand1"),
			document.getElementById("JWhand2"),
			document.getElementById("JWhand3"),
			document.getElementById("JWhand4")
		];
		this.domHeld =
		[
			document.getElementById("JWheld0"),
			document.getElementById("JWheld1"),
			document.getElementById("JWheld2"),
			document.getElementById("JWheld3"),
			document.getElementById("JWheld4")
		];
	}

	pushButtonLeft()
	{
		console.log(`${this.stateName}: push ${this.domButtonLeft.id}`);
	}
	pushButtonCenter()
	{
		console.log(`${this.stateName}: push ${this.domButtonCenter.id}`);
	}
	pushButtonRight()
	{
		console.log(`${this.stateName}: push ${this.domButtonRight.id}`);
	}
	pushHand(event)
	{
		console.log(`${this.stateName}: push ${event.target.id}`);
	}

	changeRate()
	{
		const {wager} = gameJW;
	
		// rotateRate[3] -3 (17)枚までは domRate3 まで変更
		if(wager <= (JW.rotateRate - 3))
		{
			this.domRate[0].innerHTML = JW.calculateRate(wager).join("<br>");
			this.domRate[1].innerHTML = JW.calculateRate(wager + 1).join("<br>");
			this.domRate[2].innerHTML = JW.calculateRate(wager + 2).join("<br>");
		}
		// maxBet - 3 (37)枚までは domRate4 まで変更
		else if(wager < (JW.maxBet - 3))
		{
			this.domRate[0].innerHTML = JW.calculateRate(wager + 0).join("<br>");
			this.domRate[1].innerHTML = JW.calculateRate(wager + 1).join("<br>");
			this.domRate[2].innerHTML = JW.calculateRate(wager + 2).join("<br>");
			this.domRate[3].innerHTML = JW.calculateRate(wager + 3).join("<br>");
		}
		// maxBet (40) 枚の場合は maxBet - 4 ～ maxBet までにする
		else if(wager === JW.maxBet)
		{
			this.domRate[0].innerHTML = JW.calculateRate(JW.maxBet - 4).join("<br>");
			this.domRate[1].innerHTML = JW.calculateRate(JW.maxBet - 3).join("<br>");
			this.domRate[2].innerHTML = JW.calculateRate(JW.maxBet - 2).join("<br>");
			this.domRate[3].innerHTML = JW.calculateRate(JW.maxBet - 1).join("<br>");
		}
	}

	initCard()
	{
		const cardNum = JW.suits.length * JW.numbers.length + JW.jokers.length;
		const result = [];

		// カードの準備
		for(const suit of JW.suits)
		{
			const color = (suit === "s" || suit === "c")
				? "b"
				: "r";

			for(const number of JW.numbers)
			{
				result.push(
					{
						suit,
						number,
						color,
					}
				);
			}
		}

		// jokerを含むゲームの場合、ジョーカーを用意する
		for(const j of JW.jokers)
		{
			if(j === 0)
			{
				break;
			}
			// 1枚なら黒、2枚目以降は赤、黒...と color を設定する
			const color = (j % 2 !== 0)
				? "b"
				: "r";
			result.push(
				{
					suit: "j",
					number: 0,
					color,
				}
			);
		}

		// 取り出しアルゴリズムでシャッフルする
		let index = -1;
		while(++index < cardNum)
		{
			const rand = Math.floor(Math.random() * (index + 1));
			if (rand !== index)
			{
				JW.deck[index] = JW.deck[rand];
			}
			JW.deck[rand] = result[index];
		}

		/*
		 * デバッグ
		for(let i = 0; i < 10; i++){
			console.log(JW.deck[i].suit, JW.deck[i].number, JW.deck[i].color)
		}
		 */
	}
}

// ページ表示 から DEAL まで
class bet extends UI
{
	constructor()
	{
		super();
		this.stateName = "bet";

		this.textButtonLeft = "BET ONE";
		this.textButtonCenter = "MAX BET";
		this.textButtonRight = "DEAL";
		this.textBottomCenter = "GAME OVER";

		this.domTextButtonLeft.textContent = this.textButtonLeft;
		this.domTextButtonCenter.textContent = this.textButtonCenter;
		this.domTextButtonRight.textContent = this.textButtonRight;
		this.domTextBottomCenter.textContent = this.textBottomCenter;

		this.domButtonLeft.onclick = this.pushButtonLeft;
		this.domButtonCenter.onclick = this.pushButtonCenter;
		this.domButtonRight.onclick = this.pushButtonRight;
	}

	// BET ONE
	pushButtonLeft = () =>
	{
		super.pushButtonLeft();

		const {credits, wager} = gameJW;
		if(credits >= JW.minBet && wager < JW.maxBet)
		{
			gameJW.credits = credits - 1;
			gameJW.wager = wager + 1;
		}
		super.changeRate();

		return new bet();
	};

	// MAX BET
	pushButtonCenter = () =>
	{
		super.pushButtonCenter();

		const {credits, wager} = gameJW;
		if(credits + wager >= JW.minBet && wager < JW.maxBet)
		{
			gameJW.credits = credits - (JW.maxBet - wager);
			gameJW.wager = JW.maxBet;
		}
		super.changeRate();

		return new bet();
	};

	// DEAL
	pushButtonRight = () =>
	{
		super.pushButtonRight();

		return new draw();
	};
}

// DEAL から DRAW まで
class draw extends UI
{
	constructor()
	{
		super();
		this.stateName = "game";

		this.textButtonLeft = "";
		this.textButtonCenter = "";
		this.textButtonRight = "DRAW";
		this.textBottomCenter = "GOOD LUCK";

		this.domTextButtonLeft.textContent = this.textButtonLeft;
		this.domTextButtonCenter.textContent = this.textButtonCenter;
		this.domTextButtonRight.textContent = "";
		this.domTextBottomCenter.textContent = this.textBottomCenter;

		super.initCard();

		let i = JW.addressDeck;
		let loopCount = this.domHand.length;

		// カードを配る
		const timer = setInterval(() =>
		{
			if(JW.deck[i].color === "b")
			{
				this.domHand[i].removeAttribute("class");
				this.domHand[i].setAttribute("class", "black");
			}
			else
			{
				this.domHand[i].removeAttribute("class");
				this.domHand[i].setAttribute("class", "red");
			}
			this.domHand[i].textContent = JW.illusts[JW.deck[i].suit][JW.deck[i].number]
	
			loopCount--;
			i++;
			JW.addressDeck = i;
			if(!(loopCount > 0))
			{
				this.domTextButtonRight.textContent = this.textButtonRight;
				this.domButtonRight.onclick = this.pushButtonRight;
				this.domHand.forEach((element) => {element.onclick = this.pushHand})
				clearInterval(timer);
			}
		}, 100);
	}

	// HOLD
	pushHand = (event) =>
	{
		super.pushHand(event);

		const target = document.getElementById(`JWheld${event.target.id.slice(-1)}`);

		// hidden クラスをトグルする
		if(target.classList.contains("hidden") === true)
		{
			target.classList.remove("hidden");
		}
		else
		{
			target.classList.add("hidden");
		}
	}

	// DRAW
	pushButtonRight = () =>
	{
		super.pushButtonRight();

		const listHeld = () =>
		{
			const returnObj =
			{
				loopCount: 0,
				heldHand: [],
			}
			for(const element of this.domHeld)
			{
				if(element.classList.contains("hidden"))
				{
					returnObj.loopCount++;
					returnObj.heldHand.push(true);
				}
				else
				{
					returnObj.heldHand.push(false);
				}
			}

			return returnObj;
		}
		let {loopCount, heldHand} = listHeld();
		console.log(loopCount, heldHand, JW.addressDeck);

		// hold されてないぶんだけ deck から取り出して入れ替えていく感じ
		// 12345678 hold 2,4 16375248->163758
		heldHand.forEach((held, index) =>
		{
			if(held === true)
			{
				JW.deck[index] = JW.deck[JW.addressDeck];
				JW.deck.splice(this.domHand.length, 1);

				const timer = setInterval(() =>
				{
					if(JW.deck[index].color === "b")
					{
						this.domHand[index].removeAttribute("class");
						this.domHand[index].setAttribute("class", "black");
					}
					else
					{
						this.domHand[index].removeAttribute("class");
						this.domHand[index].setAttribute("class", "red");
					}
					this.domHand[index].textContent = JW.illusts[JW.deck[index].suit][JW.deck[index].number];
			
					clearInterval(timer);
				}, index * 100);
			}
		});

		/*
		 * デバッグ
		 */
		for(let i = 0; i < this.domHand.length; i++){
			console.log(JW.deck[i].suit, JW.deck[i].number, JW.deck[i].color)
		}

		return new result();
	}
}

// DRAW から DOUBLE UP もしくは PAYOUT の選択まで
class result extends UI
{
	constructor()
	{
		super();

		const has =
		{
			Joker: false,
			Royal: false,
			Flush: false,
			Straight: false,
			Four: false,
			Three: false,
			Two: false,
			TwoPair: false,
		};
		const bucket =
		{
			suit: [0, 0, 0, 0, 0],
			number: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		};
		// 手札のスートと数字を数える
		for(let i = 0; i < this.domHand.length; i++)
		{
			bucket.suit[JW.suits.indexOf(JW.deck[i].suit)]++;
			bucket.number[JW.deck[i].number]++;
		}

		/* debug */
		console.log(bucket.suit);
		console.log(bucket.number);

		// ジョーカーが含まれているか
		if(bucket.number[0] > 0)
		{
			console.log(`hasJoker: ${bucket.number[0]}`);
			has.Joker = true;
		}
		// ロイヤルフラッシュの数字の組み合わせか
		if(bucket.number[1] * bucket.number[10] * bucket.number[11] * bucket.number[12] * bucket.number[13] == 1)
		{
			console.log(`hasRoyal: ${bucket.number[1]} ${bucket.number[10]} ${bucket.number[11]} ${bucket.number[12]} ${bucket.number[13]}`);
			has.Royal = true;
		}
		// 同じマークが5枚揃っているか
		if(bucket.suit.some(function(element){return element + this[0] == 5;}, bucket.number))
		{
			console.log(`hasFlush: ${bucket.suit[0]} ${bucket.suit[1]} ${bucket.suit[2]} ${bucket.suit[3]} ${bucket.suit[4]} ${bucket.suit[5]}`);
			has.Flush = true;
		}
		// 数字が5連番か
		if(bucket.number.lastIndexOf(1) - bucket.number.indexOf(1, 1) < 5 &&
		bucket.number.filter(function(element){return element == 1;}).length + bucket.number[0] >= 5)
		{
			console.log(`hasStraight: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
			has.Straight = true;
		}
		// 同じ数字が4枚あるか
		if(bucket.number.some(function(element){return element == 4;}))
		{
			console.log(`hasFour: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
			has.Four = true;
		}
		// 同じ数字が3枚あるか
		if(bucket.number.some(function(element){return element == 3;}))
		{
			console.log(`hasThree: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
			has.Three = true;
		}
		// 同じ数字が2枚あるか
		if(bucket.number.some(function(element){return element == 2;}))
		{
			console.log(`hasTwo: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
			has.Two = true;
		}
		// 同じ数字が2枚を2組持っているか
		if(bucket.number.filter(function(element){return element >= 2;}).length >= 2)
		{
			console.log(`hasTwoPair: ${cards[0].number} ${cards[1].number} ${cards[2].number} ${cards[3].number} ${cards[4].number}`);
			has.TwoPair = true;
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

	}
}

/*
class payout
{
	constructor()
	{
	}
}
*/

// DOM生成
const fragment = document.createDocumentFragment();

// Rate
/*
<ons-list-item>
	<div id="JWtextRate">
		<div class="row">
			<div id="JWtextHand">
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
			<div id="JWrate0">
500<br>100<br>50<br>20<br>8<br>5<br>4<br>2<br>1
			</div>
			<div id="JWrate1">
1000<br>200<br>100<br>40<br>16<br>10<br>8<br>4<br>2
			</div>
			<div id="JWrate2">
1500<br>300<br>150<br>60<br>24<br>15<br>12<br>6<br>3
			</div>
			<div id="JWrate3">
20000<br>2000<br>1000<br>400<br>160<br>100<br>80<br>40<br>20
			</div>
			<div id="JWrate4">
40000<br>4000<br>2000<br>800<br>320<br>200<br>160<br>80<br>40
			</div>
		</div>
		<div class="row">
			<div id="JWtextCaution">
ROYAL FLUSH WITH JOKER REGARDED AS STRAIGHT FLUSH
			</div>
		</div>
	</div>
</ons-list-item>
*/
const listItemRate = document.createElement("ons-list-item");
const divTextRate = document.createElement("div");
const divRowRate0 = document.createElement("div");
const divRate0 = document.createElement("div");
const divRate1 = document.createElement("div");
const divRate2 = document.createElement("div");
const divRate3 = document.createElement("div");
const divRate4 = document.createElement("div");

const divRowRate1 = document.createElement("div");
const divTextCaution = document.createElement("div");

divTextRate.setAttribute("id", "JWtextRate");
divTextRate.insertAdjacentHTML("beforeend", JW.hands.join("<br>"));
divRate0.setAttribute("id", "JWrate0");
divRate0.insertAdjacentHTML("beforeend", JW.calculateRate(1).join("<br>"));
divRate1.setAttribute("id", "JWrate1");
divRate1.insertAdjacentHTML("beforeend", JW.calculateRate(2).join("<br>"));
divRate2.setAttribute("id", "JWrate2");
divRate2.insertAdjacentHTML("beforeend", JW.calculateRate(3).join("<br>"));
divRate3.setAttribute("id", "JWrate3");
divRate3.insertAdjacentHTML("beforeend", JW.calculateRate(20).join("<br>"));
divRate4.setAttribute("id", "JWrate4");
divRate4.insertAdjacentHTML("beforeend", JW.calculateRate(40).join("<br>"));
divRowRate0.setAttribute("class", "row");
divRowRate0.appendChild(divTextRate);
divRowRate0.appendChild(divRate0);
divRowRate0.appendChild(divRate1);
divRowRate0.appendChild(divRate2);
divRowRate0.appendChild(divRate3);
divRowRate0.appendChild(divRate4);

divTextCaution.setAttribute("id", "JWtextCaution");
divTextCaution.insertAdjacentHTML("beforeend", JW.caution);
divRowRate1.setAttribute("class", "row");
divRowRate1.appendChild(divTextCaution);

listItemRate.appendChild(divRowRate0);
listItemRate.appendChild(divRowRate1);

fragment.appendChild(listItemRate);

// Hand
/*
<ons-row>
	<ons-col width="20%">
		<ons-list-item modifier="nodivider">
			<span id="JWhand1">🂠</span><br>
			<span class="heldText hidden">HELD</span>
		</ons-list-item>
	</ons-col>
	<ons-col width="20%">
		<ons-list-item modifier="nodivider">
			<span id="JWhand2">🂠</span><br>
			<span class="heldText hidden">HELD</span>
		</ons-list-item>
	</ons-col>
	<ons-col width="20%">
		<ons-list-item modifier="nodivider">
			<span id="JWhand3">🂠</span><br>
			<span class="heldText hidden">HELD</span>
		</ons-list-item>
	</ons-col>
	<ons-col width="20%">
		<ons-list-item modifier="nodivider">
			<span id="JWhand4">🂠</span><br>
			<span class="heldText hidden">HELD</span>
		</ons-list-item>
	</ons-col>
	<ons-col width="20%">
		<ons-list-item modifier="nodivider">
			<span id="JWhand5">🂠</span><br>
			<span class="heldText hidden">HELD</span>
		</ons-list-item>
	</ons-col>
</ons-row>
*/
const rowHand = document.createElement("ons-row");
const colHand0 = document.createElement("ons-col");
const colHand1 = document.createElement("ons-col");
const colHand2 = document.createElement("ons-col");
const colHand3 = document.createElement("ons-col");
const colHand4 = document.createElement("ons-col");
const listItemHand0 = document.createElement("ons-list-item");
const listItemHand1 = document.createElement("ons-list-item");
const listItemHand2 = document.createElement("ons-list-item");
const listItemHand3 = document.createElement("ons-list-item");
const listItemHand4 = document.createElement("ons-list-item");
const divHand0 = document.createElement("div");
const divHand1 = document.createElement("div");
const divHand2 = document.createElement("div");
const divHand3 = document.createElement("div");
const divHand4 = document.createElement("div");
const divHeld0 = document.createElement("div");
const divHeld1 = document.createElement("div");
const divHeld2 = document.createElement("div");
const divHeld3 = document.createElement("div");
const divHeld4 = document.createElement("div");

divHand0.setAttribute("id", "JWhand0");
divHand0.insertAdjacentHTML("beforeend", "🂠");
divHand1.setAttribute("id", "JWhand1");
divHand1.insertAdjacentHTML("beforeend", "🂠");
divHand2.setAttribute("id", "JWhand2");
divHand2.insertAdjacentHTML("beforeend", "🂠");
divHand3.setAttribute("id", "JWhand3");
divHand3.insertAdjacentHTML("beforeend", "🂠");
divHand4.setAttribute("id", "JWhand4");
divHand4.insertAdjacentHTML("beforeend", "🂠");
divHeld0.setAttribute("class", "heldText hidden");
divHeld0.setAttribute("id", "JWheld0");
divHeld0.insertAdjacentHTML("beforeend", "HELD");
divHeld1.setAttribute("class", "heldText hidden");
divHeld1.setAttribute("id", "JWheld1");
divHeld1.insertAdjacentHTML("beforeend", "HELD");
divHeld2.setAttribute("class", "heldText hidden");
divHeld2.setAttribute("id", "JWheld2");
divHeld2.insertAdjacentHTML("beforeend", "HELD");
divHeld3.setAttribute("class", "heldText hidden");
divHeld3.setAttribute("id", "JWheld3");
divHeld3.insertAdjacentHTML("beforeend", "HELD");
divHeld4.setAttribute("class", "heldText hidden");
divHeld4.setAttribute("id", "JWheld4");
divHeld4.insertAdjacentHTML("beforeend", "HELD");
listItemHand0.setAttribute("modifier", "nodivider");
listItemHand0.appendChild(divHand0);
listItemHand0.appendChild(divHeld0);
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
colHand0.setAttribute("width", "20%");
colHand0.appendChild(listItemHand0);
colHand1.setAttribute("width", "20%");
colHand1.appendChild(listItemHand1);
colHand2.setAttribute("width", "20%");
colHand2.appendChild(listItemHand2);
colHand3.setAttribute("width", "20%");
colHand3.appendChild(listItemHand3);
colHand4.setAttribute("width", "20%");
colHand4.appendChild(listItemHand4);

rowHand.appendChild(colHand0);
rowHand.appendChild(colHand1);
rowHand.appendChild(colHand2);
rowHand.appendChild(colHand3);
rowHand.appendChild(colHand4);

fragment.appendChild(rowHand);

// Credits
/*
<ons-row>
	<ons-col id="JWtextBottomLeft" width="20%">
		<div id="JWtextWager">WAGER</div>
		<div id="JWtextWin">WIN</div>
		<div id="JWtextPaid">PAID</div>
	</ons-col>
	<ons-col id="JWvalueBottomLeft" width="10%">
		<span id="JWvalueWager"></span>
		<span id="JWtextWin"></span>
		<span id="JWvaluePaid"></span>
	</ons-col>
	<ons-col id="JWbottomCenter">
		<div id="JWtextBottomCenter">GOOD LUCK</div>
	</ons-col>
	<ons-col id="JWbottomRight" width="30%">
		<div id="JWtextCredits">CREDITS</div>
		<div id="JWvalueCredits"></div>
	</ons-col>
</ons-row>
*/
const rowCredits = document.createElement("ons-row");
const colTextBottomLeft = document.createElement("ons-col");
const colValueBottomLeft = document.createElement("ons-col");
const colBottomCenter = document.createElement("ons-col");
const colBottomRight = document.createElement("ons-col");
const divTextWager = document.createElement("div");
const divTextWin = document.createElement("div");
const divTextPaid = document.createElement("div");
const divTextCredits = document.createElement("div");
const divTextBottomCenter = document.createElement("div");
const divValueWager = document.createElement("div");
const divValueWin = document.createElement("div");
const divValuePaid = document.createElement("div");
const divValueCredits = document.createElement("div");

divTextWager.setAttribute("id", "JWtextWager");
divTextWager.insertAdjacentHTML("beforeend", "WAGER");
divTextWin.setAttribute("id", "JWtextWin");
divTextWin.insertAdjacentHTML("beforeend", "WIN");
divTextPaid.setAttribute("id", "JWtextPaid");
divTextPaid.insertAdjacentHTML("beforeend", "PAID");
colTextBottomLeft.setAttribute("id", "JWtextBottomLeft");
colTextBottomLeft.setAttribute("width", "20%");
colTextBottomLeft.appendChild(divTextWager);
colTextBottomLeft.appendChild(divTextWin);
colTextBottomLeft.appendChild(divTextPaid);

divValueWager.setAttribute("id", "JWvalueWager");
divValueWin.setAttribute("id", "JWvalueWin");
divValuePaid.setAttribute("id", "JWvaluePaid");
colValueBottomLeft.setAttribute("id", "JWvalueBottomLeft");
colValueBottomLeft.setAttribute("width", "10%");
colValueBottomLeft.appendChild(divValueWager);
colValueBottomLeft.appendChild(divValueWin);
colValueBottomLeft.appendChild(divValuePaid);

divTextBottomCenter.setAttribute("id", "JWtextBottomCenter");
colBottomCenter.setAttribute("id", "JWbottomCenter");
colBottomCenter.appendChild(divTextBottomCenter);

divTextCredits.setAttribute("id", "JWtextCredits");
divTextCredits.insertAdjacentHTML("beforeend", "CREDITS");
divValueCredits.setAttribute("id", "JWvalueCredits");
colBottomRight.setAttribute("id", "JWbottomRight");
colBottomRight.setAttribute("width", "30%");
colBottomRight.appendChild(divTextCredits);
colBottomRight.appendChild(divValueCredits);

rowCredits.appendChild(colTextBottomLeft);
rowCredits.appendChild(colValueBottomLeft);
rowCredits.appendChild(colBottomCenter);
rowCredits.appendChild(colBottomRight);
fragment.appendChild(rowCredits);

// Button
/*
<ons-row>
	<ons-col id="JWcolButtonLeft" width="33%">
		<ons-list-item id="JWButtonLeft" tappable>
			<div id="JWtextButtonLeft">BET ONE</div>
		</ons-list-item>
	</ons-col>
	<ons-col id="JWcolButtonCenter" width="33%">
		<ons-list-item id="JWButtonCenter" tappable>
			<div id="JWtextButtonCenter">MAX BET</div>
		</ons-list-item>
	</ons-col>
	<ons-col id="JWcolButtonRight" width="33%">
		<ons-list-item id="JWButtonRight" tappable>
			<div id="JWtextButtonRight">DEAL</div>
		</ons-list-item>
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
const divButtonLeft = document.createElement("div");
const divButtonCenter = document.createElement("div");
const divButtonRight = document.createElement("div");

divButtonLeft.setAttribute("id", "JWtextButtonLeft");
listItemButtonLeft.setAttribute("id", "JWbuttonLeft");
listItemButtonLeft.setAttribute("tappable", "");
colButtonLeft.setAttribute("width", "33%");
listItemButtonLeft.appendChild(divButtonLeft);
colButtonLeft.appendChild(listItemButtonLeft);

divButtonCenter.setAttribute("id", "JWtextButtonCenter");
listItemButtonCenter.setAttribute("id", "JWbuttonCenter");
listItemButtonCenter.setAttribute("tappable", "");
colButtonCenter.setAttribute("width", "33%");
listItemButtonCenter.appendChild(divButtonCenter);
colButtonCenter.appendChild(listItemButtonCenter);

divButtonRight.setAttribute("id", "JWtextButtonRight");
listItemButtonRight.setAttribute("id", "JWbuttonRight");
listItemButtonRight.setAttribute("tappable", "");
colButtonRight.setAttribute("width", "33%");
listItemButtonRight.appendChild(divButtonRight);
colButtonRight.appendChild(listItemButtonRight);

rowButton.appendChild(colButtonLeft);
rowButton.appendChild(colButtonCenter);
rowButton.appendChild(colButtonRight);
fragment.appendChild(rowButton);

const list = document.getElementById("listJokersWild");
list.appendChild(fragment);

//

class ContextMario
{
	constructor()
	{
		// きのこを食べる
		this.EVENT_EAT_MUSHROOM = 0;
		// フラワーを食べる
		this.EVENT_EAT_FLOWER = 1;
		// ノコノコに当たる
		this.EVENT_DAMAGE = 2;
	}

	adventures()
	{
		console.log("game start");
		this.state = new MiniMario();
		const gameevent = [0, 1, 2, 1, 1, 2, 2, 2];
		for(const value of gameevent)
		{
			this.state.sayState();
			if(this.EVENT_EAT_MUSHROOM === value)
			{
				this.state = this.state.eatMushroom();
			}
			else if(this.EVENT_EAT_FLOWER === value)
			{
				this.state = this.state.eatFlower();
			}
			else if(this.EVENT_DAMAGE === value)
			{
				this.state = this.state.beDamaged();
			}
			else
			{
				console.log("例外");
			}
		}
	}
}

class Mario
{
	constructor()
	{
		this.Mushroom = "きのこを食べた！";
		this.Flower = "フラワーを食べた！";
		this.damage = "ノコノコに当たった！";
	}

	eatMushroom()
	{
		console.log(`状態遷移(アクション) ---> ${this.Mushroom}`);
	}

	eatFlower()
	{
		console.log(`状態遷移(アクション) ---> ${this.Flower}`);
	}

	beDamaged()
	{
		console.log(`状態遷移(アクション) ---> ${this.damage}`);
	}

	sayState()
	{
		console.log(`this is ${this.constructor.name}`);
	}
}

class MiniMario extends Mario
{
	eatMushroom()
	{
		super.eatMushroom();

		return new BigMario();
	}

	eatFlower()
	{
		super.eatFlower();

		return new FireMario();
	}

	beDamaged()
	{
		super.beDamaged();
		console.log("game over!!");
	}

	sayState()
	{
		super.sayState();
	}
}

class BigMario extends Mario
{
	eatMushroom()
	{
		super.eatMushroom();

		return new BigMario();
	}

	eatFlower()
	{
		super.eatFlower();

		return new FireMario();
	}

	beDamaged()
	{
		super.beDamaged();

		return new MiniMario();
	}

	sayState()
	{
		super.sayState();
	}
}

class FireMario extends Mario
{
	eatMushroom()
	{
		super.eatMushroom();

		return new FireMario();
	}

	eatFlower()
	{
		super.eatFlower();

		return new FireMario();
	}

	beDamaged()
	{
		super.beDamaged();

		return new BigMario();
	}

	sayState()
	{
		super.sayState();
	}
}

//	const Game = new ContextMario();
//	Game.adventures();

const gameJW = new ContextJW();
gameJW.startGame();
};
