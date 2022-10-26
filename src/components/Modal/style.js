import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors[100]};
  width: 450px;
  border-radius: 4px;
  max-width: 100%;
  padding: 24px;

  > h1{
    font-size: 24px;
    margin-bottom: 8px;

    color: ${({ danger, theme }) => (danger
    ? theme.colors.danger[500]
    : theme.colors.grey[500]
  )}
  }
  .modal-body {
    font-style: italic;
    margin: 24px 0px

  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background-color: transparent;
    border: none;
    margin-right: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey[100]};
  }
`;
