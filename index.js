// function getLADataFromAPI (){
//     var endpoint = 'https://data.lacity.org/api/views/s9rj-h3s6'
    
//     fetch(endpoint)
//     .then(function(data){
//         return data.json()
//     })
//     .then(function(json){
//         console.log(json)
//         resultDiv = document.getElementById('result')
//         // resultDiv.innerHTML = JSON.stringify(json, undefined, 2)
//         var wantedData = json.map(function(item){
//             var area = item.area_name
//             var date = item.date_occ.split("T")[0]
//             var crime = item.crm_cd_desc
//             // var 
//             return 'For the ' + date + ' date, this crime occured in this area: ' + area + ' , the crime was ' + crime
//         })
//         var htmlForWantedData = wantedData.map(function(string){
//             return '<li>' + string + '</li>'
//         })
//         var finalHTML = ''
//         htmlForWantedData.forEach(function(listItem){
//             finalHTML += listItem
//         })
//         resultDiv.innerHTML = finalHTML
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }

function getLADataFromAPI (){
    var endpoint = 'https://data.lacity.org/resource/wmn2-vxnb.json'
 
    fetch(endpoint)
    .then(function(data){
        console.log(data)
        return data.json()
    })
    .then(function(json){
        var place = '10926%20OWENSMOUTH,%20Los%20Angeles%20CA'
        var mapSource = "//www.google.com/maps/embed/v1/place?q=" + place +"&zoom=17&key=AIzaSyClvpAfDkxROGhMo1WlDrA-VaBpkgEvm9Q"
        console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = '<div class="card-deck" >'
        
        json.forEach(function(item){
            var cardItem = 
            `
              <div style="margin-top: 2%; margin-bottom: 2%" class="card">
                <img class="card-img-top" src=" http://placehold.it/300x200" alt="Card image cap">
                <div class="card-block">
                  <h4 class="card-title">${item.business_name}</h4>
                  <p class="card-text">'This store is located at ${item.location_description}. ${item.primary_naics_description}</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            `
            finalHTML += cardItem
        })
        
        finalHTML += '</div>'

        document.getElementById('mapiframe').setAttribute('src', mapSource)
        resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })
}