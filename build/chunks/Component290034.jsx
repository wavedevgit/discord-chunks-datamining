/** Chunk was on web.js **/
/** chunk id: 290034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk297700 = require("./297700.jsx"),
  Chunk471885 = require("./471885.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk446005 = require("./446005.js");
let u = {
    [Chunk981631.Eu4.NONE]: Chunk446005.iconBackgroundTierNone,
    [Chunk981631.Eu4.TIER_1]: Chunk446005.iconBackgroundTierOne,
    [Chunk981631.Eu4.TIER_2]: Chunk446005.iconBackgroundTierTwo,
    [Chunk981631.Eu4.TIER_3]: Chunk446005.iconBackgroundTierThree
  },
  d = {
    [Chunk981631.Eu4.NONE]: Chunk446005.iconTierNone,
    [Chunk981631.Eu4.TIER_1]: Chunk446005.iconTierOne,
    [Chunk981631.Eu4.TIER_2]: Chunk446005.iconTierTwo,
    [Chunk981631.Eu4.TIER_3]: Chunk446005.iconTierThree
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