/** Chunk was on web.js **/
/** chunk id: 107125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk530560 = require("./530560.js"),
  Chunk374372 = require("./374372.js"),
  Chunk360345 = require("./360345.js"),
  Chunk632434 = require("./632434.js");

function o(e) {
  return null != e.text.match(/\s+(before|from)$/i)
}

function l(e) {
  return null != e.text.match(/\s+(after|since)$/i)
}
class c extends Chunk530560.X {
  patternBetween() {
    return /^\s*$/i
  }
  shouldMergeResults(e, t, n) {
    return !!e.match(this.patternBetween()) && (!!o(t) || !!l(t)) && !!n.start.get("day") && !!n.start.get("month") && !!n.start.get("year")
  }
  mergeResults(e, t, n) {
    let r = (0, a.E9)(t.text);
    o(t) && (r = (0, s.x4)(r));
    let l = i.BP.createRelativeFromReference(i.b5.fromDate(n.start.date()), r);
    return new i.s4(n.reference, t.index, `${t.text}${e}${n.text}`, l)
  }
}