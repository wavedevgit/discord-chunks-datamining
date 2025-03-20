/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
});
var r, i, s, a = n(442837),
  l = n(570140),
  o = n(40572),
  A = n(914010);
let c = {},
  d = {},
  u = 0;
class g extends(s = a.ZP.Store) {
  initialize() {
    this.waitFor(A.Z)
  }
  isUploadingEmoji() {
    return u > 0
  }
  getEmojiRevision(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : 0
  }
  getEmojis(e) {
    return d[e]
  }
}
i = "GuildSettingsEmojiStore", (r = "displayName") in g ? Object.defineProperty(g, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[r] = i;
let f = new g(l.Z, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: t,
      emojiId: n
    } = e;
    d[t] = d[t].filter(e => e.id !== n)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    d[t] = n.map(e => new o.Z(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    d[t] = []
  },
  EMOJI_UPLOAD_START: function() {
    u++
  },
  EMOJI_UPLOAD_STOP: function() {
    u--
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    c[n] = (null !== (t = c[n]) && void 0 !== t ? t : 0) + 1
  }
})