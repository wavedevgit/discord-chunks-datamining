/** Chunk was on 28979 **/
/** chunk id: 744344, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  r: () => d
}), require("./228524.js");
var Chunk311907 = require("./311907.js"),
  Chunk684013 = require("./684013.js"),
  Chunk592598 = require("./592598.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk790076 = require("./790076.jsx"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk790076.ze)(true);

function A(t) {
  return (0, r.zD)(t.key, {
    useTitle: () => o.intl.string(t.title),
    useSubtitle: () => o.intl.string(t.description),
    useValue: () => !(0, n.bG)([s.A], () => s.A.getDisabledNotifications().has(t.disabledSetting)),
    setValue: e => {
      l.A.setNotificationDisabledSetting(t.disabledSetting, !e)
    },
    usePredicate: t.usePredicate
  })
}
let d = (0, Chunk419954.FW)(Chunk780964.X.OVERLAY_NOTIFICATIONS_LIST, {
  variant: "separators",
  buildLayout: () => T.map(A)
})