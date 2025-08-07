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
import { cn } from "@/lib/utils";
import { menuItems, subItemGroups } from "@/data/innerMenuItems"; // Імпортуємо дані

const baseTriggerStyle =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2";

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
                <NavigationMenuContent>
                  {/* ▼▼▼ ОСЬ ГОЛОВНЕ ВИПРАВЛЕННЯ: Повертаємо логіку рендеру ▼▼▼ */}
                  <SubMenuContent group={subItemGroups[item.subItemsKey]} />
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
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

// Повертаємо компонент для рендеру, який перевіряє тип даних
function SubMenuContent({ group }) {
  // Якщо даних немає або вони не визначені, не рендеримо нічого
  if (!group) {
    return null;
  }

  // Якщо це об'єкт з полем `featured`, використовуємо складний макет
  if (group.featured) {
    return (
      <div className="w-[600px] p-4 bg-background text-foreground rounded-md">
        <ul className="grid grid-cols-[.75fr_1fr] gap-3">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted to-background p-6 no-underline outline-none focus:shadow-md"
                href={group.featured.href}
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  {group.featured.title}
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  {group.featured.description}
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          {group.links.map((subItem) => (
            <ListItem
              key={subItem.title}
              title={subItem.title}
              href={subItem.href}
            >
              {subItem.description}
            </ListItem>
          ))}
        </ul>
      </div>
    );
  }

  // Якщо це масив, використовуємо простий макет
  if (Array.isArray(group)) {
    return (
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 rounded-md bg-background text-foreground">
        {group.map((subItem) => (
          <ListItem
            key={subItem.title}
            title={subItem.title}
            href={subItem.href}
          >
            {subItem.description}
          </ListItem>
        ))}
      </ul>
    );
  }

  // На випадок непередбачуваних даних
  return null;
}

const ListItem = React.forwardRef(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-none text-foreground group-hover:text-accent-foreground">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
