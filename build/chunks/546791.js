/** Chunk was on web.js **/
/** chunk id: 546791, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E2: () => I,
  LI: () => g,
  Qr: () => m,
  _p: () => v,
  f0: () => y,
  iB: () => b,
  jV: () => O,
  k0: () => S,
  lx: () => E,
  t3: () => h,
  yH: () => T
}), require("./388685.js"), require("./642613.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk292352 = require("./292352.js"),
  Chunk412297 = require("./412297.js"),
  Chunk388032 = require("./388032.jsx");
let u = 60,
  d = 3600,
  f = 86400,
  _ = 172800,
  p = 604800,
  h = () => ({
    today: Chunk388032.intl.string(Chunk412297.default.VjIAQU),
    yesterday: Chunk388032.intl.string(Chunk412297.default["2a8xHR"]),
    days: Chunk412297.default.Xt6oND
  }),
  m = e => e ? {
    today: c.intl.string(l.default["2AtcIi"]),
    yesterday: c.intl.string(l.default.stOECg),
    days: l.default.n8n5BQ
  } : {
    today: c.intl.string(l.default.g1ZX6u),
    yesterday: c.intl.string(l.default.s3qSVl),
    days: l.default.f1UJiI
  },
  g = (e, t, n) => {
    let r = i()().diff(i()(e), "s"),
      a = t(),
      o = i()(e).format("LL");
    return r < f ? a.today : r < _ ? a.yesterday : c.intl.formatToPlainString(a.days, {
      days: Math.min(Math.floor(r / f), null != n ? n : 999)
    })
  },
  E = (e, t) => {
    let n = i()().diff(i()(e), "s"),
      r = t(),
      a = i()(e).format("LL");
    return n < u ? r.seconds : n < d ? c.intl.formatToPlainString(r.minutes, {
      count: Math.floor(n / u)
    }) : n < f ? c.intl.formatToPlainString(r.hours, {
      count: Math.floor(n / d)
    }) : n < _ ? r.yesterday : n < p ? c.intl.formatToPlainString(r.days, {
      count: Math.floor(n / f)
    }) : c.intl.formatToPlainString(r.date, {
      date: a
    })
  },
  b = e => e.display_type === s.MY.USER_ADD || e.display_type === s.MY.USER_INTERACTION || e.display_type === s.MY.USER_CALLED,
  y = e => e.display_type === s.MY.GUILD_ADD || e.display_type === s.MY.GUILD_INTERACTION,
  O = e => {
    for (let t of Object.values(s.MY))
      if (t.toString() === e) return t
  },
  v = e => {
    let t = I(e);
    return 0 === t.size ? [] : Array.from(t.entries()).sort((e, t) => e[1].priority - t[1].priority)
  },
  I = e => {
    let t = new Map(s.tx);
    return e && (t = new Map([...t, ...s.U])), t
  },
  T = e => {
    let t = Math.floor(e / 60),
      n = e % 60;
    return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m")
  },
  S = () => {
    if (Chunk914788.Z.getAreLinkedUsersProcessed()) return Chunk914788.Z.getLinkedUsers();
    Chunk260722.ZP.fetchLinkedUsers()
  }