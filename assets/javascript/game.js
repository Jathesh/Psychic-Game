
var wins = document.getElementById("Wins");
var Loses = document.getElementById("Loses");
var Left = document.getElementById("Left");
var Sofar = document.getElementById("Sofar");

var_hman = new Array();

console.log(wins, Loses, Left, Sofar);

function generate_random_string(string_length)
    {
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for (let i = 0; i < string_length; i++) 
    {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
    }


    var var_win = 0;
    var var_loss = 0;
    var var_left = 0;
    var i = 0;
    
    
function lost()
{
    var_loss = var_loss + 1;
    i = 0 ;
    var_left = 0;
    var_hman = [];
    
}

function win()
{
    var_win = var_win + 1 ;
    i = 0 ;
    var_left = 0;
    var_hman = [];
    
}

function op()
{
    wins.textContent = "Wins :" + var_win ;
    Loses.textContent = "Loses :" + var_loss ;
    Left.textContent = "Chances Left :" + var_left ;
    Sofar.textContent = var_hman ;
}




document.onkeyup = function (event)

{
if  ((i !== 0) && (var_left == 1))
{
debugger;
lost() ;
}
else

{
    debugger;
    var_key = event.key;
    var_letter = generate_random_string(1);
    var_letter = var_letter.toLowerCase();

    var_hman.push(var_key);
    
   
    
        if (var_key == var_letter)
        {
            win();
            
        }
        else
        {
         i = i+1 ;
         var_left = (5 - i); 
        }               


}

op();

}
debugger;



