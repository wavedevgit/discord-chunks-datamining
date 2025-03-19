/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(345074),
  a = n(442837),
  l = n(481060),
  o = n(434404),
  c = n(999382),
  A = n(388032),
  d = n(659116);

function u(e) {
  let {
    profile: t,
    canManageGuild: n
  } = e, u = t.id, g = i.useCallback(e => {
    o.Z.updateGuild({
      description: e
    }), o.Z.updateGuildProfile(u, {
      description: e
    })
  }, [u]), f = (0, a.e7)([c.Z], () => c.Z.getError("description"));
  return (0, r.jsxs)(l.hjN, {
    className: d.section,
    children: [(0, r.jsxs)("div", {
      className: d.sectionHeader,
      children: [(0, r.jsx)(l.vwX, {
        children: A.NW.string(A.t.Z27SCQ)
      }), (0, r.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: A.NW.string(A.t.pw0MIi)
      })]
    }), (0, r.jsx)(l.Kx8, {
      value: t.description,
      placeholder: A.NW.string(A.t.Nvfows),
      onChange: g,
      maxLength: s.Us,
      disabled: !n,
      error: f
    })]
  })
}