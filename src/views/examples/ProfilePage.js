import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
} from "reactstrap";

//import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

let ps = null;

export default function ProfilePage() {
    
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("profile-page");
        };
    }, []);
    return (
        <>
            {/* <ExamplesNavbar /> */}
            <div className="wrapper">
                <div className="page-header">
                    <img
                        alt="..."
                        className="dots"
                        src={require("assets/img/dots.png").default}
                    />
                    <img
                        alt="..."
                        className="path"
                        src={require("assets/img/path4.png").default}
                    />
                    <Container className="align-items-center">
                        <Row>
                            <Col lg="6" md="6">
                                <h1 className="profile-title text-left">Titulo</h1>
                                <h5 className="text-on-back">01</h5>
                                <p className="profile-description">
                                    descricao
                                </p>
                            </Col>

                            <Col className="ml-auto mr-auto" lg="4" md="6">
                                <Card className="card-coin card-plain">
                                    <CardHeader>
                                        <img
                                            alt="..."
                                            className="img-center img-fluid rounded-circle"
                                            src={require("assets/img/mike.jpg").default}
                                        />
                                        <h4 className="title">Transactions</h4>
                                    </CardHeader>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
