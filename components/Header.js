import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site"; // Імпортуємо конфігурацію
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function Header() {
  return (
    <header className="border-b border-border">
      {/* --- Верхня частина хедера --- */}
      <div className="relative bg-background">
        <Image
          src="/images/map.png"
          layout="fill"
          alt="Карта Бориславської громади"
          className="object-contain object-center opacity-25"
        />

        <div className="relative z-10 container mx-auto flex items-center justify-between px-4 py-5 gap-4">
          {/* Ліва частина з гербом (без змін) */}
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

          {/* Правий блок тепер містить ТІЛЬКИ соцмережі та логотип "Б" */}
          <div className="flex items-center gap-2">
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

            <div className="hidden sm:block">
              <Image
                src="/images/B1.png"
                alt="Логотип Борислав"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Нижня частина хедера (навігація) --- */}
      <nav className="bg-zinc-900 text-white py-1">
        <div className="hidden lg:flex justify-center">
          <MegaMenu items={siteConfig.mainNav} />
        </div>
        <div className="lg:hidden flex justify-end p-2 px-4">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
