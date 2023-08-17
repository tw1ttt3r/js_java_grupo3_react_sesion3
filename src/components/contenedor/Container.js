import { Section } from './Section';

function Container(props) {
  return(
    <Section>
      { props.children }
    </Section>
  )
}

export default Container;