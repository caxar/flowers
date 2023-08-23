import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCatalogProduct = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="555" y="58" rx="0" ry="0" width="112" height="37" />
    <rect x="125" y="289" rx="0" ry="0" width="1" height="0" />
    <rect x="10" y="4" rx="9" ry="9" width="265" height="261" />
    <rect x="12" y="281" rx="0" ry="0" width="263" height="42" />
    <rect x="9" y="344" rx="0" ry="0" width="136" height="52" />
    <rect x="167" y="350" rx="22" ry="22" width="104" height="46" />
  </ContentLoader>
);

export default SkeletonCatalogProduct;
