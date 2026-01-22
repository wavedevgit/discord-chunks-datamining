/** Chunk was on web.js **/
/** chunk id: 191824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk615339 = require("./615339.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${Chunk615339.Pl})(?=\\W|$)`, "i"),
  o = RegExp(`(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${Chunk615339.Pl})(?=\\W|$)`, "i");
class l extends Chunk355418.c {
  innerPattern(e) {
    return e.option.forwardDate ? o : s
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}