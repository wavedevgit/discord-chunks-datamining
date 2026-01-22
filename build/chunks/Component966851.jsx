/** Chunk was on 47841 **/
/** chunk id: 966851, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk856644 = require("./856644.js"),
  Chunk69090 = require("./69090.jsx"),
  Chunk175284 = require("./175284.jsx"),
  Chunk512031 = require("./512031.js");

function o(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: o,
    otherRoles: d,
    setSelectedSection: u
  } = e, [f, g] = i.useState(""), [b, m] = i.useState(c.p4), p = f.trim(), x = i.useMemo(() => d.filter(e => (0, l.Vh)(e, p)), [d, p]), h = i.useCallback(() => (0, r.jsx)(a.A, {
    guild: n,
    everyoneRole: o,
    filteredRoles: x,
    setEditRoleId: t,
    query: f,
    setQuery: g,
    setHeaderHeight: m
  }, "header"), [n, o, x, t, f]);
  return (0, r.jsx)(s.A, {
    setEditRoleId: t,
    guild: n,
    everyoneRole: o,
    otherRoles: d,
    setSelectedSection: u,
    renderHeader: h,
    headerHeight: b,
    query: f
  })
}