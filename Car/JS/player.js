class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }

    getCount(){
    var Countref=database.ref('PlayerCount')
    Countref.on('value',(data)=>{
        PlayerCount=data.val()
    })    
    }

    setCount(Count){
        database.ref('/').update({
            PlayerCount:Count
        })
    }

    setName(){
var Playerindex='players/player'+this.index         
   database.ref(Playerindex).set({
PlayerName:this.name,
distance:this.distance
   })
    
    
    }
    static getPlayersinfo(){
        var playerinforef=database.ref('players')
        playerinforef.on('value',(data)=>{
            allplayers=data.val()
        })    
        


    
    }
}