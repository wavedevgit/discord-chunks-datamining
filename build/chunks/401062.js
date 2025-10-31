/** Chunk was on web.js **/
/** chunk id: 401062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kq: () => g,
  vy: () => m
});
var Chunk392711 = require("./392711.js"),
  Chunk544891 = require("./544891.js"),
  Chunk100527 = require("./100527.js"),
  Chunk339085 = require("./339085.js"),
  Chunk697426 = require("./697426.js"),
  Chunk100986 = require("./100986.js"),
  Chunk944486 = require("./944486.js"),
  Chunk696900 = require("./696900.js"),
  Chunk963838 = require("./963838.js"),
  Chunk353368 = require("./353368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk710111 = require("./710111.js");

function h(e) {
  let t = new AbortController,
    n = (0, r.throttle)(n => {
      c.Z.getVoiceChannelId() !== e && t.abort()
    }, 1e3);
  return {
    abortController: t,
    onRequestProgress: n
  }
}

function m(e, t, n) {
  var r;
  let {
    abortController: o,
    onRequestProgress: c
  } = h(e), p = null != (r = u.Z.getState().animationType) ? r : f.q.BASIC, m = {
    animation_type: p,
    animation_id: (0, d.Iu)(p, d.v)
  };
  i.tn.post({
    url: _.ANM.CUSTOM_CALL_SOUNDS(e),
    body: m,
    signal: o.signal,
    onRequestProgress: c,
    rejectWithError: true
  }).then(_.VqG, () => {
    if (o.signal.aborted) return
  }), (0, l.Z)([a.Z.CHANNEL_CALL], n, t, s.jy.ENTRY)
}

function g(e, t, n, r, a) {
  var c;
  let u = null != t.emojiId ? o.ZP.getCustomEmojiById(t.emojiId) : null,
    {
      abortController: d,
      onRequestProgress: f
    } = h(e),
    m = {
      sound_id: t.soundId,
      emoji_id: t.emojiId,
      emoji_name: null != (c = t.emojiName) ? c : null == u ? true : u.name
    };
  t.guildId !== p.X8 && (m.source_guild_id = t.guildId), i.tn.post({
    url: _.ANM.SEND_SOUNDBOARD_SOUND(e),
    body: m,
    signal: d.signal,
    onRequestProgress: f,
    rejectWithError: true
  }).then(_.VqG, () => {
    if (d.signal.aborted) return
  }), (0, l.Z)(null != r ? r : [], n, t, s.jy.DEFAULT, a)
}