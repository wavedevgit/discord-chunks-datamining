/** Chunk was on web.js **/
/** chunk id: 305945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
  Chunk692547 = require("./692547.js"),
  Chunk251052 = require("./251052.js"),
  Chunk673824 = require("./673824.js"),
  Chunk213305 = require("./213305.js"),
  Chunk155127 = require("./155127.js"),
  Chunk406751 = require("./406751.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = {
    mass: 1,
    tension: 250
  },
  b = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
  y = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
  O = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
  v = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
  I = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
  T = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";

function S(e, t, n, i) {
  let a = e.to({
      output: [t, n]
    }),
    o = i ? [b, b, I, I] : [b, O, O, I],
    l = i ? [y, y, T, T] : [y, v, v, T];
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

function A(e) {
  let {
    id: t,
    onChange: n,
    checked: a,
    disabled: p,
    focusProps: m,
    innerRef: b
  } = e, {
    reducedMotion: y
  } = i.useContext(d.S), O = i.useRef(null), [v, I] = i.useState(false), T = (0, u.d)(l.Z.colors.INTERACTIVE_MUTED).spring(), A = (0, u.d)(l.Z.colors.BG_BRAND).spring(), {
    state: C,
    opacity: N
  } = (0, c.q)({
    config: E,
    opacity: p ? .5 : 1,
    state: v ? a ? .7 : .3 : +!!a
  }, "animate-always");

  function R(e) {
    I(false), e.stopPropagation(), null == n || n(e.currentTarget.checked)
  }

  function P(e) {
    p || e.repeat || (" " === e.key || "Enter" === e.key) && I(true)
  }

  function w(e) {
    var t;
    p || !v || e.repeat || (I(false), "Enter" === e.key && (null == (t = O.current) || t.click()))
  }
  return (0, r.jsx)(f.tE, g(h({}, m), {
    within: true,
    offset: false,
    children: (0, r.jsxs)(s.animated.div, {
      "data-toggleable-component": "switch",
      className: o()(_.container, {
        [_.checked]: a,
        [_.disabled]: p
      }),
      onMouseDown: () => !p && I(true),
      onMouseUp: () => I(false),
      onMouseLeave: () => I(false),
      style: {
        opacity: N,
        backgroundColor: C.to({
          output: [T, A]
        })
      },
      children: [(0, r.jsxs)(s.animated.svg, {
        className: _.slider,
        viewBox: "0 0 28 20",
        preserveAspectRatio: "xMinYMid meet",
        style: {
          left: C.to({
            range: [0, .3, .7, 1],
            output: [false, 1, 8, 12]
          })
        },
        "aria-hidden": true,
        children: [(0, r.jsx)(s.animated.rect, {
          fill: "white",
          x: C.to({
            range: [0, .3, .7, 1],
            output: [4, 0, 0, 4]
          }),
          y: C.to({
            range: [0, .3, .7, 1],
            output: [0, 1, 1, 0]
          }),
          height: C.to({
            range: [0, .3, .7, 1],
            output: [20, 18, 18, 20]
          }),
          width: C.to({
            range: [0, .3, .7, 1],
            output: [20, 28, 28, 20]
          }),
          rx: "10"
        }), S(C, T, A, y.enabled)]
      }), (0, r.jsx)("input", {
        id: t,
        type: "checkbox",
        ref: e => {
          O.current = e, null != b && (b.current = e)
        },
        className: _.input,
        tabIndex: p ? false : 0,
        onKeyDown: P,
        onKeyUp: w,
        onChange: R,
        checked: a,
        disabled: p
      })]
    })
  }))
}