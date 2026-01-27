/** Chunk was on 12236 **/
/** chunk id: 129443, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk478437 = require("./478437.js"),
  Chunk873298 = require("./873298.js"),
  Chunk253932 = require("./253932.js"),
  Chunk17372 = require("./17372.js"),
  Chunk985018 = require("./985018.jsx");
let o = {
  getTitle: () => s.intl.string(s.t.vJOqMB),
  getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
  getDescription: () => s.intl.string(s.t["43UEUh"]),
  eligibleReportSubtypes: [Chunk17372.TS.SUB_SPAM],
  eligibleChannelTypes: [Chunk478437.r.DM, Chunk478437.r.GROUP_DM],
  onApply: () => i.he.updateSetting(r.he.NON_FRIENDS),
  predicate: () => i.he.getSetting() === r.he.DISABLED
}