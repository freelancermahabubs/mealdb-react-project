import React from 'react';
import './Header.css';
import logo from '../../public/img.png'
const Header = () => {
  return (
    <div>
      <div className="navbar bg-blue-900 px-12">
  <div className="flex-1">
   <h4  className='text-white text-3xl font-bold hover:text-orange-400 hover:cursor-pointer'>Meal DB</h4>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
     
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={logo}/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default Header;