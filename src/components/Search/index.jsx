import React, { useState } from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

Search.propTypes = {};

function Search(props) {

    //state
    const [searchInput, setSearchInput] =  useState('')

    //methods 

    const onTypingSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

  return (
    <div className="relative">
      <form className="search flex items-center">
        <label>
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </label>
        <input className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>onTypingSearchInput(e)} />
      </form>

      <div className={clsx('search-result', searchInput.length > 0 && 'show','transition-height ')}>
        <div className="search-result-item">
            <FontAwesomeIcon className="icon" icon={faLocationArrow} /> Doha, Qatar
        </div>
        <div className="search-result-item">
            <FontAwesomeIcon className="icon" icon={faLocationArrow} /> Doha, Qatar
        </div>
        <div className="search-result-item">
            <FontAwesomeIcon className="icon" icon={faLocationArrow} /> Doha, Qatar
        </div>
      </div>
    </div>
  );
}

export default Search;
