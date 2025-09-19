/** Chunk was on web.js **/
/** chunk id: 906605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Sc: () => b,
  UP: () => y,
  XE: () => E,
  Zx: () => m,
  _s: () => g,
  tg: () => O
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk339085 = require("./339085.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk106301 = require("./106301.js"),
  Chunk699263 = require("./699263.js"),
  Chunk54332 = require("./54332.js"),
  Chunk505905 = require("./505905.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h() {
  var e;
  return (0, Chunk699263.Z)(null != (e = Chunk944486.Z.getVoiceChannelId()) ? module : true)
}

function m(e, t) {
  var n;
  let i = null == (n = a.Z.getChannel(o.Z.getVoiceChannelId())) ? true : n.guild_id;
  if (null == e || null == i) return void b(t);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS",
    status: e,
    guildId: i,
    saveAsDefault: t
  }), s.default.track(f.rMx.SET_HANG_STATUS, p({
    status_type: e,
    manual_update: !!t
  }, h()))
}

function g(e, t, n) {
  if ("" === e || null == t) return void b(n);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS_CUSTOM",
    emoji: t,
    status: e,
    saveAsDefault: n
  }), s.default.track(f.rMx.SET_HANG_STATUS, p({
    status_type: d.tN.CUSTOM,
    custom_status_text: e,
    custom_status_emoji_id: t.id,
    custom_status_emoji_name: t.name,
    manual_update: !!n
  }, h()))
}

function E(e, t) {
  if (null == e) return void b(t);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS_GAME_ACTIVITY",
    applicationId: e,
    saveAsDefault: t
  }), s.default.track(f.rMx.SET_HANG_STATUS, p({
    status_type: "game_activity",
    manual_update: !!t
  }, h()))
}

function b(e) {
  r.Z.dispatch({
    type: "CLEAR_HANG_STATUS",
    saveAsDefault: e
  }), s.default.track(f.rMx.CLEAR_HANG_STATUS, p({
    manual_update: !!e
  }, h()))
}

function y() {
  let e = [Chunk106301.Z.getCustomHangStatus(), ...Chunk106301.Z.getRecentStatuses(), ...Chunk106301.Z.getFavoritedStatuses()].filter(e => {
    var t;
    return !(null == e || (0, u.Z)(e)) && null != e.emoji && (null == (t = e.emoji) ? true : t.id) != null && null == i.ZP.getCustomEmojiById(e.emoji.id)
  });
  module.length > 0 && Chunk570140.Z.dispatch({
    type: "DELETE_INVALID_HANG_STATUSES",
    statuses: module
  })
}

function O(e, t) {
  r.Z.dispatch({
    type: "UPDATE_FAVORITE_HANG_STATUS",
    status: e,
    emoji: t
  })
}