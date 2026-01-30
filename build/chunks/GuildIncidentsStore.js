/** Chunk was on 77759 **/
/** chunk id: 610136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk617617 = require("./617617.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk903093 = require("./903093.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = {},
  f = {};

function O() {
  var e;
  let t = null != (e = u.A.getGuildsProto()) ? e : {},
    n = o.A.getGuildsArray();
  for (let e of (f = {}, n)) f[e.id] = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        s(e, t, n[t])
      })
    }
    return e
  }({
    guildId: e.id,
    guildName: e.name
  }, t[e.id])
}

function p(e) {
  return null != e && Object.keys(e).length > 0 ? {
    raidDetectedAt: e.raid_detected_at,
    dmSpamDetectedAt: e.dm_spam_detected_at,
    dmsDisabledUntil: e.dms_disabled_until,
    invitesDisabledUntil: e.invites_disabled_until
  } : null
}
class D extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, o.A, c.A, a.A), this.syncWith([u.A, o.A, c.A, a.A], O)
  }
  getGuildIncident(e) {
    return b[e]
  }
  getIncidentsByGuild() {
    return b
  }
  getGuildAlertSettings() {
    return f
  }
}
s(D, "displayName", "GuildIncidentsStore");
let g = new D(Chunk73153.h, {
  CONNECTION_OPEN: function(e) {
    for (let n of (b = {}, e.guilds)) {
      var t;
      let e = p(null == (t = n.properties) ? true : t.incidents_data);
      null != e && ((0, d.k$)(e) || (0, d._J)(e)) && (b[n.id] = e)
    }
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, r = p(null == (t = n.properties) ? true : t.incidents_data);
    null != r && ((0, d.k$)(r) || (0, d._J)(r)) && (b[n.id] = r)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = p(t.incidents_data);
    null != n && ((0, d.k$)(n) || (0, d._J)(n)) ? b[t.id] = n : delete b[t.id]
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete b[t.id]
  },
  LOGOUT: function(e) {
    b = {}
  }
})