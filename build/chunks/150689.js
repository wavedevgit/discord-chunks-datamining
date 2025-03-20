/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
}), n(47120), n(566702);
var r = n(200651),
  i = n(192379),
  s = n(130341),
  a = n(34112),
  l = n(623691),
  o = n(494831);

function A(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: A,
    otherRoles: c,
    setSelectedSection: d
  } = e, [u, g] = i.useState(""), [f, m] = i.useState(o.Cl), p = u.trim(), h = i.useMemo(() => c.filter(e => (0, s.uo)(e, p)), [c, p]), C = i.useCallback(() => (0, r.jsx)(l.Z, {
    guild: n,
    everyoneRole: A,
    filteredRoles: h,
    setEditRoleId: t,
    query: u,
    setQuery: g,
    setHeaderHeight: m
  }, "header"), [n, A, h, t, u]);
  return (0, r.jsx)(a.Z, {
    setEditRoleId: t,
    guild: n,
    everyoneRole: A,
    otherRoles: c,
    setSelectedSection: d,
    renderHeader: C,
    headerHeight: f,
    query: u
  })
}