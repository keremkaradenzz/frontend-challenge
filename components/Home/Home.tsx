import React from "react";
import { useQuery } from "react-query";
const HomePage = () => {
  const { isLoading, error, data } = useQuery("getMovie", () =>
    fetch("http://localhost:3000/api/movies").then((res) => res.json())
  );
  return <div></div>;
};

// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:3000/api/movies");
//   const data = await response.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default HomePage;