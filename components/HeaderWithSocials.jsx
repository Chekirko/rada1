import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site"; // Імпортуємо конфігурацію
import { MegaMenu } from "./MegaMenu"; // Ваш компонент меню залишається
import { MobileNav } from "./MobileNav"; // Новий компонент для мобільного меню
import { SearchCommand } from "./SearchCommand"; // Новий компонент для пошуку
import { Button } from "./ui/button"; // Компонент кнопки з ShadCN
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"; // Для підказок
import { PersonStanding } from "lucide-react"; // Іконка

export default function Header() {
  return (
    <header className="border-b border-border">
      {/* --- Верхня частина хедера --- */}
      <div className="relative bg-background">
        <div className="relative z-10 container mx-auto flex items-center justify-between px-4 py-5 gap-4">
          {/* Ваша ліва частина з гербом - залишена без змін */}
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

          {/* Ваша фонова карта - залишена без змін */}
          <Image
            src="/images/map.png"
            fill={true}
            alt="Карта Бориславської громади"
            className="inset-0 z-0 object-contain opacity-40" // Трохи зменшив прозорість для кращої читабельності
          />

          {/* === ОНОВЛЕНИЙ БЛОК: Соцмережі, Пошук та Лого === */}
          <div className="relative z-10 flex items-center gap-2">
            {/* Іконки соцмереж з підказками (тільки для десктопу) */}
            <TooltipProvider>
              <div className="hidden md:flex items-center gap-1">
                {siteConfig.socialLinks.map((item) => (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2"
                      >
                        <item.icon
                          className={`h-5 w-5 text-muted-foreground transition-colors ${item.color}`}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>

            {/* Сучасний пошук */}
            <SearchCommand />

            {/* Кнопка для людей з вадами зору */}
            <Button variant="outline" size="icon" className="w-9 h-9">
              <PersonStanding className="h-5 w-5" />
              <span className="sr-only">Версія для людей з вадами зору</span>
            </Button>

            {/* Ваш логотип "Б" - залишений без змін */}
            <div className="hidden sm:block">
              <Image
                src="/images/B1.png"
                alt="Логотип Борислав"
                width={80} // Трохи зменшив, щоб все гарно вмістилося
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Нижня частина хедера (навігація) --- */}
      <nav className="bg-zinc-900 text-white py-1">
        {/* Десктопна версія: Центруємо ваш компонент MegaMenu */}
        <div className="hidden lg:flex justify-center">
          <MegaMenu items={siteConfig.mainNav} />{" "}
          {/* Передаємо пункти меню у ваш компонент */}
        </div>

        {/* Мобільна версія: ЗАМІНЮЄМО стару кнопку на новий функціональний компонент */}
        <div className="lg:hidden flex justify-end p-2 px-4">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
