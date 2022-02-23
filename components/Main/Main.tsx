import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Image from 'next/image';


//El objeto windows solo existe en el navegador


// export const getServerSideProps = async () => {//Se ejecuta en el servidor
//   const response = await fetch('/api/avo');
//   const { data: productList }: TAPIAvoResponse = await response.json();
//   //data: productList

//   return {
//     props: {
//       productList,
//     }
//   }
// }

const Main = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setproductList] = useState<TProduct[]>([]);

  // useEffect(() => {// Siempre se ejecuta en el navegador => CSR(client side rendering)
    
  // }, []);

  return (
    <section className={`${styles.avoGrid} sm:w-3/4`}>
      {productList.map((product) => (
        <Link href={`avo/${product.id}`} key={product.id}>
          <a>
            <div className="hover:-translate-y-2 transition-translate duration-700 ease border-t-2 border-slate-200 border-solid flex flex-col items-center shadow-sm shadow-gray-400 bg-gray-100">
              <Image className="" src={product.image} alt={product.name} />
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
