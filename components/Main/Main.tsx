import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./main.module.css";

const Main = () => {
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
    <section className={`${styles.avoGrid} sm:w-3/4`}>
      {productList.map((product) => (
        <Link href="#">
          <a>
            <div className="hover:-translate-y-2 transition-translate duration-700 ease border-t-2 border-slate-200 border-solid flex flex-col items-center shadow-sm shadow-gray-400 bg-gray-100">
              <img className="" src={product.image} alt={product.name} />
              <article className="flex flex-col shadow-sm p-4 shadow-slate-400 mt-2 w-full bg-white">
                <span className="text-black font-bold text-xl">
                  {product.name}
                </span>
                <span>{product.price}</span>
              </article>
            </div>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default Main;
