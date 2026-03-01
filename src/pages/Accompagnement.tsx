import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";

const poles = [
  {
    icon: GraduationCap,
    title: "Pôle Éducatif",
    color: "bg-gold-light",
    items: [
      "Soutien à la parentalité",
      "Guidance éducative",
      "Médiation familiale",
      "Ateliers parents-enfants",
      "Accompagnement scolaire",
    ],
    description: "Un espace d'écoute et d'échange pour apaiser les tensions, favoriser le dialogue et rétablir un équilibre dans les relations familiales.",
  },
  {
    icon: Users,
    title: "Pôle Insertion",
    color: "bg-accent",
    items: [
      "Bilan de compétences",
      "Aide à la recherche d'emploi",
      "Préparation aux entretiens",
      "Rédaction de CV et lettres",
      "Orientation professionnelle",
    ],
    description: "Vous êtes en recherche d'emploi, en reconversion ou en questionnement professionnel ? Je vous accompagne pour définir un projet clair et reprendre confiance.",
  },
  {
    icon: Briefcase,
    title: "Pôle Professionnel",
    color: "bg-secondary",
    items: [
      "Coaching individuel",
      "Formation en entreprise",
      "Ateliers de cohésion d'équipe",
      "Développement du leadership",
      "Gestion du stress",
    ],
    description: "Formations et ateliers pratiques pour booster la confiance, atteindre ses objectifs et encourager l'autonomie au sein de votre structure.",
  },
];

const Accompagnement = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-gold-light text-xs font-semibold tracking-wider uppercase mb-6">
            Accompagnement
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Nos 3 pôles d'intervention</h1>
          <p className="text-muted-foreground text-lg">
            Un accompagnement global et personnalisé, adapté à chaque situation et à chaque rythme.
          </p>
        </div>

        <div className="space-y-12">
          {poles.map((pole, i) => (
            <div key={i} className={`${pole.color} rounded-2xl p-8 md:p-12`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4">
                    <pole.icon size={24} className="text-foreground" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{pole.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{pole.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Ce que nous proposons :</h3>
                  <ul className="space-y-3">
                    {pole.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <CheckCircle size={18} className="text-foreground shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/rendez-vous" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
            Réserver une consultation <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Accompagnement;
