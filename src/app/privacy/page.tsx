export default function PrivacyPolicy() {
  return (
    <main className="flex-1 max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-16">
        <span className="bg-primary text-white px-4 py-1 neo-brutalist-border w-fit font-label-bold uppercase">Legal</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">PRIVACY<br/>POLICY</h1>
      </div>
      
      <article className="prose max-w-4xl font-body-lg text-on-surface flex flex-col gap-8">
        <section className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">1. Information Collection</h2>
          <p className="mb-4 text-on-surface-variant">We collect minimal information necessary to provide our digital services. This includes contact information provided through our forms, analytics data to improve user experience, and technical identifiers necessary for operation.</p>
          <p className="text-on-surface-variant">At Khaje&apos;Studio, we believe in raw honesty. We do not sell your personal data to third parties. Built not designed means our data collection practices are transparent and secure.</p>
        </section>

        <section className="bg-surface-dim p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">2. Use of Information</h2>
          <p className="text-on-surface-variant">The information we collect is strictly used to:</p>
          <ul className="list-disc ml-6 mt-4 flex flex-col gap-2 font-label-bold uppercase text-sm">
            <li>Process and fulfill service requests</li>
            <li>Communicate regarding project status</li>
            <li>Enhance our website&apos;s performance and security</li>
          </ul>
        </section>

        <section className="bg-secondary-fixed p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">3. Data Protection</h2>
          <p className="text-on-surface-variant">We implement robust, modern security measures to maintain the safety of your personal information. All sensitive data is transmitted via Secure Socket Layer (SSL) technology and strictly encrypted.</p>
        </section>
      </article>
    </main>
  );
}
