export type Dish = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  short: string;
  description: string;
};

export const menu: Dish[] = [
  {
    id: "1",
    name: "Эспрессо",
    price: 150,
    category: "Кофе",
    image: "/images/espresso.jpg",
    short: "Классический крепкий кофе",
    description:
      "Насыщенный эспрессо из свежеобжаренных зёрен арабики. Густая крема, яркий вкус и долгое послевкусие. Идеальное начало дня.",
  },
  {
    id: "2",
    name: "Капучино",
    price: 220,
    category: "Кофе",
    image: "/images/cupuchino.jpg",
    short: "Эспрессо с нежной молочной пенкой",
    description:
      "Двойной эспрессо, горячее молоко и воздушная молочная пена в идеальных пропорциях. Мягкий сливочный вкус.",
  },
  {
    id: "3",
    name: "Латте",
    price: 240,
    category: "Кофе",
    image: "/images/latte.jpg",
    short: "Много молока и мягкий вкус",
    description:
      "Нежный напиток на основе эспрессо с большим количеством молока. Можно добавить ванильный, карамельный или ореховый сироп.",
  },
  {
    id: "4",
    name: "Круассан",
    price: 180,
    category: "Выпечка",
    image: "/images/krousan.png",
    short: "Свежий масляный круассан",
    description:
      "Хрустящий слоёный круассан на сливочном масле. Выпекается каждое утро и подаётся тёплым.",
  },
  {
    id: "5",
    name: "Чизкейк",
    price: 260,
    category: "Десерты",
    image: "/images/chizkeik.jpg",
    short: "Классический нью-йоркский",
    description:
      "Нежный сливочный чизкейк на песочной основе с ягодным соусом. Отлично сочетается с американо.",
  },
  {
    id: "6",
    name: "Матча-латте",
    price: 280,
    category: "Чай",
    image: "/images/matcha.jpg",
    short: "Японский зелёный чай с молоком",
    description:
      "Церемониальная матча, взбитая с тёплым молоком. Бодрит мягче кофе и имеет приятный травяной вкус.",
  },
];