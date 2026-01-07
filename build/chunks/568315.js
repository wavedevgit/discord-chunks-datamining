/** Chunk was on 54844 **/
/** chunk id: 568315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk106351 = require("./106351.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk82554 = require("./82554.js"),
  Chunk388032 = require("./388032.jsx");
let o = {
  getTitle: () => s.intl.string(s.t.vJOqMB),
  getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
  getDescription: () => s.intl.string(s.t["43UEUh"]),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_SPAM],
  eligibleChannelTypes: [Chunk106351.d.DM, Chunk106351.d.GROUP_DM],
  onApply: () => i.Xr.updateSetting(l.Xr.NON_FRIENDS),
  predicate: () => i.Xr.getSetting() === l.Xr.DISABLED
}