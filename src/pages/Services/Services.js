import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import useTitle from "../../hooks/useTitle";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Services = () => {
  useTitle('Foods')
  const services = useLoaderData();
  return (
    <div className="container mx-auto mt-10">
      <div className="rounded-3xl overflow-hidden mb-10">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={6000}
          className="h-[250px]"
          buttons={false}
        >
          <div data-src="https://www.dineout.co.in/blog/wp-content/uploads/2019/08/sun-planet.jpg">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-20 md:bottom-24 lg:bottom-28 text-center">
              <h1
                className="text-6xl md:text-8xl text-white"
                style={{ fontFamily: "Kaushan Script" }}
              >
                All Delicious Foods
              </h1>
            </div>
          </div>
          <div data-src="https://keralainformation.com/directory/wp-content/uploads/2016/08/bala.jpg">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-20 md:bottom-28 text-center">
              <h1
                className="text-6xl md:text-8xl text-white"
                style={{ fontFamily: "Kaushan Script" }}
              >
                All Delicious Foods
              </h1>
            </div>
          </div>
          <div data-src="https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-20 md:bottom-28 text-center">
              <h1
                className="text-6xl md:text-8xl text-white"
                style={{ fontFamily: "Kaushan Script" }}
              >
                All Delicious Foods
              </h1>
            </div>
          </div>
          <div data-src="https://miro.medium.com/max/1400/1*MkWAwWOVFvOlSuzwELCjfw.jpeg">
            <div className="bg-black absolute top-0 bottom-0 left-0 right-0 opacity-50"></div>
            <div className="absolute left-0 right-0 bottom-24 text-center">
              <h1
                className="text-6xl md:text-8xl text-white"
                style={{ fontFamily: "Kaushan Script" }}
              >
                All Delicious Foods
              </h1>
            </div>
          </div>
        </AutoplaySlider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 px-10 lg:p-0">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
