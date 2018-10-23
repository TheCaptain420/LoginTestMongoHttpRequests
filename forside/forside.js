function testLogin(){

    var brugernavninput = document.getElementById("brugernavn");
    var passwordinput = document.getElementById("password")
    console.log(brugernavninput.value +" - "+passwordinput.value);
    //document.getElementById("skrivher").innerHTML = "knap klikket"; 


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {    
          var myObj = JSON.parse(this.responseText);
          document.getElementById("skrivher").innerHTML = myObj.brugernavn;
        }
    };
    var url = "http://localhost:3000/clienter";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}
