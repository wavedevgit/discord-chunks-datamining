/** Chunk was on web.js **/
/** chunk id: 183806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk360345 = require("./360345.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
let s = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${Chunk360345.Pl})(?=\\W|$)`, "i"),
  l = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${Chunk360345.d2})(?=\\W|$)`, "i");
class c extends Chunk355418.c {
  allowAbbreviations;
  constructor(e = true) {
    super(), this.allowAbbreviations = e
  }
  innerPattern() {
    return this.allowAbbreviations ? s : l
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.E9)(t[2]);
    if (!a) return null;
    switch (n) {
      case "last":
      case "past":
      case "-":
        a = (0, o.x4)(a)
    }
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}