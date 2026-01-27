/** Chunk was on web.js **/
/** chunk id: 586583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk102597 = require("./102597.js"),
  Chunk904054 = require("./904054.js"),
  Chunk584014 = require("./584014.js"),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function u(e, t) {
  let {
    isPlaying: n,
    playSound: u
  } = (0, o.A)(null != e ? (0, i.A)(e.soundId) : null);
  return {
    isPlaying: n,
    playSound: r.useCallback(() => {
      var n;
      return !!u({
        volume: (0, a.A)(null != (n = null == e ? true : e.volume) ? n : 1, s.HO.getSetting())
      }) && (l.default.track(c.HAw.SOUNDMOJI_PLAY, {
        guild_id: null == t ? true : t.guild_id,
        channel_id: null == t ? true : t.id,
        sound_guild_id: null == e ? true : e.guildId,
        sound_id: null == e ? true : e.soundId
      }), true)
    }, [null == t ? true : t.guild_id, null == t ? true : t.id, u, null == e ? true : e.guildId, null == e ? true : e.soundId, null == e ? true : e.volume])
  }
}