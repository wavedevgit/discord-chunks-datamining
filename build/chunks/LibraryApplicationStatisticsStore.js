/** Chunk was on web.js **/
/** chunk id: 90165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661439 = require("./661439.js"),
  Chunk352505 = require("./352505.js"),
  Chunk652215 = require("./652215.js");

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
  o.m.getCurrentConfig({
    location: "LibraryApplicationStatisticsStore.handleConnectionOpen"
  }).enabled && (0, s.X)()
}

function h() {
  u = {}, d = null
}

function m(e) {
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
  } = e, i = u[n], a = new Date().toISOString(), s = 0, o = 0;
  if (null != i) {
    var c;
    s = i.total_duration, o = null != (c = i.total_discord_sku_duration) ? c : 0
  }
  s += t, r === l.d3x.DISCORD && (o += t), u[n] = {
    application_id: n,
    total_duration: s,
    last_played_at: a,
    total_discord_sku_duration: o
  }
}
class E extends(r = Chunk311907.Ay.Store) {
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
let y = new E(Chunk73153.h, {
  USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: m,
  ACTIVITY_UPDATE_START: g,
  LOGOUT: h,
  CONNECTION_OPEN: _
})