import React from 'react';
import PropTypes from "prop-types";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "gatsby";
export default function Button(props){
  const {title , path , type } = props;

  if(type == "primary"){
    return(
      <Link to={`${path}`} className="primary-cta">
        {title}
      </Link>
    )
  } else{
    return(
      <Link to={`${path}`} className="secondary-cta">
        <span>
          {title}
        </span>
        <IoChevronForward />
      </Link>
    )
  }
} 

Button.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string
};