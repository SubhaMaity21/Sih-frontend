import { useSelector } from "react-redux"

function Result(){
    const result = useSelector((state)=>state.form.result)

    return(
        <div className="mt-40">{console.log(result)
        
        }</div>
    )
}

export default Result
