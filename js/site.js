//get starting values from the screen
//Controller Function
function getUserString() {
    //Get the user's input
    let userString = "" //You write this

    //Reverse the user's input - separate function
    let revString = reverseString(userString);

    //Compare original input and reversed input - separate function
    let result = compareStrings(userString, revString);

    //Output Result - separate function
    displayData(result);

};

function reverseString(userString){
    //This is Rewind    
};

function compareStrings(userString, revString){
    //This is the work part
    //A != a
    //Normalize the case
    //Extra credit - "A man, a plan, a canal; Panama" - is a palindrome when the spaces and special character
    //  are removed
    //RegEx is used for this - Google is your friend
    
};

function displayData(result){
    //We want to output three things
    //1. The original input
    //2. The reversed input
    //3. Was it a palindrome
};