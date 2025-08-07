import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu"; // Наш компонент меню
import { Menu } from "lucide-react"; // Іконка для мобільної версії

export default function Header() {
  return (
    <header className="border-b border-border">
      {/* --- Верхня частина хедера --- */}
      <div className="relative bg-background">
        <div className="relative z-10 container mx-auto flex items-center justify-between px-4 py-5">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/G.png"
              alt="Герб Борислава"
              width={60}
              height={75}
            />
            <div>
              <p className="text-xl font-medium">Бориславська міська рада</p>
              <p className="text-muted-foreground">Офіційний сайт</p>
            </div>
          </Link>
          <Image
            src="/images/map.png"
            fill={true}
            alt="Карта Бориславської громади"
            className="inset-0 z-0 object-contain opacity-40"
          />
          <div className="hidden sm:block">
            <Image
              src="/images/B1.png"
              alt="Логотип Борислав"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* --- Нижня частина хедера (навігація) --- */}
      <nav className="bg-zinc-900 text-white py-1">
        {/* Десктопна версія: Центруємо меню за допомогою flex-контейнера */}
        <div className="hidden lg:flex justify-center">
          <MegaMenu />
        </div>

        {/* Мобільна версія: Окремий контейнер для кнопки */}
        <div className="lg:hidden flex justify-end p-2 px-4">
          <button className="rounded p-2 hover:bg-zinc-700">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Відкрити меню</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
