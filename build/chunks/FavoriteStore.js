/** Chunk was on web.js **/
/** chunk id: 853856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var r, Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk570140 = require("./570140.js"),
  Chunk581883 = require("./581883.js"),
  Chunk131704 = require("./131704.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {},
  f = false;

function p(e) {
  var t;
  return (0, l.createChannelRecord)({
    id: e.id,
    name: null != (t = e.nickname) ? t : "",
    type: c.d4z.GUILD_CATEGORY,
    position: e.order,
    guild_id: c.I_8
  })
}

function _() {
  var e, t, n;
  f = null != (n = null == (e = Chunk581883.Z.settings.favorites) ? true : module.muted) && require, d = {};
  let r = null == (t = Chunk581883.Z.settings.favorites) ? true : exports.favoriteChannels;
  if (null == r) returnfalse;
  for (let e in r) {
    let t = r[module];
    d[module] = {
      id: module,
      nickname: "" !== exports.nickname ? exports.nickname : null,
      type: exports.type,
      order: exports.position,
      parentId: "0" !== exports.parentId ? exports.parentId : null
    }
  }
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk581883.Z), _(), this.syncWith([Chunk581883.Z], _)
  }
  getFavoriteChannels() {
    return d
  }
  get favoriteServerMuted() {
    return f
  }
  isFavorite(e) {
    return null != e && null != d[e]
  }
  getFavorite(e) {
    if (null != e) return d[e]
  }
  getCategoryRecord(e) {
    return e in d && d[e].type === o.Dd.CATEGORY ? p(d[e]) : null
  }
  getNickname(e) {
    var t;
    let n = this.getFavorite(e);
    return null != (t = null == n ? true : n.nickname) ? t : true
  }
}
u(m, "displayName", "FavoriteStore");
let h = new m(Chunk570140.Z, {})