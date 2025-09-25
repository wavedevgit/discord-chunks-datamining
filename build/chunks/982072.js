/** Chunk was on 53714 **/
/** chunk id: 982072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk434650 = require("./434650.js");

function o(e) {
  let {
    widgetType: t,
    onAction: n
  } = e, [o, a] = (0, r.useState)(false), l = (0, r.useCallback)(e => {
    e && (n({
      action: "VIEW_WIDGET",
      widgetType: t
    }), a(true))
  }, [n, t]);
  return (0, i.O)(l, true, !o)
}