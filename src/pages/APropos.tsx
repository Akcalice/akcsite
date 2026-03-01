import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import consultantPortrait from "@/assets/consultant-portrait.jpg";
import booksStudy from "@/assets/books-study.jpg";
import { Heart, Target, Users, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Bienveillance", text: "Un cadre d'écoute sans jugement, respectueux du rythme de chacun." },
  { icon: Target, title: "Sur-mesure", text: "Chaque accompagnement est adapté à votre situation et vos objectifs." },
  { icon: Users, title: "Humanité", text: "Aller au rythme de la personne accompagnée, toujours." },
  { icon: BookOpen, title: "Expertise", text: "Plus de 25 ans d'expérience dans l'accompagnement éducatif et professionnel." },
];

const APropos = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-gold-light text-xs font-semibold tracking-wider uppercase mb-6">
              À propos
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Une consultante engagée à vos côtés
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fondatrice d'AKC Gestion Conseils, je suis consultante experte avec plus de 25 ans d'expérience dans l'accompagnement éducatif, l'insertion et le développement professionnel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ma philosophie : « Aller au rythme de la personne accompagnée ». Chaque parcours est unique, et mon approche humaine et personnalisée permet à chacun de devenir acteur de son évolution. Je travaille auprès des femmes, des familles, des jeunes et des structures professionnelles pour offrir un accompagnement complet et bienveillant.
            </p>
            <Link to="/rendez-vous" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
              Prendre Rendez-vous
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={consultantPortrait} alt="La fondatrice d'AKC Gestion Conseils" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Methodology */}
    <section className="section-cream py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <img src={booksStudy} alt="Livres et étude" className="w-full h-80 object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ma méthodologie</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mon approche repose sur l'écoute active, l'analyse de la situation globale et la co-construction de solutions adaptées. Je combine formations, ateliers pratiques et conseils personnalisés.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Que vous soyez un particulier en quête de repères ou une entreprise souhaitant renforcer ses équipes, je m'engage à vous accompagner avec respect, professionnalisme et engagement.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Nos valeurs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default APropos;
