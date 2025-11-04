/** Chunk was on web.js **/
/** chunk id: 718580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => N,
  M: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk358458 = require("./358458.js"),
  Chunk990547 = require("./990547.js"),
  Chunk872175 = require("./872175.js"),
  Chunk873546 = require("./873546.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk699682 = require("./699682.js"),
  Chunk793903 = require("./793903.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk430723 = require("./430723.js");

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
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: true
};

function S(e, t) {
  return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null
}

function A(e, t) {
  return n => {
    if (0 === n) return "auto";
    let r = "forwards" === t.current,
      i = n > 0,
      a = false;
    return i && r && "left" === e && (a = true), i && !r && "right" === e && (a = true), !i && r && "right" === e && (a = true), i || r || "left" !== e || (a = true), a ? "".concat(100 * Math.abs(n), "%") : "auto"
  }
}

function C(e) {
  return null
}

function N(e) {
  var t, n, a, {
      contentDisplay: E,
      fadeInOut: y = false
    } = e,
    I = v(e, ["contentDisplay", "fadeInOut"]);
  let C = {},
    {
      analyticsLocations: N
    } = (0, m.ZP)();
  i.Children.forEach(I.children, (e, t) => {
    C[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let R = I.activeSlide,
    P = (0, p.Z)(I.activeSlide),
    w = null != (t = I.directionOverride) ? t : S(null != P ? C[P] : null, C[R]),
    {
      reducedMotion: D
    } = i.useContext(d.Sfi),
    x = i.useContext(h.Z),
    L = C[R].impressionName,
    M = O(b({}, C[R].impressionProperties), {
      location_stack: N
    });
  x({
    type: l.ImpressionTypes.MODAL,
    name: L,
    properties: M,
    _stackContext: {
      isSlide: true
    }
  });
  let {
    ref: j,
    width: k = 0,
    height: U = 0
  } = (0, _.ZP)(R), G = b({}, T, I.springConfig, D.enabled ? {
    clamp: true
  } : null), B = (0, f.q_F)({
    width: null != (n = I.width) ? n : k,
    height: U,
    config: G
  }, null == P ? "animate-never" : "respect-motion-settings"), Z = (0, f.Yzy)(R, {
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
      n === R && null != I.onSlideReady && I.onSlideReady(n)
    }
  }, null == P ? "animate-never" : "respect-motion-settings"), F = (0, c.Z)(w), {
    width: V,
    centered: H = true
  } = I, Y = u.tq && !I.shouldUseMediaQueriesForSizing ? "100%" : B.width.to(e => "string" == typeof e ? e : Math.round(e)), W = u.tq && !I.shouldUseMediaQueriesForSizing ? "100%" : B.height.to(e => Math.round(e)), K = u.tq ? {} : H ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, z = u.tq ? {} : {
    overflow: null != (a = I.overflow) ? a : "hidden"
  }, q = i.useMemo(() => ({
    width: u.tq && !I.shouldUseMediaQueriesForSizing ? "100%" : V
  }), [I.shouldUseMediaQueriesForSizing, V]);
  return (0, r.jsx)(s.animated.div, {
    style: b({
      position: "relative",
      minWidth: Y,
      minHeight: W
    }, z),
    className: o()({
      [g.outerAnimatedDivDynamicSizing]: I.shouldUseMediaQueriesForSizing
    }),
    children: Z((e, t, n) => {
      let {
        key: i
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, r.jsx)(s.animated.div, {
        ref: t === R ? j : null,
        style: b({
          position: "absolute",
          display: E,
          flexDirection: "column",
          backfaceVisibility: "hidden"
        }, q, K, D.enabled ? a : b({
          left: e.value.to(A("left", F)),
          right: e.value.to(A("right", F))
        }, y && a)),
        className: o()({
          [g.innerAnimatedDivDynamicSizing]: I.shouldUseMediaQueriesForSizing
        }),
        children: C[t].children
      }, i)
    })
  })
}