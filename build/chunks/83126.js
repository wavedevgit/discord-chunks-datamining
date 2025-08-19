/** Chunk was on 1056 **/
/** chunk id: 83126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk592204 = require("./592204.js"),
  Chunk131681 = require("./131681.js"),
  Chunk695346 = require("./695346.js"),
  Chunk82554 = require("./82554.js"),
  Chunk388032 = require("./388032.jsx");
let s = {
  getTitle: () => Chunk388032.intl.string(Chunk388032.t.DPVOLS),
  getDisabledTitle: () => Chunk388032.intl.string(Chunk388032.t["B/dag4"]),
  getDescription: () => Chunk388032.intl.string(Chunk388032.t["+Esd3N"]),
  eligibleReportSubtypes: [Chunk82554.i5.SUB_GENERAL_HARASSMENT, Chunk82554.i5.SUB_RACIST_OR_DICRIMINATORY_LANGUAGE_OR_IMAGERY, Chunk82554.i5.SUB_VULGAR_LANGUAGE],
  onApply: () => Chunk695346.gw.updateSetting({
    profanity: true,
    slurs: true,
    sexualContent: true
  }),
  predicate: () => (0, Chunk592204.pB)({
    location: "iar_settings_upsells"
  }) && !(0, Chunk131681.U)()
}