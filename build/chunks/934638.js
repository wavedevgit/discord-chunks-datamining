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
  A = n(999382),
  c = n(388032),
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
  }, [u]), f = (0, a.e7)([A.Z], () => A.Z.getError("description"));
  return (0, r.jsxs)(l.hjN, {
    className: d.section,
    children: [(0, r.jsxs)("div", {
      className: d.sectionHeader,
      children: [(0, r.jsx)(l.vwX, {
        children: c.NW.string(c.t.Z27SCQ)
      }), (0, r.jsx)(l.R94, {
        type: l.geA.DESCRIPTION,
        children: c.NW.string(c.t.pw0MIi)
      })]
    }), (0, r.jsx)(l.Kx8, {
      value: t.description,
      placeholder: c.NW.string(c.t.Nvfows),
      onChange: g,
      maxLength: s.Us,
      disabled: !n,
      error: f
    })]
  })
}