import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 730px;
  width: 100%;

  @media (max-width: 1200px) {
    width: 570px;
  }
`;

export default Wrapper;
