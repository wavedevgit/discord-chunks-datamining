/** Chunk was on 49508 **/
/** chunk id: 546791, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  E2: () => S,
  LI: () => u,
  Qr: () => s,
  _p: () => f,
  f0: () => _,
  iB: () => c,
  jV: () => T,
  lx: () => E,
  t3: () => d,
  yH: () => I
}), require("./388685.js"), require("./642613.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk292352 = require("./292352.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx");
let d = () => ({
    today: Chunk388032.intl.string(Chunk345909.default.VjIAQU),
    yesterday: Chunk388032.intl.string(Chunk345909.default["2a8xHR"]),
    days: Chunk345909.default.Xt6oND
  }),
  s = t => t ? {
    today: o.intl.string(a.default["2AtcIi"]),
    yesterday: o.intl.string(a.default.stOECg),
    days: a.default.n8n5BQ
  } : {
    today: o.intl.string(a.default.g1ZX6u),
    yesterday: o.intl.string(a.default.s3qSVl),
    days: a.default.f1UJiI
  },
  u = (t, e, n) => {
    let i = r()().diff(r()(t), "s"),
      l = e();
    r()(t).format("LL");
    return i < 86400 ? l.today : i < 172800 ? l.yesterday : o.intl.formatToPlainString(l.days, {
      days: Math.min(Math.floor(i / 86400), null != n ? n : 999)
    })
  },
  E = (t, e) => {
    let n = r()().diff(r()(t), "s"),
      i = e(),
      l = r()(t).format("LL");
    return n < 60 ? i.seconds : n < 3600 ? o.intl.formatToPlainString(i.minutes, {
      count: Math.floor(n / 60)
    }) : n < 86400 ? o.intl.formatToPlainString(i.hours, {
      count: Math.floor(n / 3600)
    }) : n < 172800 ? i.yesterday : n < 604800 ? o.intl.formatToPlainString(i.days, {
      count: Math.floor(n / 86400)
    }) : o.intl.formatToPlainString(i.date, {
      date: l
    })
  },
  c = t => t.display_type === l.MY.USER_ADD || t.display_type === l.MY.USER_INTERACTION || t.display_type === l.MY.USER_CALLED,
  _ = t => t.display_type === l.MY.GUILD_ADD || t.display_type === l.MY.GUILD_INTERACTION,
  T = t => {
    for (let e of Object.values(l.MY))
      if (e.toString() === t) return e
  },
  f = t => {
    let e = S(t);
    return 0 === e.size ? [] : Array.from(e.entries()).sort((t, e) => t[1].priority - e[1].priority)
  },
  S = t => {
    let e = new Map(l.tx);
    return t && (e = new Map([...e, ...l.U])), e
  },
  I = t => {
    let e = Math.floor(t / 60),
      n = t % 60;
    return e > 0 ? "".concat(e, "h ").concat(n, "m") : "".concat(n, "m")
  }