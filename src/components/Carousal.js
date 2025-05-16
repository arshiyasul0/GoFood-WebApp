import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div>
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
          
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{zIndex:"10"}}>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success  text-white bg-success" type="submit">Search</button>
              </form>
              <div className="carousel-item active">
                <img
                  src="/images/burger.jpg"
                  className="d-block w-100"
                  style={{ filter: "brightness(70%)" }}
                  alt="Delicious Burger"
                />
                <div className="carousel-caption">
                  <h5>Delicious Burger</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/food.jpg"
                  className="d-block w-100"
                  style={{ filter: "brightness(70%)" }}
                  alt="Delicious food"
                />
                <div className="carousel-caption">
                  <h5>Delicious Food</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="/images/ice.jpg"
                  className="d-block w-70"
                  style={{ filter: "brightness(30%)" }}
                  alt="Delicious ice cream"
                />
                <div className="carousel-caption">
                  <h5>Delicious Ice Cream</h5>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
