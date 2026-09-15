import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio5()
{
    const [lado, setLado] = useState();
    const [resultado, setResultado] = useState();

    function calcular()
    {
        let area;

        area = Number(lado) * Number(lado);

        setResultado(
            <div>
                Área do quadrado = {area}
            </div>
        );
    }

    return (
        <div>
            <h1>Exercício 5</h1>

            <div className="conteudo">
                <form>

                    <p>
                        Digite o valor do lado do quadrado <br />
                        <input
                            type="text"
                            value={lado}
                            onChange={(e) => setLado(e.target.value)}
                        />
                    </p>

                    <p>
                        <input
                            type="button"
                            value="Calcular"
                            onClick={calcular}
                        />
                    </p>

                    <p>
                        {resultado}
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>
    );
}