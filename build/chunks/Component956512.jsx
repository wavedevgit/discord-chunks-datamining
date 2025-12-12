/** Chunk was on web.js **/
/** chunk id: 956512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk946992 = require("./946992.js"),
  Chunk388032 = require("./388032.jsx");

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

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    currentUserId: t,
    message: I,
    application: C,
    channel: N,
    analyticsLocations: P,
    onView: R
  } = e, {
    staticBannerSrc: w,
    videoBannerSrc: D,
    bannerAspectRatio: x
  } = (0, d.E)(C), L = g.ZP.getApplicationIconURL({
    id: C.id,
    icon: C.icon
  }), j = (0, i.e7)([f.ZP, m.Z], () => f.ZP.getVisibleRunningGames().find(e => {
    let {
      id: t
    } = e;
    if (t === C.id) returntrue;
    let n = m.Z.getGameByApplication(C);
    return null != n && t === n.id
  })), M = (0, i.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()), k = (0, i.e7)([h.Z], () => h.Z.getChannelId()), U = b.default.extractTimestamp(I.id) + y.O < Date.now(), G = (0, r.jsx)(r.Fragment, {
    children: (0, a._0)(I, N, t)
  }), {
    newestAnalyticsLocation: Z
  } = (0, l.ZP)(P, s.Z.REQUEST_TO_STREAM_INVITE_EMBED), F = S.intl.string(v.default["5+172e"]), B = false;
  return U ? (F = S.intl.string(v.default.u4QmWl), B = true) : null != M ? (F = S.intl.string(v.default.P0wwmM), B = true) : k !== N.id ? (F = S.intl.string(v.default.qRXats), B = true) : null == j && (F = S.intl.string(v.default["43zohO"]), B = true), (0, r.jsx)(c.W, {
    header: S.intl.string(v.default.nAyuPp),
    title: C.name,
    staticBannerSrc: w,
    videoBannerSrc: D,
    bannerAspectRatio: x,
    iconSrc: null != L ? L : true,
    info: G,
    actions: I.author.id === t ? [] : [{
      label: F,
      trackingArea: u.j_.STREAM,
      disabled: B,
      onClick: () => {
        null != j && ((0, E.isWindows)() ? (0, p.Z)(j.pid) : (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("4093"), n.e("47863"), n.e("59416")]).then(n.bind(n, 60594));
          return t => (0, r.jsx)(e, A(T({}, t), {
            analyticsLocation: Z
          }))
        }))
      }
    }],
    trackingConfig: {
      id: C.id,
      linkType: O.U.REQUEST_TO_STREAM,
      guildId: N.guild_id,
      channelId: N.id,
      messageId: I.id,
      onView: R,
      isDeadEnd: U
    }
  })
}