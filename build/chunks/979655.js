/** Chunk was on web.js **/
/** chunk id: 979655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk684758 = require("./684758.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${Chunk684758.km})(?=\\W|$)`, "i"),
  l = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${Chunk684758.U0})(?=\\W|$)`, "i");
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
      case "last":
      case "past":
      case "-":
        o = (0, a.de)(o)
    }
    return i.L.createRelativeFromReference(e.reference, o)
  }
}