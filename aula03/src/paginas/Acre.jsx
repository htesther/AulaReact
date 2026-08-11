import { Link } from "react-router-dom";

export default function Acre() {
    return (
        <div>
            <h1>Estado do Acre</h1>

            <div className="conteudo">

                <img src="/AC.png" />

                <p>
                    O Acre é um estado da região Norte do Brasil,
                    e sua capital é Rio Branco. É conhecido pela
                    Floresta Amazônica e pela grande diversidade natural.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}