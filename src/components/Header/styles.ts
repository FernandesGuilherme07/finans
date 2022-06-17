import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--gray-dark);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;
  max-width: 1120px;

  div {
    display: flex;
    justify-content: left;
    align-items: center;
    h1 {
      margin-left: -8rem;
      color: #efefef;
    }
  }

  button {
    padding: 0 2rem;
    height: 3rem;
    font-size: 1rem;
    color: #ffffff;
    background: var(--gray-light);
    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s ease-in-out;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
