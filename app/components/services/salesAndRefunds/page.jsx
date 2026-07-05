import React from "react";

const page = () => {
  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full md:w-[90%] h-full py-2!">
        <div className=" p-2!">
          <h2 className="w-lg md:text-2xl font-bold capitalize">
            Sales and Refunds Policy
          </h2>
          <h4 className="text-sm capitalize py-2!">
            Effective Date: June 27, 2026
          </h4>
          <div className="pb-3! border-b border-gray-200">
            <p className="text-sm md:text-[16px] py-3!">
              At Priti Mart, we strive to provide high-quality products and a
              smooth shopping experience. This Sales and Refunds Policy explains
              our terms regarding purchases, cancellations, returns, exchanges,
              and refunds.
            </p>
            <p className="text-sm md:text-[16px] py-3!">
              By placing an order on Priti Mart, you agree to the terms outlined
              below.
            </p>
          </div>
          <div className="py-3!">
            <h2 className="py-3! text-2xl font-bold">1. Order Confirmation</h2>
            <p className="text-sm md:text-[16px] py-3!">
              After placing an order, you will receive an order confirmation via
              email, SMS, or through your account dashboard.
            </p>
            <p className="text-sm md:text-[16px] py-3!">
              Please note that receiving an order confirmation does not
              guarantee acceptance of your order. Orders are subject to product
              availability, payment verification, and order review.
            </p>
          </div>
          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">2. Pricing</h2>

            <div className="px-10!">
              <ul className="list-disc! text-sm md:text-[16px] py-3!">
                <li>
                  All prices are displayed in Bangladeshi Taka (BDT) unless
                  otherwise stated.
                </li>
                <li>Prices may change without prior notice.</li>
                <li>
                  Promotional offers are valid only during the specified period.
                </li>
                <li>
                  In the event of a pricing error, Priti Mart reserves the right
                  to cancel or modify the affected order after notifying the
                  customer.
                </li>
              </ul>
            </div>
          </div>
          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">3. Payment Methods</h2>
            <h5 className="text-sm md:text-[16px] py-3!">
              We accept the payment methods available during checkout, which may
              include:
            </h5>
            <p className="text-sm md:text-[16px] py-3!">Cookies help us:</p>

            <div className="">
              <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
                <li>Cash on Delivery (COD)</li>
                <li>
                  Mobile Financial Services (such as bKash, Nagad, or Rocket)
                </li>
                <li>Debit and Credit Cards</li>
                <li>Online Payment Gateways</li>
              </ul>

              <h5 className="text-sm md:text-[16px] py-3!">
                Orders will be processed after successful payment verification
                when applicable.
              </h5>
            </div>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">4. Order Cancellation</h2>
            <h5 className="text-sm md:text-[16px] py-3!">
              Customers may request to cancel an order before it has been packed
              or shipped.
            </h5>
            <p className="text-sm md:text-[16px] py-3!">
              Priti Mart reserves the right to cancel any order due to:
            </p>

            <div className="px-10!">
              <ul className="list-disc! text-sm md:text-[16px] py-3!">
                <li>Product unavailability</li>
                <li>Pricing or technical errors</li>
                <li>Suspected fraudulent activity</li>
                <li>Incomplete or incorrect customer information</li>
              </ul>
            </div>

            <h5 className="text-sm md:text-[16px] py-3!">
              If payment has already been received, any eligible refund will be
              processed according to this policy.
            </h5>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">
              5. Shipping and Delivery
            </h2>
            <h5 className="text-sm md:text-[16px] py-3!">
              Estimated delivery times may vary depending on your location and
              courier service
            </h5>
            <p className="text-sm md:text-[16px] py-3!">
              Delivery delays may occur due to:
            </p>

            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>Public holidays</li>
              <li>Weather conditions</li>
              <li>Natural disasters</li>
              <li>Courier service disruptions</li>
              <li>Other circumstances beyond our reasonable control</li>
            </ul>

            <p className="text-sm md:text-[16px] py-3!">
              Shipping charges, if applicable, will be displayed during
              checkout.
            </p>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">6. Return Eligibility</h2>
            <p className="text-sm md:text-[16px] py-3!">
              You may request a return if:
            </p>

            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>The wrong product was delivered.</li>
              <li>The product arrived damaged or defective.</li>
              <li>The product was incomplete or missing accessories.</li>
              <li>The product received does not match the order.</li>
            </ul>
            <p className="text-sm md:text-[16px] py-3!">
              You may request a return if:
            </p>

            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>
                The request should be made within 7 days of receiving the
                product.
              </li>
              <li>The item must be unused and in its original condition.</li>
              <li>
                Original packaging, labels, invoices, and accessories should be
                included whenever possible.
              </li>
            </ul>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">
              7. Non-Returnable Items
            </h2>
            <p className="text-sm md:text-[16px] py-3!">
              The following items are generally not eligible for return unless
              they arrive damaged or defective:
            </p>
            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>Personal care and hygiene products after opening</li>
              <li>Cosmetics and skincare products that have been used</li>
              <li>Gift cards or vouchers</li>
              <li>Clearance or final sale items</li>
              <li>Products specifically marked as non-returnable</li>
            </ul>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">8. Refund Policy</h2>
            <p className="text-sm md:text-[16px] py-3!">
              Once your returned item has been received and inspected:
            </p>
            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>
                Approved refunds will be processed using the original payment
                method whenever possible.
              </li>
              <li>
                Cash on Delivery orders may be refunded through bank transfer or
                mobile financial services.
              </li>
              <li>
                Refund processing typically takes 5–10 business days, depending
                on your payment provider.
              </li>
            </ul>
            <p className="text-sm md:text-[16px] py-3!">
              Once your returned item has been received and inspected:
            </p>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">9. Exchange Policy</h2>
            <p className="text-sm md:text-[16px] py-3!">
              Eligible products may be exchanged if:
            </p>

            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>The wrong item was delivered.</li>
              <li>The product is damaged or defective.</li>
              <li>The requested replacement product is available in stock.</li>
            </ul>
            <p className="text-sm md:text-[16px] py-3!">
              If the requested replacement is unavailable, a refund or store
              credit may be offered.
            </p>
          </div>

          <div className="py-3! border-b border-gray-200">
            <h2 className="py-3! text-2xl font-bold">
              10. Damaged or Incorrect Products
            </h2>
            <p className="text-sm md:text-[16px] py-3!">
              If you receive a damaged, defective, or incorrect item, please
              contact our customer support as soon as possible.
            </p>
            <p className="text-sm md:text-[16px] py-3!">
              To help us process your request quickly, please provide:
            </p>

            <ul className="list-disc! text-sm md:text-[16px] py-3! px-10!">
              <li>Your order number</li>
              <li>Clear photos of the product</li>
              <li>Photos of the packaging (if applicable)</li>
              <li>A brief description of the issue</li>
            </ul>
          </div>

          <div className="py-3!">
            <h2 className="py-3! text-2xl font-bold">10. Contact Us</h2>
            <p className="text-sm md:text-[16px] py-3!">
              If you have any questions about this Sales and Refunds Policy or
              need assistance with an order, please contact us:
            </p>
            <h2 className="text-lg md:text-2xl">Priti Shop</h2>
            <h3 className="py-2!">Email: email@example.com</h3>
            <h3 className="py-2!">Phone: +880 1XXXXXXXXX</h3>
            <h3 className="py-2!">
              Website:{" "}
              <a
                href="https://priti-mart.vercel.app/"
                className="underline hover:text-blue-400 cursor-pointer"
              >
                https://priti-mart.vercel.app/
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
