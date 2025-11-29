import { Character } from "./types";

export const CHARACTERS: Character[] = [
  {
    id: "mel",
    name: "Amélie",
    nickname: "Mel",
    role: "Hlavní hrdinka / Sirotek",
    description: "Dívka žijící u pěstounů, která se cítí osamělá a vykořeněná. Miluje astronomii a hvězdy. Její život se změní, když najde 'padlou hvězdu' - kocoura Benu.",
    appearance: "Velké tmavé oči, často nosí starou šedou mikinu s kapucí a ošoupané legíny. Působí nenápadně, 'jako přízrak'.",
    personality: "Introvertní, citlivá, vnímavá k detailům, houževnatá. Trpí šikanou, ale má vnitřní sílu bojovat.",
    imagePrompt: "anime style portrait of a teenage girl, big dark sad eyes, messy hair, wearing an old oversized grey hoodie, looking up at starry night sky, melancholic atmosphere, detailed masterpiece",
    color: "border-indigo-500 shadow-indigo-500/50"
  },
  {
    id: "minoru",
    name: "Minoru Reitsū",
    nickname: "Min",
    role: "Stážista / Ochránce",
    description: "Tajemný stážista z Japonska (původem však možná odjinud), který přijel učit bojová umění. Má tajnou misi najít 'princeznu'.",
    appearance: "Černé vlasy sčesané dozadu, tmavé pronikavé oči, černé oblečení, často v kimonu nebo taktické vestě. Svalnatý, pohybuje se tiše.",
    personality: "Stoický, disciplinovaný, loajální, mistr bojových umění. Působí chladně, ale má smysl pro spravedlnost.",
    imagePrompt: "anime style portrait of a young japanese martial artist man, black slicked back hair, sharp dark eyes, wearing black tactical clothes or kimono, stoic expression, dark mysterious background, detailed masterpiece",
    color: "border-slate-600 shadow-slate-600/50"
  },
  {
    id: "benu",
    name: "Benu",
    role: "Magický společník / Světlo",
    description: "Bytost, která spadla z nebe. Zpočátku malé bílé kotě, které rychle roste a mění se v majestátního bílého lva. Představuje princip Světla (Seraph).",
    appearance: "Bílá srst jako sníh, velké zlaté oči, které září inteligencí. Později stříbrná hříva.",
    personality: "Ochránce, věrný, inteligentní, komunikuje pohledem a vrněním, dokáže být divoký, když brání Mel.",
    imagePrompt: "mystical white lion cub with glowing golden eyes, shimmering silver mane, ethereal aura, sitting on a bed, anime fantasy style, detailed masterpiece",
    color: "border-yellow-400 shadow-yellow-400/50"
  },
  {
    id: "kheru",
    name: "Kheru",
    role: "Temný stín / Rovnováha",
    description: "Temná verze Benu, představující princip Stínu (Velkhar). Objevuje se jako černá kočka nebo obrovský lev s popelavou hřívou. Není nutně zlý, ale udržuje rovnováhu.",
    appearance: "Černá srst splývající se tmou, stříbrné oči zářící jako diamanty. V podobě lva má popelavě stříbrnou hřívu a černé tesáky.",
    personality: "Hrozivý, tajemný, neústupný. Jeho přítomnost vyvolává chlad a respekt.",
    imagePrompt: "mystical giant black lion with ash-silver mane, glowing silver eyes, dark ominous aura, standing in a dark forest, anime fantasy style, detailed masterpiece",
    color: "border-zinc-500 shadow-zinc-500/50"
  },
  {
    id: "em",
    name: "Amálie Zárubová",
    nickname: "Em / Málka",
    role: "Rival / Spolužačka",
    description: "Krásná a populární spolužačka Mel. Kdysi byly kamarádky, nyní ji šikanuje. Je adoptovaná, což tají.",
    appearance: "Dlouhé zlaté vlasy, perfektně upravená, módní oblečení. Krásná, ale s chladným výrazem.",
    personality: "Arögantní, dominantní, vyžaduje pozornost, ale uvnitř nejistá a žárlivá. Má talent na bojová umění.",
    imagePrompt: "anime style portrait of a beautiful teenage girl, long golden blonde hair, confident smirk, fashionable school outfit, crossed arms, cinematic lighting, detailed masterpiece",
    color: "border-blue-400 shadow-blue-400/50"
  },
  {
    id: "marta",
    name: "Marta",
    role: "Pěstounka",
    description: "Pěstounka Mel. Žena posedlá úklidem a pořádkem, pro kterou je Mel spíše přítěží a zdrojem příjmů než členem rodiny.",
    appearance: "Staromódní oblečení, často v domácím úboru, přísný a nespokojený výraz ve tváři.",
    personality: "Upovídaná, hysterická, materiálně založená, bez citového vztahu k Mel.",
    imagePrompt: "anime style portrait of a middle-aged stern woman, scolding expression, wearing old-fashioned apron, standing in a clean kitchen, detailed masterpiece",
    color: "border-pink-700 shadow-pink-700/50"
  },
  {
    id: "karel",
    name: "Karel",
    role: "Pěstoun",
    description: "Manžel Marty. Tichý a submisivní muž, který má však Mel tajně rád a snaží se jí pomáhat, když se Marta nedívá.",
    appearance: "Šedé řídké vlasy česané na bok (často mastné), velké poplejtkové brýle, vlídný úsměv. Nosí staré svetry.",
    personality: "Tichý, laskavý, milovník zvířat. Ve stínu své dominantní manželky.",
    imagePrompt: "anime style portrait of an old kind man, thinning grey greasy hair combed over, big thick glasses, wearing a sweater, warm gentle smile, holding a bowl of milk, detailed masterpiece",
    color: "border-teal-600 shadow-teal-600/50"
  },
  {
    id: "jushin",
    name: "Mistr Jūshin",
    role: "Sensei / Učitel",
    description: "Minoruův mistr a vychovatel. Tvrdý muž, který Minorua vycvičil v bojových uměních a předal mu jeho životní misi.",
    appearance: "Starší muž s autoritou, tvrdé rysy, tradiční oděv, pronikavý pohled, který neodpouští chybu.",
    personality: "Nekompromisní, přísný, věří v disciplínu a bolest jako formu testu. 'Selhání trestáme bičem'.",
    imagePrompt: "anime style portrait of an elderly japanese martial arts master, stern face, traditional robes, white beard, dojo background, aura of authority, detailed masterpiece",
    color: "border-red-900 shadow-red-900/50"
  },
  {
    id: "hannah",
    name: "Hannah",
    role: "Technická podpora / Spojenec",
    description: "Členka Minoruova týmu. Specialistka na data a informace.",
    appearance: "Vysoká, štíhlá, rudé vlasy, modré oči, styl 'retro punk', úzké rty.",
    personality: "Pragmatická, skeptická, inteligentní, ovládá technologie.",
    imagePrompt: "anime style portrait of a woman with red hair and blue eyes, retro punk style fashion, leather jacket, holding a laptop, sharp intelligent look, detailed masterpiece",
    color: "border-red-500 shadow-red-500/50"
  },
  {
    id: "marek",
    name: "Marek Svoboda",
    role: "Koordinátor / Spojenec",
    description: "Dlouholetý přítel Minorua. Pracuje na krajském úřadě jako krytí pro jejich misi.",
    appearance: "Muž středního věku, civilní vzhled, často se usmívá.",
    personality: "Vtipný, uvolněný, loajální přítel, hraje kulečník, slouží jako sociální most pro Minorua.",
    imagePrompt: "anime style portrait of a friendly man, casual business clothes, holding a folder, warm smile, standing in a dim bar setting, detailed masterpiece",
    color: "border-green-600 shadow-green-600/50"
  },
  {
    id: "libor",
    name: "Libor",
    role: "Spolužák",
    description: "Spolužák Mel, který s ní sedí v lavici. Snaží se být kamarádský, ale je trochu otravný.",
    appearance: "Zrzavé vlasy, hubený, rovnátka, často působí neupraveně.",
    personality: "Ušlápnutý, upovídaný, jedlík (rybí pomazánka), snaží se zapadnout.",
    imagePrompt: "anime style portrait of a skinny teenage boy with messy red hair, braces, wearing a goofy t-shirt, awkward smile, detailed masterpiece",
    color: "border-orange-400 shadow-orange-400/50"
  }
];