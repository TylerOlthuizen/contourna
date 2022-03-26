import React from 'react';
import PropTypes from "prop-types";

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
        {title}
      </a>
    )
  }
} 

Button.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string
};