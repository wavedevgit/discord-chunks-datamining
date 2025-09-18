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
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk106301 = require("./106301.js"),
  Chunk54332 = require("./54332.js"),
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
  let t = Chunk944486.Z.getVoiceChannelId(),
    n = Chunk19780.Z.getMediaSessionId();
  return null == exports ? {
    channel_id: true,
    guild_id: true,
    media_session_id: require,
    call_num_participants: 0
  } : {
    channel_id: exports,
    guild_id: null == (e = Chunk592125.Z.getChannel(exports)) ? true : module.guild_id,
    media_session_id: require,
    call_num_participants: Chunk938475.ZP.countVoiceStatesForChannel(exports)
  }
}

function m(e, t) {
  var n;
  let i = null == (n = a.Z.getChannel(s.Z.getVoiceChannelId())) ? true : n.guild_id;
  if (null == e || null == i) return void b(t);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS",
    status: e,
    guildId: i,
    saveAsDefault: t
  }), c.default.track(f.rMx.SET_HANG_STATUS, p({
    status_type: e
  }, h()))
}

function g(e, t, n) {
  if ("" === e || null == t) return void b(n);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS_CUSTOM",
    emoji: t,
    status: e,
    saveAsDefault: n
  }), c.default.track(f.rMx.SET_HANG_STATUS, p({
    status_type: e
  }, h()))
}

function E(e, t) {
  if (null == e) return void b(t);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS_GAME_ACTIVITY",
    applicationId: e,
    saveAsDefault: t
  }), c.default.track(f.rMx.SET_HANG_STATUS, p({
    status_type: "game_activity"
  }, h()))
}

function b(e) {
  r.Z.dispatch({
    type: "CLEAR_HANG_STATUS",
    saveAsDefault: e
  }), c.default.track(f.rMx.CLEAR_HANG_STATUS, p({}, h()))
}

function y() {
  let e = [Chunk106301.Z.getCustomHangStatus(), ...Chunk106301.Z.getRecentStatuses(), ...Chunk106301.Z.getFavoritedStatuses()].filter(e => {
    var t;
    return !(null == e || (0, d.Z)(e)) && null != e.emoji && (null == (t = e.emoji) ? true : t.id) != null && null == i.ZP.getCustomEmojiById(e.emoji.id)
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