/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
});
var r, i = n(877921),
  s = n.n(i),
  a = n(442837),
  l = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = ["pct_retained", "new_members", "visitors", "communicators"],
  A = {},
  d = null;

function u(e) {
  let {
    guildId: t,
    stats: n
  } = e;
  d = null;
  let r = {},
    i = {},
    a = n[0],
    l = n[1];
  null != a && c.forEach(e => {
    if (null != a[e]) {
      let t = s()(e);
      null != l && 0 !== l[e] && (r["".concat(t, "Change")] = (a[e] - l[e]) * 100 / l[e]), i[t] = a[e]
    }
  }), A[t] = function(e) {
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
  }({}, i, r, A[t])
}

function g(e) {
  let {
    error: t
  } = e;
  d = t.code
}
class f extends(r = a.ZP.Store) {
  getOverviewAnalytics(e) {
    return A[e]
  }
  getError() {
    return d
  }
}
o(f, "displayName", "GuildSettingsAnalyticsStore");
let m = new f(l.Z, {
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: u,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: u,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: u,
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: g,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: g,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: g
})