/** Chunk was on web.js **/
/** chunk id: 546791, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E2: () => C,
  Kp: () => x,
  LI: () => b,
  MH: () => D,
  Qr: () => E,
  _p: () => T,
  f0: () => v,
  iB: () => O,
  jV: () => I,
  k0: () => N,
  lW: () => R,
  lx: () => y,
  m4: () => S,
  nE: () => P,
  t3: () => g,
  yH: () => A
}), require("./388685.js"), require("./642613.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk594174 = require("./594174.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk277537 = require("./277537.js"),
  Chunk292352 = require("./292352.js"),
  Chunk148806 = require("./148806.js"),
  Chunk388032 = require("./388032.jsx");
let f = 60,
  p = 3600,
  _ = 86400,
  m = 172800,
  h = 604800,
  g = () => ({
    today: Chunk388032.intl.string(Chunk148806.default.VjIAQQ),
    yesterday: Chunk388032.intl.string(Chunk148806.default["2a8xHY"]),
    days: Chunk148806.default.Xt6oND
  }),
  E = e => e ? {
    today: d.intl.string(u.default["2AtcIs"]),
    yesterday: d.intl.string(u.default.stOECr),
    days: u.default.n8n5Ba
  } : {
    today: d.intl.string(u.default.g1ZX6m),
    yesterday: d.intl.string(u.default.s3qSVt),
    days: u.default.f1UJiC
  },
  b = (e, t, n) => {
    let r = i()().diff(i()(e), "s"),
      o = t(),
      a = i()(e).format("LL");
    return r < _ ? o.today : r < m ? o.yesterday : d.intl.formatToPlainString(o.days, {
      days: Math.min(Math.floor(r / _), null != n ? n : 999)
    })
  },
  y = (e, t) => {
    let n = i()().diff(i()(e), "s"),
      r = t(),
      o = i()(e).format("LL");
    return n < f ? r.seconds : n < p ? d.intl.formatToPlainString(r.minutes, {
      count: Math.floor(n / f)
    }) : n < _ ? d.intl.formatToPlainString(r.hours, {
      count: Math.floor(n / p)
    }) : n < m ? r.yesterday : n < h ? d.intl.formatToPlainString(r.days, {
      count: Math.floor(n / _)
    }) : d.intl.formatToPlainString(r.date, {
      date: o
    })
  },
  O = e => e.display_type === c.MY.USER_ADD || e.display_type === c.MY.USER_INTERACTION || e.display_type === c.MY.USER_CALLED,
  v = e => e.display_type === c.MY.GUILD_ADD || e.display_type === c.MY.GUILD_INTERACTION,
  S = e => e.display_type === c.MY.PURCHASES,
  I = e => {
    for (let t of Object.values(c.MY))
      if (t.toString() === e) return t
  },
  T = e => {
    let t = C(e);
    return 0 === t.size ? [] : Array.from(t.entries()).sort((e, t) => e[1].priority - t[1].priority)
  },
  C = e => {
    let t = new Map(c.tx);
    return e && (t = new Map([...t, ...c.U])), t
  },
  A = e => {
    let t = Math.floor(e / 60),
      n = e % 60;
    return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m")
  },
  N = () => {
    if (Chunk914788.Z.getAreLinkedUsersProcessed()) return Chunk914788.Z.getLinkedUsers();
    Chunk260722.ZP.fetchLinkedUsers()
  },
  P = (e, t) => (0, l.PO)("family_center_activity_card") ? t : e,
  R = (e, t) => (0, l.vE)("family_center_activity_card") ? t : e,
  w = () => Object.values(Chunk914788.Z.getLinkedUsers()).some(e => e.link_status === c.ne.ACTIVE),
  D = () => {
    let e = Chunk594174.default.getCurrentUser(),
      t = w(),
      n = (0, Chunk277537.vE)("settings-controls");
    return (null == module ? true : module.nsfwAllowed) === false && exports && require
  },
  x = (e, t) => t > 0 && 0 === e ? d.intl.formatToPlainString(u.default["L/Cj7S"], {
    callCount: t
  }) : e > 0 && 0 === t ? d.intl.formatToPlainString(u.default["6X1F0i"], {
    messageCount: e
  }) : d.intl.formatToPlainString(u.default.IYqGMG, {
    messageCount: e,
    callCount: t
  })