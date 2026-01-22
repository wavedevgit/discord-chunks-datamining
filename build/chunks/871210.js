/** Chunk was on 86142 **/
/** chunk id: 871210, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Bj: () => h,
  C4: () => A,
  b5: () => _,
  et: () => f,
  h_: () => x,
  z2: () => E
}), require("./747238.js"), require("./812715.js"), require("./896048.js"), require("./801541.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk889137 = require("./889137.js"),
  Chunk486020 = require("./486020.js"),
  Chunk661191 = require("./661191.js"),
  Chunk240248 = require("./240248.js"),
  Chunk963334 = require("./963334.js"),
  Chunk789622 = require("./789622.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return l.Ay.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function f(e) {
  let t = (0, o.sS)(e.username).replace(u.uA, "").replace(u.SY, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let p = ["@", "#", ":"],
  g = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  m = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function A(e) {
  var t;
  let n = e.username.toLowerCase();
  if ((t = u.RS, n.split("").filter(e => !t.includes(e.charCodeAt(0))).join("")).length < 2) returntrue;
  for (let e of p)
    if (n.includes(e)) returntrue;
  for (let e of m)
    if (n === e.toLowerCase()) returntrue;
  for (let e of g)
    if (n.includes(e.toLowerCase())) returntrue;
  returnfalse
}

function x(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function _(e) {
  let t = a.default.extractTimestamp(e);
  try {
    return i()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function E(e) {
  return (0, s.YW)(e).with({
    rateLimited: true
  }, () => ({
    type: c.q.RATE_LIMIT,
    message: d.intl.string(d.t.T15lqn)
  })).with({
    error: s.P.not(s.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: c.q.ERROR,
      message: t
    }
  }).with({
    taken: false
  }, () => ({
    type: c.q.AVAILABLE,
    message: d.intl.string(d.t.PgfBSx)
  })).with({
    taken: true
  }, () => ({
    type: c.q.ERROR,
    message: d.intl.string(d.t.mCrAUb)
  })).with({
    error: s.P.nullish
  }, () => ({
    type: c.q.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => true)
}