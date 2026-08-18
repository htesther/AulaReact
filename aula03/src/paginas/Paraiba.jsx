import { Link } from "react-router-dom";

export default function Paraiba() {
    return (
        <div>
            <h1>Estado da Paraíba</h1>

            <div className="conteudo">
                <img src="/PB.png" />

                <p>
                    A Paraíba é um estado da região Nordeste do Brasil,
                    e sua capital é João Pessoa. É conhecida pelas praias,
                    pela cultura e pelas belezas naturais.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}