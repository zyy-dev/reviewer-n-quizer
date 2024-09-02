import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-stone-100 border-b-[1px] border-grey"> {/* navbar main color */}
    <nav className="flex justify-between items-center w-[50%] ml-[34%]"> {/* navbar move to left and color 2 */}
      <div>
        <ul className="flex items-center gap-[2vw] text-1xl font-light"> {/* ul design */}
         <img class="w-[180px]" src="../component/confi.png"></img>
          <li className="text-black hover:text-gray-400 transition-colors duration-300">
            <Link to="/">Main</Link>
          </li>
          <li className="text-black hover:text-gray-400 transition-colors duration-300">
            <Link to="/sign">Sign</Link>
          </li>
          <li className="text-black hover:text-gray-400 transition-colors duration-300">
            <Link to="/Functions">Functions</Link>
          </li>
           <button className="">Sign Up</button>
        </ul>
      </div>
      
  
     </nav>
    </div>
  );
};

export default Navbar;
