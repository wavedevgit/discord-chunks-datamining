/** Chunk was on web.js **/
/** chunk id: 487419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk581883 = require("./581883.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk533244 = require("./533244.js");

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

function m() {
  var e;
  let t = null != (e = s.Z.getGuildsProto()) ? e : {},
    n = l.Z.getGuildsArray();
  for (let e of (_ = {}, n)) _[e.id] = f({
    guildId: e.id,
    guildName: e.name
  }, t[e.id])
}

function h(e) {
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
    let e = h(null == (t = n.properties) ? true : t.incidents_data);
    null != e && ((0, u.i9)(e) || (0, u.ur)(e)) && (p[n.id] = e)
  }
}

function E(e) {
  var t;
  let {
    guild: n
  } = e, r = h(null == (t = n.properties) ? true : t.incidents_data);
  null != r && ((0, u.i9)(r) || (0, u.ur)(r)) && (p[n.id] = r)
}

function b(e) {
  let {
    guild: t
  } = e, n = h(t.incidents_data);
  null != n && ((0, u.i9)(n) || (0, u.ur)(n)) ? p[t.id] = n : delete p[t.id]
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
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(s.Z, l.Z, c.Z, o.Z), this.syncWith([s.Z, l.Z, c.Z, o.Z], m)
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
d(v, "displayName", "GuildIncidentsStore");
let S = new v(Chunk570140.Z, {
  CONNECTION_OPEN: g,
  GUILD_CREATE: E,
  GUILD_UPDATE: b,
  GUILD_DELETE: y,
  LOGOUT: O
})