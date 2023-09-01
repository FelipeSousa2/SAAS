type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Siciliana",
    desc: "Saboreie a fusão ardente de calabresa picante, jalapeños e queijo mussarela derretido, aprimorada por flocos de pimenta vermelha esmagados, em cada mordida.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Saboreie um hambúrguer grelhado com bacon crocante, queijo cheddar derretido, cebola caramelizada e molho picante de churrasco.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Nápoles",
    desc: "Deliciosa pizza italiana de crosta fina, molho de tomate picante, mussarela, ervas aromáticas, alface, tomate e maionese picante.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Arrabbiata Picante",
    desc: "Explore o paladar com penne em molho de tomate picante, alho e manjericão fresco, para uma experiência reconfortante e intensa.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Festa Jalapeño",
    desc: "Aqueça seu paladar com este hambúrguer: carne suculenta, jalapeños, queijo pepper jack e molho de maionese chipotle, servidos em um pão torrado com ingredientes clássicos.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Marguerita Mágica",
    desc: "Um clássico com um toque especial: crosta fina, tomate doce, manjericão fresco, mussarela cremosa, azeite de oliva extra virgem, rúcula e esmalte balsâmico.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Linguine de alho e parmesão",
    desc: "Um prazer para os amantes de alho: linguine com molho cremoso de Parmesão, alho, salsa, pimentões e tomates cereja.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Delícia Mediterrânea",
    desc: "Explore sabores mediterrâneos com feta picante, azeitonas Kalamata, tomate seco e toque de orégano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Teriyaki Havaiano",
    desc: "Saboreie o tropical com um hambúrguer suculento, molho teriyaki picante, abacaxi grelhado, bacon crocante, alface fresca e clássicos, em pão torrado.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Siciliana",
    desc: "Excite seu paladar com uma mistura ardente de calabresa picante, jalapeños, pimenta vermelha e queijo mussarela derretido, elevando cada mordida..",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Delícia Mediterrânea",
    desc: "Viaje na gastronomia com esta inspiração mediterrânea: queijo feta picante, azeitonas Kalamata, tomate seco e toque de orégano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Nápoles",
    desc: "Uma clássica delícia italiana, crosta fina e crocante, com molho de tomate picante, mussarela fresca, ervas aromáticas, alface, tomate e um toque de maionese picante.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "Aprecie uma clássica delícia italiana: crosta fina e crocante, molho de tomate picante, mussarela fresca, ervas aromáticas, alface, tomate e um toque de maionese picante.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
