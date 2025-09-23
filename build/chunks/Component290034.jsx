/** Chunk was on web.js **/
/** chunk id: 290034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk297700 = require("./297700.jsx"),
  Chunk471885 = require("./471885.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk508850 = require("./508850.js");
let u = {
    [Chunk981631.Eu4.NONE]: Chunk508850.iconBackgroundTierNone,
    [Chunk981631.Eu4.TIER_1]: Chunk508850.iconBackgroundTierOne,
    [Chunk981631.Eu4.TIER_2]: Chunk508850.iconBackgroundTierTwo,
    [Chunk981631.Eu4.TIER_3]: Chunk508850.iconBackgroundTierThree
  },
  d = {
    [Chunk981631.Eu4.NONE]: Chunk508850.iconTierNone,
    [Chunk981631.Eu4.TIER_1]: Chunk508850.iconTierOne,
    [Chunk981631.Eu4.TIER_2]: Chunk508850.iconTierTwo,
    [Chunk981631.Eu4.TIER_3]: Chunk508850.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: i,
    size: l
  } = e;
  return (0, r.jsx)(o.Z, {
    className: a()(n, u[t]),
    size: l,
    children: (0, r.jsx)(s.Z, {
      tier: t,
      color: "currentColor",
      className: a()(i, c.boostedGuildIconGem, d[t])
    })
  })
}