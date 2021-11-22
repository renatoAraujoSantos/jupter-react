import React from "react";
import { Container, Button } from "reactstrap";

export default function PageHeader() {

    const closeTab = () => {
        window.close();
    }

    return (
        <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container>
                <div className="content-center brand">
                    <h1 className="h2-seo">• Direto do Produtor</h1>
                    
                    <h3 className="d-none d-sm-block">
                        Cadastro finazado com sucesso
                    </h3>
                    <Button color="info" onClick={ closeTab }>Finalizar</Button>
                </div>
            </Container>
        </div>
    );
}
