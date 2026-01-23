/** Chunk was on 26489 **/
/** chunk id: 509870, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk851746 = require("./851746.js"),
  Chunk985018 = require("./985018.jsx");
let C = e => {
  let {
    numNewSelected: t,
    anySelected: i
  } = e, s = (0, r.bG)([l.A], () => l.A.getReferralsRemaining());
  a()(null != s, "Referrals remaining should not be null");
  let C = s - t;
  return 0 === s ? n.intl.string(n.t.mPmPri) : 0 !== t || i ? 1 === C ? n.intl.string(n.t.UfPk1t) : C > 0 ? n.intl.formatToPlainString(n.t.hZnIz4, {
    numFriends: C
  }) : n.intl.formatToPlainString(n.t["3PJw6c"], {
    numReferrals: s
  }) : n.intl.formatToPlainString(n.t.GcKM5Z, {
    numReferrals: s
  })
}