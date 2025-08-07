"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; // Імпортуємо утиліту `cn`

// ▼▼▼ НАШІ ВЛАСНІ, ЧИСТІ СТИЛІ ▼▼▼
const baseTriggerStyle =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2";

const menuItems = [
  { title: "Головна", href: "/" },
  { title: "Новини", href: "/news", subItems: true },
  { title: "Документи", href: "/documents", subItems: true },
  { title: "Влада", href: "/government", subItems: true },
  { title: "Мешканцям", href: "/residents", subItems: true },
  { title: "Про громаду", href: "/community", subItems: true },
  { title: "Інвестору", href: "/investor", subItems: true },
  { title: "Туристу", href: "/tourist", subItems: true },
  { title: 'ЦНАП.Центр "Дія"', href: "/cnap", subItems: true },
];

const subItemsData = [
  {
    title: "Структура та керівництво",
    href: "#",
    description: "Депутати, комісії, виконавчий комітет.",
  },
  {
    title: "Рішення ради",
    href: "#",
    description: "Архів рішень та протоколів сесій.",
  },
  {
    title: "Старостинські округи",
    href: "#",
    description: "Контакти та інформація про старост.",
  },
  {
    title: "Вакансії",
    href: "#",
    description: "Актуальні пропозиції роботи в органах ради.",
  },
  {
    title: "Звіти та плани",
    href: "#",
    description: "Плани роботи та звіти про виконання.",
  },
  {
    title: "Комунальні підприємства",
    href: "#",
    description: "Перелік та діяльність КП міста.",
  },
];

export function MegaMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger
                  // ▼▼▼ ВИКОРИСТОВУЄМО НАШІ СТИЛІ, а не стандартні ▼▼▼
                  className={cn(
                    baseTriggerStyle,
                    "bg-transparent text-white hover:bg-element-accent hover:text-text-primary data-[state=open]:bg-element-accent data-[state=open]:text-text-primary",
                    {
                      "bg-element-accent text-text-primary":
                        pathname.startsWith(item.href) && item.href !== "/",
                    }
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-zinc-800 text-white">
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 rounded-md bg ">
                    {subItemsData.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  // ▼▼▼ І ТУТ ВИКОРИСТОВУЄМО НАШІ СТИЛІ ▼▼▼
                  className={cn(
                    baseTriggerStyle,
                    "bg-transparent text-white hover:bg-element-accent hover:text-text-primary",
                    {
                      "bg-element-accent text-text-primary":
                        pathname === item.href,
                    }
                  )}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-element-accent"
          >
            <div className="text-sm font-medium leading-none text-white group-hover:text-text-primary">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-400 group-hover:text-text-primary">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
