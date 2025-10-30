/** Chunk was on web.js **/
/** chunk id: 857376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk53851 = require("./53851.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let o = RegExp(`(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${Chunk53851.km})(?=\\W|$)`, "i"),
  s = RegExp(`(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${Chunk53851.km})(?=\\W|$)`, "i");
class l extends Chunk727916.Z {
  innerPattern(e) {
    return e.option.forwardDate ? s : o
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]);
    return i.L.createRelativeFromReference(e.reference, n)
  }
}