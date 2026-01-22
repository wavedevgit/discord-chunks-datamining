/** Chunk was on web.js **/
/** chunk id: 936401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk6678 = require("./6678.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk476858 = require("./476858.js"),
  Chunk632434 = require("./632434.js");
class l extends Chunk355418.c {
  constructor() {
    super()
  }
  innerPattern() {
    return RegExp(`(?:les?|la|l'|du|des?)\\s*(${r.nj})?(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?\\s*(${(0,s.uJ)(r.EB)})(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?`, "i")
  }
  innerExtract(e, t) {
    let n = t[1] ? (0, r.zp)(t[1]) : 1,
      a = r.EB[t[3].toLowerCase()],
      s = {};
    s[a] = n;
    let l = t[2] || t[4] || "";
    if (l = l.toLowerCase()) return (/derni[eè]re?s?/.test(l) || /pass[ée]e?s?/.test(l) || /pr[ée]c[ée]dents?/.test(l)) && (s = (0, o.x4)(s)), i.BP.createRelativeFromReference(e.reference, s)
  }
}