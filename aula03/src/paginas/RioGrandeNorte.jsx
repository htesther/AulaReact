import { Link } from "react-router-dom";

export default function RioGrandeDoNorte() {
    return (
        <div>
            <h1>Estado do Rio Grande do Norte</h1>

            <div className="conteudo">
                <img src="/RN.png" />

                <p>
                    O Rio Grande do Norte é um estado da região Nordeste
                    do Brasil, e sua capital é Natal. É conhecido pelas
                    praias, dunas e belas paisagens.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}