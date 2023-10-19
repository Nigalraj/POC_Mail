import { getallUsers } from "../constants";

let initialvalue = {
    GetAllusersModel: [],
};

export const GetAllusersReducer = (value = initialvalue, action) => {
    switch (action?.type) {
        case getallUsers.REQUEST:
            return { GetAllusersModel: action?.payload };
        case getallUsers.SUCCESS:
            return { GetAllusersModel: action?.payload };
        case getallUsers.ERROR:
            return { GetAllusersModel: action?.payload };

        default:
            return value;
    }
};
