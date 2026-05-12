export default function Exercicio5({ quantidade }) {

    let salarioBruto = Number(quantidade) * 150;
    let inss = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - inss;

    return (
        <div>
            Quantidade de Consultas: {quantidade} <br />
            Salário Bruto: R$ {salarioBruto.toFixed(2)} <br />
            Desconto INSS: R$ {inss.toFixed(2)} <br />
            Salário Líquido: R$ {salarioLiquido.toFixed(2)}
        </div>
    )
}