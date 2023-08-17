import Imagen from "../imagen/Imagen";
import Button from "./button/Button";
import Descripcion from "./descripcion/Descripcion";
import styles from './Card.module.css';

// {
//   imagen: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
//   nombre: "Ramon",
//   descripcion: "El es una persona sencilla y humilde",
//   action: "Llamar"
// }

function Card(props) { // {data: "", className: ""} props.className

  return (
    <section className={styles.container}>
      <div className={styles.containerImg}>
        <Imagen src={props.data.imagen} alt="persona" />
      </div>
      <Descripcion titulo={props.data.nombre} descripcion={props.data.descripcion} />
      <Button action={props.data.action} />
    </section>
  )
}

export default Card;