import React from "react";

const Features = () => {
  const features = [
    {
      icon: "https://www.rentrip.in/assets/images/icons/rupee.webp", // Replace with your image/icon
      title: "Affordable Prices",
      description: "Guaranteed Genuine Prices",
    },
    {
      icon: "https://www.rentrip.in/assets/images/icons/navigation.webp", // Replace with your image/icon
      title: "Multiple Locations",
      description: "Choose a Vehicle Conveniently Located Near You",
    },
    {
      icon: "https://www.rentrip.in/assets/images/icons/secure-payment.webp", // Replace with your image/icon
      title: "Secure Payments",
      description: "Our Payment Partners are Industry Leaders.",
    },
    {
      icon: "https://www.rentrip.in/assets/images/icons/traffic.webp", // Replace with your image/icon
      title: "Wide Range",
      description: "Choose from the Wide Range of Self Drive Vehicles",
    },
    {
      icon: "https://www.rentrip.in/assets/images/icons/person.webp", // Replace with your image/icon
      title: "Verified Dealers",
      description: "Every Single Dealer is Committed to Quality Service.",
    },
    {
      icon: "https://www.rentrip.in/assets/images/icons/cash.webp", // Replace with your image/icon
      title: "100% Moneyback",
      description: "Not Happy With Service, Take Your Money Back.",
    },
  ];

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 "
            >
              <div className="size-28 rounded-full hover:shadow-2xl transition-all duration-300 flex justify-center items-center p-4">
                <img src={feature.icon} alt={feature.title} className="size-18"/>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
