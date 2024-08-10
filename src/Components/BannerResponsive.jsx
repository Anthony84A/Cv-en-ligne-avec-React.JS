import React, { useState, useEffect } from "react";

import bannerMobile from "../Images/banner-mobile.jpg";
import bannerTablet from "../Images/banner-tablette.jpg";
import bannerDesktop from "../Images/banner.jpg";


export default function ChangeBanner() {

  const getBanner = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 768) {
      return bannerMobile;
    } else if (viewportWidth >= 768 && viewportWidth < 992) {
      return bannerTablet;
    } else {
      return bannerDesktop;
    }
  };

  
  const [banner, setBanner] = useState(getBanner());

  useEffect(() => {
    const handleResize = () => {
      setBanner(getBanner());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <img
      className="banner"
      src={getBanner()}
      alt="Images avec des traits lumineux bleu"
    />
  );
}
