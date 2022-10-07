import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
   width: 100%;

   input {
    background-color: ${({ theme }) => theme.colors[100]};
    padding: 0 16px;
    width: 100%;
    height: 50px;
    outline: none;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    &::placeholder{
      color: ${({ theme }) => theme.colors.grey[100]}
    }
   }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey[200]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
   text-decoration: none;
   font-size: 16px;
   border: solid 2px ${({ theme }) => theme.colors.primary[500]};
   padding: 8px 16px;
   border-radius: 4px;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.primary[500]};
   transition: all 0.2s ease-in;

  &:hover{
   background-color: ${({ theme }) => theme.colors.primary[500]};
   color:${({ theme }) => theme.colors[100]};
  }

  }`;

export const CardsHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button{
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    }

    span{
      color: ${({ theme }) => theme.colors.primary[500]};
      font-weight: bold;
      margin-right: 8px;
      }

      img{
        transform: ${({ orderBy }) => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.2s ease-in;

      }
  `;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors[100]};
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
        background-color: ${({ theme }) => theme.colors.primary[300]};
        color: ${({ theme }) => theme.colors.primary[500]};
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
        color: ${({ theme }) => theme.colors.grey[100]};
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


export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  p {
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.danger[500]}
  }
  .info{
    margin-left: 24px;
  }
`;

export const EmptyBoxContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    text-align: center;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.grey[100]};

    strong {
      color:  ${({ theme }) => theme.colors.primary[500]};
    }
  }
  `;

export const SearchTermNotFound = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  p {
    color: ${({ theme }) => theme.colors.grey[100]};
    margin-left: 24px;
    word-break: break-word;

  }
`;
