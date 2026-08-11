import { Link } from "react-router-dom";

export default function DistritoFederal() {
    return (
        <div>
            <h1>Distrito Federal</h1>

            <div className="conteudo">

                <img src="/DF.png" />

                <p>
                    O Distrito Federal está localizado na região
                    Centro-Oeste do Brasil e abriga Brasília, a capital
                    do país. É onde estão localizados importantes órgãos
                    do governo brasileiro.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}