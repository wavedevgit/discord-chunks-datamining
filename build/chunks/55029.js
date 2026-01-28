/** Chunk was on 5606 **/
/** chunk id: 55029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk628965 = require("./628965.js"),
  Chunk152056 = require("./152056.js"),
  Chunk360619 = require("./360619.js");

function a(e, t) {
  let n = (0, s.AC)(t),
    a = l.A.useField("query"),
    o = (0, r.bG)([i.A], () => i.A.getSubsection()),
    c = e.filter(e => null == e.predicate || e.predicate());
  if (null != n && n.size > 0) {
    let e = c.filter(e => n.has(e.setting));
    c = e.length > 0 ? e : c
  }
  if (null != a && a.length > 0 && null == o) {
    let e = c.find(e => e.title.toLowerCase() === a.toLowerCase());
    if (null != e) return {
      viewableTabs: c,
      filteredTab: e
    }
  }
  let d = c.find(e => null != e && e.setting === o);
  return {
    viewableTabs: c,
    filteredTab: d
  }
}