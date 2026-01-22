/** Chunk was on web.js **/
/** chunk id: 181079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk73153 = require("./73153.js"),
  Chunk617617 = require("./617617.js"),
  Chunk95701 = require("./95701.js"),
  Chunk652215 = require("./652215.js");

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
    type: c.rbe.GUILD_CATEGORY,
    position: e.order,
    guild_id: c.YYv
  })
}

function _() {
  var e, t, n;
  f = null != (e = null == (t = o.A.settings.favorites) ? true : t.muted) && e, d = {};
  let r = null == (n = o.A.settings.favorites) ? true : n.favoriteChannels;
  if (null == r) returnfalse;
  for (let e in r) {
    let t = r[e];
    d[e] = {
      id: e,
      nickname: "" !== t.nickname ? t.nickname : null,
      type: t.type,
      order: t.position,
      parentId: "0" !== t.parentId ? t.parentId : null
    }
  }
}
class h extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A), _(), this.syncWith([o.A], _)
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
    return e in d && d[e].type === a.Ip.CATEGORY ? p(d[e]) : null
  }
  getNickname(e) {
    var t;
    let n = this.getFavorite(e);
    return null != (t = null == n ? true : n.nickname) ? t : true
  }
}
u(h, "displayName", "FavoriteStore");
let m = new h(Chunk73153.h, {})