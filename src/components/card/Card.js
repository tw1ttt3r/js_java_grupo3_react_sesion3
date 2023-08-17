import Imagen from "../imagen/Imagen";
import Button from "./button/Button";
import Descripcion from "./descripcion/Descripcion";
import styles from './Card.module.css';

function Card() {


  return (
    <section className={styles.container}>
      <div className={styles.containerImg}>
        <Imagen src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg" alt="persona" />
      </div>
      <Descripcion />
      <Button />
    </section>
  )
}

export default Card;