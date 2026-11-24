// Banque de questions : assemblée à partir des fichiers de src/data/bank/.
// Pour ajouter des questions, modifie ces fichiers (la bonne réponse en première position),
// puis lance `npm run check`.

import d1 from "./bank/d1-tutoriel.js";
import d2 from "./bank/d2-arcade.js";
import d3 from "./bank/d3-difficile.js";
import d4 from "./bank/d4-boss.js";

// Les 4 niveaux de difficulté des questions.
export const DIFFICULTIES = [
  { name: "Tutoriel", sub: "Les classiques que tout joueur doit connaître" },
  { name: "Salle d'arcade", sub: "Pour les joueurs réguliers" },
  { name: "Mode difficile", sub: "Pour les passionnés d'histoire du jeu vidéo" },
  { name: "Boss final", sub: "Pour les archivistes de la manette" },
];
// Les 4 manches d'une partie portent les mêmes noms (la difficulté réelle dépend du mode).
export const LEVELS = DIFFICULTIES;

export const CATEGORIES = {
  H: "Histoire",
  R: "Consoles & matériel",
  A: "Easter eggs & jargon",
  J: "Créateurs & personnages",
  C: "Jeux & franchises",
};

export const REGIONS = {
  AS: "Japon & Asie-Océanie",
  NA: "Amérique du Nord",
  EU: "Europe",
  MO: "Culture geek",
};

// Identifiant stable calculé à partir du texte de la question (hash FNV-1a).
function hashId(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(36);
}

function build(rows, level) {
  return rows.map(([cat, region, q, good, w1, w2, w3, i]) => ({
    id: hashId(q), level, cat, region, regionName: REGIONS[region] || region, q, o: [good, w1, w2, w3], a: 0, i,
  }));
}

export const BANK = [d1, d2, d3, d4].flatMap((rows, level) => build(rows, level));

// Grades du diplôme, du noob à la légende de l'arcade.
export const GRADES = [
  { min: 34, name: "Légende de l'arcade", line: "Votre pseudo mérite le haut du tableau des scores." },
  { min: 25, name: "Pro gamer", line: "Réflexes affûtés, culture solide. Le boss final tremble." },
  { min: 15, name: "Joueur confirmé", line: "Les bases sont là. Il reste des niveaux secrets à débloquer." },
  { min: 0, name: "Noob certifié", line: "Tout le monde commence au niveau 1. Continuer ?" },
];
export const gradeFor = (s) => GRADES.find((g) => s >= g.min);
