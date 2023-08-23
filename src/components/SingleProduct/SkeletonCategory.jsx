import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCategory = () => {
  return (
    <ContentLoader
      speed={2}
      width={1250}
      height={460}
      viewBox="0 0 1250 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="8" y="32" rx="20" ry="20" width="98" height="95" />
      <rect x="150" y="39" rx="0" ry="0" width="371" height="386" />
      <rect x="555" y="58" rx="0" ry="0" width="112" height="37" />
      <rect x="163" y="341" rx="22" ry="22" width="112" height="46" />
      <rect x="8" y="151" rx="0" ry="0" width="104" height="86" />
      <rect x="125" y="289" rx="0" ry="0" width="1" height="0" />
    </ContentLoader>
  );
};

export default SkeletonCategory;
