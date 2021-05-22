class Form{
  constructor(){

  }


  display(){
      var title=createElement('h2');
      title.html("CAR RACING GAME")
      title.position(130,0)



     var input=createInput("Name")
     var button=createButton("Start")
     var greeting=createElement()

     input.position(280,160);
     button.position(250,200);

     button.mousePressed(function(){
       input.hide()
       button.hide()

      var name=input.value();

      playerCount+=1
      player.update(name);
      player.updateCount(playerCount);

      greeting.html("Welcome. Let's start!!" +name);
      greeting.position(130.160)
     }
     )
  }


}