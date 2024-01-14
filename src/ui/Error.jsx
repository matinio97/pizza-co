import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.error.message}</p>
      <LinkButton>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
