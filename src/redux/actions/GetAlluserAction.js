import axios from "axios";
import { getallUsers } from "../constants"

export const GetAlluserAction=(id)=>async(dispatch)=>{
    dispatch({
        type:getallUsers.LOADING,
        payload:{loading:true}
    });
    try{
        const {data}=await axios.get(`https://vinifera.wiremockapi.cloud/getUserDetails?userid=${id}`)
        await dispatch({
            type:getallUsers.SUCCESS,
            payload:{loading:false,data:data}
        })
    }
    catch(err)
    {
        await dispatch({
            type: getallUsers.ERROR,
            payload: { loading: false, data: {} },
        });
    }

}