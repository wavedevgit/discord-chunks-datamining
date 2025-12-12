/** Chunk was on web.js **/
/** chunk id: 230307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk827837 = require("./827837.js"),
  Chunk627050 = require("./627050.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {},
  d = null,
  f = 864e5,
  p = 36e5;

function _() {
  Chunk627050.d.getCurrentConfig({
    location: "LibraryApplicationStatisticsStore.handleConnectionOpen"
  }).enabled && (0, Chunk827837.N)()
}

function m() {
  u = {}, d = null
}

function h(e) {
  let {
    statistics: t
  } = e;
  t.forEach(e => {
    u[e.application_id] = e
  }), d = Date.now()
}

function g(e) {
  let {
    duration: t,
    applicationId: n,
    distributor: r
  } = e, i = u[n], o = new Date().toISOString(), a = 0, s = 0;
  if (null != i) {
    var c;
    a = i.total_duration, s = null != (c = i.total_discord_sku_duration) ? c : 0
  }
  a += t, r === l.GQo.DISCORD && (s += t), u[n] = {
    application_id: n,
    total_duration: a,
    last_played_at: o,
    total_discord_sku_duration: s
  }
}
class E extends(r = Chunk442837.ZP.Store) {
  get applicationStatistics() {
    return u
  }
  get lastFetched() {
    return d
  }
  getGameDuration(e) {
    let t = u[e];
    return null != t ? t.total_duration : 0
  }
  getLastPlayedDateTime(e) {
    let t = u[e];
    return null != t ? new Date(t.last_played_at).getTime() : null
  }
  hasApplicationStatistic(e) {
    return null != u[e]
  }
  getCurrentUserStatisticsForApplication(e) {
    return u[e]
  }
  getQuickSwitcherScoreForApplication(e) {
    let t = u[e],
      n = 0;
    if (null != t) {
      let e = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / f),
        r = Math.floor(1e3 * t.total_duration / p);
      0 === e ? n += 50 : e >= 1 && e < 2 ? n += 40 : e >= 2 && e < 4 ? n += 30 : e >= 4 && e < 7 ? n += 20 : e >= 7 && (n += 10), 0 === r ? n += 0 : r >= 1 && r < 12 ? n += 10 : r >= 12 && r < 168 ? n += 20 : r >= 168 && r < 720 ? n += 40 : r >= 720 && (n += 50)
    }
    return n
  }
}
c(E, "displayName", "LibraryApplicationStatisticsStore");
let b = new E(Chunk570140.Z, {
  USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: h,
  ACTIVITY_UPDATE_START: g,
  LOGOUT: m,
  CONNECTION_OPEN: _
})