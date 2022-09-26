import styled from 'styled-components'

export default styled.select`
  height: 52px;
  border: 2px solid ${({ theme }) => theme.colors[100]};
  background-color: ${({ theme }) => theme.colors[100]};
  width: 100%;
  padding: 0px 16px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

`;
