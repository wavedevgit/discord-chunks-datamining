/** Chunk was on 86736 **/
/** chunk id: 369994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C4: () => f,
  Fi: () => g,
  KK: () => p,
  f6: () => m,
  n: () => b
}), require("./388685.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk544891 = require("./544891.js"),
  Chunk367907 = require("./367907.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk173530 = require("./173530.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  if (0 !== t.length) {
    var n, i;
    c.default.track(u.rMx.GUILD_RAID_REPORTED, (n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, (0, a.hH)(e)), i = i = {
      guild_id: e,
      raid_types: t
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n))
  }
}
async function m(e, t) {
  let n = new Set(e.features);
  n.has(u.GuildFeatures.COMMUNITY) ? t ? n.delete(u.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(u.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await o.Z.saveGuild(e.id, {
    features: n
  }, {
    throwErr: true
  })
}
async function b(e, t, n, i) {
  let a = r()().add(i, "hours").toISOString();
  return await l.tn.put({
    url: u.ANM.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? a : null,
      dms_disabled_until: n ? a : null
    },
    rejectWithError: false
  })
}
async function g(e, t, n) {
  let i = s.Z.getGuild(e);
  return null == (null != i ? (0, d.Z)(i) : null) ? null : await l.tn.post({
    url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: n
    },
    rejectWithError: false
  })
}
async function f(e) {
  let t = s.Z.getGuild(e);
  return null == (null != t ? (0, d.Z)(t) : null) ? null : await l.tn.post({
    url: u.ANM.GUILD_INCIDENT_REPORT_RAID(e),
    rejectWithError: false
  })
}