/** Chunk was on web.js **/
/** chunk id: 813549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => Chunk674563.Hb,
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk385499 = require("./385499.jsx"),
  Chunk674563 = require("./674563.js"),
  Chunk685679 = require("./685679.js");
let c = e => {
  let {
    name: t,
    discriminator: n,
    invertBotTagColor: i,
    nameColor: s,
    className: c,
    botType: u,
    usernameClass: d,
    discriminatorClass: f,
    botClass: p,
    botVerified: _ = false,
    style: m,
    useRemSizes: h = false,
    usernameIcon: g
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(c, l.nameTag),
    style: m,
    children: [(0, r.jsxs)("span", {
      className: o()(l.username, d),
      style: null != s ? {
        color: s
      } : true,
      children: [g, t]
    }), null != n ? (0, r.jsxs)("span", {
      className: null != f ? f : true,
      children: ["#", n]
    }) : null, null != u ? (0, r.jsx)(a.Z, {
      type: u,
      invertColor: i,
      className: o()(p, l.bot),
      verified: _,
      useRemSizes: h
    }) : null]
  })
}