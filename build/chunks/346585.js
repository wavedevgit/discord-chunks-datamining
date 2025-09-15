/** Chunk was on 85342 **/
/** chunk id: 346585, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  K9: () => h,
  NX: () => y,
  R_: () => O,
  e$: () => g,
  ti: () => b,
  zV: () => m
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

function m(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return a.ZP.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function g(e) {
  let t = (0, l._I)(e.username).replace(u.RN, "").replace(u.iF, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let f = ["@", "#", ":"],
  E = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  p = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function y(e) {
  var t;
  let r = e.username.toLowerCase();
  if ((t = u.kt, r.split("").filter(e => !t.includes(e.charCodeAt(0))).join("")).length < 2) returntrue;
  for (let e of f)
    if (r.includes(e)) returntrue;
  for (let e of p)
    if (r === e.toLowerCase()) returntrue;
  for (let e of E)
    if (r.includes(e.toLowerCase())) returntrue;
  returnfalse
}

function O(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function h(e) {
  let t = s.default.extractTimestamp(e);
  try {
    return i()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function b(e) {
  return (0, o.EQ)(e).with({
    rateLimited: true
  }, () => ({
    type: c.K.RATE_LIMIT,
    message: d.intl.string(d.t.T15lqq)
  })).with({
    error: o.P.not(o.P.nullish)
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
    message: d.intl.string(d.t.PgfBS0)
  })).with({
    taken: true
  }, () => ({
    type: c.K.ERROR,
    message: d.intl.string(d.t.mCrAUV)
  })).with({
    error: o.P.nullish
  }, () => ({
    type: c.K.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => true)
}