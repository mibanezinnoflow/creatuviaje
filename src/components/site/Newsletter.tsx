import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="container-editorial">
      <div className="rounded-xl border border-border bg-card px-6 py-14 text-center md:px-16 md:py-20">
        <p className="eyebrow text-accent">Newsletter</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-[1.08] md:text-[2.75rem]">
          Tu próxima aventura empieza aquí.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Una vez al mes te enviaremos nuevos destinos, rutas y lugares que merece la pena
          descubrir.
        </p>

        {sent ? (
          <p className="mt-8 text-sm text-accent">
            Gracias. Te escribiremos con la próxima edición.
          </p>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Tu email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Tu email"
              className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Quiero viajar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
