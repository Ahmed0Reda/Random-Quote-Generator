var Quotes = [{"author":"Oscar Wilde" ,
    "quote":"“Be yourself; everyone else is already taken.”"
},{"author":"Marilyn Monroe" ,
    "quote":"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
},{"author":"Frank Zappa" ,
    "quote":"“So many books, so little time.”"
},{"author":"Albert Einstein" ,
    "quote":"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
},{"author":"Marcus Tullius Cicero" ,
    "quote":"“A room without books is like a body without a soul.”"
},{"author":"Bernard M. Baruch" ,
    "quote":"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
},{"author":"William W. Purkey" ,
    "quote":"“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”"
},{"author":"Dr. Seuss" ,
    "quote":"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
},{"author":" Mae West" ,
    "quote":"“You only live once, but if you do it right, once is enough.”"
},{"author":"Mahatma Gandhi" ,
    "quote":"“Be the change that you wish to see in the world.”"
},{
    "author":"Robert Frost",
    "quote":"“In three words I can sum up everything I've learned about life: it goes on.”"
},{
    "author":"J.K. Rowling",
    "quote":"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"
},{
    "author":"Albert Camus",
    "quote":`“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”`
},{
    "author":"Mark Twain",
    "quote":"“If you tell the truth, you don't have to remember anything.”"
},{
    "author":"Maya Angelou",
    "quote":"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"
},{
    "author":"C.S. Lewis",
    "quote":"“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .”"
},{
    "author":"Elbert Hubbard",
    "quote":"“A friend is someone who knows all about you and still loves you.”"
},{
    "author":"Oscar Wilde",
    "quote":"“To live is the rarest thing in the world. Most people exist, that is all.”"
},{
    "author":" Oscar Wilde",
    "quote":"“Always forgive your enemies; nothing annoys them so much.”"
},{
    "author":" Martin Luther King Jr.",
    "quote":"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”"
},{
    "author":"Mahatma Gandhi",
    "quote":"“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
},{
    "author":"Stephen Chbosky",
    "quote":"“We accept the love we think we deserve.”"
},{
    "author":"Friedrich Nietzsche",
    "quote":"“Without music, life would be a mistake.”"
}];


var previouseQuoteNumber = 0;
function generateRandom(){
    var quoteNumber;
    do {
        quoteNumber = Math.floor(Math.random() * Quotes.length);
    }while(quoteNumber === previouseQuoteNumber);
    previouseQuoteNumber = quoteNumber;
    return quoteNumber;
}

function generateQuote(){
    var num = generateRandom();
    document.getElementById("quote").innerHTML = Quotes[num].quote;
    document.getElementById("quote-author").innerHTML = `--${Quotes[num].author}`;
}