/** Chunk was on web.js **/
/** chunk id: 248188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk355418 = require("./355418.js"),
  Chunk996483 = require("./996483.js");
class a extends Chunk355418.c {
  innerPattern(e) {
    return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[0].toLowerCase(),
      r = e.createParsingComponents();
    switch (n) {
      case "nu":
        return i.tB(e.reference);
      case "vandaag":
        return i.Ec(e.reference);
      case "morgen":
      case "morgend":
        return i.uf(e.reference);
      case "gisteren":
        return i.jI(e.reference)
    }
    return r
  }
}