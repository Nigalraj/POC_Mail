import axios from "axios";
import { Orginfo } from "../constants";
import { BASEURL } from "../../constants";

export const OrgAction = (payload) => async (dispatch) => {
    dispatch({
        type: Orginfo.LOADING,
        payload: { loading: false },
    });
    try {
        const { data } = await axios.post(`${BASEURL}api/saveOrganization`, payload);
       
        await dispatch({
            type: Orginfo.SUCCESS,
            payload: { loading: false, data: data },
        });
    } catch (error) {
        await dispatch({
            type: Orginfo.ERROR,
            payload: { loading: false, data: {} },
        });
    }
};
