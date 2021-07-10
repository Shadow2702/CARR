class Form{
    constructor(){
       this.input=createInput("").attribute("placeholder","enter your username")
       this.button=createButton("START")
       this.greetings=createElement("h2")
       this.title=createElement("h2")
       this.reset=createButton("RESET")
      }

      hide(){
         this.greetings.hide()
         this.input.hide()
         this.button.hide()

      }
 display(){
    
   this.title.html("Car Racing")
   this.title.position(130,10)

    
    this.input.position(130,160)
   this.reset.position(10,100)
   
    this.button.position(250,200)

    this.button.mousePressed(()=>{
      this.button.hide()
      this.input.hide()
PlayerCount+=1
player.index=PlayerCount
player.name=this.input.value()
this.greetings.html("hello"+player.name)
this.greetings.position(130,230)
player.setCount(PlayerCount)
player.setName()
    })
    this.reset.mousePressed(()=>{
       game.setstate(0)
       player.setCount(0)
       database.ref("players").remove()
    })














 }}
