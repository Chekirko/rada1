"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { siteConfig } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* Кнопка виглядає так само, як ваша стара */}
        <Button
          variant="ghost"
          className="p-2 text-base hover:bg-zinc-700 focus-visible:bg-zinc-700"
        >
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Відкрити меню</span>
        </Button>
      </SheetTrigger>
      {/* Вміст виїжджаючого меню */}
      <SheetContent
        side="left"
        className="bg-zinc-900 text-white border-r-zinc-800 flex flex-col"
      >
        <Link
          href="/"
          className="flex items-center space-x-2 mb-8"
          onClick={() => setOpen(false)}
        >
          <Image src="/images/G.png" alt="Герб" width={32} height={40} />
          <span className="font-bold">Бориславська міська рада</span>
        </Link>
        <div className="flex flex-col space-y-3 flex-1">
          {siteConfig.mainNav.map(
            (item) =>
              item.href && (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white/80 hover:text-white"
                >
                  {item.title}
                </Link>
              )
          )}
        </div>
        {/* Соцмережі внизу мобільного меню */}
        <div className="flex items-center justify-center space-x-2 pb-4">
          {siteConfig.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className={`text-white/80 hover:text-white ${item.color}`}
              >
                <item.icon className="h-6 w-6" />
              </Button>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
