/** Chunk was on web.js **/
/** chunk id: 2697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk496885 = require("./496885.jsx"),
  Chunk313375 = require("./313375.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk643849 = require("./643849.js");
let u = {
    [Chunk652215.TVA.NONE]: Chunk643849.md,
    [Chunk652215.TVA.TIER_1]: Chunk643849.Yl,
    [Chunk652215.TVA.TIER_2]: Chunk643849.ut,
    [Chunk652215.TVA.TIER_3]: Chunk643849.UB
  },
  d = {
    [Chunk652215.TVA.NONE]: Chunk643849.W7,
    [Chunk652215.TVA.TIER_1]: Chunk643849.A1,
    [Chunk652215.TVA.TIER_2]: Chunk643849.kO,
    [Chunk652215.TVA.TIER_3]: Chunk643849.uq
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: i,
    size: l
  } = e;
  return (0, r.jsx)(o.A, {
    className: a()(n, u[t]),
    size: l,
    children: (0, r.jsx)(s.A, {
      tier: t,
      color: "currentColor",
      className: a()(i, c.AH, d[t])
    })
  })
}