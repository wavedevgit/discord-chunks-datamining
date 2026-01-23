/** Chunk was on web.js **/
/** chunk id: 21119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk994500 = require("./994500.js"),
  Chunk755915 = require("./755915.js");

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
  d = new Map(_.userAffinities.filter(e => !s.A.isBlockedOrIgnored(e.otherUserId)).map(e => [e.otherUserId, e]))
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

function y() {
  _ = c({}, p), d = new Map, f = false
}
class b extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(s.A), null != e) {
      var t;
      _.userAffinities = e.userAffinities, _.userFlags = null != (t = e.userFlags) ? t : {}, _.lastFetched = e.lastFetched, h()
    }
    this.syncWith([s.A], h)
  }
  shouldFetch() {
    if (!f) return Date.now() - _.lastFetched > o.e
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
    return (null != (n = null == (i = d.get(t)) ? true : i.communicationProbability) ? n : 0) - (null != (r = null == (a = d.get(e)) ? true : a.communicationProbability) ? r : 0)
  }
  compareByDmProbability(e, t) {
    var n, r, i, a;
    return (null != (n = null == (i = d.get(t)) ? true : i.dmProbability) ? n : 0) - (null != (r = null == (a = d.get(e)) ? true : a.dmProbability) ? r : 0)
  }
  getUserAffinity(e) {
    return d.get(e)
  }
  getState() {
    return _
  }
  isHighlyAffinedVCUser(e) {
    var t, n;
    return (null != (t = null == (n = d.get(e)) ? true : n.vcProbability) ? t : 0) > u
  }
}
l(b, "displayName", "UserAffinitiesV2Store"), l(b, "persistKey", "UserAffinitiesStoreV2");
let O = new b(Chunk73153.h, {
  LOAD_USER_AFFINITIES_V2: m,
  LOAD_USER_AFFINITIES_V2_SUCCESS: g,
  LOAD_USER_AFFINITIES_V2_FAILURE: E,
  LOGOUT: y
})