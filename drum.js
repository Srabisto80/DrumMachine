
function myEvent(event) {
    var eventKey = event.key;
    eventKey = eventKey.toUpperCase();
    if (eventKey == "Q") {
        return Qplay();
    }
    if (eventKey == "W") {
        return Wplay();
    }
    if (eventKey == "E") {
        return Eplay();
    }
    if (eventKey == "A") {
        return Aplay();
    }
    if (eventKey == "S") {
        return Splay();
    }
    if (eventKey == "D") {
        return Dplay();
    }
    if (eventKey == "Z") {
        return Zplay();
    }
    if (eventKey == "X") {
        return Xplay();
    }
    if (eventKey == "C") {
        return Cplay();
    }

}




function Qplay() {
    document.getElementById("Q").play()
    // $('#Q').click(function {.play()});
    // document.getElementById('display').innerHTML = "That's a 'Q' thang!"
    $('#display').html("That's a 'Q' thang!");
}
function Wplay() {
    document.getElementById("W").play()
    // document.getElementById('display').innerHTML = "There's my 'W'!"
    $('#display').html("There's my 'W'!")
}
function Eplay() {
    document.getElementById("E").play()
    // document.getElementById('display').innerHTML = "'E' oooohh!"
    $('#display').html("'E' oooohh!")
}
function Aplay() {
    document.getElementById("A").play()
    // document.getElementById('display').innerHTML = "'A' ok!"
    $('#display').html("'A' ok!")
}
function Splay() {
    document.getElementById("S").play()
    // document.getElementById('display').innerHTML = "That's my 'Ssssss'!"
    $('#display').html("That's my 'Ssssss'!")
}
function Dplay() {
    document.getElementById("D").play()
    document.getElementById('display').innerHTML = "'D'addy Yeah!"
}
function Zplay() {
    document.getElementById("Z").play()
    document.getElementById('display').innerHTML = "Don't hit those 'Z's!"
}
function Xplay() {
    document.getElementById("X").play()
    document.getElementById('display').innerHTML = "'X'tra Cool!"
}
function Cplay() {
    document.getElementById("C").play()
    document.getElementById('display').innerHTML = "'C' U Play!"
}