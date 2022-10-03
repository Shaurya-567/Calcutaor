

function click12(val){

  document.getElementById("screen").value +=val ;
  //console.log(val);
}
function answer()
{
  let d1=document.getElementById("screen").value;
  let d2=eval(d1);
  document.getElementById("screen").value=d2;
}

function clear12()
{
  console.log(document.getElementById("screen").value);
  document.getElementById("screen").value="";
}

