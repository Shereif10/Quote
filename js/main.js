function addQuote(){
    var quote = ["“Be yourself; everyone else is already taken.”" , "“So many books, so little time.”" , "“You only live once, but if you do it right, once is enough.”" , "“Be the change that you wish to see in the world.”" , "“If you tell the truth, you don't have to remember anything.”"]
    var author = ["― Oscar Wilde" , "― Frank Zappa" , "― Mae West" , "― Mahatma Gandhi" , "― Mark Twain"]

    var num = Math.floor(Math.random() * quote.length);

    document.getElementById('quote').innerHTML = quote[num];
    document.getElementById('author').innerHTML = author[num];

}

