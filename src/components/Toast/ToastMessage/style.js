import styled from 'styled-components'


export const Container = styled.div`
  padding: 16px 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors[100]};
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-top: 16px;
  }

  img{
    margin-right: 8px;
  }

`;
