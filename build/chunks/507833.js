/** Chunk was on web.js **/
/** chunk id: 507833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk530560 = require("./530560.js"),
  Chunk374372 = require("./374372.js"),
  Chunk360345 = require("./360345.js"),
  Chunk632434 = require("./632434.js");

function o(e) {
  return null != e.text.match(/^[+-]/i)
}

function l(e) {
  return null != e.text.match(/^-/i)
}
class c extends Chunk530560.X {
  shouldMergeResults(e, t, n) {
    return !!e.match(/^\s*$/i) && (o(n) || l(n))
  }
  mergeResults(e, t, n, r) {
    let o = (0, a.E9)(n.text);
    l(n) && (o = (0, s.x4)(o));
    let c = i.BP.createRelativeFromReference(i.b5.fromDate(t.start.date()), o);
    return new i.s4(t.reference, t.index, `${t.text}${e}${n.text}`, c)
  }
}