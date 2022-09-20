import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
   width: 100%;

   input {
    background-color: ${({theme})=> theme.colors[100]};
    padding: 0 16px;
    width: 100%;
    height: 50px;
    outline: none;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    &::placeholder{
      color: ${({theme})=> theme.colors[700]}
    }
   }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
   text-decoration: none;
   font-size: 16px;
   border: solid 2px ${({ theme })=> theme.colors.primary[500]};
   padding: 8px 16px;
   border-radius: 4px;
   font-weight: bold;
   color: ${({ theme })=> theme.colors.primary[500]};
   transition: all 0.2s ease-in;

  &:hover{
   background-color: ${({ theme })=> theme.colors.primary[500]};
   color:${({theme})=> theme.colors[100]};
  }

  }`;

export const CardsContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button{
      display: flex;
      align-items: center;
      background-color: transparent;
        border: none;
      }

      span{
        color: ${({ theme })=> theme.colors.primary[500]};
        font-weight: bold;
        margin-right: 8px;
      }
    }
  `;

export const Card = styled.div`
  background-color: ${({ theme })=> theme.colors[100]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name{
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme })=> theme.colors.primary[300]};
        color: ${({ theme })=> theme.colors.primary[500]};
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;

        }
      }

      span {
        display: block;
        font-size: 14px;
        color: ${({theme})=> theme.colors[700]};
      }
    }

    .actions {
      display: flex;
      text-align: center;

      button {
        background-color: transparent;
        margin-left: 8px;
        border: none;
      }
    }
`;
