import { Link } from "react-router-dom";

export default function Alagoas() {
    return (
        <div>
            <h1>Estado de Alagoas</h1>

            <div className="conteudo">
                <img src="/AL.png" />

                <p>
                    Alagoas é um estado da região Nordeste do Brasil,
                    e sua capital é Maceió. É conhecido por suas
                    belas praias e piscinas naturais.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}