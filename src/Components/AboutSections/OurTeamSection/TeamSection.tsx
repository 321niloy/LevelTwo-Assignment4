const CardData = [
  {
    name: "Card 1",
    description: "Description for Card 1",
    contactNumber: "+1234567890",
    image: "https://i.ibb.co/VNsk4Tv/nine.png", // Replace with actual image URLs
  },
  {
    name: "Card 2",
    description: "Description for Card 2",
    contactNumber: "+9876543210",
    image: "https://i.ibb.co/sgW4YgY/eignt.png", // Replace with actual image URLs
  },
  {
    name: "Card 3",
    description: "Description for Card 3",
    contactNumber: "+2468109753",
    image: "https://i.ibb.co/hKGfN3z/eleven.png", // Replace with actual image URLs
  },
  {
    name: "Card 4",
    description: "Description for Card 4",
    contactNumber: "+1357924680",
    image: "https://i.ibb.co/PG77kbW/seven.jpg", // Replace with actual image URLs
  },
  {
    name: "Card 5",
    description: "Description for Card 5",
    contactNumber: "+1122334455",
    image: "https://i.ibb.co/zJgqMKx/six.png", // Replace with actual image URLs
  },
  {
    name: "Card 6",
    description: "Description for Card 6",
    contactNumber: "+9988776655",
    image: "https://i.ibb.co/TqW95Cs/ten.jpg", // Replace with actual image URLs
  },
];

const TeamSection = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-serif text-red-500 mb-10 mt-32">
        Our Team Section
      </h1>
      <div className="flex flex-wrap justify-center lg:gap-14">
        {CardData.map((card, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-black"
          >
            <img className="w-full h-auto" src={card.image} alt={card.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.name}</div>
              <p className="text-white text-base">{card.description}</p>
              <p className="text-white text-base mt-2">
                Contact: {card.contactNumber}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
