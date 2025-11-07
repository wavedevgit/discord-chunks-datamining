/** Chunk was on 64982 **/
/** chunk id: 471613, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  p = 0,
  f = new(a())({
    max: 5,
    maxAge: Chunk70956.Z.Millis.HOUR
  });
class h extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk914010.Z)
  }
  isUploadingEmoji() {
    return p > 0
  }
  getEmojiRevision(e) {
    var t;
    return null != (t = g[e]) ? t : 0
  }
  getEmojis(e) {
    return m[e]
  }
  getEmojiRawAsset(e) {
    return f.get(e)
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "GuildSettingsEmojiStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "GuildSettingsEmojiStore";
let b = new h(Chunk570140.Z, {
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
    p++
  },
  EMOJI_UPLOAD_STOP: function() {
    p--
  },
  EMOJI_CACHE_RAW_EMOJI_ASSET: function(e) {
    let {
      emojiId: t,
      userImage: n
    } = e;
    f.set(t, n)
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    g[n] = (null != (t = g[n]) ? t : 0) + 1
  }
})