interface IFeature {
  name: string;
  description: string;
}

export interface IService {
  name: string;
  description: string;
  priceList: {
    name: string;
    price: string;
  }[];
  fetures: {
    name: string;
    description: string;
  }[];
  featureImage: string;
  id: string;
}

export const ServiceDummyData: IService[] = [
  {
    name: "Endodonție",
    description: "Obturatii de canal sau extirpari a nervilor.",
    id: "1",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Implantologie",
    description:
      "Implanturi dentare prin metode minim invazive de chirurgie ghidată.",
    id: "2",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Terapie",
    description: "Tratamente stomatologice cu anestezie generală.",
    id: "3",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Protetică fixă",
    description:
      'Protezări pe implanturi prin metoda "All on 4" sau "All on 6"',
    id: "4",
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Ortodonție",
    description: "Aplicam aparate dentare ortodontice fixe si mobile.",
    id: "5",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Protetică mobilă",
    description:
      'Protezări imediate pe implanturi prin metoda "One day Implant"',
    id: "6",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Chirurgie",
    description:
      "Diferite interventii de extractie, gingivectomie sau decapusonare",
    id: "7",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
  {
    name: "Profilaxie",
    description:
      "Oferim servicii de estetică dentară realizând albiri dentare cu lampa UV.",
    id: "8",
    fetures: [
      {
        name: "Obturație de canal",
        description:
          "Ultima etapă a tratamentului endodontic, obturația de canal presupune sigilarea unui canal ce în prealabil a fost curățat, preparat și dezinfectat. În anumite cazuri procedura se poate realiza într-o singură ședință, însă deseori este nevoie de tratament medicamentos – ceea ce prelungește perioada minimă necesară.",
      },
      {
        name: "Extirpare",
        description:
          "Extirparea nervului este îndepărtarea nervului dentar dintr-un canal. Intervenția poate fi realizată asupra unui nerv viu (necesitând anestezie și o singură ședință) sau asupra unuia devitalizat în prealabil (fiind necesare două ședințe pentru cele două etape).",
      },
      {
        name: "Tratament rotativ",
        description:
          "Intervenția rotativă este pregătirea mecanică a canalului radicular, prin care acesta este lărgit și capătă forma necesară următoarelor etape ale tratamentului endodontic.",
      },
    ],
    priceList: [
      {
        name: "Extirpare vitală monoradiculari",
        price: "150",
      },
      {
        name: "Extirpare vitală pluriradiculari",
        price: "200   ",
      },
      {
        name: "Obturație de canal monoradiculari",
        price: "200",
      },
      {
        name: "Obturație de canal pluriradiculari",
        price: "200",
      },
      {
        name: "Dezobturare / canal",
        price: "200",
      },
      {
        name: "Tratament canal calciu, antiseptic",
        price: "200",
      },
      {
        name: "Coafaj indirect",
        price: "200",
      },
      {
        name: "Drenaj endodontic",
        price: "200",
      },
      {
        name: "Tratament rotativ monoradiculari",
        price: "200",
      },
      {
        name: "Tratament rotativ pluriradiculari",
        price: "200",
      },
      {
        name: "Îndepărtare pivot",
        price: "200",
      },
    ],
    featureImage: "/images/17.png",
  },
];
