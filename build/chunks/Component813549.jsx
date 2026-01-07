/** Chunk was on web.js **/
/** chunk id: 813549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s.Hb,
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk385499 = require("./385499.jsx"),
  Chunk674563 = require("./674563.js"),
  Chunk105893 = require("./105893.js");
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
    className: a()(c, l.nameTag),
    style: m,
    children: [(0, r.jsxs)("span", {
      className: a()(l.username, d),
      style: null != s ? {
        color: s
      } : true,
      children: [g, t]
    }), null != n ? (0, r.jsxs)("span", {
      className: null != f ? f : true,
      children: ["#", n]
    }) : null, null != u ? (0, r.jsx)(o.Z, {
      type: u,
      invertColor: i,
      className: a()(p, l.bot),
      verified: _,
      useRemSizes: h
    }) : null]
  })
}