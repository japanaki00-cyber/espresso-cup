import Link from "next/link";

const links = [
  { href: "/", label: "Главная" },
  { href: "/menu", label: "Меню" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Где нас найти" },
];

export default function Header() {
  return (
    <header className="bg-stone-900 text-amber-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Espresso cup
        </Link>
        <nav className="flex flex-wrap justify-center gap-5 text-sm sm:text-base">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}