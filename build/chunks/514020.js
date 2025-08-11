/** Chunk was on 83667 **/
/** chunk id: 514020, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk512722 = require("./512722.js"),
  n = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk276444 = require("./276444.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
  let {
    numNewSelected: t,
    anySelected: s
  } = e, r = (0, a.e7)([i.Z], () => i.Z.getReferralsRemaining());
  n()(null != r, "Referrals remaining should not be null");
  let c = r - t;
  return 0 === r ? l.intl.string(l.t.mPmPrq) : 0 !== t || s ? 1 === c ? l.intl.string(l.t.UfPk1t) : c > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, {
    numFriends: c
  }) : l.intl.formatToPlainString(l.t["3PJw6e"], {
    numReferrals: r
  }) : l.intl.formatToPlainString(l.t.GcKM5e, {
    numReferrals: r
  })
}