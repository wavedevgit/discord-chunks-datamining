/** Chunk was on 97755 **/
/** chunk id: 554747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vm: () => P,
  ZP: () => O,
  eF: () => I,
  gM: () => y,
  k5: () => _,
  qY: () => b,
  sz: () => h,
  u1: () => v
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
let N = [],
  p = 15 * Chunk70956.Z.Millis.MINUTE;

function O(e, t) {
  return (0, l.Wu)([u.Z, a.ZP, c.Z, i.Z], () => {
    let n = u.Z.getGuild(e);
    return null == n ? N : a.ZP.getGuildScheduledEventsByIndex(null != t ? t : a.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) returntrue;
      let n = i.Z.getChannel(t);
      return c.Z.can(g.Plq.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function b(e) {
  return (0, l.e7)([a.ZP, i.Z, c.Z], () => {
    let t = i.Z.getChannel(e);
    if (!c.Z.can(g.Plq.VIEW_CHANNEL, t) || null == (null == t ? true : t.guild_id)) return null;
    let n = a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function y(e) {
  let t = (0, l.Wu)([a.ZP], () => a.ZP.getGuildScheduledEventsForGuild(e), [e]);
  return r.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function P(e) {
  var t;
  let n = (0, l.Wu)([a.ZP, i.Z, c.Z], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_UPCOMING(e)).filter(e => {
      if (e.entity_type === Z.WX.NONE || e.status !== Z.p1.SCHEDULED) returnfalse;
      if (null == e.channel_id) returntrue;
      let t = i.Z.getChannel(e.channel_id);
      return c.Z.can(g.Plq.VIEW_CHANNEL, t)
    }), [e]),
    r = (0, l.cj)([d.Z], () => d.Z.getAllEventDismissals()),
    o = (0, l.cj)([d.Z], () => d.Z.getAllUpcomingNoticeSeenTimes()),
    f = (0, l.cj)([a.ZP], () => null == n ? {} : n.reduce((e, t) => {
      var n, r;
      let l = (0, E.DK)(t);
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
        [t.id]: a.ZP.isInterestedInEventRecurrence(t.id, l)
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
    N = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
    p = null != N && !N.features.has(g.oNc.COMMUNITY) && N.features.has(g.oNc.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != f && p)
    for (let e = 0; e < n.length; e++) {
      let l = n[e],
        i = r[l.id],
        u = o[l.id],
        c = null != (t = f[l.id]) && t,
        a = (0, s.M)(l, i, u, c);
      if (null != a) return {
        upcomingEvent: l,
        noticeType: a
      }
    }
}

function _(e) {
  return (0, l.e7)([a.ZP, i.Z, c.Z], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === Z.WX.NONE || !(0, a.xt)(e)) returnfalse;
    if (null == e.channel_id) returntrue;
    let t = i.Z.getChannel(e.channel_id);
    return c.Z.can(g.Plq.VIEW_CHANNEL, t)
  }), [e])
}

function v(e) {
  return (0, l.e7)([a.ZP], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function I(e) {
  return (0, l.e7)([i.Z, a.ZP], () => {
    let t = a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != i.Z.getChannel(e.channel_id));
    return i.Z.getChannel(null == t ? true : t.channel_id)
  }, [e])
}

function h(e) {
  let [t, n] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, p);
    return () => clearInterval(e)
  }, []);
  let i = (0, l.e7)([a.ZP], () => null == e ? [] : a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return r.useMemo(() => i.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, f.Kq)(e), {
      withinStartWindow: r,
      diffMinutes: l
    } = (0, E.ub)(t.toISOString(), null == n ? true : n.toISOString());
    return e.status !== Z.p1.ACTIVE && r && l < 15
  }), [i])
}