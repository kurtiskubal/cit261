document.getElementById("numberOfTimesSplit").addEventListener("input", calculate);
        
         document.getElementById("tips").onchange = function() {calculate()};
        
         document.getElementById("balance").addEventListener("input", calculate);
        
        function calculate() {
            
            const tipList = document.getElementById("tips");
            
            const numPeep = document.getElementById("numberOfTimesSplit").value;
            const tipPercent = tipList.options[tipList.selectedIndex].value;
            const bal = document.getElementById("balance").value;
            var tipDeci = 0;
            
            switch (tipPercent) {
                case "15%":
                    tipDeci = 0.15;
                    break;
                case "20%":
                    tipDeci = 0.20;
                    break;
                case "25%":
                    tipDeci = 0.25;
                    break;
                case "30%":
                    tipDeci = 0.30;
                    break;
            }
            
            const tip = Math.round((bal * tipDeci) * 100) / 100;
            const splitBal = Math.round((bal / numPeep) * 100) / 100;
            const splitTip = Math.round((tip / numPeep) * 100) / 100;
            const comb = Math.round((splitBal + splitTip) * 100) / 100;
            
            if (isNaN(bal) == true || isNaN(numPeep) == true) {
                document.getElementById("balanceDisplay").innerHTML = "Please enter a number for both fields";
            }
            else if (bal < 0 || numPeep < 0){
                document.getElementById("balanceDisplay").innerHTML = "Please enter a positive number";
            }
            else if (bal > 0 && numPeep > 0) {
                document.getElementById("balanceDisplay").innerHTML = "The balance is " + bal + ".";
                document.getElementById("tipDisplay").innerHTML = "The tip for this balance is " + tip + ".";
                document.getElementById("splitBalanceDisplay").innerHTML = "The balance split up between the " + numPeep + " of you is " + splitBal + ".";
                document.getElementById("splitTipDisplay").innerHTML = "The tip split up between the " + numPeep + " of you is " + splitTip + ".";
                document.getElementById("splitsTipBalDisplay").innerHTML = "The total for each of the " + numPeep + " of you is " + comb + ".";
            }
            
        }