/** Chunk was on 47435 **/
/** chunk id: 514020, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk276444 = require("./276444.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let {
    numNewSelected: t,
    anySelected: r
  } = e, a = (0, s.e7)([n.Z], () => n.Z.getReferralsRemaining());
  i()(null != a, "Referrals remaining should not be null");
  let o = a - t;
  return 0 === a ? l.intl.string(l.t.mPmPrq) : 0 !== t || r ? 1 === o ? l.intl.string(l.t.UfPk1t) : o > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, {
    numFriends: o
  }) : l.intl.formatToPlainString(l.t["3PJw6e"], {
    numReferrals: a
  }) : l.intl.formatToPlainString(l.t.GcKM5e, {
    numReferrals: a
  })
}