import { useRef } from "react"

const UseRefExmple= ()=>{

    const inputValue=useRef(null);
    const focucs=()=>{
     inputValue.current.focus();
 console.log(inputValue.current.value);
 

    }

return(
<div>
<h2>Uing Useref </h2>
<input type="text" ref={inputValue} />
<button onClick={focucs}>click</button>

</div>
    )
}
export default UseRefExmple