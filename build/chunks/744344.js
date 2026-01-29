/** Chunk was on 4670 **/
/** chunk id: 744344, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  r: () => c
}), require("./228524.js");
var Chunk311907 = require("./311907.js"),
  Chunk684013 = require("./684013.js"),
  Chunk592598 = require("./592598.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk790076 = require("./790076.jsx"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk790076.ze)(true);

function T(e) {
  return (0, r.zD)(e.key, {
    useTitle: () => o.intl.string(e.title),
    useSubtitle: () => o.intl.string(e.description),
    useValue: () => !(0, n.bG)([s.A], () => s.A.getDisabledNotifications().has(e.disabledSetting)),
    setValue: t => {
      l.A.setNotificationDisabledSetting(e.disabledSetting, !t)
    },
    usePredicate: e.usePredicate
  })
}
let c = (0, Chunk419954.FW)(Chunk780964.X.OVERLAY_NOTIFICATIONS_LIST, {
  buildLayout: () => d.map(T)
})