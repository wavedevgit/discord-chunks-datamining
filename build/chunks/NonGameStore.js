/** Chunk was on web.js **/
/** chunk id: 273273, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk642047 = require("./642047.js"),
  Chunk973616 = require("./973616.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = Chunk70956.Z.Millis.DAY,
  p = new Chunk642047.Z,
  _ = "",
  h = null,
  m = false;

function g(e) {
  var t, n, r, i;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(l.BA),
    aliases: null != (n = e.aliases) ? n : [],
    icon: null != (r = e.icon_hash) ? r : true,
    thirdPartySkus: null != (i = e.third_party_skus) ? i : []
  }
}

function E() {
  r = true
}

function b() {
  r = false, m = true
}

function y(e) {
  let {
    nonGames: t,
    etag: n
  } = e;
  for (let e of (null != n && _ !== n && (p.clear(), _ = n), t)) p.set(e.id, g(e));
  r = true, h = Date.now(), m = true
}
class O extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.etag && (_ = e.etag), null == (t = e.nonGames) || t.forEach(e => p.set(e.id, e)))
  }
  getState() {
    return (0, u.isDesktop)() ? {
      etag: _,
      nonGames: p.values()
    } : {
      etag: "",
      nonGames: []
    }
  }
  get nonGames() {
    return p.values()
  }
  get fetching() {
    returntrue === r
  }
  get etag() {
    return _
  }
  get lastFetched() {
    return h
  }
  get hasAttemptedFetch() {
    return m
  }
  get ttl() {
    return f
  }
  getById(e) {
    return p.get(e)
  }
  canFetch() {
    return !r && (null == h || Date.now() >= h + f)
  }
}
d(O, "displayName", "NonGameStore"), d(O, "persistKey", "NonGameStore");
let v = new O(Chunk570140.Z, {
  NON_GAMES_DATABASE_FETCH: E,
  NON_GAMES_DATABASE_FETCH_FAIL: b,
  NON_GAMES_DATABASE_UPDATE: y
})