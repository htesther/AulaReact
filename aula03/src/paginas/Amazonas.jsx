import { Link } from "react-router-dom";

export default function Amazonas() {
    return (
        <div>
            <h1>Estado do Amazonas</h1>

            <div className="conteudo">

                <img src="/AM.png" />

                <p>
                    O Amazonas é o maior estado do Brasil em extensão
                    territorial, e sua capital é Manaus. É conhecido
                    principalmente pela Floresta Amazônica e pelo Rio Amazonas.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}