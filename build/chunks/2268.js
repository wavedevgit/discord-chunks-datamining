/** Chunk was on web.js **/
/** chunk id: 2268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk360345 = require("./360345.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk476858 = require("./476858.js");
let o = RegExp(`(this|last|past|next|after\\s*this)\\s*(${(0,Chunk476858.uJ)(Chunk360345.EB)})(?=\\s*)(?=\\W|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk355418.c {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      a = t[c].toLowerCase(),
      s = r.EB[a];
    if ("next" == n || n.startsWith("after")) {
      let t = {};
      return t[s] = 1, i.BP.createRelativeFromReference(e.reference, t)
    }
    if ("last" == n || "past" == n) {
      let t = {};
      return t[s] = false, i.BP.createRelativeFromReference(e.reference, t)
    }
    let o = e.createParsingComponents(),
      u = new Date(e.reference.instant.getTime());
    return a.match(/week/i) ? (u.setDate(u.getDate() - u.getDay()), o.imply("day", u.getDate()), o.imply("month", u.getMonth() + 1), o.imply("year", u.getFullYear())) : a.match(/month/i) ? (u.setDate(1), o.imply("day", u.getDate()), o.assign("year", u.getFullYear()), o.assign("month", u.getMonth() + 1)) : a.match(/year/i) && (u.setDate(1), u.setMonth(0), o.imply("day", u.getDate()), o.imply("month", u.getMonth() + 1), o.assign("year", u.getFullYear())), o
  }
}