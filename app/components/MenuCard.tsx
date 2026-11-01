import Image from "next/image";
import Link from "next/link";
import { Dish } from "../data/menu";

export default function MenuCard({ dish }: { dish: Dish }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase text-amber-700">
          {dish.category}
        </span>
        <h3 className="text-xl font-bold text-stone-900">{dish.name}</h3>
        <p className="flex-1 text-sm text-stone-600">{dish.short}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-stone-900">
            {dish.price} ₽
          </span>
          <Link
            href={`/menu/${dish.id}`}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm text-white transition hover:bg-amber-700"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}