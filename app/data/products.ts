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
}

export const seriesOrder: string[] = [
  'Todos',
  'Linha Note',
  'Linha C',
  'Linha Number',
];

const officialDisclaimer = "Análise de crédito para Boleto/Carnê exclusiva em loja física. Obrigatório apresentar CNH ou RG original (com chip) e comprovante de residência. Condições de entrada sujeitas à análise.";

export const productsData: Product[] = [
  // =========================
  // LINHA NOTE
  // =========================
  {
    id: 'note70',
    series: 'Linha Note',
    name: 'NOTE 70',
    highlight: 'Bateria de longa duração e performance.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250' },
      { label: 'Tela', value: '6,74” 90Hz' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Dourado', hex: '#cdb27c', imageUrl: '/images/note70-gold.webp' },
      { name: 'Preto', hex: '#1c1c1e', imageUrl: '/images/note70-black.webp' },
    ],
    priceDebit: 'R$ 1.699,90',
    priceCredit: '12x de R$ 141,66',
    paymentNote: officialDisclaimer
  },
  {
    id: 'note60x',
    series: 'Linha Note',
    name: 'NOTE 60X',
    highlight: 'Tela fluida e processamento rápido.',
    specs: [
      { label: 'Processador', value: 'Unisoc octa core' },
      { label: 'Tela', value: '6,74” 90Hz' },
      { label: 'RAM', value: '3GB' },
      { label: 'Armazenamento', value: '64GB' },
    ],
    colors: [
      { name: 'Preto', hex: '#1c1c1e', imageUrl: '/images/note60x-black.webp' },
    ],
    priceDebit: 'R$ 899,90',
    priceCredit: '12x de R$ 74,99',
    paymentNote: officialDisclaimer
  },
  {
    id: 'note60',
    series: 'Linha Note',
    name: 'NOTE 60',
    highlight: 'Desempenho consistente e bateria de 5.000mAh.',
    specs: [
      { label: 'Processador', value: 'Unisoc octa core' },
      { label: 'Tela', value: '6,74”' },
      { label: 'RAM', value: '4GB' },
      { label: 'Armazenamento', value: '128GB' },
    ],
    colors: [
      { name: 'Black', hex: '#1c1c1e', imageUrl: '/images/note60-black.webp' },
    ],
    priceDebit: 'R$ 1.290,00',
    priceCredit: '12x de R$ 107,50',
    paymentNote: officialDisclaimer
  },

  // =========================
  // LINHA C
  // =========================
  {
    id: 'c75',
    series: 'Linha C',
    name: 'C75 4G',
    highlight: 'Equilíbrio entre performance e design.',
    specs: [
      { label: 'Processador', value: 'Helio G92 Max' },
      { label: 'Tela', value: '6,72” 90Hz' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Dourado', hex: '#d8c08a', imageUrl: '/images/c75-gold.webp' },
      { name: 'Tempestade Negra', hex: '#1a1a1a', imageUrl: '/images/c75-black.webp' },
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer
  },
  {
    id: 'c71',
    series: 'Linha C',
    name: 'C71',
    highlight: 'Tela de 120Hz para máxima fluidez.',
    specs: [
      { label: 'Processador', value: 'Unisoc T7250' },
      { label: 'Tela', value: '6,67” 120Hz' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Branco First Row', hex: '#f2f0ea', imageUrl: '/images/c71-white.webp' },
      { name: 'Verde Green Flock', hex: '#3f5b3f', imageUrl: '/images/c71-green.webp' },
    ],
    priceDebit: 'R$ 1.897,00',
    priceCredit: '12x de R$ 158,08',
    paymentNote: officialDisclaimer
  },
  {
    id: 'c63',
    series: 'Linha C',
    name: 'C63',
    highlight: 'Design em couro e ótima performance.',
    specs: [
      { label: 'Processador', value: 'Unisoc Octa core' },
      { label: 'Tela', value: '6,74 90Hz”' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Jade', hex: '#3f5b3f', imageUrl: '/images/c63-jade.webp' },
      { name: 'Couro Azul', hex: '#2f5fa8', imageUrl: '/images/c63-blue.webp' },
    ],
    priceDebit: 'R$ 1.899,90',
    priceCredit: '12x de R$ 158,33',
    paymentNote: officialDisclaimer
  },
  {
    id: 'c100i',
    series: 'Linha C',
    name: 'C100i',
    highlight: 'O novo padrão de entrada da realme.',
    specs: [
      { label: 'Processador', value: 'UNISOC T7250' },
      { label: 'Tela', value: '6,7 120Hz”' },
      { label: 'RAM', value: '4GB' },
      { label: 'Bateria', value: '7.000mAh' },
    ],
    colors: [
      { name: 'Violeta', hex: '#bf9fe6', imageUrl: '/images/c100i-purple.webp' },
      { name: 'Cinza', hex: '#8a8a85', imageUrl: '/images/c100i-gray.webp' },
    ],
    priceDebit: 'R$ 2.247,00',
    priceCredit: '12x de R$ 187,25',
    paymentNote: officialDisclaimer
  },
  {
    id: 'c85',
    series: 'Linha C',
    name: 'C85',
    highlight: 'Lançamento com foco em autonomia.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 685' },
      { label: 'Tela', value: '6,7  144Hz”' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Blue', hex: '#2f5fa8', imageUrl: '/images/c85-blue.webp' },
      { name: 'Black Marrom', hex: '#2a2220', imageUrl: '/images/c85-black.webp' },
    ],
    priceDebit: 'R$ 2.499,00',
    priceCredit: '12x de R$ 208,25',
    paymentNote: officialDisclaimer
  },

  // =========================
  // LINHA NUMBER
  // =========================
  {
    id: '14t',
    series: 'Linha Number',
    name: '14T',
    highlight: 'Conectividade 5G com potência.',
    specs: [
      { label: 'Processador', value: 'Dimensity 6300 5G' },
      { label: 'Tela', value: '6,67” AMOLED 120Hz' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Marrom', hex: '#313030', imageUrl: '/images/14t-brown.webp' },
      { name: 'Pink', hex: '#f7a5cafd', imageUrl: '/images/14t-pink.webp' },
    ],
    priceDebit: 'R$ 2.799,90',
    priceCredit: '12x de R$ 233,32',
    paymentNote: officialDisclaimer
  },
  {
    id: '14',
    series: 'Linha Number',
    name: '14 5G',
    highlight: 'Estilo cibernético e desempenho avançado.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 6 Gen 4 5G' },
      { label: 'Tela', value: '6,67” AMOLED 120Hz' },
      { label: 'RAM', value: '8GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Prata Cibernético', hex: '#c9cdd3', imageUrl: '/images/14-silver.webp' },
      { name: 'Rosa', hex: '#e8a0c0', imageUrl: '/images/14-pink.webp' },
      { name: 'Marrom', hex: '#5c4d40', imageUrl: '/images/14-brown.webp' },
    ],
    priceDebit: 'R$ 2.949,90',
    priceCredit: '12x de R$ 245,82',
    paymentNote: officialDisclaimer
  },
  {
    id: '14propl',
    series: 'Linha Number',
    name: '14 PRO+',
    highlight: 'Câmera periscópio e tela premium.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7s Gen 3 5G' },
      { label: 'Tela', value: '6,83” Curva 120Hz' },
      { label: 'RAM', value: '12GB' },
      { label: 'Armazenamento', value: '256GB' },
    ],
    colors: [
      { name: 'Branco Pérola', hex: '#f0eee6', imageUrl: '/images/14pro-white.webp' },
      { name: 'Cinza Emborrachado', hex: '#808080', imageUrl: '/images/14pro-gray.webp' },
    ],
    priceDebit: 'R$ 4.199,90',
    priceCredit: '12x de R$ 349,99',
    paymentNote: officialDisclaimer
  },
  {
    id: '12propl',
    series: 'Linha Number',
    name: '12 PRO+',
    highlight: 'Design de luxo e câmera premium.',
    specs: [
      { label: 'Processador', value: 'Snapdragon 7s Gen 2' },
      { label: 'Tela', value: '6,7” Curva 120Hz' },
      { label: 'RAM', value: '12GB' },
      { label: 'Armazenamento', value: '512GB' },
    ],
    colors: [
      { name: 'Bege', hex: '#d9c9ad', imageUrl: '/images/12pro-beige.webp' },
      { name: 'Azul', hex: '#2f5fa8', imageUrl: '/images/12pro-blue.webp' },
    ],
    priceDebit: 'R$ 3.599,90',
    priceCredit: '12x de R$ 299,99',
    paymentNote: officialDisclaimer
  },
];