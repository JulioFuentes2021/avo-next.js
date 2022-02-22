
const cart = () => {
  return (
    <article className="w-3/4 m-auto my-5 text-center">
        <div className="flex flex-col bg-gray-100 border border-orange-200">
            <span className="px-3 py-2 text-xl text-orange-500">Your Cart is empty</span>
            <span className="px-3 pb-2">You will need to add some items to the cart before you can checkout.</span>
        </div>
        <div className="flex justify-between border border-slate-300 my-5">
            <span className="p-3 font-bold">Sub total: 0</span>
            <button type="button" className="bg-black text-white h-10 m-3 w-24">Check out</button>
        </div>
    </article>
  )
}

export default cart