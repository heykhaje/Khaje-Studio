import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image?: string;
  socials?: {
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Adji Prasetyo",
      role: "Leader / Owner & UI/UX Design",
      specialty: "Frontend & Backend",
      image: "/adji-pras.jpeg",
      socials: {
        instagram: "https://www.instagram.com/heykhaje?igsh=MWJiZWd5YXRzNnFsdw==",
        github: "https://github.com/heykhaje",
        linkedin: "https://www.linkedin.com/in/adji-prasetyo-0558763ba/?locale=en",
      }
    },
    {
      name: "Arya Putra Sadewa",
      role: "Wakil Leader",
      specialty: "Website Security & Database",
      socials: {
        instagram: "#",
        github: "#",
        linkedin: "#",
      }
    },
    {
      name: "Akmal Maulana",
      role: "Spesialis",
      specialty: "Joki Tugas",
      socials: {
        instagram: "#",
      }
    },
    {
      name: "Kelvin Almustawa",
      role: "Spesialis",
      specialty: "Joki Game (Mobile Legends)",
      socials: {
        instagram: "#",
      }
    },
  ];

  return (
    <main className="flex-1 max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <span className="bg-tertiary text-white px-4 py-1 neo-brutalist-border font-label-bold uppercase">The Brains</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">MEET THE TEAM</h1>
        <p className="font-body-lg text-body-lg max-w-2xl mt-4">
          The brilliant minds building systems and solving complex problems with ruthless efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col group">
            <div className="aspect-[3/4] bg-surface-dim neo-brutalist-border relative overflow-hidden neo-brutalist-shadow mb-6 transition-all duration-200 group-hover:-translate-y-2 group-hover:translate-x-[-2px] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-active:translate-y-2 group-active:translate-x-2 group-active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {member.image ? (
                <Image src={member.image} alt={member.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
              ) : (
                <div className="w-full h-full bg-surface-dim flex items-center justify-center">
                  <span className="font-headline-md opacity-20 uppercase text-center">Photo<br/>Placeholder</span>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-primary-container text-on-surface neo-brutalist-border px-2 py-1 font-label-bold text-xs">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <h3 className="font-headline-md text-2xl uppercase mb-1">{member.name}</h3>
              <p className="font-label-bold text-on-surface-variant uppercase mb-2 text-sm">{member.role}</p>
              <span className="bg-on-surface text-background px-3 py-1 font-label-bold text-xs uppercase mt-auto mb-4">
                {member.specialty}
              </span>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {member.socials?.instagram && (
                  <a href={member.socials?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary hover:-translate-y-1 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                )}
                {member.socials?.github && (
                  <a href={member.socials?.github || "#"} target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary hover:-translate-y-1 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a href={member.socials?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary hover:-translate-y-1 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
