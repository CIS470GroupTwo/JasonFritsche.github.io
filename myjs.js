  var word = [
  "Hi there",
  "My name is Jason",
  "Welcome to my profile",
  "Thanks for stopping by",
  "Please feel free to contact me",
  ];
  var count = 0;

  function niceWords() {
    var myWord = word[count];
    $("#topText").html(myWord);
    count++;
    if (count == word.length) { count = 0; }
    setTimeout(niceWords, 2000);
  }
  niceWords();


  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
