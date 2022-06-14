// Your code here
const dodger=document.getElementById("dodger");
dodger.style.backgroundColor="#ff69b4";
dodger.style.left="0px";
document.addEventListener("keydown",function(event)
{
    if(event.key==="ArrowLeft")
    {

        moveDodgerLeft();
    }
    else if(event.key==="ArrowRight")
    {
        moveDodgerRight();
    }
});
function moveDodgerLeft()
{
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);
    console.log(leftNumbers);

    
         dodger.style.left=`${left-1}px`;   
    

}
function moveDodgerRight()
{
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);

 
        dodger.style.left=`${left+1}px`;
    
}
