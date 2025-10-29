/** Chunk was on web.js **/
/** chunk id: 956512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk758371 = require("./758371.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk880251 = require("./880251.js"),
  Chunk594190 = require("./594190.js"),
  Chunk562224 = require("./562224.js"),
  Chunk199902 = require("./199902.js"),
  Chunk77498 = require("./77498.js"),
  Chunk19780 = require("./19780.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915553 = require("./915553.js"),
  Chunk967249 = require("./967249.js"),
  Chunk978967 = require("./978967.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    currentUserId: t,
    message: T,
    application: A,
    channel: N,
    analyticsLocations: R,
    onView: P
  } = e, {
    staticBannerSrc: D,
    videoBannerSrc: w,
    bannerAspectRatio: L
  } = (0, d.E)(A), x = g.ZP.getApplicationIconURL({
    id: A.id,
    icon: A.icon
  }), M = (0, i.e7)([f.ZP, h.Z], () => f.ZP.getVisibleRunningGames().find(e => {
    let {
      id: t
    } = e;
    if (t === A.id) returntrue;
    let n = h.Z.getGameByApplication(A);
    return null != n && t === n.id
  })), k = (0, i.e7)([p.Z], () => p.Z.getCurrentUserActiveStream()), j = (0, i.e7)([m.Z], () => m.Z.getChannelId()), U = b.default.extractTimestamp(T.id) + y.O < Date.now(), G = (0, r.jsx)(r.Fragment, {
    children: (0, o._0)(T, N, t)
  }), {
    newestAnalyticsLocation: B
  } = (0, l.ZP)(R, s.Z.REQUEST_TO_STREAM_INVITE_EMBED), Z = I.intl.string(v.default["5+172e"]), F = false;
  return U ? (Z = I.intl.string(v.default.u4QmWl), F = true) : null != k ? (Z = I.intl.string(v.default.P0wwmM), F = true) : j !== N.id ? (Z = I.intl.string(v.default.qRXats), F = true) : null == M && (Z = I.intl.string(v.default["43zohO"]), F = true), (0, r.jsx)(c.W, {
    header: I.intl.string(v.default.nAyuPp),
    title: A.name,
    staticBannerSrc: D,
    videoBannerSrc: w,
    bannerAspectRatio: L,
    iconSrc: null != x ? x : true,
    info: G,
    actions: T.author.id === t ? [] : [{
      label: Z,
      trackingArea: u.j_.STREAM,
      disabled: F,
      onClick: () => {
        null != M && ((0, E.isWindows)() ? (0, _.Z)(M.pid) : (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("4093"), n.e("47863"), n.e("65174")]).then(n.bind(n, 60594));
          return t => (0, r.jsx)(e, C(S({}, t), {
            analyticsLocation: B
          }))
        }))
      }
    }],
    trackingConfig: {
      id: A.id,
      linkType: O.U.REQUEST_TO_STREAM,
      guildId: N.guild_id,
      channelId: N.id,
      messageId: T.id,
      onView: P
    }
  })
}