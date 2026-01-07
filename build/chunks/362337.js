/** Chunk was on web.js **/
/** chunk id: 362337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk894209 = require("./894209.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk800911 = require("./800911.js"),
  Chunk89199 = require("./89199.js");
class l extends Chunk727916.Z {
  constructor() {
    super()
  }
  innerPattern() {
    return RegExp(`(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${r.zC})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0,o.q3)(r.pS)})`, "i")
  }
  innerExtract(e, t) {
    let n = t[2] ? (0, r.IX)(t[2]) : 1,
      a = r.pS[t[4].toLowerCase()],
      o = {};
    o[a] = n;
    let l = t[1] || t[3] || "";
    if (l = l.toLowerCase()) return (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (o = (0, s.de)(o)), i.L.createRelativeFromReference(e.reference, o)
  }
}