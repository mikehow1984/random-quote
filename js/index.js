var Quotes = [
  ["A banker is a fellow who lends you his umbrella when the sun is shining, but wants it back the minute it begins to rain.", "Mark Twain"],
  ["The trouble with the rat race is that even if you win, you're still a rat.", "Lily Tomlin"],
  ["It is necessary to try to surpass oneself always; this occupation ought to last as long as life.", "Queen Christina of Sweden"],
  ["You must learn from the mistakes of others. You can't possibly live long enough to make them all yourself.", "Sam Levenson"],
  ["Better by far you should forget and smile than you should remember and be sad.", "Christina Rossetti"],
  ["Get all the fools on your side and you can be elected to anything.", "Frank Dane"],
  ["What you do speaks so loud that I cannot hear what you say.", "Ralph Waldo Emerson"],
  ["The human brain starts working the moment you are born and never stops until you stand up to speak in public.", "George Jessel"],
  ["Some men are born mediocre, some men achieve mediocrity, and some men have mediocrity thrust upon them.", "Joseph Heller"],
  ["Genius is of no country.", "Charles Churchill"],
  ["A witty saying proves nothing.", "Voltaire"],
  ["Resolve to be thyself: and know, that he who finds himself, loses his misery.","Matthew Arnold"],
  ["Talent hits a target no one else can hit; Genius hits a target no one else can see.","Arthur Schopenhauer"],
  ["What counts is not necessarily the size of the dog in the fight - it's the size of the fight in the dog.","Dwight D. Eisenhower"],
  ["It is impossible to defeat an ignorant man in argument.","William G. McAdoo"]
];
var Q = Quotes.length;
var Tweet = document.getElementById("tweet-button");
var previousQuote = -1;

function randQuote() {
  var currentQuote = Math.round(Math.random() * (Q - 1));
  while(currentQuote == previousQuote){
    currentQuote = Math.round(Math.random() * (Q - 1));
  }
  previousQuote = currentQuote;
  document.getElementById("quote").innerHTML = Quotes[currentQuote][0];
  document.getElementById("author").innerHTML = Quotes[currentQuote][1];
  var twitterURL = "https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerHTML + " -" + document.getElementById("author").innerHTML;
  
  twitterURL = twitterURL.replace(/;/g, '%3B');
  Tweet.setAttribute("href", twitterURL);
}
window.onload = randQuote();