import React from 'react';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = () => {

    const contactData = {
        downDivData: [
            {
                icon: faLocationDot,
                infoType: "Address",
                infoField: ["29 Sandy Lane, Weirton, WV, 26062 United States", "12 Exchange Street, Narragansett, RI, 2882 United States"]
            },
            {
                icon: faEnvelope,
                infoType: "Email",
                infoField: [
                    "vishaltaral@gmail.com", "rohanOdel1997@gmail.com"
                ]
            },
            {
                icon: faPhone,
                infoType: "Phone",
                infoField: [7767034533, 8007994566],
            },
        ]
    };

    return (
        <div className="p-5">
            <div className="mt-5">
                {contactData.downDivData.map((data1, index) => (
                    <div className="flex items-center mt-3" key={index}>
                        {/* Icon Container */}
                        <div className="w-16 h-16 rounded-full p-1 border border-dashed border-black flex justify-center items-center">
                            <div className="w-14 h-14 bg-darkgoldenrod flex justify-center items-center rounded-full">
                                <FontAwesomeIcon className="w-8" icon={data1.icon} />
                            </div>
                        </div>

                        {/* Information */}
                        <div className="ml-4">
                            <h4 className="font-semibold">{data1.infoType}</h4>
                            <div>
                                {data1.infoField.map((data2, index) => (
                                    <p className="leading-tight" key={index}>{data2}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactInfo;
