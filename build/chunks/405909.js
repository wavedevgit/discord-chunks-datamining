/** Chunk was on web.js **/
/** chunk id: 405909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk894186 = require("./894186.js"),
  Chunk727916 = require("./727916.js");
class a extends Chunk727916.Z {
  innerPattern(e) {
    return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i
  }
  innerExtract(e, t) {
    let n = t[2].toLowerCase(),
      i = e.createParsingComponents();
    switch (n) {
      case "apr\xe8s-midi":
      case "aprem":
        i.imply("hour", 14), i.imply("minute", 0), i.imply("meridiem", r.GG.PM);
        break;
      case "soir":
        i.imply("hour", 18), i.imply("minute", 0), i.imply("meridiem", r.GG.PM);
        break;
      case "matin":
        i.imply("hour", 8), i.imply("minute", 0), i.imply("meridiem", r.GG.AM);
        break;
      case "a midi":
        i.imply("hour", 12), i.imply("minute", 0), i.imply("meridiem", r.GG.AM);
        break;
      case "\xe0 minuit":
        i.imply("hour", 0), i.imply("meridiem", r.GG.AM)
    }
    return i
  }
}