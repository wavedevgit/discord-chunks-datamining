/** Chunk was on web.js **/
/** chunk id: 581612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  q: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk91311 = require("./91311.js");

function a(e, t) {
  let n = "boolean" == typeof t ? t : !i.Z.get(e);
  r.Z.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: n
  })
}

function o() {
  for (let e in Chunk91311.Z.enabled()) a(module, false)
}