/** Chunk was on 47793 **/
/** chunk id: 982072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk907331 = require("./907331.js");

function a(e) {
  let {
    widgetType: t,
    onAction: n
  } = e, [a, l] = (0, r.useState)(false), o = (0, r.useCallback)(e => {
    e && (n({
      action: "VIEW_WIDGET",
      widgetType: t
    }), l(true))
  }, [n, t]);
  return (0, i.O)(o, true, !a)
}