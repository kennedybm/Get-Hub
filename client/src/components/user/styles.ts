import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 800px;
  margin-top: 3em;
`;

export const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--details1);
  border-radius: 5px;
  width: 95%;
  height: 30em;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--details1);
    border-radius: 3px;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    scroll-snap-type: x hidden;
  }
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  height: 2em;
  .paginationUl {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    padding: 0.5em 0em 0em 0em;
    color: var(--details1);
    font-family: var(--text);
    font-size: var(--fs-sml);
    font-weight: bold;
    @media (min-width: 1200) {
      font-size: var(--fs-mid);
    }
  }
  .previousBttn,
  .nextBttn {
    font-family: var(--text);
    color: var(--details1);
    cursor: pointer;
  }
  .paginationActive {
    font-family: var(--text);
    text-decoration: underline;
    color: var(--details1);
  }
  .paginationPages {
    cursor: pointer;
  }
`;
