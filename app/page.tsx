import Link from "next/link";
import { menu } from "./data/menu";
import MenuCard from "./components/MenuCard";

export default function HomePage() {
  const popular = menu.slice(0, 3);

  return (
    <>
      <section className="bg-stone-900 text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold md:text-6xl">
              Espresso cup
            </h1>
            <p className="mt-4 text-lg text-amber-100">
              Каждая чашка — маленький праздник. Свежий кофе, домашняя выпечка
              и атмосфера, в которую хочется возвращаться.
            </p>
            <Link
              href="/menu"
              className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3 font-semibold text-stone-900 transition hover:bg-amber-400"
            >
              Смотреть меню
            </Link>
          </div>
          <div className="flex h-64 flex-col items-center justify-center rounded-3xl bg-white/10 text-center">
            <p className="text-sm uppercase tracking-widest text-amber-200">
              Свежая обжарка
            </p>
            <p className="mt-2 text-4xl font-extrabold">Каждый день</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">

        <h2 className="mb-6 text-3xl font-bold">Популярное</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>
    </>
  );
}