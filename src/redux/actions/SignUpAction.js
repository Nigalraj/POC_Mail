import axios from "axios";
import { Signup } from "../constants";

import { BASEURL } from "../../constants";

export const SignupAction = (value) => async (dispatch) => {
    dispatch({
        type: Signup.LOADING,
        payload: { loading: true },
    });
    try {
        // eslint-disable-next-line no-undef
        const { data } = await axios.post(`${BASEURL}api/saveUser`, value);
        console.log(data, "datadata");
        localStorage.setItem("USER", data?.data?.id);
        await dispatch({
            type: Signup.SUCCESS,
            payload: { loading: false, data: data },
        });
    } catch (err) {
        await dispatch({
            type: Signup.ERROR,
            payload: { loading: false, data: {} },
        });
    }
};
