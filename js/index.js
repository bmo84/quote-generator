// Author: Brandon Martinez
// Date: 2016-8-16
// Description: Javascript/JQuery functions for generating random quotes

// Quote Generating Function
var getQuote = function() {
  var quotes = {
    "Nelson Mandela": "Education is the most powerful weapon which you can use to change the world.",
    "R.W.E.": "All is a riddle, and the key to a riddle...is another riddle.",
    "Samuel Beckett": "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "Winston Churchill": "The farther backward you can look, the farther forward you will see.",
    "Friedrick Nietzsche": "The irrationality of a thing is not an argument against its existence, rather, a condition of it.",
    "Harriet Beecher": "The bitterest tears shed over graves are for words left unsaid and deeds left undone.",
    "Noam Chomsky": "If you're teaching today what you were teaching five years ago, either the field is dead or you are.",
    "T.S. Eliot": "This is the way the world ends, not with a bang, but a whimper.",
    "Oscar Wilde": "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
    "Helen Keller": "Although the world is full of suffering, it is also full of overcoming it.",
    "Elbert Hubbard": "If men could only know each other, they would neither idolize nor hate.",
    "Anna Karenina": "Happy families are all alike. Every unhappy family is unhappy in its own way."
  };

  //Gets random quote and its author for quotes object
  var quotesArray = Object.keys(quotes);
  var quotesIndex = Math.floor(Math.random() * quotesArray.length);
  var randomAuthor = quotesArray[quotesIndex];

  // Check for same previous author and get new quote if it is
  while (randomAuthor === $(".author").html()) {
    quotesIndex = Math.floor(Math.random() * quotesArray.length);
    randomAuthor = quotesArray[quotesIndex];
  }
  var randomQuote = quotes[randomAuthor];

  // Displays quote and author to screen
  $(".quote").html("\"" + randomQuote + "\"");
  $(".author").html(randomAuthor);

  // Set twitter intent address for tweeting quote
  $("a.tweet").prop("href", "https://twitter.com/intent/tweet?text=" + "\"" + randomQuote + "\" " + randomAuthor);

};

//.click gets a new quote to display, and updates the twitter link for sharing
$(".btnQuote").click(function() {
  getQuote();
});

//creates new windows for tweet
$(".tweet").click(function() {
  window.open(this.href, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=550,height=420");
  return false;

});