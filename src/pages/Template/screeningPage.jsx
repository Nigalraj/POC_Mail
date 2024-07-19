import { Button } from "react-bootstrap";
import { screen } from "../../constants";
import DropdownButton from 'react-bootstrap/DropdownButton';

const ScreeningPage = () => {

    return (
        <div>
            <div className="d-flex justify-content-center bg-white">
                <DropdownButton
                    as="div"
                    key="down"
                    id="dropdown-button-drop-down-centered"
                    drop="down"
                    variant="grey"
                    className="custom-dropdown-button my-0"
                    title={screen?.ICON[0].icon}
                >
                    <div className="card  border-0">
                        <div className="row width my-1">
                        <div className="col-3 ms-3">
                        <Button variant="white border">{screen?.ICON[1].icon}</Button>
                        <span>dhbuhdfn</span>
                        </div>
                        <div className="col-3">
                            <Button className="">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        </div>
                        <div className="d-flex my-1">
                        <div className="col-3 px-3">
                            <Button variant="white border">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3 px-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3 px-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3 px-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        </div>
                        <div className="d-flex my-1">
                        <div className="col-3 px-3">
                            <Button variant="white border">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3 px-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3 px-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        <div className="col-3 px-3">
                            <Button className="btn-white">{screen?.ICON[1].icon}</Button>
                        </div>
                        </div>
                    </div>
                </DropdownButton>
            </div>
        </div>
    );
}

export default ScreeningPage;
