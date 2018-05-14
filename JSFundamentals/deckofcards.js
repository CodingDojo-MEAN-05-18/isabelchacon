class Deck {
    constructor(){
        this.cards = [];
        this.num = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
        this.group = ["Diamonds","Clubs","Hearts","Spades"];

        for (var num in this.num){
            for (var group in this.group){
                this.cards.push(this.num[num]+" of "+this.group[group]);
            }
        }
        
    }

    shuffle(){
        var m = this.cards.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
        return this;
    }

    reset(){
        this.cards=[];
        for (var num in this.num){
            for (var group in this.group){
                this.cards.push(this.num[num]+" of "+this.group[group]);
            }
        }
    }

    deal(){
        this.shuffle();
        return this.cards.pop();
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    take(deck){
        this.hand.push(deck.deal());
        return this;
    }

    discard(){
        this.hand.pop();
        return this;
    }
}

myDeck = new Deck();
ana = new Player("Ana");

ana.take(myDeck);
ana.take(myDeck);
ana.take(myDeck);
ana.discard();
console.log(ana.hand);