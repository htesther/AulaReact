import { Link } from "react-router-dom";

export default function RioGrandeDoSul() {
    return (
        <div>
            <h1>Estado do Rio Grande do Sul</h1>

            <div className="conteudo">

                <img src="/RS.png" />

                <p>
                    Rio Grande do Sul é um estado da região Sul do Brasil,
                    e sua capital é Porto Alegre. É conhecido pelas suas
                    tradições gaúchas, pela produção agrícola e pelas
                    belas paisagens da Serra Gaúcha.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}