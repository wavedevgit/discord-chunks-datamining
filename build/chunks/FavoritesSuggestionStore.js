/** Chunk was on web.js **/
/** chunk id: 18036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js");

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
  let e = s.Z.getChannelId();
  if (null == e) return;
  let t = o.Z.getChannel(e);
  if (null == t || null == t.guild_id) return;
  let n = t.guild_id;
  if (null == p[e] && (p[e] = 0), t.isThread() || l.ZP.isOptInEnabled(n) && !l.ZP.isChannelOrParentOptedIn(n, t.id)) {
    delete p[e], null != d[n] && d[n].delete(e);
    return
  }
  return (p[e]++, null == d[n] && (d[n] = new Set), l.ZP.isFavorite(n, e)) ? void d[n].delete(e) : (null == f[n] || !f[n].has(e)) && p[e] > u ? (d[n].add(e), true) : true
}

function h(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return null == f[t] && (f[t] = new Set), f[t].add(n), d[t].delete(n), true
}
class m extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n;
    if (this.waitFor(o.Z, s.Z, l.ZP), this.syncWith([s.Z], _), null == e) return;
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
let g = new m(Chunk570140.Z, {
  DISMISS_FAVORITE_SUGGESTION: h
})