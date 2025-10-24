// --- EXISTING IMAGE IMPORTS (REUSED FOR NEW DATA) ---
import CheesePizza from "../assets/images/cheese-pizza-375.jpg";
import PepperoniPizza from "../assets/images/pepperoni-pizza.jpg";
import MeatPizza from "../assets/images/meat-pizza.jpg";
import MargheritaPizza from "../assets/images/margherita-pizza.jpg";
import BBQPizza from "../assets/images/BBQ-chicken-pizza.jpg";
import Carbonara from "../assets/images/carbonara.jpeg";
import TakoyakiRegular from "../assets/images/Takoyaki-image/takoyaki-regular.jpg";
import DoubleCheeseHawaiian from "../assets/images/2 in 1 PIZZA/double-cheese-hawaiia.jpg";
import PizzaBurger_double from "../assets/images/PIZZA BURGER-image/double-cheese-on-top.jpg";
import FriesImage from "../assets/images/sushi-images/FRIES.jpg";
import Fries_FB1 from "../assets/images/FRIES ON TOP-image/FB1 – Fries + Drinks.jpg";
import Burger_b1_t1 from "../assets/images/Burger-image/burger-b1-t1.jpg";
import FriedNoodles_Plain from "../assets/images/FRIED NOODLES-image/Fried Noodles Plain.jpg";
import MilkteaImage from "../assets/images/new item/Milktea.png";
import IceMochaImg from "../assets/images/Hot Coffe-image/ice-mocha.jpg";
import Merienda_C1 from "../assets/images/MERIENDA MEALS-image/c1-cheese-burger-drinks.jpg";
import PizzaCombo_MealA from "../assets/images/PIZZA COMBO MEALS-image/Spaghetti + 1 Slice Pizza + Drinks.jpeg";
import Chicken_4pcs from "../assets/images/Chicken & Nuggets-image/4pcs-chicken.jpg";
import ChicksilogImg from "../assets/images/Silog Meals-image/chicksilog.jpg";
import ShawarmaSoloImg from "../assets/images/SHAWARMA CONE-image/shawarma-solo.jpg";
// Additional images for variety
import FruitTeaImg from "../assets/images/drinks-images/Lipton Green Tea.jpeg";
import FrappeImg from "../assets/images/drinks-images/SToK.webp";

export const products = [
  // --- PAPA JES'S PIZZA ---
  {
    id: "pj-double-cheese",
    ItemImg: CheesePizza,
    ItemName: "Double Cheese",
    ItemIngredients: "A classic favorite with double the cheese.",
    ItemPrice: "105.00",
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: "size", name: "Size", attributeOptions: [{ id: "regular", value: "Regular" }, { id: "large", value: "Large" }] }
    ],
    prices: { Regular: 105, Large: 140 },
  },
  {
    id: "pj-ham-cheese",
    ItemImg: MeatPizza,
    ItemName: "Ham & Cheese",
    ItemIngredients: "Savory ham paired with melted cheese.",
    ItemPrice: "105.00",
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: "size", name: "Size", attributeOptions: [{ id: "regular", value: "Regular" }, { id: "large", value: "Large" }] }
    ],
    prices: { Regular: 105, Large: 140 },
  },
  {
    id: 'pj-cheesy-garlic',
    ItemImg: MargheritaPizza,
    ItemName: 'Cheesy Garlic',
    ItemIngredients: 'Rich garlic flavor with plenty of cheese.',
    ItemPrice: '110.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 110, Large: 165 }
  },
  {
    id: 'pj-hawaiian',
    ItemImg: BBQPizza,
    ItemName: 'Hawaiian',
    ItemIngredients: 'A tropical delight with ham and pineapple.',
    ItemPrice: '125.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 125, Large: 155 }
  },
  {
    id: 'pj-pepperoni',
    ItemImg: PepperoniPizza,
    ItemName: 'Pepperoni',
    ItemIngredients: 'Classic pepperoni pizza with a zesty flavor.',
    ItemPrice: '145.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 145, Large: 165 }
  },
  {
    id: 'pj-shawarma-pizza',
    ItemImg: Carbonara,
    ItemName: 'Shawarma Pizza',
    ItemIngredients: 'A unique fusion of shawarma and pizza flavors.',
    ItemPrice: '155.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 155, Large: 175 }
  },
  {
    id: 'pj-all-meat',
    ItemImg: MeatPizza,
    ItemName: 'All Meat',
    ItemIngredients: 'Loaded with a variety of delicious meats.',
    ItemPrice: '155.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 155, Large: 165 }
  },
  {
    id: 'pj-all-toppings',
    ItemImg: BBQPizza,
    ItemName: 'All Toppings',
    ItemIngredients: 'The ultimate pizza with all our toppings.',
    ItemPrice: '155.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 155, Large: 165 }
  },
  {
    id: 'pj-creamy-beef-mushroom',
    ItemImg: Carbonara,
    ItemName: 'Creamy Beef & Mushroom',
    ItemIngredients: 'Rich and creamy with savory beef and mushrooms.',
    ItemPrice: '145.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 145, Large: 155 }
  },
  {
    id: 'pj-supreme-delights',
    ItemImg: PepperoniPizza,
    ItemName: 'Supreme Delights',
    ItemIngredients: 'A supreme mix of toppings for a delightful taste.',
    ItemPrice: '155.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 155, Large: 175 }
  },
  {
    id: 'pj-takoyaki-pizza',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki Pizza',
    ItemIngredients: 'A fusion pizza with the flavors of takoyaki.',
    ItemPrice: '155.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 155, Large: 185 }
  },
  {
    id: 'pj-hawaiian-chicken',
    ItemImg: BBQPizza,
    ItemName: 'Hawaiian Chicken',
    ItemIngredients: 'A tropical twist with chicken and pineapple.',
    ItemPrice: '155.00',
    Category: "Papa Jes's PIZZA",
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'large', value: 'Large' }] }
    ],
    prices: { Regular: 155, Large: 185 }
  },

  // --- 2 IN 1 PIZZA ---
  {
    id: "2in1-double-cheese-hawaiian",
    ItemImg: DoubleCheeseHawaiian,
    ItemName: "2 in 1: Double Cheese, Hawaiian",
    ItemIngredients: "Half Double Cheese and half Hawaiian.",
    ItemPrice: "189.00",
    Category: "2 in 1 PIZZA",
    attributes: [],
  },
  {
    id: "2in1-ham-cheese-pepperoni",
    ItemImg: DoubleCheeseHawaiian,
    ItemName: "2 in 1: Ham & Cheese, Pepperoni",
    ItemIngredients: "Half Ham & Cheese and half Pepperoni.",
    ItemPrice: "189.00",
    Category: "2 in 1 PIZZA",
    attributes: [],
  },
  {
    id: "2in1-shawarma-creamy-beef",
    ItemImg: DoubleCheeseHawaiian,
    ItemName: "2 in 1: Shawarma, Creamy Beef Mushroom",
    ItemIngredients: "Half Shawarma and half Creamy Beef Mushroom.",
    ItemPrice: "199.00",
    Category: "2 in 1 PIZZA",
    attributes: [],
  },
  {
    id: "2in1-shawarma-hawaiian",
    ItemImg: DoubleCheeseHawaiian,
    ItemName: "2 in 1: Shawarma, Hawaiian",
    ItemIngredients: "Half Shawarma and half Hawaiian.",
    ItemPrice: "199.00",
    Category: "2 in 1 PIZZA",
    attributes: [],
  },

  // --- PIZZA BURGER ---
  {
    id: "pb-double-cheese",
    ItemImg: PizzaBurger_double,
    ItemName: "Pizza Burger: Double Cheese on Top",
    ItemIngredients: "A juicy burger with a double cheese pizza topping.",
    ItemPrice: "379.00",
    Category: "PIZZA BURGER",
    attributes: [],
  },
  {
    id: "pb-hawaiian",
    ItemImg: PizzaBurger_double,
    ItemName: "Pizza Burger: Hawaiian on Top",
    ItemIngredients: "A juicy burger with a Hawaiian pizza topping.",
    ItemPrice: "379.00",
    Category: "PIZZA BURGER",
    attributes: [],
  },
  {
    id: "pb-ham-cheese",
    ItemImg: PizzaBurger_double,
    ItemName: "Pizza Burger: Ham & Cheese on Top",
    ItemIngredients: "A juicy burger with a ham and cheese pizza topping.",
    ItemPrice: "399.00",
    Category: "PIZZA BURGER",
    attributes: [],
  },
  {
    id: "pb-pepperoni",
    ItemImg: PizzaBurger_double,
    ItemName: "Pizza Burger: Pepperoni on Top",
    ItemIngredients: "A juicy burger with a pepperoni pizza topping.",
    ItemPrice: "399.00",
    Category: "PIZZA BURGER",
    attributes: [],
  },
  
  // --- OVERLOAD PIZZA ---
  {
    id: 'op-shawarma',
    ItemImg: Carbonara,
    ItemName: 'Overload Pizza: Shawarma',
    ItemIngredients: 'Loaded with delicious shawarma toppings.',
    ItemPrice: '179.00',
    Category: 'OVERLOAD PIZZA',
    attributes: []
  },
  {
    id: 'op-hawaiian',
    ItemImg: BBQPizza,
    ItemName: 'Overload Pizza: Hawaiian',
    ItemIngredients: 'An overloaded version of the classic Hawaiian.',
    ItemPrice: '189.00',
    Category: 'OVERLOAD PIZZA',
    attributes: []
  },
  {
    id: 'op-pepperoni',
    ItemImg: PepperoniPizza,
    ItemName: 'Overload Pizza: Pepperoni',
    ItemIngredients: 'Packed with extra layers of pepperoni.',
    ItemPrice: '189.00',
    Category: 'OVERLOAD PIZZA',
    attributes: []
  },
  {
    id: 'op-all-meat',
    ItemImg: MeatPizza,
    ItemName: 'Overload Pizza: All Meat',
    ItemIngredients: 'A meat lover’s dream, fully loaded.',
    ItemPrice: '189.00',
    Category: 'OVERLOAD PIZZA',
    attributes: []
  },
  {
    id: 'op-all-toppings',
    ItemImg: BBQPizza,
    ItemName: 'Overload Pizza: All Toppings',
    ItemIngredients: 'Every topping you can imagine, loaded on one pizza.',
    ItemPrice: '189.00',
    Category: 'OVERLOAD PIZZA',
    attributes: []
  },
  {
    id: 'op-supreme-delights',
    ItemImg: PepperoniPizza,
    ItemName: 'Overload Pizza: Supreme Delights',
    ItemIngredients: 'The supreme pizza experience, overloaded.',
    ItemPrice: '189.00',
    Category: 'OVERLOAD PIZZA',
    attributes: []
  },

  // --- TAKOYAKI ---
  {
    id: "takoyaki-regular",
    ItemImg: TakoyakiRegular,
    ItemName: "Takoyaki: Regular",
    ItemIngredients: "Classic octopus-filled takoyaki balls.",
    ItemPrice: "45.00",
    Category: "Takoyaki",
    attributes: [
      { id: "pieces", name: "Pieces", attributeOptions: [{ id: "4pcs", value: "4pcs" }, { id: "8pcs", value: "8pcs" }, { id: "12pcs", value: "12pcs" }] }
    ],
    prices: { "4pcs": 45, "8pcs": 90, "12pcs": 135 },
  },
  {
    id: 'takoyaki-cheesy',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Cheesy',
    ItemIngredients: 'Takoyaki balls topped with melted cheese.',
    ItemPrice: '50.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 50, '8pcs': 95, '12pcs': 145 }
  },
  {
    id: 'takoyaki-ham-cheese',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Ham & Cheese',
    ItemIngredients: 'A savory mix of ham and cheese in every ball.',
    ItemPrice: '55.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 55, '8pcs': 105, '12pcs': 160 }
  },
  {
    id: 'takoyaki-crab-cari',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Crab Cari',
    ItemIngredients: 'Filled with delicious crab and cari sauce.',
    ItemPrice: '55.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 55, '8pcs': 105, '12pcs': 160 }
  },
  {
    id: 'takoyaki-crab-corn',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Crab Corn',
    ItemIngredients: 'A sweet and savory blend of crab and corn.',
    ItemPrice: '60.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 60, '8pcs': 110, '12pcs': 165 }
  },
  {
    id: 'takoyaki-cheesy-overload',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Cheesy Overload',
    ItemIngredients: 'For cheese lovers, an explosion of cheesy goodness.',
    ItemPrice: '75.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 75, '8pcs': 140, '12pcs': 210 }
  },
  {
    id: 'takoyaki-overload',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Overload',
    ItemIngredients: 'Loaded with a variety of extra toppings.',
    ItemPrice: '95.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 95, '8pcs': 140, '12pcs': 255 }
  },
  {
    id: 'takoyaki-baby-octopus',
    ItemImg: TakoyakiRegular,
    ItemName: 'Takoyaki: Baby Octopus',
    ItemIngredients: 'Featuring tender baby octopus in every bite.',
    ItemPrice: '95.00',
    Category: 'Takoyaki',
    attributes: [
      { id: 'pieces', name: 'Pieces', attributeOptions: [{ id: '4pcs', value: '4pcs' }, { id: '8pcs', value: '8pcs' }, { id: '12pcs', value: '12pcs' }] }
    ],
    prices: { '4pcs': 95, '8pcs': 195, '12pcs': 290 }
  },

  // --- SHAWARMA CONE ---
  {
    id: 'sc-solo',
    ItemImg: ShawarmaSoloImg,
    ItemName: 'Shawarma Solo',
    ItemIngredients: 'A single, satisfying shawarma cone.',
    ItemPrice: '40.00',
    Category: 'SHAWARMA CONE',
    attributes: []
  },
  {
    id: 'sc-3-for-100',
    ItemImg: ShawarmaSoloImg,
    ItemName: 'Shawarma 3 for 100',
    ItemIngredients: 'A great deal: three shawarma cones.',
    ItemPrice: '100.00',
    Category: 'SHAWARMA CONE',
    attributes: []
  },
  {
    id: 'sc-overload-solo',
    ItemImg: ShawarmaSoloImg,
    ItemName: 'Shawarma Overload Solo',
    ItemIngredients: 'One shawarma cone packed with extra fillings.',
    ItemPrice: '60.00',
    Category: 'SHAWARMA CONE',
    attributes: []
  },
  {
    id: 'sc-overload-3-for-169',
    ItemImg: ShawarmaSoloImg,
    ItemName: 'Shawarma 3 for 169 Overload',
    ItemIngredients: 'Three overloaded shawarma cones.',
    ItemPrice: '169.00',
    Category: 'SHAWARMA CONE',
    attributes: []
  },

  // --- FRIES ---
  {
    id: 'fries',
    ItemImg: FriesImage,
    ItemName: 'Fries',
    ItemIngredients: 'Crispy, golden-brown French fries.',
    ItemPrice: '25.00',
    Category: 'FRIES',
    attributes: [
      { id: 'size', name: 'Size', attributeOptions: [{ id: 'regular', value: 'Regular' }, { id: 'medium', value: 'Medium' }, { id: 'large', value: 'Large' }, { id: 'jumbo', value: 'Jumbo' }] }
    ],
    prices: { Regular: 25, Medium: 35, Large: 50, Jumbo: 80 }
  },

  // --- FRIES ON TOP ---
  {
    id: 'fot-fb1',
    ItemImg: Fries_FB1,
    ItemName: 'Fries On Top: FB1 - Fries + Drinks',
    ItemIngredients: 'A classic combo of fries and a refreshing drink.',
    ItemPrice: '39.00',
    Category: 'FRIES ON TOP',
    attributes: []
  },
  {
    id: 'fot-fb2',
    ItemImg: Fries_FB1,
    ItemName: 'Fries On Top: FB2 - Fries + Cheesestick + Drinks',
    ItemIngredients: 'Fries, a cheesestick, and a drink for a perfect snack.',
    ItemPrice: '49.00',
    Category: 'FRIES ON TOP',
    attributes: []
  },
  {
    id: 'fot-fb3',
    ItemImg: Fries_FB1,
    ItemName: 'Fries On Top: FB3 - Fries + Siomai + Cheesestick + Drinks',
    ItemIngredients: 'The ultimate snack combo with fries, siomai, and more.',
    ItemPrice: '59.00',
    Category: 'FRIES ON TOP',
    attributes: []
  },

  // --- BURGER ---
  {
    id: 'burger-egg-sandwich',
    ItemImg: Burger_b1_t1,
    ItemName: 'Egg Sandwich',
    ItemIngredients: 'A simple and classic egg sandwich.',
    ItemPrice: '25.00',
    Category: 'Burger',
    attributes: []
  },
  {
    id: 'burger-buy-1-take-1',
    ItemImg: Burger_b1_t1,
    ItemName: 'Burger Buy 1 Take 1',
    ItemIngredients: 'Two burgers for the price of one.',
    ItemPrice: '40.00',
    Category: 'Burger',
    attributes: []
  },
  {
    id: 'burger-cheese-buy-1-take-1',
    ItemImg: Burger_b1_t1,
    ItemName: 'Cheese Burger Buy 1 Take 1',
    ItemIngredients: 'Two delicious cheeseburgers in one great deal.',
    ItemPrice: '50.00',
    Category: 'Burger',
    attributes: []
  },
  {
    id: 'burger-double-cheese',
    ItemImg: Burger_b1_t1,
    ItemName: 'Double Cheese Burger',
    ItemIngredients: 'A hearty burger with double the cheese.',
    ItemPrice: '75.00',
    Category: 'Burger',
    attributes: []
  },
  {
    id: 'burger-hungarian-sausage',
    ItemImg: Burger_b1_t1,
    ItemName: 'Hungarian Sausage',
    ItemIngredients: 'A flavorful Hungarian sausage sandwich.',
    ItemPrice: '75.00',
    Category: 'Burger',
    attributes: []
  },
  {
    id: 'burger-footlong-overload',
    ItemImg: Burger_b1_t1,
    ItemName: 'Footlong Overload',
    ItemIngredients: 'A footlong sandwich packed with toppings.',
    ItemPrice: '99.00',
    Category: 'Burger',
    attributes: []
  },
  
  // --- FRIED NOODLES ---
  {
    id: 'fn-plain',
    ItemImg: FriedNoodles_Plain,
    ItemName: 'Fried Noodles Plain',
    ItemIngredients: 'Simple yet delicious stir-fried noodles.',
    ItemPrice: '35.00',
    Category: 'FRIED NOODLES',
    attributes: []
  },
  {
    id: 'fn-siomai',
    ItemImg: FriedNoodles_Plain,
    ItemName: 'Fried Noodles w/ Siomai',
    ItemIngredients: 'Fried noodles served with tasty siomai.',
    ItemPrice: '49.00',
    Category: 'FRIED NOODLES',
    attributes: []
  },
  {
    id: 'fn-overload',
    ItemImg: FriedNoodles_Plain,
    ItemName: 'Fried Noodles Overload',
    ItemIngredients: 'Loaded with extra ingredients for a full meal.',
    ItemPrice: '75.00',
    Category: 'FRIED NOODLES',
    attributes: []
  },
  
  // --- DRINKS (MILK TEA, COFFEE, ETC.) ---
  ...["Taro", "Hazelnut", "Blackforest", "Redvelvet", "Salted Caramel", "Mango Cheesecake", "Wintermelon", "Okinawa", "Cookies & Cream", "Dark Choco", "Chocolate", "Matcha", "Strawberry", "Avocado"].map(flavor => ({
    id: `milktea-classic-${flavor.toLowerCase().replace(/ /g, '-')}`,
    ItemImg: MilkteaImage,
    ItemName: `Milk Tea Classic: ${flavor}`,
    ItemIngredients: `Classic ${flavor} milk tea.`,
    ItemPrice: '29.00',
    Category: 'MILK TEA CLASSIC',
    attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
    prices: { '16oz': 29, '22oz': 39 }
  })),
  ...["Taro", "Hazelnut", "Blackforest", "Redvelvet", "Salted Caramel", "Mango Cheesecake", "Wintermelon", "Okinawa", "Cookies & Cream", "Dark Choco", "Chocolate", "Matcha", "Strawberry"].map(flavor => ({
      id: `milktea-oreo-${flavor.toLowerCase().replace(/ /g, '-')}`,
      ItemImg: MilkteaImage,
      ItemName: `Milk Tea Oreo: ${flavor}`,
      ItemIngredients: `Oreo series ${flavor} milk tea.`,
      ItemPrice: '49.00',
      Category: 'MILK TEA OREO',
      attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
      prices: { '16oz': 49, '22oz': 59 }
  })),
  ...["Strawberry", "Blueberry", "Passion", "Green Apple", "Lychee", "Lemon", "Four Season"].map(flavor => ({
      id: `fruit-tea-${flavor.toLowerCase().replace(/ /g, '-')}`,
      ItemImg: FruitTeaImg,
      ItemName: `Fruit Tea: ${flavor}`,
      ItemIngredients: `Refreshing ${flavor} fruit tea.`,
      ItemPrice: '29.00',
      Category: 'FRUIT TEA SERIES',
      attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
      prices: { '16oz': 29, '22oz': 39 }
  })),
    ...["Strawberry", "Blueberry", "Passion", "Green Apple", "Lychee", "Lemon", "Four Season"].map(flavor => ({
      id: `fruit-soda-${flavor.toLowerCase().replace(/ /g, '-')}`,
      ItemImg: FruitTeaImg,
      ItemName: `Fruit Soda: ${flavor}`,
      ItemIngredients: `Bubbly and refreshing ${flavor} fruit soda.`,
      ItemPrice: '39.00',
      Category: 'FRUIT SODA',
      attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
      prices: { '16oz': 39, '22oz': 49 }
  })),
  ...["Cookies & Cream", "Cheesecake Cream", "Taro Cream", "Matcha Cream", "Chocolate Cream", "Java Chip", "Choco Hazelnut", "Avocado Cream", "Strawberry Cream"].map(flavor => ({
      id: `frappe-${flavor.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
      ItemImg: FrappeImg,
      ItemName: `Frappe: ${flavor}`,
      ItemIngredients: `A creamy and delicious ${flavor} frappe.`,
      ItemPrice: '49.00',
      Category: 'FRAPPE',
      attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
      prices: { '16oz': 49, '22oz': 59 }
  })),
  ...["Ice Mocha", "Dalgona Latte", "Caramel Macchiato", "French Vanilla", "Hazelnut Latte", "Spanish Latte", "Salted Caramel"].map(flavor => ({
      id: `ice-coffee-${flavor.toLowerCase().replace(/ /g, '-')}`,
      ItemImg: IceMochaImg,
      ItemName: `Ice Coffee: ${flavor}`,
      ItemIngredients: `Chilled and refreshing ${flavor} ice coffee.`,
      ItemPrice: '49.00',
      Category: 'ICE COFFEE',
      attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
      prices: { '16oz': 49, '22oz': 59 }
  })),
    ...["French Vanilla", "Hazelnut Latte", "Spanish Latte", "Salted Caramel"].map(flavor => ({
      id: `hot-coffee-${flavor.toLowerCase().replace(/ /g, '-')}`,
      ItemImg: IceMochaImg,
      ItemName: `Hot Coffee: ${flavor}`,
      ItemIngredients: `A warm and comforting cup of ${flavor} coffee.`,
      ItemPrice: '59.00',
      Category: 'HOT COFFEE',
      attributes: [{ id: 'size', name: 'Size', attributeOptions: [{ id: '16oz', value: '16oz' }, { id: '22oz', value: '22oz' }] }],
      prices: { '16oz': 59, '22oz': 69 }
  })),

  // --- MERIENDA MEALS ---
  {
    id: 'merienda-c1',
    ItemImg: Merienda_C1,
    ItemName: 'Merienda C1 - Cheese Burger w/ Drinks',
    ItemIngredients: 'A satisfying cheese burger paired with a drink.',
    ItemPrice: '55.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },
  {
    id: 'merienda-c2',
    ItemImg: Merienda_C1,
    ItemName: 'Merienda C2 - Cheese Burger w/ Drinks & Fries',
    ItemIngredients: 'A complete meal with a cheese burger, fries, and a drink.',
    ItemPrice: '80.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },
  {
    id: 'merienda-c3',
    ItemImg: FriedNoodles_Plain,
    ItemName: 'Merienda C3 - Fried Noodles w/ Drinks',
    ItemIngredients: 'A quick and tasty meal of fried noodles and a drink.',
    ItemPrice: '75.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },
  {
    id: 'merienda-c4',
    ItemImg: TakoyakiRegular,
    ItemName: 'Merienda C4 - 8pcs Takoyaki w/ Drinks',
    ItemIngredients: 'A perfect snack of 8 takoyaki pieces and a drink.',
    ItemPrice: '125.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },
  {
    id: 'merienda-c5',
    ItemImg: PizzaCombo_MealA,
    ItemName: 'Merienda C5 - Spaghetti w/ Drinks',
    ItemIngredients: 'Classic spaghetti paired with a refreshing drink.',
    ItemPrice: '65.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },
  {
    id: 'merienda-c6',
    ItemImg: PizzaCombo_MealA,
    ItemName: 'Merienda C6 - Spaghetti, Fries, w/ Drinks',
    ItemIngredients: 'A filling meal of spaghetti, fries, and a drink.',
    ItemPrice: '99.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },
  {
    id: 'merienda-c7',
    ItemImg: FriedNoodles_Plain,
    ItemName: 'Merienda C7 - 12pcs Siomai w/ Drinks',
    ItemIngredients: 'A delicious serving of 12 siomai pieces with a drink.',
    ItemPrice: '65.00',
    Category: 'MERIENDA MEALS',
    attributes: []
  },

  // --- PIZZA COMBO MEALS ---
  {
    id: 'pcm-a',
    ItemImg: PizzaCombo_MealA,
    ItemName: 'Pizza Combo Meal A - Spaghetti, 1 Slice Pizza, w/ Drinks',
    ItemIngredients: 'A perfect combo of spaghetti, a slice of pizza, and a drink.',
    ItemPrice: '79.00',
    Category: 'PIZZA COMBO MEALS',
    attributes: []
  },
  {
    id: 'pcm-b',
    ItemImg: PizzaCombo_MealA,
    ItemName: 'Pizza Combo Meal B - 1pc Chicken, Rice, 1 Slice Pizza, Drinks',
    ItemIngredients: 'A hearty meal with chicken, rice, a pizza slice, and a drink.',
    ItemPrice: '129.00',
    Category: 'PIZZA COMBO MEALS',
    attributes: []
  },
  {
    id: 'pcm-c',
    ItemImg: PizzaCombo_MealA,
    ItemName: 'Pizza Combo Meal C - 1pc Chicken, Rice, Spaghetti, 1 Slice Pizza, Drinks',
    ItemIngredients: 'The ultimate combo for a complete and satisfying meal.',
    ItemPrice: '159.00',
    Category: 'PIZZA COMBO MEALS',
    attributes: []
  },

  // --- BROASTED CHICKEN & NUGGETS ---
  {
    id: 'bcn-b1',
    ItemImg: Chicken_4pcs,
    ItemName: 'B1 - 4pcs Chicken, Fries, Drinks',
    ItemIngredients: '4 pieces of broasted chicken with fries and a drink.',
    ItemPrice: '199.00',
    Category: 'BROASTED CHICKEN & NUGGETS',
    attributes: []
  },
  {
    id: 'bcn-b2',
    ItemImg: Chicken_4pcs,
    ItemName: 'B2 - 10pcs Nuggets, Fries, Drinks',
    ItemIngredients: '10 crispy nuggets served with fries and a drink.',
    ItemPrice: '189.00',
    Category: 'BROASTED CHICKEN & NUGGETS',
    attributes: []
  },
  
  // --- SILOG MEALS ---
  ...["Porksilog", "Chicksilog", "Tapsilog", "Tocilog"].map(flavor => ({
      id: `silog-${flavor.toLowerCase()}`,
      ItemImg: ChicksilogImg,
      ItemName: `${flavor}`,
      ItemIngredients: 'Unli Rice, Soup, and Free Drinks.',
      ItemPrice: '99.00',
      Category: 'Silog Meals',
      attributes: []
  })),
  ...["Hamsilog", "Longsilog", "Siomailog"].map(flavor => ({
      id: `silog-${flavor.toLowerCase()}`,
      ItemImg: ChicksilogImg,
      ItemName: `${flavor}`,
      ItemIngredients: 'Unli Rice, Soup, and Free Drinks.',
      ItemPrice: '79.00',
      Category: 'Silog Meals',
      attributes: []
  })),
];