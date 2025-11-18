//your JS code here. If required.
 let p=document.getElementById("counter");
  let button=document.getElementById("btn");
  p.addEventListener("click",()=>{
	  let incrementValue=parseInt(p.textContent);
	  alert(incrementValue);
	  p.textContent=incrementValue+1;
  });