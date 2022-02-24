import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.6rem;

  article {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    user-select: none;

    &:hover {
      transform: scale(1.1);
    }

    img {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export default StyledHeader;
