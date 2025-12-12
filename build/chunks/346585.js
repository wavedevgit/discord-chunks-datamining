/** Chunk was on 85342 **/
/** chunk id: 346585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K9: () => y,
  NX: () => h,
  R_: () => O,
  e$: () => m,
  ti: () => S,
  zV: () => f
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./314940.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk278074 = require("./278074.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk624138 = require("./624138.js"),
  Chunk219496 = require("./219496.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
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
  E = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  p = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function h(e) {
  var t;
  let n = e.username.toLowerCase();
  if ((t = u.kt, n.split("").filter(e => !t.includes(e.charCodeAt(0))).join("")).length < 2) returntrue;
  for (let e of g)
    if (n.includes(e)) returntrue;
  for (let e of p)
    if (n === e.toLowerCase()) returntrue;
  for (let e of E)
    if (n.includes(e.toLowerCase())) returntrue;
  returnfalse
}

function O(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function y(e) {
  let t = s.default.extractTimestamp(e);
  try {
    return i()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function S(e) {
  return (0, a.EQ)(e).with({
    rateLimited: true
  }, () => ({
    type: c.K.RATE_LIMIT,
    message: d.intl.string(d.t.T15lqn)
  })).with({
    error: a.P.not(a.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: c.K.ERROR,
      message: t
    }
  }).with({
    taken: false
  }, () => ({
    type: c.K.AVAILABLE,
    message: d.intl.string(d.t.PgfBSx)
  })).with({
    taken: true
  }, () => ({
    type: c.K.ERROR,
    message: d.intl.string(d.t.mCrAUb)
  })).with({
    error: a.P.nullish
  }, () => ({
    type: c.K.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => true)
}