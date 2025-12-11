/** Chunk was on 9536 **/
/** chunk id: 471613, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, i, Chunk31775 = require("./31775.js"),
  a = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk40572 = require("./40572.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js");
let g = {},
  m = {},
  f = 0,
  p = new(a())({
    max: 5,
    maxAge: Chunk70956.Z.Millis.HOUR
  });
class b extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk914010.Z)
  }
  isUploadingEmoji() {
    return f > 0
  }
  getEmojiRevision(e) {
    var t;
    return null != (t = g[e]) ? t : 0
  }
  getEmojis(e) {
    return m[e]
  }
  getEmojiRawAsset(e) {
    return p.get(e)
  }
}(r = "displayName") in b ? Object.defineProperty(b, r, {
  value: "GuildSettingsEmojiStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[r] = "GuildSettingsEmojiStore";
let h = new b(Chunk570140.Z, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: t,
      emojiId: n
    } = e;
    m[t] = m[t].filter(e => e.id !== n)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    m[t] = n.map(e => new c.Z(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    m[t] = []
  },
  EMOJI_UPLOAD_START: function() {
    f++
  },
  EMOJI_UPLOAD_STOP: function() {
    f--
  },
  EMOJI_CACHE_RAW_EMOJI_ASSET: function(e) {
    let {
      emojiId: t,
      userImage: n
    } = e;
    p.set(t, n)
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    g[n] = (null != (t = g[n]) ? t : 0) + 1
  }
})