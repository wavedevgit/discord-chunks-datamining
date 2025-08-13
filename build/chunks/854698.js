/** Chunk was on web.js **/
/** chunk id: 854698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BP: () => Q,
  DK: () => H,
  G3: () => p,
  Ho: () => Z,
  Ib: () => h,
  P8: () => C,
  PJ: () => F,
  Rp: () => Y,
  Uq: () => G,
  Y4: () => B,
  hn: () => b,
  iA: () => M,
  ib: () => R,
  lh: () => J,
  mF: () => q,
  ub: () => D,
  v1: () => j,
  x6: () => k,
  zi: () => X
}), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk859334 = require("./859334.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk849464 = require("./849464.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");
let p = 365,
  h = 366,
  m = "ddd MMM Do \xb7 LT",
  g = "ddd MMM Do, YYYY \xb7 LT",
  E = "LT",
  b = 4,
  y = [Chunk859334.Ci.MO.weekday, Chunk859334.Ci.TU.weekday, Chunk859334.Ci.WE.weekday, Chunk859334.Ci.TH.weekday, Chunk859334.Ci.FR.weekday],
  O = [Chunk859334.Ci.SU.weekday, Chunk859334.Ci.MO.weekday, Chunk859334.Ci.TU.weekday, Chunk859334.Ci.WE.weekday, Chunk859334.Ci.TH.weekday],
  v = [Chunk859334.Ci.TU.weekday, Chunk859334.Ci.WE.weekday, Chunk859334.Ci.TH.weekday, Chunk859334.Ci.FR.weekday, Chunk859334.Ci.SA.weekday],
  I = [Chunk859334.Ci.SA.weekday, Chunk859334.Ci.SU.weekday],
  T = [Chunk859334.Ci.FR.weekday, Chunk859334.Ci.SA.weekday],
  S = [Chunk859334.Ci.SU.weekday, Chunk859334.Ci.MO.weekday],
  A = [Chunk859334.Ci.SU.weekday, Chunk859334.Ci.MO.weekday, Chunk859334.Ci.TU.weekday, Chunk859334.Ci.WE.weekday, Chunk859334.Ci.TH.weekday, Chunk859334.Ci.FR.weekday, Chunk859334.Ci.SA.weekday],
  N = new Set([0, 6]);

function C(e) {
  var t;
  let n = e.toDate(),
    r = Math.ceil(n.getDate() / 7),
    i = e.format("dddd"),
    o = [{
      value: d.z.NONE,
      label: _.intl.string(_.t["0bK0Bw"])
    }, {
      value: d.z.WEEKLY,
      label: _.intl.formatToPlainString(_.t["B8/yfn"], {
        weekday: i
      })
    }, {
      value: d.z.BIWEEKLY,
      label: _.intl.formatToPlainString(_.t["z+aIub"], {
        weekday: i
      })
    }, {
      value: d.z.MONTHLY,
      label: _.intl.formatToPlainString(_.t.mjOEBg, {
        nth: r,
        weekday: i
      })
    }, {
      value: d.z.YEARLY,
      label: _.intl.formatToPlainString(_.t["5DFcVl"], {
        date: n.toLocaleString(_.intl.currentLocale, {
          month: "short",
          day: "2-digit"
        })
      })
    }];
  return N.has(n.getDay()) ? (null == (t = s.default.getCurrentUser()) ? true : t.isStaff()) && o.push({
    value: d.z.WEEKEND_ONLY,
    label: _.intl.string(_.t.hRpynZ)
  }) : o.push({
    value: d.z.WEEKDAY_ONLY,
    label: _.intl.string(_.t["jYR/MT"])
  }), o
}
let R = () => {
    let e = o()().add(1, "hour"),
      t = module.hour();
    return module.minutes() >= 30 && (t += 1), module.hour(exports).minutes(0).seconds(0)
  },
  P = (e, t) => (0, l.vc)(e, e.get("years") === t.get("years") ? m : g),
  w = (e, t) => {
    let n = (0, l.wY)(e.toDate(), t.toDate());
    return n > 1 || n < 0 ? P(e, t) : (0, l.vc)(e, e.localeData().calendar(n < 1 ? "sameDay" : "nextDay", e, t))
  };

function D(e, t, n) {
  null == n && (n = o()());
  let r = o()(e),
    i = null != t && "" !== t ? o()(t) : true,
    a = null != t && r.isSame(i, "day");
  return {
    startDateTimeString: w(r, n),
    endDateTimeString: null != i ? a ? i.format(E) : P(i, n) : true,
    currentOrPastEvent: r <= n,
    upcomingEvent: r <= o()().add(1, "hour"),
    withinStartWindow: r <= o()().add(15, "minute"),
    diffMinutes: r.diff(n, "minutes")
  }
}

function L(e) {
  return new a.OG(A[e])
}

function x(e, t) {
  let n;
  return null != e && (n = {
    startDate: o()(e),
    endDate: true
  }, null != t && (n.endDate = o()(t))), n
}

function M(e, t) {
  let n = U(t),
    r = o()(u.default.extractTimestamp(e)),
    i = (null == n ? true : n.endDate) != null ? r.clone().add(n.endDate.diff(n.startDate)) : true;
  return {
    startDate: r,
    endDate: i
  }
}

function k(e, t) {
  var n;
  if (null == t) return e;
  let r = null != (n = t.scheduled_end_time) ? n : e.endDate;
  return {
    startDate: null != t.scheduled_start_time ? o()(t.scheduled_start_time) : e.startDate,
    endDate: null != r ? o()(r) : true
  }
}

function j(e) {
  return x(e.scheduledStartTime, e.scheduledEndTime)
}

function U(e) {
  return x(e.scheduled_start_time, e.scheduled_end_time)
}

function G(e, t) {
  return null == e || null == t ? null == e && null == t : e.isSame(t)
}

function B(e, t) {
  return null == e || null == t ? null == e && null == t : G(e.startDate, t.startDate) && G(e.endDate, t.endDate)
}

function Z(e) {
  var t;
  let n = null != e.byWeekday ? [...e.byWeekday] : null,
    r = null == (t = e.byNWeekday) ? true : t.map(e => new a.OG(e.day, e.n)),
    i = new Date(e.start);
  return i.setMilliseconds(0), new a.Ci({
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

function F(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = n > new Date ? n : new Date,
    o = new Date;
  o.setFullYear(o.getFullYear() + b);
  let a = t.between(i, o, true, (t, n) => n < e + 1);
  return r && a.length > 0 && n.getTime() === a[0].getTime() ? a.slice(1) : a.slice(0, e)
}

function V(e) {
  return null == e.recurrence_rule ? null : new Date(e.scheduled_start_time)
}

function H(e) {
  if (null == e) return null;
  let t = V(e);
  return null != t ? u.default.fromTimestamp(Math.floor(t.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND) : null
}

function Y(e, t) {
  if (null == t || null == e) returnfalse;
  let n = new Date(e.start),
    r = new Date(u.default.extractTimestamp(t));
  if (n.getUTCHours() !== r.getUTCHours() || n.getUTCMinutes() !== r.getUTCMinutes() || n.getUTCSeconds() !== r.getUTCSeconds()) returnfalse;
  switch (e.frequency) {
    case a.Ci.WEEKLY:
      return n.getUTCDay() === r.getUTCDay();
    case a.Ci.YEARLY:
      return n.getUTCDate() === r.getUTCDate();
    default:
      returntrue
  }
}

function W(e) {
  let t = L(e.toDate().getDay()),
    n = L(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? v : n.weekday - t.weekday < 0 ? O : y
}

function K(e) {
  let t = L(e.toDate().getDay()),
    n = L(e.toDate().getUTCDay());
  return n.weekday - t.weekday > 0 ? S : n.weekday - t.weekday < 0 ? T : I
}

function z(e, t) {
  let n = W(t),
    r = K(t),
    i = L(t.toDate().getUTCDay()),
    o = Math.ceil(t.toDate().getUTCDate() / 7),
    s = t.toDate();
  switch (s.setMilliseconds(0), e) {
    case d.z.NONE:
      return null;
    case d.z.WEEKLY:
      return new a.Ci({
        dtstart: s,
        freq: a.Ci.WEEKLY
      });
    case d.z.BIWEEKLY:
      return new a.Ci({
        dtstart: s,
        freq: a.Ci.WEEKLY,
        interval: 2
      });
    case d.z.MONTHLY:
      return new a.Ci({
        dtstart: s,
        freq: a.Ci.MONTHLY,
        byweekday: [i.nth(o)]
      });
    case d.z.YEARLY:
      return new a.Ci({
        dtstart: s,
        freq: a.Ci.YEARLY
      });
    case d.z.WEEKDAY_ONLY:
      return new a.Ci({
        dtstart: s,
        freq: a.Ci.DAILY,
        byweekday: n
      });
    case d.z.WEEKEND_ONLY:
      return new a.Ci({
        dtstart: s,
        freq: a.Ci.DAILY,
        byweekday: r
      })
  }
}

function q(e, t) {
  let n = z(e, t);
  if (null == n) return null;
  let {
    dtstart: r,
    until: i,
    freq: o,
    interval: a,
    byweekday: s,
    bynweekday: l,
    bymonth: c,
    bymonthday: u,
    byyearday: d,
    count: f
  } = n.options, _ = null == l ? true : l.map(e => ({
    n: e[1],
    day: e[0]
  }));
  return {
    start: r.toISOString(),
    end: null == i ? true : i.toISOString(),
    frequency: o,
    interval: a,
    byWeekday: s,
    byNWeekday: _,
    byMonth: c,
    byMonthDay: u,
    byYearDay: d,
    count: f
  }
}

function X(e, t) {
  if (null == t) return d.z.NONE;
  let n = Z(t);
  switch (n.options.freq) {
    case a.Ci.WEEKLY:
      if (n.options.interval < 1 || n.options.interval > 2) return d.z.NONE;
      return 1 === n.options.interval ? d.z.WEEKLY : d.z.BIWEEKLY;
    case a.Ci.YEARLY:
      return d.z.YEARLY;
    case a.Ci.MONTHLY:
      return d.z.MONTHLY;
    case a.Ci.DAILY:
      if ((0, r.isEqual)(n.options.byweekday, W(e))) return d.z.WEEKDAY_ONLY;
      if ((0, r.isEqual)(n.options.byweekday, K(e))) return d.z.WEEKEND_ONLY;
      return d.z.NONE;
    default:
      return d.z.NONE
  }
}

function Q(e, t) {
  return (null == e ? true : e.scheduled_start_time) !== t.scheduledStartTime || e.scheduled_end_time !== t.scheduledEndTime || !(0, r.isEqual)(e.recurrence_rule, t.recurrenceRule)
}

function J(e, t, n) {
  return (null == e ? true : e.is_canceled) ? f.p1.CANCELED : t < n ? f.p1.COMPLETED : null != e ? f.p1.SCHEDULED : null
}