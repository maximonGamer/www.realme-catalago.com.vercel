'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// Ajuste de caminho relativo para encontrar a pasta "app/data/products" subindo um nível
import { productsData, seriesOrder, Product, Spec, Color } from '../app/data/products';

export default function Catalog() {
  const [activeSeries, setActiveSeries] = useState<string>("Todos");
  const [showSplash, setShowSplash] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [modalData, setModalData] = useState<{ product: Product; colorName: string } | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    const tentarTocarSom = async () => {
      try {
        await audio.play();
        removerGanchosDeInteracao();
      } catch (err) {
        console.log("Autoplay bloqueado pelo navegador. Aguardando primeira interação na tela...");
      }
    };

    const interacaoUsuario = () => {
      tentarTocarSom();
    };

    const adicionarGanchosDeInteracao = () => {
      window.addEventListener('click', interacaoUsuario);
      window.addEventListener('touchstart', interacaoUsuario);
      window.addEventListener('mousedown', interacaoUsuario);
    };

    const removerGanchosDeInteracao = () => {
      window.removeEventListener('click', interacaoUsuario);
      window.removeEventListener('touchstart', interacaoUsuario);
      window.removeEventListener('mousedown', interacaoUsuario);
    };

    tentarTocarSom();
    adicionarGanchosDeInteracao();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      removerGanchosDeInteracao();
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // TIPAGEM EXPLICITA ADICIONADA: (p: Product)
  const filteredProducts = activeSeries === "Todos" 
    ? productsData 
    : productsData.filter((p: Product) => p.series === activeSeries);

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#101012] font-sans selection:bg-[#FFDE00] selection:text-black">
      <audio ref={audioRef} src="/audio/background.mp3" loop />

      {/* PRÉ-CARREGAMENTO AUTOMÁTICO PREMIUM */}
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-[#101012] flex flex-col items-center justify-center text-center p-6"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="space-y-8 max-w-lg">
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-mono font-bold text-white tracking-tighter"
              >
                real<span className="text-[#FFDE00]">me</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-3"
              >
                <p className="text-white text-lg font-light tracking-wider leading-relaxed">
                  Seja bem-vindo ao catálogo realme.
                </p>
                <p className="text-[#FFDE00] text-xs font-bold tracking-[0.25em] uppercase">
                  Fique à vontade para ver o nosso catálogo.
                </p>
              </motion.div>

              <div className="w-40 h-[2px] bg-white/10 mx-auto rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-[#FFDE00] rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER LIMPO E OFICIAL */}
      <header className="sticky top-0 z-50 bg-[#101012]/95 backdrop-blur-md border-b border-[#FFDE00]/25 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white font-mono tracking-tighter">
            real<span className="text-[#FFDE00]">me</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block text-[10px] text-white/50 tracking-[0.2em] uppercase font-bold font-mono">
              Catálogo Oficial
            </span>
            <button 
              onClick={toggleMute} 
              className="flex items-center gap-2 text-[#FFDE00] text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                {!isMuted && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2A8] opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isMuted ? 'bg-red-500' : 'bg-[#00C2A8]'}`}></span>
              </span>
              {isMuted ? 'MUTE: OFF' : 'MUTE: ON'}
            </button>
          </div>
        </div>
      </header>

      {/* CORPO DA PÁGINA */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-[#00C2A8]/10 text-[#00C2A8] px-3 py-1 rounded-sm mb-3">
            dare to leap
          </span>
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Navegue pela nossa seleção.
          </h1>
          <p className="text-sm text-gray-500">Toque nas cores para alterar a imagem e escolha o seu modelo favorito.</p>
        </div>

        {/* FILTROS */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-3 scrollbar-hide">
          {/* TIPAGEM EXPLICITA ADICIONADA: (s: string) */}
          {seriesOrder.map((s: string) => (
            <button 
              key={s} 
              onClick={() => setActiveSeries(s)} 
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                s === activeSeries 
                  ? 'bg-[#FFDE00] text-black shadow-md border-transparent' 
                  : 'bg-white text-[#101012] border border-black/5 hover:border-black/20'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUTOS */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          <AnimatePresence>
            {/* TIPAGEM EXPLICITA ADICIONADA: (p: Product) */}
            {filteredProducts.map((p: Product) => (
              <ProductCard key={p.id} product={p} onInterest={(color: string) => setModalData({ product: p, colorName: color })} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* MODAL DE ATENDIMENTO DIRECIONADO */}
      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full border border-black/5 shadow-2xl relative"
            >
              <button 
                onClick={() => setModalData(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold p-1 transition-colors"
              >
                ✕
              </button>

              <div className="text-center space-y-5">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00C2A8]/10 text-[#00C2A8] rounded-full mb-1">
                  ✓
                </div>
                <h3 className="text-xl font-black tracking-tight text-[#101012]">
                  Escolha Excelente!
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Perfeito, fico muito feliz que você gostou do modelo <strong className="text-black">{modalData.product.name}</strong> na cor <strong className="text-black">{modalData.colorName}</strong>.
                </p>
                <div className="bg-[#F6F5F1] p-4 rounded-2xl border border-black/[0.03] text-left space-y-2">
                  <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold">Resumo do Aparelho</span>
                  <span className="block text-sm font-black text-black">{modalData.product.name} — {modalData.colorName}</span>
                  <div className="flex flex-col text-xs text-gray-600 space-y-0.5">
                    <span>💳 À Vista / Débito: <strong className="text-black">{modalData.product.priceDebit}</strong></span>
                    <span>📈 Parcelado / Crédito: <strong className="text-black">{modalData.product.priceCredit}</strong></span>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200/50 text-left">
                  <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
                    ⚠️ {modalData.product.paymentNote}
                  </p>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Por gentileza, retorne com o nosso especialista de atendimento e informe o modelo e a cor de sua preferência para darmos andamento ao seu pedido de forma personalizada.
                </p>
                
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      const telefone = "5511900000000"; // Insira seu WhatsApp oficial de vendas aqui
                      const texto = `Olá! Naveguei pelo catálogo interativo e gostei muito do modelo *${modalData.product.name}* na cor *${modalData.colorName}* (Débito: *${modalData.product.priceDebit}* / Crédito: *${modalData.product.priceCredit}*). Gostaria de prosseguir o atendimento com o especialista!`;
                      window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`, '_blank');
                      setModalData(null);
                    }}
                    className="w-full bg-[#101012] text-[#FFDE00] hover:bg-black py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
                  >
                    Falar com Especialista
                  </button>
                  <button
                    onClick={() => setModalData(null)}
                    className="w-full bg-transparent text-gray-500 hover:text-black py-2 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    Voltar ao Catálogo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-black/5 py-8 bg-[#101012] text-white/40 text-[10px] font-mono text-center">
        <p className="tracking-widest uppercase">realme Catálogo Oficial</p>
        <p className="mt-2 text-white/20">Desenvolvido por Technology Vision</p>
      </footer>
    </div>
  );
}

// COMPONENTE CARD
interface ProductCardProps {
  product: Product;
  onInterest: (activeColorName: string) => void;
}

function ProductCard({ product, onInterest }: ProductCardProps) {
  const [colorIndex, setColorIndex] = useState<number>(0);
  const activeColor = product.colors[colorIndex];

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-3xl p-6 border border-black/5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between"
    >
      <div>
        {/* Categoria/Série Tag & NFC Status */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-bold tracking-widest uppercase bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
            {product.series}
          </span>
          
          {product.hasNFC ? (
            <span className="text-[8px] font-black tracking-wider uppercase bg-[#00C2A8]/10 text-[#00C2A8] px-2.5 py-1 rounded-md flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C2A8]"></span>
              Possui NFC
            </span>
          ) : (
            <span className="text-[8px] font-bold tracking-wider uppercase bg-gray-200/50 text-gray-400 px-2.5 py-1 rounded-md">
              Sem NFC
            </span>
          )}
        </div>

        {/* Imagem do Produto com Zoom Suave ao Hover */}
        <div className="relative h-64 w-full mb-6 overflow-hidden flex items-center justify-center">
          <Image 
            src={activeColor.imageUrl} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out" 
          />
        </div>

        {/* Informações Básicas */}
        <h3 className="text-xl font-bold tracking-tight mb-1">{product.name}</h3>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-4 h-10">{product.highlight}</p>
        
        {/* BLOCO DE PREÇO OFICIAL DETALHADO */}
        <div className="mb-6 bg-[#F6F5F1]/60 p-4 rounded-2xl border border-black/[0.02] space-y-3">
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">À Vista / Débito / Pix</span>
            <span className="text-xl font-black tracking-tight text-[#101012]">{product.priceDebit}</span>
          </div>
          <div className="border-t border-black/5 pt-2">
            <span className="block text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Cartão / Crédito</span>
            <span className="text-sm font-extrabold text-black">{product.priceCredit}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Seletor de Cores Dinâmico */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {/* TIPAGEM EXPLICITA ADICIONADA: (c: Color, i: number) */}
            {product.colors.map((c: Color, i: number) => (
              <button 
                key={c.name} 
                onClick={() => setColorIndex(i)} 
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  colorIndex === i ? 'border-black scale-110 shadow-sm' : 'border-transparent'
                }`} 
                style={{ backgroundColor: c.hex }} 
                title={c.name}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-black/40 uppercase">
            {activeColor.name}
          </span>
        </div>

        {/* GRID DE ESPECIFICAÇÕES TÉCNICAS */}
        <div className="grid grid-cols-2 gap-2.5">
          {product.specs.slice(0, 4).map((s: Spec, i: number) => (
            <div key={i} className="bg-[#F9F9F9] p-2.5 rounded-xl border border-black/[0.02]">
              <span className="block text-[8px] uppercase tracking-wider text-[#00C2A8] font-black mb-0.5">
                {s.label}
              </span>
              <span className="block text-[11px] font-bold text-[#101012] truncate">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Botão de Interesse */}
        <button 
          onClick={() => onInterest(activeColor.name)} 
          className="w-full bg-[#101012] text-white hover:bg-black py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest active:scale-[0.98] transition-all duration-300 border border-transparent hover:border-[#FFDE00]/20"
        >
          Tenho interesse
        </button>
      </div>
    </motion.div>
  );
}