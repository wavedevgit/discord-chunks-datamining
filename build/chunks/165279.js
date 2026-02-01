/** Chunk was on 30485 **/
/** chunk id: 165279, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  z: () => T
});
var Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk782844 = require("./782844.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.v_)(Chunk780964.X.DATA_USAGE_DISCLAIMER_SETTING, {
  useTitle: () => d.intl.string(d.t.D60Gfj),
  useSubtitle: () => d.intl.format(d.t.R5N31P, {
    onClick: () => {
      let t = (0, s.WJ)("DataUsageDisclaimerSetting");
      (0, u.openUserSettings)(t ? l.X.ACCOUNT_REMOVAL_SETTING : l.X.ACCOUNT_PANEL, {
        section: o.nc_.ACCOUNT,
        subsection: r.D.SECURITY,
        scrollPosition: t ? true : a.Ew.AccountScrollPositions.DISABLE_ACCOUNT
      })
    }
  })
})