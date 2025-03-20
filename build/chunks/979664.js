/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(813197),
  o = n(999382),
  A = n(388032),
  c = n(293775),
  d = n(659116);

function u(e) {
  let {
    profile: t,
    handleIconChange: n,
    canManageGuild: s
  } = e, o = i.useCallback(() => {
    n(null)
  }, [n]), d = i.useMemo(() => ({
    within: !0
  }), []);
  return (0, r.jsxs)("div", {
    className: c.buttons,
    children: [(0, r.jsxs)(a.zxk, {
      focusProps: d,
      tabIndex: -1,
      size: a.zxk.Sizes.SMALL,
      color: a.zxk.Colors.BRAND,
      disabled: !s,
      children: [A.NW.string(A.t.r3Jdsb), (0, r.jsx)(l.ZP, {
        tabIndex: 0,
        onChange: n
      })]
    }), null != t.icon ? (0, r.jsx)(a.zxk, {
      size: a.zxk.Sizes.SMALL,
      color: a.zxk.Colors.RED,
      look: a.zxk.Looks.LINK,
      onClick: o,
      disabled: !s,
      children: A.NW.string(A.t.x8AlTk)
    }) : null]
  })
}

function g(e) {
  let {
    profile: t,
    canManageGuild: n,
    onIconChange: i
  } = e, l = (0, s.e7)([o.Z], () => o.Z.getError("icon"));
  return (0, r.jsxs)("section", {
    className: c.container,
    children: [(0, r.jsxs)(a.hjN, {
      className: d.section,
      children: [(0, r.jsxs)("div", {
        className: d.sectionHeader,
        children: [(0, r.jsx)(a.vwX, {
          children: A.NW.string(A.t.FkQnxM)
        }), (0, r.jsx)(a.R94, {
          type: "description",
          children: A.NW.string(A.t.KjkA0d)
        })]
      }), (0, r.jsx)(u, {
        profile: t,
        canManageGuild: n,
        handleIconChange: i
      })]
    }), null != l ? (0, r.jsx)("div", {
      className: c.iconError,
      children: l
    }) : null]
  })
}