import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center p-4 bg-blue-100 text-gray-700">
      <div className="text-center">
        &copy; {currentYear} Made with love
        {user?.name && user?.email ? (
          <span> - {user.name} ({user.email})</span>
        ) : (
          <span> - Guest User</span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
