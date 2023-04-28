import { useState } from "react";
import * as Styled from "./styles";
import { useApi } from "../../providers/api";
import { UserCard } from "../userCards";
import { Pagination } from "../pagination";

export const Users = () => {
  const { usersData } = useApi();

  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 12;
  const viewedUsers = pageNumber * postsPerPage;

  const displayUsers = usersData.slice(viewedUsers, viewedUsers + postsPerPage);
  const pageCount = Math.ceil(usersData.length / postsPerPage);

  const switchPage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Styled.MainSection>
        <Styled.ScrollContent>
          {displayUsers
            ? displayUsers.map((item, index) => {
                return <UserCard key={index} id={item.id} login={item.login} />;
              })
            : null}
        </Styled.ScrollContent>
        <Styled.PaginationBox>
          <Pagination switchPage={switchPage} pageCount={pageCount} />
        </Styled.PaginationBox>
      </Styled.MainSection>
    </>
  );
};
