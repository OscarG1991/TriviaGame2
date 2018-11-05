$(document).ready(function() {    
var counter = 60; 
$(".timer").html("<p>" + counter + "</p>"); 
run();
var intervalId;
function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
}
        function decrement(){
            counter--;
        
       $(".timer").html("<p>" + counter + "</p>"); 

        if (counter === 0) {
            stop();
            $(".resultsR").html("<p>" + "Right: " + right + "</p>");
            $(".resultsW").html("<p>" + "Wrong: " + wrong + "</p>");

        }
        }
        function stop (){
            clearInterval(intervalId);
        }
var correct;
var incorrect; 
var right = 0;
var wrong = 0;  
           $("input[type='radio']").click(function(){
        var correct = $("input[value='1']:checked").val();
        var incorrect = $("input[value='0']:checked").val();
        if (correct) {
            right++;
            console.log(right);
        }
        else {
                wrong++;
                console.log(wrong);
            }
           });
             $(".submit").click(function(){
        $(".resultsR").html("<p>" + "Right: " + right + "</p>")
        $(".resultsW").html("<p>" + "Wrong: " + wrong + "</p>")
             });
           });



            
