/** Chunk was on web.js **/
/** chunk id: 290034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk297700 = require("./297700.jsx"),
  Chunk471885 = require("./471885.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk306641 = require("./306641.js");
let u = {
    [Chunk981631.Eu4.NONE]: Chunk306641.iconBackgroundTierNone,
    [Chunk981631.Eu4.TIER_1]: Chunk306641.iconBackgroundTierOne,
    [Chunk981631.Eu4.TIER_2]: Chunk306641.iconBackgroundTierTwo,
    [Chunk981631.Eu4.TIER_3]: Chunk306641.iconBackgroundTierThree
  },
  d = {
    [Chunk981631.Eu4.NONE]: Chunk306641.iconTierNone,
    [Chunk981631.Eu4.TIER_1]: Chunk306641.iconTierOne,
    [Chunk981631.Eu4.TIER_2]: Chunk306641.iconTierTwo,
    [Chunk981631.Eu4.TIER_3]: Chunk306641.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: i,
    size: l
  } = e;
  return (0, r.jsx)(a.Z, {
    className: o()(n, u[t]),
    size: l,
    children: (0, r.jsx)(s.Z, {
      tier: t,
      color: "currentColor",
      className: o()(i, c.boostedGuildIconGem, d[t])
    })
  })
}