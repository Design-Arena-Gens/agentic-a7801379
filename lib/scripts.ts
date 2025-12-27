import { type LanguageCode } from "./state-language-map";

type ScriptSegments = {
  greeting: string;
  confirmation: string;
  delivery: string;
  followUp: string;
  closing: string;
};

export type LanguageScript = {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  segments: ScriptSegments;
};

export const languageScripts: LanguageScript[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    segments: {
      greeting: "Hello {customerName}, this is Babli calling from Odar Support.",
      confirmation: "I'm confirming your order {orderId} which is prepped and ready.",
      delivery: "We plan to deliver it by {deliveryDate}.",
      followUp: "Can you please confirm this schedule works for you?",
      closing: "If you need any changes, just let me know now. Thank you!"
    }
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    segments: {
      greeting: "नमस्ते {customerName} जी, मैं बाबली ओडर सपोर्ट से बोल रही हूँ।",
      confirmation: "मैं आपका ऑर्डर {orderId} कन्फर्म कर रही हूँ जो तैयार है।",
      delivery: "यह {deliveryDate} तक पहुँचाने की योजना है।",
      followUp: "कृपया बताइए क्या यह समय आपके लिए ठीक है?",
      closing: "अगर किसी बदलाव की ज़रूरत हो तो अभी बता दें, धन्यवाद!"
    }
  },
  {
    code: "bn",
    label: "Bengali",
    nativeLabel: "বাংলা",
    segments: {
      greeting: "নমস্কার {customerName}, আমি বাবলি, Odar সাপোর্ট থেকে বলছি।",
      confirmation: "আপনার অর্ডার {orderId} এখন প্রস্তুত, সেটাই নিশ্চিত করছি।",
      delivery: "আমরা {deliveryDate} এর মধ্যে ডেলিভারি করতে চাই।",
      followUp: "এই সময় আপনার জন্য সুবিধাজনক কি না নিশ্চিত করবেন?",
      closing: "কোন পরিবর্তন দরকার হলে এখন জানান, ধন্যবাদ!"
    }
  },
  {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
    segments: {
      greeting: "வணக்கம் {customerName} அவர்களே, நான் ஓடார் ஆதரவிலிருந்து பாப்லி பேசுகிறேன்.",
      confirmation: "உங்கள் {orderId} ஆர்டர் தயாராக உள்ளது என்பதை உறுதிப்படுத்துகிறேன்.",
      delivery: "{deliveryDate}க்குள் வழங்க திட்டமிட்டுள்ளோம்.",
      followUp: "இந்த நேரம் உங்களுக்கு சாலப் பயன்படுமா என்று சொல்ல முடியுமா?",
      closing: "ஏதேனும் மாற்றம் வேண்டும் என்றால் உடனே கூறுங்கள், நன்றி!"
    }
  },
  {
    code: "te",
    label: "Telugu",
    nativeLabel: "తెలుగు",
    segments: {
      greeting: "నమస్కారం {customerName} గారు, నేను ఓడార్ సపోర్ట్ నుండి బబ్లీ మాట్లాడుతున్నాను.",
      confirmation: "మీ ఆర్డర్ {orderId} సిద్ధంగా ఉందని ధృవీకరిస్తున్నాను.",
      delivery: "దాన్ని {deliveryDate} లోపు డెలివరీ చేయాలని ప్లాన్ చేస్తున్నాము.",
      followUp: "ఈ సమయం మీకు సరిపోతుందా అని చెప్పగలరా?",
      closing: "ఏమైనా మార్పులు అవసరమైతే ఇప్పుడే తెలియజేయండి, ధన్యవాదాలు!"
    }
  },
  {
    code: "mr",
    label: "Marathi",
    nativeLabel: "मराठी",
    segments: {
      greeting: "नमस्कार {customerName} जी, मी ओडर सपोर्ट मधून बबली बोलतेय.",
      confirmation: "आपला ऑर्डर {orderId} तयार असल्याची पुष्टी करत आहे.",
      delivery: "हा {deliveryDate} पर्यंत पोहोचवण्याचा आमचा प्लॅन आहे.",
      followUp: "हा वेळ आपल्याला चालेल का कृपया सांगा.",
      closing: "कोणतेही बदल हवे असल्यास आत्ताच कळवा, धन्यवाद!"
    }
  },
  {
    code: "gu",
    label: "Gujarati",
    nativeLabel: "ગુજરાતી",
    segments: {
      greeting: "નમસ્તે {customerName}જી, હું બબલી ઓડર સપોર્ટમાંથી બોલી રહી છું.",
      confirmation: "તમારો ઓર્ડર {orderId} તૈયાર છે તે હું કન્ફર્મ કરી રહી છું.",
      delivery: "આ {deliveryDate} સુધી પહોંચાડવાનો પ્લાન છે.",
      followUp: "આ સમય તમારી માટે અનુકૂળ છે કે નહીં જણાવશો?",
      closing: "કોઈ બદલાવ જોઈએ હોય તો અત્યારે જ કહો, ધન્યવાદ!"
    }
  },
  {
    code: "kn",
    label: "Kannada",
    nativeLabel: "ಕನ್ನಡ",
    segments: {
      greeting: "ನಮಸ್ಕಾರ {customerName} ಅವರೆ, ನಾನು ಓಡರ್ ಸಹಾಯದಿಂದ ಬಬ್ಲಿ ಮಾತಾಡುತ್ತಿದ್ದೇನೆ.",
      confirmation: "ನಿಮ್ಮ {orderId} ಆರ್ಡರ್ ಸಿದ್ಧವಾಗಿದೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತಿದ್ದೇನೆ.",
      delivery: "ಇದನ್ನು {deliveryDate} ರೊಳಗೆ ತಲುಪಿಸಲು ಯೋಜಿಸಿದ್ದೇವೆ.",
      followUp: "ಈ ಸಮಯ ನಿಮಗೆ ಸರಿಹೊಂದುತ್ತದೆಯೇ ಎಂದು ತಿಳಿಸಬಹುದು?",
      closing: "ಯಾವುದೇ ಬದಲಾವಣೆ ಬೇಕಾದರೆ ಈಗಲೇ ಹೇಳಿ, ಧನ್ಯವಾದಗಳು!"
    }
  },
  {
    code: "ml",
    label: "Malayalam",
    nativeLabel: "മലയാളം",
    segments: {
      greeting: "നമസ്കാരം {customerName} ജി, ഞാൻ ഓഡർ സപ്പോർട്ടിൽ നിന്നുള്ള ബബ്ലിയാണ്.",
      confirmation: "താങ്കളുടെ {orderId} ഓർഡർ തയ്യാറാണെന്ന് ഞാൻ സ്ഥിരീകരിക്കുന്നു.",
      delivery: "{deliveryDate}ക്ക് മുൻപ് ഇത് നൽകാനാണ് ഞങ്ങൾ പദ്ധതിയിടുന്നത്.",
      followUp: "ഈ സമയം താങ്കൾക്ക് അനുയോജ്യമാണോ എന്ന് അറിയിക്കുമോ?",
      closing: "മാറ്റങ്ങൾ ആവശ്യമുണ്ടെങ്കിൽ ഇപ്പോൾ തന്നെ പറയുക, നന്ദി!"
    }
  },
  {
    code: "or",
    label: "Odia",
    nativeLabel: "ଓଡ଼ିଆ",
    segments: {
      greeting: "ନମସ୍କାର {customerName} ଜୀ, ମୁଁ ବାବ୍ଲି, ଓଡର ସପୋର୍ଟରୁ କହୁଛି।",
      confirmation: "ଆପଣଙ୍କର ଅର୍ଡର {orderId} ପ୍ରସ୍ତୁତ ଅଛି ବୋଲି ନିଶ୍ଚିତ କରୁଛି।",
      delivery: "ଆମେ ଏହାକୁ {deliveryDate} ମଧ୍ୟରେ ପହଞ୍ଚାଇବାକୁ ପ୍ରସ୍ତୁତ।",
      followUp: "ଏହି ସମୟ ଆପଣଙ୍କ ପାଇଁ ଠିକ୍ କି ନହିଁ କୃପାୟା କହିବେ?",
      closing: "କୌଣସି ପରିବର୍ତ୍ତନ ଦରକାର ଥିଲେ ଏବେ କୁହନ୍ତୁ, ଧନ୍ୟବାଦ!"
    }
  },
  {
    code: "pa",
    label: "Punjabi",
    nativeLabel: "ਪੰਜਾਬੀ",
    segments: {
      greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ {customerName} ਜੀ, ਮੈਂ ਬਬਲੀ ਓਡਰ ਸਹਾਇਤਾ ਤੋਂ ਗੱਲ ਕਰ ਰਹੀ ਹਾਂ।",
      confirmation: "ਤੁਹਾਡਾ ਆਰਡਰ {orderId} ਤਿਆਰ ਹੈ, ਇਹੀ ਪੁਸ਼ਟੀ ਕਰ ਰਹੀ ਹਾਂ।",
      delivery: "ਅਸੀਂ ਇਸ ਨੂੰ {deliveryDate} ਤੱਕ ਪਹੁੰਚਾਉਣ ਦੀ ਯੋਜਨਾ ਵਿੱਚ ਹਾਂ।",
      followUp: "ਕਿਰਪਾ ਕਰਕੇ ਦੱਸੋ ਕੀ ਇਹ ਸਮਾਂ ਤੁਹਾਡੇ ਲਈ ਠੀਕ ਹੈ?",
      closing: "ਕੋਈ ਵੀ ਤਬਦੀਲੀ ਚਾਹੀਦੀ ਹੋਵੇ ਤਾਂ ਹੁਣੇ ਦੱਸੋ, ਧੰਨਵਾਦ!"
    }
  },
  {
    code: "as",
    label: "Assamese",
    nativeLabel: "অসমীয়া",
    segments: {
      greeting: "নমস্কাৰ {customerName} দা, মই বাবলি, Odar সহায়তাৰে ফোন কৰিছোঁ।",
      confirmation: "আপোনাৰ অ’ৰ্ডাৰ {orderId} প্রস্তুত আছে বুলি নিশ্চিত কৰিছোঁ।",
      delivery: "আমাৰ লক্ষ্য {deliveryDate} ৰ ভিতৰত ডেলিভাৰী কৰা।",
      followUp: "এই সময়খিনি আপোনাৰ বাবে সুবিধাজনক নে জানিব দিয়া?",
      closing: "কোনো পৰিবর্তনৰ প্ৰয়োজন হলে এতিয়াই জনাব, ধন্যবাদ!"
    }
  },
  {
    code: "ur",
    label: "Urdu",
    nativeLabel: "اردو",
    segments: {
      greeting: "السلام علیکم {customerName} صاحب/صاحبہ، میں بابلی اوڈر سپورٹ سے بات کر رہی ہوں۔",
      confirmation: "آپ کا آرڈر {orderId} تیار ہے، یہی تصدیق کر رہی ہوں۔",
      delivery: "ہم اسے {deliveryDate} تک پہنچانے کا ارادہ رکھتے ہیں۔",
      followUp: "براہ کرم بتائیں کیا یہ وقت آپ کے لیے موزوں ہے؟",
      closing: "اگر کسی تبدیلی کی ضرورت ہو تو ابھی بتا دیں، شکریہ!"
    }
  },
  {
    code: "kok",
    label: "Konkani",
    nativeLabel: "कोंकणी",
    segments: {
      greeting: "नमस्कार {customerName} महाशय, हांव बाबली ओडर सपोर्टातून उलता।",
      confirmation: "तुमचो ऑर्डर {orderId} तयार आसा हाचे मी खात्री करता।",
      delivery: "आमचा विचार ताका {deliveryDate} परसांत दिता।",
      followUp: "ह्यो वेळ तुमकां सोयीचो आसा का?",
      closing: "कसलो बदल जाय ते सांगात, देव बरे करूंक!"
    }
  },
  {
    code: "mai",
    label: "Maithili",
    nativeLabel: "मैथिली",
    segments: {
      greeting: "नमस्कार {customerName} जी, हम बाबली ओडर सपोर्ट सऽ बोलि रहल छी।",
      confirmation: "अहाँक ऑर्डर {orderId} तैयार छै, ताहि के पुष्टि करैत छी।",
      delivery: "हमरा योजना छै जे {deliveryDate} तक पहुँचा देब।",
      followUp: "कृपया जनाबू जे ई समय अहाँ लेल ठीक छै कि नाही?",
      closing: "कोनो बदलाव चाही तऽ एखनिये बाजू, धन्यवाद!"
    }
  },
  {
    code: "ne",
    label: "Nepali",
    nativeLabel: "नेपाली",
    segments: {
      greeting: "नमस्ते {customerName} जी, म ओडर सपोर्टबाट बाबली बोल्दैछु।",
      confirmation: "तपाईंको अर्डर {orderId} तयार भएको पुष्टि गर्दैछु।",
      delivery: "हामी {deliveryDate} सम्ममा डेलिभरी गर्ने योजनामा छौं।",
      followUp: "यो समय तपाईंका लागि मिल्छ कि भनी जानकारी दिनुहुन्छ?",
      closing: "कुनै परिवर्तन आवश्यक भए अहिले बताइदिनुहोस्, धन्यवाद!"
    }
  },
  {
    code: "br",
    label: "Bodo",
    nativeLabel: "बर'",
    segments: {
      greeting: "खोंदै {customerName}, आं बाब्ली ओडार सपर्ट निफ्राय फोन करां।",
      confirmation: "निफ्राय आं नोंथांनि अरडार {orderId} सुलुंबा जानांगौ।",
      delivery: "जों {deliveryDate}नि सिगांगाव डेलिभारि खालामनो जाथां।",
      followUp: "बे समनि नोंथांनि जोंगायनो नामा?",
      closing: "जदि थांनानो जाबोन खोबथां, दोंजानो। धन्यवाद!"
    }
  },
  {
    code: "sd",
    label: "Sindhi",
    nativeLabel: "سنڌي",
    segments: {
      greeting: "السلام عليڪم {customerName} صاحب، مان بابلي اوڊر سپورٽ مان ڳالهيان پيو ڪريان.",
      confirmation: "توهان جو اوڊر {orderId} تيار آهي، اهو پڪ ڪري رهيو آھيان.",
      delivery: "اسان جو ارادو آھي تہ {deliveryDate} تائين موڪلي ڇڏيو.",
      followUp: "مھرباني ڪري ٻڌايو ڇا اھو وقت توھان لاءِ ٺيڪ آھي؟",
      closing: "جيڪڏھن ڪا تبديلي گهربل آهي ته هينئر ٻڌايو، مهرباني!"
    }
  },
  {
    code: "ks",
    label: "Kashmiri",
    nativeLabel: "کٲشُر",
    segments: {
      greeting: "آداب {customerName} صاحب، بَبلی ہَندۍ اوڈر سپورٹ پَتن گَو میون فون۔",
      confirmation: "تہند آڈر {orderId} تیار چھ، یہہ تصدیق کران۔",
      delivery: "اسی ہیکہ {deliveryDate} منز حوالہ کرن منصوبہ چُھ۔",
      followUp: "مہربانی کرِتھ خبر دِنکئ کہ یتھ وقت تہندِس خٲطر مناسِب چھہ؟",
      closing: "اگر کینہ بدلاون ضرورت آسِہ تاہ کرپے گۄو، شکریہ!"
    }
  },
  {
    code: "sa",
    label: "Sanskrit",
    nativeLabel: "संस्कृतम्",
    segments: {
      greeting: "नमस्कारः {customerName} महोदय, अहं बाब्ली ओडर-सहाय्यात् वक्तुम् अस्मि।",
      confirmation: "भवतः आदेशः {orderId} सिद्धः इति निश्चितं करोमि।",
      delivery: "एषः आदेशः {deliveryDate} पर्यन्तं प्रेषयितुं योजनामः।",
      followUp: "किं एषः कालः भवतः अनुकूलः इति सूचयतु।",
      closing: "यदि परिवर्तनम् आवश्यकं स्यात् तर्हि अधुना वदतु, धन्यवादः!"
    }
  },
  {
    code: "mni",
    label: "Manipuri",
    nativeLabel: "মেইতেই লোন",
    segments: {
      greeting: "খরাꯃꯥ {customerName}দা, এবলিং বাব্লি Odar সাপোর্টদগী ফোং তৌরি।",
      confirmation: "অদোমগী অর্ডার {orderId} লৈরেম্বা কিংবগী খরাꯅী ফিক তৌরি।",
      delivery: "অমদি {deliveryDate} মখাꯀ অদুংসুংনা ডেলিভারি তৌগনি ಹায়।",
      followUp: "মসিগী তাং তাদ্রবদি অদোমগী লৈবশিংদা ফিতবাইদনা?",
      closing: "মখাকো ভিত্তবা লোইরেবদি হৌজিক ফঙদে য়ামনু, থাগাছারি!"
    }
  },
  {
    code: "sat",
    label: "Santali",
    nativeLabel: "ᱥᱟᱱᱛᱟᱲᱤ",
    segments: {
      greeting: "ᱵᱟᱝᱫᱟ {customerName}, ᱟᱢ ᱵᱟᱵᱞᱤ Odar ᱥᱚᱯᱚᱨᱴ ᱠᱟᱱᱟᱣᱟᱢ।",
      confirmation: "ᱟᱢ ᱟᱢᱟᱜ ᱚᱴᱰᱚᱨ {orderId} ᱨᱟᱠᱷᱟ ᱠᱚᱱ ᱢᱮ ᱪᱟᱹᱞᱤᱭᱟᱜᱼᱟ।",
      delivery: "ᱟᱢ ᱟᱫᱮᱨ ᱠᱚ {deliveryDate} ᱛᱮᱞᱮ ᱛᱟᱢ ᱡᱚᱲᱟᱠᱟᱢ।",
      followUp: "ᱢᱮ ᱛᱮᱭᱟᱨ ᱵᱟᱝ ᱟᱢᱟᱜ ᱪᱷᱚᱭᱟ ᱾",
      closing: "ᱪᱷᱚᱭᱟ ᱮᱢ ᱵᱟᱝ ᱥᱤᱛᱟᱹᱨ ᱾ ᱦᱟᱹᱰᱤᱜᱟ ᱢᱮ!"
    }
  }
];

const fallback = languageScripts[0];

export type ScriptInput = {
  customerName: string;
  orderId: string;
  deliveryDate: string;
  notes?: string;
  tone: "friendly" | "formal" | "concise";
};

function formatNotes(notes?: string) {
  if (!notes) return "";
  return `\n\nAdditional note: ${notes.trim()}`;
}

function adjustEnglishSegments(segments: string[], tone: ScriptInput["tone"]): string[] {
  if (tone === "formal") {
    return segments.map((segment, index) => {
      if (index === 0) {
        return segment.replace("Hello", "Good day");
      }
      if (segment.includes("If you need any changes")) {
        return "If you require any adjustments, please let me know right away. Thank you kindly.";
      }
      return segment;
    });
  }

  if (tone === "concise") {
    return segments.map((segment, index) => {
      if (index === 0) {
        return segment.replace("Hello", "Hi");
      }
      if (segment.includes("Can you please confirm")) {
        return "Please confirm the timing works.";
      }
      if (segment.includes("If you need any changes")) {
        return "Let me know about any changes.";
      }
      return segment;
    });
  }

  return segments;
}

function replacePlaceholders(segment: string, input: ScriptInput): string {
  return segment
    .replaceAll("{customerName}", input.customerName)
    .replaceAll("{orderId}", input.orderId)
    .replaceAll("{deliveryDate}", input.deliveryDate);
}

export function getLanguageScript(code: LanguageCode): LanguageScript {
  return languageScripts.find((lang) => lang.code === code) ?? fallback;
}

export function generateScript(code: LanguageCode, input: ScriptInput) {
  const selected = getLanguageScript(code);
  const segments = Object.values(selected.segments).map((segment) =>
    replacePlaceholders(segment, input)
  );
  const tonedSegments =
    selected.code === "en" ? adjustEnglishSegments(segments, input.tone) : segments;
  const body = tonedSegments.join("\n");
  return `${body}${formatNotes(input.notes)}`.trim();
}
