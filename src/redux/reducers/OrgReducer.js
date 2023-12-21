import { Orginfo } from "../constants";

let initialvalue = {
    OrgModel: [],
};

export const OrgReducer = (value = initialvalue, action) => {
    switch (action?.type) {
        case Orginfo.REQUEST:
            return { LoginModel: action?.payload };
        case Orginfo.SUCCESS:
            return { LoginModel: action?.payload };
        case Orginfo.ERROR:
            return { LoginModel: action?.payload };

        default:
            return value;
    }
};
