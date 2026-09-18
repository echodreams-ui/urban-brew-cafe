export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'coffee', label: 'Artisan Coffee' },
  { id: 'breakfast', label: 'All-Day Breakfast' },
  { id: 'snacks', label: 'Snacks & Bites' },
  { id: 'mains', label: 'Main Course' },
  { id: 'desserts', label: 'Desserts & Bakes' },
  { id: 'beverages', label: 'Cold Beverages' }
];

export const MENU_ITEMS = [
  // COFFEE
  {
    id: 'c-1',
    category: 'coffee',
    name: 'Classic Vietnamese Cold Coffee',
    description: 'Slow-dripped dark roast coffee over condensed milk and crushed ice for a rich, silky kick.',
    price: 189,
    badge: "Bestseller",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c-2',
    category: 'coffee',
    name: 'Spanish Caramel Latte',
    description: 'Freshly pulled double espresso shot blended with textured whole milk and artisanal salted caramel drizzle.',
    price: 219,
    badge: "Chef's Pick",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c-3',
    category: 'coffee',
    name: 'Hazelnut Cappuccino',
    description: 'Rich Indian single-origin Arabica espresso layered with roasted hazelnut syrup and velvety micro-foam.',
    price: 199,
    badge: "Popular",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c-4',
    category: 'coffee',
    name: 'Urban Brew Cold Brew',
    description: 'Steeped for 18 hours using Chikmagalur beans. Exceptionally smooth, low acidity, notes of dark chocolate.',
    price: 179,
    badge: "Signature",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'c-5',
    category: 'coffee',
    name: 'Classic Flat White',
    description: 'Expertly steamed milk poured delicately over a concentrated double ristretto for intense coffee clarity.',
    price: 189,
    badge: null,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=700&q=80'
  },

  // BREAKFAST
  {
    id: 'b-1',
    category: 'breakfast',
    name: 'Sourdough Avocado Toast',
    description: 'Toasted artisanal sourdough crowned with smashed Haas avocado, cherry tomatoes, feta crumbles, and roasted seeds.',
    price: 269,
    badge: "Bestseller",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'b-2',
    category: 'breakfast',
    name: 'Truffled Scrambled Eggs on Brioche',
    description: 'Creamy French-style eggs infused with white truffle essence served on toasted buttery brioche with garlic herb butter.',
    price: 249,
    badge: "Chef's Pick",
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'b-3',
    category: 'breakfast',
    name: 'Nutella & Banana French Toast',
    description: 'Golden brioche soaked in spiced cinnamon batter, layered with warm Nutella, fresh bananas, and toasted almonds.',
    price: 239,
    badge: "Popular",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'b-4',
    category: 'breakfast',
    name: 'Sunny Side English Breakfast Platter',
    description: 'Twin fried eggs, baked beans, sautéed button mushrooms, grilled herbed tomatoes, hash browns, and sourdough toast.',
    price: 329,
    badge: null,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80'
  },

  // SNACKS
  {
    id: 's-1',
    category: 'snacks',
    name: 'Crispy Truffle Parmesan Fries',
    description: 'Hand-cut golden skin-on potatoes tossed in black truffle oil, freshly grated parmesan, and smoked rosemary salt.',
    price: 199,
    badge: "Popular",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 's-2',
    category: 'snacks',
    name: 'Paneer Tikka Sourdough Panini',
    description: 'Smoked tandoori cottage cheese, grilled bell peppers, mint labneh mayo, and melted mozzarella pressed in crusty sourdough.',
    price: 249,
    badge: "Bestseller",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 's-3',
    category: 'snacks',
    name: 'Smoked Barbecue Chicken Sliders',
    description: 'Tender pulled chicken tossed in house Hickory BBQ glaze, pickled jalapenos, and cheddar in mini brioche buns.',
    price: 289,
    badge: "Chef's Pick",
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 's-4',
    category: 'snacks',
    name: 'Herbed Garlic & Mozzarella Pull-Apart',
    description: 'Artisanal sourdough boule scored and stuffed with roasted garlic confit butter, bubbling mozzarella, and fresh parsley.',
    price: 219,
    badge: null,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80'
  },

  // MAIN COURSE
  {
    id: 'm-1',
    category: 'mains',
    name: 'Creamy Sundried Tomato & Pesto Penne',
    description: 'Al dente penne tossed in our signature cream pesto emulsion with sundried tomatoes, pine nuts, and aged parmesan shavings.',
    price: 329,
    badge: "Chef's Pick",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm-2',
    category: 'mains',
    name: 'Peri-Peri Grilled Chicken Bowl',
    description: 'Juicy flame-grilled chicken breast served over herbed brown rice pilaf, charred corn salsa, and house lime-dill yogurt.',
    price: 369,
    badge: "Bestseller",
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm-3',
    category: 'mains',
    name: 'Wood-Fired Margherita Pizza',
    description: 'San Marzano tomato sauce, hand-torn bocconcini mozzarella, fresh sweet basil, and extra virgin olive oil.',
    price: 349,
    badge: "Popular",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'm-4',
    category: 'mains',
    name: 'Cottage Cheese Steak in Pepper Gravy',
    description: 'Pan-seared marinated paneer steak resting on creamy garlic mash and charred seasonal greens with black pepper demi-glaze.',
    price: 339,
    badge: null,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80'
  },

  // DESSERTS
  {
    id: 'd-1',
    category: 'desserts',
    name: 'Lotus Biscoff Baked Cheesecake',
    description: 'Velvety New York cheesecake base topped with smooth melted Lotus Biscoff spread and crushed spiced biscuit crumb.',
    price: 249,
    badge: "Bestseller",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'd-2',
    category: 'desserts',
    name: 'Classic Espresso Tiramisu',
    description: 'Traditional Italian ladyfingers soaked in Urban Brew espresso and cocoa liquor, layered with whipped mascarpone cream.',
    price: 229,
    badge: "Chef's Pick",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'd-3',
    category: 'desserts',
    name: 'Warm Belgian Chocolate Brownie',
    description: 'Decadent 70% dark Belgian fudge brownie served warm with a scoop of Madagascar vanilla bean gelato.',
    price: 199,
    badge: "Popular",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'd-4',
    category: 'desserts',
    name: 'Fresh Berry Tartlet',
    description: 'Crisp butter sablé crust filled with Madagascar vanilla bean pastry cream and topped with fresh seasonal berries.',
    price: 219,
    badge: null,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'
  },

  // BEVERAGES
  {
    id: 'v-1',
    category: 'beverages',
    name: 'Peach & Mint Iced Tea',
    description: 'Slow-brewed Darjeeling black tea infused with natural white peach puree, fresh mint sprigs, and crushed ice.',
    price: 159,
    badge: "Popular",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'v-2',
    category: 'beverages',
    name: 'Wild Berry Hibiscus Cooler',
    description: 'Tart organic hibiscus infusion blended with crushed raspberries, fresh lime, and sparkling soda.',
    price: 179,
    badge: "Signature",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'v-3',
    category: 'beverages',
    name: 'Belgian Chocolate Thickshake',
    description: 'Rich dark chocolate ganache whipped with vanilla cream and chilled milk, topped with chocolate curls.',
    price: 219,
    badge: "Bestseller",
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'v-4',
    category: 'beverages',
    name: 'Kashmiri Saffron & Almond Shake',
    description: 'Chilled milk infused with authentic Pampore saffron, cardamom pods, crushed pistachios, and soaked almonds.',
    price: 239,
    badge: null,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80'
  }
];
