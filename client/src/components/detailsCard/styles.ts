import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 30em;
  margin-top: 3em;
  @media (min-width: 790px) {
    max-width: 900px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

export const DetailsTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid var(--details1);
  width: 95%;
  height: 2em;
  color: var(--title);
  font-family: var(--text);
  font-weight: bold;
`;

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--details1);
  margin-bottom: 0.5em;
  border-radius: 5px;
  width: 100%;
  max-width: 360px;
  margin: 1em 0em 1em;
  h2 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    width: 100%;
    padding: 0.7em 0em 0.4em 0.4em;
  }

  h3 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    width: 100%;
    padding: 0em 0em 0.4em 0.4em;
  }

  h4 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    width: 100%;
    padding: 0em 0em 0.4em 0.4em;
  }

  h5 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    width: 100%;
    padding: 0em 0em 0.7em 0.4em;
  }

  span {
    font-family: var(--text);
    font-size: var(--fs-sml);
    color: var(--title);
    padding-top: 0.4em;
    padding-bottom: 0.4em;
    padding-left: 0.2em;
  }
`;

export const RepositoriesScroll = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--details1);
  border-radius: 5px;
  width: 100%;
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
  @media (min-width: 800px) {
    width: 52%;
    height: 29.5em;
    margin-top: 0.8em;
  }
`;

export const RepoTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid var(--details1);
  width: 95%;
  height: 2em;
  color: var(--title);
  font-family: var(--text);
  font-weight: bold;
`;

export const RepoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--details1);
  margin-bottom: 0.5em;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin-top: 0.5em;
  @media (min-width: 800px) {
    max-width: 440px;
  }

  h2 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    width: 100%;
    padding: 0.7em 0em 0.4em 0.4em;
  }

  h3 {
    font-family: var(--content);
    font-size: var(--fs-sml);
    color: var(--font);
    width: 100%;
    padding: 0em 0em 0.4em 0.4em;
  }

  h4 {
    font-family: var(--content);
    font-size: var(--fs-xs);
    color: var(--font);
    width: 100%;
    padding: 0em 0em 0.7em 0.4em;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    @media (min-width: 800px) {
      font-size: var(--fs-sml);
    }
  }

  span {
    font-family: var(--text);
    font-size: var(--fs-sml);
    color: var(--title);
    padding-top: 0.4em;
    padding-bottom: 0.4em;
    padding-left: 0.2em;
  }
`;
