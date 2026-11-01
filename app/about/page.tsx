const values = [
  {
    number: "01",
    title: "Свежие зёрна",
    text: "Работаем с проверенными обжарщиками и используем зёрна не старше 3 недель после обжарки.",
  },
  {
    number: "02",
    title: "Точность",
    text: "Каждый рецепт выверен: температура воды, помол и время экстракции всегда под контролем.",
  },
  {
    number: "03",
    title: "Забота о гостях",
    text: "Наши бариста помнят любимые напитки постоянных гостей и подскажут новичкам.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold">О нас</h1>
      <p className="mt-4 text-lg text-stone-700">
        Espresso cup — небольшая уютная кофейня, где любят кофе и людей, которые
        его пьют. Мы хотим, чтобы у каждого гостя было место, где можно
        замедлиться и сделать паузу.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Наша история</h2>
      <p className="mt-3 text-stone-700">
        Всё началось в 2019 году с маленькой кофемашины и мечты о месте, где
        кофе готовят с душой. Сначала это была крошечная точка с окошком, а
        сегодня — полноценная кофейня с выпечкой собственного производства и
        постоянными гостями, которые стали нам друзьями.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Ценности и подход к кофе</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl bg-white p-6 shadow-md">
            <div className="text-4xl font-extrabold text-amber-600">
              {v.number}
            </div>
            <h3 className="mt-3 text-xl font-bold">{v.title}</h3>
            <p className="mt-2 text-sm text-stone-600">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}