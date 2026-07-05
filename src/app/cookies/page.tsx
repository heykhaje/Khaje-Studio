export default function CookiesPolicy() {
  return (
    <main className="flex-1 max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="flex flex-col gap-4 mb-16">
        <span className="bg-tertiary text-white px-4 py-1 neo-brutalist-border w-fit font-label-bold uppercase">Legal</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">COOKIES<br/>POLICY</h1>
      </div>
      
      <article className="prose max-w-4xl font-body-lg text-on-surface flex flex-col gap-8">
        <section className="bg-white p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">What Are Cookies?</h2>
          <p className="text-on-surface-variant">Cookies are small text files that are stored on your device when you visit a website. They help us understand how you use our site, save your preferences, and improve your overall experience.</p>
        </section>

        <section className="bg-surface-dim p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">How We Use Cookies</h2>
          <ul className="list-disc ml-6 flex flex-col gap-4 text-on-surface-variant">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly, including secure login and navigation.</li>
            <li><strong>Performance Cookies:</strong> Allow us to count visits and traffic sources to measure and improve site performance.</li>
            <li><strong>Functionality Cookies:</strong> Enable enhanced personalization and functionality based on your interactions.</li>
          </ul>
        </section>

        <section className="bg-on-surface text-background p-8 neo-brutalist-border neo-brutalist-shadow">
          <h2 className="font-headline-md uppercase mb-4">Managing Your Preferences</h2>
          <p className="text-surface-variant">You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
        </section>
      </article>
    </main>
  );
}
