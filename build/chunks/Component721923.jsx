/** Chunk was on web.js **/
/** chunk id: 721923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk502572 = require("./502572.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk923408 = require("./923408.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk178368 = require("./178368.js"),
  Chunk166403 = require("./166403.js"),
  Chunk473145 = require("./473145.js"),
  Chunk987144 = require("./987144.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk737211 = require("./737211.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = w(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let R = e => {
  let {
    analyticsLocation: t,
    analyticsSourceLocation: n,
    guild: a,
    buttonText: I,
    targetBoostedGuildTier: T,
    onClose: w = () => {},
    closeLayer: R = () => {},
    pauseAnimation: P = false,
    applicationId: D,
    handleSubscribeModalClose: L,
    withHighlight: x = false,
    icon: M,
    intent: j,
    useExpressiveButton: k = false
  } = e, U = N(e, ["analyticsLocation", "analyticsSourceLocation", "guild", "buttonText", "targetBoostedGuildTier", "onClose", "closeLayer", "pauseAnimation", "applicationId", "handleSubscribeModalClose", "withHighlight", "icon", "intent", "useExpressiveButton"]), {
    analyticsLocations: G
  } = (0, p.Ay)(), F = (0, h.Us)() === b.BRT.POPOUT, [V, B] = i.useState(false), {
    fractionalState: H
  } = (0, _.A)(), Y = (0, s.bG)([m.A], () => m.A.hasFetched);
  i.useEffect(() => {
    Y || (0, f.CD)()
  }, [Y]);
  let W = (0, E.D$)(m.A.boostSlots),
    K = null != T ? Math.max((0, E.Os)(a, T), 1) : 1,
    z = (0, E.Nc)({
      fractionalState: H
    }),
    q = async () => {
      B(true), await (0, y.g)({
        analyticsLocations: G,
        analyticsLocation: t,
        analyticsSourceLocation: n,
        guild: a,
        numberOfBoostsToAdd: K,
        onClose: w,
        closeLayer: R,
        inPopout: F,
        applicationId: D,
        handleSubscribeModalClose: L,
        intent: j
      }), B(false)
    }, Z = g.A.getPremiumTypeSubscription(), Q = (0, r.jsxs)("div", {
      className: A.x6,
      children: [M, null != I ? I : v.intl.string(v.t.gKmQ1G)]
    }), X = false;
  return ((X = null !== Z && !(W.length > 0) && (null == Z ? true : Z.isPausedOrPausePending) && H === O.xc.NONE) && (Q = (0, r.jsxs)("div", {
    className: A.x6,
    children: [(0, r.jsx)(d.XAi, {
      size: "xs",
      className: A.iA
    }), " ", Q]
  }), U.disabled = true), null != z) ? k ? (0, r.jsx)(c.m_, {
    text: z,
    children: (0, r.jsx)(d.Button, {
      variant: "expressive",
      icon: d.XAi,
      iconPosition: "start",
      disabled: true,
      text: null != I ? I : v.intl.string(v.t.gKmQ1G)
    })
  }) : (0, r.jsx)(l.A, {
    text: z,
    "aria-label": false,
    children: e => (0, r.jsx)(d.wLn, C(S(C(S({
      "data-migration-pending": true
    }, e), {
      disabled: true,
      size: u.$n.Sizes.SMALL,
      pauseAnimation: P
    }), U), {
      children: Q
    }))
  }) : k ? (0, r.jsx)(d.Button, {
    variant: "expressive",
    disabled: X,
    loading: V,
    text: null != I ? I : v.intl.string(v.t.gKmQ1G),
    onClick: q
  }) : (0, r.jsx)(d.wLn, C(S({
    "data-migration-pending": true,
    size: u.$n.Sizes.SMALL
  }, U), {
    className: o()(U.className, {
      [A.yj]: x
    }),
    submitting: V,
    onClick: q,
    pauseAnimation: P,
    children: Q
  }))
}