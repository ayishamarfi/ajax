const searchCountry= async()=>{
    console.log(country.value);
      const response = await fetch(`https://restcountries.com/v3.1/name/${country.value}?fullText=true`)
      //console.log(response);//no need of then
     response.json().then((data)=>{
        console.log(data);
        let countryName = data[0].name.common
        console.log(countryName);
        let officialName = data[0].name.official
        console.log(officialName);
        currencies=[]
         for(let cur in data[0].currencies){
            currencies.push(`${data[0].currencies[cur].symbol}-${data[0].currencies[cur].name}`)
            

         }
        let capital = data[0].capital[0]
        console.log(capital);


        language=[] 
        for(let lang in data[0].languages){
         console.log(lang);
         language.push(data[0].languages[lang])
         
        }



        let borders =data[0].borders
        console.log(borders);
        let area =data[0].area
        console.log( area);
        let map =data[0].maps.googleMaps
        console.log(map);
        let population=data[0].population
        console.log(population);
        let  timeZone=data[0].timezones
        console.log( timeZone);
        let  continent=data[0].continents
        console.log(continent);
        let  flags=data[0]. flags.png
        console.log(flags);

        result.innerHTML =`<div class="card mb-3 mt-3 p-3" style="width:100%;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="  ${flags}"
                                    class="img-fluid rounded-start pt-3" alt="Flag" style="width:200px;height:200px">
                                <h4 class="card-title mt-4 text-center">${officialName}</h4>
                                <ul class="list-group list-group-flush border mt-4">
                                        <li class="list-group-item">Common Name :${countryName}</li>
                                        <li class="list-group-item"> Capital : ${capital}</li>
                                        
                                    </ul>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                     <ul class="list-group list-group-flush border">
                                        <li class="list-group-item"> Currencies : ${currencies}</li>
                                        <li class="list-group-item"> Languages : ${language}</li>
                                        <li class="list-group-item"> Borders :${borders} </li>
                                        <li class="list-group-item"> Area :${area} </li>
                                        <li class="list-group-item"> Map : <a href=${map} target="_blank">${map} </a> </li>
                                        <li class="list-group-item"> Population : ${population}</li>
                                        <li class="list-group-item"> Timezone : ${timeZone}</li>
                                        <li class="list-group-item"> Continent : ${continent}</li>
                                         
                                        
                                         
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`

        
         

        
     })
      
}