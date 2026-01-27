/** Chunk was on 93952 **/
/** chunk id: 508654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => p,
  BP: () => N,
  Qs: () => v,
  RO: () => T,
  WG: () => h,
  ob: () => _,
  r2: () => G,
  vj: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk927813 = require("./927813.js"),
  Chunk698441 = require("./698441.js"),
  Chunk357801 = require("./357801.js"),
  Chunk11550 = require("./11550.js"),
  Chunk563312 = require("./563312.js"),
  Chunk974930 = require("./974930.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js");
let g = [],
  O = 15 * Chunk927813.A.Millis.MINUTE;

function p(e, t) {
  return (0, l.yK)([u.A, c.Ay, a.A, i.A], () => {
    let n = u.A.getGuild(e);
    return null == n ? g : c.Ay.getGuildScheduledEventsByIndex(null != t ? t : c.ej.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) returntrue;
      let n = i.A.getChannel(t);
      return a.A.can(y.xBc.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function v(e) {
  return (0, l.bG)([c.Ay, i.A, a.A], () => {
    let t = i.A.getChannel(e);
    if (!a.A.can(y.xBc.VIEW_CHANNEL, t) || null == (null == t ? true : t.guild_id)) return null;
    let n = c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function b(e) {
  let t = (0, l.yK)([c.Ay], () => c.Ay.getGuildScheduledEventsForGuild(e), [e]);
  return r.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function h(e) {
  var t;
  let n = (0, l.yK)([c.Ay, i.A, a.A], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_UPCOMING(e)).filter(e => {
      if (e.entity_type === E.Ps.NONE || e.status !== E.XG.SCHEDULED) returnfalse;
      if (null == e.channel_id) returntrue;
      let t = i.A.getChannel(e.channel_id);
      return a.A.can(y.xBc.VIEW_CHANNEL, t)
    }), [e]),
    r = (0, l.cf)([s.A], () => s.A.getAllEventDismissals()),
    o = (0, l.cf)([s.A], () => s.A.getAllUpcomingNoticeSeenTimes()),
    A = (0, l.cf)([c.Ay], () => null == n ? {} : n.reduce((e, t) => {
      var n, r;
      let l = (0, f.G3)(t);
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
        [t.id]: c.Ay.isInterestedInEventRecurrence(t.id, l)
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
    g = (0, l.bG)([u.A], () => u.A.getGuild(e)),
    O = null != g && !g.features.has(y.GuildFeatures.COMMUNITY) && g.features.has(y.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
  if (null != n && null != A && O)
    for (let e = 0; e < n.length; e++) {
      let l = n[e],
        i = r[l.id],
        u = o[l.id],
        a = null != (t = A[l.id]) && t,
        c = (0, d.F)(l, i, u, a);
      if (null != c) return {
        upcomingEvent: l,
        noticeType: c
      }
    }
}

function N(e) {
  return (0, l.bG)([c.Ay, i.A, a.A], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === E.Ps.NONE || !(0, c.Fd)(e)) returnfalse;
    if (null == e.channel_id) returntrue;
    let t = i.A.getChannel(e.channel_id);
    return a.A.can(y.xBc.VIEW_CHANNEL, t)
  }), [e])
}

function _(e) {
  return (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function G(e) {
  return (0, l.bG)([i.A, c.Ay], () => {
    let t = c.Ay.getGuildScheduledEventsByIndex(c.ej.GUILD_EVENT_ACTIVE(e)).find(e => null != i.A.getChannel(e.channel_id));
    return i.A.getChannel(null == t ? true : t.channel_id)
  }, [e])
}

function T(e) {
  let [t, n] = r.useState(() => Date.now());
  r.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, O);
    return () => clearInterval(e)
  }, []);
  let i = (0, l.bG)([c.Ay], () => null == e ? [] : c.Ay.getGuildScheduledEventsByIndex(c.ej.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return r.useMemo(() => i.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, A.YR)(e), {
      withinStartWindow: r,
      diffMinutes: l
    } = (0, f.CC)(t.toISOString(), null == n ? true : n.toISOString());
    return e.status !== E.XG.ACTIVE && r && l < 15
  }), [i])
}