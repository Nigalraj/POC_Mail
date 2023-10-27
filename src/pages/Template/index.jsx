import { Col, Row } from "react-bootstrap";

export const Template = () => {
    return (
        <>
            <div>
                <Row>
                    <Col xs={4} md={4} lg={4}>
                        side bar
                    </Col>
                    <Col xs={8} md={8} lg={8}>
                        Home bar
                    </Col>
                </Row>
            </div>
        </>
    );
};
