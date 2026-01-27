/** Chunk was on web.js **/
/** chunk id: 351022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk324580 = require("./324580.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = new Map,
  p = new Map;

function _(e) {
  return [s.I9, e.query, s.OR, e.categoryId, s.O3, e.languageCode].join("-")
}
class h {
  handleSearchStart() {
    this.error = null, this.isFetching = true
  }
  handleSearchFailure(e) {
    this.isFetching = false, this.isInitialFetchComplete = true, this.error = new o.LG(e)
  }
  handleSearchSuccess(e) {
    let {
      total: t,
      guilds: n
    } = e;
    this.error = null, this.isFetching = false, this.isInitialFetchComplete = true, this.lastFetchTimestamp = Date.now(), null != t && (this.total = t);
    let r = [...this.guildIds];
    n.forEach(e => r.push(e.id)), this.guildIds = r, this.offset = r.length
  }
  constructor({
    query: e
  }) {
    l(this, "guildIds", []), l(this, "error", null), l(this, "offset", null), l(this, "total", null), l(this, "isFetching", false), l(this, "isInitialFetchComplete", false), l(this, "lastFetchTimestamp", null), l(this, "query", true), this.query = e
  }
}

function m(e) {
  var t;
  let n = _(e),
    r = null != (t = f.get(n)) ? t : new h({
      query: e.query
    });
  return f.set(n, r), r
}

function g(e, t) {
  let n = _(e),
    r = f.get(n);
  return null != r ? t(r) : null
}

function E() {
  f.clear(), p.clear()
}

function y(e) {
  let {
    query: t,
    categoryId: n,
    languageCode: r,
    reset: i
  } = e, a = _({
    query: t,
    categoryId: n,
    languageCode: r
  });
  i && f.delete(a), m({
    query: t,
    categoryId: n,
    languageCode: r
  }).handleSearchStart()
}

function b(e) {
  let {
    query: t,
    categoryId: n,
    languageCode: r,
    total: i,
    guilds: a
  } = e;
  m({
    query: t,
    categoryId: n,
    languageCode: r
  }).handleSearchSuccess({
    total: i,
    guilds: a
  }), a.forEach(e => {
    p.set(e.id, e)
  })
}

function O(e) {
  let {
    query: t,
    categoryId: n,
    languageCode: r,
    error: i
  } = e;
  m({
    query: t,
    categoryId: n,
    languageCode: r
  }).handleSearchFailure(i)
}

function v(e) {
  let {
    ignoreQueries: t
  } = e, n = new Set(t);
  f.forEach((e, t) => {
    null == e.query || n.has(e.query) || f.delete(t)
  })
}

function A(e) {
  var t, n;
  let {
    guildId: r,
    profile: i
  } = e, a = p.get(r);
  if (null == a) returnfalse;
  p.set(r, d(c({}, a), {
    memberCount: null != (t = i.memberCount) ? t : a.memberCount,
    presenceCount: null != (n = i.onlineCount) ? n : a.presenceCount
  }))
}
class I extends(r = Chunk311907.Ay.Store) {
  getGuild(e) {
    return p.get(e)
  }
  getGuildIds(e) {
    return g(e, e => e.guildIds)
  }
  getIsFetching(e) {
    return g(e, e => e.isFetching)
  }
  getIsInitialFetchComplete(e) {
    return g(e, e => e.isInitialFetchComplete)
  }
  getOffset(e) {
    return g(e, e => e.offset)
  }
  getTotal(e) {
    return g(e, e => e.total)
  }
  getLastFetchTimestamp(e) {
    return g(e, e => e.lastFetchTimestamp)
  }
  getError(e) {
    return g(e, e => e.error)
  }
  getErrorMessage(e) {
    return g(e, e => {
      var t;
      return null == (t = e.error) ? true : t.getAnyErrorMessage()
    })
  }
}
l(I, "displayName", "GlobalDiscoveryServersSearchResultsStore");
let S = new I(Chunk73153.h, {
  CONNECTION_OPEN: E,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: y,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: b,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: O,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: v,
  GUILD_PROFILE_FETCH_SUCCESS: A
})