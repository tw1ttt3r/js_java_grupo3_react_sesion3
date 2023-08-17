import './App.css';
import Card from './components/card/Card';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Data = {
  imagen: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
  nombre: "Ramon",
  descripcion: "El es una persona sencilla y humilde",
  action: "Llamar"
}

function App() {

  return (
    <div className="App">
      <Title>
        Desde un title ya que es un h1
      </Title>
      <Card data={Data} />
    </div>
  );
}

export default App;
