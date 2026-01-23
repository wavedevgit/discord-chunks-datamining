/** Chunk was on 47841 **/
/** chunk id: 966851, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk856644 = require("./856644.js"),
  Chunk69090 = require("./69090.jsx"),
  Chunk175284 = require("./175284.jsx"),
  Chunk512031 = require("./512031.js");

function c(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u
  } = e, [g, m] = i.useState(""), [p, f] = i.useState(o.p4), b = g.trim(), h = i.useMemo(() => d.filter(e => (0, l.Vh)(e, b)), [d, b]), x = i.useCallback(() => (0, r.jsx)(a.A, {
    guild: n,
    everyoneRole: c,
    filteredRoles: h,
    setEditRoleId: t,
    query: g,
    setQuery: m,
    setHeaderHeight: f
  }, "header"), [n, c, h, t, g]);
  return (0, r.jsx)(s.A, {
    setEditRoleId: t,
    guild: n,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u,
    renderHeader: x,
    headerHeight: p,
    query: g
  })
}