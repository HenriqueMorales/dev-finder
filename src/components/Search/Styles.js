import styled from "styled-components";

const StyledSearch = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.containerColor};
  height: 60px;
  border-radius: 8px;
  padding: 0 8px 0 16px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;

    img {
      width: 20px;
      height: 20px;
    }

    input {
      height: 24px;
      width: 80%;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.textColor};
    }
  }

  button {
    background: hsl(212, 100%, 50%);
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 1.4rem;
    cursor: pointer;
    color: #fff;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 4px hsl(222, 40%, 13%);
      transform: translateY(-1px);
    }
  }
`;

export default StyledSearch;
