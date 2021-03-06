import React from "react";
import { Container } from "reactstrap";

export default function PageHeader() {

    // ESTOU USANDO APOS FINALIZAR O CADASTRO NO STRIPE
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
                    <h3 className="d-none d-sm-block">Cadastro Realizado Com Sucesso</h3>
                    <h4 className="d-none d-sm-block">Acesse seu aplicavo, e plublique seus produtos</h4>
                </div>
            </Container>
        </div>
    );
}
