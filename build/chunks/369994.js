/** Chunk was on 93810 **/
n.d(t, {
  C4: () => p,
  Fi: () => f,
  KK: () => u,
  f6: () => b,
  n: () => g
}), n(47120);
var i = n(913527),
  r = n.n(i),
  a = n(544891),
  l = n(367907),
  o = n(434404),
  c = n(430824),
  s = n(626135),
  d = n(981631);

function u(e) {
  var t, n;
  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  0 !== i.length && s.default.track(d.rMx.GUILD_RAID_REPORTED, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i
      })
    }
    return e
  }({}, (0, l.hH)(e)), n = n = {
    guild_id: e,
    raid_types: i
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
async function b(e, t) {
  let n = new Set(e.features);
  n.has(d.oNc.COMMUNITY) ? t ? n.delete(d.oNc.RAID_ALERTS_DISABLED) : n.add(d.oNc.RAID_ALERTS_DISABLED) : t ? n.add(d.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS), await o.Z.saveGuild(e.id, {
    features: n
  }, {
    throwErr: !0
  })
}
async function g(e, t, n, i) {
  let l = r()().add(i, "hours").toISOString();
  return await a.tn.put({
    url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? l : null,
      dms_disabled_until: n ? l : null
    },
    rejectWithError: !1
  })
}
async function f(e, t, n) {
  let i = c.Z.getGuild(e);
  return null == (null == i ? void 0 : i.getSafetyAlertsChannelId()) ? null : await a.tn.post({
    url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: n
    },
    rejectWithError: !1
  })
}
async function p(e) {
  let t = c.Z.getGuild(e);
  return null == (null == t ? void 0 : t.getSafetyAlertsChannelId()) ? null : await a.tn.post({
    url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
    rejectWithError: !1
  })
}