import { useState } from "react";
import { Link } from "react-router-dom";

export default function Exercicio6()
{
    const [quantidade, setQuantidade] = useState();
    const [preco, setPreco] = useState();
    const [resultado, setResultado] = useState();

    function calcular()
    {
        let subtotal, desconto, valorFinal;

        subtotal = Number(quantidade) * Number(preco);
        desconto = subtotal * 10 / 100;
        valorFinal = subtotal - desconto;

        setResultado(
            <div>
                Subtotal = {subtotal}<br />
                Desconto de 10% = {desconto}<br />
                Valor final a pagar = {valorFinal}
            </div>
        );
    }

    return (
        <div>
            <h1>Exercício 6</h1>

            <div className="conteudo">
                <form>

                    <p>
                        Digite a quantidade do produto <br />
                        <input
                            type="text"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite o preço do produto <br />
                        <input
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
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