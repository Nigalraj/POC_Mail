import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAlluserAction } from "./redux/actions/GetAlluserAction";

function App() {
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(GetAlluserAction("a23e4567-e89b-12d3-a456-426655440009"))
            },[])
            const data=useSelector((state)=>state?.Getusers?.GetAllusersModel)
            console.log(data,"data ")
    return (
        <>
            <h1>hello world </h1>
        </>
    );
}

export default App;
