/** Chunk was on 2827 **/
/** chunk id: 986666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk782844 = require("./782844.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk871930 = require("./871930.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p() {
  return (0, r.jsx)(o.h, {
    setting: d.H.PRIVACY_DATA_BASIC_SERVICE_V2,
    children: (0, r.jsx)(o._, {
      header: _.intl.string(_.t.D60Gfj),
      description: _.intl.format(_.t.R5N31P, {
        onClick: () => {
          let e = (0, l.WJ)("DataUsageDisclaimer");
          (0, a.openUserSettings)(e ? i.X.ACCOUNT_REMOVAL_SETTING : i.X.ACCOUNT_PANEL, {
            section: u.nc_.ACCOUNT,
            subsection: s.D.SECURITY,
            scrollPosition: e ? true : c.Ew.AccountScrollPositions.DISABLE_ACCOUNT
          })
        }
      })
    })
  })
}