import { Link } from "react-router-dom";

export default function MatoGrossoDoSul() {
    return (
        <div>
            <h1>Estado de Mato Grosso do Sul</h1>

            <div className="conteudo">

                <img src="/MS.png" />

                <p>
                    Mato Grosso do Sul é um estado da região Centro-Oeste
                    do Brasil, e sua capital é Campo Grande. O estado é
                    conhecido pelo Pantanal, pelas belezas naturais e
                    pela produção agropecuária.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}