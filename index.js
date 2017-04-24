function getLADataFromAPI (){
    var endpoint = 'https://data.lacity.org/api/views/s9rj-h3s6'
    
    fetch(endpoint)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        resultDiv = document.getElementById('result')
        // resultDiv.innerHTML = JSON.stringify(json, undefined, 2)
        var wantedData = json.map(function(item){
            var area = item.area_name
            var date = item.date_occ.split("T")[0]
            var crime = item.crm_cd_desc
            // var 
            return 'For the ' + date + ' date, this crime occured in this area: ' + area + ' , the crime was ' + crime
        })
        var htmlForWantedData = wantedData.map(function(string){
            return '<li>' + string + '</li>'
        })
        var finalHTML = ''
        htmlForWantedData.forEach(function(listItem){
            finalHTML += listItem
        })
        resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })
}