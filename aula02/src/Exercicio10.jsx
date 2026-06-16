export default function Exercicio10({ salario }) {

    let gratificacao = Number(salario) * 0.08;
    let salarioFinal = Number(salario) + gratificacao;

    return (
        <div>
            Salário Base: R$ {Number(salario).toFixed(2)} <br />
            Gratificação: R$ {gratificacao.toFixed(2)} <br />
            Salário Final: R$ {salarioFinal.toFixed(2)}
        </div>
    )
}