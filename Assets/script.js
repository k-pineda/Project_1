var requestUrl= `https://www.loc.gov/collections/?fo=json`

function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i<data.results.length;i++)
        {
            console.log(data.results[i]);
        }   
        
        console.log(data)
    });
  }

getApi(requestUrl);