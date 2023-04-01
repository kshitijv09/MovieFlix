import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
const Root = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};
export default Root;
