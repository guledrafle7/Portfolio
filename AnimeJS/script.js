
let loader = document.getElementsByClassName('loader');
let overflowswitch = document.querySelector('body');

function loaderanim(){
    overflowswitch.style.overflow = 'hidden';
    console.log("hidden");
    let t1 = anime.timeline({
        duration:750
    });
    
    t1.add({
        targets:'.body ',
        
        keyframes:[
            {scaleY:0},
            {opacity:1},
            {scaleY:1},
            
        ],
        duration:800,
    
    })
    t1.add({
        targets:'.eyeleft',
        keyframes:[
            {scaleY:0},
            {opacity:1},
            {scaleY:1},
            
        ],
       
    
    })
    t1.add({
        targets:'.eyeright',
        keyframes:[
            {scaleY:0},
            {opacity:1},
            {scaleY:1},
            
        ],
       
    
    },'-=750')
    t1.add({
        targets:'.eyeleft',
        keyframes:[
            {scaleY:.2},
            {scaleY:1},
            {scaleX:2.5},
            {scaleX:1},
        ],
        duration:800,
    })
    t1.add({
        targets:'.eyeright',
        keyframes:[
            {scaleX:3.1},
            {scaleX:1},
            {scaleY:.3},
            {scaleY:1},
            
        ],
        duration:800,
    },'-=800')
    t1.add({
        targets:'.eyeleft',
        easing:'easeInSine',
        delay:300,
        keyframes:[
            {scaleY:.15, scaleX:1.5},
            {scaleY:1 , scaleX:1},
            {scaleY:.15 , scaleX:1.5},
            {scaleY:1 , scaleX:1},
    
        ],
        duration: 400,
       
    })
    t1.add({
        targets:'.eyeright',
        easing:'easeInSine',
        keyframes:[
            {scaleY:.15, scaleX:1.5},
            {scaleY:1 , scaleX:1},
            {scaleY:.15 , scaleX:1.5},
            {scaleY:1 , scaleX:1},
    
        ],
        duration: 400,
    },'-=400')
    
    t1.add({
        targets:'.body ',
        easing: 'easeInElastic',
        keyframes:[
            
            {scale:1.2, opacity:1},
            {scale:0, opacity:0},
        ],
        duration:800,
    })
    t1.add({
        targets:'.loader',
        
        keyframes:[
                {opacity:0},
                
            ],
        duration:800,
        complete: function(anime){
            loader[0].style.display = 'none';
            overflowswitch.style.overflow = 'visible';
            console.log("visable");
            console.log("done");
            main();
        }
    
    })
    
    
    
}
loaderanim();
function main(){
    anime({
        targets:'.bodys ',
        keyframes:[
            {scale:1.2, opacity:.8},
            {scale:1, opacity:1},
        ],
        duration:500,
    });
    anime({
        targets:'.links ol li',
        delay:anime.stagger(300),
        keyframes:[
            {scale:1.2, opacity:.8},
            {scale:1, opacity:1},
        ],  
        duration:800,
    });
    anime({
        targets:'.buttoncontainer',
        delay: 800,
        keyframes:[
            {scale:1.2, opacity:.8},
            {scale:1, opacity:1},
        ],
        duration:800,
    });
    anime({
        targets:'.box1',
        delay:300,
        easing:'linear',
        duration:50,
        opacity:1,
    });
    anime({
        targets:'.text1b1',
        delay:350,
        translateX:-250,
        duration:250,
    });
    anime({
        targets:'.text2b1',
        delay:350,
        translateX:250,
        duration:250,
    })
    anime({
        targets:'.box1',
        easing:'linear',
        delay:900,
        translateX:800,
        duration:200,
    })

    anime({
        targets:'.box1',
        easing:'linear',
        delay:900,
        width:'15%',
        duration:200,
    },"-=200")

}

function faceover(){
    anime({
        targets:'.bodys',
        easing:'easeOutSine',
        scale:1.3,
        borderRadius:20,
    })
        
    anime({
        targets:'.eyelefts',
        easing:'easeInSine',
        delay:950,
        keyframes:[
            {scaleY:1 , scaleX:1},
            {scaleY:.15, scaleX:1.5},
            {scaleY:1 , scaleX:1},
            {scaleY:.15 , scaleX:1.5},
            {scaleY:1 , scaleX:1},
    
        ],
        duration: 400,
    })
    anime({
        targets:'.eyerights',
        easing:'easeInSine',
        delay:950, 
        keyframes:[
            {scaleY:1 , scaleX:1},
            {scaleY:.15, scaleX:1.5},
            {scaleY:1 , scaleX:1},
            {scaleY:.15 , scaleX:1.5},
            {scaleY:1 , scaleX:1},
    
        ],
        duration: 400,
    })
}

function faceoff(){
    anime({
        targets:'.bodys',
        keyframes:[
            {scale:.8 , borderRadius:4},
            {scale:1, borderRadius:4},
        ],
    })
}


