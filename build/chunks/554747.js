/** Chunk was on 86642 **/
/** chunk id: 554747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vm: () => v,
  ZP: () => y,
  eF: () => E,
  gM: () => _,
  k5: () => x,
  qY: () => C,
  sz: () => j,
  u1: () => O
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk70956 = require("./70956.js"),
  Chunk924301 = require("./924301.js"),
  Chunk658041 = require("./658041.js"),
  Chunk835184 = require("./835184.js"),
  Chunk79874 = require("./79874.js"),
  Chunk954313 = require("./954313.js"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js");
let g = [],
  b = 15 * Chunk70956.Z.Millis.MINUTE;

function y(e, t) {
  return (0, r.Wu)([a.Z, c.ZP, o.Z, l.Z], () => {
    let n = a.Z.getGuild(e);
    return null == n ? g : c.ZP.getGuildScheduledEventsByIndex(null != t ? t : c.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) returntrue;
      let n = l.Z.getChannel(t);
      return o.Z.can(m.Plq.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function C(e) {
  return (0, r.e7)([c.ZP, l.Z, o.Z], () => {
    let t = l.Z.getChannel(e);
    if (!o.Z.can(m.Plq.VIEW_CHANNEL, t) || null == (null == t ? true : t.guild_id)) return null;
    let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function _(e) {
  let t = (0, r.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(e), [e]);
  return i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function v(e) {
  var t;
  let n = (0, r.Wu)([c.ZP, l.Z, o.Z], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(e)).filter(e => {
      if (e.entity_type === h.WX.NONE || e.status !== h.p1.SCHEDULED) returnfalse;
      if (null == e.channel_id) returntrue;
      let t = l.Z.getChannel(e.channel_id);
      return o.Z.can(m.Plq.VIEW_CHANNEL, t)
    }), [e]),
    i = (0, r.cj)([d.Z], () => d.Z.getAllEventDismissals()),
    s = (0, r.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
    p = (0, r.cj)([c.ZP], () => null == n ? {} : n.reduce((e, t) => {
      var n, i;
      let r = (0, f.DK)(t);
      return n = function(e) {
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
      }({}, e), i = i = {
        [t.id]: c.ZP.isInterestedInEventRecurrence(t.id, r)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n
    }, {}), [n]),
    g = (0, r.e7)([a.Z], () => a.Z.getGuild(e)),
    b = null != g && !g.features.has(m.GuildFeatures.COMMUNITY) && g.features.has(m.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != p && b)
    for (let e = 0; e < n.length; e++) {
      let r = n[e],
        l = i[r.id],
        a = s[r.id],
        o = null != (t = p[r.id]) && t,
        c = (0, u.M)(r, l, a, o);
      if (null != c) return {
        upcomingEvent: r,
        noticeType: c
      }
    }
}

function x(e) {
  return (0, r.e7)([c.ZP, l.Z, o.Z], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === h.WX.NONE || !(0, c.xt)(e)) returnfalse;
    if (null == e.channel_id) returntrue;
    let t = l.Z.getChannel(e.channel_id);
    return o.Z.can(m.Plq.VIEW_CHANNEL, t)
  }), [e])
}

function O(e) {
  return (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function E(e) {
  return (0, r.e7)([l.Z, c.ZP], () => {
    let t = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != l.Z.getChannel(e.channel_id));
    return l.Z.getChannel(null == t ? true : t.channel_id)
  }, [e])
}

function j(e) {
  let [t, n] = i.useState(() => Date.now());
  i.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, b);
    return () => clearInterval(e)
  }, []);
  let l = (0, r.e7)([c.ZP], () => null == e ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return i.useMemo(() => l.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, p.Kq)(e), {
      withinStartWindow: i,
      diffMinutes: r
    } = (0, f.ub)(t.toISOString(), null == n ? true : n.toISOString());
    return e.status !== h.p1.ACTIVE && i && r < 15
  }), [l])
}