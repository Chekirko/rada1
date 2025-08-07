import Image from "next/image";

export default function Home() {
  return (
    <main className="p-12">
      <h1>Заголовок першого рівня (має бути шрифт e-UkraineHead)</h1>
      <p className="mt-4">
        Це звичайний параграф тексту. Він повинен бути написаний шрифтом
        e-Ukraine. Це світле накреслення (Light), а це{" "}
        <b>жирне накреслення (Bold)</b>. Перевіряємо, чи застосувались базові
        налаштування шрифтів, які ми визначили.
      </p>
    </main>
  );
}
