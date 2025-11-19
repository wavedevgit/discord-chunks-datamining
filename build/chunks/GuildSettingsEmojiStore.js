/** Chunk was on 2262 **/
/** chunk id: 471613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var l, r, Chunk31775 = require("./31775.js"),
  a = require.n(Chunk31775),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk40572 = require("./40572.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js");
let m = {},
  h = {},
  g = 0,
  f = new(a())({
    max: 5,
    maxAge: Chunk70956.Z.Millis.HOUR
  });
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk914010.Z)
  }
  isUploadingEmoji() {
    return g > 0
  }
  getEmojiRevision(e) {
    var t;
    return null != (t = m[e]) ? t : 0
  }
  getEmojis(e) {
    return h[e]
  }
  getEmojiRawAsset(e) {
    return f.get(e)
  }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
  value: "GuildSettingsEmojiStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[l] = "GuildSettingsEmojiStore";
let v = new b(Chunk570140.Z, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: t,
      emojiId: n
    } = e;
    h[t] = h[t].filter(e => e.id !== n)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    h[t] = n.map(e => new u.Z(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    h[t] = []
  },
  EMOJI_UPLOAD_START: function() {
    g++
  },
  EMOJI_UPLOAD_STOP: function() {
    g--
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
    m[n] = (null != (t = m[n]) ? t : 0) + 1
  }
})