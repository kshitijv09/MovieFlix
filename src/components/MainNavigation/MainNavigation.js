import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <>
      <div className="nav-container">
        <div className="link-container">
          <h1 style={{ color: "#dd0c16" }}>NETFLIX</h1>

          <NavLink
            to=""
            className="text-link"
            style={({ isActive }) => ({
              color: isActive ? "#dd0c16" : "white",
            })}
          >
            <div>
              <h3 style={{ textDecoration: "none" }}>All</h3>
            </div>
          </NavLink>

          <NavLink
            to="Action"
            className="text-link"
            style={({ isActive }) => ({
              color: isActive ? "#dd0c16" : "white",
            })}
          >
            <div>
              <h3>Action</h3>
            </div>
          </NavLink>
          <NavLink
            to="Drama"
            className="text-link"
            style={({ isActive }) => ({
              color: isActive ? "#dd0c16" : "white",
            })}
          >
            <div>
              <h3>Drama</h3>
            </div>
          </NavLink>
          <NavLink
            to="Crime"
            className="text-link"
            style={({ isActive }) => ({
              color: isActive ? "#dd0c16" : "white",
            })}
          >
            <div>
              <h3>Crime</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MainNavigation;
