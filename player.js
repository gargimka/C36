class Player{
 constructor(){

 }
 getCount(){
    var playerCountRef  = database.ref('playerCount');
    playerCountRef.on("value",function(data){
    playerCount = data.val();
    }) 
}

updateCount(count){
    database.ref('/').update({
        //replace it with my game state present in firebase
        playerCount:count
    });    
}


 //to update or write the gamestate
 update(name){
        //replace it with my game player name
        var playerIndex="player"+playerCount;       //player3
        database.ref(playerIndex).set(
            {
                //database childnode name : the name you gave in as an argument
            name:name
            }
        )
 }


}