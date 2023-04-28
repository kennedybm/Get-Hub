import * as Styled from "./styles";
import * as IconsBs from "react-icons/bs";
import { useApi } from "../../providers/api";
import { useHistory } from "react-router-dom";
import { ICardProps } from "./interfaces";

export const UserCard = ({ id, login }: ICardProps) => {
  const { fetchUsersDetails, fetchUserRepositories } = useApi();

  const history = useHistory();

  const handleDetails = (userName: string) => {
    history.push(`/details/${userName}`);
  };

  return (
    <>
      <Styled.CardBox>
        <Styled.DetailsBox>
          <button onClick={() => handleDetails(login)}>
            <IconsBs.BsPlusSquare />
          </button>
        </Styled.DetailsBox>

        <h2>
          <span>Login:</span> {login}
        </h2>

        <h3>
          <span>ID:</span> {id}
        </h3>
      </Styled.CardBox>
    </>
  );
};
