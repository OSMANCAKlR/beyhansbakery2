import borek from "./assets/borek.webp";
import pogca from "./assets/pogca.webp";
import dolma from "./assets/dolma.webp";
import sides from "./assets/sides.webp";
import tatli from "./assets/tatli.webp";
import pudding from "./assets/pudding.webp";
import cake from "./assets/cake.webp";
import kurabiye from "./assets/kurabiye.webp";
import borek_dunno from "./assets/dunno_borek.webp";
import borek_sigara from "./assets/sigara_borek.webp";
import patatesli_pogca from "./assets/patatesli_pogca.png";
import peynirli_pogca from "./assets/peynirli_pogca.jpeg";
import lahana_dolma from "./assets/lahana_dolma.png";
import yaprak_dolma from "./assets/yaprak_dolma.webp";
import savoury_cookies from "./assets/savoury_cookies.png";
import mixed_savoury_cookies from "./assets/mixed_savoury_cookies.png";

export const categories = [
  {
    id: 1,
    title: "Börek",
    image: borek,
    type: "savoury",
    category: "borek",
  },
  {
    id: 2,
    title: "Poğaça",
    image: pogca,
    type: "savoury",
    category: "pogca",
  },
  {
    id: 3,
    title: "Dolma",
    image: dolma,
    type: "savoury",
    category: "dolma",
  },
  {
    id: 4,
    title: "Sides",
    image: sides,
    type: "savoury",
    category: "sides",
  },
  {
    id: 5,
    title: "Tatli",
    image: tatli,
    type: "sweet",
    category: "tatli",
  },
  {
    id: 6,
    title: "Pudding",
    image: pudding,
    type: "sweet",
    category: "pudding",
  },
  {
    id: 7,
    title: "Cake",
    image: cake,
    type: "sweet",
    category: "cake",
  },
  {
    id: 8,
    title: "Kurabiye",
    image: kurabiye,
    type: "sweet",
    category: "kurabiye",
  },
];

export const foods = [
  {
    id: 9,
    title: "Kiymali börek",
    image: borek_dunno,
    description:
      "Kiymali börek is a savory Turkish pastry filled with seasoned ground beef, onions, and sometimes potatoes or cheese. It is usually made with layers of phyllo dough and is a popular snack or breakfast food in Turkey",
    type: "savoury",
    price: 6,
    category: "borek",
    price_api: "price_1MoN9MCl3fwu9gFCsiFHeYqm",
  },
  {
    id: 10,
    title: "Sigara börek",
    image: borek_sigara,
    description: "Sigara börek, which means cigarette pastry in Turkish, is a type of savory pastry made with phyllo dough that is rolled into a cylinder shape and filled with feta cheese and parsley. It is usually served as an appetizer or snack.",
    type: "savoury",
    price: 5,
    category: "borek",
    price_api: "price_1MoNB6Cl3fwu9gFCq7fxE4Rj",
  },
  {
    id: 11,
    title: "Peynirli börek",
    image: borek,
    type: "savoury",
    description: "Sigara börek, which means cigarette pastry in Turkish, is a type of savory pastry made with phyllo dough that is rolled into a cylinder shape and filled with feta cheese and parsley. It is usually served as an appetizer or snack.",
    price: 5,
    category: "borek",
    price_api: "price_1MoNCKCl3fwu9gFCY9lNlWgE",
  },
  {
    id: 12,
    title: "Patetesli börek",
    image: patatesli_pogca,
    type: "savoury",
    price: 6,
    category: "pogca",
  },
  {
    id: 13,
    title: "Peynirli Pogaca",
    image: peynirli_pogca,
    type: "savoury",
    price: 5,
    category: "pogca",
  },
  {
    id: 14,
    title: "Lahana Dolma",
    image: lahana_dolma,
    type: "savoury",
    price: 6,
    category: "dolma",
  },
  {
    id: 15,
    title: "Yaprak Dolma",
    image: yaprak_dolma,
    type: "savoury",
    price: 6.5,
    category: "dolma",
  },
  {
    id: 16,
    title: "Savoury Cookies",
    image: savoury_cookies,
    type: "savoury",
    price: 9.5,
    category: "sides",
  },
  {
    id: 17,
    title: "Mixed Savoury Cookies",
    image: mixed_savoury_cookies,
    type: "savoury",
    price: 10,
    category: "sides",
  },
];
