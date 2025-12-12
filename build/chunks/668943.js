/** Chunk was on web.js **/
/** chunk id: 668943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk727916 = require("./727916.js"),
  Chunk715870 = require("./715870.js");
class o extends Chunk727916.Z {
  innerPattern(e) {
    return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[0].toLowerCase(),
      r = e.createParsingComponents();
    switch (n) {
      case "agora":
        return i.zO(e.reference);
      case "hoje":
        return i.Lg(e.reference);
      case "amanha":
      case "amanh\xe3":
        return i.Ro(e.reference);
      case "ontem":
        return i.Cv(e.reference)
    }
    return r
  }
}