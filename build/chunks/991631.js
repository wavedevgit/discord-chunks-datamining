/** Chunk was on web.js **/
/** chunk id: 991631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk781308 = require("./781308.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${Chunk781308.km})(?=\\W|$)`, "i"),
  l = RegExp(`(denna|den h\xe4r|f\xf6rra|passerade|n\xe4sta|kommande|efter|\\+|-)\\s*(${Chunk781308.U0})(?=\\W|$)`, "i");
class c extends Chunk727916.Z {
  allowAbbreviations;
  constructor(e = true) {
    super(), this.allowAbbreviations = e
  }
  innerPattern() {
    return this.allowAbbreviations ? s : l
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      o = (0, r.RA)(t[2]);
    if (!o) return null;
    switch (n) {
      case "f\xf6rra":
      case "passerade":
      case "-":
        o = (0, a.de)(o)
    }
    return i.L.createRelativeFromReference(e.reference, o)
  }
}