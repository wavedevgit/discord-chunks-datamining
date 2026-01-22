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
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
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

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let S = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: true
};

function I(e, t) {
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
    fadeInOut: y = false
  } = e, v = A(e, ["contentDisplay", "fadeInOut"]), C = {}, {
    analyticsLocations: N
  } = (0, m.Ay)();
  i.Children.forEach(v.children, (e, t) => {
    C[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let R = v.activeSlide,
    w = (0, _.A)(v.activeSlide),
    P = null != (t = v.directionOverride) ? t : I(null != w ? C[w] : null, C[R]),
    {
      reducedMotion: D
    } = i.useContext(d.CZY),
    x = i.useContext(h.A),
    L = C[R].impressionName,
    j = O(b({}, C[R].impressionProperties), {
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
  } = (0, p.Ay)(R), G = b({}, S, v.springConfig, D.enabled ? {
    clamp: true
  } : null), V = (0, f.zhh)({
    width: null != (n = v.width) ? n : k,
    height: U,
    config: G
  }, null == w ? "animate-never" : "respect-motion-settings"), F = (0, f.pnh)(R, {
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
      n === R && null != v.onSlideReady && v.onSlideReady(n)
    }
  }, null == w ? "animate-never" : "respect-motion-settings"), B = (0, c.A)(P), {
    width: H,
    centered: Y = true
  } = v, W = u.Fr && !v.shouldUseMediaQueriesForSizing ? "100%" : V.width.to(e => "string" == typeof e ? e : Math.round(e)), K = u.Fr && !v.shouldUseMediaQueriesForSizing ? "100%" : V.height.to(e => Math.round(e)), z = u.Fr ? {} : Y ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, q = u.Fr ? {} : {
    overflow: null != (a = v.overflow) ? a : "hidden"
  }, X = i.useMemo(() => ({
    width: u.Fr && !v.shouldUseMediaQueriesForSizing ? "100%" : H
  }), [v.shouldUseMediaQueriesForSizing, H]);
  return (0, r.jsx)(o.animated.div, {
    style: b({
      position: "relative",
      minWidth: W,
      minHeight: K
    }, q),
    className: s()({
      [g.f]: v.shouldUseMediaQueriesForSizing
    }),
    children: F((e, t, n) => {
      let {
        key: i
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, r.jsx)(o.animated.div, {
        ref: t === R ? M : null,
        style: b({
          position: "absolute",
          display: E,
          flexDirection: "column",
          backfaceVisibility: "hidden"
        }, X, z, D.enabled ? a : b({
          left: e.value.to(T("left", B)),
          right: e.value.to(T("right", B))
        }, y && a)),
        className: s()({
          [g.o]: v.shouldUseMediaQueriesForSizing
        }),
        children: C[t].children
      }, i)
    })
  })
}