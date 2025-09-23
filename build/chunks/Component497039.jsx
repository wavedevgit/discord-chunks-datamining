/** Chunk was on web.js **/
/** chunk id: 497039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk180035 = require("./180035.js"),
  Chunk241179 = require("./241179.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {
    mass: 1,
    tension: 250
  },
  g = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
  E = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
  b = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
  y = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
  O = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
  v = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";

function I(e, t, n, i) {
  let a = e.to({
      output: [t, n]
    }),
    o = i ? [g, g, O, O] : [g, b, b, O],
    l = i ? [E, E, v, v] : [E, y, y, v];
  return (0, r.jsxs)("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    children: [(0, r.jsx)(s.animated.path, {
      fill: a,
      d: e.to({
        range: [0, .3, .7, 1],
        output: o
      })
    }), (0, r.jsx)(s.animated.path, {
      fill: a,
      d: e.to({
        range: [0, .3, .7, 1],
        output: l
      })
    })]
  })
}

function T(e) {
  let {
    id: t,
    onChange: n,
    checked: a,
    disabled: f,
    focusProps: p,
    innerRef: g
  } = e, {
    reducedMotion: E
  } = i.useContext(l.Sfi), b = i.useRef(null), [y, O] = i.useState(false), v = (0, u.d)(c.Z.colors.INTERACTIVE_MUTED).spring(), T = (0, u.d)(c.Z.colors.BG_BRAND).spring(), {
    state: S,
    opacity: A
  } = (0, l.q_F)({
    config: m,
    opacity: f ? .5 : 1,
    state: y ? a ? .7 : .3 : +!!a
  }, "animate-always");

  function C(e) {
    O(false), null == n || n(e.currentTarget.checked, e)
  }

  function N(e) {
    f || e.repeat || (" " === e.key || "Enter" === e.key) && O(true)
  }

  function R(e) {
    var t;
    f || !y || e.repeat || (O(false), "Enter" === e.key && (null == (t = b.current) || t.click()))
  }
  return (0, r.jsx)(l.tEY, h(_({}, p), {
    within: true,
    offset: false,
    children: (0, r.jsxs)(s.animated.div, {
      "data-toggleable-component": "switch",
      className: o()(d.container, {
        [d.checked]: a,
        [d.disabled]: f
      }),
      onMouseDown: () => !f && O(true),
      onMouseUp: () => O(false),
      onMouseLeave: () => O(false),
      style: {
        opacity: A,
        backgroundColor: S.to({
          output: [v, T]
        })
      },
      children: [(0, r.jsxs)(s.animated.svg, {
        className: d.slider,
        viewBox: "0 0 28 20",
        preserveAspectRatio: "xMinYMid meet",
        style: {
          left: S.to({
            range: [0, .3, .7, 1],
            output: [false, 1, 8, 12]
          })
        },
        "aria-hidden": true,
        children: [(0, r.jsx)(s.animated.rect, {
          fill: "white",
          x: S.to({
            range: [0, .3, .7, 1],
            output: [4, 0, 0, 4]
          }),
          y: S.to({
            range: [0, .3, .7, 1],
            output: [0, 1, 1, 0]
          }),
          height: S.to({
            range: [0, .3, .7, 1],
            output: [20, 18, 18, 20]
          }),
          width: S.to({
            range: [0, .3, .7, 1],
            output: [20, 28, 28, 20]
          }),
          rx: "10"
        }), I(S, v, T, E.enabled)]
      }), (0, r.jsx)("input", {
        id: t,
        type: "checkbox",
        ref: e => {
          b.current = e, null != g && (g.current = e)
        },
        className: d.input,
        tabIndex: f ? false : 0,
        onKeyDown: N,
        onKeyUp: R,
        onChange: C,
        checked: a,
        disabled: f
      })]
    })
  }))
}