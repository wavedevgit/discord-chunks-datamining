/** Chunk was on web.js **/
/** chunk id: 149684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk355418 = require("./355418.js"),
  Chunk996483 = require("./996483.js");
class a extends Chunk355418.c {
  innerPattern(e) {
    return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[0].toLowerCase(),
      r = e.createParsingComponents();
    switch (n) {
      case "agora":
        return i.tB(e.reference);
      case "hoje":
        return i.Ec(e.reference);
      case "amanha":
      case "amanh\xe3":
        return i.uf(e.reference);
      case "ontem":
        return i.jI(e.reference)
    }
    return r
  }
}