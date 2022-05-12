/* Global Variables */

// Base URL and the APIK will be used to get the temp DataBase.
const baseurl = "http://api.openweathermap.org/data/2.5/weather?zip="
const APIK = '&appid=734a51dd201dcdbb60cbceee739ca2a5&units=metric';


// Create a new date instance dynamically with JS
// Date setup dynamically

let d = new Date();
let newDate = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;



// dataset function running after click event
const dataset = async () => {

    //retreving the zipcode and feeling bar as var
    
    const ZC = document.getElementById('zip').value;
    const Feel = document.getElementById('feelings').value;
     const dataset = await fetch(baseurl+ZC+APIK);

     try {        
//
        const data = await dataset.json();
        var temp = data.main.temp; // get temp var from database as per the APIK
         await fetch('/Database',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({temp,Feel,newDate})
            //Sending to BE server data to get it saved in local server
            
        });

        //getting data from the back server to show it as result
        const resback = await fetch('/Getdata');
        const resbjs = await resback.json();
        //indicating the identical place for each entry with inner HTML
    document.getElementById('temp').innerHTML = `Temprature is ${resbjs.temp} C`;
    document.getElementById('date').innerHTML = `Today is ${resbjs.newDate}`;
    document.getElementById('content').innerHTML = `You feel ${resbjs.Feel}.`;

      
        
    
     }
     catch {
         console.log('error!');
         document.getElementById('entryHolder').innerHTML = 'Error!!Please check the ZIP or refresh the page if still not working.'
     }

     



}















document.getElementById('generate').addEventListener('click', dataset);








