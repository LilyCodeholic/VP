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
		this.maxBet = 40;
		this.minBet = 1;
	}

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
const divRowRate1 = document.createElement("div");
const divRate1 = document.createElement("div");
const divRate2 = document.createElement("div");
const divRate3 = document.createElement("div");
const divRate4 = document.createElement("div");
const divRate5 = document.createElement("div");

const divRowRate2 = document.createElement("div");
const divTextCaution = document.createElement("div");

divTextRate.setAttribute("id", "JWtextRate");
divTextRate.insertAdjacentHTML("beforeend", JW.hands.join("<br>"));
divRate1.setAttribute("id", "JWrate1");
divRate1.insertAdjacentHTML("beforeend", JW.calculateRate(1).join("<br>"));
divRate2.setAttribute("id", "JWrate2");
divRate2.insertAdjacentHTML("beforeend", JW.calculateRate(2).join("<br>"));
divRate3.setAttribute("id", "JWrate3");
divRate3.insertAdjacentHTML("beforeend", JW.calculateRate(3).join("<br>"));
divRate4.setAttribute("id", "JWrate4");
divRate4.insertAdjacentHTML("beforeend", JW.calculateRate(20).join("<br>"));
divRate5.setAttribute("id", "JWrate5");
divRate5.insertAdjacentHTML("beforeend", JW.calculateRate(40).join("<br>"));
divRowRate1.setAttribute("class", "row");
divRowRate1.appendChild(divTextRate);
divRowRate1.appendChild(divRate1);
divRowRate1.appendChild(divRate2);
divRowRate1.appendChild(divRate3);
divRowRate1.appendChild(divRate4);
divRowRate1.appendChild(divRate5);

divTextCaution.setAttribute("id", "JWtextCaution");
divTextCaution.insertAdjacentHTML("beforeend", JW.caution);
divRowRate2.setAttribute("class", "row");
divRowRate2.appendChild(divTextCaution);

listItemRate.appendChild(divRowRate1);
listItemRate.appendChild(divRowRate2);

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

divHand1.setAttribute("id", "JWhand1");
divHand1.insertAdjacentHTML("beforeend", "🂠");
divHand2.setAttribute("id", "JWhand2");
divHand2.insertAdjacentHTML("beforeend", "🂠");
divHand3.setAttribute("id", "JWhand3");
divHand3.insertAdjacentHTML("beforeend", "🂠");
divHand4.setAttribute("id", "JWhand4");
divHand4.insertAdjacentHTML("beforeend", "🂠");
divHand5.setAttribute("id", "JWhand5");
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
// console.log(rowHand);
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

class ContextJW
{
	constructor()
	{
		this.cards = [];
		this.illust =
		[
			["", "🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"],
			["", "🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞"],
			["", "🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾"],
			["", "🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎"],
			["🃟"],
			["🂿"],
			["🂠"]
		];
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

	startGame = () =>
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
		this.domRate1 = document.getElementById("JWrate1");
		this.domRate2 = document.getElementById("JWrate2");
		this.domRate3 = document.getElementById("JWrate3");
		this.domRate4 = document.getElementById("JWrate4");
		this.domRate5 = document.getElementById("JWrate5");

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
	pushCard1()
	{
		console.log(this.textPushCard1);
	}
	pushCard2()
	{
		console.log(this.textPushCard2);
	}
	pushCard3()
	{
		console.log(this.textPushCard3);
	}
	pushCard4()
	{
		console.log(this.textPushCard4);
	}
	pushCard5()
	{
		console.log(this.textPushCard5);
	}
}

class bet extends UI
{
	constructor()
	{
		super();
		this.stateName = "bet";

		this.textButtonLeft = "BET ONE";
		this.textButtonCenter = "MAX BET";
		this.textButtonRight = "DEAL";
		this.textBottomCenter = "GOOD LUCK";

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
		//console.log(Object.getOwnPropertyNames(UI.prototype));
		super.pushButtonLeft();

		const {credits, wager} = gameJW;
		if(credits >= JW.minBet && wager < JW.maxBet)
		{
			gameJW.credits = credits - 1;
			gameJW.wager = wager + 1;
		}

		return new bet();
	};

	// MAX BET
	pushButtonCenter = () =>
	{
		super.pushButtonCenter();

		const {credits, wager} = gameJW;
		if(credits + wager >= JW.minBet && wager < JW.maxBet)
		{
			gameJW.credits = credits - (JW.MaxBet - wager);
			gameJW.wager = JW.MaxBet;
		}

		return new bet();
	};

	// DEAL
	pushButtonRight = () =>
	{
		super.pushButtonRight();

		console.log("return new game()");
		// return new game();
	};
}

/*
class game
{
	constructor()
	{
	}
	generateCard(mark, number)
	{
		this.mark = mark;
		this.number = number;
	}

	initCard(cardNum)
	{
		let tmpCard;
		let i, j, r, x = 0;

		// カードの準備
		for(i = 0; i < 4; i++)
		{
			for(j = 1; j <= 13; j++)
			{
				this.cards[x] = new generateCard(i, j);
				x++;
			}
		}
		// jokerを含むゲームの場合、illust[4][0]の黒ジョーカーを用意する。
		if(cardNum > 52)
		{
			this.cards[x] = new generateCard(4, 0);
			x++;
			// jokerを2枚含むゲームの場合、illust[5][0]の赤ジョーカーを用意する。
			if(cardNum > 53)
			{
				this.cards[x] = new generateCard(5, 0);
			}
		}

		// シャッフルしてます
		for(i = 0; i <= 2; i++)
		{
			for(j = 0; j < cardNum; j++)
			{
				r = Math.floor(Math.random() * cardNum);
				tmpCard = this.cards[j];
				this.cards[j] = this.cards[r];
				this.cards[r] = tmpCard;
			}
		}
	}
}

class gameResult
{
	constructor()
	{
	}
}

class payout
{
	constructor()
	{
	}
}
*/

const gameJW = new ContextJW();
gameJW.startGame();
};
