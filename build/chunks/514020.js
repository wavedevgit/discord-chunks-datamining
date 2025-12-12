/** Chunk was on 47435 **/
/** chunk id: 514020, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk276444 = require("./276444.js"),
  Chunk388032 = require("./388032.jsx");
let o = e => {
  let {
    numNewSelected: t,
    anySelected: r
  } = e, i = (0, s.e7)([n.Z], () => n.Z.getReferralsRemaining());
  a()(null != i, "Referrals remaining should not be null");
  let o = i - t;
  return 0 === i ? l.intl.string(l.t.mPmPri) : 0 !== t || r ? 1 === o ? l.intl.string(l.t.UfPk1t) : o > 0 ? l.intl.formatToPlainString(l.t.hZnIz4, {
    numFriends: o
  }) : l.intl.formatToPlainString(l.t["3PJw6c"], {
    numReferrals: i
  }) : l.intl.formatToPlainString(l.t.GcKM5Z, {
    numReferrals: i
  })
}