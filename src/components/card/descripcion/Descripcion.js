import styled from 'styled-components';

const Parrafo = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: brown;
`;

const ParrafoDescripcion = styled.p`
  font-size: 20px;
  font-weight: ligth;
  color: gray;
`;


function Descripcion(props) {
  return (
    <section>
      <div>
        <Parrafo>{props.titulo}</Parrafo>
      </div>
      <div>
        <ParrafoDescripcion>{props.descripcion}</ParrafoDescripcion>
      </div>
    </section>
  )
}

export default Descripcion;