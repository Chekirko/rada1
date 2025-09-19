import Image from "next/image";
import Link from "next/link";
import { PersonStanding } from "lucide-react";
import { Button } from "./ui/button";
import { SearchCommand } from "./SearchCommand";

export const TopBar = () => {
  return (
    <div className="bg-stone-200 border-b border-border">
      {/* FIX 1: Змінюємо 'justify-end' на 'justify-between', щоб розсунути елементи по краях */}
      {/* Також прибираємо 'py-6', щоб висота відповідала h-10 */}
      <div className="container mx-auto flex h-10 items-center justify-between px-4">
        {/* ЛІВА ЧАСТИНА: Елемент доступності */}
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-9 bg-white shadow-sm"
        >
          <PersonStanding className="h-6 w-6 text-muted-foreground" />
          <span className="sr-only">Версія для людей з вадами зору</span>
        </Button>

        {/* ПРАВА ЧАСТИНА: Пошук, розділювач та мови */}
        <div className="flex items-center gap-4">
          {/* Групуємо пошук та текст для кращого вигляду */}
          <div className="hidden md:flex items-center gap-2">
            <SearchCommand />
            <p className="text-sm text-muted-foreground">Пошук</p>
          </div>

          {/* FIX 2: Більш видний розділювач */}
          {/* Робимо його вищим (h-6) і темнішим (bg-stone-400) */}
          <div className="h-6 w-px bg-stone-400" />

          {/* Перемикач мов (без змін) */}
          <div className="flex items-center gap-3">
            <Link
              href="/ua"
              className="opacity-100 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/ua.webp"
                alt="Українська мова"
                width={24}
                height={18}
              />
            </Link>
            <Link
              href="/en"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                src="/images/gb.png"
                alt="English language"
                width={24}
                height={18}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
