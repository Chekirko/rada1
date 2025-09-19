import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { TopBar } from "@/components/TopBar";
// import HeaderWithSocials from "@/components/HeaderWithSocials";

// 1. Визначаємо основний шрифт для тексту
const eUkraine = localFont({
  src: [
    {
      path: "./fonts/e-Ukraine-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/e-Ukraine-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/e-Ukraine-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/e-Ukraine-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/e-Ukraine-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-e-ukraine",
});

// 2. Визначаємо шрифт для заголовків
const eUkraineHead = localFont({
  src: [
    {
      path: "./fonts/e-UkraineHead-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/e-UkraineHead-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/e-UkraineHead-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/e-UkraineHead-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-e-ukraine-head", // Створюємо окрему CSS змінну
});

export const metadata = {
  title: "Бориславська міська рада",
  description: "Офіційний веб-сайт Бориславської міської ради",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      {/* 3. Видаляємо змінні для Geist та додаємо змінні для наших двох шрифтів */}
      <body
        className={`${eUkraine.variable} ${eUkraineHead.variable} antialiased`}
      >
        <TopBar />
        <Header /> {/* 2. Додаємо компонент хедера сюди */}
        <main>{children}</main>
      </body>
    </html>
  );
}
