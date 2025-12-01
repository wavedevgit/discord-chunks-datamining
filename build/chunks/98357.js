/** Chunk was on 837 **/
/** chunk id: 98357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk570140 = require("./570140.js"),
  Chunk432877 = require("./432877.js");

function l(e, t) {
  let n = "boolean" == typeof t ? t : !r.ZP.get(e);
  a.Z.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: n
  })
}