import { useEffect } from "react";
import { useApi } from "../../providers/api";
import * as Styled from "./styles";
import { useParams } from "react-router-dom";

export const DetailsCard = () => {
  const {
    userDetails,
    userRepositories,
    fetchUsersDetails,
    fetchUserRepositories,
  } = useApi();

  const params: { userName: string } = useParams();

  useEffect(() => {
    fetchUsersDetails(params.userName);
    fetchUserRepositories(params.userName);
  }, []);

  let formatedDate: string = "";

  userDetails
    ? userDetails.map((item) => {
        return (formatedDate = new Intl.DateTimeFormat("en-US").format(
          parseInt(item.createdAt)
        ));
      })
    : null;

  return (
    <>
      <Styled.MainSection>
        {userDetails
          ? userDetails.map((item, index) => {
              return (
                <Styled.DetailsCard key={index}>
                  <Styled.DetailsTitleBox>Details </Styled.DetailsTitleBox>
                  <h2>
                    <span>ID: </span> {item.id}
                  </h2>
                  <h3>
                    <span>Login: </span> {item.login}
                  </h3>
                  <h4>
                    <span>Url: </span>
                    {item.url}
                  </h4>
                  <h5>
                    <span>Registered: </span>
                    {formatedDate}
                  </h5>
                </Styled.DetailsCard>
              );
            })
          : null}

        <Styled.RepositoriesScroll>
          {userRepositories
            ? userRepositories.map((item, index) => {
                return (
                  <Styled.RepoCard key={index}>
                    <Styled.RepoTitleBox>Repositories</Styled.RepoTitleBox>
                    <h2>
                      <span>ID: </span> {item.id}
                    </h2>
                    <h3>
                      <span>Name: </span> {item.name}
                    </h3>
                    <h4>
                      <span>Url: </span>
                      {item.html_url}
                    </h4>
                  </Styled.RepoCard>
                );
              })
            : null}
        </Styled.RepositoriesScroll>
      </Styled.MainSection>
    </>
  );
};
