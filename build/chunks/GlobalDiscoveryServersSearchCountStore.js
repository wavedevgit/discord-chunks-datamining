/** Chunk was on 21738 **/
/** chunk id: 823448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Map;
class c {
  handleSearchCountStart() {
    this.error = null, this.isFetching = true
  }
  handleSearchCountSuccess(e) {
    this.counts = e, this.isFetching = false, this.isInitialFetchComplete = true
  }
  handleSearchCountFailure(e) {
    this.error = new a.LG(e), this.isFetching = false
  }
  constructor() {
    s(this, "isInitialFetchComplete", false), s(this, "isFetching", false), s(this, "error", null), s(this, "counts", null)
  }
}

function u(e) {
  var t;
  let n = null != (t = o.get(e)) ? t : new c;
  return o.set(e, n), n
}

function d(e, t) {
  let n = o.get(e);
  return null != n ? t(n) : null
}
class p extends(r = Chunk311907.Ay.Store) {
  getIsInitialFetchComplete(e) {
    return d(e, e => e.isInitialFetchComplete)
  }
  getIsFetchingCounts(e) {
    return d(e, e => e.isFetching)
  }
  getCounts(e) {
    return d(e, e => e.counts)
  }
}
s(p, "displayName", "GlobalDiscoveryServersSearchCountStore");
let h = new p(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    o.clear()
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function(e) {
    let {
      query: t
    } = e;
    u(t).handleSearchCountStart()
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function(e) {
    let {
      query: t,
      categoryCounts: n
    } = e;
    u(t).handleSearchCountSuccess(n)
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function(e) {
    let {
      query: t,
      error: n
    } = e;
    u(t).handleSearchCountFailure(n)
  },
  GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function(e) {
    let {
      ignoreQueries: t
    } = e, n = new Set(t);
    o.forEach((e, t) => {
      n.has(t) || o.delete(t)
    })
  }
})