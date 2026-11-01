import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { menu } from "../../data/menu";

export const instant = false;

export function generateStaticParams() {
  return menu.map((dish) => ({ id: dish.id }));
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dish = menu.find((d) => d.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/menu"
        className="inline-block rounded-full border border-stone-900 px-5 py-2 text-sm transition hover:bg-stone-900 hover:text-white"
      >
        ← Назад в меню
      </Link>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="relative h-72 overflow-hidden rounded-3xl shadow-md md:h-96">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase text-amber-700">
            {dish.category}
          </span>
          <h1 className="mt-1 text-4xl font-bold">{dish.name}</h1>
          <p className="mt-4 text-stone-700">{dish.description}</p>
          <p className="mt-6 text-3xl font-bold">{dish.price} ₽</p>
        </div>
      </div>
    </div>
  );
}