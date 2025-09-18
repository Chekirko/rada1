"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({ items }) {
  const pathname = usePathname();

  return (
    // Цей контейнер з'являється тільки на екранах середнього розміру (md) і більше
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "transition-colors hover:text-white/80",
                // Якщо поточний шлях співпадає з посиланням, текст буде білим, інакше - напівпрозорим
                pathname === item.href ? "text-white" : "text-white/60"
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  );
}
