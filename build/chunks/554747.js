/** Chunk was on 82124 **/
/** chunk id: 554747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vm: () => j,
  ZP: () => y,
  eF: () => E,
  gM: () => O,
  k5: () => x,
  qY: () => v,
  sz: () => S,
  u1: () => C
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
let m = [],
  b = 15 * Chunk70956.Z.Millis.MINUTE;

function y(e, t) {
  return (0, i.Wu)([a.Z, c.ZP, o.Z, l.Z], () => {
    let n = a.Z.getGuild(e);
    return null == n ? m : c.ZP.getGuildScheduledEventsByIndex(null != t ? t : c.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) returntrue;
      let n = l.Z.getChannel(t);
      return o.Z.can(g.Plq.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function v(e) {
  return (0, i.e7)([c.ZP, l.Z, o.Z], () => {
    let t = l.Z.getChannel(e);
    if (!o.Z.can(g.Plq.VIEW_CHANNEL, t) || null == (null == t ? true : t.guild_id)) return null;
    let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function O(e) {
  let t = (0, i.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(e), [e]);
  return r.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function j(e) {
  var t;
  let n = (0, i.Wu)([c.ZP, l.Z, o.Z], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(e)).filter(e => {
      if (e.entity_type === h.WX.NONE || e.status !== h.p1.SCHEDULED) returnfalse;
      if (null == e.channel_id) returntrue;
      let t = l.Z.getChannel(e.channel_id);
      return o.Z.can(g.Plq.VIEW_CHANNEL, t)
    }), [e]),
    r = (0, i.cj)([d.Z], () => d.Z.getAllEventDismissals()),
    s = (0, i.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
    p = (0, i.cj)([c.ZP], () => null == n ? {} : n.reduce((e, t) => {
      var n, r;
      let i = (0, f.DK)(t);
      return n = function(e) {
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
      }({}, e), r = r = {
        [t.id]: c.ZP.isInterestedInEventRecurrence(t.id, i)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n
    }, {}), [n]),
    m = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
    b = null != m && !m.features.has(g.GuildFeatures.COMMUNITY) && m.features.has(g.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != p && b)
    for (let e = 0; e < n.length; e++) {
      let i = n[e],
        l = r[i.id],
        a = s[i.id],
        o = null != (t = p[i.id]) && t,
        c = (0, u.M)(i, l, a, o);
      if (null != c) return {
        upcomingEvent: i,
        noticeType: c
      }
    }
}

function x(e) {
  return (0, i.e7)([c.ZP, l.Z, o.Z], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === h.WX.NONE || !(0, c.xt)(e)) returnfalse;
    if (null == e.channel_id) returntrue;
    let t = l.Z.getChannel(e.channel_id);
    return o.Z.can(g.Plq.VIEW_CHANNEL, t)
  }), [e])
}

function C(e) {
  return (0, i.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function E(e) {
  return (0, i.e7)([l.Z, c.ZP], () => {
    let t = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != l.Z.getChannel(e.channel_id));
    return l.Z.getChannel(null == t ? true : t.channel_id)
  }, [e])
}

function S(e) {
  let [t, n] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, b);
    return () => clearInterval(e)
  }, []);
  let l = (0, i.e7)([c.ZP], () => null == e ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return r.useMemo(() => l.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, p.Kq)(e), {
      withinStartWindow: r,
      diffMinutes: i
    } = (0, f.ub)(t.toISOString(), null == n ? true : n.toISOString());
    return e.status !== h.p1.ACTIVE && r && i < 15
  }), [l])
}