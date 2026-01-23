/** Chunk was on web.js **/
/** chunk id: 69555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B7: () => v,
  Iq: () => m,
  My: () => O,
  eK: () => y,
  hS: () => g,
  jI: () => b,
  xA: () => E
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk508675 = require("./508675.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk242919 = require("./242919.js"),
  Chunk806246 = require("./806246.js"),
  Chunk60821 = require("./60821.js"),
  Chunk708455 = require("./708455.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h() {
  var e;
  return (0, c.A)(null != (e = s.A.getVoiceChannelId()) ? e : true)
}

function m(e, t) {
  var n;
  let i = null == (n = a.A.getChannel(s.A.getVoiceChannelId())) ? true : n.guild_id;
  null == e || null == i ? y(false, t) : (r.h.dispatch({
    type: "UPDATE_HANG_STATUS",
    status: e,
    guildId: i,
    saveAsDefault: t
  }), o.default.track(f.HAw.SET_HANG_STATUS, _({
    status_type: e,
    manual_update: !!t
  }, h())))
}

function g(e, t, n) {
  "" === e || null == t ? y(false, n) : (r.h.dispatch({
    type: "UPDATE_HANG_STATUS_CUSTOM",
    emoji: t,
    status: e,
    saveAsDefault: n
  }), o.default.track(f.HAw.SET_HANG_STATUS, _({
    status_type: d.Kk.CUSTOM,
    custom_status_text: e,
    custom_status_emoji_id: t.id,
    custom_status_emoji_name: t.name,
    manual_update: !!n
  }, h())))
}

function E(e, t) {
  null == e ? y(false, t) : (r.h.dispatch({
    type: "UPDATE_HANG_STATUS_GAME_ACTIVITY",
    applicationId: e,
    saveAsDefault: t
  }), o.default.track(f.HAw.SET_HANG_STATUS, _({
    status_type: "game_activity",
    manual_update: !!t
  }, h())))
}

function y(e, t) {
  r.h.dispatch({
    type: "CLEAR_HANG_STATUS",
    saveAsDefault: t
  }), o.default.track(f.HAw.CLEAR_HANG_STATUS, _({
    manual_update: !!e
  }, h()))
}

function b() {
  let e = [l.A.getCustomHangStatus(), ...l.A.getRecentStatuses(), ...l.A.getFavoritedStatuses()].filter(e => {
    var t;
    return !(null == e || (0, u.A)(e)) && null != e.emoji && (null == (t = e.emoji) ? true : t.id) != null && null == i.Ay.getCustomEmojiById(e.emoji.id)
  });
  e.length > 0 && r.h.dispatch({
    type: "DELETE_INVALID_HANG_STATUSES",
    statuses: e
  })
}

function O(e, t) {
  r.h.dispatch({
    type: "UPDATE_FAVORITE_HANG_STATUS",
    status: e,
    emoji: t
  })
}

function v() {
  r.h.dispatch({
    type: "RESET_HANG_STATUS_STATE"
  })
}