import styles from './table.module.css';

interface Props {
    shape: string | undefined
    hardiness: string | undefined
    taste: string | undefined
}

const Table = (props:Props) => {
    const border = "border border-gray-300";
    const padding = "p-4";

  return (
    <section className={`${border} my-4 grid grid-cols-3 grid-rows-4`}>
        <div className={`${border} ${padding} col-span-3 font-bold bg-gray-100`}>
            Attributes
        </div>
        <div className={`${border} ${padding}`}>Shape</div>
        <div className={`${border} ${padding} col-span-2`}>{props.shape}</div>
        <div className={`${border} ${padding}`}>Hardiness</div>
        <div className={`${border} ${padding} col-span-2`}>{props.hardiness}</div>
        <div className={`${border} ${padding}`}>Taste</div>
        <div className={`${border} ${padding} col-span-2`}>{props.taste}</div>
    </section>
  )
}

export default Table