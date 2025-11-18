/** Chunk was on 11080 **/
/** chunk id: 982072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk931847 = require("./931847.js");

function l(e) {
  let {
    widget: t,
    onAction: n
  } = e, [l, o] = (0, r.useState)(false), c = (0, r.useCallback)(e => {
    e && (n({
      action: "VIEW_WIDGET",
      widgetType: t.type,
      applicationId: t instanceof a.q ? t.applicationId : true
    }), o(true))
  }, [n, t]);
  return (0, i.O)(c, true, !l)
}