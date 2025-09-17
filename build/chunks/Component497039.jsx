/** Chunk was on web.js **/
/** chunk id: 497039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk143450 = require("./143450.js"),
  Chunk180035 = require("./180035.js"),
  Chunk241179 = require("./241179.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = {
    mass: 1,
    tension: 250
  },
  E = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
  b = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
  y = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
  O = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
  v = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
  I = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";

function T(e, t, n, i) {
  let a = e.to({
      output: [t, n]
    }),
    o = i ? [E, E, v, v] : [E, y, y, v],
    l = i ? [b, b, I, I] : [b, O, O, I];
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

function S(e) {
  let {
    id: t,
    onChange: n,
    checked: a,
    disabled: _,
    focusProps: h,
    innerRef: E
  } = e, {
    reducedMotion: b
  } = i.useContext(l.Sfi), y = i.useRef(null), [O, v] = i.useState(false), I = (0, d.d)(c.Z.colors.INTERACTIVE_MUTED).spring(), S = (0, d.d)(c.Z.colors.BG_BRAND).spring(), {
    state: A,
    opacity: C
  } = (0, u.q)({
    config: g,
    opacity: _ ? .5 : 1,
    state: O ? a ? .7 : .3 : +!!a
  }, "animate-always");

  function N(e) {
    v(false), null == n || n(e.currentTarget.checked, e)
  }

  function R(e) {
    _ || e.repeat || (" " === e.key || "Enter" === e.key) && v(true)
  }

  function P(e) {
    var t;
    _ || !O || e.repeat || (v(false), "Enter" === e.key && (null == (t = y.current) || t.click()))
  }
  return (0, r.jsx)(l.tEY, m(p({}, h), {
    within: true,
    offset: false,
    children: (0, r.jsxs)(s.animated.div, {
      "data-toggleable-component": "switch",
      className: o()(f.container, {
        [f.checked]: a,
        [f.disabled]: _
      }),
      onMouseDown: () => !_ && v(true),
      onMouseUp: () => v(false),
      onMouseLeave: () => v(false),
      style: {
        opacity: C,
        backgroundColor: A.to({
          output: [I, S]
        })
      },
      children: [(0, r.jsxs)(s.animated.svg, {
        className: f.slider,
        viewBox: "0 0 28 20",
        preserveAspectRatio: "xMinYMid meet",
        style: {
          left: A.to({
            range: [0, .3, .7, 1],
            output: [false, 1, 8, 12]
          })
        },
        "aria-hidden": true,
        children: [(0, r.jsx)(s.animated.rect, {
          fill: "white",
          x: A.to({
            range: [0, .3, .7, 1],
            output: [4, 0, 0, 4]
          }),
          y: A.to({
            range: [0, .3, .7, 1],
            output: [0, 1, 1, 0]
          }),
          height: A.to({
            range: [0, .3, .7, 1],
            output: [20, 18, 18, 20]
          }),
          width: A.to({
            range: [0, .3, .7, 1],
            output: [20, 28, 28, 20]
          }),
          rx: "10"
        }), T(A, I, S, b.enabled)]
      }), (0, r.jsx)("input", {
        id: t,
        type: "checkbox",
        ref: e => {
          y.current = e, null != E && (E.current = e)
        },
        className: f.input,
        tabIndex: _ ? false : 0,
        onKeyDown: R,
        onKeyUp: P,
        onChange: N,
        checked: a,
        disabled: _
      })]
    })
  }))
}