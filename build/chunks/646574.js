/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(642128),
  l = n(442837),
  c = n(704215),
  u = n(481060),
  d = n(607070),
  f = n(243778),
  _ = n(594174),
  p = n(74538),
  h = n(921944),
  g = n(388032),
  m = n(107525);
let E = {
    tension: 750,
    mass: 2.5,
    friction: 70
  },
  v = 20;

function b(e) {
  let {
    tooltipText: t,
    headingText: n,
    textColor: i
  } = e, o = null != n;
  return (0, r.jsxs)("span", {
    className: o ? void 0 : m.tooltipContainer,
    children: [(0, r.jsxs)("span", {
      className: m.tooltipContainer,
      children: [(0, r.jsx)(u.SrA, {
        size: "md",
        color: "currentColor",
        className: m.nitroWheel
      }), o ? (0, r.jsx)(u.X6q, {
        color: null != i ? i : "text-normal",
        variant: "heading-sm/semibold",
        children: n
      }) : null]
    }), (0, r.jsx)(u.Text, {
      variant: o ? "text-xs/normal" : "text-sm/medium",
      color: null != i ? i : "text-normal",
      children: t
    })]
  })
}

function y(e) {
  return e ? g.NW.string(g.t["5cRA/f"]) : g.NW.string(g.t.buV4am)
}

function O(e) {
  let {
    checked: t,
    onClick: n,
    id: o = "burst-reaction-toggle-button"
  } = e, O = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), S = _.default.getCurrentUser(), I = null == S || (0, p.I5)(S) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [T, N] = (0, f.US)(I), [A, C] = i.useState(!1), [R, P] = (0, u.q_F)(() => ({})), D = (0, s.animated)(u.Pt5);

  function w() {
    P({
      from: {
        rotate: t ? "360deg" : "0deg"
      },
      to: {
        rotate: t ? "0deg" : "360deg"
      },
      config: E
    }), null == n || n(), C(!1)
  }
  i.useEffect(() => {
    let e = T === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (N(h.L.DISMISS), setTimeout(() => C(e), 200))
  }, [T, N]);
  let L = A ? g.NW.string(g.t["Osi/u7"]) : y(t),
    x = A ? g.NW.string(g.t.ORK94u) : void 0;
  return (0, r.jsxs)(u.DY3, {
    position: "top",
    text: (0, r.jsx)(b, {
      textColor: "always-white",
      tooltipText: L,
      headingText: x
    }),
    color: u.ua7.Colors.BRAND,
    forceOpen: A,
    "aria-label": L,
    tooltipClassName: m.tooltip,
    children: [(0, r.jsx)("input", {
      className: m.visuallyHidden,
      checked: t,
      onChange: w,
      id: o,
      type: "checkbox"
    }), (0, r.jsxs)("label", {
      htmlFor: o,
      className: a()(m.label, {
        [m.labelChecked]: t
      }),
      children: [t ? (0, r.jsx)(u.ZX5, {
        className: m.shine,
        shinePaused: O
      }) : null, (0, r.jsx)(D, {
        style: O ? void 0 : R,
        size: "custom",
        width: v,
        height: v,
        color: t ? "white" : "currentColor",
        className: m.icon
      }), (0, r.jsx)("span", {
        children: (0, r.jsx)(u.Text, {
          className: m.visuallyHidden,
          variant: "text-sm/semibold",
          children: g.NW.string(g.t.buV4am)
        })
      })]
    })]
  })
}