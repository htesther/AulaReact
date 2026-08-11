import { Link } from "react-router-dom";

export default function Para() {
    return (
        <div>
            <h1>Estado do Pará</h1>

            <div className="conteudo">

                <img src="/PA.png" />

                <p>
                    O Pará é um estado da região Norte do Brasil,
                    e sua capital é Belém. É conhecido pela Floresta
                    Amazônica, pelos rios e pela sua cultura.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}