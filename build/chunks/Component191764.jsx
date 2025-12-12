/** Chunk was on web.js **/
/** chunk id: 191764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk287734 = require("./287734.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk699263 = require("./699263.js"),
  Chunk359110 = require("./359110.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk979651 = require("./979651.js"),
  Chunk626135 = require("./626135.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    user: t,
    activity: n,
    onAction: h,
    onClose: E
  } = e, {
    newestAnalyticsLocation: y
  } = (0, a.ZP)(), O = (0, i.e7)([d.Z, c.Z], () => {
    var e;
    return c.Z.getChannel(null == (e = d.Z.getVoiceStateForUser(t.id)) ? true : e.channelId)
  }), v = (0, i.e7)([u.Z], () => u.Z.getChannelId() === (null == O ? true : O.id));
  return (null == n ? true : n.type) !== _.IIU.HANG_STATUS || null == O ? null : (0, r.jsx)(p.O1, {
    text: v ? m.intl.string(m.t.BXxdl7) : m.intl.string(m.t["9C444m"]),
    fullWidth: true,
    onClick: e => {
      e.stopPropagation(), null == h || h({
        action: "PRESS_HANG_STATUS_BUTTON"
      }), o.default.selectVoiceChannel(O.id), (0, l.Kh)(O.id), f.default.track(_.rMx.HANG_STATUS_CTA_CLICKED, b(g({}, (0, s.Z)(O.id)), {
        source: y,
        other_user_id: t.id,
        cta_type: v ? "open" : "join"
      })), null == E || E()
    }
  })
}