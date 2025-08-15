/** Chunk was on web.js **/
/** chunk id: 906605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Sc: () => _,
  UP: () => p,
  Zx: () => d,
  _s: () => f
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk339085 = require("./339085.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk106301 = require("./106301.js"),
  Chunk981631 = require("./981631.js");

function d(e, t) {
  var n;
  if (null == e) return void _(t);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS",
    status: e,
    saveAsDefault: t
  }), l.default.track(u.rMx.SET_HANG_STATUS, {
    status_type: e,
    channel_id: s.Z.getVoiceChannelId(),
    guild_id: null == (n = a.Z.getChannel(s.Z.getVoiceChannelId())) ? true : n.guild_id,
    media_session_id: o.Z.getMediaSessionId()
  })
}

function f(e, t, n) {
  var i;
  if ("" === e || null == t) return void _(n);
  r.Z.dispatch({
    type: "UPDATE_HANG_STATUS_CUSTOM",
    emoji: t,
    status: e,
    saveAsDefault: n
  }), l.default.track(u.rMx.SET_HANG_STATUS, {
    status_type: e,
    channel_id: s.Z.getVoiceChannelId(),
    guild_id: null == (i = a.Z.getChannel(s.Z.getVoiceChannelId())) ? true : i.guild_id,
    media_session_id: o.Z.getMediaSessionId()
  })
}

function _(e) {
  var t;
  r.Z.dispatch({
    type: "CLEAR_HANG_STATUS",
    saveAsDefault: e
  }), l.default.track(u.rMx.CLEAR_HANG_STATUS, {
    channel_id: s.Z.getVoiceChannelId(),
    guild_id: null == (t = a.Z.getChannel(s.Z.getVoiceChannelId())) ? true : t.guild_id,
    media_session_id: o.Z.getMediaSessionId()
  })
}

function p() {
  let e = [Chunk106301.Z.getCustomHangStatus(), ...Chunk106301.Z.getRecentCustomStatuses()].filter(e => {
    var t;
    return null != e && null != e.emoji && (null == (t = e.emoji) ? true : t.id) != null && null == i.ZP.getCustomEmojiById(e.emoji.id)
  });
  module.length > 0 && Chunk570140.Z.dispatch({
    type: "DELETE_INVALID_HANG_STATUSES",
    statuses: module
  })
}