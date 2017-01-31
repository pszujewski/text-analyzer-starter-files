function doAnalysis() {
  $(".btn").on("click", function(event) {
    var text = $("textarea").val().toLowerCase().split(/[\(;',\):"]/).join("");
    var textNoPunc = text.split(/[!\?\.]/).join("");
    var textNoPuncArr = textNoPunc.split(" "); // arrNoPunc --> no punctuation, only words
    var textArr = text.split(/[!\?\.]/); // arr1 --> split by sentences
    var results = analyzeText(textArr, textNoPuncArr); // do analysis and retrieve results

    $("#js-words-count").text(results.wordCount+" words");
    $("#js-words-unique").text(results.uniqueWordCount+" unique words");
    $("#js-avg-words").text(results.avgWordLength+" is the average number of characters per word");
    $("#js-avg-sentence").text(results.avgSentenceLength+" is the average number of words per sentence");
    $("#js-bin").removeClass("hidden");
    console.log(results);
    return false;
  }); // End of btn click event
}

function analyzeText(arr1, arrNoPunc) {
  return {
    wordCount: arrNoPunc.length,
    uniqueWordCount: findUniqueWords(arrNoPunc),
    avgWordLength: findAvg4Word(arrNoPunc),
    avgSentenceLength: findAvg4Sentence(arr1)
  };

  function findUniqueWords(arrNoPunc) {
    var uniqueBin = [];
    for (var i=0; i<arrNoPunc.length; i++) {
      if (uniqueBin.indexOf(arrNoPunc[i]) < 0) {
        uniqueBin.push(arrNoPunc[i]);
      }
    }
    return uniqueBin.length;
  }

  function findAvg4Word(arrNoPunc) { // find average number of characters for each word
    var totalLength = arrNoPunc.reduce(function(agg, curr) {
      return agg + curr.length;
    }, 0);
    return Math.round(totalLength / arrNoPunc.length);
  }

  function findAvg4Sentence(arr) { // finds how many words are in each sentence on average
    if (arr.length === 1) {
      return arr[0].split(" ").length;
    }
    var numWords = [];
    for (var i=0; i<arr.length; i++) {
      var eachWordArr = arr[i].split(" ");
      if (i === 0) {
        numWords.push(eachWordArr.length);
      } else {
        numWords.push(eachWordArr.length-1);
      }
    }
    var reduced = numWords.reduce(function(agg, curr){
      return agg + curr;
    }, 0);
    return Math.round(reduced / (numWords.length-1));
  }

} // End of analyzeText

$(function mainFn() {
  doAnalysis();
});
