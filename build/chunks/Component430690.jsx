/** Chunk was on web.js **/
/** chunk id: 430690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => C,
  t: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk110259 = require("./110259.js"),
  Chunk66455 = require("./66455.js"),
  Chunk607399 = require("./607399.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk919796 = require("./919796.js"),
  Chunk989395 = require("./989395.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk929376 = require("./929376.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let I = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: true
};

function S(e, t) {
  return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null
}

function T(e, t) {
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
  var t, n, a;
  let {
    contentDisplay: E,
    fadeInOut: b = false
  } = e, A = v(e, ["contentDisplay", "fadeInOut"]), C = {}, {
    analyticsLocations: N
  } = (0, m.Ay)();
  i.Children.forEach(A.children, (e, t) => {
    C[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let w = A.activeSlide,
    R = (0, _.A)(A.activeSlide),
    P = null != (t = A.directionOverride) ? t : S(null != R ? C[R] : null, C[w]),
    {
      reducedMotion: D
    } = i.useContext(d.CZY),
    L = i.useContext(h.A),
    x = C[w].impressionName,
    M = O(y({}, C[w].impressionProperties), {
      location_stack: N
    });
  L({
    type: l.ImpressionTypes.MODAL,
    name: x,
    properties: M,
    _stackContext: {
      isSlide: true
    }
  });
  let {
    ref: j,
    width: k = 0,
    height: U = 0
  } = (0, p.Ay)(w), G = y({}, I, A.springConfig, D.enabled ? {
    clamp: true
  } : null), F = (0, f.zhh)({
    width: null != (n = A.width) ? n : k,
    height: U,
    config: G
  }, null == R ? "animate-never" : "respect-motion-settings"), V = (0, f.pnh)(w, {
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
      n === w && null != A.onSlideReady && A.onSlideReady(n)
    }
  }, null == R ? "animate-never" : "respect-motion-settings"), B = (0, c.A)(P), {
    width: H,
    centered: Y = true
  } = A, W = u.Fr && !A.shouldUseMediaQueriesForSizing ? "100%" : F.width.to(e => "string" == typeof e ? e : Math.round(e)), K = u.Fr && !A.shouldUseMediaQueriesForSizing ? "100%" : F.height.to(e => Math.round(e)), z = u.Fr ? {} : Y ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, q = u.Fr ? {} : {
    overflow: null != (a = A.overflow) ? a : "hidden"
  }, Z = i.useMemo(() => ({
    width: u.Fr && !A.shouldUseMediaQueriesForSizing ? "100%" : H
  }), [A.shouldUseMediaQueriesForSizing, H]);
  return (0, r.jsx)(s.animated.div, {
    style: y({
      position: "relative",
      minWidth: W,
      minHeight: K
    }, q),
    className: o()({
      [g.f]: A.shouldUseMediaQueriesForSizing
    }),
    children: V((e, t, n) => {
      let {
        key: i
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, r.jsx)(s.animated.div, {
        ref: t === w ? j : null,
        style: y({
          position: "absolute",
          display: E,
          flexDirection: "column",
          backfaceVisibility: "hidden"
        }, Z, z, D.enabled ? a : y({
          left: e.value.to(T("left", B)),
          right: e.value.to(T("right", B))
        }, b && a)),
        className: o()({
          [g.o]: A.shouldUseMediaQueriesForSizing
        }),
        children: C[t].children
      }, i)
    })
  })
}