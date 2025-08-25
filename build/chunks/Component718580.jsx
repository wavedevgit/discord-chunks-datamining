/** Chunk was on web.js **/
/** chunk id: 718580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => S,
  M: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk202841 = require("./202841.js"),
  Chunk990547 = require("./990547.js"),
  Chunk873546 = require("./873546.js"),
  Chunk186325 = require("./186325.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk699682 = require("./699682.js"),
  Chunk793903 = require("./793903.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk237617 = require("./237617.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: true
};

function v(e, t) {
  return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null
}

function I(e, t) {
  return n => {
    if (0 === n) return "auto";
    let r = "forwards" === t.current,
      i = n > 0,
      o = false;
    return i && r && "left" === e && (o = true), i && !r && "right" === e && (o = true), !i && r && "right" === e && (o = true), i || r || "left" !== e || (o = true), o ? "".concat(100 * Math.abs(n), "%") : "auto"
  }
}

function T(e) {
  return null
}

function S(e) {
  var t, n, h, {
      contentDisplay: g,
      fadeInOut: y = false
    } = e,
    T = b(e, ["contentDisplay", "fadeInOut"]);
  let S = {},
    {
      analyticsLocations: A
    } = (0, _.ZP)();
  i.Children.forEach(T.children, (e, t) => {
    S[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let C = T.activeSlide,
    N = (0, d.Z)(T.activeSlide),
    R = null != (t = T.directionOverride) ? t : v(null != N ? S[N] : null, S[C]),
    {
      reducedMotion: P
    } = i.useContext(l.S),
    w = i.useContext(f.Z),
    D = S[C].impressionName,
    x = E(m({}, S[C].impressionProperties), {
      location_stack: A
    });
  w({
    type: a.ImpressionTypes.MODAL,
    name: D,
    properties: x,
    _stackContext: {
      isSlide: true
    }
  });
  let {
    ref: L,
    width: j = 0,
    height: k = 0
  } = (0, u.ZP)(C), M = m({}, O, T.springConfig, P.enabled ? {
    clamp: true
  } : null), U = (0, c.q_F)({
    width: null != (n = T.width) ? n : j,
    height: k,
    config: M
  }, null == N ? "animate-never" : "respect-motion-settings"), G = (0, c.Yzy)(C, {
    value: 0,
    from: {
      value: 1
    },
    enter: {
      value: 0
    },
    leave: {
      value: false
    },
    config: M,
    onRest: (e, t) => {
      let {
        item: n
      } = t;
      n === C && null != T.onSlideReady && T.onSlideReady(n)
    }
  }, null == N ? "animate-never" : "respect-motion-settings"), B = (0, p.Z)(R), {
    width: Z,
    centered: F = true
  } = T, V = s.tq ? "100%" : U.width.to(e => "string" == typeof e ? e : Math.round(e)), H = s.tq ? "100%" : U.height.to(e => Math.round(e)), Y = s.tq ? {} : F ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, W = s.tq ? {} : {
    overflow: null != (h = T.overflow) ? h : "hidden"
  };
  return (0, r.jsx)(o.animated.div, {
    style: m({
      position: "relative",
      minWidth: V,
      minHeight: H
    }, W),
    children: G((e, t, n) => {
      let {
        key: i
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, r.jsx)(o.animated.div, {
        ref: t === C ? L : null,
        style: m({
          position: "absolute",
          display: g,
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: s.tq ? "100%" : Z
        }, Y, P.enabled ? a : m({
          left: e.value.to(I("left", B)),
          right: e.value.to(I("right", B))
        }, y && a)),
        children: S[t].children
      }, i)
    })
  })
}