import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "BEAFIND",
      description: "Satu platform terpadu untuk mahasiswa Indonesia menemukan peluang beasiswa, magang, dan perlombaan terbaik untuk masa depan.",
      image: "/seafind.png",
    },
    {
      title: "Manajemen IT Kesehatan & SDM",
      description: "Sistem Informasi Kesehatan (SIK) modern yang menyeimbangkan kemudahan akses klinis dengan keamanan data pasien yang ketat.",
      image: "/health-it.png",
    },
    {
      title: "Law Firm Landing Page",
      description: "High-conversion landing page for a corporate law firm. Includes secure client forms and case study presentations.",
      image: "/lawfirm.png",
    },
  ];

  return (
    <main className="flex-1 max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-16">
        <span className="bg-primary text-white px-4 py-1 neo-brutalist-border w-fit font-label-bold uppercase">Selected Works</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">OUR<br/>PORTFOLIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="bg-surface-dim neo-brutalist-border relative overflow-hidden neo-brutalist-shadow mb-6 group-hover:-translate-y-2 group-hover:translate-x-[-2px] transition-all duration-200">
              <div className="w-full border-b-4 border-on-surface flex items-center justify-center">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-headline-md text-headline-md uppercase mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                <p className="font-body-md text-on-surface-variant max-w-lg">{project.description}</p>
              </div>
              <span className="font-headline-lg text-outline opacity-30 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
