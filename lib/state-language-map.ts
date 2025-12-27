export type LanguageCode =
  | "en"
  | "hi"
  | "bn"
  | "ta"
  | "te"
  | "mr"
  | "gu"
  | "kn"
  | "ml"
  | "or"
  | "pa"
  | "as"
  | "ur"
  | "kok"
  | "mai"
  | "ne"
  | "br"
  | "sd"
  | "ks"
  | "sa"
  | "mni"
  | "sat";

export type StateLanguage = {
  state: string;
  languages: LanguageCode[];
};

export const stateLanguageMap: StateLanguage[] = [
  { state: "Andhra Pradesh", languages: ["te", "ur"] },
  { state: "Arunachal Pradesh", languages: ["hi", "en"] },
  { state: "Assam", languages: ["as", "bn"] },
  { state: "Bihar", languages: ["hi", "mai"] },
  { state: "Chhattisgarh", languages: ["hi"] },
  { state: "Goa", languages: ["kok", "mr"] },
  { state: "Gujarat", languages: ["gu"] },
  { state: "Haryana", languages: ["hi"] },
  { state: "Himachal Pradesh", languages: ["hi"] },
  { state: "Jharkhand", languages: ["hi", "sat"] },
  { state: "Karnataka", languages: ["kn"] },
  { state: "Kerala", languages: ["ml"] },
  { state: "Madhya Pradesh", languages: ["hi"] },
  { state: "Maharashtra", languages: ["mr"] },
  { state: "Manipur", languages: ["mni", "en"] },
  { state: "Meghalaya", languages: ["en"] },
  { state: "Mizoram", languages: ["en"] },
  { state: "Nagaland", languages: ["en"] },
  { state: "Odisha", languages: ["or"] },
  { state: "Punjab", languages: ["pa"] },
  { state: "Rajasthan", languages: ["hi"] },
  { state: "Sikkim", languages: ["ne", "en"] },
  { state: "Tamil Nadu", languages: ["ta"] },
  { state: "Telangana", languages: ["te", "ur"] },
  { state: "Tripura", languages: ["bn"] },
  { state: "Uttar Pradesh", languages: ["hi"] },
  { state: "Uttarakhand", languages: ["hi"] },
  { state: "West Bengal", languages: ["bn"] },
  { state: "Andaman and Nicobar Islands", languages: ["en", "hi"] },
  { state: "Chandigarh", languages: ["pa", "hi"] },
  { state: "Dadra and Nagar Haveli and Daman and Diu", languages: ["gu", "hi"] },
  { state: "Delhi", languages: ["hi", "en"] },
  { state: "Jammu and Kashmir", languages: ["ks", "ur", "hi"] },
  { state: "Ladakh", languages: ["sa", "hi", "en"] },
  { state: "Lakshadweep", languages: ["ml"] },
  { state: "Puducherry", languages: ["ta", "ml", "te"] }
];

export const orderedStates = stateLanguageMap
  .map((entry) => entry.state)
  .sort((a, b) => a.localeCompare(b));
