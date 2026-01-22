/** Chunk was on web.js **/
/** chunk id: 721923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
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
  if (a = R(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let w = e => {
  let {
    analyticsLocation: t,
    analyticsSourceLocation: n,
    guild: a,
    buttonText: S,
    targetBoostedGuildTier: T,
    onClose: R = () => {},
    closeLayer: w = () => {},
    pauseAnimation: P = false,
    applicationId: D,
    handleSubscribeModalClose: x,
    withHighlight: L = false,
    icon: j,
    intent: M,
    useExpressiveButton: k = false
  } = e, U = N(e, ["analyticsLocation", "analyticsSourceLocation", "guild", "buttonText", "targetBoostedGuildTier", "onClose", "closeLayer", "pauseAnimation", "applicationId", "handleSubscribeModalClose", "withHighlight", "icon", "intent", "useExpressiveButton"]), {
    analyticsLocations: G
  } = (0, p.Ay)(), V = (0, h.Us)() === y.BRT.POPOUT, [F, B] = i.useState(false), {
    fractionalState: H
  } = (0, _.A)(), Y = (0, o.bG)([m.A], () => m.A.hasFetched);
  i.useEffect(() => {
    Y || (0, f.CD)()
  }, [Y]);
  let W = (0, E.D$)(m.A.boostSlots),
    K = null != T ? Math.max((0, E.Os)(a, T), 1) : 1,
    z = (0, E.Nc)({
      fractionalState: H
    }),
    q = async () => {
      B(true), await (0, b.g)({
        analyticsLocations: G,
        analyticsLocation: t,
        analyticsSourceLocation: n,
        guild: a,
        numberOfBoostsToAdd: K,
        onClose: R,
        closeLayer: w,
        inPopout: V,
        applicationId: D,
        handleSubscribeModalClose: x,
        intent: M
      }), B(false)
    }, X = g.A.getPremiumTypeSubscription(), Z = (0, r.jsxs)("div", {
      className: v.x6,
      children: [j, null != S ? S : A.intl.string(A.t.gKmQ1G)]
    }), Q = false;
  return ((Q = null !== X && !(W.length > 0) && (null == X ? true : X.isPausedOrPausePending) && H === O.xc.NONE) && (Z = (0, r.jsxs)("div", {
    className: v.x6,
    children: [(0, r.jsx)(d.XAi, {
      size: "xs",
      className: v.iA
    }), " ", Z]
  }), U.disabled = true), null != z) ? k ? (0, r.jsx)(c.m_, {
    text: z,
    children: (0, r.jsx)(d.Button, {
      variant: "expressive",
      icon: d.XAi,
      iconPosition: "start",
      disabled: true,
      text: null != S ? S : A.intl.string(A.t.gKmQ1G)
    })
  }) : (0, r.jsx)(l.A, {
    text: z,
    "aria-label": false,
    children: e => (0, r.jsx)(d.wLn, C(I(C(I({
      "data-migration-pending": true
    }, e), {
      disabled: true,
      size: u.$n.Sizes.SMALL,
      pauseAnimation: P
    }), U), {
      children: Z
    }))
  }) : k ? (0, r.jsx)(d.Button, {
    variant: "expressive",
    disabled: Q,
    loading: F,
    text: null != S ? S : A.intl.string(A.t.gKmQ1G),
    onClick: q
  }) : (0, r.jsx)(d.wLn, C(I({
    "data-migration-pending": true,
    size: u.$n.Sizes.SMALL
  }, U), {
    className: s()(U.className, {
      [v.yj]: L
    }),
    submitting: F,
    onClick: q,
    pauseAnimation: P,
    children: Z
  }))
}