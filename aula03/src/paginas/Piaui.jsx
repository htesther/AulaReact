import { Link } from "react-router-dom";

export default function Piaui() {
    return (
        <div>
            <h1>Estado do Piauí</h1>

            <div className="conteudo">
                <img src="/PI.png" />

                <p>
                    O Piauí é um estado da região Nordeste do Brasil,
                    e sua capital é Teresina. É conhecido por suas
                    paisagens naturais e sítios arqueológicos.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}