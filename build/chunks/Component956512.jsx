/** Chunk was on web.js **/
/** chunk id: 956512, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk658805 = require("./658805.js"),
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

function C(e) {
  let t, {
      currentUserId: I,
      message: S,
      application: C,
      channel: N,
      analyticsLocations: R,
      onView: P
    } = e,
    {
      staticBannerSrc: w,
      videoBannerSrc: D,
      bannerAspectRatio: x
    } = (0, d.E)(C),
    L = g.ZP.getApplicationIconURL({
      id: C.id,
      icon: C.icon
    }),
    j = (0, i.e7)([f.ZP, h.Z], () => null != S.application ? f.ZP.getVisibleRunningGames().find(e => {
      let {
        id: t
      } = e;
      if (null == S.application) returnfalse;
      if (t === S.application.id) returntrue;
      let n = h.Z.getGameByName(S.application.name);
      return null != n && t === n.id
    }) : null),
    k = (0, i.e7)([p.Z], () => p.Z.getCurrentUserActiveStream()),
    M = (0, i.e7)([m.Z], () => m.Z.getChannelId()),
    U = b.default.extractTimestamp(S.id) + y.O < Date.now(),
    G = (0, r.jsx)(r.Fragment, {
      children: (0, o._0)(S, N, I)
    }),
    {
      newestAnalyticsLocation: B
    } = (0, l.ZP)(R, s.Z.REQUEST_TO_STREAM_INVITE_EMBED);
  return U ? t = v.intl.string(O.default.u4QmWl) : null != k ? t = v.intl.string(O.default.P0wwmJ) : M !== N.id ? t = v.intl.string(O.default.qRXatr) : null == j && (t = v.intl.string(O.default["43zohI"])), (0, r.jsx)(c.W, {
    header: v.intl.string(O.default.nAyuPj),
    title: C.name,
    staticBannerSrc: w,
    videoBannerSrc: D,
    bannerAspectRatio: x,
    iconSrc: null != L ? L : true,
    info: G,
    actions: S.author.id === I ? [] : [{
      label: v.intl.string(O.default["5+172d"]),
      trackingArea: u.j_.STREAM,
      disabledReason: t,
      onClick: () => {
        null != j && ((0, E.isWindows)() ? (0, _.Z)(j.pid) : (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("38697"), n.e("46746"), n.e("39173")]).then(n.bind(n, 60594));
          return t => (0, r.jsx)(e, A(T({}, t), {
            analyticsLocation: B
          }))
        }))
      }
    }],
    trackingConfig: {
      id: C.id,
      linkType: u.Un.REQUEST_TO_STREAM,
      onView: P
    }
  })
}