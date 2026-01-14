/** Chunk was on 77069 **/
/** chunk id: 947199, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk393681 = require("./393681.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.n4)(Chunk313789.n.DATA_USAGE_DISCLAIMER_SETTING, {
  useTitle: () => T.intl.string(T.t.D60Gfj),
  useSubtitle: () => T.intl.format(T.t.R5N31P, {
    onClick: () => {
      let t = (0, s.Gl)("DataUsageDisclaimerSetting");
      (0, r.openUserSettings)(t ? l.n.ACCOUNT_REMOVAL_SETTING : l.n.ACCOUNT_PANEL, {
        section: o.oAB.ACCOUNT,
        subsection: u.D.SECURITY,
        scrollPosition: t ? true : a.KQ.AccountScrollPositions.DISABLE_ACCOUNT
      })
    }
  })
})