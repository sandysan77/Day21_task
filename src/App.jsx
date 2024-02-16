import Cardnew from './Cardnew';

function App() {
  const data = [
    {
      product: "Francy Product",
      pricerange: "$40.00-$80.00",
      todo: "View options",
      
    },

    {
      product: "Special Item",
      pricerange: "$18.00",
      pricestrike: "$20.00",
      todo: "Add to cart",
      sale:"sale",
    },

    {
      product: "sale Item",
      pricestrike: "$50.00",
      pricerange: "$25.00",
      todo: "Add to cart",
      sale:"sale",
    },

    {
      product: "Popular Item",
      pricerange: "$40.00",
      todo: "Add to cart",
    },


    {
      product: "Sale Item",
      pricestrike: "$50.00",
      pricerange: "$25.00",
      todo: "Add to cart",
      sale:"sale",
    },


    {
      product: "Francy Product",
      pricerange: "$120.00-$280.00",
      todo: "View options",
    },


    {
      product: "Special Item",
      pricestrike: "$20.00",
      pricerange: "$18.00",
      todo: "Add to cart",
      sale:"sale",
    },

    {
      product: "Popular Item",
      pricerange: "$40.00",
      todo: "Add to cart",
    }
  ];
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,index) => {
                
                return <Cardnew key={index} keyval={index} details={e} />;
                
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
