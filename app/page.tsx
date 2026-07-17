'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// Buscando os dados tipados do seu banco de dados
import { productsData, seriesOrder, Product, Spec, Color } from '../app/data/products';

export default function Catalogo() {
  const [activeSeries, setActiveSeries] = useState<string>("Todos");
  const [showSplash, setShowSplash] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<{ product: Product, colorName: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Controle inteligente de Autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;

    const tentarTocarSom = async () => {
      try {
        await audio.play();
        removerGanchosDeInteracao();
      } catch (err) {
        console.log("Autoplay bloqueado. Aguardando interação...");
      }
    };

    const interacaoUsuario = () => tentarTocarSom();

    const adicionarGanchosDeInteracao = () => {
      window.addEventListener('click', interacaoUsuario);
      window.addEventListener('touchstart', interacaoUsuario);
    };

    const removerGanchosDeInteracao = () => {
      window.removeEventListener('click', interacaoUsuario);
      window.removeEventListener('touchstart', interacaoUsuario);
    };

    tentarTocarSom();
    adicionarGanchosDeInteracao();

    const timer = setTimeout(() => { setShowSplash(false); }, 4000);

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

  const filteredProducts = activeSeries === "Todos" 
    ? productsData 
    : productsData.filter((p: Product) => p.series === activeSeries);

  // Redirecionamento Profissional ao WhatsApp com Mensagem Formatada
  const handleContactSpecialist = () => {
    if (!selectedInterest) return;
    
    const { product, colorName } = selectedInterest;
    const telefone = "5511900000000"; // Insira aqui o seu WhatsApp de suporte/vendas
    
    const textoMensagem = `Olá! Gostei muito do modelo *${product.name}* na cor *${colorName}*. Gostaria de verificar a disponibilidade física para agendarmos a minha visita na loja!`;
    
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(textoMensagem)}`, '_blank');
    setSelectedInterest(null);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#101012] font-sans selection:bg-[#FFDE00] selection:text-black">
      <audio ref={audioRef} src="/audio/background.mp3" loop />

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[300] bg-[#101012] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <div className="w-5 h-5 rounded-full bg-[#FFDE00] flex items-center justify-center">
              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-bold tracking-wide">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE INTERESSE DIRECIONADO */}
      <AnimatePresence>
        {selectedInterest && (
          <motion.div 
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden animate-sharp"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#FFDE00]" />
              
              <button 
                onClick={() => setSelectedInterest(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="mt-2 text-center">
                <span className="inline-block bg-[#00C2A8]/10 text-[#00C2A8] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Excelente Escolha
                </span>
                
                <h2 className="text-2xl font-black tracking-tight mb-2">
                  Opa, perfeito!
                </h2>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Fico muito feliz que você gostou do modelo <strong className="text-black">{selectedInterest.product.name}</strong> na cor <strong className="text-black">{selectedInterest.colorName}</strong>.
                </p>

                <div className="bg-gray-50 border border-gray-100 p-5 rounded-xl text-left mb-6 shadow-inner space-y-1">
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400 font-bold">Modelo Selecionado</span>
                  <span className="block text-sm font-black text-black">{selectedInterest.product.name} — {selectedInterest.colorName}</span>
                  <span className="block text-xs font-semibold text-[#00C2A8] mt-1">À vista por {selectedInterest.product.priceDebit}</span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Por gentileza, retorne com o nosso especialista de atendimento e informe o modelo e a cor de sua preferência para agendarmos sua visita à loja!
                </p>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={handleContactSpecialist}
                    className="w-full bg-[#101012] text-[#FFDE00] py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Falar com Especialista
                  </button>
                  <button 
                    onClick={() => setSelectedInterest(null)}
                    className="w-full bg-transparent text-gray-500 hover:text-black py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Voltar ao Catálogo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPLASH SCREEN */}
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
                  className="absolute top-0 bottom-0 w-1/2 bg-[#FFDE00] rounded-full shadow-[0_0_8px_#FFDE00]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
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

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-[#00C2A8]/10 text-[#00C2A8] px-3 py-1 rounded-sm mb-3">
            dare to leap
          </span>
          <h1 className="text-4xl font-black tracking-tight mb-2 text-[#101012]">
            Navegue pela nossa seleção.
          </h1>
          <p className="text-sm text-gray-500">Toque nas cores para alterar a imagem e escolha o seu modelo favorito.</p>
        </div>

        {/* FILTROS */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-3 scrollbar-hide">
          {seriesOrder.map((s: string) => (
            <button 
              key={s} 
              onClick={() => setActiveSeries(s)} 
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                s === activeSeries 
                  ? 'bg-[#FFDE00] text-black shadow-lg border-transparent scale-105' 
                  : 'bg-white text-[#101012] border border-black/5 hover:border-black/20 hover:bg-gray-50'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUTOS */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          <AnimatePresence>
            {filteredProducts.map((p: Product) => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onInterest={(prod: Product, color: string) => setSelectedInterest({ product: prod, colorName: color })}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/5 py-8 bg-[#101012] text-white/40 text-[10px] font-mono text-center">
        <p className="tracking-widest uppercase mb-1">realme Catálogo Oficial</p>
        <p className="mt-2 text-white/20">Desenvolvido por Technology Vision</p>
      </footer>
    </div>
  );
}

// COMPONENTE CARD (Design Premium com NFC Dinâmico e Preços Oficiais)
interface ProductCardProps {
  product: Product;
  onInterest: (p: Product, colorName: string) => void;
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
      className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
    >
      <div>
        {/* Categoria/Série & Status do NFC */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-bold tracking-widest uppercase bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full border border-gray-100">
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

        {/* Imagem do Produto */}
        <div className="relative h-64 w-full mb-6 overflow-hidden flex items-center justify-center">
          <Image 
            src={activeColor.imageUrl} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-out drop-shadow-md" 
          />
        </div>

        {/* Info Básica */}
        <h3 className="text-xl font-bold tracking-tight mb-1 text-black">{product.name}</h3>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-6 h-10">{product.highlight}</p>
      </div>

      <div className="space-y-5">
        {/* Seletor de Cores */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {product.colors.map((c: Color, i: number) => (
              <button 
                key={c.name} 
                onClick={() => setColorIndex(i)} 
                className={`w-6 h-6 rounded-full border-[3px] transition-all duration-300 ${
                  colorIndex === i ? 'border-gray-200 scale-110 shadow-sm' : 'border-transparent hover:scale-105'
                }`} 
                style={{ backgroundColor: c.hex }} 
                title={c.name}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-black/40 uppercase bg-gray-50 px-2 py-1 rounded">
            {activeColor.name}
          </span>
        </div>

        {/* GRID DE ESPECIFICAÇÕES TÉCNICAS */}
        <div className="grid grid-cols-2 gap-2.5">
          {product.specs.slice(0, 4).map((s: Spec, i: number) => (
            <div key={i} className="bg-[#F9F9F9] p-3 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-colors">
              <span className="block text-[8px] uppercase tracking-wider text-[#00C2A8] font-black mb-0.5">
                {s.label}
              </span>
              <span className="block text-[11px] font-bold text-[#101012] truncate">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* ÁREA DE PREÇOS E NOTA LEGAL */}
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-inner">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Débito/Pix:</span>
            <span className="text-[15px] font-black text-[#101012] leading-none">{product.priceDebit}</span>
          </div>
          <div className="flex justify-between items-end mb-3">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Crédito:</span>
            <span className="text-[15px] font-black text-[#101012] leading-none">{product.priceCredit}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-1">
            <p className="text-[8.5px] text-gray-400 font-medium italic leading-tight text-justify">
              {product.paymentNote}
            </p>
          </div>
        </div>

        {/* Botão de Ação */}
        <button 
          onClick={() => onInterest(product, activeColor.name)} 
          className="w-full bg-[#101012] text-white hover:bg-black py-4 rounded-2xl font-bold text-xs uppercase tracking-widest active:scale-[0.98] hover:shadow-lg transition-all duration-300"
        >
          Tenho interesse
        </button>
      </div>
    </motion.div>
  );
}