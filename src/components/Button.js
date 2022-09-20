import styled from 'styled-components'

export default styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  height: 52px;
  border: none;
  width: 100%;
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
    background-color: ${({ theme }) => theme.colors[700]};
    cursor: default;
  }
`;
