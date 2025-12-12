/** Chunk was on web.js **/
/** chunk id: 283468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk19467 = require("./19467.js"),
  Chunk86465 = require("./86465.js"),
  Chunk53851 = require("./53851.js"),
  Chunk89199 = require("./89199.js");

function s(e) {
  return null != e.text.match(/\s+(prima|dal)$/i)
}

function l(e) {
  return null != e.text.match(/\s+(dopo|dal|fino)$/i)
}
class c extends Chunk19467.V {
  patternBetween() {
    return /^\s*$/i
  }
  shouldMergeResults(e, t, n) {
    return !!e.match(this.patternBetween()) && (!!s(t) || !!l(t)) && !!n.start.get("day") && !!n.start.get("month") && !!n.start.get("year")
  }
  mergeResults(e, t, n) {
    let r = (0, a.RA)(t.text);
    s(t) && (r = (0, o.de)(r));
    let l = i.L.createRelativeFromReference(i.X2.fromDate(n.start.date()), r);
    return new i.G5(n.reference, t.index, `${t.text}${e}${n.text}`, l)
  }
}