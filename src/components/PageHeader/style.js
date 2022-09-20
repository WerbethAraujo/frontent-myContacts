import styled from 'styled-components'

export const Container = styled.header`
  a{
    display: flex;
    align-items: center;
    text-decoration: none;

    img{
      transform: rotate(-90deg);
      margin-right: 8px;
    }

    span{
      font-weight: bold;
      color: ${({ theme })=> theme.colors.primary[500]};
    }
  }

  h1{
    font-size: 24px;
  }


`;
