/** Chunk was on 3911 **/
/** chunk id: 240935, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {},
  c = {},
  h = {};

function g() {
  let e = o.A.getChannelId();
  if (null == e) return;
  let t = l.A.getChannel(e);
  if (null == t || null == t.guild_id) return;
  let n = t.guild_id;
  if (null == h[e] && (h[e] = 0), t.isThread() || a.Ay.isOptInEnabled(n) && !a.Ay.isChannelOrParentOptedIn(n, t.id)) {
    delete h[e], null != u[n] && u[n].delete(e);
    return
  }
  return (h[e]++, null == u[n] && (u[n] = new Set), a.Ay.isFavorite(n, e)) ? void u[n].delete(e) : (null == c[n] || !c[n].has(e)) && h[e] > 50 ? (u[n].add(e), true) : true
}
class p extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, n;
    if (this.waitFor(l.A, o.A, a.Ay), this.syncWith([o.A], g), null == e) return;
    let {
      suggestedChannels: i,
      dismissedSuggestions: s,
      channelOpensByChannelId: r
    } = e;
    if (null != i)
      for (let e in i) t = new Set(i[e]), u[e] = true !== t ? t : new Set;
    if (null != s)
      for (let e in s) n = new Set(s[e]), c[e] = true !== n ? n : new Set;
    h = null != r ? r : {}
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
d(p, "displayName", "FavoritesSuggestionStore"), d(p, "persistKey", "FavoritesSuggestionStore");
let f = new p(Chunk73153.h, {
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null == c[t] && (c[t] = new Set), c[t].add(n), u[t].delete(n), true
  }
})