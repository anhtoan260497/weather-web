import { faBars, faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useState } from "react";
import "./styles.scss";
// import PropTypes from 'prop-types';

// Header.propTypes = {

// };

function Header(props) {
  //state
  const [selected, setSelected] = useState(0);
  const [isHoverHeader,setIsHoverHeader] =  useState(false)
  const initialHeader = [{ icon: faCloud,name : 'Weather' }, { icon: faBars, name: 'Location list', }];

  //methods
  const onChangeSelected = (idx) => {
    setSelected(idx);
  };

  const onHoverHeader = () => {
    setIsHoverHeader(true)
  }

  const onLeaveHeader = () => {
    setIsHoverHeader(false)
  }

  //render

  const renderMenuItems = () => {
    return initialHeader.map((item, idx) => {
      return (
        <button
          className={clsx(
            "header-item",
            "flex",
            "items-center",
            "justify-center",
            "gap-2",
            selected === idx && "selected"
          )}
          key={idx}
          onClick={() => onChangeSelected(idx)}>
          <div className="header-item-icon">
            <FontAwesomeIcon className="icon" icon={item.icon} />
          </div>
        <p className={clsx('header-item-description',isHoverHeader && 'show')}>{item.name}</p>
        </button>
      );
    });
  };

  return (
    <div id="header" onMouseOver={onHoverHeader} onMouseOut={onLeaveHeader}>
      <div className="page-icon flex items-center justify-center">
        <img
          src="/assets/icons/sun-hot.svg"
          alt="page-icon"
        />
        <h1 className={clsx('header-title',isHoverHeader && 'show')}>Weather</h1>
      </div>
      {renderMenuItems()}
    </div>
  );
}

export default Header;
