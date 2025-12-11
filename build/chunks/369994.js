/** Chunk was on 58175 **/
/** chunk id: 369994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C4: () => _,
  Fi: () => g,
  KK: () => b,
  f6: () => p,
  n: () => f
}), require("./388685.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk544891 = require("./544891.js"),
  Chunk367907 = require("./367907.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk173530 = require("./173530.js"),
  Chunk981631 = require("./981631.js");

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  if (0 !== t.length) {
    var n, r;
    c.default.track(d.rMx.GUILD_RAID_REPORTED, (n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, (0, a.hH)(e)), r = r = {
      guild_id: e,
      raid_types: t
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n))
  }
}
async function p(e, t) {
  let n = new Set(e.features);
  n.has(d.GuildFeatures.COMMUNITY) ? t ? n.delete(d.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(d.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(d.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(d.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await s.Z.saveGuild(e.id, {
    features: n
  }, {
    throwErr: true
  })
}
async function f(e, t, n, r) {
  let a = i()().add(r, "hours").toISOString();
  return await l.tn.put({
    url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? a : null,
      dms_disabled_until: n ? a : null
    },
    rejectWithError: false
  })
}
async function g(e, t, n) {
  let r = o.Z.getGuild(e);
  return null == (null != r ? (0, u.Z)(r) : null) ? null : await l.tn.post({
    url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: n
    },
    rejectWithError: false
  })
}
async function _(e) {
  let t = o.Z.getGuild(e);
  return null == (null != t ? (0, u.Z)(t) : null) ? null : await l.tn.post({
    url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
    rejectWithError: false
  })
}