const navLinks = ['Shop', 'Our Story', 'Blog']

const actionIcons = [
  { icon: 'search', label: 'Buscar' },
  { icon: 'person', label: 'Cuenta' },
  { icon: 'shopping_bag', label: 'Carrito' },
]

const trustBadges = [
  {
    icon: 'eco',
    title: '100% Organic',
    description: 'Certified organic ingredients you can trust.',
  },
  {
    icon: 'recycling',
    title: 'Sustainably Sourced',
    description: 'Ethically sourced to protect our planet.',
  },
  {
    icon: 'pets',
    title: 'Cruelty-Free',
    description: 'Never tested on animals, only on happy humans.',
  },
]

const categories = [
  {
    title: 'Organic Skincare',
    image:
      'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuApsLqz45pk1NiKshhmr9HgLxvc3jn_lC-61pkhwixrTD3gDzt7POz2dm317hePy8xmbJ0f1PYoQDFSzHjxyA9CHh95MhG_l5A36N4r_P76N_u8coBe7ocddqnQo-n8QAnnpV_MvrCkEvqqJFI9bFpqtgJI068RamNNwmC8veDFNZGeaDJ-EZlWWRkZ0jIqSODxTG-UJMpdB1ZG6FvcICGGJ1Ih8BHBB9ePoAtAv6-fx06sL0j5VN8dBZrD02-N4EIUb9Wnreqban_V");',
    alt: 'A minimalist bathroom setting with amber glass bottles of organic skincare products.',
  },
  {
    title: 'Sustainable Home',
    image:
      'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuApsLqz45pk1NiKshhmr9HgLxvc3jn_lC-61pkhwixrTD3gDzt7POz2dm317hePy8xmbJ0f1PYoQDFSzHjxyA9CHh95MhG_l5A36N4r_P76N_u8coBe7ocddqnQo-n8QAnnpV_MvrCkEvqqJFI9bFpqtgJI068RamNNwmC8veDFNZGeaDJ-EZlWWRkZ0jIqSODxTG-UJMpdB1ZG6FvcICGGJ1Ih8BHBB9ePoAtAv6-fx06sL0j5VN8dBZrD02-N4EIUb9Wnreqban_V");',
    alt: 'A cozy living room with sustainable home goods like linen pillows and a wooden tray.',
  },
  {
    title: 'Ethical Apothecary',
    image:
      'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuApsLqz45pk1NiKshhmr9HgLxvc3jn_lC-61pkhwixrTD3gDzt7POz2dm317hePy8xmbJ0f1PYoQDFSzHjxyA9CHh95MhG_l5A36N4r_P76N_u8coBe7ocddqnQo-n8QAnnpV_MvrCkEvqqJFI9bFpqtgJI068RamNNwmC8veDFNZGeaDJ-EZlWWRkZ0jIqSODxTG-UJMpdB1ZG6FvcICGGJ1Ih8BHBB9ePoAtAv6-fx06sL0j5VN8dBZrD02-N4EIUb9Wnreqban_V");',
    alt: 'A collection of herbal remedies and essential oils in small glass vials on a dark surface.',
  },
]

const bestsellers = [
  {
    title: 'Rejuvenating Serum',
    price: '$42.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjvWEeIUSkKVdbe7U8vpTLE6X9oIfoWwIDZ8agLbiCT3_6rdXTZ7lCZfrcrrN-bN0uS096plPWK90kidyhAGAREdR-kEGVvu0k8TRcg8vufHisS8Yc4guUR8hYTRk5lhdehM2YRYxMQJcoFiXSbQG7f0pYfr7maQDqF1O7M8am_0vbHLo_OEv5tv_X_1GNY3RhYU1BWtKHrW2AfXIa6Z8ydTvNe3IAZPzLaco0buD-9EZpURblivdzrZ4LhfdfYmbtmHXt0KpPLqXx',
    alt: 'A bottle of rejuvenating facial serum with a dropper.',
  },
  {
    title: 'Artisan Ceramic Mug',
    price: '$28.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAp3DKNshlYZyuk5Q7-gO0q_We3WbdUczZ1JVnubxVkaJrHT_qqLJnlNrQVEdJ68dRcXhVlpt5QjdQY_A0M_kHhjF-CinSivEOkQcjswTBOILKXnXWE7FciV1ei0pSpxkSsrkMFToKeBFt_Ea125KRAv3FtX09QYWBUqzcyozzScVj-VyTmjXB7B6L8is3UgUx-zMgduv9EP4P_xhHme7iFsVBd3uVGW8iANa0w7YQfjsh5KZPc5rR4uTjy6DKQxYxmqZOyMKACJLAr',
    alt: 'A handcrafted ceramic mug in an earthy tone.',
  },
  {
    title: 'Calming Lavender Soap',
    price: '$12.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5sz0JowjjVmBFr9lMr9pZ_jwsE-JPzm_1UBQAo8fd9BwS99u3sfnYtqncb5LIxdmcbF1Kg_CHMjjRxMSaYXd_vWnqptEZ_dp0tLGDvVGwxndEsteuRu5rvTjwerfTHEvUZGIwC1RXYuLQ_VflSiY2COKTIOhLJkXc31WK6ucaWyU3g8bUWI_ecBda_LTs63rISsRCnXjv1OD_vFt5OM8KeS_w-TykrDI66_i81YsSHCtxGPXNle678ZNG_pHzwI_be19ZNrXoY0mu',
    alt: 'A bar of natural, handmade soap with lavender sprigs.',
  },
  {
    title: 'Soy Wax Candle',
    price: '$35.00',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNQnWXMblvx0GdoBWcx7NZwmYuv2JrDp9xPCnzEFnNGTJBsFBwrG2zulm9-kWK67NseIztE9auddWrGznXdX7sfeUsX744UfKnhVJONZAFwZYG-evgYE6sSni6oLT-hhU7uCcrf6z1T41j03CdiJfMAyVul3K6fWzAvhSrAG9uIFH-OWA0Sd_KYKwqaMo60obrp6XAQSiDYhBqEWDk9NjLShC8pn8ZMkTazdmAgBM8mhsgG_mjJ2siMF7a2VuQvAppxkH3S7KHyL6T',
    alt: 'A scented soy wax candle in a glass jar.',
  },
]

const testimonials = [
  {
    quote:
      '“The quality is just incredible. My skin has never felt better, and I love knowing the products are ethically made.”',
    author: 'Sarah J.',
  },
  {
    quote:
      '“Finally, a brand that aligns with my values. The sustainable home goods are beautiful and durable. Highly recommend!”',
    author: 'Michael B.',
  },
  {
    quote:
      '“Fast shipping and beautiful packaging. You can feel the care and attention to detail in every single item.”',
    author: 'Emily R.',
  },
]

const footerSections = [
  {
    title: 'Shop',
    links: ['Skincare', 'Home Goods', 'Apothecary', 'New Arrivals'],
  },
  {
    title: 'About',
    links: ['Our Story', 'Blog', 'Sustainability', 'Contact'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service'],
  },
]

const heroBackground =
  'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcMNFTmjqNJoJoiFPwOBf3e_GPWpIx1-EFo7ZmLkJ7X87URj3BHV_ChFU1uJGRo_xTFhgyd1Xr1ZVlFBKbM7ngmCd2YdT-GPN-WvFF4hV044758AWtsR_7Kl0N99zjSBY2L-qwE4hz4sZJ-5wrL8bnFXlvfx-SRzl_Os3MEZpyCUACJBV7ElgSDdEjibJCS_vBeYd0EAvUViCGUuAOJ-VM3_4OWaW4s8K_ynKYyh7LYE_-gPATwPr7JBAkfRYIUGnAzgMkte9OMH2n")'

function IconButton({ icon, label }) {
  return (
    <button
      className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-text-light transition hover:bg-primary/20 dark:bg-primary/20 dark:text-text-dark dark:hover:bg-primary/30"
      type="button"
      aria-label={label}
    >
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </button>
  )
}

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <header className="sticky top-0 z-50 flex items-center justify-center border-b border-text-light/10 bg-background-light/80 px-4 py-3 backdrop-blur-sm dark:border-text-dark/10 dark:bg-background-dark/80 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-3" href="#">
              <div className="text-accent-secondary size-6">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.03 15.5l-3.48-3.48L9 12.59l2.04 2.04 4.48-4.48L17 11.59l-6.03 6.03-0.01-0.12z" />
                </svg>
              </div>
              <h1 className="font-serif text-xl font-bold text-text-light dark:text-text-dark">
                Earthly Goods
              </h1>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((item) => (
                <a
                  key={item}
                  className="text-sm font-medium hover:text-primary dark:hover:text-primary"
                  href="#"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {actionIcons.map((action) => (
              <IconButton key={action.icon} {...action} />
            ))}
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div
              className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-xl bg-cover bg-center text-center text-white"
              style={{ backgroundImage: heroBackground }}
              data-alt="A serene, sunlit kitchen with natural wooden shelves holding various organic products in glass jars."
            >
              <div className="flex max-w-2xl flex-col items-center gap-4 p-8">
                <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
                  Purely from Nature, For You
                </h2>
                <p className="text-base font-normal leading-normal text-white/90 md:text-lg">
                  Discover our collection of organic and sustainably sourced
                  products, crafted with care for you and the planet.
                </p>
                <button className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-6 py-3 text-base font-bold text-text-light shadow-md transition-transform hover:scale-105">
                  <span className="truncate">Shop New Arrivals</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-secondary/20 text-accent-secondary">
                    <span className="material-symbols-outlined">{badge.icon}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold">{badge.title}</h3>
                  <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Shop By Category
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <a
                  key={category.title}
                  className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl p-6"
                  href="#"
                  data-alt={category.alt}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: category.image }}
                  />
                  <h3 className="relative font-serif text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-primary/5 py-16 dark:bg-primary/10 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Our Bestsellers
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {bestsellers.map((product) => (
                <div
                  key={product.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-text-light/10 bg-background-light transition-shadow hover:shadow-lg dark:border-text-dark/10 dark:bg-background-dark/50"
                >
                  <div className="relative">
                    <img
                      className="aspect-square w-full object-cover"
                      src={product.image}
                      alt={product.alt}
                    />
                    <button
                      className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-text-light opacity-0 transition-opacity group-hover:opacity-100"
                      type="button"
                      aria-label="Añadir al carrito"
                    >
                      <span className="material-symbols-outlined text-xl">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-serif text-lg font-semibold">{product.title}</h3>
                    <p className="mt-2 text-base font-medium">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
              From Our Community
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="flex flex-col rounded-xl border border-text-light/10 bg-background-light p-6 text-center shadow-sm dark:border-text-dark/10 dark:bg-background-dark/50"
                >
                  <div className="flex justify-center text-accent-secondary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="material-symbols-outlined">
                        star
                      </span>
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-grow text-base italic text-text-light/90 dark:text-text-dark/90">
                    {testimonial.quote}
                  </blockquote>
                  <footer className="mt-6 text-sm font-semibold text-text-light dark:text-text-dark">
                    {testimonial.author}
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-primary/5 dark:bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <a className="flex items-center gap-3" href="#">
                <div className="text-accent-secondary size-6">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.03 15.5l-3.48-3.48L9 12.59l2.04 2.04 4.48-4.48L17 11.59l-6.03 6.03-0.01-0.12z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold">Earthly Goods</h3>
              </a>
              <p className="mt-4 text-sm text-text-light/80 dark:text-text-dark/80">
                Crafting high-quality, sustainable products for a conscious lifestyle. Join
                our community and embrace the beauty of nature.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <label className="text-sm font-semibold" htmlFor="newsletter-email">
                  Join our newsletter
                </label>
                <form className="flex w-full max-w-md">
                  <input
                    className="flex-grow rounded-l-full border border-r-0 border-text-light/20 bg-background-light px-4 py-2 text-sm focus:border-primary focus:ring-primary dark:border-text-dark/20 dark:bg-background-dark/50"
                    id="newsletter-email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    className="rounded-r-full bg-primary px-4 py-2 text-sm font-bold text-text-light"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:col-span-7 sm:grid-cols-3">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-serif text-base font-semibold">{section.title}</h4>
                  <ul className="mt-4 space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a className="text-sm hover:text-primary" href="#">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-text-light/10 pt-8 text-center text-sm text-text-light/70 dark:border-text-dark/10 dark:text-text-dark/70">
            <p>© 2024 Earthly Goods. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
