import './App.css';
import Card from './components/card/Card';
import Container from './components/contenedor/Container';
import styled from 'styled-components';
import { NewSection } from './components/contenedor/Section';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Contactos = [
  {
    imagen: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
    nombre: "Ramon",
    descripcion: "El es una persona sencilla y humilde",
    action: "Llamar"
  },
  {
    imagen: "https://cdn0.psicologia-online.com/es/posts/2/4/2/que_piensa_una_persona_cuando_dejas_de_buscarla_5242_orig.jpg",
    nombre: "Antonio",
    descripcion: "El es una persona sencilla y humilde",
    action: "Llamar"
  },
  {
    imagen: "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1",
    nombre: "Miguel",
    descripcion: "El es una persona sencilla y humilde",
    action: "Llamar"
  },
]

function App() {

  return (
    <div className="App">
      <Container>
        <Title>
          Agenda de contactos
        </Title>
        <NewSection>
          <Card data={Contactos[0]} />
          <Card data={Contactos[1]} />
          <Card data={Contactos[2]} />
        </NewSection>
      </Container>
    </div>
  );
}

export default App;
