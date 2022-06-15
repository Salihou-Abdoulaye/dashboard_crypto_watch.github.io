import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = (props) => {
  return (
    <div>
      <ul className="flex">
        <li className="inline-flex items-center">
          <NavLink
            to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FontAwesomeIcon icon={faHouse} className="text-gray-middle flex" />
          </NavLink>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mx-2 text-gray-middle flex"
          />
        </li>
        {props.prev.map((element) => (
          <li className="inline-flex items-center">
          <NavLink
            to={"/"+element}
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {element}
          </NavLink>
          <FontAwesomeIcon
              icon={faChevronRight}
              className="mr-2 text-gray-middle flex"
            />
        </li>   
        ))}

        <li className="flex">{props.current}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
