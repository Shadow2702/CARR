class Game{
    constructor(){}

    getstate(){
    var gamestateref=database.ref('gamestate')
    gamestateref.on('value',function(data){
        gamestate=data.val()
    })    
    }

    setstate(state){
        database.ref('/').update({
            gamestate:state
        })
    }
 async start(){
if (gamestate==0){
    form= new Form()
    form.display()
    player= new Player()
    var Countref=await database.ref('PlayerCount').once('value')
    if (Countref.exists()) {
        PlayerCount=Countref.val()
        player.getCount()
    }

}
car1=createSprite(200,200)
car2=createSprite(400,200)
car3=createSprite(600,200)
car4=createSprite(800,200)
car1.addImage("car1",car1i)
car2.addImage("car2",car2i)
car3.addImage("car3",car3i)
car4.addImage("car4",car4i)
cars=[car1,car2,car3,car4]
    }

    Play(){
        drawSprites()
        form.hide()
        Player.getPlayersinfo()
        if(allplayers!==undefined){
            background(255)
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var i=0
            var x=0
            var y
            for(var p in allplayers){
                i++
                x+=200
                y=displayHeight-allplayers[p].distance
                cars[i-1].x=x
                cars[i-1].y=y
                if (i==player.index) {
                    cars[i-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[i-1].y
                }
                 
            }
                
            }
            if (keyIsDown(UP_ARROW)){
                player.distance+=10
                player.setName()
            }
            
        }




    }
