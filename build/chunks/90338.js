/** Chunk was on web.js **/
/** chunk id: 90338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk727916 = require("./727916.js"),
  Chunk424046 = require("./424046.js"),
  Chunk715870 = require("./715870.js");
let a = RegExp(`(nu|idag|imorgon|\xf6vermorgon|ig\xe5r|f\xf6rrg\xe5r|i\\s*f\xf6rrg\xe5r)(?:\\s*(?:p\xe5\\s*)?(morgonen?|f\xf6rmiddagen?|middagen?|eftermiddagen?|kv\xe4llen?|natten?|midnatt))?(?=\\W|$)`, "i"),
  s = 1,
  l = 2;
class c extends Chunk727916.Z {
  innerPattern(e) {
    return a
  }
  innerExtract(e, t) {
    let n = e.refDate,
      r = (t[s] || "").toLowerCase(),
      a = (t[l] || "").toLowerCase(),
      c = e.createParsingComponents();
    switch (r) {
      case "nu":
        c = o.zO(e.reference);
        break;
      case "idag":
        c = o.Lg(e.reference);
        break;
      case "imorgon":
      case "imorn":
        let u = new Date(n.getTime());
        u.setDate(u.getDate() + 1), (0, i.cz)(c, u), (0, i.hO)(c, u);
        break;
      case "ig\xe5r":
        let d = new Date(n.getTime());
        d.setDate(d.getDate() - 1), (0, i.cz)(c, d), (0, i.hO)(c, d);
        break;
      case "f\xf6rrg\xe5r":
      case "i f\xf6rrg\xe5r":
        let f = new Date(n.getTime());
        f.setDate(f.getDate() - 2), (0, i.cz)(c, f), (0, i.hO)(c, f)
    }
    switch (a) {
      case "morgon":
      case "morgonen":
        c.imply("hour", 6), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
        break;
      case "f\xf6rmiddag":
      case "f\xf6rmiddagen":
        c.imply("hour", 9), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
        break;
      case "middag":
      case "middagen":
        c.imply("hour", 12), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
        break;
      case "eftermiddag":
      case "eftermiddagen":
        c.imply("hour", 15), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
        break;
      case "kv\xe4ll":
      case "kv\xe4llen":
        c.imply("hour", 20), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
        break;
      case "natt":
      case "natten":
      case "midnatt":
        "midnatt" === a ? c.imply("hour", 0) : c.imply("hour", 2), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0)
    }
    return c
  }
}