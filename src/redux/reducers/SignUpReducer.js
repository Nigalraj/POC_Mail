import { Signup } from "../constants";

let initialvalue = {
    SingUpModel: [],
};

export const SignUpReducer = (value = initialvalue, action) => {
    switch (action?.type) {
        case Signup.REQUEST:
            return { SingUpModel: action?.payload };
        case Signup.SUCCESS:
            return { SingUpModel: action?.payload };
        case Signup.ERROR:
            return { SingUpModel: action?.payload };

        default:
            return value;
    }
};
