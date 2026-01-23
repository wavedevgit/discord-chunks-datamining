/** Chunk was on web.js **/
/** chunk id: 923531, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $h: () => w,
  Is: () => O,
  Mo: () => I,
  VE: () => C,
  aq: () => b,
  cV: () => g,
  fq: () => R,
  hO: () => T,
  i6: () => E,
  jp: () => m,
  k5: () => A,
  kN: () => S,
  mV: () => y,
  u7: () => v
}), require("./896048.js"), require("./638769.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk287809 = require("./287809.js"),
  Chunk899847 = require("./899847.js"),
  Chunk695515 = require("./695515.js"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");
let d = 60,
  f = 3600,
  p = 86400,
  _ = 172800,
  h = 604800,
  m = () => ({
    today: u.intl.string(c.default.VjIAQQ),
    yesterday: u.intl.string(c.default["2a8xHY"]),
    days: c.default.Xt6oND
  }),
  g = e => e ? {
    today: u.intl.string(c.default["2AtcIs"]),
    yesterday: u.intl.string(c.default.stOECr),
    days: c.default.n8n5Ba
  } : {
    today: u.intl.string(c.default.g1ZX6m),
    yesterday: u.intl.string(c.default.s3qSVt),
    days: c.default.f1UJiC
  },
  E = (e, t, n) => {
    let r = i()().diff(i()(e), "s"),
      a = t(),
      s = i()(e).format("LL");
    return r < p ? a.today : r < _ ? a.yesterday : u.intl.formatToPlainString(a.days, {
      days: Math.min(Math.floor(r / p), null != n ? n : 999)
    })
  },
  y = (e, t) => {
    let n = i()().diff(i()(e), "s"),
      r = t(),
      a = i()(e).format("LL");
    return n < d ? r.seconds : n < f ? u.intl.formatToPlainString(r.minutes, {
      count: Math.floor(n / d)
    }) : n < p ? u.intl.formatToPlainString(r.hours, {
      count: Math.floor(n / f)
    }) : n < _ ? r.yesterday : n < h ? u.intl.formatToPlainString(r.days, {
      count: Math.floor(n / p)
    }) : u.intl.formatToPlainString(r.date, {
      date: a
    })
  },
  b = e => e.display_type === l.NV.USER_ADD || e.display_type === l.NV.USER_INTERACTION || e.display_type === l.NV.USER_CALLED,
  O = e => e.display_type === l.NV.GUILD_ADD || e.display_type === l.NV.GUILD_INTERACTION,
  v = e => e.display_type === l.NV.PURCHASES,
  A = e => {
    for (let t of Object.values(l.NV))
      if (t.toString() === e) return t
  },
  I = () => {
    let e = S();
    return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority)
  },
  S = () => new Map(l.ly),
  T = e => {
    let t = Math.floor(e / 60),
      n = e % 60;
    return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m")
  },
  C = () => {
    if (o.A.getAreLinkedUsersProcessed()) return o.A.getLinkedUsers();
    s.Ay.fetchLinkedUsers()
  },
  N = () => Object.values(o.A.getLinkedUsers()).some(e => e.link_status === l.Ef.ACTIVE),
  w = () => {
    let e = a.default.getCurrentUser(),
      t = N();
    return (null == e ? true : e.nsfwAllowed) === false && t
  },
  R = (e, t) => t > 0 && 0 === e ? u.intl.formatToPlainString(c.default["L/Cj7S"], {
    callCount: t
  }) : e > 0 && 0 === t ? u.intl.formatToPlainString(c.default["6X1F0i"], {
    messageCount: e
  }) : u.intl.formatToPlainString(c.default.IYqGMG, {
    messageCount: e,
    callCount: t
  })