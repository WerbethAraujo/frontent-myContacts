import styled, { css } from 'styled-components'

const containerVariant = {

  default: css`
  background: ${({ theme }) => theme.colors.primary[500]};
  `,

  danger: css`
  background: ${({ theme }) => theme.colors.danger[500]};
  `,

  success: css`
  background: ${({ theme }) => theme.colors.success[500]};
  `,
}


export const Container = styled.div`
  padding: 16px 32px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors[100]};
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariant[type] || containerVariant.default}

  & + & {
    margin-top: 16px;
  }

  img{
    margin-right: 8px;
  }

`;
