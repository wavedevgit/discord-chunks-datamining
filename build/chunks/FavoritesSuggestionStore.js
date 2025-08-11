/** Chunk was on 4192 **/
/** chunk id: 18036, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js");

function o(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let d = {},
  c = {},
  g = {};

function f() {
  let e = Chunk944486.Z.getChannelId();
  if (null == module) return;
  let n = Chunk592125.Z.getChannel(module);
  if (null == exports || null == exports.guild_id) return;
  let t = exports.guild_id;
  if (null == g[module] && (g[module] = 0), exports.isThread() || Chunk9156.ZP.isOptInEnabled(require) && !Chunk9156.ZP.isChannelOrParentOptedIn(require, exports.id)) {
    delete g[module], null != d[require] && d[require].delete(module);
    return
  }
  return (g[module]++, null == d[require] && (d[require] = new Set), Chunk9156.ZP.isFavorite(require, module)) ? void d[require].delete(module) : (null == c[require] || !c[require].has(module)) && g[module] > 50 ? (d[require].add(module), true) : true
}
class h extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var n, t;
    if (this.syncWith([u.Z], f), null == e) return;
    let {
      suggestedChannels: l,
      dismissedSuggestions: i,
      channelOpensByChannelId: r
    } = e;
    if (null != l)
      for (let e in l) n = new Set(l[e]), d[e] = true !== n ? n : new Set;
    if (null != i)
      for (let e in i) t = new Set(i[e]), c[e] = true !== t ? t : new Set;
    g = null != r ? r : {}
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
o(h, "displayName", "FavoritesSuggestionStore"), o(h, "persistKey", "FavoritesSuggestionStore");
let C = new h(Chunk570140.Z, {
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      guildId: n,
      channelId: t
    } = e;
    return null == c[n] && (c[n] = new Set), c[n].add(t), d[n].delete(t), true
  }
})