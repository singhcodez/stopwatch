
const min=document.getElementById("min")
const sec=document.getElementById("sec")
const minSec=document.getElementById("minSec")

const start=document.getElementById("start")
const reset=document.getElementById("reset")
const lap = document.getElementById("lap")
const pause=document.getElementById("pause")
// start timer
let minSecCount=0;
  let secCount=0;
  let minCount=0;
  

const startTimer=()=>{
 
 //enable reset pause & laps
 start.style.display="none";
 pause.style.display="inline-block"
 reset.disabled=false;
 lap.disabled=false;
 reset.style.opacity=1;
 lap.style.opacity=1;
   const myInterval= setInterval(()=>{
       
   // mini seconds
         minSecCount+=1;
         minSec.value=minSecCount<10?"0"+minSecCount:minSecCount;
    
  // seconds   
      if(minSecCount==100){
          minSecCount=0;
          secCount+=1;
          sec.value=(secCount<10)?"0"+secCount:secCount;
        
    //minutes
          if(secCount==60){
                secCount=0;
                minCount+=1;
                min.value=minCount<10?"0"+minCount:minCount
            }
       }
   } ,10)
    
   
// pause  
  const pauseTimer=()=>{
   start.style.display="inline-block";
      pause.style.display="none"
   clearInterval(myInterval);
     }
  pause.addEventListener("click",pauseTimer)
   
//reset
  const resetTimer=()=> 
  {
      clearInterval(myInterval)
      minCount=secCount=minSecCount=0;
      minSec.value=sec.value=min.value="00";
      start.style.display="inline-block";
      pause.style.display="none"
      reset.disabled=true;
      lap.disabled=true;
      reset.style.opacity=0.5;
      lap.style.opacity=0.5
      count=0;
      document.getElementById("list").innerHTML=""
  }
  reset.addEventListener("click",resetTimer)
     
}

start.addEventListener("click",startTimer)

 //laps
 
 const addLaps=()=>{
 
  const item=`${min.value}m - ${sec.value}s - ${minSec.value} `
 
  const newNode = document.createElement("li");
const textNode = document.createTextNode(item);
newNode.appendChild(textNode);

const list = document.getElementById("list");
list.insertBefore(newNode, list.children[0]);
  
  
 }
lap.addEventListener("click",addLaps) 
    
