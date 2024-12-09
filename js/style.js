getLocation("cairo");
let allData ;
let searchInput= document.getElementById("searchInput")
let btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click" , function(){
    getLocation(searchInput.value)
})






async function getLocation(location) {
    let response = await fetch(`https://api.weatherapi.com/v1/search.json?key=aa6d016633fa4edfa90181900240912&q=${location}`)
    if(response.ok){
        let data = await response.json()
     allData= data;
        displayData();
    }
    
}
function displayData(){
    let cartona = "";

    for(let i =0 ;i<allData.length ; i++ ){
        cartona+=` <div class="col-md-4">
            <div class="head d-flex justify-content-between">
              <div class="day">Monday</div>
              <div class="date">9December
              </div>
            </div>
            <div class="contant my-4">
              <div class="location p-2">${allData[i].name}</div>
              <div class="degree">${allData[i].lat}
                <sup>o</sup>
                C
              </div>
              <div class="icon"><img src="images/113 (1).png" alt="summer"></div>
              <div class="custom my-3">Sunny</div>
              <span><img src="images/icon-umberella.png" alt="umberlla">20%</span>
              <span  class="p-2"><img src="images/icon-wind.png" alt="Wind">18km/h</span>
              <span><img src="images/icon-compass.png" alt="compass">East</span>
              

            </div>

          </div> 
           <div class="col-md-4 text-center time2">
            <div class="head ">
              <div class="day text-center">Tuesday
              </div>
            </div>
            <div class="contant my-4">
              <div class="cloudy"><img src="images/116.png" alt="Partly Cloudy"></div>

              <div class="degree1">${allData[i].lat}
                <sup>o</sup>
                C
              </div>
              <div class="one-deg">${allData[i].lon}
                <sup>o</sup>
              </div>
            <span class="partly">Partly Cloudy
            </span>

              

            </div>

          </div>
            <div class="col-md-4 text-center time2">
            <div class="head ">
              <div class="day text-center">Wednesday
              </div>
            </div>
            <div class="contant my-4">
              <div class="cloudy"><img src="images/119.png" alt="Partly Cloudy"></div>

              <div class="degree1">${allData[i].lat}
                <sup>o</sup>
                C
              </div>
              <div class="one-deg">${allData[i].lon}
                <sup>o</sup>
              </div>
            <span class="partly">Cloudy

            </span>

              

            </div>

          </div>


          `

    }
    document.getElementById("rowData").innerHTML=cartona
}






