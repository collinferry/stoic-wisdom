var quotes = [{
"quote": "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
"author": "Marcus Aurelius"
}, {
"quote": "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
"author": "Marcus Aurelius"
}, {
"quote": "It is the power of the mind to be unconquerable.",
"author": "Seneca"
}, {
"quote": "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
"author": "Seneca"
}, {
"quote": "It is not the man who has too little that is poor, but the one who hankers after more.",
"author": "Seneca"
}, {
"quote": "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.",
"author": "Seneca"
}, {
"quote": "What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.",
"author": "Epictetus"
}, {
"quote": "The longest-lived and those who will die soonest lose the same thing. The present is all that they can give up, since that is all you have, and what you do not have you cannot lose.",
"author": "Marcus Aurelius"
}, {
"quote": "Think of your many years of procrastination; how the gods have repeatedly granted you further periods of grace, of which you have taken no advantage. It is time now to realise the nature of the universe to which you belong, and of that controlling Power whose offspring you are; and to understand that your time has a limit set to it. Use it, then, to advance your enlightenment; or it will be gone, and never in your power again.",
"author": "Marcus Aurelius"
}];

var currentQuote = quotes[Math.floor(Math.random() * (quotes.length))];

$("#tweet").on("click", function() {
  var text = currentQuote.quote.substring(0,120) + "... -" + currentQuote.author;
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
});

$("#button").on("click", function() {
  currentQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $(".blockquote").empty();
  $(".blockquote").append("<p><i class='fa fa-quote-left fa-2x'></i> " + currentQuote.quote + "</p><footer class='text-right'>" + currentQuote.author + "</footer>");
  return currentQuote;
});