var stateCityInfo={
    Maharashtra:["Mumbai","Pune","Aurangabad","Nashik"],
    Rajasthan:["Jaipur","Jothpur","Jaisalmer"],
    Gujarat:["Ahmedabad","Surat","Rajkot"]
}

window.onload=function(){
     const selectstate=document.getElementById('state'),
            selectcity=document.getElementById('city')
            select=document.querySelectorAll('select')

            selectcity.disabled=true

            select.forEach(select =>{
                if(select.disabled==true){
                    select.style.cursor="auto"
                }
            })

            for(let state in stateCityInfo)
            {
                // console.log(state);
                selectstate.options[selectstate.options.length]=new Option(state,state)
            }

            selectstate.onchange=(e)=>{
                selectcity.disabled=false

                selectcity.length=1

                let city=stateCityInfo[selectstate.value]

                for(let i=0;i<city.length;i++)
                {
                    selectcity.options[selectcity.options.length]=new Option(city[i],city[i])
                }
                
            }
}

