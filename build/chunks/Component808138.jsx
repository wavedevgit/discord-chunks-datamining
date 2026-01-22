/** Chunk was on 47841 **/
/** chunk id: 808138, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk209812 = require("./209812.jsx"),
  Chunk501592 = require("./501592.jsx"),
  Chunk623529 = require("./623529.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    guildId: t
  } = e, n = (0, s.bG)([u.A], () => u.A.getGuild(t));
  return l()(null != n, "Guild not found"), (0, r.jsxs)(c.ZV, {
    guildId: t,
    children: [(0, r.jsx)(o.A, {
      children: f.intl.string(f.t["WMyX2+"])
    }), (0, r.jsx)(a.hKd, {
      size: 32
    }), (0, r.jsx)(d.A, {
      guild: n,
      isGuildProducts: true
    })]
  })
}