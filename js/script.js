// Business Logic
function noInputtedWord(word,text){
  ((word.trim().length === 0) || (text.trim().length === 0))
  return 0;
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
    if (word.trim().length === 0) {
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
  if(noInputtedWord(word,text)){
    return ""
  }
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (element.toLowerCase().includes(word.toLowerCase()))  {
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
        // most used words
  let most = []
  let usedWords = text.split(" ");
  usedWords.forEach(function(element){
    most.push(element);
  })
  most.forEach(function(element,index){
    let str = "<li>"
    $("#most").append(str + element + " " + index)
  })
    });
  });


