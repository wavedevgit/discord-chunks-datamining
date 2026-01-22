/** Chunk was on web.js **/
/** chunk id: 610136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk617617 = require("./617617.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk903093 = require("./903093.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = {},
  _ = {};

function h() {
  var e;
  let t = null != (e = o.A.getGuildsProto()) ? e : {},
    n = l.A.getGuildsArray();
  for (let e of (_ = {}, n)) _[e.id] = f({
    guildId: e.id,
    guildName: e.name
  }, t[e.id])
}

function m(e) {
  return null != e && Object.keys(e).length > 0 ? {
    raidDetectedAt: e.raid_detected_at,
    dmSpamDetectedAt: e.dm_spam_detected_at,
    dmsDisabledUntil: e.dms_disabled_until,
    invitesDisabledUntil: e.invites_disabled_until
  } : null
}

function g(e) {
  for (let n of (p = {}, e.guilds)) {
    var t;
    let e = m(null == (t = n.properties) ? true : t.incidents_data);
    null != e && ((0, u.k$)(e) || (0, u._J)(e)) && (p[n.id] = e)
  }
}

function E(e) {
  var t;
  let {
    guild: n
  } = e, r = m(null == (t = n.properties) ? true : t.incidents_data);
  null != r && ((0, u.k$)(r) || (0, u._J)(r)) && (p[n.id] = r)
}

function b(e) {
  let {
    guild: t
  } = e, n = m(t.incidents_data);
  null != n && ((0, u.k$)(n) || (0, u._J)(n)) ? p[t.id] = n : delete p[t.id]
}

function y(e) {
  let {
    guild: t
  } = e;
  delete p[t.id]
}

function O(e) {
  p = {}
}
class A extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(o.A, l.A, c.A, s.A), this.syncWith([o.A, l.A, c.A, s.A], h)
  }
  getGuildIncident(e) {
    return p[e]
  }
  getIncidentsByGuild() {
    return p
  }
  getGuildAlertSettings() {
    return _
  }
}
d(A, "displayName", "GuildIncidentsStore");
let v = new A(Chunk73153.h, {
  CONNECTION_OPEN: g,
  GUILD_CREATE: E,
  GUILD_UPDATE: b,
  GUILD_DELETE: y,
  LOGOUT: O
})