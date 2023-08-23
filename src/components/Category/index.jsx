import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import Product from "../Products/Product";
import { fetchDataFromApi } from "../../utils/api";

import img from "../../assets/logo1.png";

import "./Category.scss";

const maxResult = 4;

const Category = () => {
  const [productCategory, setProductCategory] = React.useState();
  const [slugCategories, setSlugCategories] = React.useState();
  const [pageIndex, setPageIndex] = React.useState(1);

  const { id } = useParams();

  React.useEffect(() => {
    getCategorieSlug();
    getCategoriesProducts();
  }, [id]);

  React.useEffect(() => {
    setPageIndex(1);
  }, []);

  const getCategorieSlug = async () => {
    const categorySlug = await fetchDataFromApi(
      `/api/categories?populate=*&filters[slug][$eq]=${id}`
    );

    //   const paths = category.data.map((c) => ({
    //     params: {
    //       slug: c?.attributes?.slug,
    //     },
    //   }));

    setSlugCategories(categorySlug);
  };

  const getCategoriesProducts = async () => {
    // const slug = slugCategories.map((item) => {
    //   return item.params.slug;
    // });

    const category = await fetchDataFromApi(
      `/api/products?populate=*&filters[categories][slug][$eq]=${id}`
    );
    setProductCategory(category);
  };

  // const { data, error, isLoading } = useSWR(
  //   `/api/products?populate=*&[filters][categories][slug][$eq]=${id}&[pagination][page]=${pageIndex}
  //   &pagination[pageSize]=${maxResult}`,
  //   fetchDataFromApi,
  //   {
  //     fallbackData: productCategory,
  //   }
  // );

  // что бы не было ошибки 0 элементов проверяем есть ли что-то в items если нет возвращаем пустое значание
  if (!productCategory) return <></>;
  if (!slugCategories) return <></>;

  const slugName = slugCategories?.data[0]?.attributes?.title;

  return (
    <div className="category">
      <div className="container">
        <div className="category-wrapper">
          <div className="category-title">{slugName}</div>
          <div className="category-product">
            {productCategory?.data?.map((item) => (
              <Product key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// {data?.meta?.pagination?.total > maxResult && (
//   <div className="pagination-wrapper">
//     <button
//       className={`pagination`}
//       disabled={pageIndex === 1}
//       onClick={() => setPageIndex(pageIndex - 1)}
//     >
//       <svg
//         width="20px"
//         height="20px"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M15 7L10 12L15 17"
//           stroke="#000000"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </button>

//     <span className="font-bold">{`${pageIndex} из ${
//       data && data.meta.pagination.pageCount
//     }`}</span>

//     <button
//       className={`pagination`}
//       disabled={
//         pageIndex === (data && data.meta.pagination.pageCount)
//       }
//       onClick={() => setPageIndex(pageIndex + 1)}
//     >
//       <svg
//         width="20px"
//         height="20px"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M10 7L15 12L10 17"
//           stroke="#000000"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </button>
//   </div>
// )}

// {isLoading && (
//   <div className="pagination-reload">
//     <img src={img} width={150} />
//     <span>Loading...</span>
//   </div>
// )}

export default Category;
