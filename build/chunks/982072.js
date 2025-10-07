/** Chunk was on 75962 **/
/** chunk id: 982072, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk907331 = require("./907331.js");

function a(e) {
  let {
    widgetType: t,
    onAction: r
  } = e, [a, o] = (0, n.useState)(false), l = (0, n.useCallback)(e => {
    e && (r({
      action: "VIEW_WIDGET",
      widgetType: t
    }), o(true))
  }, [r, t]);
  return (0, i.O)(l, true, !a)
}