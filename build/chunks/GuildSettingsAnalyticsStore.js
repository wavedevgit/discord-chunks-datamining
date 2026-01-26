/** Chunk was on 39048 **/
/** chunk id: 907445, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk133977 = require("./133977.js"),
  l = require.n(Chunk133977),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = ["pct_retained", "new_members", "visitors", "communicators"],
  d = {},
  u = null;

function g(e) {
  let {
    guildId: t,
    stats: n
  } = e;
  u = null;
  let r = {},
    i = {},
    s = n[0],
    a = n[1];
  null != s && c.forEach(e => {
    if (null != s[e]) {
      let t = l()(e);
      null != a && 0 !== a[e] && (r["".concat(t, "Change")] = (s[e] - a[e]) * 100 / a[e]), i[t] = s[e]
    }
  }), d[t] = function(e) {
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
  }({}, i, r, d[t])
}

function m(e) {
  let {
    error: t
  } = e;
  u = t.code
}
class p extends(r = Chunk311907.Ay.Store) {
  getOverviewAnalytics(e) {
    return d[e]
  }
  getError() {
    return u
  }
}
o(p, "displayName", "GuildSettingsAnalyticsStore");
let f = new p(Chunk73153.h, {
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: g,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: g,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: g,
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: m,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: m,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: m
})