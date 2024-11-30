



// Event listener for the forum button when it's clicked call the meal display function
document.getElementById("mealForum").addEventListener("submit",mealInfo)
//document.getElementById("clearData").addEventListener("click", dataReset)

function mealInfo(){

    let emailVerification = document.getElementById("email");
       
    // Double check for methods to make sure the email input has valid email characters 
    if (emailVerification.value == ""){
        window.alert("Please enter your email to continue");
        return false;
    } else {
        emailVerification.setCustomValidity("");
    }
    

    breakfastInput = document.getElementById("breakfast").value;
    snackInput = document.getElementById("snack").value;
    lunchInput = document.getElementById("lunch").value;
    dinnerInput = document.getElementById("dinner").value;
    nameInput = document.getElementById("name").value;
    emailInput = document.getElementById("email").value;
    goalInput = document.getElementById("goal").value;


    output = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");

    output += ("Welcome " + nameInput + "." + "\n" +
    "Here is your mean plan for the week includes " + breakfastInput + "\n " +
        snackInput + "\n " + lunchInput + "\n " +
        dinnerInput +
     "Your goals for the week includes " + goalInput + "\n" 
        + "Your complete plan will be sent to your email " + emailInput + "\n" +
        "You can also download your plan on the webpage." );
    
    output += ("</body>\n</html>");

    mealDisplay = window.open("about:blank ","myPop", "width=400,height=200,left=200,top=200");
    mealDisplay.document.write(output);

    

}




// Function to allow the user to clear data from the meal plan
function dataReset(){
    breakfastInput = document.getElementById("breakfast").value = "";
    snackInput = document.getElementById("snack").value = "";
    lunchInput = document.getElementById("lunch").value = "";
    dinnerInput = document.getElementById("dinner").value = "";
    nameInput = document.getElementById("name").value = "";
    emailInput = document.getElementById("email").value = "";
    goalInput = document.getElementById("goal").value = "";

}




function dataGrab(){
  

    this.href = getData();



}

function getData(){

breakfastInput = document.getElementById("breakfast").value;
    snackInput = document.getElementById("snack").value;
    lunchInput = document.getElementById("lunch").value;
    dinnerInput = document.getElementById("dinner").value;
    nameInput = document.getElementById("name").value;
    emailInput = document.getElementById("email").value;
    goalInput = document.getElementById("goal").value;


    output = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");

    output += ("Welcome " + nameInput + "." + "\n" +
    "Here is your mean plan for the week includes " + breakfastInput + "\n " +
        snackInput + "\n " + lunchInput + "\n " +
        dinnerInput +
    "Your goals for the week includes " + goalInput + "\n" 
        + "Your complete plan will be sent to your email " + emailInput + "\n " +
    "Thanks for using our service we hope to see you again soon. ");
    
    output += ("</body>\n</html>");
    return output;
    }
