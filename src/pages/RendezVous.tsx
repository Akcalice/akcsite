import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, Video, MapPin, CheckCircle } from "lucide-react";

const options = [
  {
    title: "Consultation découverte",
    duration: "30 min",
    price: "Gratuit",
    description: "Un premier échange pour faire connaissance et évaluer vos besoins.",
    features: ["Écoute de votre situation", "Identification des axes", "Proposition de suivi"],
  },
  {
    title: "Séance individuelle",
    duration: "1h",
    price: "Sur devis",
    description: "Accompagnement personnalisé sur la thématique de votre choix.",
    features: ["Suivi personnalisé", "Outils concrets", "Bilan de progression"],
    popular: true,
  },
  {
    title: "Forfait accompagnement",
    duration: "5 séances",
    price: "Sur devis",
    description: "Un parcours complet pour un accompagnement en profondeur.",
    features: ["Programme sur-mesure", "Suivi régulier", "Support entre les séances"],
  },
];

const RendezVous = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-gold-light text-xs font-semibold tracking-wider uppercase mb-6">
            Prise de Rendez-vous
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Réservez votre consultation</h1>
          <p className="text-muted-foreground text-lg">
            Choisissez la formule qui vous convient et démarrez votre accompagnement personnalisé.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {options.map((opt, i) => (
            <div key={i} className={`relative rounded-2xl p-8 shadow-sm ${opt.popular ? "bg-primary text-primary-foreground ring-2 ring-gold" : "bg-card"}`}>
              {opt.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-foreground text-xs font-bold">
                  Populaire
                </span>
              )}
              <h3 className="font-display text-xl font-bold mb-2">{opt.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className={opt.popular ? "text-primary-foreground/70" : "text-muted-foreground"} />
                <span className={`text-sm ${opt.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{opt.duration}</span>
              </div>
              <p className="font-display text-2xl font-bold mb-4">{opt.price}</p>
              <p className={`text-sm leading-relaxed mb-6 ${opt.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{opt.description}</p>
              <ul className="space-y-2 mb-8">
                {opt.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className={opt.popular ? "text-gold" : "text-foreground"} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center px-6 py-3 rounded-full font-semibold transition-colors ${
                  opt.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-navy-light"
                }`}
              >
                Réserver
              </Link>
            </div>
          ))}
        </div>

        {/* Meeting formats */}
        <div className="bg-accent/50 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">Formats de consultation</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Video, title: "Visioconférence", text: "Depuis chez vous, en toute simplicité." },
              { icon: MapPin, title: "En présentiel", text: "Dans un espace dédié et confidentiel." },
              { icon: Calendar, title: "Rendez-vous flash", text: "Pour une question rapide et ciblée." },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto mb-3">
                  <f.icon size={22} className="text-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default RendezVous;
