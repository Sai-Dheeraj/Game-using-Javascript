var scores,roundscores,winningscore;

init();


 document.querySelector('.roll').addEventListener('click',function(){
     var diceone=Math.floor(Math.random()*6)+1;


    var dom=document.querySelector('.diceone')
    dom.style.display='block'
    dom.src= 'dice-'+ diceone +'.png' ;

    if(diceone !==1){
        roundscore+=diceone; 
        document.querySelector('.currentscore'+active).textContent=roundscore;
    }
    else{
        cover();
        
        
        


    }


 }
 ); 



    document.querySelector('.hold1').addEventListener('click',function(){
     score[active]+=roundscore;
     document.querySelector('.playerscore' + active).textContent=score[active];
     var input=document.querySelector('.finalscore').value;
     console.log(input);
     if(input){
         winningscore=input;
     }
     else{
         winningscore=100;
     }

     if(score[0]>=winningscore){
         document.querySelector('.player1').textContent='WINNER';
         document.querySelector('.diceone').style.display='none';
         document.querySelector(".roll").disabled = true;
         document.querySelector(".hold1").disabled = true;

     }
     else if (score[1]>=winningscore){
        document.querySelector('.player2').textContent='WINNER';
        document.querySelector('.diceone').style.display='none';
        document.querySelector(".roll").disabled = true;
        document.querySelector(".hold1").disabled = true;

       
     }
     cover();
     





 });

 function cover(){
    active ===0 ? active=1 : active=0;
    roundscore=0;
    document.querySelector('.currentscore0').textContent='0';
    document.querySelector('.currentscore1').textContent='0';
    document.querySelector('.firstplayer').classList.toggle('bot');
    document.querySelector('.secondplayer').classList.toggle('bot');

}
document.querySelector('.newgame').addEventListener('click',init);

function init(){
    score=[0,0];
    active=0;
    roundscore=0;
    document.querySelector('.playerscore0').textContent='0';
document.querySelector('.currentscore0').textContent='0';
document.querySelector('.playerscore1').textContent='0';
document.querySelector('.currentscore1').textContent='0';
document.querySelector('.diceone').style.display='block'




}

