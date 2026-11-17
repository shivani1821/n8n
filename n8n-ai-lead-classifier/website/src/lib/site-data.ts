import sourdough from "@/assets/sourdough.jpg";
import wholeWheat from "@/assets/whole-wheat.jpg";
import multigrain from "@/assets/multigrain.jpg";
import brioche from "@/assets/brioche.jpg";
import whiteBread from "@/assets/white-bread.jpg";
import garlicHerb from "@/assets/garlic-herb.jpg";

export const CONTACT = {
  email: "hello@crustandcrumb.com",
  phone: "+91 XXXXX XXXXX",
  address: "Your Bakery Address",
  hours: "Monday – Sunday, 8:00 AM – 8:00 PM",
};

export const PRODUCTS = [
  {
    name: "Classic Sourdough",
    price: 180,
    image: sourdough,
    description:
      "A beautifully crusty loaf with a soft, tangy centre. Naturally fermented and perfect for sandwiches, toast, or enjoying with your favourite spread.",
  },
  {
    name: "Whole Wheat Bread",
    price: 90,
    image: wholeWheat,
    description:
      "Soft, wholesome, and delicious. Made for everyday enjoyment, our whole wheat bread is the perfect breakfast and sandwich companion.",
  },
  {
    name: "Multigrain Bread",
    price: 130,
    image: multigrain,
    description:
      "A delicious combination of grains and seeds, offering a hearty texture and satisfying flavour in every slice.",
  },
  {
    name: "Golden Brioche",
    price: 160,
    image: brioche,
    description:
      "Rich, buttery, and wonderfully soft. Our golden brioche is a delightful treat for breakfast, desserts, and special occasions.",
  },
  {
    name: "Classic White Bread",
    price: 75,
    image: whiteBread,
    description:
      "Light, fluffy, and versatile. A timeless favourite that makes every sandwich and toast delicious.",
  },
  {
    name: "Garlic Herb Bread",
    price: 150,
    image: garlicHerb,
    description:
      "A flavourful loaf infused with aromatic garlic and herbs. Perfect alongside pasta, soups, and your favourite meals.",
  },
] as const;

export const formatPrice = (price: number) => `₹${price}`;
