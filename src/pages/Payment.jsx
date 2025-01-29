import React from "react";

const Payment = () => {
  return (
    <div className="overflow-scroll">
      <div className="max-w-4xl mx-auto p-8 sm:overflow-scroll">
        <h2 className="text-3xl font-bold text-center mb-8">Payment Details</h2>

        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Billing Information</h3>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="johndoe@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="1234 5678 9876 5432"
                />
              </div>

              <div>
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  type="month"
                  id="expiry"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="123"
                />
              </div>

              <div>
                <label
                  htmlFor="billingAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Billing Address
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="123 Main Street"
                />
              </div>
            </div>

            <div className="mt-8 text-right">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
