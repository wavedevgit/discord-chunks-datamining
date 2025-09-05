/** Chunk was on 1267 **/
/** chunk id: 982072, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk434650 = require("./434650.js");

function l(e) {
  let {
    widgetType: t,
    onAction: r
  } = e, [l, o] = (0, n.useState)(false), a = (0, n.useCallback)(e => {
    e && (r({
      action: "VIEW_WIDGET",
      widgetType: t
    }), o(true))
  }, [r, t]);
  return (0, i.O)(a, true, !l)
}