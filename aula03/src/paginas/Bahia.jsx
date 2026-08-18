import { Link } from "react-router-dom";

export default function Bahia() {
    return (
        <div>
            <h1>Estado da Bahia</h1>

            <div className="conteudo">
                <img src="/BA.png" />

                <p>
                    A Bahia é um estado da região Nordeste do Brasil,
                    e sua capital é Salvador. É conhecida por sua
                    cultura, culinária, música e belas praias.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}