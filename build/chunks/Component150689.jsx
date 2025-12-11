/** Chunk was on 9536 **/
/** chunk id: 150689, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, [g, f] = i.useState(""), [m, b] = i.useState(o.Cl), p = g.trim(), h = i.useMemo(() => d.filter(e => (0, l.uo)(e, p)), [d, p]), x = i.useCallback(() => (0, r.jsx)(s.Z, {
    guild: n,
    everyoneRole: c,
    filteredRoles: h,
    setEditRoleId: t,
    query: g,
    setQuery: f,
    setHeaderHeight: b
  }, "header"), [n, c, h, t, g]);
  return (0, r.jsx)(a.Z, {
    setEditRoleId: t,
    guild: n,
    everyoneRole: c,
    otherRoles: d,
    setSelectedSection: u,
    renderHeader: x,
    headerHeight: m,
    query: g
  })
}