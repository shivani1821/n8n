import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  HandHeart,
  Leaf,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wheat,
  Flame,
  Heart,
  LayoutGrid,
} from "lucide-react";
import heroImage from "@/assets/hero-bread.jpg";
import aboutImage from "@/assets/about-baker.jpg";
import ovenImage from "@/assets/oven.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PRODUCTS, formatPrice } from "@/lib/site-data";

const TITLE = "Crust & Crumb — Freshly Baked Artisan Bread";
const DESCRIPTION =
  "A little crust, a lot of love. Sourdough, brioche, multigrain and more — freshly baked by Crust & Crumb with quality ingredients and honest baking.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHY = [
  { icon: Wheat, title: "Quality Ingredients", text: "We carefully select our ingredients to bring you delicious bread with great taste, texture, and quality." },
  { icon: Flame, title: "Freshness in Every Bite", text: "We prepare fresh batches regularly to bring you the wonderful taste and aroma of freshly baked bread." },
  { icon: HandHeart, title: "Crafted with Care", text: "Every loaf is prepared with attention, patience, and a genuine passion for baking." },
  { icon: LayoutGrid, title: "A Variety for Everyone", text: "From classic white bread to wholesome multigrain and artisan sourdough, we offer something for every taste and preference." },
  { icon: Users, title: "Made for Sharing", text: "From family breakfasts to special gatherings, our bread makes every moment more enjoyable." },
];

const VALUES = [
  { icon: ShieldCheck, title: "Quality", text: "Never compromise on the quality of our products." },
  { icon: Leaf, title: "Freshness", text: "Make freshness an essential part of everything we bake." },
  { icon: Heart, title: "Passion", text: "Put love and dedication into every loaf." },
  { icon: HandHeart, title: "Trust", text: "Build lasting relationships with our customers." },
  { icon: Lightbulb, title: "Innovation", text: "Continuously explore new flavours, recipes, and baking experiences." },
];

const REVIEWS = [
  "The sourdough is absolutely delicious! The crust is perfect, and the inside is so soft. Definitely my new favourite!",
  "I love the freshness and quality of their bread. The whole wheat loaf has become a regular part of our breakfast.",
  "Beautifully baked, great taste, and perfect texture. You can really feel the care that goes into every loaf.",
];

const FAQS = [
  { q: "Are your breads freshly baked?", a: "Yes! We prepare fresh batches regularly to ensure our customers enjoy delicious bread with great taste and texture." },
  { q: "What types of bread do you offer?", a: "We offer a variety of breads, including sourdough, whole wheat, multigrain, white bread, brioche, and garlic herb bread." },
  { q: "Do you offer home delivery?", a: "Yes, we offer home delivery in selected locations. Delivery availability and charges may vary depending on your location." },
  { q: "Can I place bulk orders?", a: "Absolutely! We accept bulk orders for events, gatherings, cafes, and other special occasions." },
  { q: "How should I store my bread?", a: "Store bread in a cool, dry place in suitable packaging. Follow the storage instructions provided on the product packaging for the best quality." },
  { q: "How can I place an order?", a: "You can place an order through our website or contact our team directly by phone or email." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-espresso">
        <img
          src={heroImage}
          alt="Freshly baked sourdough loaves and baguettes on a rustic wooden table"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-2xl text-espresso-foreground">
            <p className="eyebrow animate-rise !text-accent">Fresh from our oven</p>
            <h1 className="mt-6 animate-rise text-5xl font-semibold leading-[1.05] md:text-7xl [animation-delay:120ms]">
              A Little Crust.
              <br />
              <span className="italic text-accent">A Lot of Love.</span>
            </h1>
            <p className="mt-7 animate-rise text-lg leading-relaxed text-espresso-foreground/85 [animation-delay:240ms]">
              Discover the joy of freshly baked bread, made with carefully selected ingredients,
              traditional baking techniques, and a passion for perfection.
            </p>
            <p className="mt-4 animate-rise leading-relaxed text-espresso-foreground/70 [animation-delay:300ms]">
              From the first crispy bite to the last delicious crumb, we bring warmth, freshness,
              and goodness to your everyday table.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-4 [animation-delay:380ms]">
              <Button asChild variant="hero" size="xl">
                <Link to="/" hash="products">Explore Our Breads</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/" hash="about">Discover Our Story</Link>
              </Button>
            </div>
            <p className="mt-10 animate-rise font-display text-lg italic text-espresso-foreground/70 [animation-delay:460ms]">
              Freshly baked. Thoughtfully crafted. Made with love.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img
              src={aboutImage}
              alt="A baker shaping dough by hand on a floured bench"
              width={1008}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-[16rem] rounded-2xl bg-espresso p-6 text-espresso-foreground shadow-lift sm:block">
              <p className="eyebrow !text-accent">Our Promise</p>
              <p className="mt-2 font-display text-lg leading-snug">
                Simple ingredients. Honest baking. Unforgettable taste.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The story behind the loaf"
              title="Baking Happiness, One Loaf at a Time."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                At Crust &amp; Crumb, we believe that great bread is more than just food. It's
                comfort, connection, and the little moments that bring people together.
              </p>
              <p>
                Born out of a love for authentic baking, Crust &amp; Crumb is dedicated to creating
                delicious bread using quality ingredients and thoughtful baking methods.
              </p>
              <p>
                Every loaf reflects our commitment to freshness, flavour, and craftsmanship. Whether
                it's your morning toast, a hearty sandwich, or a family dinner, we're here to make
                every meal a little more special.
              </p>
            </div>
            <p className="mt-8 rounded-2xl border border-border bg-card p-5 font-display text-lg italic text-primary sm:hidden">
              Simple ingredients. Honest baking. Unforgettable taste.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-secondary/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Freshly baked for you" title="Find Your Perfect Loaf.">
            From wholesome everyday favourites to indulgent bakery classics, we have something for
            every craving.
          </SectionHeading>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={912}
                    height={912}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-foreground">{p.name}</h3>
                    <span className="shrink-0 rounded-full bg-accent/30 px-3 py-1 text-sm font-semibold text-primary">
                      {formatPrice(p.price)}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The difference is in the details"
            title="Good Bread. Great Ingredients. Better Moments."
          >
            At Crust &amp; Crumb, every detail matters. Here's what makes our bread special.
          </SectionHeading>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/30 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="relative isolate overflow-hidden bg-espresso py-24 text-espresso-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow !text-accent">The art of good baking</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              We Believe Good Bread <span className="italic text-accent">Takes Time.</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-espresso-foreground/75">
              <p>
                We don't believe in shortcuts when it comes to good bread. Our baking philosophy is
                rooted in patience, quality, and a genuine love for the craft.
              </p>
              <p>
                From selecting the right ingredients to preparing and baking every loaf, we focus on
                the details that make a difference. We believe that the best bread brings together
                three simple things:
              </p>
            </div>
            <ol className="mt-8 space-y-4">
              {[
                "Quality ingredients that make every bite worthwhile.",
                "Thoughtful preparation that respects the art of baking.",
                "Freshness and flavour that make every loaf memorable.",
              ].map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="font-display text-3xl text-accent">0{i + 1}</span>
                  <span className="pt-2 text-espresso-foreground/90">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 font-display text-xl italic text-accent">
              Because for us, bread isn't just something you eat. It's something you experience.
            </p>
          </div>
          <img
            src={ovenImage}
            alt="A baker pulling golden loaves out of a wood-fired brick oven"
            width={1600}
            height={912}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-warm p-10 text-primary-foreground shadow-soft">
              <Sparkles className="h-7 w-7 text-accent" />
              <p className="eyebrow mt-6 !text-accent">Our Mission</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                To bring fresh, delicious, and quality bread to every household while creating
                memorable experiences through the simple joy of good baking.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
              <Star className="h-7 w-7 text-accent" />
              <p className="eyebrow mt-6">Our Vision</p>
              <p className="mt-4 font-display text-2xl leading-snug text-foreground">
                To become a trusted and loved bakery brand known for quality, freshness, innovation,
                and a commitment to making everyday food special.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <SectionHeading eyebrow="What we stand for" title="Our Core Values" />
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {VALUES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-background p-7">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Love from our customers" title="Don't Just Take Our Word for It." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="flex flex-col rounded-3xl bg-card p-8 shadow-soft">
                <Quote className="h-8 w-8 text-accent" />
                <div className="mt-4 flex gap-1 text-accent" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-foreground">
                  "{r}"
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-primary">— Happy Customer</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <SectionHeading align="left" eyebrow="Good to know" title="Frequently Asked Questions">
            Can't find what you're looking for?{" "}
            <Link to="/contact" className="font-medium text-primary underline underline-offset-4">
              Get in touch
            </Link>
            .
          </SectionHeading>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="grain mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-warm px-8 py-20 text-center text-primary-foreground shadow-lift md:px-16">
          <Clock className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Your Next Favourite Loaf Is Waiting.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-primary-foreground/85">
            Bring home the goodness of freshly baked bread. Whether it's breakfast, lunch, or a
            special family meal, Crust &amp; Crumb makes every moment a little more delicious.
          </p>
          <Button asChild variant="hero" size="xl" className="relative z-10 mt-10">
            <Link to="/contact">Order Fresh Bread</Link>
          </Button>
          <p className="mt-8 font-display italic text-primary-foreground/80">
            Order fresh. Eat happy. Share the love.
          </p>
        </div>
      </section>
    </>
  );
}
