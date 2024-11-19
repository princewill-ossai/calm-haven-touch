import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../css-files/homepage.css";
import chooseUsSection from "../../../assets/freepik__candid-image-photography-natural-textures-highly-r__14351.jpeg";
import swedishIcon from "../../../assets/icn-swedish.jpeg";
import deepTissueIcon from "../../../assets/icn-d-tissue.jpeg";
import aromatherapy from "../../../assets/aromatherapy-icn.jpeg";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <main>
        {/* Hero Section */}
        <div
          className="hero !pt-[10rem] flex flex-col items-center text-center px-6 md:px-16"
          data-aos="fade-up"
        >
          <div className="hero-text max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-5">
              A space for your wellness journey
            </h1>
            <p className="font-medium text-white leading-relaxed">
              Step into a haven of tranquility, where every touch is designed to
              melt away your worries. At [CALM HAVEN TOUCH], we believe in the
              power of mindful relaxation to refresh both body and mind. Our
              expert massage therapists provide tailored treatments to soothe
              your muscles, calm your mind, and restore a sense of balance.
              Begin your journey to wellness today—because you deserve to feel
              your very best.
            </p>
            <button className="bg-pink-200 px-6 py-3 rounded-lg font-bold text-black my-10 hover:bg-pink-300 transition">
              Schedule Your First Session
            </button>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="text-center py-8 px-6 md:px-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold">
            Take the First Step Towards Relaxation
          </h2>
          <div className="py-4 font-medium text-gray-600 leading-relaxed">
            <p>
              Why wait to feel your best? Booking your session is easy, and the
              results are transformative. Whether you need a deep tissue
              massage to tackle tension or calming aromatherapy, we’re here for
              you. Click the button below to reserve your moment of peace. Your
              sanctuary awaits.
            </p>
          </div>
          <button className="bg-purple-200 px-8 py-3 rounded-lg font-bold text-black hover:bg-purple-300 transition">
            Book Now
          </button>
        </section>

        {/* Choose Us Section */}
        <h2
          className="text-2xl text-center py-8 font-bold"
          data-aos="fade-right"
        >
          Why Choose Us
        </h2>
        <section className="flex flex-col lg:flex-row items-center bg-pink-100 p-6 lg:px-16 lg:gap-6">
          <div
            className="font-medium lg:w-3/5 leading-relaxed text-gray-700"
            data-aos="fade-left"
          >
            <p className="py-2">
              Your relaxation and well-being are our priority. We bring expert
              massage therapy to you, creating an environment of calm wherever
              you feel most comfortable.
            </p>
            <p className="py-2">
              With skilled therapists and attention to every detail, we ensure a
              seamless experience tailored to your unique needs. Whether you're
              seeking stress relief or a moment to unwind, we make it easy for
              you to focus on what matters most—your wellness.
            </p>
          </div>
          <div className="w-full lg:w-2/5" data-aos="fade-up">
            <img
              className="rounded-lg w-full"
              src={chooseUsSection}
              alt="Why choose us"
            />
          </div>
        </section>

        {/* Services Offered */}
        <section>
          <h2
            className="text-2xl text-center py-8 font-bold"
            data-aos="zoom-in"
          >
            We Offer:
          </h2>
          <div className="flex flex-wrap justify-center gap-8 bg-pink-100 py-8">
            {[
              { img: swedishIcon, text: "Swedish Massage" },
              { img: deepTissueIcon, text: "Deep Tissue Massage" },
              { img: aromatherapy, text: "Aromatherapy Massage" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="w-[15rem] h-[13rem] bg-white rounded-lg flex flex-col items-center justify-center shadow-lg"
                data-aos="flip-left"
              >
                <img className="w-16 mb-2" src={service.img} alt={service.text} />
                <p className="font-bold text-lg">{service.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
