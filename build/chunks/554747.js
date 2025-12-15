/** Chunk was on 79521 **/
/** chunk id: 554747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vm: () => p,
  ZP: () => m,
  eF: () => S,
  gM: () => h,
  k5: () => C,
  qY: () => O,
  sz: () => I,
  u1: () => v
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk70956 = require("./70956.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk835184 = require("./835184.js"),
  Chunk79874 = require("./79874.js"),
  Chunk854698 = require("./854698.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");
let _ = [],
  Z = 15 * Chunk70956.Z.Millis.MINUTE;

function m(e, t) {
  return (0, i.Wu)([u.Z, s.ZP, a.Z, r.Z], () => {
    let n = u.Z.getGuild(e);
    return null == n ? _ : s.ZP.getGuildScheduledEventsByIndex(null != t ? t : s.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) returntrue;
      let n = r.Z.getChannel(t);
      return a.Z.can(g.Plq.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function O(e) {
  return (0, i.e7)([s.ZP, r.Z, a.Z], () => {
    let t = r.Z.getChannel(e);
    if (!a.Z.can(g.Plq.VIEW_CHANNEL, t) || null == (null == t ? true : t.guild_id)) return null;
    let n = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function h(e) {
  let t = (0, i.Wu)([s.ZP], () => s.ZP.getGuildScheduledEventsForGuild(e), [e]);
  return l.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function p(e) {
  var t;
  let n = (0, i.Wu)([s.ZP, r.Z, a.Z], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(e)).filter(e => {
      if (e.entity_type === N.WX.NONE || e.status !== N.p1.SCHEDULED) returnfalse;
      if (null == e.channel_id) returntrue;
      let t = r.Z.getChannel(e.channel_id);
      return a.Z.can(g.Plq.VIEW_CHANNEL, t)
    }), [e]),
    l = (0, i.cj)([c.Z], () => c.Z.getAllEventDismissals()),
    o = (0, i.cj)([c.Z], () => c.Z.getAllUpcomingNoticeSeenTimes()),
    E = (0, i.cj)([s.ZP], () => null == n ? {} : n.reduce((e, t) => {
      var n, l;
      let i = (0, f.DK)(t);
      return n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), l = l = {
        [t.id]: s.ZP.isInterestedInEventRecurrence(t.id, i)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n
    }, {}), [n]),
    _ = (0, i.e7)([u.Z], () => u.Z.getGuild(e)),
    Z = null != _ && !_.features.has(g.GuildFeatures.COMMUNITY) && _.features.has(g.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != E && Z)
    for (let e = 0; e < n.length; e++) {
      let i = n[e],
        r = l[i.id],
        u = o[i.id],
        a = null != (t = E[i.id]) && t,
        s = (0, d.M)(i, r, u, a);
      if (null != s) return {
        upcomingEvent: i,
        noticeType: s
      }
    }
}

function C(e) {
  return (0, i.e7)([s.ZP, r.Z, a.Z], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === N.WX.NONE || !(0, s.xt)(e)) returnfalse;
    if (null == e.channel_id) returntrue;
    let t = r.Z.getChannel(e.channel_id);
    return a.Z.can(g.Plq.VIEW_CHANNEL, t)
  }), [e])
}

function v(e) {
  return (0, i.e7)([s.ZP], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function S(e) {
  return (0, i.e7)([r.Z, s.ZP], () => {
    let t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != r.Z.getChannel(e.channel_id));
    return r.Z.getChannel(null == t ? true : t.channel_id)
  }, [e])
}

function I(e) {
  let [t, n] = l.useState(() => Date.now());
  l.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, Z);
    return () => clearInterval(e)
  }, []);
  let r = (0, i.e7)([s.ZP], () => null == e ? [] : s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return l.useMemo(() => r.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, E.Kq)(e), {
      withinStartWindow: l,
      diffMinutes: i
    } = (0, f.ub)(t.toISOString(), null == n ? true : n.toISOString());
    return e.status !== N.p1.ACTIVE && l && i < 15
  }), [r])
}