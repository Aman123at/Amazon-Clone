import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="100"
          title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
          price={2299}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41+Y1oz4TML._AC_US160_FMwebp_QL70_.jpg"
        />
        <Product
          id="200"
          title="HP 15 8th Gen Intel Core i5 Processor 15.6-inch FHD Laptop (8GB/1TB HDD/Windows 10/MS Office/Jet Black/2.04 kg), 15q-ds1001TU"
          price={50242}
          rating={3}
          image="https://m.media-amazon.com/images/I/81jOurv0RNL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="300"
          title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop"
          price={43999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/713RMFEtwtL._SL1500_.jpg"
        />
        <Product
          id="400"
          title="ASUS VivoBook S14 S431FA-EB515T Intel Core i5 8th Gen 14-inch FHD"
          price={56990}
          rating={4}
          image="https://m.media-amazon.com/images/I/71s5CMpt6CL._AC_UY218_.jpg"
        />
        <Product
          id="500"
          title="Samsung Galaxy Z Flip (Gold, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={108999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61e3gEDsIbL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="600"
          title="Samsung 163 cm (65 Inches) Q Series 4K Ultra HD QLED Smart TV QA65Q8CNAK (Black) (2018 model)"
          price={258999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81piVC2laHL._AC_UY218_.jpg"
        />
      </div>{" "}
    </div>
  );
};

export default Home;
