import React from "react";
import Caritem from "./Caritem";
import "./car.css";

function Car() {
  return (
    <div className="scrolly" style={{ scrollSnapAlign: "start" }}>
      <Caritem
        image="https://tesla-cdn.thron.com/delivery/public/image/tesla/409621ec-fca7-41fd-87e5-66e1caf40f5c/bvlatuR/std/2880x2400/m3-homepage-desktop"
        name="Model 3"
        description="Schedule a Touchless Test drive"
        twobutton={true}
        darkb="CUSTOM ORDER"
        Primarb="EXISTING INVENTORY"
      />{" "}
      <Caritem
        image="https://www.pv-magazine.com/wp-content/uploads/2020/06/Screenshot-2020-06-19-19.45.17.png"
        name="Solar and Powerwall  "
        description="Power Everything"
        twobutton={false}
        darkb="LEARN MORE"
        Primarb=""
      />{" "}
      <Caritem
        image="https://www.designnews.com/sites/designnews.com/files/styles/article_featured_retina/public/Tesla-model-y-desktop%20lede%201.jpeg?itok=Nm3wSucm"
        name="Model Y"
        description="Schedule a Touchless Test drive"
        twobutton={true}
        darkb="Learn More"
        Primarb="stay updated"
      />{" "}
      <Caritem
        image="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
        name="Model S"
        description="Schedule a Touchless Test drive"
        twobutton={true}
        darkb="CUSTOM ORDER"
        Primarb="EXISTING INVENTORY"
      />
      <Caritem
        image="https://robbreport.com/wp-content/uploads/2019/11/cybertruck01.jpg?w=1000"
        name="CyberTruck"
        description="Schedule a Touchless Test drive"
        twobutton={true}
        darkb="CUSTOM ORDER"
        Primarb="EXISTING INVENTORY"
      />
    </div>
  );
}

export default Car;
