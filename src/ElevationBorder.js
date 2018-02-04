import React, { Component } from 'react';

function ElevationBorder(props) {
  return(
    <div className={'FancyBorder'}>
      {props.children}
    </div>
  );
}

export default ElevationBorder;
