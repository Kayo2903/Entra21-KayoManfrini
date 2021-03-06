import "./App.css";
import { ListaAlunos } from "./components/ListaAlunos";
import { ComProps } from "./components/ComProps";
import { PrimeiroComponente } from "./components/PrimeiroComponente";
import { Familia } from "./components/Familia";
import { MembroFamilia } from "./components/MembroFamilia";
import { Card } from "./components/Card";
import { ParOuImpar } from "./components/ParOuImpar";
import { Notificacao } from "./components/Notificacao";
import { ManipulandoEventos } from "./components/ManipulandoEventos";
import { Relogio } from "./components/Relogio"
import { ValorAleatorio } from "./components/ValorAleatorio";
import { ComponenteControlado } from "./components/ComponentesControlados";
import { Calculadora } from "./components/LiftingState/Calculadora";
import { Contador } from "./components/Contador";

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <div className="cards">
        <Card titulo="Primeiro componente" cor="#F24464">          
          <PrimeiroComponente />
        </Card>
        <Card titulo="Componente com props">
          <ComProps mensagem="Estou sendo enviado pelas props" />
          <ComProps mensagem="Outra mensagem..." />
        </Card>
        <Card titulo="Lista de alunos" cor="#424255">
          <ListaAlunos />
        </Card>
        <Card titulo="Children" cor="#37A6A6">
          <Familia sobrenome="da Silva">
            <MembroFamilia nome="Ana" />
            <MembroFamilia nome="Marcos" />
            <MembroFamilia nome="José" />
          </Familia>
        </Card>
        <Card titulo= "Renderização condicional">
          <ParOuImpar numero={10} />
          <ParOuImpar numero={5} />
          <hr/>
          <Notificacao mensagem={["Oi"]}/>
        </Card>
        <Card cor="#A12568" titulo="Manipulando Eventos">
					<ManipulandoEventos />
				</Card>
        <Card titulo="Estado" cor="#f9cb40">
					<Relogio />
					<hr />
					<ValorAleatorio />
				</Card>	
        <Card titulo="Componentes controlados" cor="#3B185F">
					<ComponenteControlado />
				</Card>
				<Card titulo="Elevando o State">
					<Calculadora />
				</Card>
				<Card titulo="State pode ser assíncrono">
					<Contador inicial={10} />
				</Card>
      </div>
    </div>
  );
}

export default App;
