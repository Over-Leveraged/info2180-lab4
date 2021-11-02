document.addEventListener('DOMContentLoaded',function(){

    var searchButton = document.querySelector(".btn");
    var searchRequest = document.querySelector("#search").value;
    var updateResult = document.querySelector("#result");

    searchButton.addEventListener("click",function(e){
        e.preventDefault();
        console.log("clicked")
        console.log(searchRequest)

        httpRequest= new XMLHttpRequest();
        var url="http://localhost/info2180-lab4/superheroes.php?query="+searchRequest;
        httpRequest.onreadystatechange=loadMessage;
        httpRequest.open('GET',url);
        httpRequest.send();

    })
    function loadMessage(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response = httpRequest.responseText;
                var results = document.querySelector('#result')
                results.innerHTML = response;
                //alert(response)


            }else{
                alert('There was a problem with the request.')
            }
        }
    }
})