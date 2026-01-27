/** Chunk was on web.js **/
/** chunk id: 906038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk147426 = require("./147426.js"),
  Chunk374372 = require("./374372.js"),
  Chunk476858 = require("./476858.js"),
  Chunk972409 = require("./972409.js");
let s = 1,
  l = 2;
class c extends Chunk972409.w {
  innerPatternString(e) {
    return `(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*(${(0,a.uJ)(r.EB)})(?=\\s*)`
  }
  innerExtract(e, t) {
    let n = t[s].toLowerCase(),
      a = t[l].toLowerCase(),
      o = r.EB[a];
    if ("на наступному" == n || "в наступному" == n || "у наступному" == n || "наступного" == n) {
      let t = {};
      return t[o] = 1, i.BP.createRelativeFromReference(e.reference, t)
    }
    if ("на минулому" == n || "в минулому" == n || "у минулому" == n || "минулого" == n) {
      let t = {};
      return t[o] = false, i.BP.createRelativeFromReference(e.reference, t)
    }
    let c = e.createParsingComponents(),
      u = new Date(e.reference.instant.getTime());
    return o.match(/week/i) ? (u.setDate(u.getDate() - u.getDay()), c.imply("day", u.getDate()), c.imply("month", u.getMonth() + 1), c.imply("year", u.getFullYear())) : o.match(/month/i) ? (u.setDate(1), c.imply("day", u.getDate()), c.assign("year", u.getFullYear()), c.assign("month", u.getMonth() + 1)) : o.match(/year/i) && (u.setDate(1), u.setMonth(0), c.imply("day", u.getDate()), c.imply("month", u.getMonth() + 1), c.assign("year", u.getFullYear())), c
  }
}