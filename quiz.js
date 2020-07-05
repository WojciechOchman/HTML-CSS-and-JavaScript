var qn=0;

function getQuestions() {
  obj = document.getElementById("questions");
  obj.firstChild.nodeValue="(please wait)";
  ajaxCallback = nextQuestion;
  ajaxRequest ("questions.xml");
}

function nextQuestion() {
  questions = ajaxreq.responseXML.getElementsByTagName("q");
  obj = document.getElementById("question");
  if (qn < questions.length) {
    q = question[qn].firstChild.nodeValue;
    obj.firstChild.nodeValue=q;
  } else {
    obj.firstChild.nodeValue="(no more questions)";
  }
}

function checkAnswers() {
  answers = ajaxreq.responseXML.getElementById("a");
  a = answer[qn].firstChild.nodeValue;
  answerfield = document.getElementById("answer");
  if (a == answerfield.value) {
    alert("Correct!");
  } else {
    alert("Incorrect. The correct answer is: " + a);
  }
  qn = qn + 1;
  answerfield.value="";
  nextQuestion();
}

obj = document.getElementById("startq");
obj.onclick = getQuestions;
ans = document.getElementById("submit");
ans.onclick = checkAnswer;