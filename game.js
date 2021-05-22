class Game{
 constructor(){

 }


 //to read the gamestate
 getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    }) 
}


 //to update or write the gamestate
 update(state){
    database.ref('/').update({
        //replace it with my game state present in firebase
        gameState: state
    });
 }


 //we can start game
start(){
if(gameState==0){
    player=new Player();
    player.getCount();
    form=new Form();
    form.display();
}
}

}