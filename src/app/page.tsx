import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-margin-mobile py-32 md:py-24 border-b-4 border-on-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-primary pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <h1 className="sr-only">Solusi Digital & Akademik Terbaikmu</h1>
          <div className="flex justify-center items-center mb-8 w-full max-w-lg md:max-w-xl mx-auto">
            <img 
              src="/hero-title.png" 
              alt="Solusi Digital dan Akademik Terbaikmu" 
              className="w-full h-auto object-contain drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300"
            />
          </div>
          <p className="font-body-lg text-body-lg mb-12 max-w-2xl mx-auto">
            Laboratorium kreatif yang didedikasikan untuk membangun solusi digital yang tangguh dan presisi akademik yang tak tertandingi. Kami menggabungkan estetika dengan fungsi secara sempurna.
          </p>
          <div className="flex flex-col md:flex-row gap-gutter justify-center items-center">
            <Link href="/layanan" className="w-full md:w-auto bg-primary-container neo-brutalist-border px-12 py-6 text-headline-md neo-brutalist-shadow neo-brutalist-interaction font-headline-md uppercase text-center block">
              Lihat Layanan
            </Link>
            <Link href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-surface-container-lowest neo-brutalist-border px-12 py-6 text-headline-md neo-brutalist-shadow neo-brutalist-interaction font-headline-md uppercase text-center block">
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Grid Overlay decoration */}
        <div className="absolute bottom-0 left-0 w-full h-24 border-t-4 border-on-surface bg-primary opacity-10 flex">
          <div className="flex-1 border-r-4 border-on-surface"></div>
          <div className="flex-1 border-r-4 border-on-surface"></div>
          <div className="flex-1 border-r-4 border-on-surface"></div>
          <div className="flex-1 border-r-4 border-on-surface hidden md:block"></div>
        </div>
      </section>

      {/* Marquee / Ticker */}
      <section className="bg-on-surface text-background py-4 border-b-4 border-on-surface overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-marquee gap-12 font-label-bold text-headline-md uppercase">
          <span>UI/UX Design</span> <span>•</span> <span>Academic Assistance</span> <span>•</span> <span>Brand Identity</span> <span>•</span> <span>Full-Stack Development</span> <span>•</span> <span>Creative Strategy</span> <span>•</span>
          <span>UI/UX Design</span> <span>•</span> <span>Academic Assistance</span> <span>•</span> <span>Brand Identity</span> <span>•</span> <span>Full-Stack Development</span> <span>•</span> <span>Creative Strategy</span> <span>•</span>
        </div>
      </section>

      {/* Highlight / Bento Grid Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Feature Card */}
          <div className="md:col-span-8 bg-surface-container-lowest neo-brutalist-border p-base md:p-8 neo-brutalist-shadow relative group hover-lift transition-all">
            <div className="flex justify-between items-start mb-8">
              <span className="bg-secondary-container text-white px-4 py-1 neo-brutalist-border font-label-bold uppercase">Mengapa Kami?</span>
            </div>
            <h3 className="font-headline-md text-headline-md uppercase mb-4">REVOLUTIONIZING DIGITAL ACADEMICS</h3>
            <p className="font-body-lg text-body-lg max-w-2xl">Kami menggabungkan presisi akademik dengan desain digital tingkat tinggi untuk menciptakan platform pembelajaran dan representasi digital masa depan. Built Not Designed.</p>
          </div>

          {/* Vertical Card */}
          <div className="md:col-span-4 bg-primary-container neo-brutalist-border p-8 neo-brutalist-shadow flex flex-col justify-between hover-lift transition-all">
            <div>
              <h3 className="font-headline-md text-headline-md uppercase leading-none mb-6">BUILT NOT DESIGNED.</h3>
              <p className="font-body-md mb-8">Philosophy kami sederhana: Fungsi di atas segalanya, Estetika yang mengikuti kejujuran struktur.</p>
            </div>
            <div className="border-t-4 border-on-surface pt-6 mt-auto">
              <div className="flex justify-between items-center font-label-bold uppercase">
                <span>Since 2026</span>
              </div>
            </div>
          </div>

          {/* Stats / Small Grid */}
          <div className="md:col-span-4 bg-white neo-brutalist-border p-8 neo-brutalist-shadow text-center hover-lift transition-all">
            <div className="text-display-lg-mobile font-headline-lg">150+</div>
            <div className="font-label-bold uppercase border-t-2 border-on-surface pt-2">Projects Completed</div>
          </div>
          <div className="md:col-span-4 bg-secondary-container neo-brutalist-border p-8 neo-brutalist-shadow text-white hover-lift transition-all">
            <div className="text-display-lg-mobile font-headline-lg">98%</div>
            <div className="font-label-bold uppercase border-t-2 border-white pt-2">Client Satisfaction</div>
          </div>
          <div className="md:col-span-4 bg-surface-container neo-brutalist-border p-8 neo-brutalist-shadow flex items-center justify-center gap-4 hover-lift transition-all">
            <span className="font-headline-md uppercase">TOP RATED STUDIO</span>
          </div>
        </div>
      </section>
    </main>
  );
}
