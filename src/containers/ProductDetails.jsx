import React from 'react';

import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  return <div>{location.state.item.id}</div>;
}

export default ProductDetails;
