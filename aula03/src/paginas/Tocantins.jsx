import { Link } from "react-router-dom";

export default function Tocantins() {
    return (
        <div>
            <h1>Estado do Tocantins</h1>

            <div className="conteudo">

                <img src="/TO.png" />

                <p>
                    Tocantins é um estado da região Norte do Brasil,
                    e sua capital é Palmas. É conhecido por suas
                    belezas naturais, rios e pelo Jalapão.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}