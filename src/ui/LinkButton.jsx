import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const LinkButton = ({ children, path }) => {
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";
  const navigate = useNavigate();
  if (path === "-1")
    return (
      <Button className={className} onClick={() => navigate(-1)}>
        {children}
      </Button>
    );

  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
