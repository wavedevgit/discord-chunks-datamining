/** Chunk was on web.js **/
/** chunk id: 321889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk22382 = require("./22382.js"),
  Chunk747071 = require("./747071.js"),
  Chunk469121 = require("./469121.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  let {
    isPlaying: n,
    playSound: u
  } = (0, a.Z)(null != e ? (0, i.Z)(e.soundId) : null);
  return {
    isPlaying: n,
    playSound: r.useCallback(() => {
      var n;
      return !!u({
        volume: (0, o.Z)(null != (n = null == e ? true : e.volume) ? n : 1, s.AY.getSetting())
      }) && (l.default.track(c.rMx.SOUNDMOJI_PLAY, {
        guild_id: null == t ? true : t.guild_id,
        channel_id: null == t ? true : t.id,
        sound_guild_id: null == e ? true : e.guildId,
        sound_id: null == e ? true : e.soundId
      }), true)
    }, [null == t ? true : t.guild_id, null == t ? true : t.id, u, null == e ? true : e.guildId, null == e ? true : e.soundId, null == e ? true : e.volume])
  }
}