/** Chunk was on web.js **/
/** chunk id: 514020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk276444 = require("./276444.js"),
  Chunk388032 = require("./388032.jsx");
let l = e => {
  let {
    numNewSelected: t,
    anySelected: n
  } = e, r = (0, a.e7)([o.Z], () => o.Z.getReferralsRemaining());
  i()(null != r, "Referrals remaining should not be null");
  let l = r - t;
  return 0 === r ? s.intl.string(s.t.mPmPrq) : 0 !== t || n ? 1 === l ? s.intl.string(s.t.UfPk1t) : l > 0 ? s.intl.formatToPlainString(s.t.hZnIz8, {
    numFriends: l
  }) : s.intl.formatToPlainString(s.t["3PJw6e"], {
    numReferrals: r
  }) : s.intl.formatToPlainString(s.t.GcKM5e, {
    numReferrals: r
  })
}