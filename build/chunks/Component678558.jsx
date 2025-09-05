/** Chunk was on web.js **/
/** chunk id: 678558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk125529 = require("./125529.jsx"),
  Chunk314884 = require("./314884.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk879892 = require("./879892.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131092 = require("./131092.js");

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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
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
    targetBoostedGuildTier: S,
    onClose: N = () => {},
    closeLayer: R = () => {},
    pauseAnimation: P = false,
    applicationId: w,
    handleSubscribeModalClose: D,
    withHighlight: x = false,
    icon: L,
    intent: j
  } = e, k = C(e, ["analyticsLocation", "analyticsSourceLocation", "guild", "buttonText", "targetBoostedGuildTier", "onClose", "closeLayer", "pauseAnimation", "applicationId", "handleSubscribeModalClose", "withHighlight", "icon", "intent"]), {
    analyticsLocations: M
  } = (0, f.ZP)(), U = (0, d.bp)() === b.IlC.POPOUT, [G, B] = i.useState(false), {
    fractionalState: Z
  } = (0, _.Z)(), F = (0, s.e7)([h.Z], () => h.Z.hasFetched);
  i.useEffect(() => {
    F || (0, u.X8)()
  }, [F]);
  let V = (0, g.vx)(h.Z.boostSlots),
    H = null != S ? Math.max((0, g.KK)(a, S), 1) : 1,
    Y = (0, g.aq)({
      fractionalState: Z
    }),
    W = async () => {
      B(true), await (0, E.u)({
        analyticsLocations: M,
        analyticsLocation: t,
        analyticsSourceLocation: n,
        guild: a,
        numberOfBoostsToAdd: H,
        onClose: N,
        closeLayer: R,
        inPopout: U,
        applicationId: w,
        handleSubscribeModalClose: D,
        intent: j
      }), B(false)
    }, K = m.Z.getPremiumTypeSubscription(), z = (0, r.jsxs)("div", {
      className: v.button,
      children: [L, null != I ? I : O.intl.string(O.t.gKmQ1N)]
    }), q = false;
  return ((q = null !== K && !(V.length > 0) && (null == K ? true : K.isPausedOrPausePending) && Z === y.a$.NONE) && (z = (0, r.jsxs)("div", {
    className: v.button,
    children: [(0, r.jsx)(c.mBM, {
      size: "xs",
      className: v.buttonIcon
    }), " ", z]
  }), k.disabled = true), null != Y) ? (0, r.jsx)(p.Z, {
    text: Y,
    "aria-label": false,
    children: e => (0, r.jsx)(c.gtL, A(T(A(T({
      "data-migration-pending": true
    }, e), {
      disabled: true,
      size: l.zx.Sizes.SMALL,
      pauseAnimation: P
    }), k), {
      children: z
    }))
  }) : (0, r.jsx)(c.gtL, A(T({
    "data-migration-pending": true,
    size: l.zx.Sizes.SMALL
  }, k), {
    className: o()(k.className, {
      [v.buttonHighlighted]: x
    }),
    submitting: G,
    onClick: W,
    pauseAnimation: P,
    children: z
  }))
}