import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonProduct = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={290}
      height={400}
      viewBox="0 0 290 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="5" y="8" rx="20" ry="20" width="275" height="253" />
      <rect x="6" y="274" rx="0" ry="0" width="271" height="47" />
      <rect x="8" y="348" rx="0" ry="0" width="112" height="37" />
      <rect x="163" y="341" rx="22" ry="22" width="112" height="46" />
    </ContentLoader>
  );
};

export default SkeletonProduct;
