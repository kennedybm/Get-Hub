import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--details1);
  margin-bottom: 0.5em;
  border-radius: 5px;
  width: 80%;
  max-width: 280px;
  margin: 1em 0em 1em;
  h2 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    padding: 1em 0em 0em 1em;
  }

  h3 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    padding: 0.2em 0em 2em 1em;
  }

  span {
    font-family: var(--text);
    font-size: var(--fs-sml);
    color: var(--title);
    padding-top: 0.4em;
    padding-bottom: 0.4em;
    padding-left: 0.2em;
  }
  @media (min-width: 700px) {
    width: 29%;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    color: var(--details1);
    background-color: transparent;
    margin: 0.3em 0.3em 0em;
    height: 1em;
  }
  &:hover {
    button {
      background-color: var(--details1);
      color: var(--details);
      border-radius: 5px;
    }
  }
`;
