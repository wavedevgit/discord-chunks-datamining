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
  _ = {};

function p() {
  let e = Chunk944486.Z.getChannelId();
  if (null == module) return;
  let t = Chunk592125.Z.getChannel(module);
  if (null == exports || null == exports.guild_id) return;
  let n = exports.guild_id;
  if (null == _[module] && (_[module] = 0), exports.isThread() || Chunk9156.ZP.isOptInEnabled(require) && !Chunk9156.ZP.isChannelOrParentOptedIn(require, exports.id)) {
    delete _[module], null != d[require] && d[require].delete(module);
    return
  }
  return (_[module]++, null == d[require] && (d[require] = new Set), Chunk9156.ZP.isFavorite(require, module)) ? void d[require].delete(module) : (null == f[require] || !f[require].has(module)) && _[module] > u ? (d[require].add(module), true) : true
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
    if (this.waitFor(o.Z, s.Z, l.ZP), this.syncWith([s.Z], p), null == e) return;
    let {
      suggestedChannels: r,
      dismissedSuggestions: i,
      channelOpensByChannelId: a
    } = e;
    if (null != r)
      for (let e in r) t = new Set(r[e]), d[e] = true !== t ? t : new Set;
    if (null != i)
      for (let e in i) n = new Set(i[e]), f[e] = true !== n ? n : new Set;
    _ = null != a ? a : {}
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