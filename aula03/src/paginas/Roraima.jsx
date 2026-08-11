import { Link } from "react-router-dom";

export default function Roraima() {
    return (
        <div>
            <h1>Estado de Roraima</h1>

            <div className="conteudo">

                <img src="/RR.png" />

                <p>
                    Roraima é um estado da região Norte do Brasil,
                    e sua capital é Boa Vista. É conhecido por suas
                    paisagens naturais e pelo Monte Roraima.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}