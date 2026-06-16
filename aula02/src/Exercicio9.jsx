export default function Exercicio9({ vendas, salario }) {

    let comissao = Number(vendas) * 0.06;
    let salarioFinal = Number(salario) + comissao;

    return (
        <div>
            Valor das vendas: R$ {Number(vendas).toFixed(2)} <br />
            Salário: R$ {Number(salario).toFixed(2)} <br />
            Comissão: R$ {comissao.toFixed(2)} <br />
            Salário Final: R$ {salarioFinal.toFixed(2)}
        </div>
    )
}