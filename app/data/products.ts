// Caminho: app/data/products.ts

export interface Color {
  name: string;
  hex: string;
  imageUrl: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  series: string;
  name: string;
  highlight: string;
  specs: Spec[];
  colors: Color[];
  priceDebit: string;
  priceCredit: string;
  paymentNote: string;
  hasNFC: boolean; // TRUE = Possui NFC | FALSE = Não possui NFC
}

export const seriesOrder: string[] = [
  'Todos',
  'Linha Note',
  'Linha C',
  'Linha Number',
  'Linha P4',
  'Acessórios'
];

const officialDisclaimer = "Análise de crédito exclusiva em loja física. Obrigatório apresentar CNH ou RG original (com chip) e comprovante de residência. Condições sujeitas à análise.";

export const productsData: Product[] = [
  // =========================
  // LINHA NOTE
  // =========================
  {
    id: 'note70',
    series: 'Linha Note',
    name: 'NOTE 70 4G 256/8',
    highlight: 'Bateria de longa duração e performance consistente.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh' },
    ],
    colors: [
      { name: 'Dourado Solar', hex: '#cdb27c', imageUrl: '/images/note70-gold.webp' },
      { name: 'Preto Meteoro', hex: '#1c1c1e', imageUrl: '/images/note70-black.webp' },
    ],
    priceDebit: 'R$ 1.847,00',
    priceCredit: '12x de R$ 153,91',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'note60x',
    series: 'Linha Note',
    name: 'NOTE 60X',
    highlight: 'Tela fluida e processamento eficiente para o dia a dia.',
    specs: [
      { label: 'Processador', value: 'Unisoc T612 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '3GB RAM | 64GB ROM' },
      { label: 'Bateria', value: '5000mAh' },
    ],
    colors: [
      { name: 'Preto Meia-Noite', hex: '#1c1c1e', imageUrl: '/images/note60x-black.webp' },
    ],
    priceDebit: 'R$ 899,90',
    priceCredit: '12x de R$ 74,99',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'note60',
    series: 'Linha Note',
    name: 'NOTE 60S 256/8GB',
    highlight: 'Desempenho duradouro e confiabilidade.',
    specs: [
      { label: 'Processador', value: 'Unisoc T612 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh' },
    ],
    colors: [
      { name: 'Preto Eclipse', hex: '#1c1c1e', imageUrl: '/images/note60-black.webp' },
    ],
    priceDebit: 'R$ 1.747,00',
    priceCredit: '12x de R$ 145,58',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },

  // =========================
  // LINHA C
  // =========================
  {
    id: 'c75',
    series: 'Linha C',
    name: 'C75 4G 256/8',
    highlight: 'Equilíbrio perfeito entre performance gamer e design.',
    specs: [
      { label: 'Processador', value: 'MediaTek Helio G85' },
      { label: 'Tela', value: '6.72” 90Hz FHD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5828mAh + 45W' },
    ],
    colors: [
      { name: 'Dourado Cintilante', hex: '#d8c08a', imageUrl: '/images/c75-gold.webp' },
      { name: 'Preto Tempestade', hex: '#1a1a1a', imageUrl: '/images/c75-black.webp' },
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c71',
    series: 'Linha C',
    name: 'C71 4G 256/8',
    highlight: 'Design refinado e ótima capacidade de armazenamento.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh + 45W' },
    ],
    colors: [
      { name: 'Branco First Row', hex: '#f2f0ea', imageUrl: '/images/c71-white.webp' },
      { name: 'Verde Floresta', hex: '#3f5b3f', imageUrl: '/images/c71-green.webp' },
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c63',
    series: 'Linha C',
    name: 'C63 128/6',
    highlight: 'Design exclusivo em couro vegano e carregamento veloz.',
    specs: [
      { label: 'Processador', value: 'Unisoc T612 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '6GB RAM | 128GB ROM' },
      { label: 'Bateria', value: '5000mAh + 45W SUPERVOOC' },
    ],
    colors: [
      { name: 'Verde Jade', hex: '#3f5b3f', imageUrl: '/images/c63-jade.webp' },
      { name: 'Couro Azul', hex: '#2f5fa8', imageUrl: '/images/c63-blue.webp' },
    ],
    priceDebit: 'R$ 1.697,00',
    priceCredit: '12x de R$ 141,41',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c100i',
    series: 'Linha C',
    name: 'C100i 128/4',
    highlight: 'O novo padrão de entrada da realme.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '4GB RAM | 128GB ROM' },
      { label: 'Bateria', value: '7000mAh' },
    ],
    colors: [
      { name: 'Violeta Místico', hex: '#bf9fe6', imageUrl: '/images/c100i-purple.webp' },
      { name: 'Cinza Metálico', hex: '#8a8a85', imageUrl: '/images/c100i-gray.webp' },
    ],
    priceDebit: 'R$ 2.097,00',
    priceCredit: '12x de R$ 174,75',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'c85',
    series: 'Linha C',
    name: 'C85 256/8',
    highlight: 'Performance avançada para jogos e produtividade.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 685 4G' },
      { label: 'Tela', value: '6.72” 90Hz FHD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '7000mAh + 45W' },
    ],
    colors: [
      { name: 'Azul Celeste', hex: '#2f5fa8', imageUrl: '/images/c85-blue.webp' },
      { name: 'Preto Marrom', hex: '#2a2220', imageUrl: '/images/c85-black.webp' },
    ],
    priceDebit: 'R$ 2.499,90',
    priceCredit: '12x de R$ 208,32',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },

  // =========================
  // LINHA NUMBER
  // =========================
  {
    id: '14t',
    series: 'Linha Number',
    name: '14T 256/8',
    highlight: 'Conectividade 5G ultrarrápida e tela premium.',
    specs: [
      { label: 'Processador', value: 'Dimensity 6300 5G' },
      { label: 'Tela', value: '6.67” 120Hz AMOLED' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh + 45W' },
    ],
    colors: [
      { name: 'Marrom Couro', hex: '#313030', imageUrl: '/images/14t-brown.webp' },
      { name: 'Pink Coral', hex: '#f7a5cafd', imageUrl: '/images/14t-pink.webp' },
    ],
    priceDebit: 'R$ 3.147,00',
    priceCredit: '12x de R$ 262,25',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '14',
    series: 'Linha Number',
    name: '14 5G 256/8',
    highlight: 'Estilo cibernético e fluidez visual de ponta.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 6 Gen 4 5G' },
      { label: 'Tela', value: '6.67” 120Hz AMOLED' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh + 67W SUPERVOOC' },
    ],
    colors: [
      { name: 'Prata Cibernético', hex: '#c9cdd3', imageUrl: '/images/14-silver.webp' },
      { name: 'Rosa Cyber', hex: '#e8a0c0', imageUrl: '/images/14-pink.webp' },
      { name: 'Marrom Texturizado', hex: '#5c4d40', imageUrl: '/images/14-brown.webp' },
    ],
    priceDebit: 'R$ 3.297,00',
    priceCredit: '12x de R$ 274,75',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '14propl',
    series: 'Linha Number',
    name: '14 PRO+ 256/12',
    highlight: 'A revolução da fotografia móvel com câmera periscópio.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7s Gen 3 5G' },
      { label: 'Tela', value: '6.7” 120Hz OLED Curva' },
      { label: 'Memória', value: '12GB RAM | 256GB ROM' },
      { label: 'Câmera', value: 'Periscópio + 50MP OIS' },
    ],
    colors: [
      { name: 'Branco Pérola', hex: '#f0eee6', imageUrl: '/images/14pro-white.webp' },
      { name: 'Cinza Titânio', hex: '#808080', imageUrl: '/images/14pro-gray.webp' },
    ],
    priceDebit: 'R$ 4.697,00',
    priceCredit: '12x de R$ 391,41',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '12propl',
    series: 'Linha Number',
    name: '12 PRO+',
    highlight: 'Design inspirado em relógios de luxo.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7s Gen 2 5G' },
      { label: 'Tela', value: '6.7” 120Hz OLED Curva' },
      { label: 'Memória', value: '12GB RAM | 512GB ROM' },
      { label: 'Câmera', value: '64MP Periscópio OIS' },
    ],
    colors: [
      { name: 'Bege Luxo', hex: '#d9c9ad', imageUrl: '/images/12pro-beige.webp' },
      { name: 'Azul Submarino', hex: '#2f5fa8', imageUrl: '/images/12pro-blue.webp' },
    ],
    priceDebit: 'R$ 3.899,90',
    priceCredit: '12x de R$ 324,99',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },

  // =========================
  // OUTROS PRODUTOS E VARIANTES 
  // =========================
  {
    id: 'c71-5g-256-8',
    series: 'Linha C',
    name: 'C71 5G 256/8',
    highlight: 'Conexão de altíssima velocidade para a linha C.',
    specs: [
      { label: 'Processador', value: 'Dimensity 6300 5G' },
      { label: 'Tela', value: '6.72” 120Hz FHD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh + 45W' }
    ],
    colors: [
      { name: 'Azul Oceano', hex: '#3e554f', imageUrl: '/images/c71-green.webp' },
      { name: 'Preto Noite', hex: '#f2f2f7', imageUrl: '/images/c71-white.webp' }
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'note70-4g-256-4',
    series: 'Linha Note',
    name: 'NOTE 70 4G 256/4',
    highlight: 'O essencial da realme com muita durabilidade.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '4GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh' }
    ],
    colors: [
      { name: 'Dourado Solar', hex: '#cdb27c', imageUrl: '/images/note70-gold.webp' },
      { name: 'Preto Meteoro', hex: '#1c1c1e', imageUrl: '/images/note70-black.webp' }
    ],
    priceDebit: 'R$ 1.747,00',
    priceCredit: '12x de R$ 145,58',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'note70-128-4',
    series: 'Linha Note',
    name: 'NOTE 70 128/4',
    highlight: 'Custo-benefício imbatível para o dia a dia.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '4GB RAM | 128GB ROM' },
      { label: 'Bateria', value: '5000mAh' }
    ],
    colors: [
      { name: 'Dourado Solar', hex: '#cdb27c', imageUrl: '/images/note70-gold.webp' },
      { name: 'Preto Meteoro', hex: '#1c1c1e', imageUrl: '/images/note70-black.webp' }
    ],
    priceDebit: 'R$ 1.567,00',
    priceCredit: '12x de R$ 130,58',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'c73-256-8',
    series: 'Linha C',
    name: 'C73 256/8GB',
    highlight: 'Câmera versátil e design ultrafino.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.72” 90Hz FHD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh + 45W' }
    ],
    colors: [
      { name: 'Verde Cintilante', hex: '#2f534a', imageUrl: '/images/c73-Green.webp' },
      { name: 'Violet-Parrot', hex: '#a05a9c', imageUrl: '/images/c73-Violet-Parrot.webp' }
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c71-4g-128-6',
    series: 'Linha C',
    name: 'C71 4G 128/6',
    highlight: 'Ótimo gerenciamento multitarefa.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '6GB RAM | 128GB ROM' },
      { label: 'Bateria', value: '6000mAh + 45W' }
    ],
    colors: [
      { name: 'Branco First Row', hex: '#f2f0ea', imageUrl: '/images/c71-white.webp' },
      { name: 'Verde Floresta', hex: '#3f5b3f', imageUrl: '/images/c71-green.webp' }
    ],
    priceDebit: 'R$ 1.997,00',
    priceCredit: '12x de R$ 166,41',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c71-4g-128-4',
    series: 'Linha C',
    name: 'C71 4G 128/4',
    highlight: 'Elegância e conectividade essencial.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '4GB RAM | 128GB ROM' },
      { label: 'Bateria', value: '6000mAh + 45W' }
    ],
    colors: [
      { name: 'Branco First Row', hex: '#f2f0ea', imageUrl: '/images/c71-white.webp' },
      { name: 'Verde Floresta', hex: '#3f5b3f', imageUrl: '/images/c71-green.webp' }
    ],
    priceDebit: 'R$ 1.897,00',
    priceCredit: '12x de R$ 158,08',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c85-128-4',
    series: 'Linha C',
    name: 'C85 128/4',
    highlight: 'Agilidade e carregamento veloz da Linha C.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 685 4G' },
      { label: 'Tela', value: '6.72” 90Hz FHD+' },
      { label: 'Memória', value: '4GB RAM | 128GB ROM' },
      { label: 'Bateria', value: '5000mAh + 45W' }
    ],
    colors: [
      { name: 'Azul Celeste', hex: '#2f5fa8', imageUrl: '/images/c85-blue.webp' },
      { name: 'Preto Marrom', hex: '#2a2220', imageUrl: '/images/c85-black.webp' }
    ],
    priceDebit: 'R$ 2.004,00',
    priceCredit: '12x de R$ 167,00',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'note70s-256-8',
    series: 'Linha Note',
    name: 'NOTE 70S 256/8',
    highlight: 'O equilíbrio perfeito da linha de entrada.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh' }
    ],
    colors: [
      { name: 'Dourado Solar', hex: '#cdb27c', imageUrl: '/images/note70-gold.webp' },
      { name: 'Preto Meteoro', hex: '#1c1c1e', imageUrl: '/images/note70-black.webp' }
    ],
    priceDebit: 'R$ 1.697,00',
    priceCredit: '12x de R$ 141,41',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'c100i-256-4',
    series: 'Linha C',
    name: 'C100i 256/4',
    highlight: 'Tela ampla e bateria projetada para durar.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250 Octa-Core' },
      { label: 'Tela', value: '6.74” 90Hz HD+' },
      { label: 'Memória', value: '4GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '7000mAh' }
    ],
    colors: [
      { name: 'Violeta Místico', hex: '#bf9fe6', imageUrl: '/images/c100i-purple.webp' },
      { name: 'Cinza Metálico', hex: '#8a8a85', imageUrl: '/images/c100i-gray.webp' }
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: '12-5g-256-6',
    series: 'Linha Number',
    name: '12 5G 256/6',
    highlight: 'A porta de entrada elegante para o 5G.',
    specs: [
      { label: 'Processador', value: 'Dimensity 6100+ 5G' },
      { label: 'Tela', value: '6.72” 120Hz FHD+' },
      { label: 'Memória', value: '6GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh + 45W' }
    ],
    colors: [
      { name: 'verde luxo', hex: '#2fa86c', imageUrl: '/images/12-verde.webp' },
      { name: 'roxo Luxo', hex: '#a175be', imageUrl: '/images/12-roxo.webp' }
    ],
    priceDebit: 'R$ 2.597,00',
    priceCredit: '12x de R$ 216,41',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '12-5g-512-8',
    series: 'Linha Number',
    name: '12 5G 512/8',
    highlight: 'Alto armazenamento para não faltar espaço.',
    specs: [
      { label: 'Processador', value: 'Dimensity 6100+ 5G' },
      { label: 'Tela', value: '6.72” 120Hz FHD+' },
      { label: 'Memória', value: '8GB RAM | 512GB ROM' },
      { label: 'Bateria', value: '5000mAh + 45W' }
    ],
    colors: [
      { name: 'verde', hex: '#2fa86c', imageUrl: '/images/12-verde.webp' },
      { name: 'Bege Luxo', hex: '#a175be', imageUrl: '/images/12-roxo.webp' }
    ],
    priceDebit: 'R$ 3.047,00',
    priceCredit: '12x de R$ 253,91',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '13-plus-256-8',
    series: 'Linha Number',
    name: '13 + 256/8',
    highlight: 'Desempenho Gamer focado em E-Sports.',
    specs: [
      { label: 'Processador', value: 'Dimensity 7300 Energy' },
      { label: 'Tela', value: '6.67” 120Hz OLED E-Sports' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh + 80W' }
    ],
    colors: [
      { name: 'Preto Velocidade', hex: '#1c1c1e', imageUrl: '/images/Preto Velocidade.webp' },
      { name: 'Amarelo Speed', hex: '#FFDE00', imageUrl: '/images/Amarelo Speed.webp' }
    ],
    priceDebit: 'R$ 3.047,00',
    priceCredit: '12x de R$ 253,91',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '14-256-12',
    series: 'Linha Number',
    name: '14 512/12',
    highlight: 'Muito mais RAM para máxima fluidez.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 6 Gen 4 5G' },
      { label: 'Tela', value: '6.67” 120Hz AMOLED' },
      { label: 'Memória', value: '12GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh + 67W SUPERVOOC' }
    ],
    colors: [
      { name: 'Prata Cibernético', hex: '#c9cdd3', imageUrl: '/images/14-silver.webp' },
      { name: 'Rosa Cyber', hex: '#e8a0c0', imageUrl: '/images/14-pink.webp' }
    ],
    priceDebit: 'R$ 3.347,00',
    priceCredit: '12x de R$ 278,91',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  
  {
    id: '14-pro-5g-256-12',
    series: 'Linha Number',
    name: '14 PRO 5G 256/12',
    highlight: 'Qualidade fotográfica e display premium curvo.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7s Gen 3 5G' },
      { label: 'Tela', value: '6.7” 120Hz OLED Curva' },
      { label: 'Memória', value: '12GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6000mAh + 67W SUPERVOOC' }
    ],
    colors: [
      { name: 'Branco Pérola', hex: '#f0eee6', imageUrl: '/images/14pro-white.webp' },
      { name: 'Cinza Titânio', hex: '#808080', imageUrl: '/images/14pro-gray.webp' }
    ],
    priceDebit: 'R$ 3.947,00',
    priceCredit: '12x de R$ 328,91',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '14-pro-plus-512-12',
    series: 'Linha Number',
    name: '14 PRO + 512/12',
    highlight: 'Câmera profissional e o dobro de espaço.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7s Gen 3 5G' },
      { label: 'Tela', value: '6.7” 120Hz OLED Curva' },
      { label: 'Memória', value: '12GB RAM | 512GB ROM' },
      { label: 'Câmera', value: 'Periscópio + 50MP OIS' }
    ],
    colors: [
      { name: 'Branco Pérola', hex: '#f0eee6', imageUrl: '/images/14pro-white.webp' },
      { name: 'Cinza Titânio', hex: '#808080', imageUrl: '/images/14pro-gray.webp' }
    ],
    priceDebit: 'R$ 4.997,00',
    priceCredit: '12x de R$ 416,41',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: '15-pro-512-12',
    series: 'Linha Number',
    name: '15 PRO 512/12',
    highlight: 'O próximo nível em velocidade e tela imersiva.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7 Gen 4 5G' },
      { label: 'Tela', value: '6.7” 144Hz OLED Curva' },
      { label: 'Memória', value: '12GB RAM | 512GB ROM' },
      { label: 'Bateria', value: '7000mAh + 100W SUPERVOOC' }
    ],
    colors: [
      { name: 'Branco Espacial', hex: '#e9ebec', imageUrl: '/images/15Branco Espacial.webp' },
      { name: 'verde Cósmico', hex: '#375c54', imageUrl: '/images/15verde Cósmico.webp' }
    ],
    priceDebit: 'R$ 6.747,00',
    priceCredit: '12x de R$ 562,25',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },

  // =========================
  // LINHA P4
  // =========================
  {
    id: 'p4-power-5g-256-8',
    series: 'Linha P4',
    name: 'P4 Power 5G IP69 256/8',
    highlight: 'Resistência extrema IP69 com bateria gigante.',
    specs: [
      { label: 'Processador', value: 'MediaTek Dimensity 7400 Ultra' },
      { label: 'Tela', value: '6.7” 120Hz AMOLED' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Resistência', value: 'IP69 + Bateria 10001mAh' }
    ],
    colors: [
       { name: 'Laraja Espacial', hex: '#e4771e', imageUrl: '/images/P4 Power-Laraja Espacial.webp' },
      { name: 'Prata Robusto', hex: '#a1a1a7', imageUrl: '/images/P4 Power-Prata Robusto.webp' }
    ],
    priceDebit: 'R$ 3.947,00',
    priceCredit: '12x de R$ 328,91',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'c85-5g-256-8',
    series: 'Linha C',
    name: 'C85 5G 256/8',
    highlight: 'O poder do 5G otimizado para o cotidiano.',
    specs: [
      { label: 'Processador', value: 'Dimensity 6300 5G' },
      { label: 'Tela', value: '6.72” 120Hz FHD+' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '5000mAh + 33W' }
    ],
    colors: [
      { name: 'Azul Celeste', hex: '#2f5fa8', imageUrl: '/images/c85-blue.webp' },
      { name: 'Preto Marrom', hex: '#2a2220', imageUrl: '/images/c85-black.webp' }
    ],
    priceDebit: 'R$ 3.597,00',
    priceCredit: '12x de R$ 299,75',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'p4-lite-256-8',
    series: 'Linha P4',
    name: 'P4 Lite 256/8',
    highlight: 'Elegância minimalista da linha P Series.',
    specs: [
      { label: 'Processador', value: ' MediaTek Dimensity 6300' },
      { label: 'Tela', value: '6.7” 120Hz AMOLED' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '7.000mAh + 45W' }
    ],
    colors: [
      { name: 'Roxo Espacial', hex: '#6917a0', imageUrl: '/images/P4 Lite-Roxo Espacial.webp' },
      { name: 'Prata Robusto', hex: '#a1a1a7', imageUrl: '/images/P4 Lite-Prata - Robusto.webp' }
    ],
    priceDebit: 'R$ 2.147,00',
    priceCredit: '12x de R$ 178,91',
    paymentNote: officialDisclaimer, 
    hasNFC: true
  },
  {
    id: 'p4-power-512-12',
    series: 'Linha P4',
    name: 'P4 Power 512/12',
    highlight: 'Máximo espaço com durabilidade nível militar.',
    specs: [
      { label: 'Processador', value: 'MediaTek Dimensity 7400 Ultra' },
      { label: 'Tela', value: '6.7” 120Hz AMOLED' },
      { label: 'Memória', value: '12GB RAM | 512GB ROM' },
      { label: 'Resistência', value: 'IP69 + Bateria 10001mAh' }
    ],
    colors: [
      { name: 'Laraja Espacial', hex: '#e4771e', imageUrl: '/images/P4 Power-Laraja Espacial.webp' },
      { name: 'Prata Robusto', hex: '#a1a1a7', imageUrl: '/images/P4 Power-Prata Robusto.webp' }
    ],
    priceDebit: 'R$ 5.047,00',
    priceCredit: '12x de R$ 420,58',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'p4-lite-256-4',
    series: 'Linha P4',
    name: 'P4 Lite 256/4',
    highlight: 'Tela espetacular com foco no essencial.',
    specs: [
      { label: 'Processador', value: ' MediaTek Dimensity 6300' },
      { label: 'Tela', value: '6.7” 120Hz AMOLED' },
      { label: 'Memória', value: '4GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '7.000mAh + 45W' }
    ],
    colors: [
      { name: 'Roxo Espacial', hex: '#6917a0', imageUrl: '/images/P4 Lite-Roxo Espacial.webp' },
      { name: 'Prata Robusto', hex: '#a1a1a7', imageUrl: '/images/P4 Lite-Prata - Robusto.webp' }
    ],
    priceDebit: 'R$ 2.147,00',
    priceCredit: '12x de R$ 178,91',
    paymentNote: officialDisclaimer,
    hasNFC: true
  },
  {
    id: 'note80-256-8',
    series: 'Linha Note',
    name: 'Note 80 256/8',
    highlight: 'Desempenho atualizado para a linha de entrada.',
    specs: [
      { label: 'Processador', value: 'MediaTek Helio G88' },
      { label: 'Tela', value: '6.74” 90Hz IPS LCD' },
      { label: 'Memória', value: '8GB RAM | 256GB ROM' },
      { label: 'Bateria', value: '6300mAh' }
    ],
    colors: [
      { name: 'Preto Noite', hex: '#1c1c1e', imageUrl: '/images/note80-Preto Noite.webp' },
      { name: 'Azul Céu', hex: '#2f5fa8', imageUrl: '/images/note80-Azul Céu.webp' }
    ],
    priceDebit: 'R$ 1.997,00',
    priceCredit: '12x de R$ 166,41',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },

  // =========================
  // ACESSÓRIOS
  // =========================
  {
    id: 'air7-pro',
    series: 'Acessórios',
    name: 'AIR7 PRO',
    highlight: 'Imersão sonora absoluta com cancelamento de ruído ativo.',
    specs: [
      { label: 'Driver de Áudio', value: '11 mm + 6 Bass Boost' },
      { label: 'Bateria', value: 'Até 48 Horas de Uso' },
      { label: 'Cancelamento', value: 'ANC 50dB Ativo' },
      { label: 'Conexão', value: 'Bluetooth 5.3' }
    ],
    colors: [
      { name: 'Branco Cerâmica', hex: '#f2f0ea', imageUrl: '/images/AIR7 PRO-white.webp' },
      { name: 'Preto Grafite', hex: '#1c1c1e', imageUrl: '/images/AIR7 PRO-black.webp' }
    ],
    priceDebit: 'R$ 799,00',
    priceCredit: '12x de R$ 66,58',
    paymentNote: officialDisclaimer,
    hasNFC: false
  },
  {
    id: 'air7-normal',
    series: 'Acessórios',
    name: 'AIR7 NORMAL',
    highlight: 'Sua trilha sonora diária com autonomia prolongada.',
    specs: [
      { label: 'Driver de Áudio', value: '12,4mm Dinâmico' },
      { label: 'Bateria', value: 'Até 52 Horas de Uso' },
      { label: 'Resistência', value: 'IPX5 (Água/Suor)' },
      { label: 'Conexão', value: 'Bluetooth 5.3' }
    ],
    colors: [
      { name: 'Gold ', hex: '#bbb67a', imageUrl: '/images/AIR7 NORMAL-Gold.webp' },
      { name: 'Verde marfin ', hex: '#2f3833', imageUrl: '/images/AIR7 NORMAL-marfin.webp' }
    ],
    priceDebit: 'R$ 590,00',
    priceCredit: '12x de R$ 49,16',
    paymentNote: officialDisclaimer,
    hasNFC: false
  }
];
