import styled from 'styled-components'

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.danger[500]};
    margin-top: 8px;
    font-size: 14px;
  }
`;
