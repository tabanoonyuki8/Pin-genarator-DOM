//genarator
function genaratePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}
//check string lenth
function getPin(){
const pin=genaratePin();
const pinString=pin+'';
if(pinString.length===4){
    return pin;
}
else{

    return getPin();
}
}
//pin genarator button
document.getElementById("genarator-id").addEventListener("click",function(){
    const pin=getPin();
 const genarateInput=  document.getElementById('genarate-input');
 genarateInput.value=pin;
 
})
//calcultaor section
document.getElementById('calculator').addEventListener("click",function(event){
const clicked =event.target.innerText;//bubble event
const typeNumber=document.getElementById("cal-input");
const previousNumber= typeNumber.value;
if(isNaN(clicked)){
  if(clicked==='C'){   //clear
    typeNumber.value='';
  }
  else if(clicked==="<"){
      const digits=previousNumber.split('');
      digits.pop();
      const remainDigit=digits.join('');   //string pop()
      typeNumber.value =remainDigit;
  }
}
//string concatanation
  else{
   
    
    const newNumber=previousNumber+clicked;

    typeNumber.value=newNumber;
  }  
})
//submit
document.getElementById("submit-btn").addEventListener("click",function(){
   const displayPin=document.getElementById("genarate-input");
   const currentPinGen=displayPin.value;

   const typeNumers=document.getElementById("cal-input");
   const currentPinCal=typeNumers.value;
   //show massage
   const rightPin=document.getElementById("succes-id");
   const wrongPin=document.getElementById("wrong-id");
//pin matching
   if(currentPinGen===currentPinCal){
    
    rightPin.style.display="block";
    wrongPin.style.display="none";
   }
   else{
  
    wrongPin.style.display="block";
    rightPin.style.display="none";
   }
})