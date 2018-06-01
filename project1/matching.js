const colors =  ["blue", "green", "yellow", "red", "orange", "purple", "black", "brown", "coral", "crimson", "darkgreen", "deeppink", "grey", "gold", "greenyellow",
        "hotpink", "indianred", "indigo", "ivory", "lavender", "khaki","blue", "green", "yellow", "red", "orange", "purple", "black", "brown", "coral", "crimson", "darkgreen", "deeppink", "grey", "gold", "greenyellow",
        "hotpink", "indianred", "indigo", "ivory", "lavender", "khaki"];
    
    document.getElementById("change1").addEventListener("touchstart", changeRowOne);
    document.getElementById("change2").addEventListener("touchstart", changeRowTwo);
    document.getElementById("change1").addEventListener("touchstart", changeRowThree);
    document.getElementById("change1").addEventListener("touchstart", changeRowFour);
    document.getElementById("change1").addEventListener("touchstart", changeRowFive);
    document.getElementById("change1").addEventListener("touchstart", changeRowSix);
        
    function changeRowOne() {
        var i;
        const colorsInput = [];
        
        for(i = 0; i < (42); i++) {
        
            var currentColor = Math.floor(Math.random() * 43);
                
            document.getElementById("but" + i).style.background = colors[currentColor];
            
            colorsInput.push(colors[currentColor]);
            
        }
    }