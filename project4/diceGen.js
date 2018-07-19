document.getElementById("sidesList").onchange = function() {setDie()};
    document.getElementById("rollDie").addEventListener("touchend", rollDie);
        
    function setDie() {
        const sidesListing = document.getElementById("sidesList");
        const selectedValue = sidesListing.options[sidesListing.selectedIndex].value;
        document.getElementById("sidesDisp").innerHTML = selectedValue;
    }
    
    function rollDie() {
        const sides = document.getElementById("sidesDisp").innerHTML;
        console.log(sides);
        document.getElementById("rollDisp").innerHTML = Math.floor(sides * Math.random() + 1);
    }