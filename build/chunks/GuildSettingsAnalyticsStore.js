/** Chunk was on 384 **/
/** chunk id: 743676, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk877921 = require("./877921.js"),
  l = require.n(Chunk877921),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = ["pct_retained", "new_members", "visitors", "communicators"],
  u = {},
  d = null;

function g(e) {
  let {
    guildId: t,
    stats: n
  } = e;
  d = null;
  let r = {},
    i = {},
    a = n[0],
    s = n[1];
  null != a && c.forEach(e => {
    if (null != a[e]) {
      let t = l()(e);
      null != s && 0 !== s[e] && (r["".concat(t, "Change")] = (a[e] - s[e]) * 100 / s[e]), i[t] = a[e]
    }
  }), u[t] = function(e) {
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
  }({}, i, r, u[t])
}

function m(e) {
  let {
    error: t
  } = e;
  d = t.code
}
class p extends(r = Chunk442837.ZP.Store) {
  getOverviewAnalytics(e) {
    return u[e]
  }
  getError() {
    return d
  }
}
o(p, "displayName", "GuildSettingsAnalyticsStore");
let f = new p(Chunk570140.Z, {
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: g,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: g,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: g,
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: m,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: m,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: m
})