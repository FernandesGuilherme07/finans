import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  @media (min-width: 600px) {
    margin: 1rem;
    padding: 2rem;
  }
  div {
    @media (min-width: 700px) {
      display: none;
    }
    h2 {
      margin: -1rem 0 1rem 1rem;
    }
    .area-mobile {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1rem;
      padding: 1rem 4rem 1rem 2rem;
      color: var(--text-body);
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;
      div {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        &:first-child {
          color: var(--text-title);
        }
        &.deposit {
          color: var(--green);
        }
        &.withdraw {
          color: var(--red);
        }
      }

      .title {
        grid-area: title;
      }
      .category {
        grid-area: category;
      }
      .date {
        grid-area: date;
      }
      .deposit .withdraw {
        grid-area: type;
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    @media (max-width: 700px) {
      display: none;
    }
    th {
      padding: 1rem 2rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
      color: var(--text-body);
    }
    td {
      padding: 1rem 2rem;
      color: var(--text-body);
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;
      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
