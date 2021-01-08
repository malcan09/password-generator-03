function passwordGenerate() {

    var passLength = prompt("Enter Desired Password Length. Min 8 Characters and 128 Max.");

    // Verify that password length meets requirements and creates an array that is the same length as the user input.
    if (passLength >= 8 && passLength <= 128) {
        var newPasswordLength = parseInt(passLength);
        //var newPasswordLength = passLength;
    //console.log(newPasswordLength);
    var confirmUppercase = confirm("Have Password Contain Uppercase Letters?");
    var confirmLowercase = confirm("Have Password Contain Lowercase Letters?");
    var confirmNumbers = confirm("Have Password Contain Numbers?");
    var confirmSpecial = confirm("Have Password Contain Special Characters?");

    var newPasswordLength;

    // Variables 
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';


    // 1. if all options selected
    if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmUppercase && confirmLowercase && confirmNumbers && confirmSpecial) {
        function generate(length = newPasswordLength){
            var all = upperCase + lowerCase + numbers + symbols;
            var password = '';
                for (var index = 0; index < length; index++) {
                    var character = Math.floor(Math.random() * all.length);
                    password += all[(character, character + 1)];
                }
                document.getElementById("passwordOutput").innerHTML = password;
            return password;
        }
        generate(newPasswordLength);
    }
    