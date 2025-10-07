/** Chunk was on web.js **/
/** chunk id: 573830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => N
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk958610 = require("./958610.js"),
  Chunk137317 = require("./137317.js"),
  Chunk692547 = require("./692547.js"),
  Chunk251052 = require("./251052.js"),
  Chunk673824 = require("./673824.js"),
  Chunk213305 = require("./213305.js"),
  Chunk155127 = require("./155127.js"),
  Chunk571755 = require("./571755.js");

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
let g = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
  E = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
  b = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
  y = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
  O = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
  v = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
  I = [0, .1, .4, .6, .9, 1],
  T = [0, .1, .9, 1],
  S = [0, .1, .2, .5, .8, 1],
  A = [0, .2, .5, .8, .9, 1];

function C(e, t, n, i) {
  let a = e.to({
      range: T,
      output: [t, t, n, n],
      extrapolate: "clamp"
    }),
    s = i ? [g, g, O, O] : [g, b, b, O],
    l = i ? [E, E, v, v] : [E, y, y, v];
  return (0, r.jsx)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    children: (0, r.jsxs)("g", {
      transform: "translate(4 4)",
      children: [(0, r.jsx)(o.animated.path, {
        fill: a,
        d: e.to({
          range: T,
          output: s,
          extrapolate: "clamp"
        })
      }), (0, r.jsx)(o.animated.path, {
        fill: a,
        d: e.to({
          range: T,
          output: l,
          extrapolate: "clamp"
        })
      })]
    })
  })
}

function N(e) {
  let {
    checked: t,
    disabled: n,
    id: _,
    onChange: h,
    focusProps: g,
    hasIcon: E = false,
    describedBy: b,
    innerRef: y
  } = e, {
    reducedMotion: O
  } = i.useContext(u.S), v = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_DEFAULT).spring(), N = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_DEFAULT).spring(), R = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_DEFAULT_SELECTED).spring(), P = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_ACTIVE).spring(), w = (0, c.d)(s.Z.colors.SWITCH_BORDER_DEFAULT).spring(), D = (0, c.d)(s.Z.colors.SWITCH_BORDER_DEFAULT_SELECTED).spring(), L = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_HOVER).spring(), x = (0, c.d)(s.Z.colors.SWITCH_BACKGROUND_HOVER_SELECTED).spring(), M = (0, c.d)(s.Z.colors.SWITCH_BORDER_HOVER).spring(), j = (0, c.d)(s.Z.colors.SWITCH_BORDER_HOVER_SELECTED).spring(), k = (0, c.d)(s.Z.colors.SWITCH_THUMB_FOREGROUND_DEFAULT).spring(), U = (0, c.d)(s.Z.colors.SWITCH_THUMB_FOREGROUND_ACTIVE).spring(), G = (0, c.d)(s.Z.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(), B = (0, c.d)(s.Z.colors.SWITCH_THUMB_BACKGROUND_DEFAULT_SELECTED).spring(), [Z, F] = i.useState(false), [V, H] = i.useState(false), Y = i.useRef(null), W = i.useRef(null), {
    state: K,
    opacity: z
  } = (0, l.q)({
    config: {
      duration: 300
    },
    opacity: n ? .5 : 1,
    state: Z ? t ? I[I.length - 2] : I[1] : +!!t
  }, "animate-always"), q = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [...e].reverse();
    return t ? K.to({
      range: A,
      output: n
    }) : K.to({
      range: S,
      output: e
    })
  };
  return (0, r.jsx)(d.tE, m(p({}, g), {
    ringTarget: Y,
    focusTarget: W,
    within: true,
    offset: false,
    children: (0, r.jsx)(a.r, {
      id: _,
      className: f.container,
      onHoverChange: e => !n && H(e),
      onMouseDown: () => !n && F(true),
      onMouseUp: () => F(false),
      onMouseLeave: () => {
        F(false)
      },
      inputRef: null != y ? y : W,
      isDisabled: n,
      isSelected: t,
      onChange: e => {
        F(false), h(e)
      },
      "aria-describedby": b,
      children: (0, r.jsx)(o.animated.div, {
        ref: Y,
        className: f.switchIndicator,
        "data-size": "md",
        "data-mana-component": "switch",
        style: {
          opacity: z,
          backgroundColor: K.to({
            range: T,
            output: [Z ? N : V ? L : v, Z ? N : V ? L : v, Z ? P : V ? x : R, Z ? P : V ? x : R],
            extrapolate: "clamp"
          }),
          border: "1px solid",
          borderColor: K.to({
            range: T,
            output: [Z || V ? M : w, Z || V ? M : w, Z || V ? j : D, Z || V ? j : D],
            extrapolate: "clamp"
          })
        },
        children: (0, r.jsxs)(o.animated.svg, {
          className: f.thumb,
          viewBox: "0 0 24 24",
          preserveAspectRatio: "xMidYMin meet",
          style: {
            left: K.to({
              range: I,
              output: [1, 1, 1, 24, 24, 24]
            })
          },
          "aria-hidden": true,
          children: [(0, r.jsx)(o.animated.rect, {
            fill: K.to({
              range: T,
              output: [G, G, B, B]
            }),
            x: q([4, 4, 1, 1, 2.5, 4]),
            y: q([4, 7, 7, 7, 2.5, 4]),
            height: q([16, 10, 10, 10, 19, 16]),
            width: q([16, 16, 19, 22, 19, 16]),
            rx: q([8, 5, 5, 5, 9.5, 8])
          }), E && C(K, k, U, O.enabled)]
        })
      })
    })
  }))
}