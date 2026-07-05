import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container-highest border-t-4 border-on-surface">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-margin-desktop max-w-[1280px] mx-auto">
        <div className="col-span-2 md:col-span-6 flex flex-col gap-6">
          <div className="font-headline-lg text-headline-lg text-on-surface">KHAJE&apos;STUDIO</div>
          <p className="font-body-md max-w-md">
            Laboratorium kreatif yang didedikasikan untuk membangun solusi digital yang tangguh dan presisi akademik yang tak tertandingi.
          </p>
          <div className="flex gap-4 font-label-bold uppercase">
            <a href="https://www.instagram.com/khajestudio_id?igsh=d3l5MGt2aDV6cWQ3" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors duration-200">
              INSTAGRAM
            </a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h5 className="font-label-bold uppercase mb-6 text-primary">NAVIGASI</h5>
          <ul className="flex flex-col gap-4 font-label-bold uppercase">
            <li><Link href="/portfolio" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors">PORTFOLIO</Link></li>
            <li><Link href="/layanan" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors">LAYANAN</Link></li>
            <li><Link href="/team" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors">TEAM</Link></li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h5 className="font-label-bold uppercase mb-6 text-primary">LEGAL</h5>
          <ul className="flex flex-col gap-4 font-label-bold uppercase">
            <li><Link href="/privacy" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors">PRIVACY</Link></li>
            <li><Link href="/terms" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors">TERMS</Link></li>
            <li><Link href="/cookies" className="text-on-surface-variant hover:text-secondary hover:underline transition-colors">COOKIES</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-12 border-t-4 border-on-surface pt-8 mt-8 flex flex-col md:flex-row justify-center items-center text-center font-label-bold text-label-bold uppercase">
          <span>©2026 KHAJE&apos;STUDIO. BUILT NOT DESIGNED.</span>
        </div>
      </div>
    </footer>
  );
}
