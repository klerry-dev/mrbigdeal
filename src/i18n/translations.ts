export type Language = "en" | "sw";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      builds: "Builds",
      courses: "Courses",
      pricing: "Pricing",
      contacts: "Contacts",
      Pricing: "Pricing",
      contact: "Contact",
      open: "Open",
      button: "Get Started",
      search: "Search",
      like: "Like",
      liked: "Liked",
    },
    search: {
      placeholder: "Search...",
      noResults: "No results found",
      trySearching: "Try searching for services, products, or pricing",
      navigate: "to navigate",
      select: "to select",
      close: "to close",
    },
    hero: {
      title: "Grow Your ",
      titleHighlight: "Business",
      titleEnd: " Smarter",
      subtitle:
        "Crafting standout brands that captivate audiences and drive real results in the digital home.",
      buttonPrimary: "Work With Me",
      buttonSecondary: "Browse Products",
    },
    stats: {
      clients: "Clients Served",
      services: "Core Services",
      satisfaction: "Client Satisfaction",
      location: "Based in Tanzania",
    },
    services: {
      tag: "What I Do",
      title:
        "Services Designed to Get <span class='text-brand-green'>Results</span>",
      subtitle:
        "Whether you want it done for you or want to learn how to do it yourself — I've got you covered.",
      items: [
        {
          id: "01",
          title: "Meta Ads Management & Coaching",
          desc: "I run high-performing Facebook and Instagram ad campaigns for your business — or coach you step-by-step so you can manage them yourself confidently.",
          features: [
            "Campaign setup & targeting",
            "Ad creative strategy",
            "Budget optimization",
            "1-on-1 coaching sessions",
            "Monthly performance reports",
          ],
        },
        {
          id: "02",
          title: "Social Media Management & Training",
          desc: "Full social media management — from content creation to posting and growth. Or enroll in training and learn how to handle it yourself professionally.",
          features: [
            "Content strategy & calendar",
            "Caption writing & visuals",
            "Audience growth tactics",
            "Platform training (IG, FB, TikTok)",
            "Analytics & insights review",
          ],
        },
        {
          id: "03",
          title: "Graphic Design & Branding Services",
          desc: "Build a brand that people recognize and trust. From logos to full brand identity systems — I create visuals that make your business look professional and memorable.",
          features: [
            "Logo & brand identity design",
            "Social media graphics",
            "Flyers, posters & banners",
            "Brand color & font systems",
            "Business card & stationery",
          ],
        },
      ],
    },
    products: {
      tag: "Digital Products",
      title: "Learn at Your Own <span class='text-brand-green'>Pace</span>",
      subtitle:
        "My e-books and courses are built for Tanzanian entrepreneurs and marketers who want practical, no-fluff knowledge they can apply immediately.",
      items: [
        {
          badge: "E-book",
          title: "Meta Ads Mastery Guide",
          desc: "A complete beginner-to-intermediate guide on running profitable Facebook and Instagram ads — with real examples from the Tanzanian market.",
          link: "Get the E-book",
        },
        {
          badge: "Course",
          title: "Social Media Growth Course",
          desc: "Step-by-step video course on growing your brand on Instagram and Facebook — including content strategy, hashtags, posting schedules, and engagement tactics.",
          link: "Enroll Now",
        },
        {
          badge: "E-book",
          title: "Branding Basics for Business Owners",
          desc: "Understand what a strong brand looks like, how to build one on a budget, and why it matters for long-term business growth in competitive markets.",
          link: "Get the E-book",
        },
      ],
    },
    builds: {
      title: "Social Media ",
      titleHighlight: "Mastery",
      subtitle:
        "Frameworks, strategies, and tools I've built to master social media marketing",
      projects: [
        {
          title: "Instagram Growth System",
          type: "Social Media Strategy",
          description:
            "A comprehensive framework I developed for growing Instagram accounts organically. Includes content pillars, posting schedules, hashtag research methods, and engagement tactics that helped me build a 15K+ following for my brand.",
          tags: ["Instagram", "Organic Growth", "Content Strategy"],
          results: { metric: "15K+", label: "Followers" },
          status: "Proven",
          button: "View Case Study",
        },
        {
          title: "Meta Ads Playbook",
          type: "Advertising Guide",
          description:
            "My complete guide to running profitable Facebook and Instagram ads for Tanzanian businesses. Covers audience targeting, creative testing, budget optimization, and scaling strategies I've used to generate 6-figure revenue for clients.",
          tags: ["Meta Ads", "Facebook", "Instagram"],
          results: { metric: "6-Figures", label: "Revenue Generated" },
          status: "Available",
          button: "View Case Study",
        },
        {
          title: "Content Creator Toolkit",
          type: "Digital Product",
          description:
            "A collection of 100+ Canva templates, caption templates, and content calendars I created to help small businesses post consistently on social media without hiring expensive designers or agencies.",
          tags: ["Canva", "Templates", "Social Media"],
          results: { metric: "500+", label: "Downloads" },
          status: "Selling",
          button: "View Case Study",
        },
      ],
    },
    about: {
      tag: "Why Work With Me",
      title: "",
      header: {
        greeting: "Hey, I'm ",
        name: "Mr.BigDeal",
        subtitle: "Your Brand Consultant & Digital Growth Partner",
      },
      profile: {
        badge1: "Brand Consultant",
        badge2: "Tanzania",
        followText: "Follow Me",
        instagramHandle: "@mr_bigdeal_digital",
      },
      content: {
        title: "Turning Brands Into ",
        titleHighlight: "Big Deals",
        paragraph1:
          "I'm not your average consultant. I eat, sleep, and breathe branding. With years of experience helping Tanzanian businesses stand out in the digital home, I know exactly what it takes to make your brand unforgettable.",
        paragraph2:
          "Whether you're starting from scratch or scaling up, I bring the strategy, creativity, and hustle needed to transform your vision into a brand that commands attention.",
        paragraph3:
          "Mr.BigDeal - Tanzania's leading digital marketing specialist based in Dar es Salaam.",
        paragraph4:
          "I specialize in Meta Ads Management, running expert paid advertising campaigns across Facebook and Instagram with strategic setup, monitoring, and optimization to reach your ideal audience with precision targeting. Through Social Media Management, I handle your brand's daily presence on social platforms, creating engaging content, managing community interactions, and optimizing profiles to build lasting connections.",
        paragraph5:
          "As a Sales Growth Specialist, my performance-driven strategies are proven to ×2 your sales. I bring data-backed approaches that transform digital presence into measurable revenue growth, helping businesses scale from startup to market leaders through strategic digital marketing.",
      },
      items: [
        {
          title: "Local Market Knowledge",
          desc: "I understand the Tanzanian business landscape — your customers, your platforms, and what actually works here.",
        },
        {
          title: "Done-For-You OR Coaching",
          desc: "Prefer to hand it off? I handle it. Want to learn? I teach you. You choose the model that fits your business.",
        },
        {
          title: "Data-Driven Approach",
          desc: "Every ad, post, and design decision is backed by strategy and analytics — not guesswork.",
        },
        {
          title: "Fast Turnaround, Clear Communication",
          desc: "You'll always know what's happening with your project. No ghosting, no delays without notice.",
        },
      ],
      visual: {
        title: "What You Get With Every Service",
        subtitle: "My commitment to every client",
        checklist: [
          "Clear strategy before any execution",
          "Regular updates and progress reports",
          "Results-focused, not just activity-focused",
          "Coaching included where relevant",
          "Communication in Swahili or English",
          "Honest advice — even if it costs me a sale",
        ],
      },
    },
    Pricing: {
      title: "Simple Pricing Plans",
      titleHighlight: "",
      subtitle: "Choose the perfect plan for your business growth",
      plans: {
        basic: {
          name: "Basic",
          description:
            "Perfect for startups and small businesses getting started",
          features: [
            "Social media management (2 platforms)",
            "Basic graphic design (5 posts/month)",
            "Monthly performance report",
            "Email support",
            "Content calendar planning",
          ],
        },
        premium: {
          name: "Premium",
          description: "Ideal for growing businesses ready to scale",
          features: [
            "Social media management (4 platforms)",
            "Advanced graphic design (15 posts/month)",
            "Meta Ads campaign management",
            "Weekly performance reports",
            "Priority WhatsApp support",
          ],
        },
        gold: {
          name: "Gold",
          description: "Complete digital transformation for serious businesses",
          features: [
            "Everything in Premium",
            "Unlimited graphic design",
            "Full Meta Ads & Google Ads",
            "Dedicated account manager",
            "24/7 priority support",
          ],
        },
      },
      cta: "Get Started",
      popular: "Most Popular",
    },
    button: {
      tag: "Ready to Grow?",
      title: "Let's Build Something That Actually Works",
      subtitle:
        "Book a free consultation or browse my digital products to get started today.",
      button: "Start Conversation",
    },
    footer: {
      brandDescription:
        "Your trusted digital marketing partner in Tanzania. Building systems that grow businesses through Meta Ads, social media, and branding expertise.",
      columns: {
        services: "Services",
        company: "Company",
        legal: "Legal & Contact",
      },
      links: {
        services: [
          { name: "Meta Ads", href: "#services" },
          { name: "Social Media", href: "#services" },
          { name: "Branding", href: "#services" },
          { name: "Digital Products", href: "#products" },
        ],
        company: [
          { name: "About", href: "#about" },
          { name: "Builds", href: "#builds" },
          { name: "Pricing", href: "#Pricing" },
          { name: "Contact", href: "#contact" },
        ],
        legal: [
          { name: "Developer", href: "#developer" },
          { name: "Terms", href: "#terms" },
          { name: "Privacy", href: "#privacy" },
          { name: "Sitemap", href: "#sitemap" },
        ],
      },
      bottomTags: "Meta Ads · Social Media · Branding · Digital Products",
      bottomLegal: "Developer · Terms · Privacy",
      copyright: "© 2026 Paul Digital. Tanzania. All rights reserved.",
      tags: "Meta Ads · Social Media · Branding · Digital Products",
    },
    contact: {
      title: "Let's ",
      titleHighlight: "Connect",
      titleEnd: " Now",
      infoTitle: "Contact Information",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        businessHours: "Business Hours",
      },
      values: {
        location: "Dar es Salaam, Tanzania",
        businessHours: "Mon-Fri: 9AM-6PM",
      },
      socialTitle: "Follow Us",
      formTitle: "Send a Message",
      form: {
        name: "Name",
        email: "Email",
        serviceInterest: "Service Interest",
        subject: "Subject",
        message: "Message",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          selectService: "Select a service",
          subject: "How can I help you?",
          message: "Tell me about your project...",
        },
      },
      services: [
        "Meta Ads Management",
        "Social Media Management",
        "Branding Services",
        "Website Development",
        "Digital Consulting",
        "Other",
      ],
      button: "Send Message",
      success: {
        title: "Message Sent!",
        message: "Thank you for reaching out. I'll get back to you soon.",
      },
    },
  },
  sw: {
    nav: {
      home: "Nyumbani",
      services: "Huduma",
      about: "Kuhusu",
      builds: "Miradi",
      courses: "Kozi",
      pricing: "Bei",
      contacts: "Mawasiliano",
      Pricing: "Bei",
      contact: "Wasiliana",
      open: "Fungua",
      button: "Anza Sasa",
      search: "Tafuta",
      like: "Penda",
      liked: "Umependa",
    },
    search: {
      placeholder: "Tafuta...",
      noResults: "Hakuna matokeo yaliyopatikana",
      trySearching: "Jaribu kutafuta huduma, bidhaa, au bei",
      navigate: "kuzunguka",
      select: "kuchagua",
      close: "kufunga",
    },
    hero: {
      title: "Ikuze ",
      titleHighlight: "Biashara",
      titleEnd: " Yako kwa Akili",
      subtitle:
        "Tunaunda chapa zinazovutia ambazo zinashika macho ya wateja na kuleta matokeo halisi katika ulimwengu wa kidijitali.",
      buttonPrimary: "Fanya Kazi Nami",
      buttonSecondary: "Angalia Bidhaa",
    },
    stats: {
      clients: "Wateja Waliohudumiwa",
      services: "Huduma Kuu",
      satisfaction: "Kuridhika kwa Wateja",
      location: "Tunapatikana Tanzania",
    },
    services: {
      tag: "Ninachofanya",
      title:
        "Huduma Zilizoundwa Kuleta <span class='text-brand-green'>Matokeo</span>",
      subtitle:
        "Iwe unataka tukufanyie au unataka kujifunza jinsi ya kufanya mwenyewe — niko hapa kukusaidia.",
      items: [
        {
          id: "01",
          title: "Usimamizi wa Matangazo ya Meta & Mafunzo",
          desc: "Ninaendesha kampeni bora za matangazo ya Facebook na Instagram kwa ajili ya biashara yako — au nakufundisha hatua kwa hatua ili uweze kuzisimamia mwenyewe kwa ujasiri.",
          features: [
            "Kuanzisha kampeni na kuwalenga wateja",
            "Mkakati wa ubunifu wa matangazo",
            "Matumizi bora ya bajeti",
            "Vipindi vya mafunzo vya mtu kwa mtu",
            "Ripoti za utendaji za kila mwezi",
          ],
        },
        {
          id: "02",
          title: "Usimamizi wa Mitandao ya Kijamii & Mafunzo",
          desc: "Usimamizi kamili wa mitandao ya kijamii — kuanzia uundaji wa maudhui hadi kuchapisha na kukuza ukurasa. Au jiandikishe kwenye mafunzo na ujifunze jinsi ya kushughulikia mwenyewe kwa ufundi.",
          features: [
            "Mkakati wa maudhui na ratiba",
            "Uandishi wa maelezo na picha za kuvutia",
            "Mbinu za kukuza wafuasi",
            "Mafunzo ya majukwaa (IG, FB, TikTok)",
            "Uchambuzi wa takwimu na taarifa",
          ],
        },
        {
          id: "03",
          title: "Ubunifu wa Picha & Huduma za Chapa",
          desc: "Jenga chapa ambayo watu wanaitambua na kuiamini. Kuanzia nembo hadi mifumo kamili ya utambulisho wa chapa — ninaunda picha zinazofanya biashara yako ionekane ya kitaalamu na ya kukumbukwa.",
          features: [
            "Ubunifu wa nembo na utambulisho wa chapa",
            "Picha za mitandao ya kijamii",
            "Vipeperushi, mabango na matangazo",
            "Mfumo wa rangi na fonti za chapa",
            "Kadi za biashara na vifaa vya ofisi",
          ],
        },
      ],
    },
    products: {
      tag: "Bidhaa za Kidijitali",
      title: "Jifunze kwa Kasi Yako <span class='text-brand-green'>Mwenyewe</span>",
      subtitle:
        "Vitabu vyangu vya kielektroniki na kozi vimeundwa kwa ajili ya wajasiriamali na wauza bidhaa wa Tanzania wanaotaka maarifa ya vitendo, yasiyo na upuuzi, ambayo wanaweza kuyatumia mara moja.",
      items: [
        {
          badge: "Kitabu-pepe",
          title: "Mwongozo wa Ujuzi wa Matangazo ya Meta",
          desc: "Mwongozo kamili kuanzia ngazi ya mwanzoni hadi ya kati kuhusu kuendesha matangazo yenye faida ya Facebook na Instagram — pamoja na mifano halisi kutoka sokoni Tanzania.",
          link: "Pata Kitabu-pepe",
        },
        {
          badge: "Kozi",
          title: "Kozi ya Kukua kwenye Mitandao ya Kijamii",
          desc: "Kozi ya video ya hatua kwa hatua kuhusu kukuza chapa yako kwenye Instagram na Facebook — ikijumuisha mkakati wa maudhui, vitambulisho, ratiba za kuchapisha, na mbinu za ushirikiano na wafuasi.",
          link: "Jiandikishe Sasa",
        },
        {
          badge: "Kitabu-pepe",
          title: "Misingi ya Chapa kwa Wamiliki wa Biashara",
          desc: "Elewa chapa imara inaonekanaje, jinsi ya kuijenga kwa bajeti ndogo, na kwa nini ni muhimu kwa ukuaji wa biashara wa muda mrefu katika masoko yenye ushindani.",
          link: "Pata Kitabu-pepe",
        },
      ],
    },
    builds: {
      title: "Ujuzi wa ",
      titleHighlight: "Mitandao ya Kijamii",
      subtitle:
        "Mifumo, mikakati, na zana nilizounda ili kubobea katika uuzaji wa mitandao ya kijamii",
      projects: [
        {
          title: "Mfumo wa Kukua kwenye Instagram",
          type: "Mkakati wa Mitandao ya Kijamii",
          description:
            "Mfumo wa kina niliouunda kwa ajili ya kukua kwa akaunti za Instagram bila kutumia pesa. Unajumuisha nguzo za maudhui, ratiba za kuchapisha, mbinu za utafutaji wa vitambulisho, na mbinu za ushirikiano zilizonisaidia kujenga wafuasi zaidi ya 15,000 kwa chapa yangu.",
          tags: ["Instagram", "Ukuaji wa Asili", "Mkakati wa Maudhui"],
          results: { metric: "15K+", label: "Wafuasi" },
          status: "Imethibitishwa",
          button: "Tazama Uchunguzi",
        },
        {
          title: "Mwongozo wa Meta Ads",
          type: "Mwongozo wa Matangazo",
          description:
            "Mwongozo wangu kamili wa kuendesha matangazo yenye faida ya Facebook na Instagram kwa biashara za Tanzania. Unashughulikia kuwalenga wateja, kujaribu ubunifu, kuboresha bajeti, na mikakati ya kupanua ambayo nimetumia kuzalisha mapato ya tarakimu sita kwa wateja wangu.",
          tags: ["Matangazo ya Meta", "Facebook", "Instagram"],
          results: { metric: "6-Figures", label: "Mapato Yaliyopatikana" },
          status: "Inapatikana",
          button: "Tazama Uchunguzi",
        },
        {
          title: "Zana za Mbunifu wa Maudhui",
          type: "Bidhaa ya Kidijitali",
          description:
            "Mkusanyiko wa violezo 100+ vya Canva, violezo vya maelezo, na kalenda za maudhui nilizounda kusaidia biashara ndogo kuchapisha mara kwa mara kwenye mitandao ya kijamii bila kulazimika kuajiri wabunifu au mashirika ya bei ghali.",
          tags: ["Canva", "Violezo", "Mitandao ya Kijamii"],
          results: { metric: "500+", label: "Vipakuzi" },
          status: "Inauzwa",
          button: "Tazama Uchunguzi",
        },
      ],
    },
    about: {
      tag: "Kwa Nini Ufanye Kazi Nami",
      title: "",
      header: {
        greeting: "Habari, Mimi ni ",
        name: "Mr.BigDeal",
        subtitle: "Mshauri Wako wa Chapa na Mshirika wa Ukuaji wa Kidijitali",
      },
      profile: {
        badge1: "Mshauri wa Chapa",
        badge2: "Tanzania",
        followText: "Nifuate",
        instagramHandle: "@mr_bigdeal_digital",
      },
      content: {
        title: "Kubadilisha Chapa Kuwa ",
        titleHighlight: "Biashara Kubwa",
        paragraph1:
          "Mimi si mshauri wa kawaida. Ninakula, ninalala, na ninapumua chapa. Kwa uzoefu wa miaka mingi ya kuwasaidia wafanyabiashara wa Tanzania kujitofautisha katika ulimwengu wa kidijitali, ninajua vizuri kinachohitajika kufanya chapa yako isisahaulike.",
        paragraph2:
          "Iwe unaanza kutoka mwanzo au unapanua biashara yako, ninaleta mkakati, ubunifu, na bidii inayohitajika kubadilisha ndoto yako kuwa chapa inayovutia na kutambuliwa.",
        paragraph3:
          "Mr.BigDeal — mtaalamu mkuu wa uuzaji wa kidijitali nchini Tanzania, makao yake Dar es Salaam.",
        paragraph4:
          "Nina utaalamu katika Usimamizi wa Matangazo ya Meta, nikiendesha kampeni za matangazo ya kulipwa kwenye Facebook na Instagram kwa usanidi wa kimkakati, ufuatiliaji, na uboreshaji ili kufikia wateja wako wanaolengwa kwa usahihi. Kupitia Usimamizi wa Mitandao ya Kijamii, ninashughulikia uwepo wa kila siku wa chapa yako kwenye mitandao, nikiumba maudhui yanayovutia, kudhibiti mazungumzo na wafuasi, na kuboresha wasifu ili kujenga uhusiano wa kudumu.",
        paragraph5:
          "Kama Mtaalamu wa Ukuaji wa Mauzo, mikakati yangu inayolenga matokeo imethibitishwa kuongeza mauzo mara mbili. Ninaleta mbinu zinazotegemea takwimu ambazo zinabadilisha uwepo wa kidijitali kuwa ukuaji wa mapato unaopimika, nikisaidia biashara kukua kutoka hatua za mwanzo hadi kuwa viongozi wa soko kupitia uuzaji wa kimkakati wa kidijitali.",
      },
      items: [
        {
          title: "Uelewa wa Soko la Ndani",
          desc: "Ninaelewa mazingira ya biashara ya Tanzania — wateja wako, majukwaa unayotumia, na kinachofanya kazi hapa kweli kweli.",
        },
        {
          title: "Tukufanyie AU Tukufundishe",
          desc: "Unataka tukufanyie? Tunashughulikia. Unataka kujifunza? Tunakufundisha. Wewe unachagua mfumo unaofaa biashara yako.",
        },
        {
          title: "Mbinu Inayotegemea Takwimu",
          desc: "Kila tangazo, chapisho, na uamuzi wa ubunifu unategemea mkakati na uchambuzi wa data — sio kubahatisha.",
        },
        {
          title: "Uwasilishaji wa Haraka, Mawasiliano Wazi",
          desc: "Utajua daima kinachoendelea na mradi wako. Hakuna kupotea, hakuna kuchelewa bila taarifa.",
        },
      ],
      visual: {
        title: "Unachopata kwa Kila Huduma",
        subtitle: "Ahadi yangu kwa kila mteja",
        checklist: [
          "Mkakati wazi kabla ya utekelezaji wowote",
          "Masasisho ya mara kwa mara na ripoti za maendeleo",
          "Tunalenga matokeo, sio shughuli tu",
          "Mafunzo yanajumuishwa pale yanapohitajika",
          "Mawasiliano kwa Kiswahili au Kiingereza",
          "Ushauri wa uaminifu — hata kama utanipotezea mauzo",
        ],
      },
    },
    Pricing: {
      title: "Mipango Rahisi ya Bei",
      titleHighlight: "",
      subtitle: "Chagua mpango unaofaa zaidi kwa ukuaji wa biashara yako",
      plans: {
        basic: {
          name: "Msingi",
          description:
            "Bora kwa biashara zinazoanza na biashara ndogo ndogo",
          features: [
            "Usimamizi wa mitandao ya kijamii (majukwaa 2)",
            "Ubunifu wa picha wa msingi (machapisho 5 kwa mwezi)",
            "Ripoti ya utendaji ya kila mwezi",
            "Msaada kupitia barua pepe",
            "Upangaji wa kalenda ya maudhui",
          ],
        },
        premium: {
          name: "Juu",
          description: "Bora kwa biashara zinazokua na ziko tayari kupanuka",
          features: [
            "Usimamizi wa mitandao ya kijamii (majukwaa 4)",
            "Ubunifu wa picha wa hali ya juu (machapisho 15 kwa mwezi)",
            "Usimamizi wa kampeni za Meta Ads",
            "Ripoti za utendaji za kila wiki",
            "Msaada wa kipaumbele kupitia WhatsApp",
          ],
        },
        gold: {
          name: "Dhahabu",
          description: "Mabadiliko kamili ya kidijitali kwa biashara zinazojali matokeo",
          features: [
            "Kila kitu kilichopo kwenye mpango wa Juu",
            "Ubunifu wa picha bila kikomo",
            "Meta Ads na Google Ads kamili",
            "Msimamizi maalum wa akaunti yako",
            "Msaada wa kipaumbele masaa 24, siku 7",
          ],
        },
      },
      cta: "Anza Sasa",
      popular: "Maarufu Zaidi",
    },
    button: {
      tag: "Uko Tayari Kukua?",
      title: "Tujenge Kitu Kinachofanya Kazi Kweli Kweli",
      subtitle:
        "Weka miadi ya ushauri wa bure au angalia bidhaa zangu za kidijitali ili kuanza leo.",
      button: "Anza Mazungumzo",
    },
    footer: {
      brandDescription:
        "Mshirika wako wa kuaminika wa uuzaji wa kidijitali nchini Tanzania. Tunaunda mifumo inayokua biashara kupitia Matangazo ya Meta, mitandao ya kijamii, na utaalamu wa chapa.",
      columns: {
        services: "Huduma",
        company: "Kampuni",
        legal: "Kisheria na Mawasiliano",
      },
      links: {
        services: [
          { name: "Matangazo ya Meta", href: "#services" },
          { name: "Mitandao ya Kijamii", href: "#services" },
          { name: "Chapa", href: "#services" },
          { name: "Bidhaa za Kidijitali", href: "#products" },
        ],
        company: [
          { name: "Kuhusu", href: "#about" },
          { name: "Miradi", href: "#builds" },
          { name: "Bei", href: "#Pricing" },
          { name: "Wasiliana", href: "#contact" },
        ],
        legal: [
          { name: "Mtengenezaji", href: "#developer" },
          { name: "Masharti", href: "#terms" },
          { name: "Faragha", href: "#privacy" },
          { name: "Ramani ya Tovuti", href: "#sitemap" },
        ],
      },
      bottomTags:
        "Matangazo ya Meta · Mitandao ya Kijamii · Chapa · Bidhaa za Kidijitali",
      bottomLegal: "Mtengenezaji · Masharti · Faragha",
      copyright: "© 2026 Paul Digital. Tanzania. Haki zote zimehifadhiwa.",
      tags: "Matangazo ya Meta · Mitandao ya Kijamii · Chapa · Bidhaa za Kidijitali",
    },
    contact: {
      title: "Tuwasiliane ",
      titleHighlight: "Sasa",
      titleEnd: " Hivi",
      infoTitle: "Taarifa za Mawasiliano",
      labels: {
        email: "Barua pepe",
        phone: "Simu",
        location: "Mahali Tulipo",
        businessHours: "Masaa ya Kazi",
      },
      values: {
        location: "Dar es Salaam, Tanzania",
        businessHours: "Jumatatu–Ijumaa: 9AM–6PM",
      },
      socialTitle: "Tufuate",
      formTitle: "Tuma Ujumbe",
      form: {
        name: "Jina",
        email: "Barua pepe",
        serviceInterest: "Huduma Unayohitaji",
        subject: "Kichwa cha Ujumbe",
        message: "Ujumbe",
        placeholders: {
          name: "Jina lako",
          email: "barua@yako.com",
          selectService: "Chagua huduma",
          subject: "Naweza kukusaidiaje?",
          message: "Niambie kuhusu mradi wako...",
        },
      },
      services: [
        "Usimamizi wa Matangazo ya Meta",
        "Usimamizi wa Mitandao ya Kijamii",
        "Huduma za Chapa",
        "Utengenezaji wa Tovuti",
        "Ushauri wa Kidijitali",
        "Nyingine",
      ],
      button: "Tuma Ujumbe",
      success: {
        title: "Ujumbe Umetumwa!",
        message: "Asante kwa kuwasiliana nami. Nitakujibu hivi karibuni.",
      },
    },
  },
};