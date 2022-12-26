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
import ClipLoader from "react-spinners/ClipLoader";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://maya-kitchen-corner-server.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      });
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
      {isLoading ? (
        <div className="flex justify-center my-40">
          <ClipLoader color={"#22c55e"} loading={isLoading} size={50} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:p-0">
            {services.map((service) => (
              <ServicesCard key={service._id} service={service}></ServicesCard>
            ))}
          </div>
          <div className="flex justify-center mt-16 mb-16">
            <Link to="/services">
              <button className="bg-yellow-500 text-xl font-semibold text-white py-1 px-8 rounded">
                See all
              </button>
            </Link>
          </div>
        </>
      )}
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
        <div className="lg:w-[50%] p-5">
          <h3 className="text-4xl font-semibold text-yellow-500 mb-10">
            Why Maya's Kitchen?
          </h3>
          <p className="text-gray-700">
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

      <div className="my-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-semibold text-yellow-500 sm:text-4xl">
                How we cooking
                <br className="hidden md:block" />
                your favorite food{" "}
                <span className="inline-block lg:block text-deep-purple-accent-400">
                  in our kitchen?
                </span>
              </h2>
              <p className="text-gray-700">
                We cooked foods in a clean environment and we maintain 
                higgins of foods. We used best ingrident for cooking and
                 we package food in a best wey and we try best to provide 
                 best service for you.
              </p>
            </div>
            <div>
              <Link
                to="/services"
                className="inline-flex items-center font-semibold bg-yellow-500 text-white py-2 px-4 rounded-lg duration-500"
              >
                Our Foods
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://www.thedailymeal.com/img/gallery/basic-cooking-methods-you-need-to-know/Basic-Cooking-Methods.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/woman-cooking.jpg?quality=82&strip=all"
                alt=""
              />
            </div>
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
      <div>
        <form className="md:w-[75%] lg:w-[45%] border p-5 md:p-10 mx-auto shadow-lg rounded-lg">
          <h3 className="text-center text-4xl mb-10 font-semibold text-slate-700">
            Contact Me
          </h3>
          <label htmlFor="email">E-mail</label>
          <input
            className="h-10 rounded border w-full my-5 pl-3"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="sub">Subject</label>
          <input
            className="h-10 rounded border w-full my-5 pl-3"
            type="text"
            name="sub"
            id="sub"
            placeholder="Subject"
          />
          <textarea
            className="rounded border w-full my-5 pl-3 pt-2"
            placeholder="write your message here"
            name="message"
            id="message"
            rows="5"
          ></textarea>
          <div className="flex justify-center">
            <button className="bg-yellow-500 text-white font-semibold py-2 px-10 rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
