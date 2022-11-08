window.onload = function(){
    var search = document.getElementById("btn-search");
    var inputfield = document.getElementById("enter");
    var result = document.getElementById("result");
    search.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log("click");

        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', 'http:localhost/info2180-lab4/superheroes.php', true);
        httpRequest.send();
   
        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status == 200) {
                    var results = httpRequest.responseText;
                   alert(results)
            } else {
                alert("Error");
                }
            }
        }
        
    })}


