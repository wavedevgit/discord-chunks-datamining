/** Chunk was on web.js **/
/** chunk id: 528084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk663389 = require("./663389.js"),
  Chunk996733 = require("./996733.js"),
  Chunk991346 = require("./991346.js");

function s(e, t) {
  let n = (0, o.Gj)(t),
    s = a.Z.useField("query"),
    l = (0, r.e7)([i.Z], () => i.Z.getSubsection()),
    c = e.filter(e => null == e.predicate || e.predicate());
  if (null != n && n.size > 0) {
    let e = c.filter(e => n.has(e.setting));
    c = e.length > 0 ? e : c
  }
  if (null != s && s.length > 0 && null == l) {
    let e = c.find(e => e.title.toLowerCase() === s.toLowerCase());
    if (null != e) return {
      viewableTabs: c,
      filteredTab: e
    }
  }
  let u = c.find(e => null != e && e.setting === l);
  return {
    viewableTabs: c,
    filteredTab: u
  }
}