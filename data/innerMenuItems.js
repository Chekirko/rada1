// Головні пункти меню. `subItemsKey` - це унікальний ключ для зв'язку з підпунктами.
export const menuItems = [
  { title: "Головна", href: "/" },
  { title: "Новини", href: "/news", subItems: true, subItemsKey: "news" },
  {
    title: "Документи",
    href: "/documents",
    subItems: true,
    subItemsKey: "documents",
  },
  { title: "Влада", href: "/government", subItems: true, subItemsKey: "vlada" },
  {
    title: "Мешканцям",
    href: "/residents",
    subItems: true,
    subItemsKey: "residents",
  },
  {
    title: "Про громаду",
    href: "/community",
    subItems: true,
    subItemsKey: "community",
  },
  {
    title: "Інвестору",
    href: "/investor",
    subItems: true,
    subItemsKey: "investor",
  },
  {
    title: "Туристу",
    href: "/tourist",
    subItems: true,
    subItemsKey: "tourist",
  },
  {
    title: 'ЦНАП.Центр "Дія"',
    href: "/cnap",
    subItems: true,
    subItemsKey: "cnap",
  },
];

// Об'єкт, що містить групи підпунктів для кожного розділу.
// Ключі об'єкта відповідають `subItemsKey` з `menuItems`.
export const subItemGroups = {
  // Приклад простого меню у вигляді списку
  news: [
    {
      title: "Всі новини",
      href: "/news",
      description: "Останні події з життя громади.",
    },
    {
      title: "Офіційні оголошення",
      href: "/news/announcements",
      description: "Важлива інформація та повідомлення.",
    },
    {
      title: "Фотогалерея",
      href: "/news/gallery",
      description: "Яскраві моменти у фотографіях.",
    },
    {
      title: "Відеоархів",
      href: "/news/videos",
      description: "Записи сесій, брифінгів та подій.",
    },
  ],

  documents: [
    {
      title: "Рішення ради",
      href: "/documents/decisions",
      description: "Прийняті рішення сесій міської ради.",
    },
    {
      title: "Розпорядження міського голови",
      href: "/documents/orders",
      description: "Офіційні розпорядження та доручення.",
    },
    {
      title: "Проекти рішень",
      href: "/documents/drafts",
      description: "Документи, що готуються до розгляду.",
    },
    {
      title: "Нормативні акти",
      href: "/documents/acts",
      description: "Постанови, накази та інші регуляторні документи.",
    },
    {
      title: "Архів",
      href: "/documents/archive",
      description: "Документи за попередні періоди.",
    },
  ],

  // Приклад складного меню з "featured" блоком
  vlada: {
    featured: {
      title: "Депутатський корпус",
      href: "/government/deputies",
      description:
        "Актуальний склад, фракції та комісії Бориславської міської ради.",
    },
    links: [
      {
        title: "Структура та керівництво",
        href: "/government/structure",
        description: "Виконавчий комітет, відділи та управління.",
      },
      {
        title: "Постійні комісії",
        href: "/government/commissions",
        description: "Склад та напрямки роботи комісій.",
      },
      {
        title: "Старостинські округи",
        href: "/government/districts",
        description: "Контакти та інформація про старост.",
      },
      {
        title: "Вакансії",
        href: "/government/vacancies",
        description: "Приєднуйтесь до нашої команди.",
      },
    ],
  },

  // Ще один приклад складного меню
  residents: {
    featured: {
      title: "Звернення громадян",
      href: "/residents/appeals",
      description:
        "Подати електронне звернення, перевірити статус, записатись на прийом.",
    },
    links: [
      {
        title: "Комунальні послуги",
        href: "/residents/utilities",
        description: "Тарифи, контакти підприємств, якість послуг.",
      },
      {
        title: "Соціальний захист",
        href: "/residents/social-security",
        description: "Пільги, субсидії, допомога.",
      },
      {
        title: "Освіта",
        href: "/residents/education",
        description: "Перелік шкіл, садочків, гуртків.",
      },
      {
        title: "Охорона здоров'я",
        href: "/residents/health",
        description: "Медичні заклади громади, контакти.",
      },
    ],
  },

  community: [
    {
      title: "Історія міста",
      href: "/community/history",
      description: "Від витоків до сьогодення.",
    },
    {
      title: "Символіка",
      href: "/community/symbols",
      description: "Герб, прапор та гімн Борислава.",
    },
    {
      title: "Статут громади",
      href: "/community/statute",
      description: "Основний документ місцевого самоврядування.",
    },
    {
      title: "Почесні громадяни",
      href: "/community/honorary-citizens",
      description: "Люди, що зробили видатний внесок у розвиток.",
    },
    {
      title: "Міста-побратими",
      href: "/community/twin-cities",
      description: "Наші міжнародні партнери.",
    },
  ],

  investor: {
    featured: {
      title: "Інвестиційний паспорт",
      href: "/investor/passport",
      description:
        "Ключовий документ, що презентує потенціал Бориславської громади.",
    },
    links: [
      {
        title: "Вільні земельні ділянки",
        href: "/investor/land-plots",
        description: "Перелік ділянок для інвестиційних проектів.",
      },
      {
        title: "Промислові об'єкти",
        href: "/investor/industrial",
        description: "Доступні приміщення та території.",
      },
      {
        title: "Програми підтримки",
        href: "/investor/support",
        description: "Місцеві та державні програми для бізнесу.",
      },
      {
        title: "Успішні кейси",
        href: "/investor/cases",
        description: "Приклади реалізованих інвестицій.",
      },
    ],
  },

  tourist: [
    {
      title: "Що подивитись?",
      href: "/tourist/attractions",
      description: "Визначні пам'ятки та цікаві місця.",
    },
    {
      title: "Туристичні маршрути",
      href: "/tourist/routes",
      description: "Готові ідеї для вашої подорожі.",
    },
    {
      title: "Де зупинитись?",
      href: "/tourist/accommodation",
      description: "Готелі, садиби та апартаменти.",
    },
    {
      title: "Де поїсти?",
      href: "/tourist/food",
      description: "Ресторани, кафе та місцева кухня.",
    },
    {
      title: "Календар подій",
      href: "/tourist/events",
      description: "Фестивалі та заходи, які варто відвідати.",
    },
  ],

  cnap: [
    {
      title: "Перелік послуг",
      href: "/cnap/services",
      description: "Повний каталог адміністративних послуг.",
    },
    {
      title: "Електронна черга",
      href: "/cnap/e-queue",
      description: "Запишіться онлайн, щоб уникнути очікування.",
    },
    {
      title: "Графік роботи та контакти",
      href: "/cnap/contacts",
      description: "Адреса, телефони та години прийому.",
    },
    {
      title: "Задати питання",
      href: "/cnap/faq",
      description: "Відповіді на найпоширеніші запитання.",
    },
  ],
};
