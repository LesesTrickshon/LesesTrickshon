window.onload=passwordCheck;
function passwordCheck()
{
    var password = prompt("Please enter the password.");
    if (password !== "Hw3rcd!")
    {
        passwordCheck();
    }
}