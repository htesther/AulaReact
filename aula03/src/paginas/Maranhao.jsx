import { Link } from "react-router-dom";

export default function Maranhao() {
    return (
        <div>
            <h1>Estado do Maranhão</h1>

            <div className="conteudo">
                <img src="/MA.png" />

                <p>
                    O Maranhão é um estado da região Nordeste do Brasil,
                    e sua capital é São Luís. É conhecido por suas praias,
                    pela cultura e pelos Lençóis Maranhenses.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}