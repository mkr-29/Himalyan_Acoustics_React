import React from "react";
import "./Products.css";
import Product1 from "./Assets/Prod1.jpg";
import Product2 from "./Assets/Prod2.jpg";
import Product3 from "./Assets/Prod3.jpg";
import Product4 from "./Assets/Prod4.jpg";
import Product5 from "./Assets/Prod5.jpg";
import Product6 from "./Assets/Prod6.jpg";
import Orn3 from "./Assets/mr1.svg";
import Arb1 from "./Assets/arb.svg";
import Arf1 from "./Assets/arf.svg";
import Facebook from "../Services/Assets/fbo.svg";
import Instagram from "../Services/Assets/ino.svg";
import Linkedin from "../Services/Assets/lno.svg";
import Twitter from "../Services/Assets/two.svg";

export default function Products() {
  //   const productSlides = document.querySelectorAll(".product-slide");
  //   const productBtnPrev = document.querySelector(".product-btn-prev");
  //   const productBtnNext = document.querySelector(".product-btn-next");

  //   const prodMaxSlide = productSlides.length;

  //   let productTitle = document.getElementById("product-title");
  //   let productInfo = document.getElementById("product-info");

  //   var products = ["CEILING", "WALLS", "FLOOR", "DOOR", "WINDOW", "PARTITIONS"];

  //   var productDesc = [
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  //     "Lorem ipum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  //     "Lorem ipsiuum dol sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  //   ];

  //   let productSlideCounter = 0;

  //   productSlides.forEach((prodSlide, prodIndex) => {
  //     prodSlide.style.left = `${prodIndex * 110}%`;
  //   });

  //   const updateProductInfo = function () {
  //     productTitle.innerHTML = products[productSlideCounter];
  //     productInfo.innerHTML = productDesc[productSlideCounter];
  //   };

  //   const prodSlideImage = function () {
  //     productSlides.forEach((prodSlide) => {
  //       prodSlide.style.transform = `translateX(-${productSlideCounter * 100}%)`;
  //     });
  //   };

  //   const goProdNext = function () {
  //     if (productSlideCounter != prodMaxSlide - 1) {
  //       productSlideCounter++;
  //     } else {
  //       productSlideCounter = 0;
  //     }
  //     prodSlideImage();
  //     updateProductInfo();
  //   };
  //   productBtnNext.addEventListener("click", goProdNext);

  //   const goProdPrev = function () {
  //     if (productSlideCounter != 0) {
  //       productSlideCounter--;
  //     } else {
  //       productSlideCounter = prodMaxSlide - 1;
  //     }
  //     prodSlideImage();
  //     updateProductInfo();
  //   };
  //   productBtnPrev.addEventListener("click", goProdPrev);

  //   //Slides will slide automatically
  //   let autoProdSlide = setInterval(goProdNext, 5000);

  return (
    <div>
      {/* Product Range */}

      <div class="product_range" id="prod_range">
        <img src={Orn3} alt="" class="meshed_rectangle1" />

        {/* social ornament */}
        <div class="ser_off_socials_pr">
          <a href="http://">
            <img class="ser_off_ic" src={Facebook} alt="" />
          </a>
          <a href="http://">
            <img class="ser_off_ic" src={Linkedin} alt="" />
          </a>
          <a href="http://">
            <img class="ser_off_ic" src={Twitter} alt="" />
          </a>
          <a href="http://">
            <img class="ser_off_ic" src={Instagram} alt="" />
          </a>
        </div>

        {/* body */}
        <div class="product_range_body">
          {/* title */}
          <span class="prod_range_title">
            Product<span class="prod_range_rang">Range</span>
          </span>

          <div class="prod_range_carousel">
            <div class="prod_range_box_outer">
              {/* slider */}
              <div class="prod_range-slider">
                <div class="product-slide">
                  <img src={Product1} alt="Product-1" />
                </div>
                <div class="product-slide">
                  <img src={Product2} alt="Product-2" />
                </div>
                <div class="product-slide">
                  <img src={Product3} alt="Product-3" />
                </div>
                <div class="product-slide">
                  <img src={Product4} alt="Product-3" />
                </div>
                <div class="product-slide">
                  <img src={Product5} alt="Product-3" />
                </div>
                <div class="product-slide">
                  <img src={Product6} alt="Product-3" />
                </div>
              </div>

              {/* slider Info */}
              <div class="prod_range_box">
                <div class="prod_range_box_body">
                  <span class="prod_title" id="product-title">
                    CEILING
                  </span>
                  <span class="prod_description" id="product-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </span>
                </div>

                {/* slider navigation */}
                <div class="prod_range_box_body_car_nav">
                  <button class="prod-arrow product-btn-prev">
                    <img src={Arb1} alt="" />
                  </button>
                  <button class="prod-arrow product-btn-next">
                    <img src={Arf1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
