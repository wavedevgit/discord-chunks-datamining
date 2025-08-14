/** Chunk was on 62117 **/
/** chunk id: 18036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {},
  u = {},
  c = {};

function g() {
  let e = Chunk944486.Z.getChannelId();
  if (null == module) return;
  let t = Chunk592125.Z.getChannel(module);
  if (null == exports || null == exports.guild_id) return;
  let n = exports.guild_id;
  if (null == c[module] && (c[module] = 0), exports.isThread() || Chunk9156.ZP.isOptInEnabled(require) && !Chunk9156.ZP.isChannelOrParentOptedIn(require, exports.id)) {
    delete c[module], null != h[require] && h[require].delete(module);
    return
  }
  return (c[module]++, null == h[require] && (h[require] = new Set), Chunk9156.ZP.isFavorite(require, module)) ? void h[require].delete(module) : (null == u[require] || !u[require].has(module)) && c[module] > 50 ? (h[require].add(module), true) : true
}
class C extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n;
    if (this.syncWith([a.Z], g), null == e) return;
    let {
      suggestedChannels: i,
      dismissedSuggestions: s,
      channelOpensByChannelId: l
    } = e;
    if (null != i)
      for (let e in i) t = new Set(i[e]), h[e] = true !== t ? t : new Set;
    if (null != s)
      for (let e in s) n = new Set(s[e]), u[e] = true !== n ? n : new Set;
    c = null != l ? l : {}
  }
  getSuggestedChannelId(e) {
    return null
  }
  getState() {
    return {
      suggestedChannels: {},
      dismissedSuggestions: {},
      channelOpensByChannelId: {}
    }
  }
}
o(C, "displayName", "FavoritesSuggestionStore"), o(C, "persistKey", "FavoritesSuggestionStore");
let p = new C(Chunk570140.Z, {
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null == u[t] && (u[t] = new Set), u[t].add(n), h[t].delete(n), true
  }
})