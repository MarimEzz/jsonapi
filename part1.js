
var getfirstloc = localStorage.getItem("fristloc");
var getlastloc = localStorage.getItem("lastloc");
var getfristdate = localStorage.getItem("fristdate");
var getlastdate = localStorage.getItem("lastdate");


document.getElementById('passfrolocation').innerText=getfirstloc;
document.getElementById('passfromlocation').innerText=getfirstloc; //pass right 

document.getElementById('passtolocation').innerText =getlastloc;
document.getElementById('passtlocation').innerText =getlastloc; //pass right 

document.getElementById('passdateone').innerText=getfristdate;
document.getElementById('passdteone').innerText =getfristdate; //pass right 

document.getElementById('passdatetwo').innerText=getlastdate;
document.getElementById('passdtetwo').innerText =getlastdate;

var cairotohurg;
var hurgtocairo;
var alextohurg;
var hurgtoalex;
var hurgtolux;
var luxtohurg;
var suztohurg;
var hurgtosuz;
var cairotosuz;
var suztocairo;
var hurgtoqe;
var qetohurg;
var cairotoqe;
var qetocairo;
var cairotoass;
var asstocairo;
var hurgtoass;
var asstohurg;
var ghrtohurg;
var hurgtoghr;
var alextocairo;
var cairotoalex;
var cairotolux;
var luxtocairo;
var sfgtolux;
var luxtosfg;
var shrmtocairo;
var cairotoshrm;
var cairotosin;
var sintocairo;
var redtocairo;
var cairotored;
var cairotonuw;
var nuwtocairo;
var mattocairo;
var cairotomat;
var cairotomen;
var mentocairo;
var cairotoports;
var portstocairo;
var alextoshrm;
var shrmtoalex;
var shrmtosin;
var sintoshrm;
var ghrtoshrm;
var shrmtoghr;
var alextosin;
var sintoalex;
var alextosuz;
var suztoalex;
var cairotosfg;
var sfgtocairo;
var redtosfg;
var sfgtored;
var sfgtoqe;
var qetosfg;
var sfgtoass;
var asstosfg;
var sintoghr;
var ghrtosuz;
var sintonuw;

//////////////////////////////////////////
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://marimezz.github.io/jsonapi/data.json");
myRequest.send();

myRequest.addEventListener("readystatechange",myfunction);
function myfunction(){
    if(myRequest.readyState == 4 && myRequest.status ==200)
    {
        cairotohurg = JSON.parse( myRequest.response).cairo_to_hurghada;
        if( getfirstloc=='Cairo' && getlastloc=='Hurghada')
        {
        cairotohurgf()
        }

        hurgtocairo = JSON.parse( myRequest.response).hurghada_to_cairo;
        if( getfirstloc=='Hurghada' && getlastloc=='Cairo')
        {
        hurgtocairof()
        }

        alextohurg = JSON.parse( myRequest.response).alexandria_to_hurghada;
        if( getfirstloc=='Alexandria' && getlastloc=='Hurghada')
        {
        alextohurgf()
        }

        hurgtoalex = JSON.parse( myRequest.response).hurghada_to_alexandria;
        if( getfirstloc=='Hurghada' && getlastloc=='Alexandria')
        {
        hurgtoalexf()
        }

        hurgtolux = JSON.parse( myRequest.response).hurghada_to_luxor;
        if( getfirstloc=='Hurghada' && getlastloc=='Luxor')
        {
        hurgtoluxf()
        }

        luxtohurg = JSON.parse( myRequest.response).luxor_to_hurghada;
        if( getfirstloc=='Luxor' && getlastloc=='Hurghada')
        {
        luxtohurgf()
        }

        suztohurg = JSON.parse( myRequest.response).suez_to_hurghada;
        if( getfirstloc=='Suze' && getlastloc=='Hurghada')
        {
        suztohurgf()
        }

        hurgtosuz = JSON.parse( myRequest.response).hurghada_to_suez;
        if( getfirstloc=='Hurghada' && getlastloc=='Suze')
        {
        hurgtosuzf()
        }

        cairotosuz = JSON.parse( myRequest.response).cairo_to_suez;
        if( getfirstloc=='Cairo' && getlastloc=='Suze')
        {
        cairotosuzf()
        }

        suztocairo = JSON.parse( myRequest.response).suez_to_cairo;
        if( getfirstloc=='Suze' && getlastloc=='Cairo')
        {
        suztocairof()
        }

        hurgtoqe = JSON.parse( myRequest.response).hurghada_to_qena;
        if( getfirstloc=='Hurghada' && getlastloc=='Qena')
        {
        hurgtoqef()
        }

        qetohurg = JSON.parse( myRequest.response).qena_to_hurghada;
        if( getfirstloc=='Qena' && getlastloc=='Hurghada')
        {
        qetohurgf()
        }

        cairotoqe = JSON.parse( myRequest.response).cairo_to_qena;
        if( getfirstloc=='Cairo' && getlastloc=='Qena')
        {
        cairotoqef()
        }

        qetocairo = JSON.parse( myRequest.response).qena_to_cairo;
        if( getfirstloc=='Qena' && getlastloc=='Cairo')
        {
        qetocairof()
        }

        cairotoass = JSON.parse( myRequest.response).cairo_to_assiut;
        if( getfirstloc=='Cairo' && getlastloc=='Assiut')
        {
        cairotoassf()
        }

        asstocairo = JSON.parse( myRequest.response).assiut_to_cairo;
        if( getfirstloc=='Assiut' && getlastloc=='Cairo')
        {
        asstocairof()
        }

        hurgtoass = JSON.parse( myRequest.response).hurghada_to_assiut;
        if( getfirstloc=='Hurghada' && getlastloc=='Assiut')
        {
        hurgtoassf()
        }

        asstohurg = JSON.parse( myRequest.response).assiut_to_hurghada;
        if( getfirstloc=='Assiut' && getlastloc=='Hurghada')
        {
        asstohurgf()
        }

        ghrtohurg = JSON.parse( myRequest.response).gharbia_to_hurghada;
        if( getfirstloc=='Gharbia' && getlastloc=='Hurghada')
        {
            ghrtohurgf()
        }

        hurgtoghr = JSON.parse( myRequest.response).hurghada_to_gharbia;
        if( getfirstloc=='Hurghada' && getlastloc=='Gharbia')
        {
            hurgtoghrf()
        }

        alextocairo = JSON.parse( myRequest.response).alexandria_to_cairo;
        if( getfirstloc=='Alexandria' && getlastloc=='Cairo')
        {
            alextocairof()
        }

        cairotoalex = JSON.parse( myRequest.response).cairo_to_alexandria;
        if( getfirstloc=='Cairo' && getlastloc=='Alexandria')
        {
            cairotoalexf()
        }

        cairotolux = JSON.parse( myRequest.response).cairo_to_luxor;
        if( getfirstloc=='Cairo' && getlastloc=='Luxor')
        {
            cairotoluxf()
        }

        luxtocairo = JSON.parse( myRequest.response).luxor_to_cairo;
        if( getfirstloc=='Luxor' && getlastloc=='Cairo')
        {
            luxtocairof()
        }

        sfgtolux = JSON.parse( myRequest.response).safaga_to_luxor;
        if( getfirstloc=='Safaga' && getlastloc=='Luxor')
        {
            sfgtoluxf()
        }

        luxtosfg = JSON.parse( myRequest.response).luxor_to_safaga;
        if( getfirstloc=='Luxor' && getlastloc=='Safaga')
        {
            luxtosfgf()
        }

        shrmtocairo = JSON.parse( myRequest.response).sharm_elshiekh_to_cairo;
        if( getfirstloc=='Sharm elshiekh' && getlastloc=='Cairo')
        {
            shrmtocairof()
        }

        cairotoshrm = JSON.parse( myRequest.response).cairo_to_sharm_elshiekh;
        if( getfirstloc=='Cairo' && getlastloc=='Sharm elshiekh')
        {
            cairotoshrmf()
        }

        cairotosin = JSON.parse( myRequest.response).cairo_to_south_sinai;
        if( getfirstloc=='Cairo' && getlastloc=='South Sinai')
        {
            cairotosinf()
        }

        sintocairo = JSON.parse( myRequest.response).south_sinai_to_cairo;
        if( getfirstloc=='South Sinai' && getlastloc=='Cairo')
        {
            sintocairof()
        }

        redtocairo = JSON.parse( myRequest.response).red_sea_to_cairo;
        if( getfirstloc=='Red sea' && getlastloc=='Cairo')
        {
            redtocairof()
        }

        cairotored = JSON.parse( myRequest.response).cairo_to_red_sea;
        if( getfirstloc=='Cairo' && getlastloc=='Red sea')
        {
            cairotoredf()
        }

        cairotonuw = JSON.parse( myRequest.response).cairo_to_nuweiba;
        if( getfirstloc=='Cairo' && getlastloc=='Nuweiba')
        {
            cairotonuwf()
        }

        nuwtocairo = JSON.parse( myRequest.response).nuweiba_to_cairo;
        if( getfirstloc=='Nuweiba' && getlastloc=='Cairo')
        {
            nuwtocairof()
        }

        mattocairo = JSON.parse( myRequest.response).matrouh_to_cairo;
        if( getfirstloc=='Matrouh' && getlastloc=='Cairo')
        {
            mattocairof()
        }

        cairotomat = JSON.parse( myRequest.response).cairo_to_matrouh;
        if( getfirstloc=='Cairo' && getlastloc=='Matrouh')
        {
            cairotomatf()
        }

        cairotomen = JSON.parse( myRequest.response).cairo_to_elmenia;
        if( getfirstloc=='Cairo' && getlastloc=='Elmenia')
        {
            cairotomenf()
        }

        mentocairo = JSON.parse( myRequest.response).elmenia_to_cairo;
        if( getfirstloc=='Elmenia' && getlastloc=='Cairo')
        {
            mentocairof()
        }

        cairotoports = JSON.parse( myRequest.response).cairo_to_port_said;
        if( getfirstloc=='Cairo' && getlastloc=='Port said')
        {
            cairotoportsf()
        }

        portstocairo = JSON.parse( myRequest.response).port_said_to_cairo;
        if( getfirstloc=='Port said' && getlastloc=='Cairo')
        {
            portstocairof()
        }

        alextoshrm = JSON.parse( myRequest.response).alexandria_to_sharm_elshiekh;
        if( getfirstloc=='Alexandria' && getlastloc=='Sharm elshiekh')
        {
            alextoshrmf()
        }

        shrmtoalex = JSON.parse( myRequest.response).sharm_elshiekh_to_alexandria;
        if( getfirstloc=='Sharm elshiekh' && getlastloc=='Alexandria')
        {
            shrmtoalexf()
        }

        shrmtosin = JSON.parse( myRequest.response).sharm_elshiekh_to_south_sinai;
        if( getfirstloc=='Sharm elshiekh' && getlastloc=='South Sinai')
        {
            shrmtosinf()
        }

        sintoshrm = JSON.parse( myRequest.response).south_sinai_to_sharm_elshiekh;
        if( getfirstloc=='South Sinai' && getlastloc=='Sharm elshiekh')
        {
            sintoshrmf()
        }

        ghrtoshrm = JSON.parse( myRequest.response).gharbia_to_sharm_elshiekh;
        if( getfirstloc=='Gharbia' && getlastloc=='Sharm elshiekh')
        {
            ghrtoshrmf()
        }

        shrmtoghr = JSON.parse( myRequest.response).sharm_elshiekh_to_gharbia;
        if( getfirstloc=='Sharm elshiekh' && getlastloc=='Gharbia')
        {
            shrmtoghrf()
        }

        alextosin = JSON.parse( myRequest.response).alexandria_to_south_sinai;
        if( getfirstloc=='Alexandria' && getlastloc=='South Sinai')
        {
            alextosinf()
        }

        sintoalex = JSON.parse( myRequest.response).south_sinai_to_alexandria;
        if( getfirstloc=='South Sinai' && getlastloc=='Alexandria')
        {
            sintoalexf()
        }

        alextosuz = JSON.parse( myRequest.response).alexandria_to_suez;
        if( getfirstloc=='Alexandria' && getlastloc=='Suze')
        {
            alextosuzf()
        }

        suztoalex = JSON.parse( myRequest.response).suez_to_alexandria;
        if( getfirstloc=='Suze' && getlastloc=='Alexandria')
        {
            suztoalexf()
        }

        cairotosfg = JSON.parse( myRequest.response).cairo_to_safaga;
        if( getfirstloc=='Cairo' && getlastloc=='Safaga')
        {
            cairotosfgf()
        }

        sfgtocairo = JSON.parse( myRequest.response).safaga_to_cairo;
        if( getfirstloc=='Safaga' && getlastloc=='Cairo')
        {
            sfgtocairof()
        }

        redtosfg = JSON.parse( myRequest.response).red_sea_to_safaga;
        if( getfirstloc=='Red sea' && getlastloc=='Safaga')
        {
            redtosfgf()
        }

        sfgtored = JSON.parse( myRequest.response).safaga_to_red_sea;
        if( getfirstloc=='Safaga' && getlastloc=='Red sea')
        {
            sfgtoredf()
        }

        sfgtoqe = JSON.parse( myRequest.response).safaga_to_qena;
        if( getfirstloc=='Safaga' && getlastloc=='Qena')
        {
            sfgtoqef()
        }

        qetosfg = JSON.parse( myRequest.response).qena_to_safaga;
        if( getfirstloc=='Qena' && getlastloc=='Safaga')
        {
            qetosfgf()
        }

        sfgtoass = JSON.parse( myRequest.response).safaga_to_assiut;
        if( getfirstloc=='Safaga' && getlastloc=='Assiut')
        {
            sfgtoassf()
        }

        asstosfg = JSON.parse( myRequest.response).assiut_to_safaga;
        if( getfirstloc=='Assiut' && getlastloc=='Safaga')
        {
            asstosfgf()
        }

        sintoghr = JSON.parse( myRequest.response).south_sinai_to_gharbia;
        if( getfirstloc=='South Sinai' && getlastloc=='Gharbia')
        {
            sintoghrf()
        }

        ghrtosuz = JSON.parse( myRequest.response).gharbia_to_suez;
        if( getfirstloc=='Gharbia' && getlastloc=='Suze')
        {
            ghrtosuzf()
        }

        sintonuw = JSON.parse( myRequest.response).south_sinai_to_nuweiba;
        if( getfirstloc=='South Sinai' && getlastloc=='Nuweiba')
        {
            sintonuwf()
        }
    }
}


function cairotohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotohurg[i].pickup} </p>
                            <p id="timefrom"> ${cairotohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotohurg[i].dropoff} </p>
                            <p id="timeto"> ${cairotohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotohurg[i].price}EGP</p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
                        <p id="typpe"> ${cairotohurg[i].bustype} </p>

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotohurg.length; y++)
            {
                if(cairotohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<data_filter.length; y++)
            {
                
            document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<data_filter.length; y++)
            {
                
            document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<data_filter.length; y++)
            {
                
            document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                
            }
            });

}

function hurgtocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtocairo[i].pickup} </p>
                            <p id="timefrom"> ${hurgtocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtocairo[i].dropoff} </p>
                            <p id="timeto"> ${hurgtocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtocairo[i].price}</p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtocairo.length; y++)
            {
                if(hurgtocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            
            });

}
function alextohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<alextohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${alextohurg[i].pickup} </p>
                            <p id="timefrom"> ${alextohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${alextohurg[i].dropoff} </p>
                            <p id="timeto"> ${alextohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${alextohurg[i].price}EGP</p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<alextohurg.length; y++)
            {
                if(alextohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(alextohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(alextohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", alextohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = alextohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<alextohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = alextohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<alextohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = alextohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<alextohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function hurgtoalexf()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtoalex.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtoalex[i].pickup} </p>
                            <p id="timefrom"> ${hurgtoalex[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtoalex[i].dropoff} </p>
                            <p id="timeto"> ${hurgtoalex[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtoalex[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtoalex.length; y++)
            {
                if(hurgtoalex[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtoalex[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtoalex[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtoalexf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtoalex.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtoalex.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtoalex.length; y++)
            { 
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtoalex.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function hurgtoluxf()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtolux.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtolux[i].pickup} </p>
                            <p id="timefrom"> ${hurgtolux[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtolux[i].dropoff} </p>
                            <p id="timeto"> ${hurgtolux[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtolux[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtolux.length; y++)
            {
                if(hurgtolux[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtolux[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtolux[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtoluxf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtolux.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtolux.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtolux.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function luxtohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<luxtohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${luxtohurg[i].pickup} </p>
                            <p id="timefrom"> ${luxtohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${luxtohurg[i].dropoff} </p>
                            <p id="timeto"> ${luxtohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${luxtohurg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<luxtohurg.length; y++)
            {
                if(luxtohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(luxtohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(luxtohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", luxtohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = luxtohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<luxtohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = luxtohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<luxtohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = luxtohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
            
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<luxtohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });

}
function suztohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<suztohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${suztohurg[i].pickup} </p>
                            <p id="timefrom"> ${suztohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${suztohurg[i].dropoff} </p>
                            <p id="timeto"> ${suztohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${suztohurg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<suztohurg.length; y++)
            {
                if(suztohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(suztohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(suztohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", suztohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = suztohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<suztohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = suztohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<suztohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = suztohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<suztohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function hurgtosuzf()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtosuz.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtosuz[i].pickup} </p>
                            <p id="timefrom"> ${hurgtosuz[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtosuz[i].dropoff} </p>
                            <p id="timeto"> ${hurgtosuz[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtosuz[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtosuz.length; y++)
            {
                if(hurgtosuz[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtosuz[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtosuz[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtosuzf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtosuz.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtosuz.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtosuz.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotosuzf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotosuz.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotosuz[i].pickup} </p>
                            <p id="timefrom"> ${cairotosuz[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotosuz[i].dropoff} </p>
                            <p id="timeto"> ${cairotosuz[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotosuz[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotosuz.length; y++)
            {
                if(cairotosuz[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotosuz[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotosuz[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotosuzf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotosuz.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotosuz.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotosuz.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function suztocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<suztocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${suztocairo[i].pickup} </p>
                            <p id="timefrom"> ${suztocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${suztocairo[i].dropoff} </p>
                            <p id="timeto"> ${suztocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${suztocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<suztocairo.length; y++)
            {
                if(suztocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(csuztocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(suztocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", suztocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = suztocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<suztocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = suztocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<suztocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = suztocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<suztocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function hurgtoqef()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtoqe.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtoqe[i].pickup} </p>
                            <p id="timefrom"> ${hurgtoqe[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtoqe[i].dropoff} </p>
                            <p id="timeto"> ${hurgtoqe[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtoqe[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtoqe.length; y++)
            {
                if(hurgtoqe[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtoqe[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtoqe[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtoqef);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtoqe.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtoqe.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtoqe.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function qetohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<qetohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${qetohurg[i].pickup} </p>
                            <p id="timefrom"> ${qetohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${qetohurg[i].dropoff} </p>
                            <p id="timeto"> ${qetohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${qetohurg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<qetohurg.length; y++)
            {
                if(qetohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(qetohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(qetohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", qetohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = qetohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<qetohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = qetohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<qetohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = qetohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<qetohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoqef()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotoqe.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotoqe[i].pickup} </p>
                            <p id="timefrom"> ${cairotoqe[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotoqe[i].dropoff} </p>
                            <p id="timeto"> ${cairotoqe[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotoqe[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotoqe.length; y++)
            {
                if(cairotoqe[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotoqe[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotoqe[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoqef);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotoqe.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotoqe.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotoqe.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function qetocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<qetocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${qetocairo[i].pickup} </p>
                            <p id="timefrom"> ${qetocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${qetocairo[i].dropoff} </p>
                            <p id="timeto"> ${qetocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${qetocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<qetocairo.length; y++)
            {
                if(qetocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(qetocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(qetocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", qetocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = qetocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<qetocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = qetocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<qetocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = qetocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<qetocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoassf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotoass.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotoass[i].pickup} </p>
                            <p id="timefrom"> ${cairotoass[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotoass[i].dropoff} </p>
                            <p id="timeto"> ${cairotoass[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotoass[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotoass.length; y++)
            {
                if(cairotoass[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotoass[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotoass[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoassf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotoass.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotoass.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotoass.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function asstocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<asstocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${asstocairo[i].pickup} </p>
                            <p id="timefrom"> ${asstocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${asstocairo[i].dropoff} </p>
                            <p id="timeto"> ${asstocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${asstocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<asstocairo.length; y++)
            {
                if(asstocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(asstocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(asstocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", asstocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = asstocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<asstocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = asstocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<asstocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = asstocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<asstocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function hurgtoassf()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtoass.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtoass[i].pickup} </p>
                            <p id="timefrom"> ${hurgtoass[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtoass[i].dropoff} </p>
                            <p id="timeto"> ${hurgtoass[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtoass[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtoass.length; y++)
            {
                if(hurgtoass[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtoass[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtoass[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtoassf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtoass.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtoass.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtoass.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function asstohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<asstohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${asstohurg[i].pickup} </p>
                            <p id="timefrom"> ${asstohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${asstohurg[i].dropoff} </p>
                            <p id="timeto"> ${asstohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${asstohurg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<asstohurg.length; y++)
            {
                if(asstohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(asstohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(asstohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", asstohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = asstohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<asstohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = asstohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<asstohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = asstohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<asstohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function ghrtohurgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<ghrtohurg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${ghrtohurg[i].pickup} </p>
                            <p id="timefrom"> ${ghrtohurg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${ghrtohurg[i].dropoff} </p>
                            <p id="timeto"> ${ghrtohurg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${ghrtohurg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<ghrtohurg.length; y++)
            {
                if(ghrtohurg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(ghrtohurg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(ghrtohurg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", ghrtohurgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = ghrtohurg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<ghrtohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = ghrtohurg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<ghrtohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = ghrtohurg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<ghrtohurg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function hurgtoghrf()
{
    
    var cartoona=``;
    


    for(var i=0; i<hurgtoghr.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${hurgtoghr[i].pickup} </p>
                            <p id="timefrom"> ${hurgtoghr[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${hurgtoghr[i].dropoff} </p>
                            <p id="timeto"> ${hurgtoghr[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${hurgtoghr[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<hurgtoghr.length; y++)
            {
                if(hurgtoghr[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(hurgtoghr[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(hurgtoghr[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", hurgtoghrf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = hurgtoghr.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<hurgtoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = hurgtoghr.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<hurgtoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = hurgtoghr.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<hurgtoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function alextocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<alextocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${alextocairo[i].pickup} </p>
                            <p id="timefrom"> ${alextocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${alextocairo[i].dropoff} </p>
                            <p id="timeto"> ${alextocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${alextocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<alextocairo.length; y++)
            {
                if(alextocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(alextocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(alextocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", alextocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = alextocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<alextocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = alextocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<alextocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = alextocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<alextocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoalexf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotoalex.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotoalex[i].pickup} </p>
                            <p id="timefrom"> ${cairotoalex[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotoalex[i].dropoff} </p>
                            <p id="timeto"> ${cairotoalex[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotoalex[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotoalex.length; y++)
            {
                if(cairotoalex[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotoalex[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotoalex[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoalexf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotoalex.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotoalex.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotoalex.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoluxf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotolux.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotolux[i].pickup} </p>
                            <p id="timefrom"> ${cairotolux[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotolux[i].dropoff} </p>
                            <p id="timeto"> ${cairotolux[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotolux[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotolux.length; y++)
            {
                if(cairotolux[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotolux[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotolux[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoluxf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotolux.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotolux.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotolux.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function luxtocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<luxtocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${luxtocairo[i].pickup} </p>
                            <p id="timefrom"> ${luxtocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${luxtocairo[i].dropoff} </p>
                            <p id="timeto"> ${luxtocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${luxtocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<luxtocairo.length; y++)
            {
                if(luxtocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(luxtocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(luxtocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", luxtocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = luxtocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<luxtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = luxtocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<luxtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = luxtocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<luxtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sfgtoluxf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sfgtolux.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sfgtolux[i].pickup} </p>
                            <p id="timefrom"> ${sfgtolux[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sfgtolux[i].dropoff} </p>
                            <p id="timeto"> ${sfgtolux[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sfgtolux[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sfgtolux.length; y++)
            {
                if(sfgtolux[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sfgtolux[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sfgtolux[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sfgtoluxf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sfgtolux.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sfgtolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sfgtolux.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sfgtolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sfgtolux.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sfgtolux.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function luxtosfgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<luxtosfg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${luxtosfg[i].pickup} </p>
                            <p id="timefrom"> ${luxtosfg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${luxtosfg[i].dropoff} </p>
                            <p id="timeto"> ${luxtosfg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${luxtosfg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<luxtosfg.length; y++)
            {
                if(luxtosfg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(luxtosfg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(luxtosfg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", luxtosfgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = luxtosfg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<luxtosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = luxtosfg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<luxtosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = luxtosfg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<luxtosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function shrmtocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<shrmtocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${shrmtocairo[i].pickup} </p>
                            <p id="timefrom"> ${shrmtocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${shrmtocairo[i].dropoff} </p>
                            <p id="timeto"> ${shrmtocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${shrmtocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<shrmtocairo.length; y++)
            {
                if(shrmtocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(shrmtocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(shrmtocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", shrmtocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = shrmtocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<shrmtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = shrmtocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<shrmtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = shrmtocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<shrmtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoshrmf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotoshrm.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotoshrm[i].pickup} </p>
                            <p id="timefrom"> ${cairotoshrm[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotoshrm[i].dropoff} </p>
                            <p id="timeto"> ${cairotoshrm[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotoshrm[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotoshrm.length; y++)
            {
                if(cairotoshrm[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotoshrm[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotoshrm[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoshrmf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotoshrm.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotoshrm.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotoshrm.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotoshrm.length; y++)
            {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotosinf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotosin.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotosin[i].pickup} </p>
                            <p id="timefrom"> ${cairotosin[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotosin[i].dropoff} </p>
                            <p id="timeto"> ${cairotosin[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotosin[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotosin.length; y++)
            {
                if(cairotosin[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotosin[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotosin[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotosinf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotosin.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotosin.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotosin.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sintocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<sintocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sintocairo[i].pickup} </p>
                            <p id="timefrom"> ${sintocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sintocairo[i].dropoff} </p>
                            <p id="timeto"> ${sintocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sintocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sintocairo.length; y++)
            {
                if(sintocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sintocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sintocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sintocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sintocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sintocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sintocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sintocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sintocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sintocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function redtocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<redtocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${redtocairo[i].pickup} </p>
                            <p id="timefrom"> ${redtocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${redtocairo[i].dropoff} </p>
                            <p id="timeto"> ${redtocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${redtocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<redtocairo.length; y++)
            {
                if(redtocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(redtocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(redtocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", redtocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = redtocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<redtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = redtocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<redtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = redtocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
                
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<redtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoredf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotored.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotored[i].pickup} </p>
                            <p id="timefrom"> ${cairotored[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotored[i].dropoff} </p>
                            <p id="timeto"> ${cairotored[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotored[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotored.length; y++)
            {
                if(cairotored[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotored[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotored[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoredf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotored.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotored.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotored.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotored.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotored.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotored.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotonuwf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotonuw.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotonuw[i].pickup} </p>
                            <p id="timefrom"> ${cairotonuw[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotonuw[i].dropoff} </p>
                            <p id="timeto"> ${cairotonuw[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotonuw[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotonuw.length; y++)
            {
                if(cairotonuw[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotonuw[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotonuw[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotonuwf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotonuw.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotonuw.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotonuw.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotonuw.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotonuw.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotonuw.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function nuwtocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<nuwtocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${nuwtocairo[i].pickup} </p>
                            <p id="timefrom"> ${nuwtocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${nuwtocairo[i].dropoff} </p>
                            <p id="timeto"> ${nuwtocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${nuwtocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<nuwtocairo.length; y++)
            {
                if(nuwtocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(nuwtocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(nuwtocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", nuwtocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = nuwtocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<nuwtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = nuwtocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<nuwtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = nuwtocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<nuwtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function mattocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<mattocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${mattocairo[i].pickup} </p>
                            <p id="timefrom"> ${mattocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${mattocairo[i].dropoff} </p>
                            <p id="timeto"> ${mattocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${mattocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<mattocairo.length; y++)
            {
                if(mattocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(mattocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(mattocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", mattocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = mattocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<mattocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = mattocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<mattocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = mattocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<mattocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotomatf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotomat.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotomat[i].pickup} </p>
                            <p id="timefrom"> ${cairotomat[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotomat[i].dropoff} </p>
                            <p id="timeto"> ${cairotomat[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotomat[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotomat.length; y++)
            {
                if(cairotomat[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotomat[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotomat[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotomatf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotomat.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotomat.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotomat.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotomat.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotomat.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotomat.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotomenf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotomen.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotomen[i].pickup} </p>
                            <p id="timefrom"> ${cairotomen[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotomen[i].dropoff} </p>
                            <p id="timeto"> ${cairotomen[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotomen[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotomen.length; y++)
            {
                if(cairotomen[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotomen[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotomen[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotomenf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotomen.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotomen.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotomen.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotomen.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotomen.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotomen.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
            });


}
function mentocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<mentocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${mentocairo[i].pickup} </p>
                            <p id="timefrom"> ${mentocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${mentocairo[i].dropoff} </p>
                            <p id="timeto"> ${mentocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${mentocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<mentocairo.length; y++)
            {
                if(mentocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(mentocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(mentocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", mentocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = mentocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<mentocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = mentocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<mentocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = mentocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<mentocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotoportsf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotoports.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotoports[i].pickup} </p>
                            <p id="timefrom"> ${cairotoports[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotoports[i].dropoff} </p>
                            <p id="timeto"> ${cairotoports[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotoports[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotoports.length; y++)
            {
                if(cairotoports[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotoports[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotoports[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotoportsf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotoports.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotoports.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotoports.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotoports.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotoports.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotoports.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function portstocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<portstocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${portstocairo[i].pickup} </p>
                            <p id="timefrom"> ${portstocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${portstocairo[i].dropoff} </p>
                            <p id="timeto"> ${portstocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${portstocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<portstocairo.length; y++)
            {
                if(portstocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(portstocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(portstocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", portstocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = portstocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<portstocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = portstocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<portstocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = portstocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<portstocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function alextoshrmf()
{
    
    var cartoona=``;
    


    for(var i=0; i<alextoshrm.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${alextoshrm[i].pickup} </p>
                            <p id="timefrom"> ${alextoshrm[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${alextoshrm[i].dropoff} </p>
                            <p id="timeto"> ${alextoshrm[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${alextoshrm[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<alextoshrm.length; y++)
            {
                if(alextoshrm[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(alextoshrm[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(alextoshrm[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", alextoshrmf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = alextoshrm.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<alextoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = alextoshrm.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<alextoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = alextoshrm.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<alextoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function shrmtoalexf()
{
    
    var cartoona=``;
    


    for(var i=0; i<shrmtoalex.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${shrmtoalex[i].pickup} </p>
                            <p id="timefrom"> ${shrmtoalex[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${shrmtoalex[i].dropoff} </p>
                            <p id="timeto"> ${shrmtoalex[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${shrmtoalex[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<shrmtoalex.length; y++)
            {
                if(shrmtoalex[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(shrmtoalex[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(shrmtoalex[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", shrmtoalexf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = shrmtoalex.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<shrmtoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = shrmtoalex.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<shrmtoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = shrmtoalex.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<shrmtoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function shrmtosinf()
{
    
    var cartoona=``;
    


    for(var i=0; i<shrmtosin.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${shrmtosin[i].pickup} </p>
                            <p id="timefrom"> ${shrmtosin[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${shrmtosin[i].dropoff} </p>
                            <p id="timeto"> ${shrmtosin[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${shrmtosin[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<shrmtosin.length; y++)
            {
                if(shrmtosin[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(shrmtosin[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(shrmtosin[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", shrmtosinf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = shrmtosin.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<shrmtosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = shrmtosin.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<shrmtosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = shrmtosin.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<shrmtosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sintoshrmf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sintoshrm.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sintoshrm[i].pickup} </p>
                            <p id="timefrom"> ${sintoshrm[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sintoshrm[i].dropoff} </p>
                            <p id="timeto"> ${sintoshrm[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sintoshrm[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sintoshrm.length; y++)
            {
                if(sintoshrm[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sintoshrm[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sintoshrm[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sintoshrmf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sintoshrm.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sintoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sintoshrm.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sintoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sintoshrm.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sintoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function ghrtoshrmf()
{
    
    var cartoona=``;
    


    for(var i=0; i<ghrtoshrm.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${ghrtoshrm[i].pickup} </p>
                            <p id="timefrom"> ${ghrtoshrm[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${ghrtoshrm[i].dropoff} </p>
                            <p id="timeto"> ${ghrtoshrm[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${ghrtoshrm[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<ghrtoshrm.length; y++)
            {
                if(ghrtoshrm[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(ghrtoshrm[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(ghrtoshrm[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", ghrtoshrmf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = ghrtoshrm.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<ghrtoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = ghrtoshrm.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<ghrtoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = ghrtoshrm.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<ghrtoshrm.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function shrmtoghrf()
{
    
    var cartoona=``;
    


    for(var i=0; i<shrmtoghr.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${shrmtoghr[i].pickup} </p>
                            <p id="timefrom"> ${shrmtoghr[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${shrmtoghr[i].dropoff} </p>
                            <p id="timeto"> ${shrmtoghr[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${shrmtoghr[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<shrmtoghr.length; y++)
            {
                if(shrmtoghr[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(shrmtoghr[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(shrmtoghr[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", shrmtoghrf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = shrmtoghr.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<shrmtoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = shrmtoghr.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<shrmtoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = shrmtoghr.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<shrmtoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function alextosinf()
{
    
    var cartoona=``;
    


    for(var i=0; i<alextosin.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${alextosin[i].pickup} </p>
                            <p id="timefrom"> ${alextosin[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${alextosin[i].dropoff} </p>
                            <p id="timeto"> ${alextosin[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${alextosin[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<alextosin.length; y++)
            {
                if(alextosin[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(alextosin[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(alextosin[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", alextosinf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = alextosin.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<alextosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = alextosin.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<alextosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = alextosin.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<alextosin.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sintoalexf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sintoalex.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sintoalex[i].pickup} </p>
                            <p id="timefrom"> ${sintoalex[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sintoalex[i].dropoff} </p>
                            <p id="timeto"> ${sintoalex[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sintoalex[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sintoalex.length; y++)
            {
                if(sintoalex[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sintoalex[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sintoalex[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sintoalexf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sintoalex.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sintoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sintoalex.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sintoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sintoalex.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sintoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function alextosuzf()
{
    
    var cartoona=``;
    


    for(var i=0; i<alextosuz.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${alextosuz[i].pickup} </p>
                            <p id="timefrom"> ${alextosuz[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${alextosuz[i].dropoff} </p>
                            <p id="timeto"> ${alextosuz[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${alextosuz[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<alextosuz.length; y++)
            {
                if(alextosuz[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(alextosuz[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(alextosuz[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", alextosuzf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = alextosuz.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<alextosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = alextosuz.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<alextosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = alextosuz.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<alextosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function suztoalexf()
{
    
    var cartoona=``;
    


    for(var i=0; i<suztoalex.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${suztoalex[i].pickup} </p>
                            <p id="timefrom"> ${suztoalex[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${suztoalex[i].dropoff} </p>
                            <p id="timeto"> ${suztoalex[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${suztoalex[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<suztoalex.length; y++)
            {
                if(suztoalex[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(suztoalex[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(suztoalex[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", suztoalexf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = suztoalex.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<suztoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = suztoalex.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<suztoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = suztoalex.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<suztoalex.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function cairotosfgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<cairotosfg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${cairotosfg[i].pickup} </p>
                            <p id="timefrom"> ${cairotosfg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${cairotosfg[i].dropoff} </p>
                            <p id="timeto"> ${cairotosfg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${cairotosfg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<cairotosfg.length; y++)
            {
                if(cairotosfg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(cairotosfg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(cairotosfg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", cairotosfgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = cairotosfg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<cairotosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = cairotosfg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<cairotosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = cairotosfg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<cairotosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sfgtocairof()
{
    
    var cartoona=``;
    


    for(var i=0; i<sfgtocairo.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sfgtocairo[i].pickup} </p>
                            <p id="timefrom"> ${sfgtocairo[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sfgtocairo[i].dropoff} </p>
                            <p id="timeto"> ${sfgtocairo[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sfgtocairo[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sfgtocairo.length; y++)
            {
                if(sfgtocairo[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sfgtocairo[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sfgtocairo[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sfgtocairof);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sfgtocairo.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sfgtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sfgtocairo.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sfgtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sfgtocairo.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sfgtocairo.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function redtosfgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<redtosfg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${redtosfg[i].pickup} </p>
                            <p id="timefrom"> ${redtosfg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${redtosfg[i].dropoff} </p>
                            <p id="timeto"> ${redtosfg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${redtosfg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<redtosfg.length; y++)
            {
                if(redtosfg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(redtosfg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(redtosfg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", redtosfgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = redtosfg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<redtosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = redtosfg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<redtosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = redtosfg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<redtosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sfgtoredf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sfgtored.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sfgtored[i].pickup} </p>
                            <p id="timefrom"> ${sfgtored[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sfgtored[i].dropoff} </p>
                            <p id="timeto"> ${sfgtored[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sfgtored[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sfgtored.length; y++)
            {
                if(sfgtored[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sfgtored[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sfgtored[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sfgtoredf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sfgtored.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sfgtored.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sfgtored.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sfgtored.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sfgtored.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sfgtored.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sfgtoqef()
{
    
    var cartoona=``;
    


    for(var i=0; i<sfgtoqe.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sfgtoqe[i].pickup} </p>
                            <p id="timefrom"> ${sfgtoqe[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sfgtoqe[i].dropoff} </p>
                            <p id="timeto"> ${sfgtoqe[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sfgtoqe[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sfgtoqe.length; y++)
            {
                if(sfgtoqe[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sfgtoqe[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sfgtoqe[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sfgtoqef);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sfgtoqe.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sfgtoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sfgtoqe.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sfgtoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sfgtoqe.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sfgtoqe.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function qetosfgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<qetosfg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${qetosfg[i].pickup} </p>
                            <p id="timefrom"> ${qetosfg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${qetosfg[i].dropoff} </p>
                            <p id="timeto"> ${qetosfg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${qetosfg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<qetosfg.length; y++)
            {
                if(qetosfg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(qetosfg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(qetosfg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", qetosfgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = qetosfg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<qetosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = qetosfg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<qetosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = qetosfg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<qetosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sfgtoassf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sfgtoass.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sfgtoass[i].pickup} </p>
                            <p id="timefrom"> ${sfgtoass[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sfgtoass[i].dropoff} </p>
                            <p id="timeto"> ${sfgtoass[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sfgtoass[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sfgtoass.length; y++)
            {
                if(sfgtoass[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sfgtoass[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sfgtoass[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sfgtoassf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sfgtoass.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sfgtoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sfgtoass.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sfgtoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sfgtoass.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sfgtoass.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function asstosfgf()
{
    
    var cartoona=``;
    


    for(var i=0; i<asstosfg.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${asstosfg[i].pickup} </p>
                            <p id="timefrom"> ${asstosfg[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${asstosfg[i].dropoff} </p>
                            <p id="timeto"> ${asstosfg[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${asstosfg[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<asstosfg.length; y++)
            {
                if(asstosfg[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(asstosfg[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(asstosfg[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", asstosfgf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = asstosfg.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<asstosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = asstosfg.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<asstosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = asstosfg.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<asstosfg.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sintoghrf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sintoghr.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sintoghr[i].pickup} </p>
                            <p id="timefrom"> ${sintoghr[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sintoghr[i].dropoff} </p>
                            <p id="timeto"> ${sintoghr[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sintoghr[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sintoghr.length; y++)
            {
                if(sintoghr[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sintoghr[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sintoghr[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sintoghrf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sintoghr.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sintoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sintoghr.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sintoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sintoghr.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sintoghr.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function ghrtosuzf()
{
    
    var cartoona=``;
    


    for(var i=0; i<ghrtosuz.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${ghrtosuz[i].pickup} </p>
                            <p id="timefrom"> ${ghrtosuz[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${ghrtosuz[i].dropoff} </p>
                            <p id="timeto"> ${ghrtosuz[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${ghrtosuz[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<ghrtosuz.length; y++)
            {
                if(ghrtosuz[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(ghrtosuz[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(ghrtosuz[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", ghrtosuzf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = ghrtosuz.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<ghrtosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = ghrtosuz.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<ghrtosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = ghrtosuz.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<ghrtosuz.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });


}
function sintonuwf()
{
    
    var cartoona=``;
    


    for(var i=0; i<sintonuw.length; i++)
    {
       
        cartoona+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${sintonuw[i].pickup} </p>
                            <p id="timefrom"> ${sintonuw[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${sintonuw[i].dropoff} </p>
                            <p id="timeto"> ${sintonuw[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${sintonuw[i].price} </p>
                            <p> for a seat </p>

                        </div>
                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
                        <p id="typpe"> ${sintonuw[i].bustype} </p>

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona;
    for(var y=0; y<sintonuw.length; y++)
            {
                if(sintonuw[y].bustype=='classic')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
                }
                else if(sintonuw[y].bustype=='deluxe')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
                }
                else if(sintonuw[y].bustype=='elite')
                {
                    document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
                }
            }
    document.getElementById('allbtnfilter').addEventListener("click", sintonuwf);
    document.getElementById('classicbtnfilter').addEventListener("click", function(){
    var data_filter = sintonuw.filter( element => element.bustype =="classic")
    var cartoona2=``;
    for(var i=0; i<data_filter.length; i++)
    {
       
        cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                    
                        <div class="fromticket">
                            <p> From </p>
                            <p id="locfrom"> ${data_filter[i].pickup} </p>
                            <p id="timefrom"> ${data_filter[i].stime} </p>
                        </div>

                        <img src="bus.png" class="iconbus"/>

                        <div class="toticket"> 

                            <p> To </p>
                            <p id="locto"> ${data_filter[i].dropoff} </p>
                            <p id="timeto"> ${data_filter[i].etime} </p>

                        </div>

                        <div class="dateticket"> 

                            <p> Date </p>
                            <p id="datetic"> ${getfristdate}</p>

                        </div>

                        <div class="priceofticket"> 

                            <p id="pricetic"> ${data_filter[i].price} </p>
                            <p> for a seat </p>

                        </div>

                        <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 

                        </div>
            <br>
        `
    }
    document.getElementById('myrow').innerHTML = cartoona2;
    for(var y=0; y<sintonuw.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #9AD3BC';
            }
    });
    document.getElementById('deluxebtnfilter').addEventListener("click", function(){
        var data_filter = sintonuw.filter( element => element.bustype =="deluxe")
        var cartoona2=``;
        for(var i=0; i<data_filter.length; i++)
        {
           
            cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                        
                            <div class="fromticket">
                                <p> From </p>
                                <p id="locfrom"> ${data_filter[i].pickup} </p>
                                <p id="timefrom"> ${data_filter[i].stime} </p>
                            </div>
    
                            <img src="bus.png" class="iconbus"/>
    
                            <div class="toticket"> 
    
                                <p> To </p>
                                <p id="locto"> ${data_filter[i].dropoff} </p>
                                <p id="timeto"> ${data_filter[i].etime} </p>
    
                            </div>
    
                            <div class="dateticket"> 
    
                                <p> Date </p>
                                <p id="datetic"> ${getfristdate}</p>
    
                            </div>
    
                            <div class="priceofticket"> 
    
                                <p id="pricetic"> ${data_filter[i].price} </p>
                                <p> for a seat </p>
    
                            </div>
    
                            <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                            </div>
                <br>
            `
        }
        document.getElementById('myrow').innerHTML = cartoona2;
        for(var y=0; y<sintonuw.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #F5B461';
            }
        });
        document.getElementById('elitebtnfilter').addEventListener("click", function(){
            var data_filter = sintonuw.filter( element => element.bustype =="elite")
            var cartoona2=``;
            for(var i=0; i<data_filter.length; i++)
            {
               
                cartoona2+=`<div class="ticketbody" id="tic-`+i+`">
                            
                                <div class="fromticket">
                                    <p> From </p>
                                    <p id="locfrom"> ${data_filter[i].pickup} </p>
                                    <p id="timefrom"> ${data_filter[i].stime} </p>
                                </div>
        
                                <img src="bus.png" class="iconbus"/>
        
                                <div class="toticket"> 
        
                                    <p> To </p>
                                    <p id="locto"> ${data_filter[i].dropoff} </p>
                                    <p id="timeto"> ${data_filter[i].etime} </p>
        
                                </div>
        
                                <div class="dateticket"> 
        
                                    <p> Date </p>
                                    <p id="datetic"> ${getfristdate}</p>
        
                                </div>
        
                                <div class="priceofticket"> 
        
                                    <p id="pricetic"> ${data_filter[i].price} </p>
                                    <p> for a seat </p>
        
                                </div>
        
                                <a href="../PART 2/seat.html" class="selectbutton">SELECT</a> 
        
                                </div>
                    <br>
                `
            }
            document.getElementById('myrow').innerHTML = cartoona2;
            for(var y=0; y<sintonuw.length; y++)
            {
                document.querySelector('#tic-'+y).style.borderRight='15px solid #FBF46D';
            }
            });

}

    

function editebutton()
{
    var btn = document.getElementById("pushedite");
    var fromloc = document.getElementById("passfromlocation");
    var toloc = document.getElementById("passtolocation");
    const depaturedate = document.getElementById("passdateone");
    const selectfrom = document.getElementById("passfromlocation");
    const selectto = document.getElementById("passtolocation");

                if (btn.value == "EDIT SEARCH") {
                    btn.value = "CONFIRM";
                    btn.innerHTML = "CONFIRM";


                    const newselectfrom = document.createElement('div');
                    newselectfrom.innerHTML = `<select style="outline:none; margin-top:20px; height:35px; width:200px; font-size:16px; padding: 5px 8px;" name="location1" id="editloc1" required="required"><option value="">Enter Place</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Luxor">Luxor</option>
                    <option value="Suze">Suze</option>
                    <option value="Qena">Qena</option>
                    <option value="Assiut">Assiut</option>
                    <option value="Gharbia">Gharbia</option>
                    <option value="Safaga">Safaga</option>
                    <option value="Sharm elshiekh">Sharm elshiekh</option>
                    <option value="South Sinai">South Sinai</option>
                    <option value="Hurghada">Hurghada</option>
                    <option value="Nuweiba">Nuweiba</option>
                    <option value="Red sea">Red sea</option>
                    <option value="Matrouh">Matrouh</option>
                    <option value="Elmenia">Elmenia</option>
                    <option value="Port said">Port said</option></select>`;
                    selectfrom.parentNode.replaceChild(newselectfrom, selectfrom);

                    const newselectto = document.createElement('div');
                    newselectto.innerHTML = `<select style="outline:none; margin-top:20px; height:35px; width:200px; font-size:16px; padding: 5px 8px;" name="location1" id="editloc2" required="required"><option value="">Enter Place</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Luxor">Luxor</option>
                    <option value="Suze">Suze</option>
                    <option value="Qena">Qena</option>
                    <option value="Assiut">Assiut</option>
                    <option value="Gharbia">Gharbia</option>
                    <option value="Safaga">Safaga</option>
                    <option value="Sharm elshiekh">Sharm elshiekh</option>
                    <option value="South Sinai">South Sinai</option>
                    <option value="Hurghada">Hurghada</option>
                    <option value="Nuweiba">Nuweiba</option>
                    <option value="Red sea">Red sea</option>
                    <option value="Matrouh">Matrouh</option>
                    <option value="Elmenia">Elmenia</option>
                    <option value="Port said">Port said</option></select>`;
                    selectto.parentNode.replaceChild(newselectto, selectto);

                    const newdepdate = document.createElement('div');
                    newdepdate.innerHTML = '<input type="date" name="date" class="date" min="2022-03-14" style="outline:none; color:../PART 2/seat.html707070c9; font-size:25px; border:none; position:relative; top:-20px;     font-family: Calibri;" required>';
                   // depaturedate.parentNode.replaceChild(newdepdate, depaturedate);
                    }
        
                        
              
                    else {
                        btn.value = "EDIT SEARCH";
                        btn.innerHTML = "EDIT SEARCH";
                        
                        
                    } 
                }

    

                    
                   
    



function changedate()
{
    var rdate = document.getElementById('returndate');
    var titleh = document.getElementById('hidetitle');

        if (rdate.value == "Return Date?") {
            rdate.value = "Return Date";
            rdate.innerHTML = "Return Date";
            rdate.type = 'date';
            titleh.style.visibility = 'visible';
        }
    
}

/*
var tickpric = document.getElementById('pricetic').value;
localStorage.setItem("priceofticket", tickpric);*/