/** Chunk was on 99583 **/
/** chunk id: 554113, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  B: () => f,
  G1: () => x,
  jB: () => m,
  tr: () => j,
  xE: () => b
}), require("./896048.js");
var Chunk989349 = require("./989349.js"),
  r = require.n(Chunk989349),
  Chunk562465 = require("./562465.js"),
  Chunk58149 = require("./58149.js"),
  Chunk997509 = require("./997509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk183389 = require("./183389.js"),
  Chunk652215 = require("./652215.js");

function x(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  if (0 !== t.length) {
    var l, n;
    d.default.track(u.HAw.GUILD_RAID_REPORTED, (l = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = l[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, (0, s.H$)(e)), n = n = {
      guild_id: e,
      raid_types: t
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var l = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        l.push.apply(l, n)
      }
      return l
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(n, e))
    }), l))
  }
}
async function m(e, t) {
  let l = new Set(e.features);
  l.has(u.GuildFeatures.COMMUNITY) ? t ? l.delete(u.GuildFeatures.RAID_ALERTS_DISABLED) : l.add(u.GuildFeatures.RAID_ALERTS_DISABLED) : t ? l.add(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : l.delete(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await a.A.saveGuild(e.id, {
    features: l
  }, {
    throwErr: true
  })
}
async function j(e, t, l, n) {
  let s = r()().add(n, "hours").toISOString();
  return await i.Bo.put({
    url: u.Rsh.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? s : null,
      dms_disabled_until: l ? s : null
    },
    rejectWithError: false
  })
}
async function b(e, t, l) {
  let n = c.A.getGuild(e);
  return null == (null != n ? (0, o.A)(n) : null) ? null : await i.Bo.post({
    url: u.Rsh.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: l
    },
    rejectWithError: false
  })
}
async function f(e) {
  let t = c.A.getGuild(e);
  return null == (null != t ? (0, o.A)(t) : null) ? null : await i.Bo.post({
    url: u.Rsh.GUILD_INCIDENT_REPORT_RAID(e),
    rejectWithError: false
  })
}