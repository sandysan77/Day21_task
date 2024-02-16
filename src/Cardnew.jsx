import { useState } from "react";


export default function Cardnew({ keyval, details }) {
  const [change, setChange] = useState(false);


  return (
    <>
      <div className="col mb-5" id={keyval}>
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          <div
            className="badge bg-dark text-white position-absolute"
            id="topright"
          >
            {details.sale}
          </div>
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{details.product}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              {/* <!-- Product price--> */}
              <span className="text-muted text-decoration-line-through">
                {details.pricestrike}
              </span>
              {details.pricerange}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className="btn btn-outline-dark mt-auto"
                href="#"
                onClick={() => {
                  setChange(!change)
                }}
              >    
                {!change?"Add to Cart" :"Remove from cart"}
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



