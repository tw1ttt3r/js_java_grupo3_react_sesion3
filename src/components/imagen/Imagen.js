import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

function Imagen(props) {
  // Se reciben en un formato de objeto
  // conjunto de propiedades y valores
  // background-color - backgroundColor
  // border-color - borderColor
  // const styles = {
  //   backgroundColor: "red",
  //   border: "2px dashed yellow"
  // };

  const stylesImg = {
    borderRadius: "0 0 4px 4px",
    width: "100%"
  };


  return (
    <Container>
      <img style={stylesImg} className={props.className} src={props.src} alt={props.alt} />
    </Container>
  )
}

export default Imagen