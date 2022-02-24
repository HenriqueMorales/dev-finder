import styled from "styled-components";

const StyledMain = styled.main`
  background: ${({ theme }) => theme.colors.containerColor};
  width: 100%;
  border-radius: 8px;
  padding: 40px;
  color: white;
  font-size: 1.2rem;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 24px 12px;
  }

  .profile-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1200px) {
      gap: 24px;
    }

    .profile-header {
      display: flex;
      justify-content: space-between;
      gap: 30px;

      @media (max-width: 768px) {
        gap: 12px;
      }

      .profile-pic {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }

      .name-date-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-grow: 1;

        @media (max-width: 1200px) {
          flex-direction: column;
          justify-content: space-around;
          gap: 12px;
          margin: 0 auto;
        }

        h2 {
          color: ${({ theme }) => theme.colors.nameColor};
        }

        .profile-user {
          color: hsl(212, 100%, 50%);
          margin-top: 8px;
        }

        .profile-date {
          color: ${({ theme }) => theme.colors.textColor};
        }
      }
    }

    .bio-stats-footer-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 80%;
      margin-left: auto;

      @media (max-width: 1200px) {
        margin: 0;
        width: 100%;
      }

      .bio {
        color: ${({ theme }) => theme.colors.textColor};
      }

      .profile-stats {
        background: ${({ theme }) => theme.colors.backgroundColor};
        border-radius: 8px;
        padding: 32px;

        @media (max-width: 768px) {
          font-size: 0.8rem;

          ul {
            width: 100%;
          }
        }

        & > ul {
          display: flex;
          justify-content: space-between;

          p {
            color: ${({ theme }) => theme.colors.nameColor};

            &:last-child {
              font-weight: bold;
              font-size: 1.8rem;
              padding-top: 4px;
            }
          }
        }
      }

      .profile-footer {
        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 12px;
        }

        .p-2 {
          padding-left: 4px;
        }

        li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: ${({ theme }) => theme.colors.textColor};

          &:last-child {
            margin-top: 12px;
          }
        }
      }
    }
  }
`;

export default StyledMain;
