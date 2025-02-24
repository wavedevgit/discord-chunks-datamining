/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Ae: () => b,
  GE: () => A,
  GL: () => h,
  Jd: () => P,
  Jg: () => O,
  Nq: () => I,
  Ol: () => v,
  PJ: () => g,
  T_: () => p,
  V5: () => T,
  ap: () => C,
  bT: () => R,
  dw: () => N,
  ig: () => L,
  kr: () => E,
  n2: () => y,
  q_: () => D,
  vU: () => w,
  yA: () => S,
  yh: () => m,
  zo: () => x
}), n(301563);
var r = n(164369),
  i = n(913527),
  o = n.n(i),
  a = n(884439),
  s = n(876215),
  l = n(70956),
  c = n(709054),
  u = n(388032);
let d = e => {
    let {
      start: t,
      now: n
    } = e, r = Math.max(n - t, 0) / l.Z.Millis.SECOND, i = Math.floor(r) % l.Z.Seconds.MINUTE, o = Math.floor(r / l.Z.Seconds.MINUTE) % l.Z.Seconds.MINUTE;
    return {
      seconds: i,
      minutes: o,
      hours: Math.floor(r / l.Z.Seconds.HOUR),
      days: Math.floor(r / l.Z.Seconds.DAY)
    }
  },
  f = (e, t) => d({
    start: "id" in e ? c.default.extractTimestamp(e.id) : e.start,
    now: "end" in e && null != e.end ? Math.min(e.end, t) : t
  }),
  p = (e, t) => {
    let {
      seconds: n,
      minutes: r,
      hours: i
    } = f(e, t);

    function o(e) {
      return String(e).padStart(2, "0")
    }
    return u.NW.formatToPlainString(u.t["l5PP//"], {
      hours: i,
      minutes: i > 0 ? o(r) : r,
      seconds: o(n)
    })
  },
  _ = {
    secondsAgo: e => u.NW.formatToPlainString(u.t.EOrEJi, {
      count: e
    }),
    minutesAgo: e => u.NW.formatToPlainString(u.t.LRNgHh, {
      count: e
    }),
    hoursAgo: e => u.NW.formatToPlainString(u.t.raJpz8, {
      count: e
    }),
    daysAgo: e => u.NW.formatToPlainString(u.t.KkvKho, {
      count: e
    }),
    weeksAgo: e => u.NW.formatToPlainString(u.t.sDtO6O, {
      count: e
    }),
    monthsAgo: e => u.NW.formatToPlainString(u.t.ITymoq, {
      count: e
    })
  },
  h = function(e, t, n) {
    let {
      formatSet: r = _
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = o()(n), a = o()(c.default.extractTimestamp(e.id)), s = i.diff(a, "s"), u = Math.abs(s);
    if (u < l.Z.Seconds.MINUTE) return r.secondsAgo(s);
    if (u < l.Z.Seconds.HOUR) {
      let e = Math.round(s / l.Z.Seconds.MINUTE);
      return r.minutesAgo(e)
    }
    if (u < 12 * l.Z.Seconds.HOUR) {
      let e = Math.round(s / l.Z.Seconds.HOUR);
      return r.hoursAgo(e)
    }
    if (u < 9 * l.Z.Seconds.DAY) {
      let e = Math.round(s / l.Z.Seconds.DAY);
      return r.daysAgo(e)
    }
    if (u < 4 * l.Z.Seconds.WEEK) {
      let e = Math.round(s / (7 * l.Z.Seconds.DAY));
      return r.weeksAgo(e)
    }
    let d = Math.round(s / l.Z.Seconds.DAYS_30);
    return r.monthsAgo(d)
  },
  m = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return E(e) ? p(e, n) : h(e, t, n, r)
  };

function g(e, t) {
  return e.traits.find(e => e.type === t)
}

function E(e) {
  var t, n;
  return null !== (n = null === (t = g(e, a.N.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n
}

function v(e) {
  var t, n;
  return null !== (n = null === (t = g(e, a.N.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n
}

function b(e) {
  return c.default.age(e.id) / l.Z.Millis.HOUR < 48
}

function y(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function O(e) {
  return E(e) && !y(e)
}

function S(e) {
  var t;
  return null === (t = g(e, a.N.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds
}

function I(e) {
  var t;
  return null === (t = g(e, a.N.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range
}

function T(e) {
  var t;
  return null === (t = g(e, a.N.MARATHON)) || void 0 === t ? void 0 : t.marathon
}

function N(e) {
  let t = g(e, a.N.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function A(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: i = 0
  } = (0, r.Z)({
    start: e,
    end: new Date
  });
  return u.NW.formatToPlainString(u.t.NXBtjI, {
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : i
  })
}

function C(e) {
  if (null == e || "" === e) return null;
  let t = /\w+ (\d+), \w+ (\d+)/.exec(e);
  return null == t ? null : u.NW.formatToPlainString(u.t["ijVm6+"], {
    seasonNum: t[1],
    episodeNum: t[2]
  })
}

function R(e, t) {
  var n, r, i, o;
  let a;
  let s = null !== (i = null == t ? void 0 : null === (n = t.size) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : void 0,
    l = null !== (o = null == t ? void 0 : null === (r = t.size) || void 0 === r ? void 0 : r[1]) && void 0 !== o ? o : void 0;
  return null != s && null != l && s > 0 && l > 0 ? a = u.NW.formatToPlainString(u.t.wmUSi4, {
    count: s,
    max: l
  }) : null != s && s > 0 && (a = u.NW.formatToPlainString(u.t.UTYMsb, {
    count: s
  })), null != a && null != e ? "".concat(e, " (").concat(a, ")") : null != e ? e : a
}

function P(e) {
  return e.content_type === s.s.TOP_GAME
}

function w(e) {
  var t;
  return null === (t = g(e, a.N.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days
}

function D(e) {
  let t = w(e);
  if (null == t || t < 3) return !1;
  let n = c.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * l.Z.Millis.HOUR)
}

function x(e) {
  let t = S(e);
  if (null == t) return {
    text: null,
    tooltipText: null
  };
  let n = Math.round(t / l.Z.Seconds.HOUR);
  return n <= 0 ? {
    text: null,
    tooltipText: null
  } : {
    text: u.NW.formatToPlainString(u.t.vZaMen, {
      hours: n
    }),
    tooltipText: u.NW.formatToPlainString(u.t["S5F48/"], {
      hours: n
    })
  }
}

function L(e) {
  var t;
  return null === (t = g(e, a.N.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending
}