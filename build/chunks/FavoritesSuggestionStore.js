/** Chunk was on 4756 **/
/** chunk id: 18036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = {},
  d = {},
  h = {};

function p() {
  let e = Chunk944486.Z.getChannelId();
  if (null == module) return;
  let t = Chunk592125.Z.getChannel(module);
  if (null == exports || null == exports.guild_id) return;
  let n = exports.guild_id;
  if (null == h[module] && (h[module] = 0), exports.isThread() || Chunk9156.ZP.isOptInEnabled(require) && !Chunk9156.ZP.isChannelOrParentOptedIn(require, exports.id)) {
    delete h[module], null != c[require] && c[require].delete(module);
    return
  }
  return (h[module]++, null == c[require] && (c[require] = new Set), Chunk9156.ZP.isFavorite(require, module)) ? void c[require].delete(module) : (null == d[require] || !d[require].has(module)) && h[module] > 50 ? (c[require].add(module), true) : true
}
class g extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n;
    if (this.syncWith([o.Z], p), null == e) return;
    let {
      suggestedChannels: i,
      dismissedSuggestions: r,
      channelOpensByChannelId: s
    } = e;
    if (null != i)
      for (let e in i) t = new Set(i[e]), c[e] = true !== t ? t : new Set;
    if (null != r)
      for (let e in r) n = new Set(r[e]), d[e] = true !== n ? n : new Set;
    h = null != s ? s : {}
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
u(g, "displayName", "FavoritesSuggestionStore"), u(g, "persistKey", "FavoritesSuggestionStore");
let f = new g(Chunk570140.Z, {
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null == d[t] && (d[t] = new Set), d[t].add(n), c[t].delete(n), true
  }
})