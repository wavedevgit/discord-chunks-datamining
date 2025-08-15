/** Chunk was on 42743 **/
/** chunk id: 554747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vm: () => b,
  ZP: () => h,
  eF: () => S,
  gM: () => v,
  k5: () => D,
  qY: () => I,
  sz: () => T,
  u1: () => y
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk241155 = require("./241155.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk835184 = require("./835184.js"),
  Chunk79874 = require("./79874.js"),
  Chunk954313 = require("./954313.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");
let p = [],
  O = 15 * Chunk70956.Z.Millis.MINUTE;

function h(e, t) {
  return (0, r.Wu)([E.Z, u.Z, a.ZP, d.Z, i.Z, c.ZP], () => {
    let n = E.Z.getGuild(e);
    if (null == n) return p;
    if (n.features.has(P.oNc.HUB)) {
      var l, r;
      let e = null == (l = c.ZP.getDefaultChannel(n.id)) ? true : l.id;
      return (null != (r = u.Z.getEventDirectoryEntries(e)) ? r : []).map(e => {
        let t = e.scheduledEventId,
          n = a.ZP.getGuildScheduledEvent(t);
        return null != n ? n : u.Z.getCachedGuildScheduledEventById(t)
      }).filter(s.lm)
    }
    return a.ZP.getGuildScheduledEventsByIndex(null != t ? t : a.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) returntrue;
      let n = i.Z.getChannel(t);
      return d.Z.can(P.Plq.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function I(e) {
  return (0, r.e7)([a.ZP, i.Z, d.Z], () => {
    let t = i.Z.getChannel(e);
    if (!d.Z.can(P.Plq.VIEW_CHANNEL, t) || null == (null == t ? true : t.guild_id)) return null;
    let n = a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function v(e) {
  let t = (0, r.Wu)([a.ZP], () => a.ZP.getGuildScheduledEventsForGuild(e), [e]);
  return l.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function b(e) {
  var t;
  let n = (0, r.Wu)([a.ZP, i.Z, d.Z], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_UPCOMING(e)).filter(e => {
      if (e.entity_type === Z.WX.NONE || e.status !== Z.p1.SCHEDULED) returnfalse;
      if (null == e.channel_id) returntrue;
      let t = i.Z.getChannel(e.channel_id);
      return d.Z.can(P.Plq.VIEW_CHANNEL, t)
    }), [e]),
    l = (0, r.cj)([N.Z], () => N.Z.getAllEventDismissals()),
    u = (0, r.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
    c = (0, r.cj)([a.ZP], () => null == n ? {} : n.reduce((e, t) => {
      var n, l;
      let r = (0, g.DK)(t);
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
        [t.id]: a.ZP.isInterestedInEventRecurrence(t.id, r)
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
    o = (0, r.e7)([E.Z], () => E.Z.getGuild(e)),
    s = null != o && !o.features.has(P.oNc.COMMUNITY) && o.features.has(P.oNc.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != c && s)
    for (let e = 0; e < n.length; e++) {
      let r = n[e],
        i = l[r.id],
        E = u[r.id],
        d = null != (t = c[r.id]) && t,
        o = (0, f.M)(r, i, E, d);
      if (null != o) return {
        upcomingEvent: r,
        noticeType: o
      }
    }
}

function D(e) {
  return (0, r.e7)([a.ZP, i.Z, d.Z], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === Z.WX.NONE || !(0, a.xt)(e)) returnfalse;
    if (null == e.channel_id) returntrue;
    let t = i.Z.getChannel(e.channel_id);
    return d.Z.can(P.Plq.VIEW_CHANNEL, t)
  }), [e])
}

function y(e) {
  return (0, r.e7)([a.ZP], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function S(e) {
  return (0, r.e7)([i.Z, a.ZP], () => {
    let t = a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != i.Z.getChannel(e.channel_id));
    return i.Z.getChannel(null == t ? true : t.channel_id)
  }, [e])
}

function T(e) {
  let [t, n] = l.useState(() => Date.now());
  l.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, O);
    return () => clearInterval(e)
  }, []);
  let u = (0, r.e7)([a.ZP], () => null == e ? [] : a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return l.useMemo(() => u.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, _.Kq)(e), {
      withinStartWindow: l,
      diffMinutes: r
    } = (0, g.ub)(t.toISOString(), null == n ? true : n.toISOString());
    return e.status !== Z.p1.ACTIVE && l && r < 15
  }), [u])
}