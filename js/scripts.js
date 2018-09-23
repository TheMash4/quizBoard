function submitAnswers(){
    var total = 5;
    var score = 0;

    var q1 = document.forms["formQuiz"]["q1"].value;
    var q2 = document.forms["formQuiz"]["q2"].value;
    var q3 = document.forms["formQuiz"]["q3"].value;
    var q4 = document.forms["formQuiz"]["q4"].value;
    var q5 = document.forms["formQuiz"]["q5"].value;

    for(i = 1;  i <= total;i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed question'+ i);
            return false;
        }
    }


    var answers = ["c","a","c","a","c"];

    if(q1 == answers[0]){
        score++;
    }
    if(q2 == answers[1]){
        score++;
    }
    if(q3 == answers[2]){
        score++;
    }
    if(q4 == answers[3]){
        score++;
    }
    if(q5 == answers[4]){
        score++;
    }

    var result =document.getElementById('results');
    results.innerHTML = '<h3>You scored '+ score +'out of'+ total
}
$(button).click(function(){
    $("#flip").click(function(){

        $("#panel").slideToggle("slow");
    });
});