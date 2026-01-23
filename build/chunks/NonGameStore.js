/** Chunk was on web.js **/
/** chunk id: 953384, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => v
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk194862 = require("./194862.js"),
  Chunk611010 = require("./611010.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = Chunk927813.A.Millis.DAY,
  p = new Chunk194862.A,
  _ = "",
  h = null,
  m = false;

function g(e) {
  var t, n, r, i;
  return {
    id: e.id,
    name: e.name,
    executables: (null != (t = e.executables) ? t : []).map(l.lg),
    aliases: null != (n = e.aliases) ? n : [],
    icon: null != (r = e.icon_hash) ? r : true,
    thirdPartySkus: null != (i = e.third_party_skus) ? i : []
  }
}

function E() {
  r = true
}

function y() {
  r = false, m = true
}

function b(e) {
  let {
    nonGames: t,
    etag: n
  } = e;
  for (let e of (null != n && _ !== n && (p.clear(), _ = n), t)) p.set(e.id, g(e));
  r = true, h = Date.now(), m = true
}
class O extends(i = Chunk311907.Ay.PersistedStore) {
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
let v = new O(Chunk73153.h, {
  NON_GAMES_DATABASE_FETCH: E,
  NON_GAMES_DATABASE_FETCH_FAIL: y,
  NON_GAMES_DATABASE_UPDATE: b
})