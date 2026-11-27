export interface MenuOption {
  label: string;
  price: string;
}

export interface MenuItem {
  name: string;
  price: string;
  unit?: string;
  desc?: string;
  badges?: string[];
  options?: MenuOption[];
  featured?: boolean;
  isGroupSharing?: boolean;
  drinkType?: string;
}

export interface MenuGroup {
  name: string;
  banner?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  domain: "food" | "drinks";
  tabLabel: string;
  title: string;
  subtitle: string;
  banner?: string;
  isGroupCategory?: boolean;
  groups: MenuGroup[];
}

export type MenuMode = "all" | "food" | "drinks";

export interface DrinkSubfilter {
  id: string;
  label: string;
}

export const DRINK_SUBFILTERS: DrinkSubfilter[] = [
  { id: "all", label: "All Drinks" },
  { id: "hot-tea", label: "Hot Teas & Infusions" },
  { id: "coffee-porridge", label: "Coffee Bar & Porridge" },
  { id: "cold", label: "Cold Juices, Sodas & Water" },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast-bites",
    domain: "food",
    tabLabel: "Breakfast & Morning Bites",
    title: "Breakfast Snacks & Morning Bites",
    subtitle: "Fresh Kenyan breakfast favorites & morning classics",
    groups: [
      {
        name: "Morning Selection",
        items: [
          {
            name: "Beef Sausages (Pair)",
            price: "200.00",
            desc: "Two juicy, pan-seared prime beef sausages.",
            badges: ["Pair"],
          },
          {
            name: "Eggs Your Way (Pair)",
            price: "200.00",
            desc: "Farm-fresh eggs fried, boiled, or scrambled.",
            badges: ["Pair", "Vegetarian"],
          },
          {
            name: "Mandazi (Pair)",
            price: "150.00",
            desc: "Golden-fried, lightly spiced sweet dough pillows.",
            badges: ["Pair", "Traditional"],
          },
          {
            name: "Boiled Arrow Roots (Nduma)",
            price: "150.00",
            desc: "Tender farm-fresh arrow roots.",
            badges: ["Traditional", "Healthy"],
          },
          {
            name: "Steamed Sweet Potatoes (Ngwaci)",
            price: "150.00",
            desc: "Naturally sweet local potatoes.",
            badges: ["Traditional", "Healthy"],
          },
          {
            name: "Beef Samosas (Pair)",
            price: "150.00",
            desc: "Crispy pastry pockets filled with spiced beef.",
            badges: ["Pair"],
          },
          {
            name: "Toast with Butter (4 Pcs)",
            price: "100.00",
            desc: "Golden white or brown bread with butter.",
            badges: ["4 Pcs", "Vegetarian"],
          },
        ],
      },
    ],
  },
  {
    id: "main-courses",
    domain: "food",
    tabLabel: "Main Courses",
    title: "Main Courses",
    subtitle: "African Specialty & Fish Dishes",
    banner:
      "All main course food orders include an accompaniment of either Rice, Ugali, or Chapati with vegetables on the side.",
    groups: [
      {
        name: "African Specialty & Fish Dishes",
        items: [
          {
            name: "Half Wet-Fried Chicken Kienyeji",
            price: "1,300.00",
            desc: "Free-range traditional chicken pot-boiled and simmered in rich natural flavors.",
            badges: ["Kienyeji", "+ Accompaniment & Veg"],
          },
          {
            name: "Whole Tilapia Fish",
            price: "1,200.00",
            desc: "Fresh Lake Victoria tilapia deep-fried crisp in rich coconut or wet-fry tomato-coriander sauce.",
            badges: ["Lake Victoria", "+ Accompaniment & Veg"],
          },
          {
            name: "1/2 Kg Goat Meat Package",
            price: "1,000.00",
            desc: "Succulent prime goat cuts roasted, stewed, or stir-fried in tomatoes & fresh dhania.",
            badges: ["1/2 Kg", "+ Accompaniment & Veg"],
          },
          {
            name: "Fish Fillet",
            price: "1,000.00",
            desc: "Boneless Lake Victoria Nile perch pan-seared golden brown with zesty lemon-herb butter sauce.",
            badges: ["Boneless", "+ Accompaniment & Veg"],
          },
          {
            name: "Visum Beef Stew (1/2 Kg)",
            price: "950.00",
            desc: "Soft slow-cooked beef cubes simmered with carrots, tomatoes, onions, hoho & dhania.",
            badges: ["House Signature", "+ Accompaniment & Veg"],
          },
          {
            name: "Dry-Fried Beef Liver",
            price: "650.00",
            desc: "Tender sliced beef liver pan-fried with colorful sweet bell peppers and caramelized onions.",
            badges: ["+ Accompaniment & Veg"],
          },
          {
            name: "Traditional Matumbo",
            price: "550.00",
            desc: "Slow pot-boiled tripe pan-fried with aromatic onions, garlic, and savory seasoning.",
            badges: ["Traditional", "+ Accompaniment & Veg"],
          },
          {
            name: "Green Githeri Special",
            price: "400.00",
            desc: "Hearty green maize and garden peas boiled and sautéed with fresh garden spinach.",
            badges: ["Vegetarian", "+ Accompaniment & Veg"],
          },
        ],
      },
    ],
  },
  {
    id: "party-sharing",
    domain: "food",
    tabLabel: "Party & Group Packages",
    title: "Party & Group Sharing Packages",
    subtitle: "Generous platters & celebratory feasts for groups",
    isGroupCategory: true,
    banner:
      "Served with 2 Accompaniments (Ugali, Rice, or Chapati & Seasonal Vegetables).",
    groups: [
      {
        name: "Celebration & Sharing Feasts",
        items: [
          {
            name: "Whole Kenyan Goat",
            price: "36,000.00",
            featured: true,
            isGroupSharing: true,
            desc: "Slow-braised tender, succulent whole goat meat traditionally prepared with matumbo, served with portions of 20 Chapatis, 10 Ugali & 10 Rice.",
            badges: [
              "Featured Banquet",
              "Group Sharing",
              "20 Chapatis + 10 Ugali + 10 Rice",
            ],
          },
          {
            name: "Full Wet-Fried Chicken Kienyeji",
            price: "2,500.00",
            isGroupSharing: true,
            desc: "Whole traditional free-range chicken slow-cooked in rich savory broth.",
            badges: ["Whole Chicken", "Group Sharing", "+2 Accompaniments"],
          },
          {
            name: "Visum Special Capon Chicken Platter",
            price: "2,000.00",
            isGroupSharing: true,
            desc: "Whole herb-marinated roasted or grilled chicken.",
            badges: ["Whole Capon", "Group Sharing", "+2 Accompaniments"],
          },
          {
            name: "1 Kg Goat Meat Package",
            price: "2,000.00",
            isGroupSharing: true,
            desc: "Char-roasted, stewed, or stir-fried prime goat.",
            badges: ["1 Kg Prime Goat", "Group Sharing", "+2 Accompaniments"],
          },
          {
            name: "Tumbukiza (1 Kg Beef or Goat)",
            price: "1,900.00",
            isGroupSharing: true,
            desc: "Simmered meat, potatoes & greens.",
            badges: ["1 Kg Pot", "Group Sharing", "+2 Accompaniments"],
          },
          {
            name: "1 Kg Beef Celebration Package",
            price: "1,800.00",
            isGroupSharing: true,
            desc: "Prime beef cuts stir-fried, stewed, or roasted to your liking.",
            badges: ["1 Kg Beef", "Group Sharing", "+2 Accompaniments"],
          },
        ],
      },
    ],
  },
  {
    id: "accompaniments-sides",
    domain: "food",
    tabLabel: "Accompaniments & Sides",
    title: "Accompaniments & Sides",
    subtitle: "Extra orders of fresh Kenyan staples & garden greens",
    groups: [
      {
        name: "Extra Orders",
        items: [
          {
            name: "Brown Ugali / White Ugali",
            price: "150 / 100",
            desc: "Freshly prepared traditional Kenyan maize meal.",
            badges: ["Traditional"],
            options: [
              { label: "Brown Ugali", price: "150.00" },
              { label: "White Ugali", price: "100.00" },
            ],
          },
          {
            name: "Brown Chapati / White Chapati",
            price: "150 / 100",
            desc: "Soft, flaky, pan-layered wholemeal or white flatbread.",
            badges: ["Freshly Layered"],
            options: [
              { label: "Brown Chapati", price: "150.00" },
              { label: "White Chapati", price: "100.00" },
            ],
          },
          {
            name: "Seasonal Vegetables",
            price: "200.00",
            desc: "Fresh market greens lightly steamed and sautéed crisp.",
            badges: ["Vegetarian"],
          },
          {
            name: "Vegetable Fried Rice",
            price: "150.00",
            desc: "Fluffy aromatic rice wok-tossed with diced garden vegetables.",
            badges: ["Vegetarian"],
          },
          {
            name: "Mixed Veg / Sautéed Spinach / Fresh Kachumbari",
            price: "150 / 150 / 100",
            desc: "Garden spinach or zesty tomato-onion salsa.",
            badges: ["Vegetarian", "Fresh Sides"],
            options: [
              { label: "Mixed Veg", price: "150.00" },
              { label: "Sautéed Spinach", price: "150.00" },
              { label: "Fresh Kachumbari", price: "100.00" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "totos-quick-bites",
    domain: "food",
    tabLabel: "Toto's & Quick Bites",
    title: "Toto's Corner & Quick Bites",
    subtitle: "Crispy lounge bites, fries & family-friendly favorites",
    groups: [
      {
        name: "Quick Bites & Fries Combos",
        items: [
          {
            name: "Crispy Chicken Wings",
            price: "500.00",
            desc: "Tender golden-fried tossed chicken wings.",
            badges: ["Lounge Favorite"],
          },
          {
            name: "Pan-Seared Liver Bites",
            price: "500.00",
            desc: "Bite-sized prime beef liver sautéed with onions.",
            badges: [],
          },
          {
            name: "Fish Fingers with Chips",
            price: "500.00",
            desc: "Breaded Nile perch strips with hot French fries.",
            badges: ["Includes Fries"],
          },
          {
            name: "Two Sausages with Chips",
            price: "500.00",
            desc: "Beef sausages paired with golden fries.",
            badges: ["Includes Fries"],
          },
          {
            name: "Savory Chicken Gizzards",
            price: "450.00",
            desc: "Slow-tenderized gizzards pan-fried with aromatic garlic, onions, and fresh dhania.",
            badges: ["Chef Special"],
          },
          {
            name: "Beef Samosas & Chips / Sausage & Chips",
            price: "300 / 350",
            desc: "Samosas or sausage & fries.",
            badges: ["Includes Fries"],
            options: [
              { label: "Samosas & Chips", price: "300.00" },
              { label: "Sausage & Chips", price: "350.00" },
            ],
          },
          {
            name: "Potato Bhajia / Sautéed Potato Wedges",
            price: "350 / 300",
            desc: "Battered golden wedges.",
            badges: ["Vegetarian"],
            options: [
              { label: "Potato Bhajia", price: "350.00" },
              { label: "Sautéed Potato Wedges", price: "300.00" },
            ],
          },
          {
            name: "Meatballs with Chips",
            price: "300.00",
            desc: "Seasoned beef meatballs with fries.",
            badges: ["Includes Fries"],
          },
          {
            name: "Chips Masala / Plain Chips",
            price: "300 / 250",
            desc: "Crispy golden fries in spiced tomato masala or classic.",
            badges: ["Vegetarian"],
            options: [
              { label: "Chips Masala", price: "300.00" },
              { label: "Plain Chips", price: "250.00" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    domain: "food",
    tabLabel: "Desserts & Sweets",
    title: "Desserts & Sweet Treats",
    subtitle: "Indulgent ice cream scoops & fresh Kenyan orchard fruits",
    groups: [
      {
        name: "Sweet Selection",
        items: [
          {
            name: "Ice Cream Trio",
            price: "450.00",
            desc: "Three indulgent scoops of Vanilla, Chocolate, and Strawberry.",
            badges: ["3 Scoops"],
          },
          {
            name: "Fruit Salad with Ice Cream / Tropical Fruit Salad",
            price: "350 / 250",
            desc: "Fresh seasonal Kenyan fruits.",
            badges: ["Fresh Fruit"],
            options: [
              { label: "Fruit Salad with Ice Cream", price: "350.00" },
              { label: "Tropical Fruit Salad", price: "250.00" },
            ],
          },
          {
            name: "Single Scoop Ice Cream",
            price: "150.00",
            desc: "Daily single scoop.",
            badges: [],
          },
        ],
      },
    ],
  },
  {
    id: "beverages",
    domain: "drinks",
    tabLabel: "Beverages",
    title: "Beverages",
    subtitle: "Hot Infusions, Coffee Bar & Cold Drinks",
    groups: [
      {
        name: "Hot Infusions, Coffee Bar & Cold Drinks",
        items: [
          {
            name: "Delmonte Juice (1 Ltr) / Freshly Squeezed Juice Glass",
            price: "500 / 200",
            drinkType: "cold",
            desc: "Chilled fruit blend or fresh juice.",
            badges: ["Chilled"],
            options: [
              { label: "Delmonte Juice (1 Ltr)", price: "500.00" },
              { label: "Freshly Squeezed Juice Glass", price: "200.00" },
            ],
          },
          {
            name: "Pure Special Brewed Tea",
            price: "450.00",
            drinkType: "hot-tea",
            desc: "Excellent Kenyan Brewed Tea on only milk slowly simmered to perfection.",
            badges: ["Pure Milk Tea", "Signature"],
          },
          {
            name: "Dawa Served with Honey",
            price: "350.00",
            drinkType: "hot-tea",
            desc: "Hot infusion of fresh crushed ginger, lemon, and Kenyan honey.",
            badges: ["Wellness"],
          },
          {
            name: "Wimbi Porridge",
            price: "300.00",
            drinkType: "coffee-porridge",
            desc: "Warm, nourishing traditional finger-millet porridge.",
            badges: ["Traditional", "Healthy"],
          },
          {
            name: "Artisanal Tea Pots",
            price: "250.00",
            drinkType: "hot-tea",
            desc: "Pot of Black, White, Green, Lemon, or Spiced Masala Tea.",
            badges: ["Tea Pot"],
          },
          {
            name: "Black Tea with Lemon",
            price: "200.00",
            drinkType: "hot-tea",
            desc: "Brisk Kenyan black tea with fresh lemon.",
            badges: [],
          },
          {
            name: "Coffee & Tea Mug Station",
            price: "200 – 100",
            drinkType: "coffee-porridge",
            desc: "Freshly pulled espresso specialties, coffee mugs, and rich hot chocolate.",
            badges: ["Barista Station"],
            options: [
              { label: "Double Espresso", price: "200.00" },
              {
                label: "Cappuccino / Latte / Mochaccino / Coffee / Hot Chocolate",
                price: "150.00",
              },
              { label: "Single Espresso", price: "100.00" },
            ],
          },
          {
            name: "Chilled Sodas & Water",
            price: "200 – 100",
            drinkType: "cold",
            desc: "Refreshing bottled mineral water and chilled carbonated sodas.",
            badges: ["Cold Drinks"],
            options: [
              { label: "Keringet 1L", price: "200.00" },
              { label: "Safari 1L", price: "150.00" },
              { label: "Safari 500ml", price: "100.00" },
              { label: "Soda", price: "100.00" },
            ],
          },
        ],
      },
    ],
  },
];
