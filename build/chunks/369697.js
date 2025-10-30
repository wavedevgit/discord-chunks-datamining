/** Chunk was on web.js **/
/** chunk id: 369697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk19467 = require("./19467.js"),
  Chunk86465 = require("./86465.js"),
  Chunk684758 = require("./684758.js"),
  Chunk89199 = require("./89199.js");

function s(e) {
  return null != e.text.match(/^[+-]/i)
}

function l(e) {
  return null != e.text.match(/^-/i)
}
class c extends Chunk19467.V {
  shouldMergeResults(e, t, n) {
    return !!e.match(/^\s*$/i) && (s(n) || l(n))
  }
  mergeResults(e, t, n, r) {
    let s = (0, a.RA)(n.text);
    l(n) && (s = (0, o.de)(s));
    let c = i.L.createRelativeFromReference(i.X2.fromDate(t.start.date()), s);
    return new i.G5(t.reference, t.index, `${t.text}${e}${n.text}`, c)
  }
}