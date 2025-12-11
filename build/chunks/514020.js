/** Chunk was on 47435 **/
/** chunk id: 514020, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk276444 = require("./276444.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  let {
    numNewSelected: t,
    anySelected: a
  } = e, r = (0, s.e7)([n.Z], () => n.Z.getReferralsRemaining());
  i()(null != r, "Referrals remaining should not be null");
  let d = r - t;
  return 0 === r ? l.intl.string(l.t.mPmPri) : 0 !== t || a ? 1 === d ? l.intl.string(l.t.UfPk1t) : d > 0 ? l.intl.formatToPlainString(l.t.hZnIz4, {
    numFriends: d
  }) : l.intl.formatToPlainString(l.t["3PJw6c"], {
    numReferrals: r
  }) : l.intl.formatToPlainString(l.t.GcKM5Z, {
    numReferrals: r
  })
}