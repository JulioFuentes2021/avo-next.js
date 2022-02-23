import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./avo.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Table from "@components/Table/Table";

const Avo = () => {
  // type Attributes = {
  //   hardiness: string,
  //   shape: string,
  //   taste: string,
  //   description: string,
  // }

  // type Avoc = {
  //   id: string,
  //   image: string,
  //   name: string,
  //   price: number,
  //   sku: string,
  //   attributes:Attributes,
  // };

  const {
    query: { avo },
  } = useRouter();
  const [avocato, setAvocato] = useState<TProduct>();

  const getAvo = async () => {
    try {
      const response = await fetch(`../api/avo/${avo}`);
      const data = await response.json();
      console.log(data.data);
      setAvocato(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(avo);
  useEffect(() => {
    // window
    //   .fetch(`../api/avo/${avo}`)
    //   .then((response) => response.json())
    //   .then(({data}) => {
    //     console.log(data)
    //   })
    getAvo();
  }, [avo]);

  return (
    <div className="my-24 flex flex-col items-center">
      <div className={`${styles.grid} w-3/4`}>
        <section className="">
          <img className="w-60" src={avocato?.image} alt="" />
        </section>
        <section className="flex flex-col">
          <span className="text-2xl font-bold text-gray-700">
            {avocato?.name}
          </span>
          <span className="mt-3">{avocato?.price}</span>
          <span className="my-3 bg-gray-300 text-gray-500 w-32 text-center p-1 font-semibold">
            SKU:{avocato?.sku}
          </span>
          <div>
            <input
              className="border outline-none focus:border focus:border-blue-400 p-3 border-gray-300"
              type="number"
              placeholder="1"
            />
            <button
              type="button"
              className="text-white hover:bg-green-600 transition-colors duration-200 ease-in bg-green-500 h-full px-2 font-semibold"
            >
              <span>
                <AddShoppingCartIcon />
              </span>
              <span className="mx-1">Add to Cart</span>
            </button>
          </div>
        </section>
      </div>
      <section className="w-3/4 my-20">
        <span className="text-xl font-semibold">About this avocado</span>
        <p className="border-b py-4 border-gray-500">
          {avocato?.attributes.description}
        </p>
        <Table 
          hardiness={avocato?.attributes.hardiness}
          shape={avocato?.attributes.shape}
          taste={avocato?.attributes.taste}
        />
      </section>
    </div>
  );
};

export default Avo;
