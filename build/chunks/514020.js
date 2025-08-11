/** Chunk was on 83667 **/
/** chunk id: 514020, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk276444 = require("./276444.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  let {
    numNewSelected: t,
    anySelected: s
  } = e, n = (0, a.e7)([i.Z], () => i.Z.getReferralsRemaining());
  r()(null != n, "Referrals remaining should not be null");
  let d = n - t;
  return 0 === n ? l.intl.string(l.t.mPmPrq) : 0 !== t || s ? 1 === d ? l.intl.string(l.t.UfPk1t) : d > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, {
    numFriends: d
  }) : l.intl.formatToPlainString(l.t["3PJw6e"], {
    numReferrals: n
  }) : l.intl.formatToPlainString(l.t.GcKM5e, {
    numReferrals: n
  })
}