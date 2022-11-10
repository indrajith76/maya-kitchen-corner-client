import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import "./Home.css";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://maya-kitchen-corner-server.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("https://maya-kitchen-corner-server.vercel.app/reviews/")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <h2 className="text-5xl font-semibold text-slate-700 my-10">
        Maya's Kitchen Foods
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:p-0">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className="flex justify-center mt-16 mb-16">
        <Link to="/services">
          <button className="bg-yellow-300 text-xl font-semibold text-slate-700 py-1 px-8 rounded">
            See all
          </button>
        </Link>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row gap-20 lg:h-[400px] my-32">
        <div className="relative p-4 border rounded-2xl shadow-xl">
          <img
            className="h-full rounded-2xl"
            src="https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?quality=90&crop=21px,1302px,5442px,3625px&resize=700,466"
            alt=""
          />
          <img
            className="absolute -bottom-12 right-14 md:-bottom-20 lg:-bottom-16 md:-right-1 lg:-right-16 w-[60%]"
            src="https://theguydangerous.github.io/FoodCoders/images/momos-png-11.png"
            alt=""
          />
        </div>
        <div className="lg:w-[50%] border p-5">
          <h3 className="text-4xl font-semibold text-yellow-500 mb-10">
            Why Maya's Kitchen?
          </h3>
          <p>
            You can get your favorite veg food form this website. I make lot's
            of veg food item and indian food items. You can get varaties of veg
            foods in maya's kitchen. Maya's kitchen also provide fresh food with
            good packaging. Maya's kitchen provide best quality of food.
            <br />
            You also get sweets and other veg meal and fastfood also. you can
            easyly get homemade food. You can choose multiple food here. and
            those are also for pure vegitarian. You can easly trusy us about
            fresh ness and also about food quality.
          </p>
          <div className="flex justify-center mt-10">
            <Link to="/services">
              <button className="bg-yellow-500 px-5 py-2 rounded text-white font-semibold">
                Find Foods
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-28">
        <h2 className="text-4xl md:text-5xl text-center font-semibold text-slate-700 mb-10">
          Customer Testimonial
        </h2>
        <Carousel responsive={responsive}>
          {reviews.map((review) => (
            <div className="mx-5">
              <ReviewCard key={review._id} review={review}></ReviewCard>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
