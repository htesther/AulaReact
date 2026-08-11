import { Link } from "react-router-dom";

export default function Goias() {
    return (
        <div>
            <h1>Estado de Goiás</h1>

            <div className="conteudo">

                <img src="/GO.png" />

                <p>
                    Goiás é um estado da região Centro-Oeste do Brasil,
                    e sua capital é Goiânia. É conhecido pela produção
                    agrícola, pelas belezas naturais e pelas cidades
                    históricas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}