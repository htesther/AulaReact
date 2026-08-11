import { Link } from "react-router-dom";

export default function MatoGrosso() {
    return (
        <div>
            <h1>Estado de Mato Grosso</h1>

            <div className="conteudo">

                <img src="/MT.png" />

                <p>
                    Mato Grosso é um estado da região Centro-Oeste do Brasil,
                    e sua capital é Cuiabá. É conhecido pelo agronegócio,
                    pelo Cerrado e pelo Pantanal.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}