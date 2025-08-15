/** Chunk was on 30202 **/
/** chunk id: 581612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s,
  q: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk91311 = require("./91311.js");

function s(e, t) {
  let n = "boolean" == typeof t ? t : !r.Z.get(e);
  i.Z.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: n
  })
}

function a() {
  for (let e in Chunk91311.Z.enabled()) s(module, false)
}