export default function Services() {
  return (
    <main className="flex-1 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="flex flex-row justify-between items-center gap-4 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-4 w-[55%] md:w-1/2">
            <span className="bg-secondary-container text-white px-2 md:px-4 py-1 neo-brutalist-border w-fit font-label-bold text-[10px] md:text-base uppercase">Our Capabilities</span>
            <h1 className="font-headline-lg md:font-display-lg text-4xl md:text-display-lg uppercase leading-none">BUILT<br/>NOT<br/>DESIGNED.</h1>
            <p className="font-body-sm md:font-body-lg text-xs md:text-base max-w-2xl mt-2 md:mt-6">We don&apos;t do fluff. We build high-impact digital systems and provide tactical assistance for those who value speed, quality, and raw aesthetic honesty.</p>
          </div>
          <div className="w-[45%] md:w-1/2 flex justify-center md:justify-end relative pr-2 md:pr-12 lg:pr-20">
            {/* The Gundam Image */}
            <img 
              src="/gundam.png" 
              alt="Gundam Robot" 
              className="w-full max-w-[150px] md:max-w-[280px] lg:max-w-[350px] object-contain drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:drop-shadow-[24px_24px_0px_rgba(0,0,0,1)] hover:-translate-y-6 hover:-translate-x-2 hover:scale-110 hover:-rotate-6 transition-all duration-300 cursor-pointer" 
            />
          </div>
        </div>
      </section>

      {/* Section A: Web Development */}
      <section className="mb-32">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg uppercase bg-on-surface text-background px-6 py-2">Jasa Pembuatan Website Profesional</h2>
          <div className="h-1 flex-grow bg-on-surface hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1: Company Profile */}
          <div className="neo-brutalist-border bg-white p-8 flex flex-col gap-6 neo-brutalist-shadow hover-lift transition-all group">
            <div className="flex justify-between items-start">
              <span className="font-label-bold text-outline">01</span>
            </div>
            <h3 className="font-headline-md text-headline-md uppercase">Company Profile</h3>
            <p className="text-on-surface-variant">Elevate your brand presence with a high-performance, responsive corporate site that commands authority.</p>
            <ul className="flex flex-col gap-2 font-label-bold text-xs uppercase">
              <li>• SEO OPTIMIZED</li>
              <li>• FAST LOADING</li>
              <li>• CUSTOM UI</li>
            </ul>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto neo-brutalist-border bg-primary px-6 py-4 text-white font-label-bold uppercase hover:bg-on-surface transition-colors">GET QUOTE</a>
          </div>

          {/* Card 2: Lawyer Website */}
          <div className="neo-brutalist-border bg-secondary-fixed p-8 flex flex-col gap-6 neo-brutalist-shadow hover-lift transition-all">
            <div className="flex justify-between items-start">
              <span className="font-label-bold text-outline">02</span>
            </div>
            <h3 className="font-headline-md text-headline-md uppercase">Lawyer Website</h3>
            <p className="text-on-surface-variant">Sophisticated and trustworthy digital platforms designed specifically for legal professionals and law firms.</p>
            <ul className="flex flex-col gap-2 font-label-bold text-xs uppercase">
              <li>• SECURE FORM</li>
              <li>• CLIENT PORTAL</li>
              <li>• CASE REVIEWS</li>
            </ul>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto neo-brutalist-border bg-secondary px-6 py-4 text-white font-label-bold uppercase hover:bg-on-surface transition-colors">EXPLORE</a>
          </div>

          {/* Card 3: e-Commerce */}
          <div className="neo-brutalist-border bg-primary-container p-8 flex flex-col gap-6 neo-brutalist-shadow hover-lift transition-all">
            <div className="flex justify-between items-start">
              <span className="font-label-bold text-outline">03</span>
            </div>
            <h3 className="font-headline-md text-headline-md uppercase">e-Commerce</h3>
            <p className="text-on-surface-variant">Convert visitors into customers with high-conversion storefronts built on modern architecture.</p>
            <ul className="flex flex-col gap-2 font-label-bold text-xs uppercase">
              <li>• PAYMENT GATEWAY</li>
              <li>• INVENTORY MGMT</li>
              <li>• DASHBOARD</li>
            </ul>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto neo-brutalist-border bg-on-surface px-6 py-4 text-white font-label-bold uppercase hover:bg-primary transition-colors">START SELLING</a>
          </div>
        </div>
      </section>

      {/* Section B: Assistance/Joki */}
      <section>
        <div className="flex items-center gap-6 mb-12">
          <div className="h-1 flex-grow bg-on-surface hidden md:block"></div>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg uppercase bg-secondary-container text-white px-6 py-2">Layanan Bantuan/Joki</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Card: Makalah */}
          <div className="neo-brutalist-border bg-white p-6 neo-brutalist-shadow hover-lift transition-all flex flex-col items-center text-center">
            <h4 className="font-label-bold text-lg mb-2 uppercase">Makalah</h4>
            <p className="text-xs mb-6 text-on-surface-variant">Professional paper drafting with proper citations.</p>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto w-full neo-brutalist-border border-2 bg-surface px-2 py-2 font-label-bold text-xs uppercase hover:bg-primary-container transition-colors">ORDER</a>
          </div>

          {/* Card: Teks Laporan */}
          <div className="neo-brutalist-border bg-white p-6 neo-brutalist-shadow hover-lift transition-all flex flex-col items-center text-center">
            <h4 className="font-label-bold text-lg mb-2 uppercase">Teks Laporan</h4>
            <p className="text-xs mb-6 text-on-surface-variant">Data-driven reports and academic summaries.</p>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto w-full neo-brutalist-border border-2 bg-surface px-2 py-2 font-label-bold text-xs uppercase hover:bg-primary-container transition-colors">ORDER</a>
          </div>

          {/* Card: CV Design */}
          <div className="neo-brutalist-border bg-white p-6 neo-brutalist-shadow hover-lift transition-all flex flex-col items-center text-center">
            <h4 className="font-label-bold text-lg mb-2 uppercase">CV Design</h4>
            <p className="text-xs mb-6 text-on-surface-variant">ATS-friendly, high-impact resume structures.</p>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto w-full neo-brutalist-border border-2 bg-surface px-2 py-2 font-label-bold text-xs uppercase hover:bg-primary-container transition-colors">ORDER</a>
          </div>

          {/* Card: Graphic Design */}
          <div className="neo-brutalist-border bg-white p-6 neo-brutalist-shadow hover-lift transition-all flex flex-col items-center text-center">
            <h4 className="font-label-bold text-lg mb-2 uppercase">Graphic Design</h4>
            <p className="text-xs mb-6 text-on-surface-variant">Social media assets, logos, and digital art.</p>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto w-full neo-brutalist-border border-2 bg-surface px-2 py-2 font-label-bold text-xs uppercase hover:bg-primary-container transition-colors">ORDER</a>
          </div>

          {/* Card: ML Rank Up */}
          <div className="neo-brutalist-border bg-on-surface text-white p-6 neo-brutalist-shadow hover-lift transition-all flex flex-col items-center text-center md:col-span-4 lg:col-span-1">
            <h4 className="font-label-bold text-lg mb-2 uppercase text-primary-container">ML Rank Up</h4>
            <p className="text-xs mb-6 text-surface-variant">Guaranteed stars. Mythic Glory is just a few games away.</p>
            <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center mt-auto w-full neo-brutalist-border border-2 border-primary-container bg-primary-container text-on-surface px-2 py-2 font-label-bold text-xs uppercase hover:bg-white transition-colors">BOOST NOW</a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mt-32">
        <div className="neo-brutalist-border bg-secondary p-12 neo-brutalist-shadow flex flex-col md:flex-row justify-between items-center gap-8 hover-lift">
          <div className="text-center md:text-left">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg uppercase text-white leading-none">Need something custom?</h2>
            <p className="font-body-md text-secondary-fixed mt-4">Whatever your digital problem is, we probably have the solution.</p>
          </div>
          <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block text-center neo-brutalist-border border-on-surface bg-white px-10 py-6 font-headline-md uppercase neo-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:translate-x-[8px] active:translate-y-[8px] transition-all">
            TALK TO US
          </a>
        </div>
      </section>
    </main>
  );
}
