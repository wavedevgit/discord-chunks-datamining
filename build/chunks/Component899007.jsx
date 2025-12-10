/** Chunk was on web.js **/
/** chunk id: 899007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk420660 = require("./420660.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk140701 = require("./140701.js"),
  Chunk158776 = require("./158776.js"),
  Chunk74538 = require("./74538.js"),
  Chunk998502 = require("./998502.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk369566 = require("./369566.js"),
  Chunk518950 = require("./518950.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk671955 = require("./671955.js"),
  Chunk66856 = require("./66856.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function R(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: a,
    channelId: m,
    themeType: T,
    animateOnHover: A,
    onOpenProfile: R,
    className: w,
    previewStatus: D
  } = e, {
    theme: x
  } = (0, b.z)(), {
    analyticsLocations: L
  } = (0, d.ZP)(u.Z.AVATAR), {
    trackUserProfileAction: j
  } = (0, h.KZ)(), M = _.ZP.isPremiumAtLeast(null == n ? true : n.premiumType, v.PremiumTypes.TIER_2), k = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, m), [t, m]), {
    live: U
  } = (0, g.Z)(t.id), [G] = U, {
    status: Z,
    isMobileOnline: B
  } = (0, s.cj)([p.Z], () => ({
    status: (0, c.Z)(G) ? O.Skl.STREAMING : p.Z.getStatus(t.id),
    isMobileOnline: p.Z.isMobileOnline(t.id)
  })), F = true !== D ? D : Z, V = [S.l.MODAL, S.l.MODAL_V2].includes(T) ? l.EFr.SIZE_120 : l.EFr.SIZE_80, H = o()(I.avatar, w), {
    avatarDecorationSrc: Y,
    avatarSrc: W,
    eventHandlers: K
  } = (0, E.Z)({
    userId: t.id,
    guildId: null != n ? n.guildId : a,
    size: V,
    animateOnHover: A
  }), z = (0, r.jsx)(P, {
    src: W,
    avatarDecoration: Y,
    size: V,
    "aria-label": t.username,
    imageClassName: null != R ? I.overlay : true,
    status: k ? O.Skl.UNKNOWN : F,
    statusBackdropColor: M && !k ? (0, l.QFD)(x) : true,
    isMobile: B,
    statusTooltip: true,
    statusTooltipDelay: y.vB
  });
  return null == R ? (0, r.jsx)("div", N(C({}, K), {
    className: H,
    children: z
  })) : (0, r.jsx)(l.P3F, N(C({}, K), {
    className: o()(H, I.clickable),
    focusProps: {
      ringClassName: I.focusRing
    },
    onClick: () => {
      j({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: L
      }), null == R || R()
    },
    children: z
  }))
}