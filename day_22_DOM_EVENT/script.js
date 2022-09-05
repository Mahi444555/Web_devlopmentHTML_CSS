let smsApp= ()=>{

    let textEnteredLength=document.querySelector("#text-area").value.length;
    console.log(textEnteredLength)

let rem = document.querySelector("#chars");
let total =100;
let ans = total - textEnteredLength;
console.log(ans);
rem.innerHTML="-" + ans;
}



//or this logic use
// function smsApp(){
    
//     let textEnteredLength=document.querySelector("#text-area").value.length;
//     console.log(textEnteredLength)

// let rem = document.querySelector("#chars");
// let total =100;
// let ans = total - textEnteredLength;
// console.log(ans);
// rem.innerHTML="-" + ans;
// }


//logic for password convert into text
let changePassword=()=>{
    let passwordBox=document.querySelector("#pass-box");
    // console.log(passwordBox);
    let typeofinput=passwordBox.getAttribute('type')
    console.log(typeofinput);//password
    //check the condition 
    if(typeofinput==="password"){
      passwordBox.setAttribute('type','text');
    }else{
      passwordBox.setAttribute('type','password');
  
    }
  
  }