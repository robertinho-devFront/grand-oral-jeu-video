// Mention spéciale inscrite sur le diplôme et dans l'e-mail selon le jeu préféré.
// Ajoute un jeu : { names: ["titre", "variante"], line: "Phrase courte, factuelle." }

const GAMES = [
  { names: ["minecraft", "mc"], line: "Le jeu le plus vendu de l'histoire, un bloc après l'autre." },
  { names: ["tetris"], line: "Né à Moscou en 1984, toujours aussi addictif quarante ans plus tard." },
  { names: ["mario", "super mario", "super mario bros", "super mario 64", "super mario odyssey", "mario odyssey"], line: "Le plombier le plus célèbre du monde, charpentier à ses débuts." },
  { names: ["mario kart", "mario kart 8", "mario kart world"], line: "Gare à la carapace bleue." },
  { names: ["zelda", "the legend of zelda", "breath of the wild", "botw", "tears of the kingdom", "totk", "ocarina of time"], line: "Hyrule n'a plus de secrets pour vous… ou presque, il reste des noix Korogu." },
  { names: ["pokemon", "pokémon", "pokemon rouge", "pokemon bleu", "pokemon go"], line: "Attrapez-les tous : 151 au départ, plus de mille aujourd'hui." },
  { names: ["fortnite"], line: "Cent joueurs, un bus volant, une seule victoire royale." },
  { names: ["league of legends", "lol"], line: "Rendez-vous sur la Faille de l'invocateur." },
  { names: ["counter-strike", "counter strike", "cs", "cs2", "csgo", "cs go"], line: "Né d'un mod de Half-Life en 1999, roi de l'e-sport." },
  { names: ["valorant"], line: "Visée précise et pouvoirs d'agents." },
  { names: ["gta", "grand theft auto", "gta v", "gta 5", "gta san andreas", "gta vice city"], line: "Un milliard de dollars en trois jours pour GTA V." },
  { names: ["red dead redemption", "red dead redemption 2", "rdr2"], line: "Arthur Morgan vous salue." },
  { names: ["the witcher", "the witcher 3", "witcher 3"], line: "Jeu de l'année 2015, et du gwynt à n'en plus finir." },
  { names: ["cyberpunk", "cyberpunk 2077"], line: "Night City n'attendait que vous." },
  { names: ["elden ring"], line: "Jeu de l'année 2022. Malenia vous attend." },
  { names: ["dark souls", "bloodborne", "sekiro"], line: "Mourir, apprendre, recommencer. Praise the Sun !" },
  { names: ["baldur's gate 3", "baldurs gate 3", "bg3"], line: "Jeu de l'année 2023, un coup de dé à la fois." },
  { names: ["the last of us", "tlou"], line: "Joel et Ellie, une des plus belles histoires du jeu vidéo." },
  { names: ["god of war"], line: "Kratos, des dieux grecs aux dieux nordiques." },
  { names: ["final fantasy", "final fantasy vii", "ff7", "ffvii"], line: "Chocobos, Buster Sword et One-Winged Angel." },
  { names: ["skyrim", "the elder scrolls"], line: "Fus Ro Dah ! Sans flèche dans le genou, de préférence." },
  { names: ["halo"], line: "Le Master Chief, mascotte de la Xbox depuis 2001." },
  { names: ["call of duty", "cod"], line: "Une nouvelle guerre chaque automne depuis 2003." },
  { names: ["fifa", "ea sports fc", "fc 25", "fc 26"], line: "Le football virtuel le plus joué au monde." },
  { names: ["rocket league"], line: "Du football avec des voitures. Évidemment." },
  { names: ["les sims", "sims", "the sims"], line: "Sul sul ! Le simlish n'a plus de secrets pour vous." },
  { names: ["animal crossing"], line: "Tom Nook attend toujours le remboursement de votre prêt." },
  { names: ["sonic"], line: "Le hérisson le plus rapide du monde, depuis 1991." },
  { names: ["assassin's creed", "assassins creed", "ac"], line: "Rien n'est vrai, tout est permis." },
  { names: ["rayman", "lapins cretins", "lapins crétins"], line: "Le héros sans bras ni jambes de Michel Ancel." },
  { names: ["clair obscur", "expedition 33", "clair obscur expedition 33"], line: "La fierté de Montpellier, sortie en 2025." },
  { names: ["hollow knight", "silksong"], line: "Hallownest et ses profondeurs, enfin rejointes par Silksong." },
  { names: ["stardew valley"], line: "Créé par une seule personne, cultivé par des millions." },
  { names: ["among us"], line: "Ça sent l'imposteur…" },
  { names: ["world of warcraft", "wow"], line: "Pour la Horde ! Ou pour l'Alliance, selon votre camp." },
  { names: ["portal", "portal 2"], line: "The cake is a lie." },
  { names: ["half-life", "half life"], line: "Gordon Freeman, son pied-de-biche, et toujours pas de Half-Life 3." },
  { names: ["street fighter"], line: "Hadoken !" },
  { names: ["smash", "super smash bros", "smash bros"], line: "Tous les héros de Nintendo sur un même ring." },
  { names: ["metal gear", "metal gear solid", "mgs"], line: "Snake ? Snake ?! SNAAAKE !" },
  { names: ["pac-man", "pacman"], line: "Le glouton jaune, roi de l'arcade depuis 1980." },
];

export function normalizeName(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 '-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Retourne { club, line } : club = jeu tel que saisi (le champ garde ce nom pour l'e-mail), line = mention.
export function clubMention(raw) {
  const club = (raw || "").trim().slice(0, 40);
  if (!club) return null;
  const n = normalizeName(club);
  const norm = (x) => normalizeName(x);
  const hit = GAMES.find((g) => g.names.map(norm).includes(n)) || GAMES.find((g) => g.names.map(norm).some((name) => name.length > 4 && n.includes(name)));
  return { club, line: hit ? hit.line : "Un goût sûr. Appuyez sur Start pour continuer." };
}
