// Business Logic
function noInputtedWord(word,text){
  ((text.trim().length === 0) || (word.trim().length === 0))
  }

  // word counter
function wordCounter(text) {
    if (text.trim().length === 0) {
      
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }
  // number of occurences
  function numberOfOccurrencesInText(word, text) {
    if (noInputtedWord(word,text)) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }
//   function to bold text
function boldPassage(word, text) {
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (word === element) {
        htmlString = htmlString.concat("<b>" + element + "</b>");
      } else {
        htmlString = htmlString.concat(element);
      }
      if (index !== (textArray.length - 1)) {
        htmlString = htmlString.concat(" ");
      }
    });
    return htmlString + "</p>";
  }
  
//UI Logic 
$(document).ready(function(){
    $("form#word-counter").submit(function(event){
      event.preventDefault();
      const text = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(text);
      const occurrencesOfWord = numberOfOccurrencesInText(word, text);
      $("#total-count").html(wordCount);
      $("#selected-count").html(occurrencesOfWord);
      $("#bolded-passage").html(boldPassage(word, text));
    });
  });