import styled from "styled-components";

export const Container = styled.header`
   margin-top: 66px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

`;

export const InputSearchContainer = styled.div`
   margin-top: 48px;
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
