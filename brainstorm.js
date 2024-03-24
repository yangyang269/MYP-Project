totalIdeas = 0
var userName1 = prompt("What the first group member's name?");
var userName2 = prompt("What the second group member's name?");
var userName3 = prompt("What the third group member's name?");
userIdeas1 = 0
userIdeas2 = 0
userIdeas3 = 0

userName1 = userName1.toLowerCase();
userName2 = userName2.toLowerCase();
userName3 = userName3.toLowerCase();
userName1 = userName1.charAt(0).toUpperCase() + userName1.slice(1);
userName2 = userName2.charAt(0).toUpperCase() + userName2.slice(1);
userName3 = userName3.charAt(0).toUpperCase() + userName3.slice(1);


document.addEventListener("DOMContentLoaded", function() {
    var towersMessage = document.getElementById("score");
    if (score) {
        score.innerHTML = "Total Ideas: " + totalIdeas; // Example message
    } else {
        console.error("Element with ID 'score' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var groupMember1 = document.getElementById("groupMember1");
    if (groupMember1) {
        groupMember1.innerHTML = userName1 + ": " + userIdeas1; // Example message
    } else {
        console.error("Element with ID 'score' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var groupMember2 = document.getElementById("groupMember2");
    if (groupMember2) {
        groupMember2.innerHTML = userName2 + ": " + userIdeas2; // Example message
    } else {
        console.error("Element with ID 'score' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var groupMember3 = document.getElementById("groupMember3");
    if (groupMember3) {
        groupMember3.innerHTML = userName3 + ": " + userIdeas3; // Example message
    } else {
        console.error("Element with ID 'score' not found.");
    }
});

function addPointUser1() {
    userIdeas1 += 1;
    totalIdeas += 1;
    groupMember1.innerHTML = userName1 + ": " + userIdeas1;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userButton1").addEventListener("click", addPointUser1);
});

function addPointUser2() {
    userIdeas2 += 1;
    totalIdeas += 1;
    groupMember2.innerHTML = userName2 + ": " + userIdeas2;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userButton2").addEventListener("click", addPointUser2);
});

function addPointUser3() {
    userIdeas3 += 1;
    totalIdeas += 1;
    groupMember3.innerHTML = userName3 + ": " + userIdeas3;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userButton3").addEventListener("click", addPointUser3);
});

function deductPointUser1() {
    userIdeas1 -= 1;
    totalIdeas -= 1;
    groupMember1.innerHTML = userName1 + ": " + userIdeas1;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("deductButton1").addEventListener("click", deductPointUser1);
});

function deductPointUser2() {
    userIdeas2 -= 1;
    totalIdeas -= 1;
    groupMember2.innerHTML = userName2 + ": " + userIdeas2;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("deductButton2").addEventListener("click", deductPointUser2);
});

function deductPointUser3() {
    userIdeas3 -= 1;
    totalIdeas -= 1;
    groupMember3.innerHTML = userName3 + ": " + userIdeas3;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("deductButton3").addEventListener("click", deductPointUser3);
});

function reset() {
    totalIdeas = 0;
    userIdeas1 = 0
    userIdeas2 = 0
    userIdeas3 = 0
    groupMember1.innerHTML = userName1 + ": " + userIdeas1;
    groupMember2.innerHTML = userName2 + ": " + userIdeas2;
    groupMember3.innerHTML = userName3 + ": " + userIdeas3;
    score.innerHTML = "Total Ideas: " + totalIdeas;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resetButton").addEventListener("click", reset);
});