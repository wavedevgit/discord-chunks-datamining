/** Chunk was on web.js **/
/** chunk id: 974930, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CC: () => D,
  CI: () => M,
  DS: () => X,
  G3: () => Y,
  IS: () => _,
  N5: () => k,
  Ri: () => j,
  X7: () => F,
  Xx: () => N,
  Xy: () => h,
  Ze: () => y,
  er: () => B,
  j: () => J,
  jd: () => w,
  nG: () => Z,
  p$: () => W,
  sv: () => V,
  z7: () => Q,
  zD: () => G
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk471691 = require("./471691.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk604701 = require("./604701.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");
let _ = 365,
  h = 366,
  m = "ddd MMM Do \xb7 LT",
  g = "ddd MMM Do, YYYY \xb7 LT",
  E = "LT",
  y = 4,
  b = [Chunk471691.p3.MO.weekday, Chunk471691.p3.TU.weekday, Chunk471691.p3.WE.weekday, Chunk471691.p3.TH.weekday, Chunk471691.p3.FR.weekday],
  O = [Chunk471691.p3.SU.weekday, Chunk471691.p3.MO.weekday, Chunk471691.p3.TU.weekday, Chunk471691.p3.WE.weekday, Chunk471691.p3.TH.weekday],
  v = [Chunk471691.p3.TU.weekday, Chunk471691.p3.WE.weekday, Chunk471691.p3.TH.weekday, Chunk471691.p3.FR.weekday, Chunk471691.p3.SA.weekday],
  A = [Chunk471691.p3.SA.weekday, Chunk471691.p3.SU.weekday],
  I = [Chunk471691.p3.FR.weekday, Chunk471691.p3.SA.weekday],
  S = [Chunk471691.p3.SU.weekday, Chunk471691.p3.MO.weekday],
  T = [Chunk471691.p3.SU.weekday, Chunk471691.p3.MO.weekday, Chunk471691.p3.TU.weekday, Chunk471691.p3.WE.weekday, Chunk471691.p3.TH.weekday, Chunk471691.p3.FR.weekday, Chunk471691.p3.SA.weekday],
  C = new Set([0, 6]);

function N(e) {
  var t;
  let n = e.toDate(),
    r = Math.ceil(n.getDate() / 7),
    i = e.format("dddd"),
    a = [{
      id: "none",
      value: d.z.NONE,
      label: p.intl.string(p.t["0bK0B1"])
    }, {
      id: "weekly",
      value: d.z.WEEKLY,
      label: p.intl.formatToPlainString(p.t["B8/yfp"], {
        weekday: i
      })
    }, {
      id: "biweekly",
      value: d.z.BIWEEKLY,
      label: p.intl.formatToPlainString(p.t["z+aIuX"], {
        weekday: i
      })
    }, {
      id: "monthly",
      value: d.z.MONTHLY,
      label: p.intl.formatToPlainString(p.t.mjOEBk, {
        nth: r,
        weekday: i
      })
    }, {
      id: "yearly",
      value: d.z.YEARLY,
      label: p.intl.formatToPlainString(p.t["5DFcVl"], {
        date: n.toLocaleString(p.intl.currentLocale, {
          month: "short",
          day: "2-digit"
        })
      })
    }];
  return C.has(n.getDay()) ? (null == (t = s.default.getCurrentUser()) ? true : t.isStaff()) && a.push({
    id: "weekendOnly",
    value: d.z.WEEKEND_ONLY,
    label: p.intl.string(p.t.hRpynV)
  }) : a.push({
    id: "weekdayOnly",
    value: d.z.WEEKDAY_ONLY,
    label: p.intl.string(p.t["jYR/MY"])
  }), a
}
let w = () => {
    let e = a()().add(1, "hour"),
      t = e.hour();
    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
  },
  R = (e, t) => (0, l.i$)(e, e.get("years") === t.get("years") ? m : g),
  P = (e, t) => {
    let n = (0, l.m_)(e.toDate(), t.toDate());
    return n > 1 || n < 0 ? R(e, t) : (0, l.i$)(e, e.localeData().calendar(n < 1 ? "sameDay" : "nextDay", e, t))
  };

function D(e, t, n) {
  null == n && (n = a()());
  let r = a()(e),
    i = null != t && "" !== t ? a()(t) : true,
    o = null != t && r.isSame(i, "day");
  return {
    startDateTimeString: P(r, n),
    endDateTimeString: null != i ? o ? i.format(E) : R(i, n) : true,
    currentOrPastEvent: r <= n,
    upcomingEvent: r <= a()().add(1, "hour"),
    withinStartWindow: r <= a()().add(15, "minute"),
    diffMinutes: r.diff(n, "minutes")
  }
}

function L(e) {
  return new o.Bw(T[e])
}

function x(e, t) {
  let n;
  return null != e && (n = {
    startDate: a()(e),
    endDate: true
  }, null != t && (n.endDate = a()(t))), n
}

function M(e, t) {
  let n = U(t),
    r = a()(u.default.extractTimestamp(e)),
    i = (null == n ? true : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : true;
  return {
    startDate: r,
    endDate: i
  }
}

function j(e, t) {
  var n;
  if (null == t) return e;
  let r = null != (n = t.scheduled_end_time) ? n : e.endDate;
  return {
    startDate: null != t.scheduled_start_time ? a()(t.scheduled_start_time) : e.startDate,
    endDate: null != r ? a()(r) : true
  }
}

function k(e) {
  return x(e.scheduledStartTime, e.scheduledEndTime)
}

function U(e) {
  return x(e.scheduled_start_time, e.scheduled_end_time)
}

function G(e, t) {
  return null == e || null == t ? null == e && null == t : e.isSame(t)
}

function V(e, t) {
  return null == e || null == t ? null == e && null == t : G(e.startDate, t.startDate) && G(e.endDate, t.endDate)
}

function F(e) {
  var t;
  let n = null != e.byWeekday ? [...e.byWeekday] : null,
    r = null == (t = e.byNWeekday) ? true : t.map(e => new o.Bw(e.day, e.n)),
    i = new Date(e.start);
  return i.setMilliseconds(0), new o.p3({
    dtstart: i,
    until: null != e.end ? new Date(e.end) : null,
    freq: e.frequency,
    interval: e.interval,
    byweekday: null != n ? n : r,
    bymonth: null != e.byMonth ? [...e.byMonth] : null,
    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
    count: e.count
  })
}

function B(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = n > new Date ? n : new Date,
    a = new Date;
  a.setFullYear(a.getFullYear() + y);
  let o = t.between(i, a, true, (t, n) => n < e + 1);
  return r && o.length > 0 && n.getTime() === o[0].getTime() ? o.slice(1) : o.slice(0, e)
}

function H(e) {
  return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time)
}

function Y(e) {
  if (null == e) return null;
  let t = H(e);
  return null != t ? u.default.fromTimestamp(Math.floor(t.getTime() / c.A.Millis.SECOND) * c.A.Millis.SECOND) : null
}

function W(e, t) {
  if (null == t || null == e) returnfalse;
  let n = new Date(e.start),
    r = new Date(u.default.extractTimestamp(t));
  if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) returnfalse;
  switch (e.frequency) {
    case o.p3.WEEKLY:
      return n.getUTCDay() === r.getUTCDay();
    case o.p3.YEARLY:
      return n.getUTCDate() === r.getUTCDate();
    default:
      returntrue
  }
}

function K(e) {
  let t = L(e.toDate().getDay()),
    n = L(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? v : n.weekday - t.weekday < 0 ? O : b
}

function z(e) {
  let t = L(e.toDate().getDay()),
    n = L(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? I : A
}

function q(e, t) {
  let n = K(t),
    r = z(t),
    i = L(t.toDate().getUTCDay()),
    a = Math.ceil(t.toDate().getUTCDate() / 7),
    s = t.toDate();
  switch (s.setMilliseconds(0), e) {
    case d.z.NONE:
      return null;
    case d.z.WEEKLY:
      return new o.p3({
        dtstart: s,
        freq: o.p3.WEEKLY
      });
    case d.z.BIWEEKLY:
      return new o.p3({
        dtstart: s,
        freq: o.p3.WEEKLY,
        interval: 2
      });
    case d.z.MONTHLY:
      return new o.p3({
        dtstart: s,
        freq: o.p3.MONTHLY,
        byweekday: [i.nth(a)]
      });
    case d.z.YEARLY:
      return new o.p3({
        dtstart: s,
        freq: o.p3.YEARLY
      });
    case d.z.WEEKDAY_ONLY:
      return new o.p3({
        dtstart: s,
        freq: o.p3.DAILY,
        byweekday: n
      });
    case d.z.WEEKEND_ONLY:
      return new o.p3({
        dtstart: s,
        freq: o.p3.DAILY,
        byweekday: r
      })
  }
}

function Z(e, t) {
  let n = q(e, t);
  if (null == n) return null;
  let {
    dtstart: r,
    until: i,
    freq: a,
    interval: o,
    byweekday: s,
    bynweekday: l,
    bymonth: c,
    bymonthday: u,
    byyearday: d,
    count: f
  } = n.options, p = null == l ? true : l.map(e => ({
    n: e[1],
    day: e[0]
  }));
  return {
    start: r.toISOString(),
    end: null == i ? true : i.toISOString(),
    frequency: a,
    interval: o,
    byWeekday: s,
    byNWeekday: p,
    byMonth: c,
    byMonthDay: u,
    byYearDay: d,
    count: f
  }
}

function Q(e, t) {
  if (null == t) return d.z.NONE;
  let n = F(t);
  switch (n.options.freq) {
    case o.p3.WEEKLY:
      if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
      return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
    case o.p3.YEARLY:
      return d.z.YEARLY;
    case o.p3.MONTHLY:
      return d.z.MONTHLY;
    case o.p3.DAILY:
      if ((0, r.isEqual)(n.options.byweekday, K(e))) return d.z.WEEKDAY_ONLY;
      if ((0, r.isEqual)(n.options.byweekday, z(e))) return d.z.WEEKEND_ONLY;
      return d.z.NONE;
    default:
      return d.z.NONE
  }
}

function X(e, t) {
  return (null == e ? true : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule)
}

function J(e, t, n) {
  return (null == e ? true : e.is_canceled) ? f.XG.CANCELED : t < n ? f.XG.COMPLETED : null != e ? f.XG.SCHEDULED : null
}