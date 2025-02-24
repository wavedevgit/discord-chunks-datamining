/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  Z: () => h
}), n(47120);
var r, i = n(442837),
  l = n(570140),
  o = n(881052);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = new Map;
class c {
  handleSearchCountStart() {
    this.error = null, this.isFetching = !0
  }
  handleSearchCountSuccess(e) {
    this.counts = e, this.isFetching = !1, this.isInitialFetchComplete = !0
  }
  handleSearchCountFailure(e) {
    this.error = new o.Hx(e), this.isFetching = !1
  }
  constructor() {
    a(this, "isInitialFetchComplete", !1), a(this, "isFetching", !1), a(this, "error", null), a(this, "counts", null)
  }
}

function u(e) {
  var t;
  let n = null !== (t = s.get(e)) && void 0 !== t ? t : new c;
  return s.set(e, n), n
}

function d(e, t) {
  let n = s.get(e);
  return null != n ? t(n) : null
}
class p extends(r = i.ZP.Store) {
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
a(p, "displayName", "GlobalDiscoveryServersSearchCountStore");
let h = new p(l.Z, {
  CONNECTION_OPEN: function() {
    s.clear()
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
    s.forEach((e, t) => {
      n.has(t) || s.delete(t)
    })
  }
})