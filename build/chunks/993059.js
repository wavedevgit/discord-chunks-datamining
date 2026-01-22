/** Chunk was on web.js **/
/** chunk id: 993059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk998493 = require("./998493.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk476858 = require("./476858.js"),
  Chunk632434 = require("./632434.js");
class l extends Chunk355418.c {
  constructor() {
    super()
  }
  innerPattern() {
    return RegExp(`(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${r.nj})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0,s.uJ)(r.EB)})`, "i")
  }
  innerExtract(e, t) {
    let n = t[2] ? (0, r.zp)(t[2]) : 1,
      a = r.EB[t[4].toLowerCase()],
      s = {};
    s[a] = n;
    let l = t[1] || t[3] || "";
    if (l = l.toLowerCase()) return (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (s = (0, o.x4)(s)), i.BP.createRelativeFromReference(e.reference, s)
  }
}