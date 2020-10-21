import React from "react";
import PropTypes from 'prop-types';
import './Stars.css'

const Stars = ({stars,size}) => {
  return <div className="Stars" style={{ "--stars": stars, "--size": size }}></div>;
};

Stars.propTypes = {
    stars: PropTypes.number.isRequired,
    size: PropTypes.string
};
  
export default Stars;