import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user}=useContext(UserContext);
  return (
    <div className="flex justify-center p-4 bg-blue-100">
      <div>
        Copyright 2023 Made with love - {user.name}-{user.email}
      </div>
    </div>
)      
}

export default Footer;