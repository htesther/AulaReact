import { Link } from "react-router-dom";

export default function Ceara() {
    return (
        <div>
            <h1>Estado do Ceará</h1>

            <div className="conteudo">
                <img src="/CE.png" />

                <p>
                    O Ceará é um estado da região Nordeste do Brasil,
                    e sua capital é Fortaleza. É conhecido pelas praias,
                    pelo turismo e pela cultura nordestina.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}