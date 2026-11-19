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
}

export interface MenuGroup {
  name: string;
  banner?: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  banner?: string;
  groups: MenuGroup[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast-hot",
    tabLabel: "Breakfast & Hot Drinks",
    title: "Breakfast & Hot Beverages",
    subtitle: "Morning Kenyan classics, brewed pots & infusions",
    groups: [
      {
        name: "Breakfast Snacks",
        banner:
          "Traditional Breakfast Selection — Choice of Any Item at KES 200.00 each",
        items: [
          {
            name: "Traditional Breakfast Selection",
            price: "200.00",
            unit: "Each Item",
            desc: "Choice of any item: Andazi (Pair), Boiled Arrow Roots, Steamed Sweet Potatoes, Boiled Eggs (Pair), or Wimbi Porridge.",
            badges: ["Traditional", "KES 200 Each"],
            options: [
              { label: "Andazi (Pair)", price: "200.00" },
              { label: "Boiled Arrow Roots", price: "200.00" },
              { label: "Steamed Sweet Potatoes", price: "200.00" },
              { label: "Boiled Eggs (Pair)", price: "200.00" },
              { label: "Wimbi Porridge", price: "200.00" },
            ],
          },
        ],
      },
      {
        name: "Hot Beverages — Teas",
        items: [
          {
            name: "Tea Pot (Black or White)",
            price: "150.00",
            desc: "Choice of classic Kenyan Black or White tea.",
            badges: ["Pot"],
          },
          {
            name: "Green Tea Pot",
            price: "200.00",
            desc: "Steeped whole-leaf green tea.",
            badges: ["Pot", "Herbal"],
          },
          {
            name: "Lemon Tea Pot",
            price: "150.00",
            desc: "Freshly brewed black tea infused with natural lemon.",
            badges: ["Pot"],
          },
          {
            name: "Masala Tea Pot",
            price: "200.00",
            desc: "Aromatic spiced milk tea brewed with cardamom, ginger & cinnamon.",
            badges: ["Pot", "Spiced"],
          },
        ],
      },
      {
        name: "Coffee & Hot Infusions",
        items: [
          {
            name: "Coffee Pot (Black or White)",
            price: "200.00",
            desc: "Freshly brewed Kenyan roasted coffee served in a pot.",
            badges: ["Pot"],
          },
          {
            name: "Cappuccino (Single)",
            price: "150.00",
            desc: "Rich espresso topped with velvety steamed milk foam.",
            badges: ["Single Cup"],
          },
          {
            name: "Hot Chocolate Pot (Black or White)",
            price: "200.00",
            desc: "Smooth, comforting rich cocoa drink.",
            badges: ["Pot"],
          },
          {
            name: "Dawa Served with Honey",
            price: "200.00",
            desc: "Soothing hot infusion of fresh ginger, lemon juice & pure natural honey.",
            badges: ["Wellness", "Signature"],
          },
        ],
      },
      {
        name: "Accompaniments",
        banner: "All Side Options Uniformly Priced at KES 250.00",
        items: [
          {
            name: "Ugali (White or Brown)",
            price: "250.00",
            desc: "Traditional Kenyan maize meal staple, freshly prepared.",
            badges: ["Side"],
          },
          {
            name: "Chapati (White or Brown)",
            price: "250.00",
            desc: "Soft, layered pan-cooked flatbread.",
            badges: ["Side"],
          },
          {
            name: "Steamed Rice or Vegetable Fried Rice",
            price: "250.00",
            desc: "Fluffy steamed white rice or savory wok-tossed vegetable fried rice.",
            badges: ["Side"],
          },
          {
            name: "Seasonal or Mixed Traditional Vegetables",
            price: "250.00",
            desc: "Freshly sautéed garden greens or indigenous Kenyan vegetables.",
            badges: ["Vegetarian", "Side"],
          },
        ],
      },
    ],
  },
  {
    id: "soups-salads",
    tabLabel: "Soups & Salads",
    title: "Soups & Salads",
    subtitle: "Hearty slow-simmered broths & crisp garden salads",
    groups: [
      {
        name: "Soups",
        items: [
          {
            name: "Bone Soup",
            price: "400.00",
            desc: "Rich clear broth served with a tender chunk of ossobuco meat.",
            badges: ["Chef Special"],
          },
          {
            name: "Creamy Mushroom Soup",
            price: "300.00",
            desc: "Caramelized mushrooms thickened and blended in savory chicken stock.",
            badges: [],
          },
          {
            name: "Cream of Tomato Soup",
            price: "300.00",
            desc: "Fresh ripe tomatoes blended with cream & served with crunchy croutons.",
            badges: ["Vegetarian"],
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            name: "Chicken Caesar Salad",
            price: "600.00",
            desc: "Grilled chicken strips, crisp lettuce & bread croutons in creamy Caesar dressing.",
            badges: [],
          },
          {
            name: "Greek Salad",
            price: "400.00",
            desc: "Feta cheese, crisp lettuce, olives, tomatoes, onions, sweet peppers & cucumber in French dressing.",
            badges: ["Vegetarian"],
          },
        ],
      },
    ],
  },
  {
    id: "starters-bar",
    tabLabel: "Starters & Bar Bites",
    title: "Appetizers & Bar Snacks",
    subtitle: "Lounge favorites, crispy wings & charcoal platters",
    groups: [
      {
        name: "Appetizers",
        banner: "All Appetizers Served with a Pinch of French Fries",
        items: [
          {
            name: "Buffalo Chicken Wings",
            price: "500.00",
            desc: "Crisply baked breaded chicken wings served with smoky barbeque sauce & pinch of fries.",
            badges: ["With Fries"],
          },
          {
            name: "Honey Glazed Chicken Wings",
            price: "500.00",
            desc: "Oven-grilled chicken wings tossed in sweet and sour glaze & pinch of fries.",
            badges: ["With Fries"],
          },
          {
            name: "Liver Bites",
            price: "550.00",
            desc: "Tender strips of beef liver pan-fried in garlic & sweet peppers with pinch of fries.",
            badges: ["With Fries"],
          },
          {
            name: "Spiced Meat Balls",
            price: "500.00",
            desc: "Golden-fried beef meatballs tossed in tangy sweet and sour sauce with pinch of fries.",
            badges: ["With Fries"],
          },
          {
            name: "Vegetable Spring Rolls",
            price: "350.00",
            desc: "Stir-fried Chinese cabbage, carrots, ginger & garlic rolled and shallow-fried, with pinch of fries.",
            badges: ["Vegetarian", "With Fries"],
          },
          {
            name: "Fried Onion Rings",
            price: "300.00",
            desc: "Deep-fried breaded onion rings served with a rich tomato dip & pinch of fries.",
            badges: ["Vegetarian", "With Fries"],
          },
        ],
      },
      {
        name: "Bar Snacks Menu",
        items: [
          {
            name: "Beef Samosas (Pair) & Pinch of Chips",
            price: "300.00",
            desc: "Crispy spiced minced beef samosas served hot with fries.",
            badges: ["Lounge Bite"],
          },
          {
            name: "Beef Sausages (Pair) & Pinch of Chips",
            price: "300.00",
            desc: "Grilled juicy beef sausages paired with golden chips.",
            badges: ["Lounge Bite"],
          },
          {
            name: "Fish Fingers with Chips",
            price: "500.00",
            desc: "Battered Nile perch strips fried golden with tartar dip & fries.",
            badges: ["Seafood"],
          },
          {
            name: "Chips Masala",
            price: "300.00",
            desc: "Crispy French fries tossed in rich aromatic spiced tomato-garlic masala.",
            badges: ["Vegetarian", "Spiced"],
          },
          {
            name: "Nyama Choma Platter (1/2 Kg)",
            price: "800.00",
            desc: "1/2 Kg Goat, Beef or Broiler Chicken — charcoal-grilled, dry-fried or wet-fried meat bite served with kachumbari.",
            badges: ["Sharing Platter", "Goat / Beef / Chicken"],
          },
        ],
      },
    ],
  },
  {
    id: "mains-burgers",
    tabLabel: "Mains & Burgers",
    title: "Curries, Pasta, Burgers & Sandwiches",
    subtitle: "Hearty house mains, grilled burgers & triple-decker clubs",
    groups: [
      {
        name: "Curries & Pasta",
        items: [
          {
            name: "Signature Spiced Curries",
            price: "500 – 900",
            desc: "Aromatic Indian-spiced curry (mild or spicy) served with an accompaniment of choice.",
            badges: ["Mild or Spicy", "Includes Side"],
            options: [
              { label: "Chicken Curry", price: "900.00" },
              { label: "Lamb Curry", price: "700.00" },
              { label: "Vegetable Curry", price: "500.00" },
            ],
          },
          {
            name: "Spaghetti Bolognaise / Carbonara",
            price: "600 / 800",
            desc: "Classic minced beef & vegetable ragù topped with cheese (600), or creamy pancetta & parmesan (800).",
            badges: ["Pasta"],
            options: [
              { label: "Spaghetti Bolognaise", price: "600.00" },
              { label: "Spaghetti Carbonara", price: "800.00" },
            ],
          },
        ],
      },
      {
        name: "Burgers & Sandwiches",
        items: [
          {
            name: "Grilled Beef Burger or Chicken Burger",
            price: "600.00",
            desc: "Served on a sesame bun with lettuce, tomato, onion rings & fries.",
            badges: ["Includes Fries"],
            options: [
              { label: "Grilled Beef Burger", price: "600.00" },
              { label: "Grilled Chicken Burger", price: "600.00" },
            ],
          },
          {
            name: "Toasted Sandwiches with Fries",
            price: "350 – 600",
            desc: "Served golden with French fries: Triple-decker Chicken Club (600), Ham & Cheese (500), or Fresh Garden Veg (350).",
            badges: ["Includes Fries"],
            options: [
              { label: "Chicken Club (Triple-Decker)", price: "600.00" },
              { label: "Ham & Cheese Sandwich", price: "500.00" },
              { label: "Vegetable Sandwich", price: "350.00" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "special-events",
    tabLabel: "Special Events",
    title: "Special Events Menu",
    subtitle: "Signature Plated Courses — KES 2,000.00 Per Guest",
    banner:
      "ALL SPECIAL EVENT MAIN COURSES: KES 2,000.00 Per Plated Guest — Includes Choice of 2 Accompaniments: White/Brown Ugali, White/Brown Chapati, Steamed or Vegetable Fried Rice, Seasonal / Mixed Traditional Vegetables.",
    groups: [
      {
        name: "African Specialty & Nyama Choma Mains",
        items: [
          {
            name: "Full Wet-Fried Chicken Kienyeji",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Traditionally pot-boiled free-range chicken prepared in its natural flavors. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
          {
            name: "Dry-Fried Beef Liver / Matumbo / Green Githeri Special",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Pan-fried beef liver in colored peppers, slow-boiled matumbo, or garden green githeri. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
          {
            name: "Nyama Choma Banquet (Goat, Beef, Pork or Full Broiler Chicken)",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Choice of charcoal-grilled choma, dry-fry, or wet-fry preparation. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
        ],
      },
      {
        name: "Beef, Lamb & Pork Mains",
        items: [
          {
            name: "Pepper Steak / Pan-Seared Rib Eye / T-Bone Steak",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Prime beef fillet in pepper sauce, rosemary-garlic rib eye, or BBQ-glazed T-bone. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
          {
            name: "Visum Signature Beef Stew",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Tender beef cubes slow-stewed with carrots, tomatoes, garden peas & fresh dhania. Includes choice of 2 accompaniments.",
            badges: ["Signature", "+2 Sides"],
          },
          {
            name: "Grilled Lamb Chops",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Marinated lamb chops charcoal-grilled and finished with classic mint sauce. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
          {
            name: "Glazed Pork Chops or BBQ Pork Spareribs",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Pan-seared honey-glazed pork chops or herb-marinated grilled spareribs. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
        ],
      },
      {
        name: "Poultry, Fish & Seafood Mains",
        items: [
          {
            name: "Charcoal Grilled Chicken / Lemon & Thyme Chicken / Crispy Drumsticks",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Marinated grilled chicken, citrus-herb chicken breast, or honey-mustard baked drumsticks. Includes choice of 2 accompaniments.",
            badges: ["Plated Package", "+2 Sides"],
          },
          {
            name: "Nile Perch Fish Fillet or Whole Tilapia",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Pan-fried Nile perch in lemon-butter sauce or deep-fried whole tilapia in rich coconut sauce. Includes choice of 2 accompaniments.",
            badges: ["Seafood", "+2 Sides"],
          },
          {
            name: "Butter & Garlic Prawns",
            price: "2,000.00",
            unit: "Per Guest",
            desc: "Succulent prawns sautéed in butter, olive oil, minced garlic, lemon juice & parsley. Includes choice of 2 accompaniments.",
            badges: ["Seafood", "+2 Sides"],
          },
        ],
      },
    ],
  },
  {
    id: "desserts-drinks",
    tabLabel: "Desserts & Cold Drinks",
    title: "Desserts & Soft Beverages",
    subtitle: "Sweet treats, blended shakes, fresh juices & refreshments",
    groups: [
      {
        name: "Desserts & Blended Treats",
        items: [
          {
            name: "Ice Cream Trio / Fruit Salad with Ice Cream",
            price: "450.00",
            desc: "Three scoops of assorted ice cream or fresh tropical fruit medley topped with ice cream.",
            badges: ["Sweet Treat"],
            options: [
              { label: "Ice Cream Trio", price: "450.00" },
              { label: "Fruit Salad with Ice Cream", price: "450.00" },
            ],
          },
          {
            name: "Milkshake / Smoothie",
            price: "350.00",
            desc: "Thick creamy milkshake or chilled blended fruit smoothie.",
            badges: ["Chilled"],
            options: [
              { label: "Milkshake", price: "350.00" },
              { label: "Smoothie", price: "350.00" },
            ],
          },
          {
            name: "Cake of the Day Slice",
            price: "300.00",
            desc: "Freshly baked slice from our pastry kitchen.",
            badges: ["Pastry"],
          },
          {
            name: "Tropical Fruit Salad",
            price: "250.00",
            desc: "Seasonal Kenyan orchard fruits freshly diced.",
            badges: ["Healthy", "Vegan"],
          },
          {
            name: "Single Scoop Ice Cream",
            price: "150.00",
            desc: "Choice of vanilla, strawberry, or chocolate scoop.",
            badges: [],
          },
        ],
      },
      {
        name: "Juices, Water & Sodas",
        items: [
          {
            name: "Delmonte Juice (1 Ltr) / Fresh Juice Glass",
            price: "480 / 180",
            desc: "Chilled 1 Litre Delmonte carton (480) or freshly squeezed seasonal juice glass (180).",
            badges: ["Juice"],
            options: [
              { label: "Delmonte Juice (1 Ltr)", price: "480.00" },
              { label: "Fresh Juice Glass", price: "180.00" },
            ],
          },
          {
            name: "Keringet Water (1 Ltr)",
            price: "200.00",
            desc: "Pure natural Kenyan mineral water (1000ml).",
            badges: ["1 Ltr"],
          },
          {
            name: "Safari Water (1 Ltr / 500ml)",
            price: "150 / 100",
            desc: "Purified drinking water available in 1 Litre (150) or 500ml (100).",
            badges: ["Hydration"],
            options: [
              { label: "Safari Water (1 Ltr)", price: "150.00" },
              { label: "Safari Water (500ml)", price: "100.00" },
            ],
          },
          {
            name: "Soda (300ml)",
            price: "100.00",
            desc: "Assorted chilled carbonated soft drinks (300ml).",
            badges: ["300ml"],
          },
        ],
      },
    ],
  },
];
