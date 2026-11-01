export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-bold">Где нас найти</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-white p-6 shadow-md">
          <div>
            <h2 className="text-lg font-bold">Адрес</h2>
            <p className="text-stone-700">г. Москва, ул. Кофейная, д. 67</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Часы работы</h2>
            <p className="text-stone-700">Пн–Пт: 08:00 – 22:00</p>
            <p className="text-stone-700">Сб–Вс: 09:00 – 23:00</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Контакты</h2>
            <p className="text-stone-700">Телефон: +7 (999) 123-45-67</p>
            <p className="text-stone-700">Email: espressocup@gmail.com</p>
          </div>
        </div>

        <div className="flex min-h-72 items-center justify-center rounded-2xl border-2 border-dashed border-stone-400 bg-stone-100 text-center text-stone-500">
          <div>
            <p className="text-2xl font-bold">Карта</p>
            <p className="mt-2">Здесь будет карта</p>
          </div>
        </div>
      </div>
    </div>
  );
}