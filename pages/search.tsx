import { useState, useEffect, useRef } from "react";

const Search = () => {
  const [avo, setAvo] = useState<string>("");
  const [productList, setproductList] = useState<TProduct>();
  const test = useRef("");

  useEffect(() => {
    // window
    //   .fetch(`api/avo/${avo}`)
    //   .then((response) => response.json())
    //   .then(console.log);
    console.log(avo)
  }, [avo]);

  const search = async () => {
    try {
        const response = await fetch(`api/avo/${avo}`);
        const data = await response.json();
        console.log(data);
        setproductList(data.data);
        // console.log(productList)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <h1>Search</h1>
      <label htmlFor="avo">Type your favorite avo :)</label>
      <br />
      <input
        type="text"
        id="avo"
        placeholder="Avocato name"
        onChange={(e) => setAvo(e.target.value)}
      />
      <button type="button" onClick={search}>Search</button>
      { <div>{productList?.name}</div> }
    </div>
  );
};

export default Search;
