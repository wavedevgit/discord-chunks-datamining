/** Chunk was on web.js **/
/** chunk id: 547750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk684758 = require("./684758.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let a = RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Chunk684758.km})(?=\\W|$)`, "i"),
  s = RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Chunk684758.km})(?=\\W|$)`, "i"),
  l = RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${Chunk684758.U0})(?=\\W|$)`, "i");
class c extends Chunk727916.Z {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern(e) {
    return this.strictMode ? l : e.option.forwardDate ? a : s
  }
  innerExtract(e, t) {
    if (t[0].match(/^for\s*the\s*\w+/)) return null;
    let n = (0, r.RA)(t[1]);
    return n ? i.L.createRelativeFromReference(e.reference, n) : null
  }
}