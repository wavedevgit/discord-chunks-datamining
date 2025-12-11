/** Chunk was on web.js **/
/** chunk id: 573830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => w
}), require("./388685.js"), require("./583741.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk74361 = require("./74361.js"),
  Chunk69771 = require("./69771.js"),
  Chunk467721 = require("./467721.js"),
  Chunk698369 = require("./698369.js"),
  Chunk692547 = require("./692547.js"),
  Chunk251052 = require("./251052.js"),
  Chunk673824 = require("./673824.js"),
  Chunk213305 = require("./213305.js"),
  Chunk155127 = require("./155127.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk816811 = require("./816811.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
  O = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
  v = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
  S = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
  I = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
  T = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
  C = [0, .1, .4, .6, .9, 1],
  A = [0, .1, .9, 1],
  N = [0, .1, .2, .5, .7, 1],
  P = [0, .3, .5, .8, .9, 1];

function R(e, t, n) {
  let i = e.to({
    range: A,
    output: [t, t, n, n],
    extrapolate: "clamp"
  });
  return (0, r.jsx)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    children: (0, r.jsxs)("g", {
      transform: "translate(4 4)",
      children: [(0, r.jsx)(s.animated.path, {
        fill: i,
        d: e.to({
          range: A,
          output: [y, v, v, I],
          extrapolate: "clamp"
        })
      }), (0, r.jsx)(s.animated.path, {
        fill: i,
        d: e.to({
          range: A,
          output: [O, S, S, T],
          extrapolate: "clamp"
        })
      })]
    })
  })
}

function w(e) {
  let {
    checked: t,
    disabled: n,
    id: h,
    onChange: E,
    focusProps: y,
    hasIcon: O = false,
    describedBy: v,
    labelledBy: S,
    innerRef: I
  } = e, {
    reducedMotion: T
  } = i.useContext(f.S), w = i.useRef(null), D = i.useRef(null), x = null != I ? I : D, L = (0, l.l)({
    isSelected: t,
    onChange: E,
    isDisabled: n
  }), {
    inputProps: j,
    labelProps: M,
    isPressed: k
  } = (0, a.h)({
    id: h,
    isDisabled: n,
    "aria-describedby": v,
    "aria-labelledby": S
  }, L, x), {
    hoverProps: U,
    isHovered: G
  } = (0, o.X)({
    isDisabled: n
  }), Z = (0, d.d)(c.Z.colors.SWITCH_BACKGROUND_DEFAULT).spring(), F = (0, d.d)(c.Z.colors.SWITCH_BACKGROUND_DEFAULT).spring(), B = (0, d.d)(c.Z.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(), V = (0, d.d)(c.Z.colors.SWITCH_BACKGROUND_ACTIVE).spring(), H = (0, d.d)(c.Z.colors.SWITCH_BORDER_DEFAULT).spring(), Y = (0, d.d)(c.Z.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(), W = (0, d.d)(c.Z.colors.SWITCH_BACKGROUND_HOVER).spring(), K = (0, d.d)(c.Z.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(), z = (0, d.d)(c.Z.colors.SWITCH_BORDER_HOVER).spring(), q = (0, d.d)(c.Z.colors.SWITCH_BORDER_SELECTED_HOVER).spring(), Q = (0, d.d)(c.Z.colors.SWITCH_THUMB_ICON_DEFAULT).spring(), X = (0, d.d)(c.Z.colors.SWITCH_THUMB_ICON_ACTIVE).spring(), J = (0, d.d)(c.Z.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(), $ = (0, d.d)(c.Z.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(), {
    state: ee,
    opacity: et
  } = (0, u.q)({
    config: {
      duration: T.enabled ? 200 : 300
    },
    opacity: n ? .5 : 1,
    state: k ? t ? P[P.length - 2] : N[1] : +!!t
  }, "animate-always"), en = function(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [...e].reverse();
    return t ? ee.to({
      range: P,
      output: n
    }) : ee.to({
      range: N,
      output: e
    })
  };
  return (0, r.jsx)(p.tE, b(g({}, y), {
    ringTarget: w,
    focusTarget: x,
    within: true,
    offset: false,
    children: (0, r.jsxs)("label", b(g({}, M), {
      className: m.container,
      children: [(0, r.jsx)(s.animated.div, b(g({}, U), {
        ref: w,
        className: m.switchIndicator,
        "data-size": "md",
        "data-mana-component": "switch",
        style: {
          opacity: et,
          backgroundColor: ee.to({
            range: A,
            output: [G ? W : Z, F, V, G ? K : B],
            extrapolate: "clamp"
          }),
          border: "1px solid",
          borderColor: ee.to({
            range: A,
            output: [G ? z : H, G ? z : H, G ? q : Y, G ? q : Y],
            extrapolate: "clamp"
          })
        },
        children: (0, r.jsxs)(s.animated.svg, {
          className: m.thumb,
          viewBox: "0 0 24 24",
          preserveAspectRatio: "xMidYMin meet",
          style: {
            left: ee.to(T.enabled ? {
              range: A,
              output: [1, 1, 24, 24]
            } : {
              range: C,
              output: [1, 1, 1, 24, 24, 24]
            })
          },
          "aria-hidden": true,
          children: [(0, r.jsx)(s.animated.rect, {
            fill: ee.to({
              range: A,
              output: [J, J, $, $]
            }),
            x: T.enabled ? 4 : en([4, 4, 2.5, 1, 2.5, 4]),
            y: T.enabled ? 4 : en([4, 7, 2.5, 7, 2.5, 4]),
            width: T.enabled ? 16 : en([16, 16, 19, 22, 19, 16]),
            height: T.enabled ? 16 : en([16, 10, 19, 10, 19, 16]),
            rx: T.enabled ? 8 : en([8, 5, 9.5, 5, 9.5, 8])
          }), O && R(ee, Q, X)]
        })
      })), (0, r.jsx)(_.n, {
        children: (0, r.jsx)("input", b(g({}, j), {
          ref: x
        }))
      })]
    }))
  }))
}