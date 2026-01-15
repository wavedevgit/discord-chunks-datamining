/** Chunk was on web.js **/
/** chunk id: 752048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk699516 = require("./699516.js"),
  Chunk496232 = require("./496232.js");

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
let u = .5,
  d = new Map,
  f = false,
  p = Object.freeze({
    userAffinities: [],
    userFlags: {},
    lastFetched: 0
  }),
  _ = c({}, p);

function h() {
  d = new Map(_.userAffinities.filter(e => !o.Z.isBlockedOrIgnored(e.otherUserId)).map(e => [e.otherUserId, e]))
}

function m() {
  f = true
}

function g(e) {
  let {
    affineUsers: t,
    userFlags: n
  } = e;
  _.lastFetched = Date.now(), f = false, _.userAffinities = t, _.userFlags = n, h()
}

function E() {
  f = false
}

function b() {
  _ = c({}, p), d = new Map, f = false
}
class y extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(o.Z), null != e) {
      var t;
      _.userAffinities = e.userAffinities, _.userFlags = null != (t = e.userFlags) ? t : {}, _.lastFetched = e.lastFetched, h()
    }
    this.syncWith([o.Z], h)
  }
  shouldFetch() {
    if (!f) return Date.now() - _.lastFetched > s.K
  }
  isFetching() {
    return f
  }
  getUserAffinities() {
    return _.userAffinities
  }
  getUserAffinitiesMap() {
    return d
  }
  getUserFlags() {
    return _.userFlags
  }
  compare(e, t) {
    var n, r, i, a;
    return (null != (i = null == (n = d.get(t)) ? true : n.communicationProbability) ? i : 0) - (null != (a = null == (r = d.get(e)) ? true : r.communicationProbability) ? a : 0)
  }
  compareByDmProbability(e, t) {
    var n, r, i, a;
    return (null != (i = null == (n = d.get(t)) ? true : n.dmProbability) ? i : 0) - (null != (a = null == (r = d.get(e)) ? true : r.dmProbability) ? a : 0)
  }
  getUserAffinity(e) {
    return d.get(e)
  }
  getState() {
    return _
  }
  isHighlyAffinedVCUser(e) {
    var t, n;
    return (null != (n = null == (t = d.get(e)) ? true : t.vcProbability) ? n : 0) > u
  }
}
l(y, "displayName", "UserAffinitiesV2Store"), l(y, "persistKey", "UserAffinitiesStoreV2");
let O = new y(Chunk570140.Z, {
  LOAD_USER_AFFINITIES_V2: m,
  LOAD_USER_AFFINITIES_V2_SUCCESS: g,
  LOAD_USER_AFFINITIES_V2_FAILURE: E,
  LOGOUT: b
})