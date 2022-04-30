import React from 'react';
import PropTypes from "prop-types";
import { IoChevronForward } from "react-icons/io5";
export default function Button(props){
  const {title , path , type } = props;

  if(type == "primary"){
    return(
      <a href={`${path}`} className="primary-cta">
        {title}
      </a>
    )
  } else{
    return(
      <a href={`${path}`} className="secondary-cta">
        <span>
          {title}
        </span>
        <IoChevronForward />
      </a>
    )
  }
} 

Button.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string
};