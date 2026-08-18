import { Link } from "react-router-dom";

export default function Pernambuco() {
    return (
        <div>
            <h1>Estado de Pernambuco</h1>

            <div className="conteudo">
                <img src="/PE.png" />

                <p>
                    Pernambuco é um estado da região Nordeste do Brasil,
                    e sua capital é Recife. É conhecido por suas praias,
                    pelo frevo e pelo carnaval.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}