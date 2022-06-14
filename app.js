//selectors
const result = document.getElementById("result");

//events listner

//functions
function liveScreen(enteredValue){
    result.value += enteredValue;
}

function calculate(value){
    try {
        const calculatedValue = eval(value || null );
        result.value= calculatedValue;
        //
        
    } catch (error) {
        result.value = "Bad operation";
        setTimeout(()=>{
            result.value = "";
        }, 1300);
    }
   

}