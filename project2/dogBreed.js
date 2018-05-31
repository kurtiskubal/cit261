const dogs = {
            
            pitbull: {dogName: 'Pitbull', image: 'pics/pitbull.jpg'},
            husky: {dogName: 'Husky', image: 'pics/husky.jpg'},
            corgi: {dogName: 'Corgi', image: 'pics/corgi.jpg'},
            dalmatian: {dogName: 'Dalmatian', image: 'pics/dal.jpg'},
            chowchow: {dogName: 'Chow Chow', image: 'pics/chow.jpg'},
            daschund: {dogName: 'Daschund', image: 'pics/dash.jpg'},
            labrador: {dogName: 'Labrador', image: 'pics/lab.jpg'},
            pug: {dogName: 'Pug', image: 'pics/pug.jpg'},
            chihuahua: {dogName: 'Chihuahua', image: 'pics/chi.jpg'},
            germanshepherd: {dogName: 'German Shepherd', image: 'pics/german.jpg'},
            terrier: {dogName: 'Terrier', image: 'pics/terr.jpg'},
            poodle: {dogName: 'Poodle', image: 'pics/pood.jpg'},
            beagle: {dogName: 'Beagle', image: 'pics/beag.jpg'},
            sharpei: {dogName: 'Shar-Pei', image: 'pics/shar.jpg'},
            cocker: {dogName: 'Cocker Spaniel', image: 'pics/cock.jpg'},
            pomeranian: {dogName: 'Pomeranian' , image: 'pics/pom.jpg'},
            englishbull: {dogName: 'English Bulldog', image: 'pics/english.jpg'},
            schnauzer: {dogName: 'Schnauzer', image: 'pics/schnauzer.jpg'},
            sheltie: {dogName: 'Sheltie', image: 'pics/sheltie.jpg'},
            basset: {dogName: 'Basset Hound', image: 'pics/basset.jpg'},
            toyp: {dogName: 'Toy Poodle', image: 'pics/toy.jpg'},
            siberian: {dogName: 'Siberian Husky', image: 'pics/siberian.jpg'},
            golden: {dogName: 'Golden Retriever', image: 'pics/golden.jpg'}
            
        }
        
        const crosses = {
            
            pitsky: {crossName: 'Pittbull & Husky', image: 'pics/pitsky.jpg'},
            dalgi: {crossName: 'Corgi & Dalmatian', image: 'pics/dalgi.jpg'},
            chusky: {crossName: 'Chow Chow & Husky', image: 'pics/chusky.jpg'},
            dalmac: {crossName: 'Dachshund & Dalmatian', image: 'pics/dalmac.jpg'},
            labsky: {crossName: 'Labrador & Husky', image: 'pics/labsky.jpg'},
            chug: {crossName: 'Pug & Chihuahua', image: 'pics/chug.jpg'},
            corshe: {crossName: 'Corgi & German Shepherd', image: 'pics/corshe.jpg'},
            terpoo: {crossName: 'Terrier & Poodle', image: 'pics/terpoo.jpg'},
            beagleman: {crossName: 'Beagle & German Shepherd', image: 'pics/beagleman.jpg'},
            cockerpei: {crossName: 'Shar-pei & Cocker Spaniel', image: 'pics/cockerpei.jpg'},
            pomsky: {crossName: 'Pomeranian & Husky', image: 'pics/pomsky.jpg'},
            gerpei: {crossName: 'German Shepherd & Shar-pei', image: 'pics/gerpei.jpg'},
            engger: {crossName: 'English Bulldog & German Shepherd', image: 'pics/engger.jpg'},
            horgi: {crossName: 'Corgi & Husky', image: 'pics/horgi.jpg'},
            bullpug: {crossName: 'Pug & English Bulldog', image: 'pics/bullpug.jpg'},
            schnoodle: {crossName: 'Schnauzer & Poodle' , image: 'pics/schnoodle.jpg'},
            shechow: {crossName: 'Chow Chow & German Shepherd', image: 'pics/shechow.jpg'},
            shorgi: {crossName: 'Corgi & Sheltie', image: 'pics/shorgi.jpg'},
            bashar: {crossName: 'Basset Hound & Shar-Pei', image: 'pics/bashar.jpg'},
            corgipoo: {crossName: 'Toy Poodle & Corgi', image: 'pics/corgipoo.jpg'},
            goberian: {crossName: 'Siberian Husky & Golden Retriever', image: 'pics/goberian.jpg'}
            
        }
        
      document.getElementById("firstDog").onchange = function() {validate()};
      
        function validate()
            {
            const dogList = document.getElementById("firstDog");
            const selectedValue = dogList.options[dogList.selectedIndex].value;
            if (selectedValue != "--select a breed--")
                {
                   
                  switch(selectedValue) {
                        case "Pitbull":
                        document.getElementById('display').innerHTML = dogs.pitbull.dogName + '<img width = "100px" src = "'+dogs.pitbull.image+'">';
                          break;
                        case "Husky":
                        document.getElementById('display').innerHTML = dogs.husky.dogName + '<img width = "100px" src = "'+dogs.husky.image+'">';
                          break;
                        case "Corgi":
                        document.getElementById('display').innerHTML = dogs.corgi.dogName + '<img width = "100px" src = "'+dogs.corgi.image+'">';
                          break;
                        case "Dalmatian":
                        document.getElementById('display').innerHTML = dogs.dalmatian.dogName + '<img width = "100px" src = "'+dogs.dalmatian.image+'">';
                          break;
                          case "Chow Chow":
                        document.getElementById('display').innerHTML = dogs.chowchow.dogName + '<img width = "100px" src = "'+dogs.chowchow.image+'">';
                          break;
                          case "Daschund":
                        document.getElementById('display').innerHTML = dogs.daschund.dogName + '<img width = "100px" src = "'+dogs.daschund.image+'">';
                          break;
                          case "Labrador":
                        document.getElementById('display').innerHTML = dogs.labrador.dogName + '<img width = "100px" src = "'+dogs.labrador.image+'">';
                          break;
                          case "Pug":
                        document.getElementById('display').innerHTML = dogs.pug.dogName + '<img width = "100px" src = "'+dogs.pug.image+'">';
                          break;
                          case "Chihuahua":
                        document.getElementById('display').innerHTML = dogs.chihuahua.dogName + '<img width = "100px" src = "'+dogs.chihuahua.image+'">';
                          break;
                          case "German Shepherd":
                        document.getElementById('display').innerHTML = dogs.germanshepherd.dogName + '<img width = "100px" src = "'+dogs.germanshepherd.image+'">';
                          break;
                          case "Terrier":
                        document.getElementById('display').innerHTML = dogs.terrier.dogName + '<img width = "100px" src = "'+dogs.terrier.image+'">';
                          break;
                          case "Poodle":
                        document.getElementById('display').innerHTML = dogs.poodle.dogName + '<img width = "100px" src = "'+dogs.poodle.image+'">';
                          break;
                          case "Beagle":
                        document.getElementById('display').innerHTML = dogs.beagle.dogName + '<img width = "100px" src = "'+dogs.beagle.image+'">';
                          break;
                          case "Shar-Pei":
                        document.getElementById('display').innerHTML = dogs.sharpei.dogName + '<img width = "100px" src = "'+dogs.sharpei.image+'">';
                          break;
                          case "Cocker Spaniel":
                        document.getElementById('display').innerHTML = dogs.cocker.dogName + '<img width = "100px" src = "'+dogs.cocker.image+'">';
                          break;
                          case "Pomeranian":
                        document.getElementById('display').innerHTML = dogs.pomeranian.dogName + '<img width = "100px" src = "'+dogs.pomeranian.image+'">';
                          break;
                          case "English Bulldog":
                        document.getElementById('display').innerHTML = dogs.englishbull.dogName + '<img width = "100px" src = "'+dogs.englishbull.image+'">';
                          break;
                          case "Schnauzer":
                        document.getElementById('display').innerHTML = dogs.schnauzer.dogName + '<img width = "100px" src = "'+dogs.schnauzer.image+'">';
                          break;
                          case "Sheltie":
                        document.getElementById('display').innerHTML = dogs.sheltie.dogName + '<img width = "100px" src = "'+dogs.sheltie.image+'">';
                          break;
                          case "Basset Hound":
                        document.getElementById('display').innerHTML = dogs.basset.dogName + '<img width = "100px" src = "'+dogs.basset.image+'">';
                          break;
                          case "Toy Poodle":
                        document.getElementById('display').innerHTML = dogs.toyp.dogName + '<img width = "100px" src = "'+dogs.toyp.image+'">';
                          break;
                          case "Siberian Husky":
                        document.getElementById('display').innerHTML = dogs.siberian.dogName + '<img width = "100px" src = "'+dogs.siberian.image+'">';
                          break;
                          case "Golden Retriever":
                        document.getElementById('display').innerHTML = dogs.golden.dogName + '<img width = "100px" src = "'+dogs.golden.image+'">';
                          break;
                          
                  }
                    
                }
            }
         
         document.getElementById("secondDog").onchange = function() {secondValidate()};
         
         function secondValidate()
            {
            const secondDogList = document.getElementById("secondDog");
            const secondSelectedValue = secondDogList.options[secondDogList.selectedIndex].value;
            if (secondSelectedValue != "--select a breed--")
                {
                   
                  switch(secondSelectedValue) {
                        case "Pitbull":
                        document.getElementById('secondDisplay').innerHTML = dogs.pitbull.dogName + '<img width = "100px" src = "'+dogs.pitbull.image+'">';
                          break;
                        case "Husky":
                        document.getElementById('secondDisplay').innerHTML = dogs.husky.dogName + '<img width = "100px" src = "'+dogs.husky.image+'">';
                          break;
                        case "Corgi":
                        document.getElementById('secondDisplay').innerHTML = dogs.corgi.dogName + '<img width = "100px" src = "'+dogs.corgi.image+'">';
                          break;
                        case "Dalmatian":
                        document.getElementById('secondDisplay').innerHTML = dogs.dalmatian.dogName + '<img width = "100px" src = "'+dogs.dalmatian.image+'">';
                          break;
                          case "Chow Chow":
                        document.getElementById('secondDisplay').innerHTML = dogs.chowchow.dogName + '<img width = "100px" src = "'+dogs.chowchow.image+'">';
                          break;
                          case "Daschund":
                        document.getElementById('secondDisplay').innerHTML = dogs.daschund.dogName + '<img width = "100px" src = "'+dogs.daschund.image+'">';
                          break;
                          case "Labrador":
                        document.getElementById('secondDisplay').innerHTML = dogs.labrador.dogName + '<img width = "100px" src = "'+dogs.labrador.image+'">';
                          break;
                          case "Pug":
                        document.getElementById('secondDisplay').innerHTML = dogs.pug.dogName + '<img width = "100px" src = "'+dogs.pug.image+'">';
                          break;
                          case "Chihuahua":
                        document.getElementById('secondDisplay').innerHTML = dogs.chihuahua.dogName + '<img width = "100px" src = "'+dogs.chihuahua.image+'">';
                          break;
                          case "German Shepherd":
                        document.getElementById('secondDisplay').innerHTML = dogs.germanshepherd.dogName + '<img width = "100px" src = "'+dogs.germanshepherd.image+'">';
                          break;
                          case "Terrier":
                        document.getElementById('secondDisplay').innerHTML = dogs.terrier.dogName + '<img width = "100px" src = "'+dogs.terrier.image+'">';
                          break;
                          case "Poodle":
                        document.getElementById('secondDisplay').innerHTML = dogs.poodle.dogName + '<img width = "100px" src = "'+dogs.poodle.image+'">';
                          break;
                          case "Beagle":
                        document.getElementById('secondDisplay').innerHTML = dogs.beagle.dogName + '<img width = "100px" src = "'+dogs.beagle.image+'">';
                          break;
                          case "Shar-Pei":
                        document.getElementById('secondDisplay').innerHTML = dogs.sharpei.dogName + '<img width = "100px" src = "'+dogs.sharpei.image+'">';
                          break;
                          case "Cocker Spaniel":
                        document.getElementById('secondDisplay').innerHTML = dogs.cocker.dogName + '<img width = "100px" src = "'+dogs.cocker.image+'">';
                          break;
                          case "Pomeranian":
                        document.getElementById('secondDisplay').innerHTML = dogs.pomeranian.dogName + '<img width = "100px" src = "'+dogs.pomeranian.image+'">';
                          break;
                          case "English Bulldog":
                        document.getElementById('secondDisplay').innerHTML = dogs.englishbull.dogName + '<img width = "100px" src = "'+dogs.englishbull.image+'">';
                          break;
                          case "Schnauzer":
                        document.getElementById('secondDisplay').innerHTML = dogs.schnauzer.dogName + '<img width = "100px" src = "'+dogs.schnauzer.image+'">';
                          break;
                          case "Sheltie":
                        document.getElementById('secondDisplay').innerHTML = dogs.sheltie.dogName + '<img width = "100px" src = "'+dogs.sheltie.image+'">';
                          break;
                          case "Basset Hound":
                        document.getElementById('secondDisplay').innerHTML = dogs.basset.dogName + '<img width = "100px" src = "'+dogs.basset.image+'">';
                          break;
                          case "Toy Poodle":
                        document.getElementById('secondDisplay').innerHTML = dogs.toyp.dogName + '<img width = "100px" src = "'+dogs.toyp.image+'">';
                          break;
                          case "Siberian Husky":
                        document.getElementById('secondDisplay').innerHTML = dogs.siberian.dogName + '<img width = "100px" src = "'+dogs.siberian.image+'">';
                          break;
                          case "Golden Retriever":
                        document.getElementById('secondDisplay').innerHTML = dogs.golden.dogName + '<img width = "100px" src = "'+dogs.golden.image+'">';
                          break;
                          
                  }
                    
                }
            }
     
         document.getElementById("firstDog").addEventListener("change", crossBreed);
         document.getElementById("secondDog").addEventListener("change", crossBreed);
         document.getElementById("firstDog").addEventListener("touchstart", clearCrossBreed);
         document.getElementById("secondDog").addEventListener("touchstart", clearCrossBreed);
         
         function clearCrossBreed()
            {
                document.getElementById('crossDisplay').innerHTML = " ";
            }
         
          function crossBreed()
            {
                const firstList = document.getElementById("firstDog");
                const secondList = document.getElementById("secondDog");
                const selectedBreed = firstList.options[firstList.selectedIndex].value;
                const secSelectedBreed = secondList.options[secondList.selectedIndex].value;
                if (selectedBreed != "--select a breed--" && secSelectedBreed != "--select a breed--" ) {
                
                    if ((selectedBreed == "Pitbull") && (secSelectedBreed == "Husky")){
                        document.getElementById('crossDisplay').innerHTML = crosses.pitsky.crossName + '<img width = "100px" src = "'+crosses.pitsky.image+'">';
                    }
                    else if ((selectedBreed == "Husky") && (secSelectedBreed == "Pitbull")){
                        document.getElementById('crossDisplay').innerHTML = crosses.pitsky.crossName + '<img width = "100px" src = "'+crosses.pitsky.image+'">';
                    }
                    else if ((selectedBreed == "Corgi") && (secSelectedBreed == "Dalmatian")){
                        document.getElementById('crossDisplay').innerHTML = crosses.dalgi.crossName + '<img width = "100px" src = "'+crosses.dalgi.image+'">';
                    }
                    else if ((selectedBreed == "Dalmatian") && (secSelectedBreed == "Corgi")){
                        document.getElementById('crossDisplay').innerHTML = crosses.dalgi.crossName + '<img width = "100px" src = "'+crosses.dalgi.image+'">';
                    }
                     else if ((selectedBreed == "Chow Chow") && (secSelectedBreed == "Husky")){
                        document.getElementById('crossDisplay').innerHTML = crosses.chusky.crossName + '<img width = "100px" src = "'+crosses.chusky.image+'">';
                    }
                    else if ((selectedBreed == "Husky") && (secSelectedBreed == "Chow Chow")){
                        document.getElementById('crossDisplay').innerHTML = crosses.chusky.crossName + '<img width = "100px" src = "'+crosses.chusky.image+'">';
                    }
                    else if ((selectedBreed == "Daschund") && (secSelectedBreed == "Dalmatian")){
                        document.getElementById('crossDisplay').innerHTML = crosses.dalmac.crossName + '<img width = "100px" src = "'+crosses.dalmac.image+'">';
                    }
                    else if ((selectedBreed == "Dalmatian") && (secSelectedBreed == "Daschund")){
                        document.getElementById('crossDisplay').innerHTML = crosses.dalmac.crossName + '<img width = "100px" src = "'+crosses.dalmac.image+'">';
                    }
                    else if ((selectedBreed == "Labrador") && (secSelectedBreed == "Husky")){
                        document.getElementById('crossDisplay').innerHTML = crosses.labsky.crossName + '<img width = "100px" src = "'+crosses.labsky.image+'">';
                    }
                    else if ((selectedBreed == "Husky") && (secSelectedBreed == "Labrador")){
                        document.getElementById('crossDisplay').innerHTML = crosses.labsky.crossName + '<img width = "100px" src = "'+crosses.labsky.image+'">';
                    }
                    else if ((selectedBreed == "Pug") && (secSelectedBreed == "Chihuahua")){
                        document.getElementById('crossDisplay').innerHTML = crosses.chug.crossName + '<img width = "100px" src = "'+crosses.chug.image+'">';
                    }
                    else if ((selectedBreed == "Chihuahua") && (secSelectedBreed == "Pug")){
                        document.getElementById('crossDisplay').innerHTML = crosses.chug.crossName + '<img width = "100px" src = "'+crosses.chug.image+'">';
                    }
                    else if ((selectedBreed == "Corgi") && (secSelectedBreed == "German Shepherd")){
                        document.getElementById('crossDisplay').innerHTML = crosses.corshe.crossName + '<img width = "100px" src = "'+crosses.corshe.image+'">';
                    }
                    else if ((selectedBreed == "German Shepherd") && (secSelectedBreed == "Corgi")){
                        document.getElementById('crossDisplay').innerHTML = crosses.corshe.crossName + '<img width = "100px" src = "'+crosses.corshe.image+'">';
                    }
                    else if ((selectedBreed == "Terrier") && (secSelectedBreed == "Poodle")){
                        document.getElementById('crossDisplay').innerHTML = crosses.terpoo.crossName + '<img width = "100px" src = "'+crosses.terpoo.image+'">';
                    }
                    else if ((selectedBreed == "Poodle") && (secSelectedBreed == "Terrier")){
                        document.getElementById('crossDisplay').innerHTML = crosses.terpoo.crossName + '<img width = "100px" src = "'+crosses.terpoo.image+'">';
                    }
                    else if ((selectedBreed == "Beagle") && (secSelectedBreed == "German Shepherd")){
                        document.getElementById('crossDisplay').innerHTML = crosses.beagleman.crossName + '<img width = "100px" src = "'+crosses.beagleman.image+'">';
                    }
                    else if ((selectedBreed == "German Shepherd") && (secSelectedBreed == "Beagle")){
                        document.getElementById('crossDisplay').innerHTML = crosses.beagleman.crossName + '<img width = "100px" src = "'+crosses.beagleman.image+'">';
                    }
                    else if ((selectedBreed == "Shar-Pei") && (secSelectedBreed == "Cocker Spaniel")){
                        document.getElementById('crossDisplay').innerHTML = crosses.cockerpei.crossName + '<img width = "100px" src = "'+crosses.cockerpei.image+'">';
                    }
                    else if ((selectedBreed == "Cocker Spaniel") && (secSelectedBreed == "Shar-Pei")){
                        document.getElementById('crossDisplay').innerHTML = crosses.cockerpei.crossName + '<img width = "100px" src = "'+crosses.cockerpei.image+'">';
                    }
                    else if ((selectedBreed == "Pomeranian") && (secSelectedBreed == "Husky")){
                        document.getElementById('crossDisplay').innerHTML = crosses.pomsky.crossName + '<img width = "100px" src = "'+crosses.pomsky.image+'">';
                    }
                    else if ((selectedBreed == "Husky") && (secSelectedBreed == "Pomeranian")){
                        document.getElementById('crossDisplay').innerHTML = crosses.pomsky.crossName + '<img width = "100px" src = "'+crosses.pomsky.image+'">';
                    }
                    else if ((selectedBreed == "German Shepherd") && (secSelectedBreed == "Shar-Pei")){
                        document.getElementById('crossDisplay').innerHTML = crosses.gerpei.crossName + '<img width = "100px" src = "'+crosses.gerpei.image+'">';
                    }
                    else if ((selectedBreed == "Shar-Pei") && (secSelectedBreed == "German Shepherd")){
                        document.getElementById('crossDisplay').innerHTML = crosses.gerpei.crossName + '<img width = "100px" src = "'+crosses.gerpei.image+'">';
                    }
                    else if ((selectedBreed == "English Bulldog") && (secSelectedBreed == "German Shepherd")){
                        document.getElementById('crossDisplay').innerHTML = crosses.engger.crossName + '<img width = "100px" src = "'+crosses.engger.image+'">';
                    }
                    else if ((selectedBreed == "German Shepherd") && (secSelectedBreed == "English Bulldog")){
                        document.getElementById('crossDisplay').innerHTML = crosses.engger.crossName + '<img width = "100px" src = "'+crosses.engger.image+'">';
                    }
                    else if ((selectedBreed == "Corgi") && (secSelectedBreed == "Husky")){
                        document.getElementById('crossDisplay').innerHTML = crosses.horgi.crossName + '<img width = "100px" src = "'+crosses.horgi.image+'">';
                    }
                    else if ((selectedBreed == "Husky") && (secSelectedBreed == "Corgi")){
                        document.getElementById('crossDisplay').innerHTML = crosses.horgi.crossName + '<img width = "100px" src = "'+crosses.horgi.image+'">';
                    }
                    else if ((selectedBreed == "Pug") && (secSelectedBreed == "English Bulldog")){
                        document.getElementById('crossDisplay').innerHTML = crosses.bullpug.crossName + '<img width = "100px" src = "'+crosses.bullpug.image+'">';
                    }
                    else if ((selectedBreed == "English Bulldog") && (secSelectedBreed == "Pug")){
                        document.getElementById('crossDisplay').innerHTML = crosses.bullpug.crossName + '<img width = "100px" src = "'+crosses.bullpug.image+'">';
                    }
                    else if ((selectedBreed == "Schnauzer") && (secSelectedBreed == "Poodle")){
                        document.getElementById('crossDisplay').innerHTML = crosses.schnoodle.crossName + '<img width = "100px" src = "'+crosses.schnoodle.image+'">';
                    }
                    else if ((selectedBreed == "Poodle") && (secSelectedBreed == "Schnauzer")){
                        document.getElementById('crossDisplay').innerHTML = crosses.schnoodle.crossName + '<img width = "100px" src = "'+crosses.schnoodle.image+'">';
                    }
                    else if ((selectedBreed == "Chow Chow") && (secSelectedBreed == "German Shepherd")){
                        document.getElementById('crossDisplay').innerHTML = crosses.shechow.crossName + '<img width = "100px" src = "'+crosses.shechow.image+'">';
                    }
                    else if ((selectedBreed == "German Shepherd") && (secSelectedBreed == "Chow Chow")){
                        document.getElementById('crossDisplay').innerHTML = crosses.shechow.crossName + '<img width = "100px" src = "'+crosses.shechow.image+'">';
                    }
                    else if ((selectedBreed == "Sheltie") && (secSelectedBreed == "Corgi")){
                        document.getElementById('crossDisplay').innerHTML = crosses.shorgi.crossName + '<img width = "100px" src = "'+crosses.shorgi.image+'">';
                    }
                    else if ((selectedBreed == "Corgi") && (secSelectedBreed == "Sheltie")){
                        document.getElementById('crossDisplay').innerHTML = crosses.shorgi.crossName + '<img width = "100px" src = "'+crosses.shorgi.image+'">';
                    }
                    else if ((selectedBreed == "Basset Hound") && (secSelectedBreed == "Shar-Pei")){
                        document.getElementById('crossDisplay').innerHTML = crosses.bashar.crossName + '<img width = "100px" src = "'+crosses.bashar.image+'">';
                    }
                    else if ((selectedBreed == "Shar-Pei") && (secSelectedBreed == "Basset Hound")){
                        document.getElementById('crossDisplay').innerHTML = crosses.bashar.crossName + '<img width = "100px" src = "'+crosses.bashar.image+'">';
                    }
                    else if ((selectedBreed == "Toy Poodle") && (secSelectedBreed == "Corgi")){
                        document.getElementById('crossDisplay').innerHTML = crosses.corgipoo.crossName + '<img width = "100px" src = "'+crosses.corgipoo.image+'">';
                    }
                    else if ((selectedBreed == "Corgi") && (secSelectedBreed == "Toy Poodle")){
                        document.getElementById('crossDisplay').innerHTML = crosses.corgipoo.crossName + '<img width = "100px" src = "'+crosses.corgipoo.image+'">';
                    }
                    else if ((selectedBreed == "Siberian Husky") && (secSelectedBreed == "Golden Retriever")){
                        document.getElementById('crossDisplay').innerHTML = crosses.goberian.crossName + '<img width = "100px" src = "'+crosses.goberian.image+'">';
                    }
                    else if ((selectedBreed == "Golden Retriever") && (secSelectedBreed == "Siberian Husky")){
                        document.getElementById('crossDisplay').innerHTML = crosses.goberian.crossName + '<img width = "100px" src = "'+crosses.goberian.image+'">';
                    }
                    else {
                        document.getElementById('crossDisplay').innerHTML = "If only one breed has been chosen: Please select another breed. If two breeds are picked: That cross-breed is not included as of yet."
                    }
            }
         
         
         
            }
         