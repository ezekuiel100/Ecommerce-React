import Start from "./Start";

function Products({ products }) {
  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-4 w-[89rem]  pt-10 pb-32 px-12 h-full">
      {products.length > 0 ? (
        products.map((product, i) => {
          return (
            <div key={i} className=" border-[1px] border-gray-300 ">
              <img src={product.img} className="max-h-80 "></img>
              <div className="p-2">
                <p className="font-bold">{product.title}</p>
                <Start star={product.star} />
                <p className="font-semibold text-xl text-gray-600">
                  {`R$${product.price},00`}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p>Nenhum item encontrado</p>
      )}
    </div>
  );
}

export default Products;
