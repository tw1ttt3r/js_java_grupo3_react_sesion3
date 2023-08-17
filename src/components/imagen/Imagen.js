function Imagen(props) {
  // Se reciben en un formato de objeto
  // conjunto de propiedades y valores
  // background-color - backgroundColor
  // border-color - borderColor
  const styles = {
    backgroundColor: "red",
    border: "2px dashed yellow"
  };

  const stylesImg = {
    width: "45%",
    borderRadius: "25px"
  };

  return (
    <div style={styles}>
      <img style={stylesImg} className={props.className} src={props.src} alt={props.alt} />
    </div>
  )
}

export default Imagen