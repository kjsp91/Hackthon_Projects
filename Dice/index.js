const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d') 
canvas.width=150
canvas.height = 150 

const rand = Math.floor(Math.random()*6)+1 


if(rand==1){
    
    ctx.arc(75,75,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.fill()
}

if(rand==2){
    
    ctx.arc(45,75,10,0,Math.PI*2,true)
    ctx.moveTo(95,75)
    ctx.arc(95,75,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.fill()

}

if(rand==3){
    
    ctx.arc(45,75,10,0,Math.PI*2,true)
    ctx.moveTo(75,75)
    ctx.arc(75,75,10,0,Math.PI*2,true)
    ctx.moveTo(115,75)
    ctx.arc(105,75,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.fill()
}


if(rand==4){
    
    ctx.arc(45,55,10,0,Math.PI*2,true)
    ctx.moveTo(95,55)
    ctx.arc(95,55,10,0,Math.PI*2,true)
    ctx.moveTo(45,105)
    ctx.arc(45,105,10,0,Math.PI*2,true)
    ctx.moveTo(95,105)
    ctx.arc(95,105,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.fill() 
}

if(rand==5){
    
    ctx.arc(45,45,10,0,Math.PI*2,true)
    ctx.moveTo(105,45)
    ctx.arc(105,45,10,0,Math.PI*2,true)
    ctx.moveTo(45,115)
    ctx.arc(45,115,10,0,Math.PI*2,true)
    ctx.moveTo(75,75)
    ctx.arc(75,75,10,0,Math.PI*2,true)
    ctx.moveTo(105,115)
    ctx.arc(105,115,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.fill() 
}

if(rand==6){
    
    ctx.moveTo(45,75)
    ctx.arc(45,75,10,0,Math.PI*2,true)
    ctx.moveTo(45,115)
    ctx.arc(45,115,10,0,Math.PI*2,true)
    ctx.moveTo(95,45)
    ctx.arc(95,45,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.moveTo(95,75)
    ctx.arc(95,75,10,0,Math.PI*2,true)
    ctx.stroke()
    ctx.moveTo(95,115)
    ctx.arc(95,115,10,0,Math.PI*2,true)
    ctx.moveTo(45,45)
    ctx.arc(45,45,10,0,Math.PI*2,true)
      ctx.stroke()
    ctx.fill() 

}

