import styled, { css } from 'styled-components'

export default styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 52px;
  border: none;
  padding: 0px 16px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  color: ${({ theme }) => theme.colors[100]};
  transition: backgorun-color 0.2s ease-in;

  &:hover{
    background-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &:active{
    background-color: ${({ theme }) => theme.colors.primary[700]};
  }

  &[disabled]{
    background-color: ${({ theme }) => theme.colors.grey[500]};
    cursor: default;
  }

  ${({ danger, theme }) => danger && css`
     background-color: ${theme.colors.danger[500]};

  &:hover{
    background-color: ${theme.colors.danger[100]};
  }


  &:active{
    background-color: ${theme.colors.danger[900]};
  }

 `}
`;
