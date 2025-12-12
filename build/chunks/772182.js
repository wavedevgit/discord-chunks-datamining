/** Chunk was on web.js **/
/** chunk id: 772182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk765682 = require("./765682.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk800911 = require("./800911.js"),
  Chunk89199 = require("./89199.js");
class l extends Chunk727916.Z {
  constructor() {
    super()
  }
  innerPattern() {
    return RegExp(`(?:les?|la|l'|du|des?)\\s*(${Chunk765682.zC})?(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?\\s*(${(0,Chunk800911.q3)(Chunk765682.pS)})(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?`, "i")
  }
  innerExtract(e, t) {
    let n = t[1] ? (0, r.IX)(t[1]) : 1,
      a = r.pS[t[3].toLowerCase()],
      o = {};
    o[a] = n;
    let l = t[2] || t[4] || "";
    if (l = l.toLowerCase()) return (/derni[eè]re?s?/.test(l) || /pass[ée]e?s?/.test(l) || /pr[ée]c[ée]dents?/.test(l)) && (o = (0, s.de)(o)), i.L.createRelativeFromReference(e.reference, o)
  }
}