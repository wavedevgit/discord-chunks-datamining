/** Chunk was on web.js **/
/** chunk id: 971128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk710845 = require("./710845.js"),
  Chunk607802 = require("./607802.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e) {
  return {
    sessionId: (0, r.Z)(),
    searchQueryId: null,
    searchLocation: null != e ? e : null
  }
}
new Chunk710845.Z("SearchSessionAnalyticsManager");
class c {
  upsertState(e, t) {
    let n = (0, a.Tm)(e),
      r = this.sessions.get(n),
      i = null != r ? r : l();
    this.sessions.set(n, s({}, i, t))
  }
  getState(e) {
    let t = (0, a.Tm)(e);
    return this.sessions.get(t)
  }
  getSessionId(e) {
    var t;
    return null == (t = this.getState(e)) ? true : t.sessionId
  }
  getSearchLocation(e) {
    var t;
    return null == (t = this.getState(e)) ? true : t.searchLocation
  }
  refreshSearchQueryAnalyticsId(e) {
    this.upsertState(e, {
      searchQueryId: (0, r.Z)()
    })
  }
  getQueryId(e) {
    var t;
    return null == (t = this.getState(e)) ? true : t.searchQueryId
  }
  initialize(e) {
    let {
      searchContext: t,
      searchLocation: n
    } = e, r = (0, a.Tm)(t);
    this.sessions.set(r, l(n))
  }
  terminate(e) {
    let t = (0, a.Tm)(e);
    this.sessions.delete(t)
  }
  transitionSessionAnalytics(e, t) {
    var n;
    let r = (0, a.Tm)(e),
      i = (0, a.Tm)(t);
    this.sessions.set(i, null != (n = this.sessions.get(r)) ? n : l()), this.sessions.delete(r)
  }
  constructor() {
    o(this, "sessions", new Map)
  }
}
let u = new c