/** Chunk was on 75708 **/
/** chunk id: 528084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk663389 = require("./663389.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js");

function l(e, t) {
  let n = (0, a.Gj)(t),
    l = (0, s.Z7)(),
    o = (0, i.e7)([r.Z], () => r.Z.getSubsection()),
    c = e.filter(e => null == e.predicate || e.predicate());
  if (null != n && n.size > 0) {
    let e = c.filter(e => n.has(e.setting));
    c = e.length > 0 ? e : c
  }
  if (null != l && l.length > 0 && null == o) {
    let e = c.find(e => e.title.toLowerCase() === l.toLowerCase());
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