import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./Home.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        className="h-[85vh] 2xl:h-[500px]"
      >
        <div data-src="https://miro.medium.com/max/1400/1*MkWAwWOVFvOlSuzwELCjfw.jpeg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              Maya's Kitchen Corner
            </h1>
            <p className="text-slate-300 mt-5">
              You can get your favorite veg food form this website.<br></br>I
              make lot's of veg food item and indian food items.
            </p>
          </div>
        </div>
        <div data-src="https://keralainformation.com/directory/wp-content/uploads/2016/08/bala.jpg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              Maya's Kitchen Corner
            </h1>
            <p className="text-slate-300 mt-5">
              You can get your favorite veg food form this website.<br></br>I
              make lot's of veg food item and indian food items.
            </p>
          </div>
        </div>
        <div data-src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              Maya's Kitchen Corner
            </h1>
            <p className="text-slate-300 mt-5">
              You can get your favorite veg food form this website.<br></br>I
              make lot's of veg food item and indian food items.
            </p>
          </div>
        </div>
        <div data-src="https://www.dineout.co.in/blog/wp-content/uploads/2019/08/sun-planet.jpg">
          <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
          <div className="absolute left-0 right-0 bottom-28 text-center">
            <h1
              className="text-6xl md:text-8xl text-white"
              style={{ fontFamily: "Kaushan Script" }}
            >
              Welcome
            </h1>
            <h1
              className="text-4xl font-semibold text-white my-4"
              style={{ fontFamily: "Kaushan Script" }}
            >
              To
            </h1>
            <h1
              className="text-6xl text-white "
              style={{ fontFamily: "Kaushan Script" }}
            >
              Maya's Kitchen Corner
            </h1>
            <p className="text-slate-300 mt-5">
              You can get your favorite veg food form this website.<br></br>I
              make lot's of veg food item and indian food items.
            </p>
          </div>
        </div>
      </AutoplaySlider>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
        }
      </div>
      See all
    </div>
  );
};

export default Home;
