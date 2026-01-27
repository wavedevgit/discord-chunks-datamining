/** Chunk was on web.js **/
/** chunk id: 792976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk360345 = require("./360345.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let o = RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Chunk360345.Pl})(?=\\W|$)`, "i"),
  s = RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Chunk360345.Pl})(?=\\W|$)`, "i"),
  l = RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Chunk360345.d2})(?=\\W|$)`, "i");
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern(e) {
    return this.strictMode ? l : e.option.forwardDate ? o : s
  }
  innerExtract(e, t) {
    if (t[0].match(/^for\s*the\s*\w+/)) return null;
    let n = (0, r.E9)(t[1]);
    return n ? i.BP.createRelativeFromReference(e.reference, n) : null
  }
}