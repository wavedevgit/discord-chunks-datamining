/** Chunk was on 4670 **/
/** chunk id: 231137, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  q: () => o
});
var Chunk506774 = require("./506774.js"),
  Chunk419954 = require("./419954.js"),
  Chunk661191 = require("./661191.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js");
let u = new Date("2018-01-01"),
  o = (0, Chunk419954.Tf)(Chunk780964.X.CHANGE_LOG_CLEAR, {
    useTitle: () => "Clear Change Log",
    useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
    useLabel: () => "Clear",
    useDisabled: () => r.pK.useSetting() === s.default.fromTimestamp(u.getTime()),
    onClick: () => (n.w.set("lastChangeLogDate", u), r.pK.updateSetting(s.default.fromTimestamp(u.getTime())))
  })