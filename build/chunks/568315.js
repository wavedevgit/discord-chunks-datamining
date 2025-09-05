/** Chunk was on 55777 **/
/** chunk id: 568315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk106351 = require("./106351.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk82554 = require("./82554.js"),
  Chunk388032 = require("./388032.jsx");
let s = {
  getTitle: () => Chunk388032.intl.string(Chunk388032.t.vJOqMD),
  getDisabledTitle: () => Chunk388032.intl.string(Chunk388032.t.B5ZvY2),
  getDescription: () => Chunk388032.intl.string(Chunk388032.t["43UEUl"]),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_SPAM],
  eligibleChannelTypes: [Chunk106351.d.DM, Chunk106351.d.GROUP_DM],
  onApply: () => Chunk695346.Xr.updateSetting(Chunk524437.Xr.NON_FRIENDS),
  predicate: () => Chunk695346.Xr.getSetting() === Chunk524437.Xr.DISABLED
}