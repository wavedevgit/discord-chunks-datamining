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

function s(e) {
  return null != e.text.match(/^[+-]/i)
}

function l(e) {
  return null != e.text.match(/^-/i)
}
class c extends Chunk530560.X {
  shouldMergeResults(e, t, n) {
    return !!e.match(/^\s*$/i) && (s(n) || l(n))
  }
  mergeResults(e, t, n, r) {
    let s = (0, a.E9)(n.text);
    l(n) && (s = (0, o.x4)(s));
    let c = i.BP.createRelativeFromReference(i.b5.fromDate(t.start.date()), s);
    return new i.s4(t.reference, t.index, `${t.text}${e}${n.text}`, c)
  }
}