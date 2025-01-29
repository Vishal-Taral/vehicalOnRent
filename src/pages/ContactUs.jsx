import React from "react";
import Banner from "../components/contactUsComponents/Banner";
import ContactInfo from "../components/contactUsComponents/ContactInfo";
import ContactForm from "../components/contactUsComponents/ContactForm";

const ContactUs = () => {
  const topDivData = [
    {
      title: "Contact US",
      instruction: "Say Hello",
      warning:
        "Your Email address will not be published. We promise not to spam!",
    },
  ];
  return (
    <div>
      <div>
        <section>
          <Banner />
        </section>
      </div>

      <div>
        <div className="text-center">
          {topDivData.map((data, index) => (
            <div key={index}>
              <h6 className="text-darkgoldenrod">{data.title}</h6>
              <h1 className="font-extrabold text-2xl">{data.instruction}</h1>
              <h6 className="font-normal">{data.warning}</h6>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <section>
            <ContactInfo />
          </section>

          <section>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
