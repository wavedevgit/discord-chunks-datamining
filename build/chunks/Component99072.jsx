/** Chunk was on web.js **/
/** chunk id: 99072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk456060 = require("./456060.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk572211 = require("./572211.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk112150 = require("./112150.js"),
  Chunk15285 = require("./15285.js"),
  Chunk72432 = require("./72432.js"),
  Chunk616356 = require("./616356.js"),
  Chunk760751 = require("./760751.js"),
  Chunk383501 = require("./383501.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk820672 = require("./820672.js"),
  Chunk768349 = require("./768349.js"),
  Chunk426127 = require("./426127.js"),
  Chunk985018 = require("./985018.jsx");

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

function N(e) {
  let {
    currentUserId: t,
    message: S,
    application: T,
    channel: N,
    analyticsLocations: R,
    onView: w
  } = e, {
    staticBannerSrc: P,
    videoBannerSrc: D,
    bannerAspectRatio: x
  } = (0, d.f)(T), L = g.Ay.getApplicationIconURL({
    id: T.id,
    icon: T.icon
  }), j = (0, i.bG)([f.Ay, h.A], () => f.Ay.getVisibleRunningGames().find(e => {
    let {
      id: t
    } = e;
    if (t === T.id) returntrue;
    let n = h.A.getGameByApplication(T);
    return null != n && t === n.id
  })), M = (0, i.bG)([_.A], () => _.A.getCurrentUserActiveStream()), k = (0, i.bG)([m.A], () => m.A.getChannelId()), U = b.default.extractTimestamp(S.id) + y.M < Date.now(), G = (0, r.jsx)(r.Fragment, {
    children: (0, s.Wf)(S, N, t)
  }), {
    analyticsLocations: V
  } = (0, l.Ay)(R, o.A.REQUEST_TO_STREAM_INVITE_EMBED), F = v.intl.string(A.default["5+172e"]), B = false;
  return U ? (F = v.intl.string(A.default.u4QmWl), B = true) : null != M ? (F = v.intl.string(A.default.P0wwmM), B = true) : k !== N.id ? (F = v.intl.string(A.default.qRXats), B = true) : null == j && (F = v.intl.string(A.default["43zohO"]), B = true), (0, r.jsx)(c.h, {
    header: v.intl.string(A.default.nAyuPp),
    title: T.name,
    staticBannerSrc: P,
    videoBannerSrc: D,
    bannerAspectRatio: x,
    iconSrc: null != L ? L : true,
    info: G,
    actions: S.author.id === t ? [] : [{
      label: F,
      trackingArea: u.kY.STREAM,
      disabled: B,
      onClick: () => {
        null != j && ((0, E.isWindows)() ? (0, p.A)(j.pid) : (0, a.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("96811"), n.e("14476")]).then(n.bind(n, 648230));
          return t => (0, r.jsx)(e, C(I({}, t), {
            analyticsLocations: V
          }))
        }))
      }
    }],
    trackingConfig: {
      id: T.id,
      linkType: O.J.REQUEST_TO_STREAM,
      guildId: N.guild_id,
      channelId: N.id,
      messageId: S.id,
      onView: w,
      isDeadEnd: U
    }
  })
}