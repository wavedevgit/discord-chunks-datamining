/** Chunk was on 13859 **/
/** chunk id: 982072, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk907331 = require("./907331.js");

function o(e) {
  let {
    widgetType: t,
    onAction: r
  } = e, [o, a] = (0, n.useState)(false), l = (0, n.useCallback)(e => {
    e && (r({
      action: "VIEW_WIDGET",
      widgetType: t
    }), a(true))
  }, [r, t]);
  return (0, i.O)(l, true, !o)
}