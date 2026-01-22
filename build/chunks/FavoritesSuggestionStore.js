/** Chunk was on web.js **/
/** chunk id: 240935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 50,
  d = {},
  f = {},
  p = {};

function _() {
  let e = o.A.getChannelId();
  if (null == e) return;
  let t = s.A.getChannel(e);
  if (null == t || null == t.guild_id) return;
  let n = t.guild_id;
  if (null == p[e] && (p[e] = 0), t.isThread() || l.Ay.isOptInEnabled(n) && !l.Ay.isChannelOrParentOptedIn(n, t.id)) {
    delete p[e], null != d[n] && d[n].delete(e);
    return
  }
  return (p[e]++, null == d[n] && (d[n] = new Set), l.Ay.isFavorite(n, e)) ? void d[n].delete(e) : (null == f[n] || !f[n].has(e)) && p[e] > u ? (d[n].add(e), true) : true
}

function h(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return null == f[t] && (f[t] = new Set), f[t].add(n), d[t].delete(n), true
}
class m extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, n;
    if (this.waitFor(s.A, o.A, l.Ay), this.syncWith([o.A], _), null == e) return;
    let {
      suggestedChannels: r,
      dismissedSuggestions: i,
      channelOpensByChannelId: a
    } = e;
    if (null != r)
      for (let e in r) t = new Set(r[e]), d[e] = true !== t ? t : new Set;
    if (null != i)
      for (let e in i) n = new Set(i[e]), f[e] = true !== n ? n : new Set;
    p = null != a ? a : {}
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
c(m, "displayName", "FavoritesSuggestionStore"), c(m, "persistKey", "FavoritesSuggestionStore");
let g = new m(Chunk73153.h, {
  DISMISS_FAVORITE_SUGGESTION: h
})