
    document.addEventListener("DOMContentLoaded", () => {
        // Animações sequenciais
        gsap.timeline()
            .to(".titulo-animado", { 
                opacity: 1, 
                x: 0, 
                duration: 0.8, 
                ease: "power2.out" 
            }) // Título
            .to(".texto-animado", { 
                opacity: 1, 
                x: 0, 
                duration: 0.8, 
                ease: "power2.out" 
            }, "-=0.4") // Texto, iniciando levemente antes de terminar o título
            .to(".btn-animado", { 
                opacity: 1, 
                x: 0, 
                duration: 0.6, 
                ease: "power2.out", 
                stagger: 0.2 // Delay entre os botões
            });
    });