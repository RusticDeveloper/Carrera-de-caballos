
function corranCaballos() {
    var j1 = document.getElementById("cab").value;
    var j2 = document.getElementById("cab1").value;
    document.getElementById("CB1")
        .innerHTML = j1;
    document.getElementById("CB2")
        .innerHTML = j2;
    document.getElementById("GANADOR1")
        .innerHTML = j1;
    document.getElementById("GANADOR2")
        .innerHTML = j2;
    document.getElementById("Datoscaballos").style.display = "none";
    document.getElementById("Pista").style.display = "block";
    var p1 = document.getElementById("CB1");
    var py1 = document.getElementById("CaB1");
    var p2 = document.getElementById("CB2");
    var py2 = document.getElementById("CaB2");
    var patas = document.getElementById("audio");
    var audioGanar = document.getElementById("audio1");
    patas.play();
    var winnerId = 0;
    var pos = 0;
    var pos1 = 0;
    var gano = false;
    var id = setInterval(mover, 50);
    function mover() {
        if (gano) {
            if (winnerId === 1) {
                document.getElementById("Pista").style.display = "none";
                document.getElementById("winner").style.display = "block";
                patas.pause();
                audioGanar.play();
            } else if (winnerId === 2) {
                document.getElementById("Pista").style.display = "none";
                document.getElementById("winner1").style.display = "block";
                patas.pause();
                audioGanar.play();
            }
            clearInterval(id);
        } else {
            pos += Math.floor(Math.random() * 5) + 1;
            pos1 += Math.floor(Math.random() * 5) + 1;
            p1.style.left = pos + 'px';
            py1.style.left = pos + 'px';
            p2.style.left = pos1 + 'px';
            py2.style.left = pos1 + 'px';
            if (pos >= 1100) {
                gano = true;
                winnerId = 1
            } else if (pos1 >= 1100) {
                gano = true;
                winnerId = 2;
            }
        }
    }
    /*var p1= document.getElementById("CB1");   
    var gano=false;
      var pos = 0;
      var id = setInterval(mover, 5);
      function mover() {
        if (gano===true) {
          clearInterval(id);
        } else {
          pos=Math.floor(Math.random() * 5) +1; 
          p1.style.left += pos + 'px'; 
        
        }
      }*/
}


document.getElementById("inicio")
    .addEventListener("click", corranCaballos);

document.getElementById("mover")
    .addEventListener("click", function () {
        var p1 = document.getElementById("CB1");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;

                p1.style.left = pos + 'px';
            }
        }


    });
/*var patas=document.getElementById("audio");
patas.play();
patas.pause();*/