const StoreLocationComponent = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">
        Our Store Location
      </h1>
      <div className="">
        <div className="bg-black shadow-md rounded-lg p-6 lg:flex lg:items-center">
          <div className="lg:w-[50%]">
            <h2 className="text-xl font-bold mb-2 text-white">
              Canada Russia Bypass
            </h2>
            <p className="text-white mb-4">
              345, No: lalGulapi Road, Canada Russian
            </p>
            <p className="text-white mb-4">
              If you only need to display information about a store without
              including an actual map component, you can simplify the component
              to focus on displaying the store details.
            </p>
            <p className="text-white">Contact Number: +054895458459845</p>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg lg:w-[50%]">
            <iframe
              className="w-full h-80 md:h-96 lg:h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14597.918151548545!2d90.35986113230693!3d23.837099735232695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1720633745128!5m2!1sen!2sbd"
              title="Store Location Map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocationComponent;
