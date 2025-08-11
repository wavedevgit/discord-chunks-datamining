/** Chunk was on 93886 **/
/** chunk id: 98357, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk432877 = require("./432877.js");

function l(e, t) {
  let a = "boolean" == typeof t ? t : !r.ZP.get(e);
  n.Z.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: a
  })
}