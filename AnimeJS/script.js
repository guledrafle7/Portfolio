
let loader = document.getElementsByClassName('loader');
let overflowswitch = document.querySelector('body');

function loaderanim(){
    
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
            console.log("done");
            main();
        }
    
    })
    
}
loaderanim();
overflowswitch.style.overflow = 'visable';
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
    })
    anime({
        targets:'.buttoncontainer',
        delay: 800,
        keyframes:[
            {scale:1.2, opacity:.8},
            {scale:1, opacity:1},
        ],
        duration:800,
    })
    anime({
        targets:'.eyelefts',
        easing:'easeInSine',
        loop:true,
        delay:1500,
        keyframes:[
            
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
        loop:true,
        delay:1500,
        keyframes:[
            {scaleY:.15, scaleX:1.5},
            {scaleY:1 , scaleX:1},
            {scaleY:.15 , scaleX:1.5},
            {scaleY:1 , scaleX:1},
    
        ],
        duration: 400,
    })
}
