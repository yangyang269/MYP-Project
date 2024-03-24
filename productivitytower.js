turn = 0;
completed = false;
towersCompleted = 0


document.addEventListener("DOMContentLoaded", function() {
    var towersMessage = document.getElementById("towersMessage");
    if (towersMessage) {
        towersMessage.innerHTML = "Towers Completed: " + towersCompleted; // Example message
    } else {
        console.error("Element with ID 'towersMessage' not found.");
    }
});


function takeTurn(square)
{
    console.log(square);
    if (square.innerHTML == '<img src="ClickHere.png" width="70px">' && completed == false)
        square.innerHTML = '<img src="Building.png" width="70px">';
        turn++;
        if (turn > 0 && turn < 2)
        {
            firstFilled(square.innerHTML);
        }
        
        if (turn > 1 && turn < 3)
        {
            secondFilled(square.innerHTML);
        }

        if (turn > 2 && turn < 4)
        {
            thirdFilled(square.innerHTML);
        }

        if (turn > 3 && turn < 5)
        {
            fourthFilled(square.innerHTML);
        }

        if (turn > 4 && turn < 6)
        {
            fifthFilled(square.innerHTML);
        }

        if (turn > 5 && turn < 7)
        {
            sixthFilled(square.innerHTML);
        }

        if (turn > 6 && turn < 8)
        {
            seventhFilled(square.innerHTML);
        }

        if (turn > 7 && turn < 9)
        {
            eighthFilled(square.innerHTML);
        }

        if (turn > 8 && turn < 10)
        {
            ninthFilled(square.innerHTML);
        }

        if (turn > 9 && turn < 11)
        {
            tenthFilled(square.innerHTML);
        }

        if (turn > 10 && turn < 12)
        {
            eleventhFilled(square.innerHTML);
        }

        if (turn > 11)
        {
            towerCompleted(square.innerHTML);
        }
}

function firstFilled()
{
    console.log("Congrats on filling your first cell!");
    document.getElementById("gameMessage").innerHTML = "Congrats on filling your first cell!";
    document.getElementById("quotes").innerHTML = "The journey of a thousand miles begins with a single step.<br> - Lao Tzu";
}

function secondFilled()
{
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "Think BIG. Trust yourself and make it happen.<br> - Anonymous";
}

function thirdFilled()
{
    document.getElementById("gameMessage").innerHTML = "Just like that we're 25% there! You got this!";
    document.getElementById("quotes").innerHTML = "Don't watch the clock. Do what it does: KEEP GOING!<br> - Sam Levenson";
}

function fourthFilled()
{
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "Mindset is what seperates the best from the rest.<br> - Anonymous";
}

function fifthFilled()
{
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "Difficult roads lead to beautiful destinations.<br> - Anonymous";
}

function sixthFilled()
{
    document.getElementById("gameMessage").innerHTML = "You're halfway there!";
    document.getElementById("quotes").innerHTML = "Believe you can and you're halfway there.<br> - Theodore Roosevelt";
}

function seventhFilled()
{
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "Success is walking from failure to failure with no loss of enthusiasm.<br> - Winston Churchill";
}

function eighthFilled()
{
    document.getElementById("gameMessage").innerHTML = "Amazing work! Keep going!";
    document.getElementById("quotes").innerHTML = "Your work is going to fill a large part of your life,<br> and the only way to be truly satisfied is to do what you believe is great work.<br> - Steve Jobs";
}

function ninthFilled()
{
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "Success is not about the destination, it is about the journey.<br> - Zig Ziglar";
}

function tenthFilled()
{
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "Believe in yourself and all that you are.<br>Know that there is something inside you that is greater than any obstacle.<br> - Christian D. Larson";
}

function eleventhFilled()
{
    document.getElementById("gameMessage").innerHTML = "One more cell to fill! You're so close!";
    document.getElementById("quotes").innerHTML = 'Your time is limited, so do not waste it living another life.<br> - Tim Cook';

}

function towerCompleted()
{
    console.log("You did it! The Tower has been Completed!");
    document.getElementById("quotes").innerHTML = "Victory belongs to the most persevering.<br> - Napoleon Bonaparte";
    document.getElementById("gameMessage").innerHTML = "You did it! The Tower has been Completed!<br>Click the Reset Tower button below to go again!";
    completed = true;
    towersCompleted += 1
    towersMessage.innerHTML = "Towers Completed: " + towersCompleted;
}

function reset() {
    turn = 0;
    completed = false;
    var grid = document.getElementsByClassName("gameCell");
    document.getElementById("gameMessage").innerHTML = "";
    document.getElementById("quotes").innerHTML = "";
    for (let i = 0; i < grid.length; i++) {
        grid[i].innerHTML = '<img src="ClickHere.png" width="70px">';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resetButton").addEventListener("click", reset);
});