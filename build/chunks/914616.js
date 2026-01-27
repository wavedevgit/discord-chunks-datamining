/** Chunk was on web.js **/
/** chunk id: 914616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rc: () => m,
  Wv: () => g
});
var Chunk735438 = require("./735438.js"),
  Chunk562465 = require("./562465.js"),
  Chunk793574 = require("./793574.js"),
  Chunk508675 = require("./508675.js"),
  Chunk807348 = require("./807348.js"),
  Chunk542675 = require("./542675.js"),
  Chunk309010 = require("./309010.js"),
  Chunk319191 = require("./319191.js"),
  Chunk667050 = require("./667050.js"),
  Chunk194486 = require("./194486.js"),
  Chunk652215 = require("./652215.js"),
  Chunk980504 = require("./980504.js");

function h(e) {
  let t = new AbortController,
    n = (0, r.throttle)(n => {
      c.A.getVoiceChannelId() !== e && t.abort()
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
  } = h(e), _ = null != (r = u.A.getState().animationType) ? r : f.B.BASIC, m = {
    animation_type: _,
    animation_id: (0, d.oS)(_, d.m4)
  };
  i.Bo.post({
    url: p.Rsh.CUSTOM_CALL_SOUNDS(e),
    body: m,
    signal: o.signal,
    onRequestProgress: c,
    rejectWithError: true
  }).then(p.FXj, () => {
    if (o.signal.aborted) return
  }), (0, l.A)([a.A.CHANNEL_CALL], n, t, s.ib.ENTRY)
}

function g(e, t, n, r, a) {
  var c;
  let u = null != t.emojiId ? o.Ay.getCustomEmojiById(t.emojiId) : null,
    {
      abortController: d,
      onRequestProgress: f
    } = h(e),
    m = {
      sound_id: t.soundId,
      emoji_id: t.emojiId,
      emoji_name: null != (c = t.emojiName) ? c : null == u ? true : u.name
    };
  t.guildId !== _.mV && (m.source_guild_id = t.guildId), i.Bo.post({
    url: p.Rsh.SEND_SOUNDBOARD_SOUND(e),
    body: m,
    signal: d.signal,
    onRequestProgress: f,
    rejectWithError: true
  }).then(p.FXj, () => {
    if (d.signal.aborted) return
  }), (0, l.A)(null != r ? r : [], n, t, s.ib.DEFAULT, a)
}