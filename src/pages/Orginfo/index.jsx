import { useState } from "react";
import { useDispatch } from "react-redux";
import { OrgAction } from "../../redux/actions/OrgAction";
import { useNavigate } from "react-router-dom";
const Orginfo = () => {
    const [formData, setFormData] = useState({
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        firstName: "",
        lastName: "",
        businessName: "",
        phoneNumber: "",
        topGoal: "Option 1",
        contactMailCount: "1-10",
    });
    const userid = localStorage.getItem("USER");
    // const data = useSelector((state) => state.Loginstore.LoginModel);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "formData");
        dispatch(
            OrgAction({
                businessName: formData?.businessName,
                firstName: formData?.firstName,
                lastName: formData?.lastName,
                addressLine1: formData?.address,
                addressLine2: formData?.address,
                city: formData?.city,
                stateRegion: formData?.city,
                zipcode: formData?.zipcode,
                country: formData?.country,
                theme: "Red, Yellow, Blue",
                apiKey: "",
                content: {
                    name: "Shanmathi",
                    age: 24,
                    email: "shanmathiemail@gmail.com",
                    isEmployed: true,
                    address: {
                        street: "123 Main Street",
                        city: "New York",
                        zipcode: "10001",
                    },
                    hobbies: ["Excercising"],
                    skills: {
                        programming: ["Java", "Python", "JavaScript", "C#"],
                        database: ["MySQL", "PostgreSQL"],
                        design: "Photoshop",
                    },
                },
                userDetails: {
                    id: userid,
                },
                imageUrl:
                    "https://imgs.search.brave.com/ITHgR82OK2_k4XNXzLOTmxuW--0KW1LsMiO4ggqXsZI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85MC82/Ni81bDdrQTQuanBn",
                lifeTimeMembership: true,
            })
        );
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-center text-primary mb-4">Organization Information</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Business Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Address"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                placeholder="City"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                placeholder="State"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="zipcode"
                                                value={formData.zipcode}
                                                onChange={handleChange}
                                                placeholder="Zip Code"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                placeholder="Country"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="topGoal">Top Goal:</label>
                                    <select name="topGoal" value={formData.topGoal} onChange={handleChange} className="form-control">
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactMailCount">How many contact mails do you have:</label>
                                    <select name="contactMailCount" value={formData.contactMailCount} onChange={handleChange} className="form-control">
                                        <option value="1-10">1-10</option>
                                        <option value="11-50">11-50</option>
                                        <option value="51+">51+</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                    onClick={() => {
                                        nav("/");
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orginfo;
