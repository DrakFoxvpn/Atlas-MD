/* ---------------------------------------------------------------------------------/
/                                                                                   /
/             d8888 888    888                        888b     d888 8888888b.       /
/            d88888 888    888                        8888b   d8888 888  "Y88b      /
/           d88P888 888    888                        88888b.d88888 888    888      /
/          d88P 888 888888 888  8888b.  .d8888b       888Y88888P888 888    888      /
/         d88P  888 888    888     "88b 88K           888 Y888P 888 888    888      /
/        d88P   888 888    888 .d888888 "Y8888b.      888  Y8P  888 888    888      /
/       d8888888888 Y88b.  888 888  888      X88      888   "   888 888  .d88P      /
/      d88P     888  "Y888 888 "Y888888  88888P'      888       888 8888888P"       /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author and Main Developer: FantoX                                                 /
/ Github: https://github.com/FantoX001/Atlas-MD                                     /
/ Powered By: Team ATLAS                                                            /
/-----------------------------------------------------------------------------------/
/             Meet Team ATLAS who holds all rights to this repository:              /
/                                                                                   /
/ 1. Pratyush - https://github.com/pratyush4932                                     /
/ 2. Ahmii - https://github.com/Ahmii-kun                                           /               
/ 3. Kai - https://github.com/Kai0071                                               /                    
/ 4. Devime - https://github.com/Devime69                                           /
/ 5. Jay JayOps - https://github.com/jayjay-ops                                     /
/                                                                                   /
/ ----------------------------------------------------------------------------------/
/                                                                                   /
/      With all of our hard work and defication you can enjoy this awesome bot!     /  
/                                                                                   / 
/----------------------------------------------------------------------------------*/


require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "94715168503";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://fantox:xrto71r@cluster0.dnlowts.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `FoxAlpha-MD`;
global.author = process.env.AUTHOR || "by: Team FoxVpn";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "වැඩය ඉවරයි...",
  useradmin: "සමාවන්න, මෙම විධානය භාවිතා කළ හැක්කේ *සමූහ පරිපාලකයින්ට* පමණි *😏*!",
  botadmin:
    "සමාවන්න, මට මෙම කණ්ඩායමේ *පරිපාලක*වරයෙකු නොවී මෙම විධානය ක්‍රියාත්මක කළ නොහැක.",
  botowner: "මෙම විධානය භාවිතා කළ හැක්කේ මගේ *හිමිකරුට පමණි, 🤗!",
  grouponly: "මෙම විධානය සාදා ඇත්තේ *කණ්ඩායම්* සඳහා පමණි, !",
  privateonly: "මෙම විධානය සාදා ඇත්තේ සඳහා *Private Chat*,පමණි!",
  botonly: "මෙම විධානය භාවිතා කළ හැක්කේ *Bot ම* පමණි!",
  waiting: "මිනිත්තුවක් ඉන්න. . .🙄",
  nolink: "කරුණාකර මට *සබැඳිය* ලබාදෙන්න,",
  error: "දෝෂයක් සිදු විය!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "මෙම කණ්ඩායම විධාන භාවිතා කිරීම තහනම් කර ඇත!",
  nonsfw: "විකෘති බකා වෙන්න එපා! මෙය NSFW සබල කළ කණ්ඩායමක් නොවේ!",
};

