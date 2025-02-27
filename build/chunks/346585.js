/** Chunk was on 70846 **/
a.d(t, {
  IE: () => y,
  K9: () => R,
  NX: () => h,
  R_: () => C,
  e$: () => m,
  ti: () => I,
  zV: () => c
}), a(757143), a(301563), a(47120), a(627341);
var n = a(913527),
  i = a.n(n),
  r = a(278074),
  o = a(768581),
  s = a(709054),
  l = a(624138),
  d = a(219496),
  u = a(801461),
  f = a(388032);

function c(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return o.ZP.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function m(e) {
  let t = (0, l._I)(e.username).replace(u.RN, "").replace(u.iF, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let g = ["@", "#", ":"],
  _ = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  p = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function h(e) {
  var t;
  let a = e.username.toLowerCase();
  if ((t = u.kt, a.split("").filter(e => !t.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of g)
    if (a.includes(e)) return !0;
  for (let e of p)
    if (a === e.toLowerCase()) return !0;
  for (let e of _)
    if (a.includes(e.toLowerCase())) return !0;
  return !1
}

function C(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function R(e) {
  let t = s.default.extractTimestamp(e);
  try {
    return i()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function I(e) {
  return (0, r.EQ)(e).with({
    rateLimited: !0
  }, () => ({
    type: d.K.RATE_LIMIT,
    message: f.NW.string(f.t.T15lqq)
  })).with({
    error: r.P.not(r.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: d.K.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: d.K.AVAILABLE,
    message: f.NW.string(f.t.PgfBS0)
  })).with({
    taken: !0
  }, () => ({
    type: d.K.ERROR,
    message: f.NW.string(f.t.mCrAUV)
  })).with({
    error: r.P.nullish
  }, () => ({
    type: d.K.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function y(e) {
  return new Date(2024, 2, 4).toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}