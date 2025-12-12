/** Chunk was on web.js **/
/** chunk id: 959809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk150816 = require("./150816.js"),
  Chunk86465 = require("./86465.js"),
  Chunk800911 = require("./800911.js"),
  Chunk522677 = require("./522677.js");
let s = 1,
  l = 2;
class c extends Chunk522677.F {
  innerPatternString(e) {
    return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0,o.q3)(r.pS)})`
  }
  innerExtract(e, t) {
    let n = t[s].toLowerCase(),
      o = t[l].toLowerCase(),
      a = r.pS[o];
    if ("на следующей" == n || "в следующем" == n) {
      let t = {};
      return t[a] = 1, i.L.createRelativeFromReference(e.reference, t)
    }
    if ("в прошлом" == n || "на прошлой" == n) {
      let t = {};
      return t[a] = false, i.L.createRelativeFromReference(e.reference, t)
    }
    let c = e.createParsingComponents(),
      u = new Date(e.reference.instant.getTime());
    return a.match(/week/i) ? (u.setDate(u.getDate() - u.getDay()), c.imply("day", u.getDate()), c.imply("month", u.getMonth() + 1), c.imply("year", u.getFullYear())) : a.match(/month/i) ? (u.setDate(1), c.imply("day", u.getDate()), c.assign("year", u.getFullYear()), c.assign("month", u.getMonth() + 1)) : a.match(/year/i) && (u.setDate(1), u.setMonth(0), c.imply("day", u.getDate()), c.imply("month", u.getMonth() + 1), c.assign("year", u.getFullYear())), c
  }
}