/** Chunk was on web.js **/
/** chunk id: 678558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk589358 = require("./589358.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk314884 = require("./314884.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk879892 = require("./879892.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132810 = require("./132810.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = e => {
  let {
    analyticsLocation: t,
    analyticsSourceLocation: n,
    guild: a,
    buttonText: I,
    targetBoostedGuildTier: A,
    onClose: P = () => {},
    closeLayer: R = () => {},
    pauseAnimation: D = false,
    applicationId: w,
    handleSubscribeModalClose: x,
    withHighlight: L = false,
    icon: j,
    intent: M,
    useExpressiveButton: k = false
  } = e, U = N(e, ["analyticsLocation", "analyticsSourceLocation", "guild", "buttonText", "targetBoostedGuildTier", "onClose", "closeLayer", "pauseAnimation", "applicationId", "handleSubscribeModalClose", "withHighlight", "icon", "intent", "useExpressiveButton"]), {
    analyticsLocations: G
  } = (0, p.ZP)(), Z = (0, m.bp)() === y.IlC.POPOUT, [B, F] = i.useState(false), {
    fractionalState: V
  } = (0, _.Z)(), H = (0, s.e7)([h.Z], () => h.Z.hasFetched);
  i.useEffect(() => {
    H || (0, f.X8)()
  }, [H]);
  let Y = (0, E.vx)(h.Z.boostSlots),
    W = null != A ? Math.max((0, E.KK)(a, A), 1) : 1,
    K = (0, E.aq)({
      fractionalState: V
    }),
    z = async () => {
      F(true), await (0, b.u)({
        analyticsLocations: G,
        analyticsLocation: t,
        analyticsSourceLocation: n,
        guild: a,
        numberOfBoostsToAdd: W,
        onClose: P,
        closeLayer: R,
        inPopout: Z,
        applicationId: w,
        handleSubscribeModalClose: x,
        intent: M
      }), F(false)
    }, q = g.Z.getPremiumTypeSubscription(), Q = (0, r.jsxs)("div", {
      className: S.button,
      children: [j, null != I ? I : v.intl.string(v.t.gKmQ1G)]
    }), X = false;
  return ((X = null !== q && !(Y.length > 0) && (null == q ? true : q.isPausedOrPausePending) && V === O.a$.NONE) && (Q = (0, r.jsxs)("div", {
    className: S.button,
    children: [(0, r.jsx)(d.mBM, {
      size: "xs",
      className: S.buttonIcon
    }), " ", Q]
  }), U.disabled = true), null != K) ? k ? (0, r.jsx)(c.u, {
    text: K,
    children: (0, r.jsx)(d.Button, {
      variant: "expressive",
      icon: d.mBM,
      iconPosition: "start",
      disabled: true,
      text: null != I ? I : v.intl.string(v.t.gKmQ1G)
    })
  }) : (0, r.jsx)(l.Z, {
    text: K,
    "aria-label": false,
    children: e => (0, r.jsx)(d.gtL, C(T(C(T({
      "data-migration-pending": true
    }, e), {
      disabled: true,
      size: u.zx.Sizes.SMALL,
      pauseAnimation: D
    }), U), {
      children: Q
    }))
  }) : k ? (0, r.jsx)(d.Button, {
    variant: "expressive",
    disabled: X,
    loading: B,
    text: null != I ? I : v.intl.string(v.t.gKmQ1G),
    onClick: z
  }) : (0, r.jsx)(d.gtL, C(T({
    "data-migration-pending": true,
    size: u.zx.Sizes.SMALL
  }, U), {
    className: o()(U.className, {
      [S.buttonHighlighted]: L
    }),
    submitting: B,
    onClick: z,
    pauseAnimation: D,
    children: Q
  }))
}