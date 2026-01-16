/** Chunk was on web.js **/
/** chunk id: 646574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk454399 = require("./454399.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk538497 = require("./538497.js");
let b = {
    tension: 750,
    mass: 2.5,
    friction: 70
  },
  y = 20;

function O(e) {
  let {
    checked: t,
    onClick: n,
    id: a = "burst-reaction-toggle-button"
  } = e, O = (0, l.e7)([f.Z], () => f.Z.useReducedMotion), v = _.default.getCurrentUser(), S = null == v || (0, h.I5)(v) ? [c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [I, T] = (0, p.US)(S), [C, A] = i.useState(false), [N, P] = (0, d.q_F)(() => ({})), w = (0, s.animated)(d.Pt5);

  function R() {
    P({
      from: {
        rotate: t ? "360deg" : "0deg"
      },
      to: {
        rotate: t ? "0deg" : "360deg"
      },
      config: b
    }), null == n || n(), A(false)
  }
  i.useEffect(() => {
    let e = I === c.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (T(m.L.DISMISS), setTimeout(() => A(e), 200))
  }, [I, T]);
  let D = C ? g.intl.string(g.t["Osi/uy"]) : t ? g.intl.string(g.t["5cRA/b"]) : g.intl.string(g.t.buV4av),
    x = C ? g.intl.string(g.t.ORK94p) : true;
  return (0, r.jsx)(u.i, {
    position: "top",
    title: x,
    body: D,
    asset: (0, r.jsx)(d.SrA, {
      size: "md",
      color: "currentColor"
    }),
    assetSize: 20,
    forceOpen: C,
    children: (0, r.jsxs)("div", {
      "aria-label": D,
      children: [(0, r.jsx)("input", {
        className: E.visuallyHidden,
        checked: t,
        onChange: R,
        id: a,
        type: "checkbox"
      }), (0, r.jsxs)("label", {
        htmlFor: a,
        className: o()(E.label, {
          [E.labelChecked]: t
        }),
        children: [(0, r.jsx)(w, {
          style: O ? true : N,
          size: "custom",
          width: y,
          height: y,
          color: t ? "white" : "currentColor",
          className: E.icon
        }), (0, r.jsx)("span", {
          children: (0, r.jsx)(d.Text, {
            className: E.visuallyHidden,
            variant: "text-sm/semibold",
            children: g.intl.string(g.t.buV4av)
          })
        })]
      })]
    })
  })
}