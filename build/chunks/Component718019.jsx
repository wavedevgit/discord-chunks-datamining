/** Chunk was on web.js **/
/** chunk id: 718019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk960076 = require("./960076.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk178418 = require("./178418.js"),
  Chunk290863 = require("./290863.js"),
  Chunk927578 = require("./927578.js"),
  Chunk837921 = require("./837921.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk146655 = require("./146655.js"),
  Chunk854627 = require("./854627.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk735027 = require("./735027.js");

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

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function P(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: a,
    channelId: h,
    themeType: T,
    animateOnHover: N,
    onOpenProfile: P,
    className: D,
    previewStatus: L
  } = e, {
    theme: x
  } = (0, y.E)(), {
    analyticsLocations: M
  } = (0, d.Ay)(u.A.AVATAR), {
    trackUserProfileAction: j
  } = (0, m.NJ)(), k = _.Ay.isPremiumAtLeast(null == n ? true : n.premiumType, v.PremiumTypes.TIER_2), U = i.useMemo(() => t.isNonUserBot() || (0, f.c)(t, h), [t, h]), {
    live: G
  } = (0, g.A)(t.id), [V] = G, {
    status: F,
    isMobileOnline: B,
    isVROnline: H
  } = (0, s.cf)([p.A], () => ({
    status: (0, c.A)(V) ? O.clD.STREAMING : p.A.getStatus(t.id),
    isMobileOnline: p.A.isMobileOnline(t.id),
    isVROnline: p.A.isVROnline(t.id)
  })), Y = true !== L ? L : F, W = [A.d.MODAL, A.d.MODAL_V2].includes(T) ? l._3J.SIZE_120 : l._3J.SIZE_80, K = o()(S.my, D), {
    avatarDecorationSrc: z,
    avatarSrc: q,
    eventHandlers: Z
  } = (0, E.A)({
    userId: t.id,
    guildId: null != n ? n.guildId : a,
    size: W,
    animateOnHover: N
  }), Q = (0, r.jsx)(R, {
    src: q,
    avatarDecoration: z,
    size: W,
    "aria-label": t.username,
    imageClassName: null != P ? S.Lw : true,
    status: U ? O.clD.UNKNOWN : Y,
    statusBackdropColor: k && !U ? (0, l.C$5)(x) : true,
    isMobile: B,
    isVR: H,
    statusTooltip: true,
    statusTooltipDelay: b.In
  });
  return null == P ? (0, r.jsx)("div", w(C({}, Z), {
    className: K,
    children: Q
  })) : (0, r.jsx)(l.sqX, w(C({
    "aria-label": I.intl.string(I.t["+Xp3hq"])
  }, Z), {
    className: o()(K, S.vk),
    focusProps: {
      ringClassName: S.Rg
    },
    onClick: () => {
      j({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: M
      }), null == P || P()
    },
    children: Q
  }))
}