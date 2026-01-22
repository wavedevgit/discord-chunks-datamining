/** Chunk was on web.js **/
/** chunk id: 53705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s,
  L: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk154323 = require("./154323.js");

function a(e, t) {
  let n = "boolean" == typeof t ? t : !i.A.get(e);
  r.h.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: n
  })
}

function s() {
  for (let e in i.A.enabled()) a(e, false)
}