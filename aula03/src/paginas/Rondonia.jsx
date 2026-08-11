import { Link } from "react-router-dom";

export default function Rondonia() {
    return (
        <div>
            <h1>Estado de Rondônia</h1>

            <div className="conteudo">

                <img src="/RO.png" />

                <p>
                    Rondônia é um estado da região Norte do Brasil,
                    e sua capital é Porto Velho. O estado possui
                    diversas áreas de floresta e importantes rios.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}