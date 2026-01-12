/** Chunk was on 9536 **/
/** chunk id: 165610, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk395586 = require("./395586.jsx"),
  Chunk825055 = require("./825055.jsx"),
  Chunk909656 = require("./909656.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([u.Z], () => u.Z.getGuild(t));
  return l()(null != n, "Guild not found"), (0, r.jsxs)(o.AL, {
    guildId: t,
    children: [(0, r.jsx)(c.Z, {
      children: g.intl.string(g.t["WMyX2+"])
    }), (0, r.jsx)(s.LZC, {
      size: 32
    }), (0, r.jsx)(d.Z, {
      guild: n,
      isGuildProducts: true
    })]
  })
}