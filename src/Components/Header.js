import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";


const Header = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleSignOut=()=>{
    logOut()
    .then(()=>{})
    .catch((error)=>console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content justify-between">
        <div>
        <Link className="btn btn-ghost normal-case text-2xl" to={"/"}>AuthCoder</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link>
        </div>

        <div className="me-3">
        {user?.email && <span>Welcome {user.email}</span>}
        {
          user?.email?
          <button onClick={handleSignOut} className="btn ms-3 btn-sm">Logout</button>
          :
          <Link className="btn border-slate-500" to={"/login"}>Login</Link>
        }
       
        </div>
      </div>
    </div>
  );
};

export default Header;
