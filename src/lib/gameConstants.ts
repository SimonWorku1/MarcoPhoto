const shuffle = <T>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const THEMES: string[] = [
  "Nature",
  "Food & Drink",
  "Architecture",
  "Night Life",
  "Travel",
  "Everyday Life",
  "Art & Culture",
  "Sports & Fitness",
  "Weather",
  "Urban Streets",
  "Water & Ocean",
  "Celebrations",
  "Work & Study",
  "Family & Friends",
  "Pets & Animals",
  "Sunsets & Skies",
  "Markets & Shops",
  "Texture & Patterns",
  "Motion & Speed",
  "Silence & Stillness",
];

export const CLUE_BANK: string[] = [
  // emotion
  "calm", "tense", "lonely", "joyful", "awkward", "nostalgic", "hopeful", "uneasy",
  // condition
  "broken", "messy", "clean", "dark", "bright", "fragile", "worn", "fresh",
  // conceptual
  "hidden", "open", "empty", "crowded", "weird", "normal", "lost", "found",
  // motion / state
  "moving", "still", "waiting", "rushing", "stuck", "fleeting", "heavy", "light",
  // sensory / aesthetic
  "sharp", "blurry", "loud", "quiet", "rough", "smooth", "warm", "cold",
  // relational
  "together", "apart", "watched", "ignored", "contained", "free", "grounded", "floating",
];

export const pickClueOptions = (n = 10): string[] =>
  shuffle(CLUE_BANK).slice(0, n);
