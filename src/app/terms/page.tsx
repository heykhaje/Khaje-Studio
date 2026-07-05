export default function TermsAndConditions() {
  return (
    <main className="flex-1 max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-16">
        <span className="bg-secondary text-white px-4 py-1 neo-brutalist-border w-fit font-label-bold uppercase">Legal</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">TERMS &<br/>CONDITIONS</h1>
      </div>
      
      <article className="prose max-w-4xl font-body-lg text-on-surface flex flex-col gap-8">
        <section className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">1. Acceptance of Terms</h2>
          <p className="text-on-surface-variant">By accessing and using Khaje&apos;Studio&apos;s website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.</p>
        </section>

        <section className="bg-surface-dim p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">2. Services & Project Scope</h2>
          <p className="mb-4 text-on-surface-variant">All projects, including web development and academic assistance, are executed based on agreed-upon scopes. Revisions outside the initial agreement may incur additional charges.</p>
          <ul className="list-disc ml-6 mt-4 flex flex-col gap-2 font-label-bold uppercase text-sm">
            <li>50% DOWN PAYMENT REQUIRED</li>
            <li>STRICT DEADLINE ADHERENCE</li>
            <li>NO REFUNDS AFTER DEVELOPMENT STARTS</li>
          </ul>
        </section>

        <section className="bg-primary-container p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">3. Intellectual Property</h2>
          <p className="text-on-surface-variant">All source code, designs, and intellectual property developed during a project remain the property of Khaje&apos;Studio until full payment is received. Upon final payment, usage rights are transferred to the client as per the specific contract terms.</p>
        </section>
      </article>
    </main>
  );
}
