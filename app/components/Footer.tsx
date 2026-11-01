import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row">
        <p>© 2026 Espresso cup. Все права защищены.</p>
        <div className="flex gap-4">
          <Link href="/menu" className="hover:text-amber-400">
            Меню
          </Link>
          <Link href="/about" className="hover:text-amber-400">
            О нас
          </Link>
          <Link href="/contacts" className="hover:text-amber-400">
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  );
}