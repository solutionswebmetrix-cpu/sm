import lcdTvPanelImage from '@/assets/LCD  TV Panel.jpeg';

export const siteConfig = {
  name: 'S.M Kitchen Interior',
  tagline: 'Your Vision, Our Dream',
  since: '2009',
  director: 'Mr. Bijender Barawal',
  phone: '+91 8368994273',
  phoneRaw: '918368994273',
  email: 'bittubarawal0@gmail.com',
  address: {
    line1: 'Farmana, Sonipat',
    line2: 'Haryana - 131408, India',
    full: 'Farmana, Sonipat, Haryana - 131408, India',
  },
  mapsQuery: 'Farmana, Sonipat, Haryana 131408',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const services: ServiceItem[] = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    description:
      'Stylish, functional and customized modular kitchens designed around your space, lifestyle and storage requirements.',
    image:
      'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Premium modular kitchen design in Sonipat with modern cabinets and elegant finishes',
  },
  {
    id: 'modular-wardrobe',
    title: 'Modular Wardrobe',
    description:
      'Elegant and practical wardrobes with smart storage solutions and modern finishes.',
    image:
      'https://images.pexels.com/photos/30465909/pexels-photo-30465909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern modular wardrobe with glass doors in Sonipat by SM Kitchen Interior',
  },
  {
    id: 'lcd-tv-panel',
    title: 'LCD / TV Panel',
    description:
      'Contemporary TV and LCD panel designs that create a sophisticated focal point for your living space.',
    image: lcdTvPanelImage,
    alt: 'Modern LCD TV panel wall design in Sonipat with wooden accents',
  },
  {
    id: 'modular-bed',
    title: 'Modular Bed',
    description:
      'Modern modular bed designs combining comfort, functionality and elegant aesthetics.',
    image:
      'https://images.pexels.com/photos/7546276/pexels-photo-7546276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant modular bed design with premium headboard by SM Kitchen Interior',
  },
  {
    id: 'flush-door',
    title: 'Flush Door',
    description:
      'Clean, modern flush door solutions designed to complement your overall interior.',
    image:
      'https://images.pexels.com/photos/8134755/pexels-photo-8134755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern flush door design complementing interior decor in Sonipat',
  },
  {
    id: 'complete-interior',
    title: 'Complete Interior Designing',
    description:
      'Complete interior solutions designed to create a cohesive and beautiful home environment.',
    image:
      'https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Complete home interior designing project in Sonipat with cohesive styling',
  },
];

export const customizedFurnitureService: ServiceItem = {
  id: 'customized-furniture',
  title: 'Customized Furniture & Interior Solutions',
  description:
    'Customized furniture and interior solutions planned around your space, preferences and requirements.',
  image:
    'https://images.pexels.com/photos/7018836/pexels-photo-7018836.jpeg?auto=compress&cs=tinysrgb&w=940',
  alt: 'Customized home interior solutions by S.M Kitchen Interior',
};

export const allServices = [...services, customizedFurnitureService];

export const serviceSlugs: Record<string, string> = {
  'modular-kitchen': 'modular-kitchen-design',
  'modular-wardrobe': 'modular-wardrobe-design',
  'lcd-tv-panel': 'tv-panel-design',
  'modular-bed': 'modular-bed-design',
  'flush-door': 'flush-door-design',
  'complete-interior': 'complete-interior-design',
  'customized-furniture': 'customized-furniture-interior-solutions',
};

export const servicePageDetails: Record<
  string,
  {
    overview: string;
    features: string[];
    designOptions: string[];
    materials: string;
    faq: { question: string; answer: string };
  }
> = {
  'modular-kitchen': {
    overview:
      'A well-planned modular kitchen brings preparation, cooking and storage together in a layout tailored to your room. We discuss how you use the space and shape the design around your requirements.',
    features: [
      'Layout planned around the available room and workflow',
      'Storage arranged for everyday kitchen essentials',
      'Color and finish choices coordinated with your home',
    ],
    designOptions: ['L-shaped', 'U-shaped', 'Parallel', 'Straight-line'],
    materials:
      'Cabinet materials, countertop choices, hardware and finishes can be discussed during planning and selected to suit your needs and budget.',
    faq: {
      question: 'Can the kitchen layout be customized for my room?',
      answer:
        'Yes. The layout is planned around your room dimensions, storage needs and the way you use your kitchen.',
    },
  },
  'modular-wardrobe': {
    overview:
      'A modular wardrobe can make bedroom storage easier to organize while complementing the room. We plan the configuration, internal storage and exterior finish around your available space.',
    features: [
      'Storage configuration based on your belongings',
      'Space-conscious layouts for the room',
      'Exterior finishes selected to suit your interior',
    ],
    designOptions: ['Sliding-door', 'Hinged-door', 'Full-height', 'Mirrored-front'],
    materials:
      'Panel options, hardware, door styles and surface finishes are selected with you as part of the design and quotation.',
    faq: {
      question: 'Can the wardrobe interior be arranged to my needs?',
      answer:
        'Yes. Shelves, hanging space and other storage areas can be planned around the way you want to organize your belongings.',
    },
  },
  'lcd-tv-panel': {
    overview:
      'A TV panel creates a considered focal point for a living room while giving cables and media equipment a planned place. The design is adapted to the wall and the rest of your room.',
    features: [
      'Panel proportions planned for the wall and screen',
      'Options for practical media storage',
      'Finishes coordinated with the living space',
    ],
    designOptions: ['Minimal wall panel', 'Storage-integrated unit', 'Wood-accent panel'],
    materials:
      'Panel surfaces, colors, textures and storage details can be reviewed and finalized to complement your room.',
    faq: {
      question: 'Can a TV panel include storage?',
      answer:
        'Storage can be incorporated into the design where the wall and your requirements allow.',
    },
  },
  'modular-bed': {
    overview:
      'A modular bed is planned to suit the bedroom layout and the way you use the space. Headboard style, proportions and practical storage can be discussed as part of the design.',
    features: [
      'Sizing and placement considered for the bedroom',
      'Headboard style coordinated with the interior',
      'Optional storage planned around your requirements',
    ],
    designOptions: ['Upholstered headboard', 'Panel headboard', 'Storage bed'],
    materials:
      'Upholstery, panel finishes, colors and hardware choices are finalized during consultation.',
    faq: {
      question: 'Can bed storage be included?',
      answer:
        'Storage options can be discussed and included when suitable for your room and preferred bed design.',
    },
  },
  'flush-door': {
    overview:
      'Flush doors provide a clean, simple finish that can be coordinated with the surrounding interior. We help consider the door style and finish in context with the space.',
    features: [
      'Simple profiles that suit a range of interiors',
      'Finish choices coordinated with nearby surfaces',
      'Door selection considered as part of the overall design',
    ],
    designOptions: ['Plain finish', 'Wood-look finish', 'Coordinated color finish'],
    materials:
      'Available door construction, surface finishes and hardware should be confirmed during consultation based on the project requirements.',
    faq: {
      question: 'Can the door finish match my interior?',
      answer:
        'Finish options can be discussed to coordinate the door with the colors and materials used in your space.',
    },
  },
  'complete-interior': {
    overview:
      'Complete interior designing brings the rooms and key design choices of a home together. We work through your requirements and coordinate the spaces into a coherent, practical interior.',
    features: [
      'A connected design direction across selected rooms',
      'Planning based on your lifestyle and space',
      'Furniture and finish choices considered together',
    ],
    designOptions: ['Room-by-room planning', 'Coordinated home interiors', 'Customized furniture'],
    materials:
      'Furniture, surface finishes and other selections are discussed and agreed for each part of the project.',
    faq: {
      question: 'Can I discuss only selected rooms?',
      answer:
        'Yes. You can discuss the rooms and scope you have in mind during the initial consultation.',
    },
  },
  'customized-furniture': {
    overview:
      'Customized furniture and interior solutions are shaped around a particular space or requirement. We discuss the intended use, dimensions and preferred look before proposing a suitable direction.',
    features: [
      'Designed around your specific space and use',
      'Dimensions and storage planned for the requirement',
      'Styles and finishes considered with your existing interior',
    ],
    designOptions: ['Made-to-fit storage', 'Customized furniture', 'Coordinated interior elements'],
    materials:
      'Construction and finish choices depend on the furniture or interior element; options are reviewed with you before finalizing.',
    faq: {
      question: 'Can I ask about a custom furniture requirement?',
      answer:
        'Yes. Share the space, intended use and approximate dimensions so the requirement can be discussed.',
    },
  },
};

export type PortfolioCategory =
  | 'All'
  | 'Modular Kitchen'
  | 'Wardrobe'
  | 'Living Room'
  | 'Bedroom'
  | 'TV Panel'
  | 'Complete Interiors';

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  image: string;
  alt: string;
  span?: 'wide' | 'tall';
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Contemporary Modular Kitchen',
    category: 'Modular Kitchen',
    image:
      'https://images.pexels.com/photos/6920446/pexels-photo-6920446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern modular kitchen in Sonipat with sleek white cabinets and open-plan layout',
    span: 'wide',
  },
  {
    id: 'p2',
    title: 'Walk-in Glass Wardrobe',
    category: 'Wardrobe',
    image:
      'https://images.pexels.com/photos/30465909/pexels-photo-30465909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Walk-in wardrobe with glass doors designed in Farmana, Sonipat',
  },
  {
    id: 'p3',
    title: 'Living Room TV Panel',
    category: 'TV Panel',
    image:
      'https://images.pexels.com/photos/14614673/pexels-photo-14614673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Contemporary TV panel design for living room in Sonipat',
  },
  {
    id: 'p4',
    title: 'Luxury Bedroom Interior',
    category: 'Bedroom',
    image:
      'https://images.pexels.com/photos/8082562/pexels-photo-8082562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxury bedroom interior design with ambient lighting in Sonipat',
    span: 'tall',
  },
  {
    id: 'p5',
    title: 'Open-Plan Kitchen Design',
    category: 'Modular Kitchen',
    image:
      'https://images.pexels.com/photos/8146160/pexels-photo-8146160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bright modular kitchen design with minimalist style in Sonipat',
  },
  {
    id: 'p6',
    title: 'Elegant Living Room',
    category: 'Living Room',
    image:
      'https://images.pexels.com/photos/8089161/pexels-photo-8089161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant living room interior with modern furniture in Sonipat',
  },
  {
    id: 'p7',
    title: 'Modern Bedroom with Wardrobe',
    category: 'Bedroom',
    image:
      'https://images.pexels.com/photos/7535012/pexels-photo-7535012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern bedroom with built-in wardrobe designed in Farmana, Haryana',
  },
  {
    id: 'p8',
    title: 'Wooden TV Wall Panel',
    category: 'TV Panel',
    image:
      'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'TV wall panel with wooden cladding design in Sonipat',
    span: 'wide',
  },
  {
    id: 'p9',
    title: 'Complete Home Interior',
    category: 'Complete Interiors',
    image:
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Complete home interior designing project with modern minimalist design in Sonipat',
  },
  {
    id: 'p10',
    title: 'Sleek Wardrobe Design',
    category: 'Wardrobe',
    image:
      'https://images.pexels.com/photos/6527064/pexels-photo-6527064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern wardrobe design with smart storage in Sonipat',
  },
  {
    id: 'p11',
    title: 'Spacious Living Room',
    category: 'Living Room',
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious living room with elegant chandeliers and contemporary decor in Sonipat',
    span: 'wide',
  },
  {
    id: 'p12',
    title: 'Dark Wood Kitchen',
    category: 'Modular Kitchen',
    image:
      'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modular kitchen with dark wood cabinets and marble countertops in Sonipat',
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'Modular Kitchen',
  'Wardrobe',
  'Living Room',
  'Bedroom',
  'TV Panel',
  'Complete Interiors',
];

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: string;
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: 'Customized Designs',
    description:
      'Every interior is tailored to your specific space, taste and functional requirements — never one-size-fits-all.',
    icon: 'Palette',
  },
  {
    title: 'Modern & Functional Interiors',
    description:
      'We blend contemporary aesthetics with practical usability to create spaces that look great and work well.',
    icon: 'LayoutGrid',
  },
  {
    title: 'Quality-Focused Work',
    description:
      'We pay close attention to materials, finishes and craftsmanship at every stage of execution.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Space-Smart Solutions',
    description:
      'Smart storage and layout planning that makes the most of every square foot of your home.',
    icon: 'Maximize',
  },
  {
    title: 'Personalized Consultation',
    description:
      'We take time to understand your lifestyle and preferences before proposing a design direction.',
    icon: 'Users',
  },
  {
    title: 'Complete Interior Solutions',
    description:
      'From kitchens to bedrooms to living areas — everything you need under one roof.',
    icon: 'Home',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description:
      "Understand the client's requirements, lifestyle and budget.",
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Create a design concept according to the available space.',
  },
  {
    number: '03',
    title: 'Selection',
    description:
      'Finalize materials, finishes, colors and furniture requirements.',
  },
  {
    number: '04',
    title: 'Execution',
    description:
      'Turn the approved concept into a finished interior space.',
  },
];

export const serviceOptions = [
  'Modular Kitchen',
  'Modular Wardrobe',
  'LCD / TV Panel',
  'Modular Bed',
  'Flush Door',
  'Complete Interior Designing',
  'Customized Furniture & Interior Solutions',
  'Other',
];
