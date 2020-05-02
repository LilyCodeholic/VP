const funcMain = () =>
{
	setOnclick("#gotoJokersWild div", function(){VPnavigator.pushPage("JokersWild.html", {animation: "slide"});});
	setOnclick("#gotoAck div", function(){VPnavigator.pushPage("Ack.html", {animation: "slide"});});

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
		this.credit = 500;
		this.wager = 0;
		this.win = 0;
		this.paid = 0;
	}

	get credit()
	{
		return this._credit;
	}
	set credit(value)
	{
		this._credit = this._credit - value;
	}
	get wager()
	{
		return this._wager;
	}
	set wager(value)
	{
		this._wager = this._wager + value;
	}
	get win()
	{
		return this._win;
	}
	set win(value)
	{
		this._win = value;
	}
	get paid()
	{
		return this._paid;
	}
	set paid(value)
	{
		this._paid = value;
	}

	startGame()
	{
<<<<<<< HEAD
		console.log("JW: startBet()");
=======
		console.log("JKWD: startBet()");
>>>>>>> 858477959d60ffb8610f62ed7fbaa670c971eb90
		this.state = new bet();
	}
}

class UI
{
	constructor()
	{
	}

	pushBottomLeft()
	{
		console.log(`push bottom left | state ${gameJKWD.state}`);
	}
	pushBottomCenter()
	{
		console.log(`push bottom center | state ${gameJKWD.state}`);
	}
	pushBottomRight()
	{
		console.log(`push bottom right | state ${gameJKWD.state}`);
	}
	pushCards()
	{
		console.log(`push cards | state ${gameJKWD.state}`);
	}
}

class bet extends UI
{
	constructor()
	{
		this.textBottomLeft = "BET ONE";
		this.textBottomCenter = "MAX BET";
		this.textBottomRight = "DEAL";
	}

	// BET ONE
	pushBottomLeft()
	{
		super.pushBottomLeft();

		const credit = gameJKWD.credit;
		const wager = gameJKWD.wager;
		if(credit >= 1 && wager < 40)
		{
			gameJKWD.credit = 1;
			gameJKWD.wager = 1;
		}
	}

	// MAX BET
	pushBottomCenter()
	{
		const credit = gameJKWD.credit;
		const wager = gameJKWD.wager;
		if(credit + wager  >= 40 && wager < 40)
		{
			gameJKWD.credit = 40 - wager;
			gameJKWD.wager = 40 - wager;
		}
	}

	// DEAL
	pushBottomRight()
	{
		return new game();
	}
}

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


const gameJKWD = new ContextJKWD();
gameJKWD.startGame();
addEventListener("click", 0)
};
