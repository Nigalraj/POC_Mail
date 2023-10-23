import { Card, Col, Row } from "react-bootstrap";
import { dashboardLabels } from "../../constants";
import { image } from "../../assets";
import "../../common.css";
import { useNavigate } from "react-router-dom";
export const Dashboard=() =>{
    const nav=useNavigate()
    return (
        <>
            <div>
                <Row className="p-3 ">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h5 className="m-0">{dashboardLabels?.TEMPLATE}</h5>
                    </Col>
                </Row>
                <hr className="m-0" />
                <Row className="p-3  ">
                    {image.map((value, index) => (
                        <Col key={index} xs={4} md={4} sm={4} lg={4}>
                            <Card className="glass-container p-0 cursor-pointer" onClick={()=>{nav("/Edit")}}>
                                <Card.Img src={value} style={{ height: "250px", objectFit: "cover" }} />
                                <Card.Text className="mt-0">Some quick example text to build on the card title and make up the bulk of the content.</Card.Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}


