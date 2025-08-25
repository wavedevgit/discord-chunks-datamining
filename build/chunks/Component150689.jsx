/** Chunk was on 52721 **/
/** chunk id: 150689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk130341 = require("./130341.js"),
  Chunk34112 = require("./34112.jsx"),
  Chunk623691 = require("./623691.jsx"),
  Chunk494831 = require("./494831.js");

function c(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u
  } = e, [m, g] = i.useState(""), [p, h] = i.useState(o.Cl), f = m.trim(), b = i.useMemo(() => d.filter(e => (0, l.uo)(e, f)), [d, f]), x = i.useCallback(() => (0, r.jsx)(s.Z, {
    guild: n,
    everyoneRole: c,
    filteredRoles: b,
    setEditRoleId: t,
    query: m,
    setQuery: g,
    setHeaderHeight: h
  }, "header"), [n, c, b, t, m]);
  return (0, r.jsx)(a.Z, {
    setEditRoleId: t,
    guild: n,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u,
    renderHeader: x,
    headerHeight: p,
    query: m
  })
}