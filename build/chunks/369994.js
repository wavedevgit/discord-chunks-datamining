/** Chunk was on 58175 **/
/** chunk id: 369994, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  C4: () => f,
  Fi: () => g,
  KK: () => p,
  f6: () => b,
  n: () => O
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

function p(t) {
  let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  if (0 !== e.length) {
    var n, r;
    c.default.track(u.rMx.GUILD_RAID_REPORTED, (n = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), r.forEach(function(e) {
          var r;
          r = n[e], e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = r
        })
      }
      return t
    }({}, (0, a.hH)(t)), r = r = {
      guild_id: t,
      raid_types: e
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(t) {
      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t))
    }), n))
  }
}
async function b(t, e) {
  let n = new Set(t.features);
  n.has(u.oNc.COMMUNITY) ? e ? n.delete(u.oNc.RAID_ALERTS_DISABLED) : n.add(u.oNc.RAID_ALERTS_DISABLED) : e ? n.add(u.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(u.oNc.NON_COMMUNITY_RAID_ALERTS), await s.Z.saveGuild(t.id, {
    features: n
  }, {
    throwErr: true
  })
}
async function O(t, e, n, r) {
  let a = i()().add(r, "hours").toISOString();
  return await l.tn.put({
    url: u.ANM.GUILD_INCIDENT_ACTIONS(t),
    body: {
      invites_disabled_until: e ? a : null,
      dms_disabled_until: n ? a : null
    },
    rejectWithError: false
  })
}
async function g(t, e, n) {
  let r = o.Z.getGuild(t);
  return null == (null != r ? (0, d.Z)(r) : null) ? null : await l.tn.post({
    url: u.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(t),
    body: {
      alert_message_id: e,
      reason: n
    },
    rejectWithError: false
  })
}
async function f(t) {
  let e = o.Z.getGuild(t);
  return null == (null != e ? (0, d.Z)(e) : null) ? null : await l.tn.post({
    url: u.ANM.GUILD_INCIDENT_REPORT_RAID(t),
    rejectWithError: false
  })
}