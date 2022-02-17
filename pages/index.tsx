import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [productList, setproductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("api/avo")
      .then((response) => response.json())
      .then(({ data }) => {
        setproductList(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div>Platzi and Next.js</div>
      { productList.map(product => (
        <div>{ product.name }</div>
      )) }
    </div>
  );
};

export default Home;
