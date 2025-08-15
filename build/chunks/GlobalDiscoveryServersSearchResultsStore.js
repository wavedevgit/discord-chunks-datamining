/** Chunk was on web.js **/
/** chunk id: 356164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk128449 = require("./128449.js");

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
  _ = new Map;

function p(e) {
  return [s.BP, e.query, s.t0, e.categoryId, s.KL, e.languageCode].join("-")
}
class h {
  handleSearchStart() {
    this.error = null, this.isFetching = true
  }
  handleSearchFailure(e) {
    this.isFetching = false, this.isInitialFetchComplete = true, this.error = new o.Hx(e)
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
  let n = p(e),
    r = null != (t = f.get(n)) ? t : new h({
      query: e.query
    });
  return f.set(n, r), r
}

function g(e, t) {
  let n = p(e),
    r = f.get(n);
  return null != r ? t(r) : null
}

function E() {
  f.clear(), _.clear()
}

function b(e) {
  let {
    query: t,
    categoryId: n,
    languageCode: r,
    reset: i
  } = e, a = p({
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

function y(e) {
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
    _.set(e.id, e)
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
    null != e.query && (n.has(e.query) || f.delete(t))
  })
}

function I(e) {
  var t, n;
  let {
    guildId: r,
    profile: i
  } = e, a = _.get(r);
  if (null == a) returnfalse;
  _.set(r, d(c({}, a), {
    memberCount: null != (t = i.memberCount) ? t : a.memberCount,
    presenceCount: null != (n = i.onlineCount) ? n : a.presenceCount
  }))
}
class T extends(r = Chunk442837.ZP.Store) {
  getGuild(e) {
    return _.get(e)
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
l(T, "displayName", "GlobalDiscoveryServersSearchResultsStore");
let S = new T(Chunk570140.Z, {
  CONNECTION_OPEN: E,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_START: b,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS: y,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE: O,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: v,
  GUILD_PROFILE_FETCH_SUCCESS: I
})