export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  highlight?: boolean;
  externalUrl: string;
}

export interface Unit {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  image: string;
  mapEmbed: string;
  plans: Plan[];
}

export const units: Unit[] = [
  {
    id: "centro",
    name: "Arena Fitness Centro",
    neighborhood: "Centro",
    city: "São Paulo",
    address: "Av. Paulista, 1000 - Centro, São Paulo - SP",
    phone: "(11) 3333-1001",
    whatsapp: "(11) 99999-1001",
    email: "centro@arenafitness.com.br",
    hours: {
      weekdays: "05:00 - 23:00",
      saturday: "07:00 - 18:00",
      sunday: "08:00 - 14:00"
    },
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1",
    plans: [
      {
        id: "centro-mensal",
        name: "Plano Mensal",
        price: 149.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/centro-mensal"
      },
      {
        id: "centro-trimestral",
        name: "Plano Trimestral",
        price: 129.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/centro-trimestral"
      },
      {
        id: "centro-anual",
        name: "Plano Anual",
        price: 99.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "2 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/centro-anual"
      }
    ]
  },
  {
    id: "moema",
    name: "Arena Fitness Moema",
    neighborhood: "Moema",
    city: "São Paulo",
    address: "Av. Ibirapuera, 2500 - Moema, São Paulo - SP",
    phone: "(11) 3333-1002",
    whatsapp: "(11) 99999-1002",
    email: "moema@arenafitness.com.br",
    hours: {
      weekdays: "05:30 - 23:00",
      saturday: "07:00 - 20:00",
      sunday: "08:00 - 16:00"
    },
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "moema-mensal",
        name: "Plano Mensal",
        price: 169.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário premium"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/moema-mensal"
      },
      {
        id: "moema-trimestral",
        name: "Plano Trimestral",
        price: 149.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário premium", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/moema-trimestral"
      },
      {
        id: "moema-semestral",
        name: "Plano Semestral",
        price: 129.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário premium", "2 avaliações físicas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/moema-semestral"
      },
      {
        id: "moema-anual",
        name: "Plano Anual",
        price: 109.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário premium", "3 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/moema-anual"
      }
    ]
  },
  {
    id: "pinheiros",
    name: "Arena Fitness Pinheiros",
    neighborhood: "Pinheiros",
    city: "São Paulo",
    address: "Rua dos Pinheiros, 800 - Pinheiros, São Paulo - SP",
    phone: "(11) 3333-1003",
    whatsapp: "(11) 99999-1003",
    email: "pinheiros@arenafitness.com.br",
    hours: {
      weekdays: "06:00 - 22:00",
      saturday: "08:00 - 18:00",
      sunday: "08:00 - 14:00"
    },
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "pinheiros-mensal",
        name: "Plano Mensal",
        price: 159.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/pinheiros-mensal"
      },
      {
        id: "pinheiros-trimestral",
        name: "Plano Trimestral",
        price: 139.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/pinheiros-trimestral"
      },
      {
        id: "pinheiros-anual",
        name: "Plano Anual",
        price: 109.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "2 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/pinheiros-anual"
      }
    ]
  },
  {
    id: "vila-mariana",
    name: "Arena Fitness Vila Mariana",
    neighborhood: "Vila Mariana",
    city: "São Paulo",
    address: "Rua Domingos de Moraes, 1200 - Vila Mariana, São Paulo - SP",
    phone: "(11) 3333-1004",
    whatsapp: "(11) 99999-1004",
    email: "vilamariana@arenafitness.com.br",
    hours: {
      weekdays: "05:00 - 23:00",
      saturday: "06:00 - 18:00",
      sunday: "07:00 - 14:00"
    },
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "vilamariana-mensal",
        name: "Plano Mensal",
        price: 139.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/vilamariana-mensal"
      },
      {
        id: "vilamariana-trimestral",
        name: "Plano Trimestral",
        price: 119.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/vilamariana-trimestral"
      },
      {
        id: "vilamariana-anual",
        name: "Plano Anual",
        price: 89.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "2 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/vilamariana-anual"
      }
    ]
  },
  {
    id: "santana",
    name: "Arena Fitness Santana",
    neighborhood: "Santana",
    city: "São Paulo",
    address: "Av. Cruzeiro do Sul, 500 - Santana, São Paulo - SP",
    phone: "(11) 3333-1005",
    whatsapp: "(11) 99999-1005",
    email: "santana@arenafitness.com.br",
    hours: {
      weekdays: "05:30 - 22:30",
      saturday: "07:00 - 17:00",
      sunday: "08:00 - 13:00"
    },
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "santana-mensal",
        name: "Plano Mensal",
        price: 129.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/santana-mensal"
      },
      {
        id: "santana-trimestral",
        name: "Plano Trimestral",
        price: 109.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/santana-trimestral"
      },
      {
        id: "santana-anual",
        name: "Plano Anual",
        price: 79.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário", "2 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/santana-anual"
      }
    ]
  },
  {
    id: "tatuape",
    name: "Arena Fitness Tatuapé",
    neighborhood: "Tatuapé",
    city: "São Paulo",
    address: "Rua Tuiuti, 1500 - Tatuapé, São Paulo - SP",
    phone: "(11) 3333-1006",
    whatsapp: "(11) 99999-1006",
    email: "tatuape@arenafitness.com.br",
    hours: {
      weekdays: "05:00 - 23:00",
      saturday: "06:00 - 19:00",
      sunday: "07:00 - 15:00"
    },
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "tatuape-mensal",
        name: "Plano Mensal",
        price: 139.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/tatuape-mensal"
      },
      {
        id: "tatuape-trimestral",
        name: "Plano Trimestral",
        price: 119.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/tatuape-trimestral"
      },
      {
        id: "tatuape-semestral",
        name: "Plano Semestral",
        price: 99.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "2 avaliações físicas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/tatuape-semestral"
      },
      {
        id: "tatuape-anual",
        name: "Plano Anual",
        price: 84.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "3 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/tatuape-anual"
      }
    ]
  },
  {
    id: "lapa",
    name: "Arena Fitness Lapa",
    neighborhood: "Lapa",
    city: "São Paulo",
    address: "Rua Guaicurus, 200 - Lapa, São Paulo - SP",
    phone: "(11) 3333-1007",
    whatsapp: "(11) 99999-1007",
    email: "lapa@arenafitness.com.br",
    hours: {
      weekdays: "06:00 - 22:00",
      saturday: "07:00 - 17:00",
      sunday: "08:00 - 14:00"
    },
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "lapa-mensal",
        name: "Plano Mensal",
        price: 134.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/lapa-mensal"
      },
      {
        id: "lapa-trimestral",
        name: "Plano Trimestral",
        price: 114.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/lapa-trimestral"
      },
      {
        id: "lapa-anual",
        name: "Plano Anual",
        price: 89.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário", "2 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/lapa-anual"
      }
    ]
  },
  {
    id: "brooklin",
    name: "Arena Fitness Brooklin",
    neighborhood: "Brooklin",
    city: "São Paulo",
    address: "Av. Eng. Luís Carlos Berrini, 1800 - Brooklin, São Paulo - SP",
    phone: "(11) 3333-1008",
    whatsapp: "(11) 99999-1008",
    email: "brooklin@arenafitness.com.br",
    hours: {
      weekdays: "05:00 - 23:00",
      saturday: "06:00 - 20:00",
      sunday: "07:00 - 16:00"
    },
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "brooklin-mensal",
        name: "Plano Mensal",
        price: 179.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/brooklin-mensal"
      },
      {
        id: "brooklin-trimestral",
        name: "Plano Trimestral",
        price: 159.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/brooklin-trimestral"
      },
      {
        id: "brooklin-semestral",
        name: "Plano Semestral",
        price: 139.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "2 avaliações físicas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/brooklin-semestral"
      },
      {
        id: "brooklin-anual",
        name: "Plano Anual",
        price: 119.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "4 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/brooklin-anual"
      }
    ]
  },
  {
    id: "perdizes",
    name: "Arena Fitness Perdizes",
    neighborhood: "Perdizes",
    city: "São Paulo",
    address: "Rua Cardoso de Almeida, 600 - Perdizes, São Paulo - SP",
    phone: "(11) 3333-1009",
    whatsapp: "(11) 99999-1009",
    email: "perdizes@arenafitness.com.br",
    hours: {
      weekdays: "05:30 - 22:30",
      saturday: "07:00 - 18:00",
      sunday: "08:00 - 14:00"
    },
    image: "https://images.unsplash.com/photo-1637430308197-25cedcc45511?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "perdizes-mensal",
        name: "Plano Mensal",
        price: 149.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/perdizes-mensal"
      },
      {
        id: "perdizes-trimestral",
        name: "Plano Trimestral",
        price: 129.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/perdizes-trimestral"
      },
      {
        id: "perdizes-anual",
        name: "Plano Anual",
        price: 99.90,
        period: "/mês",
        features: ["Acesso ilimitado", "Musculação", "Cardio", "Vestiário completo", "2 avaliações físicas", "Aulas coletivas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/perdizes-anual"
      }
    ]
  },
  {
    id: "itaim-bibi",
    name: "Arena Fitness Itaim Bibi",
    neighborhood: "Itaim Bibi",
    city: "São Paulo",
    address: "Rua João Cachoeira, 400 - Itaim Bibi, São Paulo - SP",
    phone: "(11) 3333-1010",
    whatsapp: "(11) 99999-1010",
    email: "itaimbibi@arenafitness.com.br",
    hours: {
      weekdays: "05:00 - 24:00",
      saturday: "06:00 - 20:00",
      sunday: "07:00 - 16:00"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65512708502164!3d-23.56509298468095",
    plans: [
      {
        id: "itaimbibi-mensal",
        name: "Plano Mensal",
        price: 189.90,
        period: "/mês",
        features: ["Acesso 24h", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "Armário fixo"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/itaimbibi-mensal"
      },
      {
        id: "itaimbibi-trimestral",
        name: "Plano Trimestral",
        price: 169.90,
        period: "/mês",
        features: ["Acesso 24h", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "Armário fixo", "1 avaliação física"],
        highlight: true,
        externalUrl: "https://sistema.arenafitness.com.br/checkout/itaimbibi-trimestral"
      },
      {
        id: "itaimbibi-semestral",
        name: "Plano Semestral",
        price: 149.90,
        period: "/mês",
        features: ["Acesso 24h", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "Armário fixo", "2 avaliações físicas"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/itaimbibi-semestral"
      },
      {
        id: "itaimbibi-anual",
        name: "Plano Anual",
        price: 129.90,
        period: "/mês",
        features: ["Acesso 24h", "Musculação premium", "Cardio", "Vestiário premium", "Toalhas", "Armário fixo", "4 avaliações físicas", "Aulas coletivas", "Personal 1x/mês"],
        externalUrl: "https://sistema.arenafitness.com.br/checkout/itaimbibi-anual"
      }
    ]
  }
];

export const getUnitById = (id: string): Unit | undefined => {
  return units.find(unit => unit.id === id);
};
