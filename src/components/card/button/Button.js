import styled from 'styled-components';

const Boton = styled.button`
  padding: 4px;
  background-color: red;
  color: white;
`;

function Button(props) {
  return (
    <section>
      <div>
        <Boton>{props.action}</Boton>
      </div>
    </section>
  )
}

export default Button;