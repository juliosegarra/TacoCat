/***** Global Variables *****/

const button = document.getElementById("reverseButton");

button.addEventListener("click", function () {
    /***** Button Event Listener VARIABLE DECLARATIONS *****/
    const inputString = document.getElementById("inputString").value;
    const outputString = document.getElementById("outputString");
    let lowerInput = inputString;
    lowerInput = lowerInput.toLowerCase();

    // REGEX TO CLEAN INPUT DATA
    lowerInput = lowerInput.replace(/[^a-z]/gi, "");

    /***** FUNCTION DECLARATIONS *****/
    const reverseString = (str) => {
        let reversedWord = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedWord += str.charAt(i);
        }
        return reversedWord;
    };

    const isPalindrome = (str) => {
        let firstIndex = 0;
        let lastIndex = str.length - 1;
        if (str === "") {
            return "";
        } else {
            while (firstIndex < lastIndex) {
                if (str.charAt(firstIndex) != str.charAt(lastIndex)) {
                    return "This word is NOT a Palindrome.";
                }
                firstIndex++;
                lastIndex--;
            }
            return "This word is a Palindrome!";
        }
    };

    const inputToInner = (inString, cleanedString, outString) => {
        outString.innerHTML = `${inString}\n\n${isPalindrome(cleanedString)}`;
    };

    /***** CODE EXECUTION *****/
    lowerInput = reverseString(lowerInput);
    inputToInner(inputString, lowerInput, outputString);
});