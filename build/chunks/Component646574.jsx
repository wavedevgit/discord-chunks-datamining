/** Chunk was on web.js **/
/** chunk id: 646574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975377 = require("./975377.js");
let E = {
    tension: 750,
    mass: 2.5,
    friction: 70
  },
  b = 20;

function y(e) {
  let {
    tooltipText: t,
    headingText: n,
    textColor: i
  } = e, a = null != n;
  return (0, r.jsxs)("span", {
    className: a ? true : g.tooltipContainer,
    children: [(0, r.jsxs)("span", {
      className: g.tooltipContainer,
      children: [(0, r.jsx)(u.SrA, {
        size: "md",
        color: "currentColor",
        className: g.nitroWheel
      }), a ? (0, r.jsx)(u.Heading, {
        color: null != i ? i : "text-default",
        variant: "heading-sm/semibold",
        children: n
      }) : null]
    }), (0, r.jsx)(u.Text, {
      variant: a ? "text-xs/normal" : "text-sm/medium",
      color: null != i ? i : "text-default",
      children: t
    })]
  })
}

function O(e) {
  return e ? m.intl.string(m.t["5cRA/b"]) : m.intl.string(m.t.buV4av)
}

function v(e) {
  let {
    checked: t,
    onClick: n,
    id: a = "burst-reaction-toggle-button"
  } = e, v = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), I = _.default.getCurrentUser(), T = null == I || (0, p.I5)(I) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [S, A] = (0, f.US)(T), [C, N] = i.useState(false), [R, P] = (0, u.q_F)(() => ({})), D = (0, s.animated)(u.Pt5);

  function w() {
    P({
      from: {
        rotate: t ? "360deg" : "0deg"
      },
      to: {
        rotate: t ? "0deg" : "360deg"
      },
      config: E
    }), null == n || n(), N(false)
  }
  i.useEffect(() => {
    let e = S === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (A(h.L.DISMISS), setTimeout(() => N(e), 200))
  }, [S, A]);
  let L = C ? m.intl.string(m.t["Osi/uy"]) : O(t),
    x = C ? m.intl.string(m.t.ORK94p) : true;
  return (0, r.jsxs)(u.jSM, {
    position: "top",
    text: (0, r.jsx)(y, {
      textColor: "always-white",
      tooltipText: L,
      headingText: x
    }),
    color: u.aML.Colors.BRAND,
    forceOpen: C,
    "aria-label": L,
    tooltipClassName: g.tooltip,
    children: [(0, r.jsx)("input", {
      className: g.visuallyHidden,
      checked: t,
      onChange: w,
      id: a,
      type: "checkbox"
    }), (0, r.jsxs)("label", {
      htmlFor: a,
      className: o()(g.label, {
        [g.labelChecked]: t
      }),
      children: [(0, r.jsx)(D, {
        style: v ? true : R,
        size: "custom",
        width: b,
        height: b,
        color: t ? "white" : "currentColor",
        className: g.icon
      }), (0, r.jsx)("span", {
        children: (0, r.jsx)(u.Text, {
          className: g.visuallyHidden,
          variant: "text-sm/semibold",
          children: m.intl.string(m.t.buV4av)
        })
      })]
    })]
  })
}