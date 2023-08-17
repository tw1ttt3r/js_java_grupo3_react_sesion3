import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
`;

const NewSection = styled(Section)`
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;

export { Section, NewSection };