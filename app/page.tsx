'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData, seriesOrder, Product, Spec, Color } from './data/products';

export default function Catalogo() {
  const [activeSeries, setActiveSeries] = useState<string>("Todos");
  const [showSplash, setShowSplash] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<{ product: Product, colorName: string } | null>(null);
  const [showDuvidasModal, setShowDuvidasModal] = useState(false); // Estado para o modal de Dúvidas
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const voiceAudioRef = useRef<HTMLAudioElement>(null);
  const duvidasAudioRef = useRef<HTMLAudioElement>(null); // Áudio explicativo da Realme

  // Controle inteligente de Autoplay
  useEffect(() => {
    const bgAudio = backgroundAudioRef.current;
    const voiceAudio = voiceAudioRef.current;

    if (bgAudio) bgAudio.volume = 0.2; 
    if (voiceAudio) voiceAudio.volume = 1.0; 

    const tentarTocarSons = async () => {
      try {
        if (voiceAudio) {
          await voiceAudio.play();
        }
        if (bgAudio) {
          await bgAudio.play();
        }
        removerGanchosDeInteracao();
      } catch (err) {
        console.log("Autoplay bloqueado pelo navegador. Aguardando interação...");
      }
    };

    const interacaoUsuario = () => tentarTocarSons();

    const adicionarGanchosDeInteracao = () => {
      window.addEventListener('click', interacaoUsuario);
      window.addEventListener('touchstart', interacaoUsuario);
    };

    const removerGanchosDeInteracao = () => {
      window.removeEventListener('click', interacaoUsuario);
      window.removeEventListener('touchstart', interacaoUsuario);
    };

    tentarTocarSons();
    adicionarGanchosDeInteracao();

    const timer = setTimeout(() => { 
      setShowSplash(false); 
    }, 4500);

    return () => {
      clearTimeout(timer);
      removerGanchosDeInteracao();
    };
  }, []);

  const toggleMute = () => {
    if (backgroundAudioRef.current && voiceAudioRef.current) {
      const novoEstadoMudo = !isMuted;
      backgroundAudioRef.current.muted = novoEstadoMudo;
      voiceAudioRef.current.muted = novoEstadoMudo;
      setIsMuted(novoEstadoMudo);
    }
  };

  // Função para abrir Dúvidas e pausar a música de fundo momentaneamente para escutar o áudio explicativo
  const handleOpenDuvidas = () => {
    setShowDuvidasModal(true);
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = 0.05; // Abaixa bem a música de fundo
    }
  };

  const handleCloseDuvidas = () => {
    setShowDuvidasModal(false);
    if (duvidasAudioRef.current) {
      duvidasAudioRef.current.pause();
      duvidasAudioRef.current.currentTime = 0;
    }
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = 0.2; // Retorna o volume normal
    }
  };

  const filteredProducts = activeSeries === "Todos" 
    ? productsData 
    : productsData.filter((p: Product) => p.series === activeSeries);

  const handleCopyAndClose = async () => {
    if (!selectedInterest) return;
    
    const { product, colorName } = selectedInterest;
    const textoMensagem = `eu gostei deste modelo ${product.name} e a cor ${colorName} quero realizar uma agenda para eu visitar na loja`;
    
    try {
      await navigator.clipboard.writeText(textoMensagem);
      setToastMessage("Mensagem copiada com sucesso! Cole no chat.");
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err) {
      console.log("Não foi possível copiar automaticamente.");
    }

    setSelectedInterest(null);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#101012] font-sans selection:bg-[#FFDE00] selection:text-black">
      <audio ref={backgroundAudioRef} src="/audio/background.mp3" loop />
      <audio ref={voiceAudioRef} src="/audio/voice-intro.mp3" />
      {/* Áudio explicativo sobre a Realme (Salve o arquivo como duvidas-realme.mp3 na pasta public/audio/) */}
      <audio ref={duvidasAudioRef} src="/audio/duvidas-realme.mp3" />

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

      {/* MODAL DE DÚVIDAS / SOBRE A REALME */}
      <AnimatePresence>
        {showDuvidasModal && (
          <motion.div 
            className="fixed inset-0 z-[250] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#FFDE00]" />
              
              <button 
                onClick={handleCloseDuvidas}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <span className="inline-block bg-[#FFDE00]/20 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Central de Dúvidas
              </span>

              <h2 className="text-3xl font-black tracking-tight mb-2 text-[#101012]">
                Por dentro da <span className="text-[#FFDE00] bg-black px-2 py-0.5 rounded">realme</span>
              </h2>

              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Ouça a nossa explicação em áudio sobre a história, tecnologia e inovação da marca que mais cresce no mundo!
              </p>

              {/* Player de Áudio Customizado para Dúvidas */}
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-6 shadow-inner flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#101012] text-[#FFDE00] flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>

                <div className="w-full space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Reproduzir Explicação Oficial</p>
                  <audio 
                    ref={duvidasAudioRef} 
                    src="/audio/duvidas-realme.mp3" 
                    controls 
                    className="w-full accent-[#101012]"
                  />
                </div>
              </div>

              <button 
                onClick={handleCloseDuvidas}
                className="w-full bg-[#101012] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FFDE00] hover:text-black active:scale-[0.98] transition-all"
              >
                Entendido, voltar ao catálogo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE INTERESSE */}
      <AnimatePresence>
        {selectedInterest && (
          <motion.div 
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
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
                  Você gostou do modelo <strong className="text-black">{selectedInterest.product.name}</strong> na cor <strong className="text-black">{selectedInterest.colorName}</strong>.
                </p>

                <div className="bg-gray-50 border border-gray-100 p-5 rounded-xl text-left mb-6 shadow-inner">
                  <p className="text-xs text-gray-500 mb-2 font-bold uppercase flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Passo a Passo:
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    Com gentileza, clique no botão abaixo para copiar a mensagem com o modelo que você desejou. Depois, envie no chat de atendimento para agendar sua visita à loja!
                  </p>
                </div>

                <button 
                  onClick={handleCopyAndClose}
                  className="w-full bg-[#101012] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FFDE00] hover:text-black active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                  Copiar Mensagem e Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPLASH SCREEN PREMIUM */}
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-[#101012] flex flex-col items-center justify-center text-center p-6 overflow-hidden"
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFDE00]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-8 max-w-lg relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl font-mono font-black text-white tracking-tighter drop-shadow-xl"
              >
                real<span className="text-[#FFDE00]">me</span>
              </motion.h1>

              <motion.div className="space-y-5">
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-white/90 text-xl font-light tracking-wide leading-relaxed"
                >
                  Seja bem vindo ao nosso mundo.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="text-[#FFDE00] text-xs font-bold tracking-[0.25em] uppercase"
                >
                  Por que não olhar nossos modelos?
                </motion.p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="w-48 h-[2px] bg-white/10 mx-auto rounded-full overflow-hidden relative mt-8"
              >
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#FFDE00] to-transparent rounded-full shadow-[0_0_12px_#FFDE00]"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER COM O NOVO BOTÃO DE DÚVIDAS */}
      <header className="sticky top-0 z-50 bg-[#101012]/95 backdrop-blur-md border-b border-[#FFDE00]/25 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white font-mono tracking-tighter">
            real<span className="text-[#FFDE00]">me</span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Botão de Dúvidas / Sobre a Realme */}
            <button 
              onClick={handleOpenDuvidas}
              className="flex items-center gap-1.5 text-black bg-[#FFDE00] hover:bg-[#e6c800] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full shadow-md transition-all active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Dúvidas</span>
            </button>

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
                onInterest={(prod, color) => setSelectedInterest({ product: prod, colorName: color })}
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

// COMPONENTE CARD
function ProductCard({ product, onInterest }: { product: Product, onInterest: (p: Product, color: string) => void }) {
  const [colorIndex, setColorIndex] = useState(0);
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

        <div className="relative h-64 w-full mb-6 overflow-hidden flex items-center justify-center">
          <Image 
            src={activeColor.imageUrl} 
            alt={product.name} 
            fill 
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-out drop-shadow-md" 
          />
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-1 text-black">{product.name}</h3>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-6 h-10">{product.highlight}</p>
      </div>

      <div className="space-y-5">
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