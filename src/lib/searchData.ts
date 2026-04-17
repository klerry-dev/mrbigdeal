import { SearchResult } from "@/src/components/ui/Search";

export const getSearchData = (language: "en" | "sw"): SearchResult[] => {
  const data = language === "en" ? englishData : swahiliData;
  return data;
};

const englishData: SearchResult[] = [
  // Pages
  {
    id: "page-home",
    title: "Home",
    description: "Return to the homepage",
    category: "Pages",
    href: "/",
    icon: null,
  },
  {
    id: "page-about",
    title: "About",
    description: "Learn more about Mr.BigDeal and the story",
    category: "Pages",
    href: "#about",
    icon: null,
  },
  {
    id: "page-services",
    title: "Services",
    description: "Explore our digital marketing and branding services",
    category: "Pages",
    href: "#services",
    icon: null,
  },
  {
    id: "page-products",
    title: "Courses",
    description: "Browse our courses and educational products",
    category: "Pages",
    href: "#products",
    icon: null,
  },
  {
    id: "page-pricing",
    title: "Pricing",
    description: "View our pricing plans and packages",
    category: "Pages",
    href: "#Pricing",
    icon: null,
  },
  {
    id: "page-contact",
    title: "Contact",
    description: "Get in touch with us",
    category: "Pages",
    href: "#contact",
    icon: null,
  },
  // Services
  {
    id: "service-1",
    title: "Meta Ads Management & Coaching",
    description:
      "Run high-performing Facebook and Instagram ad campaigns or get coached to manage them yourself",
    category: "Services",
    href: "#services",
    icon: null,
  },
  {
    id: "service-2",
    title: "Social Media Management & Training",
    description:
      "Full social media management from content creation to posting and growth",
    category: "Services",
    href: "#services",
    icon: null,
  },
  {
    id: "service-3",
    title: "Graphic Design & Branding Services",
    description:
      "Build a brand that people recognize and trust with professional visuals",
    category: "Services",
    href: "#services",
    icon: null,
  },
  // Products
  {
    id: "product-1",
    title: "Meta Ads Mastery Guide",
    description:
      "Complete beginner-to-intermediate guide on running profitable Facebook and Instagram ads",
    category: "Products",
    href: "#products",
    icon: null,
  },
  {
    id: "product-2",
    title: "Social Media Growth Course",
    description:
      "Step-by-step video course on growing your brand on Instagram and Facebook",
    category: "Products",
    href: "#products",
    icon: null,
  },
  {
    id: "product-3",
    title: "Branding Basics for Business Owners",
    description:
      "Understand what a strong brand looks like and how to build one on a budget",
    category: "Products",
    href: "#products",
    icon: null,
  },
  // Pricing
  {
    id: "pricing-basic",
    title: "Basic Plan",
    description:
      "Perfect for startups and small businesses getting started with social media management",
    category: "Pricing",
    href: "#Pricing",
    icon: null,
  },
  {
    id: "pricing-premium",
    title: "Premium Plan",
    description:
      "Ideal for growing businesses ready to scale with advanced features",
    category: "Pricing",
    href: "#Pricing",
    icon: null,
  },
  {
    id: "pricing-gold",
    title: "Gold Plan",
    description:
      "Complete digital transformation for serious businesses with unlimited features",
    category: "Pricing",
    href: "#Pricing",
    icon: null,
  },
  // About
  {
    id: "about",
    title: "About Mr.BigDeal",
    description:
      "Your Brand Consultant & Digital Growth Partner based in Tanzania",
    category: "About",
    href: "#about",
    icon: null,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch to discuss your project or book a consultation",
    category: "Navigation",
    href: "#contact",
    icon: null,
  },
];

const swahiliData: SearchResult[] = [
  // Pages
  {
    id: "page-home-sw",
    title: "Nyumbani",
    description: "Rudi kwenye ukurasa wa kwanza",
    category: "Ukurasa",
    href: "/",
    icon: null,
  },
  {
    id: "page-about-sw",
    title: "Kuhusu",
    description: "Jifunze zaidi kuhusu Mr.BigDeal",
    category: "Ukurasa",
    href: "#about",
    icon: null,
  },
  {
    id: "page-services-sw",
    title: "Huduma",
    description: " Chunguza huduma zetu za masoko ya kidijitali na chapa",
    category: "Ukurasa",
    href: "#services",
    icon: null,
  },
  {
    id: "page-products-sw",
    title: "Kozi",
    description: "Angalia kozi na bidhaa zetu za kielimu",
    category: "Ukurasa",
    href: "#products",
    icon: null,
  },
  {
    id: "page-pricing-sw",
    title: "Bei",
    description: "Angalia mipango yetu ya bei",
    category: "Ukurasa",
    href: "#Pricing",
    icon: null,
  },
  {
    id: "page-contact-sw",
    title: "Wasiliana",
    description: "Pata mawasiliano nasi",
    category: "Ukurasa",
    href: "#contact",
    icon: null,
  },
  // Services
  {
    id: "service-1-sw",
    title: "Usimamizi wa Matangazo ya Meta & Mafunzo",
    description:
      "Kuendesha kampeni zenye matokeo makubwa za Facebook na Instagram",
    category: "Huduma",
    href: "#services",
    icon: null,
  },
  {
    id: "service-2-sw",
    title: "Usimamizi wa Mitandao ya Kijamii & Mafunzo",
    description:
      "Usimamizi kamili wa mitandao ya kijamii kuanzia uundaji wa maudhui hadi kuposti",
    category: "Huduma",
    href: "#services",
    icon: null,
  },
  {
    id: "service-3-sw",
    title: "Ubunifu wa Picha & Huduma za Chapa",
    description: "Jenga chapa ambayo watu wanaitambua na kuiamini",
    category: "Huduma",
    href: "#services",
    icon: null,
  },
  // Products
  {
    id: "product-1-sw",
    title: "Mwongozo wa Umahiri wa Matangazo ya Meta",
    description:
      "Mwongozo kamili kuhusu kuendesha matangazo yenye faida ya Facebook na Instagram",
    category: "Bidhaa",
    href: "#products",
    icon: null,
  },
  {
    id: "product-2-sw",
    title: "Kozi ya Kukuza Mitandao ya Kijamii",
    description:
      "Kozi ya video ya hatua kwa hatua kuhusu kukuza chapa yako kwenye Instagram na Facebook",
    category: "Bidhaa",
    href: "#products",
    icon: null,
  },
  {
    id: "product-3-sw",
    title: "Misingi ya Chapa kwa Wamiliki wa Biashara",
    description:
      "Elewa chapa imara inaonekanaje na jinsi ya kuijenga kwa bajeti ndogo",
    category: "Bidhaa",
    href: "#products",
    icon: null,
  },
  // Pricing
  {
    id: "pricing-basic-sw",
    title: "Mpango wa Basic",
    description: "Bora kwa biashara zinazoanza na zile ndogo",
    category: "Bei",
    href: "#Pricing",
    icon: null,
  },
  {
    id: "pricing-premium-sw",
    title: "Mpango wa Premium",
    description: "Bora kwa biashara zinazokua",
    category: "Bei",
    href: "#Pricing",
    icon: null,
  },
  {
    id: "pricing-gold-sw",
    title: "Mpango wa Gold",
    description: "Mabadiliko kamili ya kidijitali",
    category: "Bei",
    href: "#Pricing",
    icon: null,
  },
  // About
  {
    id: "about-sw",
    title: "Kuhusu Mr.BigDeal",
    description: "Mshauri Wako wa bidhaa & Msaidizi wa Ukuaji wa Kidijitali",
    category: "Kuhusu",
    href: "#about",
    icon: null,
  },
  {
    id: "contact-sw",
    title: "Wasiliana",
    description: "Pata mawasiliano kuzungumzia mradi wako au kuweka miadi",
    category: "Urambazaji",
    href: "#contact",
    icon: null,
  },
];

export const filterSearchResults = (
  query: string,
  language: "en" | "sw",
): SearchResult[] => {
  const data = getSearchData(language);

  if (!query.trim()) return data;

  const normalizedQuery = query.toLowerCase();

  return data.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = item.description
      .toLowerCase()
      .includes(normalizedQuery);
    const categoryMatch = item.category.toLowerCase().includes(normalizedQuery);

    return titleMatch || descriptionMatch || categoryMatch;
  });
};
