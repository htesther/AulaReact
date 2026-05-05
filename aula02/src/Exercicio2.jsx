export default function Exercicio2( {peso, altura} )
{
    let imc = Number(peso) / (Number(altura) * Number(altura));

    return (
        <div>
            O IMC para peso {peso} kg e altura {altura} m é {imc}.
        </div>
    )
}