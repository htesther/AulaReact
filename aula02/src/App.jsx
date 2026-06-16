import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import Exercicio6 from "./Exercicio6";
import Exercicio7 from "./Exercicio7";
import Exercicio9 from "./Exercicio9";
import Exercicio10 from "./Exercicio10";
export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>
      <div className="card">
        <h3>Exemplo1</h3>
        <Exemplo1 numero1={10} numero2={20} />
      </div>

      <div className="card">
           <h3>Exercício 1</h3>
           <hr />
           <Exercicio1 numero={12} />
           <hr />
           <Exercicio1 numero={67} />
           <hr />
           <Exercicio1 numero={-5} />
           <hr />
      </div>

      <div className="card">
           <h3>Exercício 2</h3>
           <hr />
           <Exercicio2 peso={80} altura={1.80} />
         
      </div>

      <div className="card">
        <h3>Exercício 3</h3>
        <hr />
        <Exercicio3 nota1="7.5" nota2="9.5" />
      </div>

      <div className="card">
      <h3>Exercício 4</h3>
      <hr />
      <Exercicio4 tipo="retangulo" base="10" altura="5" />
      <hr />
      <Exercicio4 tipo="triangulo" base="10" altura="5" />
      <hr />
      <Exercicio4 tipo="quadrado" base="10" altura="10" />
      <hr />
      </div>
      
      <div className="card">
      <h3>Exercício 5</h3>
      <hr />
      <Exercicio5 quantidade="10" />
      </div>   

      <div className="card">
      <h3>Exercício 6</h3>
      <hr />
      <Exercicio6 capital="1000" taxa="5" tempo="2" />
      <hr />
      <Exercicio6 capital="1000" taxa="5" tempo="3" />  
      <hr /> 
      </div> 

      <div className="card">
      <h3>Exercício 7</h3>
      <hr />

      <Exercicio7 celsius="30" />

      <Exercicio7 celsius="100" />
      </div>

      <div className="card">
      <h3>Exercício 9</h3>
      <hr /> 
      
      <Exercicio9 vendas="5000" salario="2000" />
      </div>

      <div className="card">
      <h3>Exercício 10</h3>
      <hr />
      
      <Exercicio10 salario="2500" />
      </div>
    </div>
  )
}