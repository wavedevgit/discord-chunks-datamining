/** Chunk was on web.js **/
/** chunk id: 614571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk553795 = require("./553795.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk425128 = require("./425128.js"),
  Chunk276344 = require("./276344.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = "League of Legends",
  _ = new Chunk846519.V7,
  p = false,
  h = false;

function m(e) {
  return e.some(e => e.name === f)
}

function g() {
  let e = Chunk553795.Z.getAccount(null, Chunk981631.ABu.RIOT_GAMES),
    t = Chunk553795.Z.getAccount(null, Chunk981631.ABu.LEAGUE_OF_LEGENDS);
  return null == module && null == exports ? "missing_connections" : null == module ? "missing_riot_connection" : null == exports ? "missing_league_of_legends_connection" : {
    riotConnection: module,
    lolConnection: exports
  }
}
async function E(e) {
  let {
    riotConnectionId: t,
    lolConnectionId: n,
    onlyUpdateIfStale: r
  } = e;
  if (!p && (!h || !r)) {
    _.stop();
    try {
      p = true;
      let {
        next_update_timestamp: e
      } = await (0, l._7)({
        riotConnectionId: t,
        lolConnectionId: n,
        onlyUpdateIfStale: r
      });
      p = false, h = false;
      let i = new Date(1e3 * e),
        a = new Date,
        o = Math.max(0, i.getTime() - a.getTime());
      _.start(o, () => (0, l._7)({
        riotConnectionId: t,
        lolConnectionId: n
      }))
    } catch (e) {
      p = false, h = true
    }
  }
}

function b() {
  return Chunk430824.Z.getGuildsArray().some(e => e.features.has(u.oNc.LEADERBOARD_ENABLED) && (0, c.NM)({
    guildId: e.id,
    location: "LeagueOfLegendsLifecycleManager.handleDependantStoreChanges",
    autoTrackExposure: false
  }))
}

function y(e) {
  s.default.track(u.rMx.LEAGUE_OF_LEGENDS_MATCH_DATA_NOT_FETCHING, {
    reason: e
  })
}
class O extends Chunk147913.Z {
  handleRunningGameChange(e) {
    let {
      removed: t
    } = e;
    if (b() && m(t)) {
      let e = g();
      if ("string" == typeof e) return void y(e);
      E({
        riotConnectionId: e.riotConnection.id,
        lolConnectionId: e.lolConnection.id
      })
    }
  }
  handleDependantStoreChanges() {
    let e = g(),
      t = "string" != typeof module,
      n = b() && exports;
    _.isStarted() && !require ? _.stop() : !_.isStarted() && require && E({
      riotConnectionId: module.riotConnection.id,
      lolConnectionId: module.lolConnection.id,
      onlyUpdateIfStale: true
    })
  }
  constructor(...e) {
    super(...e), d(this, "actions", {
      RUNNING_GAMES_CHANGE: this.handleRunningGameChange
    }), d(this, "stores", new Map().set(o.Z, this.handleDependantStoreChanges).set(a.Z, this.handleDependantStoreChanges))
  }
}
let v = new O