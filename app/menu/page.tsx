import { menu } from "../data/menu";
import MenuCard from "../components/MenuCard";

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">Меню</h1>
      <p className="mt-2 text-stone-600">
        Выберите блюдо, чтобы узнать подробности.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menu.map((dish) => (
          <MenuCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}