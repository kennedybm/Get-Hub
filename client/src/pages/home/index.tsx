import { useApi } from "../../providers/api";
import { useEffect, useState } from "react";
import { Users } from "../../components";
import * as Styled from "./styles";

const Home = () => {
  const { fetchUsers } = useApi();

  useEffect(() => {
    fetchUsers(0);
  }, []);

  return (
    <>
      <Styled.Main>
        <Users />
      </Styled.Main>
    </>
  );
};

export default Home;
