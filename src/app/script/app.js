$(document).ready(function(){
    $.ajax({ url: 'https://api.mcmakler.de/v1/advertisements',
            type: "GET",
            headers:{
              "Accept": "application/json",
              "X-Requested-With": "XMLHttpRequest",
              'Content-Type':'application/x-www-form-urlencoded',
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : true 
            },
            mode: 'no-cors',
            success: function(response){
                let data = response.data.slice(0,10)
                console.log("printing data",data);
                let img_arr = '';
                data.forEach((el)=>{
                    img_arr = img_arr + '<div class="hC"><div class="hC-imgContainer"><div class="hC-image"><img src="'+el.advertisementAssets['0'].advertisementThumbnails.inventory_m.url+'" /></div><div class="hC-tab"><span>'+el.realestateSummary.address.city+'</span></div></div><div class="hC-content"><div class="hC-title"><h4 class="heading-det">'+el.title+'</h4><p class="hC-details"><strong>'+el.realestateSummary.address.fullAddress+'</strong></p>            </div><div class="hC-info"><div class="hC-price"><p><strong>'+el.advertisementPrice.sellPrice+' €</strong></p></div><div class="hC-price"><p class="hC-p-l">'+el.realestateSummary.numberOfRooms+' Zimmer</p><p class="hC-p-r">ab '+el.realestateSummary.space+'<sup>2</sup></p></div></div></div></div>'
                })
                document.getElementById("app").innerHTML = img_arr;
            }});
    });