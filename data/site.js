import { Facebook, Instagram, Youtube, Send } from "lucide-react";
export const siteConfig = {
  mainNav: [
    // ... ваші існуючі посилання
  ],
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/BoryslavskaMiskaRada", // Вставте реальне посилання
      icon: Facebook,
      color: "hover:text-[#4267B2]", // Колір бренду
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCcr-p5b2u-j-wOpv-4s7i_A", // Вставте реальне посилання
      icon: Youtube,
      color: "hover:text-[#FF0000]",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/boryslav_mrada/", // Вставте реальне посилання
      icon: Instagram,
      color: "hover:text-[#E4405F]",
    },
    {
      label: "Telegram",
      href: "https://t.me/BoryslavskaMiskaRada", // Вставте реальне посилання
      icon: Send,
      color: "hover:text-[#0088cc]",
    },
  ],
};
