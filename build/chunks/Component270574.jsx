/** Chunk was on web.js **/
/** chunk id: 270574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  v: () => s.nu
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk709066 = require("./709066.jsx"),
  Chunk705751 = require("./705751.js"),
  Chunk174616 = require("./174616.js");
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
    style: h,
    useRemSizes: m = false,
    usernameIcon: g
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c, l.oM),
    style: h,
    children: [(0, r.jsxs)("span", {
      className: a()(l.Xh, d),
      style: null != s ? {
        color: s
      } : true,
      children: [g, t]
    }), null != n ? (0, r.jsxs)("span", {
      className: null != f ? f : true,
      children: ["#", n]
    }) : null, null != u ? (0, r.jsx)(o.A, {
      type: u,
      invertColor: i,
      className: a()(p, l.Od),
      verified: _,
      useRemSizes: m
    }) : null]
  })
}