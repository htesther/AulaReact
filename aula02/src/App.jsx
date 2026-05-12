import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicio1";
import Exercicio2 from "./Exercicio2";
import Exercicio3 from "./Exercicio3";
import Exercicio4 from "./Exercicio4";
import Exercicio5 from "./Exercicio5";
import Exercicio6 from "./Exercicio6";
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
           <hr />
           <Exercicio2 peso={60} altura={1.60} />
           <hr />
      </div>

      <div className="card">
        <h3>Exercício 3</h3>
        <hr />
        <Exercicio3 nota1="7.5" nota2="9.5" />
        <hr />
        <Exercicio3 nota1="3" nota2="6.5" />
        <hr />
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
      <hr />
      <Exercicio5 quantidade="20" /> 
      <hr />
      </div>   

      <div className="card">
      <h3>Exercício 6</h3>
      <hr />
      <Exercicio6 capital="1000" taxa="5" tempo="2" />
      <hr />
      <Exercicio6 capital="1000" taxa="5" tempo="3" />  
      <hr /> 
      </div> 
    </div>
  )
}