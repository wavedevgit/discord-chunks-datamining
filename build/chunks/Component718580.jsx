/** Chunk was on web.js **/
/** chunk id: 718580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => N,
  M: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk554916 = require("./554916.js"),
  Chunk990547 = require("./990547.js"),
  Chunk872175 = require("./872175.js"),
  Chunk873546 = require("./873546.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk699682 = require("./699682.js"),
  Chunk793903 = require("./793903.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk30929 = require("./30929.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: true
};

function T(e, t) {
  return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null
}

function C(e, t) {
  return n => {
    if (0 === n) return "auto";
    let r = "forwards" === t.current,
      i = n > 0,
      a = false;
    return i && r && "left" === e && (a = true), i && !r && "right" === e && (a = true), !i && r && "right" === e && (a = true), i || r || "left" !== e || (a = true), a ? "".concat(100 * Math.abs(n), "%") : "auto"
  }
}

function A(e) {
  return null
}

function N(e) {
  var t, n, a, {
      contentDisplay: E,
      fadeInOut: y = false
    } = e,
    S = v(e, ["contentDisplay", "fadeInOut"]);
  let A = {},
    {
      analyticsLocations: N
    } = (0, h.ZP)();
  i.Children.forEach(S.children, (e, t) => {
    A[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let P = S.activeSlide,
    R = (0, _.Z)(S.activeSlide),
    w = null != (t = S.directionOverride) ? t : T(null != R ? A[R] : null, A[P]),
    {
      reducedMotion: D
    } = i.useContext(d.Sfi),
    x = i.useContext(m.Z),
    L = A[P].impressionName,
    j = O(b({}, A[P].impressionProperties), {
      location_stack: N
    });
  x({
    type: l.ImpressionTypes.MODAL,
    name: L,
    properties: j,
    _stackContext: {
      isSlide: true
    }
  });
  let {
    ref: M,
    width: k = 0,
    height: U = 0
  } = (0, p.ZP)(P), G = b({}, I, S.springConfig, D.enabled ? {
    clamp: true
  } : null), Z = (0, f.q_F)({
    width: null != (n = S.width) ? n : k,
    height: U,
    config: G
  }, null == R ? "animate-never" : "respect-motion-settings"), F = (0, f.Yzy)(P, {
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
    config: G,
    onRest: (e, t) => {
      let {
        item: n
      } = t;
      n === P && null != S.onSlideReady && S.onSlideReady(n)
    }
  }, null == R ? "animate-never" : "respect-motion-settings"), B = (0, c.Z)(w), {
    width: V,
    centered: H = true
  } = S, Y = u.tq && !S.shouldUseMediaQueriesForSizing ? "100%" : Z.width.to(e => "string" == typeof e ? e : Math.round(e)), W = u.tq && !S.shouldUseMediaQueriesForSizing ? "100%" : Z.height.to(e => Math.round(e)), K = u.tq ? {} : H ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, z = u.tq ? {} : {
    overflow: null != (a = S.overflow) ? a : "hidden"
  }, q = i.useMemo(() => ({
    width: u.tq && !S.shouldUseMediaQueriesForSizing ? "100%" : V
  }), [S.shouldUseMediaQueriesForSizing, V]);
  return (0, r.jsx)(s.animated.div, {
    style: b({
      position: "relative",
      minWidth: Y,
      minHeight: W
    }, z),
    className: o()({
      [g.outerAnimatedDivDynamicSizing]: S.shouldUseMediaQueriesForSizing
    }),
    children: F((e, t, n) => {
      let {
        key: i
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, r.jsx)(s.animated.div, {
        ref: t === P ? M : null,
        style: b({
          position: "absolute",
          display: E,
          flexDirection: "column",
          backfaceVisibility: "hidden"
        }, q, K, D.enabled ? a : b({
          left: e.value.to(C("left", B)),
          right: e.value.to(C("right", B))
        }, y && a)),
        className: o()({
          [g.innerAnimatedDivDynamicSizing]: S.shouldUseMediaQueriesForSizing
        }),
        children: A[t].children
      }, i)
    })
  })
}