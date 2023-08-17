import Imagen from "../imagen/Imagen";
import Button from "./button/Button";
import Descripcion from "./descripcion/Descripcion";
import styles from './Card.module.css';

function Card(props) { // {data: "", className: ""} props.className

  return (
    <section className={styles.container}>
      <div className={styles.containerImg}>
        <Imagen src={props.data.imagen} alt="persona" />
      </div>
      <Descripcion titulo={props.data.nombre} descripcion={props.data.descripcion} />
      <Button />
    </section>
  )
}

export default Card;